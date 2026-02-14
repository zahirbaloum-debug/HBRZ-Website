import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { validatePort, waitForServer } from './utils.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = Number.parseInt(process.env.VITE_PREVIEW_PORT || '4173', 10);
validatePort(PORT, 'VITE_PREVIEW_PORT');

let serverProcess = null;
let prerenderProcess = null;
let serverStarted = false;
let serverFailed = false;

function cleanup() {
  if (prerenderProcess) {
    console.log('\n🛑 Stopping prerender process...');
    try {
      prerenderProcess.kill();
    } catch (error) {
      // Process may already be dead
    }
  }
  if (serverProcess) {
    console.log('\n🛑 Stopping preview server...');
    try {
      serverProcess.kill();
    } catch (error) {
      // Process may already be dead
    }
  }
}

process.on('SIGINT', () => {
  cleanup();
  process.exit(0);
});

process.on('SIGTERM', () => {
  cleanup();
  process.exit(0);
});

// Note: 'exit' event cannot handle async operations
// Cleanup is handled by SIGINT/SIGTERM handlers only

async function waitForServerWithFailCheck(
  url,
  maxAttempts = 30,
  interval = 1000,
) {
  // Check server failed flag before each attempt
  const checkInterval = setInterval(() => {
    if (serverFailed) {
      clearInterval(checkInterval);
    }
  }, 100);

  try {
    await waitForServer(url, maxAttempts, interval);
    clearInterval(checkInterval);
    if (serverFailed) {
      throw new Error('Server process failed to start');
    }
    serverStarted = true;
    return true;
  } catch (error) {
    clearInterval(checkInterval);
    throw error;
  }
}

async function main() {
  try {
    // Start Vite preview server
    console.log(`🚀 Starting Vite preview server on port ${PORT}...`);

    serverProcess = spawn(
      'npx',
      ['vite', 'preview', '--port', PORT.toString()],
      {
        stdio: 'inherit',
        shell: true,
        cwd: path.resolve(__dirname, '..'),
      },
    );

    serverProcess.on('error', (error) => {
      console.error('Failed to start server:', error);
      serverFailed = true;
      cleanup();
      process.exit(1);
    });

    serverProcess.on('exit', (code) => {
      // Handle any server exit after it has started
      if (serverStarted) {
        console.error(`Server process exited unexpectedly with code ${code}`);
        serverFailed = true;
        // Kill prerender process if it's running
        if (prerenderProcess) {
          console.error('Killing prerender process due to server exit...');
          try {
            prerenderProcess.kill();
          } catch (error) {
            // Process may already be dead
          }
        }
        // Exit the main process since the build has failed
        setTimeout(() => {
          cleanup();
          process.exit(1);
        }, 100); // Small delay to allow prerender process to be killed
      } else if (code !== 0) {
        // Server failed before starting
        console.error(`Server process exited with code ${code}`);
        serverFailed = true;
        cleanup();
        process.exit(1);
      }
    });

    // Wait for server to be ready with health checks
    await waitForServerWithFailCheck(`http://localhost:${PORT}`);

    // Run prerender script
    console.log('\n📦 Running prerender script...\n');

    prerenderProcess = spawn('node', ['scripts/prerender.mjs'], {
      stdio: 'inherit',
      shell: true,
      cwd: path.resolve(__dirname, '..'),
      env: { ...process.env, VITE_PREVIEW_PORT: PORT.toString() },
    });

    prerenderProcess.on('close', (code) => {
      cleanup();
      if (code !== 0) {
        console.error(`\n❌ Prerender process exited with code ${code}`);
        process.exit(code);
      }
      console.log('\n✅ Build and prerender complete!');
      process.exit(0);
    });

    prerenderProcess.on('error', (error) => {
      console.error('Failed to run prerender:', error);
      cleanup();
      process.exit(1);
    });
  } catch (error) {
    console.error('Error:', error);
    cleanup();
    process.exit(1);
  }
}

main();

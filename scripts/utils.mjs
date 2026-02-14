import http from 'node:http';

/**
 * Validates that a port number is valid
 * @param {number} port - The port number to validate
 * @param {string} envVarName - The environment variable name for error messages
 * @throws {Error} If port is invalid
 */
export function validatePort(port, envVarName = 'PORT') {
  if (Number.isNaN(port)) {
    const originalValue = process.env[envVarName] || 'undefined';
    throw new Error(
      `Invalid port: "${originalValue}" is not a valid number. ${envVarName} must be a number between 1 and 65535.`,
    );
  }
  if (port < 1 || port > 65535) {
    throw new Error(
      `Invalid port: ${port}. ${envVarName} must be between 1 and 65535.`,
    );
  }
}

/**
 * Waits for a server to become available by performing HTTP health checks
 * @param {string} url - The URL to check
 * @param {number} maxAttempts - Maximum number of attempts (default: 30)
 * @param {number} interval - Interval between attempts in ms (default: 1000)
 * @returns {Promise<boolean>} Returns true when server is ready
 * @throws {Error} If server doesn't become available within maxAttempts
 */
export async function waitForServer(url, maxAttempts = 30, interval = 1000) {
  for (let i = 0; i < maxAttempts; i++) {
    try {
      await new Promise((resolve, reject) => {
        let handled = false;
        const req = http.get(url, { timeout: 5000 }, (res) => {
          res.resume(); // Consume response to free up resources
          // Accept any response as "server is ready" - we just need to know it's responding
          // A 404 or redirect still means the server is up and running
          handled = true;
          resolve();
        });
        req.on('error', (error) => {
          if (!handled) {
            handled = true;
            reject(error);
          }
        });
        req.on('timeout', () => {
          if (!handled) {
            handled = true;
            req.destroy();
            reject(new Error('Request timeout'));
          }
        });
        req.end();
      });
      console.log(`✓ Server is ready at ${url}`);
      return true;
    } catch (error) {
      if (i === maxAttempts - 1) {
        throw new Error(
          `Server not available at ${url} after ${maxAttempts} attempts`,
        );
      }
      await new Promise((resolve) => setTimeout(resolve, interval));
    }
  }
  // This line is technically unreachable but included for completeness
  throw new Error(`Server not available at ${url}`);
}

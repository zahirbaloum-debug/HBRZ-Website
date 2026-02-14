import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';
import { validatePort, waitForServer } from './utils.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.resolve(__dirname, '../dist');
const PORT = Number.parseInt(process.env.VITE_PREVIEW_PORT || '4173', 10);
validatePort(PORT, 'VITE_PREVIEW_PORT');
const BASE_URL = `http://localhost:${PORT}`;

let browser = null;

function cleanup() {
  if (browser) {
    console.log('\n🛑 Closing browser...');
    browser.close().catch(() => {});
    browser = null;
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

// Note: 'exit' event cannot handle async operations like browser.close()
// Cleanup is handled by SIGINT/SIGTERM handlers only

const routes = [
  '/',
  '/about',
  '/about/mission',
  '/about/strategy',
  '/about/people',
  '/about/careers',
  '/services',
  '/services/trading',
  '/services/consulting',
  '/services/it',
  '/compliance',
  '/insights',
  '/contact',
];

// Validate all routes start with '/'
for (const route of routes) {
  if (!route.startsWith('/')) {
    throw new Error(
      `Invalid route format: "${route}". All routes must start with "/"`,
    );
  }
}

async function prerender() {
  console.log('🚀 Starting pre-rendering...\n');

  // Validate dist directory exists
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Build directory not found: ${distPath}. Run 'vite build' first.`,
    );
  }

  // Wait for server to be ready
  await waitForServer(BASE_URL);

  browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const failedRoutes = [];
  const routesWithMissingMeta = [];

  try {
    for (const route of routes) {
      // Create a new page for each route to avoid state leakage
      let page = null;
      try {
        page = await browser.newPage();
        const url = `${BASE_URL}${route}`;
        console.log(`📄 Pre-rendering: ${route}`);

        await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

        // Wait for React to hydrate and @unhead to inject meta tags
        try {
          await page.waitForFunction(
            () => {
              const metaTitle = document.querySelector(
                'meta[property="og:title"]',
              );
              const metaDescription = document.querySelector(
                'meta[name="description"]',
              );
              return metaTitle !== null && metaDescription !== null;
            },
            { timeout: 5000 },
          );
        } catch (timeoutError) {
          // Fallback to short wait if meta tags don't appear
          console.log(
            '   ⚠ Meta tags not detected within timeout, using fallback wait',
          );
          routesWithMissingMeta.push(route);
          await new Promise((resolve) => setTimeout(resolve, 1000));
        }

        const html = await page.content();

        const filePath =
          route === '/'
            ? path.join(distPath, 'index.html')
            : path.join(distPath, route, 'index.html');

        const dir = path.dirname(filePath);
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }

        fs.writeFileSync(filePath, html);
        console.log(`   ✓ Saved to: ${filePath.replace(distPath, 'dist')}`);
      } catch (error) {
        console.error(`   ✗ Error pre-rendering ${route}:`, error.message);
        failedRoutes.push(route);
      } finally {
        if (page) {
          await page.close();
        }
      }
    }
  } finally {
    if (browser) {
      await browser.close();
      browser = null;
    }
  }

  if (routesWithMissingMeta.length > 0) {
    console.warn(
      `\n⚠️  Warning: ${routesWithMissingMeta.length} route(s) may have incomplete SEO metadata: ${routesWithMissingMeta.join(', ')}`,
    );
  }

  if (failedRoutes.length > 0) {
    console.error(
      `\n❌ Pre-rendering failed for ${failedRoutes.length} route(s): ${failedRoutes.join(', ')}`,
    );
    process.exit(1);
  }

  console.log('\n✅ Pre-rendering complete!');
}

prerender().catch((error) => {
  console.error('Prerender failed:', error);
  cleanup();
  process.exit(1);
});

# Pre-rendering Scripts

This directory contains scripts for pre-rendering the React application to static HTML files for improved SEO and initial page load performance.

## Overview

The pre-rendering process:

1. Builds the Vite application
2. Starts a preview server
3. Uses Puppeteer to visit each route
4. Captures the fully rendered HTML (including meta tags from @unhead)
5. Saves static HTML files for each route

## Scripts

### `start-and-prerender.mjs`

Cross-platform script that orchestrates the entire pre-rendering process:

- Starts the Vite preview server
- Waits for server initialization
- Runs the prerender script
- Handles cleanup and error cases

### `prerender.mjs`

Core pre-rendering logic:

- Waits for server availability with health checks
- Launches headless Chrome via Puppeteer
- Visits each route and captures rendered HTML
- Saves HTML files to the dist directory
- Tracks and reports failures

## Configuration

### Environment Variables

- `VITE_PREVIEW_PORT` - Port for the preview server (default: 4173)

### Routes

Routes are defined in `prerender.mjs`. Add new routes to the `routes` array:

```javascript
const routes = [
  "/",
  "/about",
  "/about/mission",
  // ... add more routes
];
```

## Usage

### Development

```bash
npm run build
```

This will:

1. Run `vite build`
2. Execute `start-and-prerender.mjs` which handles server startup and pre-rendering

### Manual Pre-rendering

```bash
# Start preview server in one terminal
npm run preview

# In another terminal, run prerender
node scripts/prerender.mjs
```

## Improvements & Bug Fixes

### Robustness Improvements

- **Server health checks**: Replaced hardcoded 2-second timeout with proper HTTP health checks
- **Race condition prevention**: Server startup failures now properly prevent prerender from starting
- **Resource management**: HTTP responses are properly consumed to prevent memory leaks
- **Process cleanup**: Server process is guaranteed to be killed on all exit paths
- **Page isolation**: Each route gets a fresh Puppeteer page to prevent state leakage
- **Build validation**: Script validates dist directory exists before attempting prerender
- **Error handling**: All errors properly exit with code 1 for CI/CD integration

### SPA Fallback

The `vercel.json` includes a rewrite rule to fall back to `/index.html` for:

- Routes not prerendered (e.g., new routes added after deployment)
- Client-side navigation
- Direct URL access to dynamic routes

## Troubleshooting

### Server Not Ready

If you see "Server not available" errors:

- Increase the `maxAttempts` in `waitForServer()` function
- Check if port 4173 is already in use
- Verify the build completed successfully
- Check server process logs for startup errors

### Pre-rendering Failures

If specific routes fail:

- Check browser console logs in the Puppeteer output
- Verify the route exists and renders correctly
- Increase the timeout in `page.goto()` for slow-loading pages
- Adjust the hydration wait time if meta tags aren't being captured
- Ensure the dist directory exists and contains the built files

### Cross-platform Issues

The scripts use Node.js `child_process.spawn()` with `shell: true` for cross-platform compatibility. If you encounter issues:

- Ensure Node.js 18+ is installed
- Check that `npx` is available in your PATH
- On Windows, ensure you're using PowerShell or CMD, not Git Bash

## Performance Considerations

### Hydration Wait Time

Currently set to 2 seconds (`prerender.mjs:73`). Adjust based on your app's complexity:

- Simple pages: 1000ms
- Complex pages with API calls: 3000-5000ms
- Consider implementing a more robust wait strategy (e.g., waiting for specific DOM elements)

### Server Health Check

The script waits up to 30 seconds for the server to be ready, checking every second. Adjust in `waitForServer()` if needed.

## Deployment

### Vercel

The `vercel.json` configuration is set up to:

- Use `cleanUrls: true` to serve `/about/index.html` for `/about` requests
- Serve static files first before falling back to SPA routing
- Apply security headers to all responses

### Other Platforms

Ensure your hosting platform:

1. Runs `npm run build` as the build command
2. Serves files from the `dist` directory
3. Has Node.js 18+ available during build
4. Supports running Puppeteer (may require additional dependencies on some platforms)

## Security

Puppeteer is launched with:

- `--no-sandbox` - Required for some CI/CD environments
- `--disable-setuid-sandbox` - Required for containerized environments

These flags are necessary but should only be used in trusted build environments.

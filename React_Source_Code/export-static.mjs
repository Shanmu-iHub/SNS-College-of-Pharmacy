import fs from 'node:fs/promises';
import path from 'node:path';
import app from './dist/index.js';

const routes = [
  { route: '/', file: 'index.html' },
  { route: '/academics/b-pharm', file: 'academics/b-pharm/index.html' },
  { route: '/academics/d-pharm', file: 'academics/d-pharm/index.html' },
  { route: '/academics/m-pharm', file: 'academics/m-pharm/index.html' },
  { route: '/academics/pharm-d', file: 'academics/pharm-d/index.html' },
  { route: '/facilities', file: 'facilities/index.html' },
  { route: '/innovation', file: 'innovation/index.html' },
  { route: '/about', file: 'about/index.html' },
  { route: '/contact', file: 'contact/index.html' },
  { route: '/mandatory-disclosure', file: 'mandatory-disclosure/index.html' },
  { route: '/admissions', file: 'admissions/index.html' },
  { route: '/gallery', file: 'gallery/index.html' },
  { route: '/sports-clubs', file: 'sports-clubs/index.html' },
  { route: '/brochure', file: 'brochure/index.html' },
  { route: '/transport', file: 'transport/index.html' },
  { route: '/events', file: 'events/index.html' },
  { route: '/success-stories', file: 'success-stories/index.html' },
];

async function ensureDir(filePath) {
  const dir = path.dirname(filePath);
  await fs.mkdir(dir, { recursive: true });
}

async function copyDir(src, dest) {
  // Node 18+ has fs.cp; fall back gracefully if unavailable
  if (fs.cp) {
    await fs.cp(src, dest, { recursive: true });
  } else {
    const entries = await fs.readdir(src, { withFileTypes: true });
    await fs.mkdir(dest, { recursive: true });
    for (const entry of entries) {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);
      if (entry.isDirectory()) {
        await copyDir(srcPath, destPath);
      } else if (entry.isFile()) {
        await fs.copyFile(srcPath, destPath);
      }
    }
  }
}

async function main() {
  const outRoot = path.join(process.cwd(), 'static-site');
  await fs.rm(outRoot, { recursive: true, force: true });
  await fs.mkdir(outRoot, { recursive: true });

  // Render and write HTML for each route using the existing Hono app
  for (const { route, file } of routes) {
    const res = await app.request(route);
    if (!res.ok) {
      console.error(`Failed to render ${route}: ${res.status} ${res.statusText}`);
      continue;
    }
    const html = await res.text();
    const outFile = path.join(outRoot, file);
    await ensureDir(outFile);
    await fs.writeFile(outFile, html, 'utf8');
    console.log(`Exported ${route} -> ${path.relative(outRoot, outFile)}`);
  }

  // Copy built assets so the HTML is fully functional
  const distImages = path.join(process.cwd(), 'dist', 'images');
  const distStatic = path.join(process.cwd(), 'dist', 'static');

  try {
    await copyDir(distImages, path.join(outRoot, 'images'));
    console.log('Copied images/ assets');
  } catch {
    console.warn('No dist/images directory found to copy.');
  }

  try {
    await copyDir(distStatic, path.join(outRoot, 'static'));
    console.log('Copied static/ assets');
  } catch {
    console.warn('No dist/static directory found to copy.');
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});


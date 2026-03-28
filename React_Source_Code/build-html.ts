import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { Layout } from './src/components/layout';
import { HomePage } from './src/pages/home';
import { BPharmPage, DPharmPage, MPharmPage, PharmDPage } from './src/pages/academics';
import { FacilitiesPage } from './src/pages/facilities';
import { InnovationPage, AboutPage, ContactPage, AdmissionsPage } from './src/pages/remaining';
import { MandatoryDisclosurePage } from './src/pages/mandatory-disclosure';
import { GalleryPage, SportsClubsPage, BrochurePage } from './src/pages/gallery-sports';
import { TransportPage } from './src/pages/transport';
import { EventsPage } from './src/pages/events';
import { SuccessStoriesPage } from './src/pages/success-stories';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outDir = path.join(__dirname, '../SNS-Pharmacy-HTML');

const routes = [
    { path: '/index.html', html: Layout(HomePage(), 'Home', 'home') },
    { path: '/academics/b-pharm.html', html: Layout(BPharmPage(), 'B. Pharm', 'academics-b-pharm') },
    { path: '/academics/d-pharm.html', html: Layout(DPharmPage(), 'D. Pharm', 'academics-d-pharm') },
    { path: '/academics/m-pharm.html', html: Layout(MPharmPage(), 'M. Pharm', 'academics-m-pharm') },
    { path: '/academics/pharm-d.html', html: Layout(PharmDPage(), 'Pharm. D', 'academics-pharm-d') },
    { path: '/facilities.html', html: Layout(FacilitiesPage(), 'Facilities', 'facilities') },
    { path: '/innovation.html', html: Layout(InnovationPage(), 'Innovation Hub', 'innovation') },
    { path: '/about.html', html: Layout(AboutPage(), 'About Us', 'about') },
    { path: '/contact.html', html: Layout(ContactPage(), 'Contact Us', 'contact') },
    { path: '/mandatory-disclosure.html', html: Layout(MandatoryDisclosurePage(), 'Mandatory Disclosure', 'mandatory-disclosure') },
    { path: '/admissions.html', html: Layout(AdmissionsPage(), 'Admissions', 'admissions') },
    { path: '/gallery.html', html: Layout(GalleryPage(), 'Campus Gallery', 'gallery') },
    { path: '/sports-clubs.html', html: Layout(SportsClubsPage(), 'SPINE & 100+ Clubs', 'sports-clubs') },
    { path: '/brochure.html', html: Layout(BrochurePage(), 'Digital Brochure', 'brochure') },
    { path: '/transport.html', html: Layout(TransportPage(), 'Transport Services', 'transport') },
    { path: '/events.html', html: Layout(EventsPage(), 'Events', 'events') },
    { path: '/success-stories.html', html: Layout(SuccessStoriesPage(), 'Placements', 'success-stories') },
];

function fixLinks(html: string, currentPath: string) {
    let fixed = html;

    // Map known routes
    const linksMap: Record<string, string> = {
        '/': 'index.html',
        '/academics/b-pharm': 'academics/b-pharm.html',
        '/academics/d-pharm': 'academics/d-pharm.html',
        '/academics/m-pharm': 'academics/m-pharm.html',
        '/academics/pharm-d': 'academics/pharm-d.html',
        '/facilities': 'facilities.html',
        '/innovation': 'innovation.html',
        '/about': 'about.html',
        '/contact': 'contact.html',
        '/mandatory-disclosure': 'mandatory-disclosure.html',
        '/admissions': 'admissions.html',
        '/gallery': 'gallery.html',
        '/sports-clubs': 'sports-clubs.html',
        '/brochure': 'brochure.html',
        '/transport': 'transport.html',
        '/events': 'events.html',
        '/success-stories': 'success-stories.html'
    };

    // Calculate relative path for prefixing
    const depth = currentPath.split('/').length - 2;
    const prefix = depth > 0 ? '../'.repeat(depth) : './';

    // Replace hrefs
    for (const [original, target] of Object.entries(linksMap)) {
        // Find href="/about" or href="/" etc
        const regex = new RegExp(`href="${original}"`, 'g');
        fixed = fixed.replace(regex, `href="${prefix}${target}"`);
    }

    // Fix static assets like /static/images/...
    fixed = fixed.replace(new RegExp('src="/static/', 'g'), `src="${prefix}static/`);
    fixed = fixed.replace(new RegExp('href="/static/', 'g'), `href="${prefix}static/`);

    // Also cover root /favicon.ico or similar if necessary, though we just care about /static

    return fixed;
}

// 1. Create OutDir
if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
}

// 2. Write HTML files
for (const route of routes) {
    const fullPath = path.join(outDir, route.path);
    const dir = path.dirname(fullPath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    // Fix up the links to be relative to the current file so it works anywhere
    const finalHtml = fixLinks(route.html, route.path);
    fs.writeFileSync(fullPath, finalHtml, 'utf8');
    console.log(`Wrote ${route.path}`);
}

// 3. Copy static folder (from public)
function copyRecursiveSync(src: string, dest: string) {
    const exists = fs.existsSync(src);
    if (!exists) return;
    const stats = fs.statSync(src);
    const isDirectory = stats.isDirectory();
    if (isDirectory) {
        if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
        fs.readdirSync(src).forEach(function (childItemName) {
            copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
        });
    } else {
        fs.copyFileSync(src, dest);
    }
}

const publicDir = path.join(__dirname, 'public');
if (fs.existsSync(publicDir)) {
    copyRecursiveSync(publicDir, outDir);
    console.log('Copied public folder successfully.');
}

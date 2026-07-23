/* src/sitemap.ts */
import { Metadata } from 'next';
import type { Metadata } from 'next';
import { allPages } from './data/sitemap';

// Generate a sitemap.xml based on Next.js pages
export const generateSitemap = async () => {
  return `<?xml version="1.0" encoding="UTF-8"?>
${allPages
  .map(
    page => `
<url>
  <loc>https://dheerajkumar.dev${page}</loc>
  <priority>${page === '/' ? '1.0' : '0.8'}</priority>
</url>`
  )
  .join('')}
</sitemap>`;
};

// Data for sitemap pages
const allPages = [
  '/',
  '/about',
  '/skills',
  '/experience',
  '/projects',
  '/certification',
  '/education',
  '/dashboard',
];
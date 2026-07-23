/* src/app/layout.tsx */
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Dheeraj Kumar | DevOps Dashboard',
  description: 'World‑class interactive DevOps portfolio and live dashboard.',
  authors: [{ name: 'Dheeraj Kumar' }],
  openGraph: {
    title: 'Dheeraj Kumar | DevOps Dashboard',
    description: 'World‑class interactive DevOps portfolio and live dashboard.',
    url: 'https://dheerajkumar.dev',
    images: [
      {
        url: '/favicon.ico',
        width: 32,
        height: 32,
        alt: 'Dheeraj Kumar logo',
      },
    ],
  },
  twitter: {
    cardImage: '/favicon.ico',
    title: 'Dheeraj Kumar | DevOps Dashboard',
    description: 'World‑class interactive DevOps portfolio and live dashboard.',
    site: '@dheerajkr7866',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${inter.variable}`} lang="en" suppressHydrationWarning={true}>
      <head>
        {/* Theme script - runs before paint to avoid flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (theme === 'dark' || (!theme && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Fira+Code:wght@400;500&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background text-foreground antialiased scroll-smooth overflow-x-hidden">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 flex items-center justify-between p-4 bg-background/90 backdrop-blur-lg shadow-sm z-50 sticky border-b border-white/10 dark:border-gray-800">
          <Link href="/" className="text-xl font-bold text-primary-500 flex items-center gap-2">
            <span>Dheeraj Kumar</span>
          </Link>
          <ul className="flex gap-6 hidden md:flex space-x-6">
            <li>
              <a href="#dashboard" className="text-primary-500 hover:text-primary-400 transition-colors">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#about" className="text-primary-500 hover:text-primary-400 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="text-primary-500 hover:text-primary-400 transition-colors">
                Skills
              </a>
            </li>
            <li>
              <a href="#experience" className="text-primary-500 hover:text-primary-400 transition-colors">
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" className="text-primary-500 hover:text-primary-400 transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="#certification" className="text-primary-500 hover:text-primary-400 transition-colors">
                Certification
              </a>
            </li>
            <li>
              <a href="#education" className="text-primary-500 hover:text-primary-400 transition-colors">
                Education
              </a>
            </li>
            <li className="ml-4">
              <button id="theme-toggle" className="text-sm text-foreground hover:text-primary-500">
                🌙 Dark
              </button>
            </li>
          </ul>
        </nav>

        {/* Main container */}
        <main className="pt-8 min-h-screen">
          {children}
        </main>

        {/* Footer */}
        <footer className="mt-16 py-12 border-t border-white/10 dark:border-gray-900 text-center text-sm text-foreground/60">
          © {new Date().getFullYear()} Dheeraj Kumar. Built with Next.js, React Three Fiber, and Framer Motion.
        </footer>

        {/* Theme toggle script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var btn = document.getElementById('theme-toggle');
                if (!btn) return;
                function updateBtn() {
                  btn.textContent = document.documentElement.classList.contains('dark') ? '☀️ Light' : '🌙 Dark';
                }
                btn.addEventListener('click', function() {
                  document.documentElement.classList.toggle('dark');
                  localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
                  updateBtn();
                });
                updateBtn();
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
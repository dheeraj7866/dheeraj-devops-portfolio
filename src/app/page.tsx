/* src/app/page.tsx */
import Hero from '@/components/Hero';
import Dashboard from '@/components/Dashboard';
import Stack from '@/components/Stack';

export default function HomePage(): NextPage {
  return (
    <RootLayout>
      {/* Navigation bar is in layout, so we just render content */}
      <main className="pt-8 min-h-screen">
        <Hero />
        <Dashboard />
        <Stack />
      </main>
    </RootLayout>
  );
}
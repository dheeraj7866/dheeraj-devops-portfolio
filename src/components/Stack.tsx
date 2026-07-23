/* src/components/Stack.tsx */
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Certification from './Certification';
import Education from './Education';

export default function Stack() {
  return (
    <main className="pt-8 min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certification />
      <Education />
    </main>
  );
}
/* src/components/About.tsx */
import { personal } from '@/data/resume';

export default function About() {
  return (
    <section id="about" className="max-w-5xl mx-auto px-4 py-16 space-y-12">
      <h2 className="text-3xl font-bold text-neon-purple mb-4 animate-fade-in">
        About Me
      </h2>
      <div className="bg-white dark:bg-gray-800 bg-opacity-90 rounded-xl p-8 shadow-lg animate-fade-in">
        <p className="text-lg mb-4">
          I’m a DevOps Engineer with 3+ years of experience building, automating, and scaling
          production‑grade infrastructure. My work blends strong security controls,
          high‑availability architectures, and observability‑first mindsets.
        </p>

        <p className="text-lg leading-relaxed">
          I thrive on turning complex, manual processes into repeatable, automated pipelines.
          Whether it’s provisioning cloud resources with IaC, orchestrating container workloads,
          or wiring up CI/CD pipelines that ship daily, I focus on reliability,
          performance, and measurable impact.
        </p>
      </div>
    </section>
  );
}
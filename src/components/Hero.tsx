/* src/components/Hero.tsx */
import { Link } from 'next/link';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function Hero() {
  const personal = {
    name: 'Dheeraj Kumar',
    title: 'DevOps Engineer | AWS · Azure · Kubernetes · CI/CD · Automation',
    location: 'Gurgaon, India',
    phone: '+91 74618 80072',
    email: 'dheerajkr7866@gmail.com',
    linkedin: 'https://linkedin.com/in/dheerajkr7866',
    github: 'https://github.com/dheerajkr7866',
    summary:
      'AWS Certified (SAA-C03) DevOps Engineer with 3+ years of hands-on experience across the full delivery lifecycle — Infrastructure as Code (Terraform, CloudFormation, Ansible), container orchestration (Docker, Kubernetes, Amazon ECS, Helm, ArgoCD/GitOps), and CI/CD pipeline ownership (Jenkins, GitHub Actions, GitLab). Operates production data and observability layers including PostgreSQL, RDS, ClickHouse, CloudWatch, Grafana, Prometheus, and Elasticsearch, with daily scripting in Python, Bash, PowerShell, and Java for automation and tooling. Strong background in incident response, root-cause troubleshooting, and configuration management for a regulated financial-services platform, working within Agile/SDLC delivery frameworks and JIRA-tracked workflows. Comfortable across AWS and Azure environments, with a security-first, automation-first mindset focused on reliability and reduced operational toil.',
  };

  return (
    <section className="relative">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-75 bg-gradient-to-br neon-gradient bg-white dark:bg-gray-900 bg-opacity-80" />
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-6 h-6 bg-purple-500 rounded-full animate-pulse-neon" />
        <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 rounded-full animate-pulse-neon" />
        <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-blue-500 rounded-full animate-pulse-neon" />
        <div className="absolute bottom-1/3 right-1/4 w-5 h-5 bg-yellow-500 rounded-full animate-pulse-neon" />
        <div className="absolute top-3/4 left-2/3 w-3 h-3 bg-pink-500 rounded-full animate-pulse-neon" />
        <div className="absolute bottom-1/2 left-1/5 w-7 h-7 bg-cyan-500 rounded-full animate-pulse-neon" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-96 py-16 px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-display text-neon-gradient bg-clip-text text-transparent mb-4 animate-neon-glow lg:animate-none">
          {personal.name}
        </h1>
        <p className="text-lg md:text-xl text-fg-primary max-w-2xl bg-white dark:bg-gray-800 bg-opacity-90 rounded-xl p-6 shadow-lg transition-transform duration-500 hover:scale-105">
          {personal.summary}
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          {/* Primary CTA */}
          <Link href="#about" className="px-6 py-3 bg-neon-gradient text-white rounded-full shadow-md hover:bg-neon-gradient/80 transition-transform duration-200 transform hover:scale-105">
            About Me
          </Link>

          {/* Secondary CTA */}
          <a href="https://github.com/dheerajkr7866" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white/10 dark:bg-gray-800 text-white rounded-full shadow-md hover:bg-white/20 transition-transform duration-200 transform hover:scale-105 flex items-center gap-2">
            <Github className="text-primary-500 h-4 w-4" /> Open Source
          </a>

          {/* Resume CTA */}
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-neon-green text-white rounded-full shadow-md hover:bg-neon-green/80 transition-transform duration-200 transform hover:scale-105">
            Download Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="mt-10 flex gap-3 flex-wrap">
          <a href="https://linkedin.com/in/dheerajkr7866" target="_blank" rel="noopener noreferrer" className="text-lg text-primary-500 hover:text-primary-400 transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://github.com/dheerajkr7866" target="_blank" rel="noopener noreferrer" className="text-lg text-primary-500 hover:text-primary-400 transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="mailto:dheerajkr7866@gmail.com" target="_blank" rel="noopener noreferrer" className="text-lg text-primary-500 hover:text-primary-400 transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
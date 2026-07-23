/* src/components/Projects.tsx */
import { projects } from '@/data/resume';
import { motion } from 'framer-motion';
import { ArrowRight, Database, Cloud, Server, Shield, Code, Gauge } from 'lucide-react';

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.01 }}
      className="glass p-6 rounded-xl border border-white/20 dark:border-gray-700 flex flex-col h-full"
    >
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-neon-blue mb-2">{project.title}</h3>
          <p className="text-sm text-foreground/70 mb-3">{project.description}</p>
        </div>

        <div className="border-l-2 border-neon-purple/30 pl-4 mb-4">
          <h4 className="font-semibold text-sm text-neon-purple mb-1">Problem</h4>
          <p className="text-sm text-foreground/80">{project.problem}</p>
        </div>

        <div className="border-l-2 border-neon-green/30 pl-4 mb-4">
          <h4 className="font-semibold text-sm text-neon-green mb-1">Solution</h4>
          <p className="text-sm text-foreground/80">{project.solution}</p>
        </div>

        <div className="border-l-2 border-neon-yellow/30 pl-4 mb-4">
          <h4 className="font-semibold text-sm text-neon-yellow mb-1">My Contributions</h4>
          <ul className="list-disc list-inside text-sm text-foreground/80 space-y-1">
            {project.contributions.map((contrib, idx) => (
              <li key={idx}>{contrib}</li>
            ))}
          </ul>
        </div>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2 py-1 text-xs bg-white/10 dark:bg-gray-800 rounded"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs text-neon-pink font-medium">{project.impact}</span>
            <a
              href="https://github.com/dheerajkr7866"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-primary-500 hover:text-primary-400 transition-colors"
            >
              View Project <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-neon-purple mb-8 animate-fade-in">
        Projects
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
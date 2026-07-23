/* src/components/Experience.tsx */
import { experience, certification, education } from '@/data/resume';
import { motion } from 'framer-motion';
import { Award, BookOpen, ExternalLink } from 'lucide-react';

interface ExperienceCardProps {
  exp: typeof experience[0];
  index: number;
}

function ExperienceCard({ exp, index }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.01 }}
      className="glass p-6 rounded-xl border border-white/20 dark:border-gray-700"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-neon-purple">{exp.company}</h3>
          <p className="text-sm text-foreground/70 flex items-center gap-2 mt-1">
            <span className="px-2 py-1 bg-neon-purple/20 rounded text-xs font-medium">{exp.role}</span>
            <span className="text-xs text-foreground/50">•</span>
            <span className="text-xs">{exp.location}</span>
          </p>
        </div>
        <span className="text-sm text-foreground/60 mt-2 sm:mt-0 bg-white/10 dark:bg-gray-800 px-3 py-1 rounded">
          {exp.period}
        </span>
      </div>

      <div className="space-y-4">
        {exp.achievements.map((ach, i) => (
          <div key={`${exp.company}-${i}`} className="border-l-2 border-neon-blue/30 pl-4">
            <h4 className="font-semibold text-sm text-neon-blue mb-1">{ach.title}</h4>
            <p className="text-sm text-foreground/80 mb-2">{ach.description}</p>
            <div className="flex flex-wrap gap-2">
              {ach.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 text-xs bg-white/10 dark:bg-gray-800 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
            {ach.impact && (
              <p className="text-xs text-neon-green mt-2 font-medium">📈 {ach.impact}</p>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-neon-purple mb-8 animate-fade-in">
        Experience
      </h2>
      <div className="space-y-8">
        {experience.map((exp, index) => (
          <ExperienceCard key={exp.company} exp={exp} index={index} />
        ))}
      </div>
    </section>
  );
}
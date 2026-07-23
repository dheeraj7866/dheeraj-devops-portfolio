/* src/components/Education.tsx */
import { education } from '@/data/resume';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen } from 'lucide-react';

interface EducationCardProps {
  educ: {
    degree: string;
    institution: string;
    period: string;
    cgpa: string;
  };
  index: number;
}

function EducationCard({ educ, index }: EducationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.01 }}
      className="glass p-6 rounded-xl border border-white/20 dark:border-gray-700"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
        <div>
          <h3 className="text-xl font-bold text-neon-purple mb-2">{educ.degree}</h3>
          <p className="text-sm text-foreground/70">{educ.institution}</p>
        </div>
        <div className="flex items-center gap-4">
          <GraduationCap className="w-5 h-5 text-neon-purple" />
          <div className="flex flex-col sm:items-start sm:flex-row">
            <span className="text-sm text-foreground/60">{educ.period}</span>
            <span className="text-sm text-foreground/70"> | </span>
            <span className="text-sm text-foreground/70">CGPA: {educ.cgpa}</span>
          </div>
        </div>
      </div>

      <div className="text-sm text-foreground/70">
        <p>During my bachelor's studies, I developed a strong foundation in electronics and communication engineering with emphasis on embedded systems and microprocessor design.</p>
      </div>
    </motion.div>
  );
}

export default function Education() {
  return (
    <section id="education" className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-neon-purple mb-8 animate-fade-in">
        Education
      </h2>
      <div className="space-y-8">
        {education.map((educ, index) => (
          <EducationCard key={educ.degree} educ={educ} index={index} />
        ))}
      </div>
    </section>
  );
}
/* src/components/Certification.tsx */
import { certification } from '@/data/resume';
import { motion } from 'framer-motion';
import { Award, Calendar, CheckCircle } from 'lucide-react';

export default function Certification() {
  return (
    <section id="certification" className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-neon-purple mb-8 animate-fade-in">
        Certification
      </h2>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue via-neon-purple to-neon-green" />
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.01 }}
            className="relative pl-8"
          >
            <div className="absolute left-0 top-1/2 w-4 h-4 bg-neon-purple rounded-full border-4 border-background transform -translate-y-1/2" />
            <div className="glass p-6 rounded-xl border border-white/20 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-3">
                <Award className="w-5 h-5 text-neon-purple" />
                <h3 className="text-xl font-bold text-neon-purple">{certification.name}</h3>
                <CheckCircle className="w-4 h-4 text-neon-green" />
              </div>
              <div className="flex items-center gap-4 mb-3 text-sm text-foreground/70">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{certification.date}</span>
                </div>
                <span className="px-3 py-1 bg-neon-purple/20 rounded text-xs font-medium">
                  ID: {certification.credentialId}
                </span>
              </div>
              <p className="text-sm text-foreground/80">
                {certification.description}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
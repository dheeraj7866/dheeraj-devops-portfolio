/* src/components/Skills.tsx */
import { skills } from '@/data/resume';
import { FramerMotion } from 'framer-motion'; // Not actually needed, using framer-motion directly
import { motion } from 'framer-motion';
import { Cpu, Server, Database, Monitor, Shield, Code, Terminal, GitBranch } from 'lucide-react';

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-neon-purple mb-8 animate-fade-in">
        Technical Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Cloud */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="glass p-6 rounded-xl border border-white/20 dark:border-gray-700"
        >
          <h3 className="text-lg font-semibold text-neon-blue mb-4 flex items-center gap-2">
            <Cpu className="w-5 h-5" /> Cloud Platforms
          </h3>
          <ul className="space-y-2 text-sm">
            {skills.cloud.map((skill) => (
              <li key={skill} className="flex items-center gap-2">
                <Server className="w-4 h-4 text-neon-blue" /> {skill}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Containers & Orchestration */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="glass p-6 rounded-xl border border-white/20 dark:border-gray-700"
        >
          <h3 className="text-lg font-semibold text-neon-purple mb-4 flex items-center gap-2">
            <Server className="w-5 h-5" /> Containers & Orchestration
          </h3>
          <ul className="space-y-2 text-sm">
            {skills.containers.map((skill) => (
              <li key={skill} className="flex items-center gap-2">
                <Database className="w-4 h-4 text-neon-purple" /> {skill}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* CI/CD */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="glass p-6 rounded-xl border border-white/20 dark:border-gray-700"
        >
          <h3 className="text-lg font-semibold text-neon-green mb-4 flex items-center gap-2">
            <GitBranch className="w-5 h-5" /> CI/CD & Version Control
          </h3>
          <ul className="space-y-2 text-sm">
            {skills.ciCd.map((skill) => (
              <li key={skill} className="flex items-center gap-2">
                <Code className="w-4 h-4 text-neon-green" /> {skill}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* IaC */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="glass p-6 rounded-xl border border-white/20 dark:border-gray-700"
        >
          <h3 className="text-lg font-semibold text-neon-yellow mb-4 flex items-center gap-2">
            <Monitor className="w-5 h-5" /> Infrastructure as Code
          </h3>
          <ul className="space-y-2 text-sm">
            {skills.iac.map((skill) => (
              <li key={skill} className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-neon-yellow" /> {skill}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Databases */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="glass p-6 rounded-xl border border-white/20 dark:border-gray-700"
        >
          <h3 className="text-lg font-semibold text-neon-cyan mb-4 flex items-center gap-2">
            <Database className="w-5 h-5" /> Databases
          </h3>
          <ul className="space-y-2 text-sm">
            {skills.databases.map((skill) => (
              <li key={skill} className="flex items-center gap-2">
                <Server className="w-4 h-4 text-neon-cyan" /> {skill}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Observability & Scripting */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="glass p-6 rounded-xl border border-white/20 dark:border-gray-700"
        >
          <h3 className="text-lg font-semibold text-neon-pink mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5" /> Observability & Scripting
          </h3>
          <ul className="space-y-2 text-sm">
            {skills.observability.concat(
              skills.scripting,
              skills.process,
              skills.security
            ).map((skill, idx) => (
              <li key={`${skill}-${idx}`} className="flex items-center gap-2">
                <Monitor className="w-4 h-4 text-neon-pink" /> {skill}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
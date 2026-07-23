/* src/components/Dashboard.tsx */
import { motion } from 'framer-motion';
import { Metrics } from '@/data/resume';
import { TrendingUp, Activity, Cloud, Terminal, Monitor, Zapp, Clock, Database } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [metrics, setMetrics] = useState(() => {
    const initialMetrics = [
      { label: 'Years Experience', value: '3+', icon: TrendingUp, color: 'neon-blue' },
      { label: 'AWS Services', value: '20+', icon: Cloud, color: 'neon-purple' },
      { label: 'Microservices', value: '15+', icon: Database, color: 'neon-green' },
      { label: 'CI/CD Pipelines', value: '10+', icon: Monitor, color: 'neon-cyan' },
      { label: 'Terraform Modules', value: '11', icon: Zapp, color: 'neon-pink' },
      { label: 'Uptime', value: '99.9', icon: Activity, color: 'neon-yellow' }
    ];

    // Add live random values for demo
    return initialMetrics.map(metric => ({
      ...metric,
      liveValue: Math.floor(Math.random() * 100),
      lastUpdated: new Date()
    }));
  });

  useEffect(() => {
    // Update metrics every few seconds to simulate live data
    const interval = setInterval(() => {
      setMetrics(prev => prev.map(metric => {
        const isNumeric = !isNaN(parseInt(metric.value));
        const newValue = isNumeric
          ? Math.max(0, Math.min(100, parseInt(metric.value) + Math.floor(Math.random() * 10) - 5)).toString()
          : metric.value;

        return {
          ...metric,
          liveValue: Math.floor(Math.random() * 100),
          value: newValue,
          lastUpdated: new Date()
        };
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="dashboard" className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-neon-purple mb-8 animate-fade-in">
        Live DevOps Dashboard
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="glass p-6 rounded-xl border border-white/20 dark:border-gray-700 flex flex-col items-center text-center"
          >
            <div className="mb-3">
              <metric.icon className={`w-8 h-8 text-${metric.color}-400 mb-2`} />
              <h3 className="text-lg font-semibold text-neon-purple">{metric.label}</h3>
            </div>

            <div className="flex items-baseline mb-2">
              <span className="text-3xl font-bold text-white">{metric.value}</span>
              {metric.label === 'Uptime' && <span className="ml-1 text-xs text-foreground/50">%</span>}
            </div>

            <div className="w-full h-2 bg-white/10 dark:bg-gray-800 rounded-full overflow-hidden mb-2">
              <div
                className="h-full bg-gradient-to-r from-neon-blue to-neon-purple transition-all duration-1000"
                style={{ width: `${metric.liveValue}%` }}
              ></div>
            </div>

            <div className="text-xs text-foreground/50">
              Live: {metric.liveValue}% • Updated: {metric.lastUpdated.toLocaleTimeString()}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Detailed metrics section */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-neon-purple mb-6">System Overview</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="glass p-6 rounded-xl border border-white/20 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold text-lg text-neon-blue">Deployment Pipeline</h4>
              <span className="px-3 py-1 bg-neon-green/20 rounded text-xs font-medium">Healthy</span>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>Build Success Rate</span>
                <span className="font-medium">98.5%</span>
              </div>
              <div className="w-full h-2 bg-white/10 dark:bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-neon-green" style={{ width: '98.5%' }}></div>
              </div>

              <div className="flex justify-between text-sm">
                <span>Average Deployment Time</span>
                <span className="font-medium">4m 23s</span>
              </div>
              <div className="w-full h-2 bg-white/10 dark:bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-neon-purple" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>

          <div className="glass p-6 rounded-xl border border-white/20 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold text-lg text-neon-purple">Cloud Resources</h4>
              <span className="px-3 py-1 bg-neon-yellow/20 rounded text-xs font-medium">Optimal</span>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>EC2 Instances</span>
                <span className="font-medium">24</span>
              </div>
              <div className="w-full h-2 bg-white/10 dark:bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-neon-yellow" style={{ width: '60%' }}></div>
              </div>

              <div className="flex justify-between text-sm">
                <span>RDS Connections</span>
                <span className="font-medium">15/20</span>
              </div>
              <div className="w-full h-2 bg-white/10 dark:bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-neon-cyan" style={{ width: '75%' }}></div>
              </div>

              <div className="flex justify-between text-sm">
                <span>S3 Storage Used</span>
                <span className="font-medium">1.2 TB</span>
              </div>
              <div className="w-full h-2 bg-white/10 dark:bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-neon-pink" style={{ width: '40%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent activity */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-neon-purple mb-6">Recent Activity</h3>
        <div className="glass p-6 rounded-xl border border-white/20 dark:border-gray-700">
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 border-b border-white/10 dark:border-gray-700 last:border-0">
              <Activity className="w-5 h-5 text-neon-green" />
              <div className="flex-1">
                <p className="font-medium text-foreground">Deployment successful: feature/auth-service v2.1.0</p>
                <p className="text-xs text-foreground/50">2 minutes ago • us-east-1</p>
              </div>
              <CheckCircle className="w-4 h-4 text-neon-green" />
            </div>

            <div className="flex items-center gap-3 p-3 border-b border-white/10 dark:border-gray-700 last:border-0">
              <TrendingUp className="w-5 h-5 text-neon-blue" />
              <div className="flex-1">
                <p className="font-medium text-foreground">CPU usage normalized after spike</p>
                <p className="text-xs text-foreground/50">5 minutes ago • monitoring alert resolved</p>
              </div>
              <CheckCircle className="w-4 h-4 text-neon-green" />
            </div>

            <div className="flex items-center gap-3 p-3 border-b border-white/10 dark:border-gray-700 last:border-0">
              <Database className="w-5 h-5 text-neon-purple" />
              <div className="flex-1">
                <p className="font-medium text-foreground">Database backup completed</p>
                <p className="text-xs text-foreground/50">8 minutes ago • 2.3 GB snapshot</p>
              </div>
              <CheckCircle className="w-4 h-4 text-neon-green" />
            </div>

            <div className="flex items-center gap-3 p-3 border-b border-white/10 dark:border-gray-700 last:border-0">
              <Cloud className="w-5 h-5 text-neon-cyan" />
              <div className="flex-1">
                <p className="font-medium text-foreground">New microservice deployed: payment-processor</p>
                <p className="text-xs text-foreground/50">12 minutes ago • blue-green deployment</p>
              </div>
              <CheckCircle className="w-4 h-4 text-neon-green" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
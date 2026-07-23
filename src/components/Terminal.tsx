'use client';

/* src/components/Terminal.tsx */
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, Power, HelpCircle, ChevronRight } from 'lucide-react';

type CommandOutput = {
  type: 'command' | 'output' | 'error';
  content: string | JSX.Element;
};

const COMMANDS = {
  help: () => (
    <div className="space-y-1">
      <div className="text-neon-blue">Available commands:</div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2">
        {['help', 'skills', 'experience', 'projects', 'contact', 'resume', 'aws', 'terraform', 'kubernetes', 'clear', 'date', 'whoami', 'infra', 'monitor', 'deploy', 'tools'].map(cmd => (
          <span key={cmd} className="px-2 py-1 bg-white/10 dark:bg-gray-800 rounded text-xs text-center">
            {cmd}
          </span>
        ))}
      </div>
    </div>
  ),
  skills: () => (
    <div className="space-y-2">
      <div className="text-neon-blue">Technical Skills:</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
        <div>
          <div className="text-neon-purple font-medium">Cloud Platforms</div>
          <div className="text-sm">AWS, Microsoft Azure</div>
        </div>
        <div>
          <div className="text-neon-green font-medium">Containers</div>
          <div className="text-sm">Docker, Kubernetes, Amazon ECS, Helm, ArgoCD</div>
        </div>
        <div>
          <div className="text-neon-yellow font-medium">CI/CD</div>
          <div className="text-sm">Jenkins, GitHub Actions, GitLab</div>
        </div>
        <div>
          <div className="text-neon-cyan font-medium">Infrastructure as Code</div>
          <div className="text-sm">Terraform, CloudFormation, Ansible</div>
        </div>
      </div>
    </div>
  ),
  experience: () => (
    <div className="space-y-3">
      <div className="text-neon-blue">Work Experience:</div>
      <div>
        <div className="font-medium">Finagle Financial Services</div>
        <div className="text-sm text-foreground/70">DevOps Engineer • Feb 2026 – Present</div>
      </div>
      <div>
        <div className="font-medium">Apar Technologies</div>
        <div className="text-sm text-foreground/70">DevOps Engineer • Sep 2025 – Dec 2025</div>
      </div>
      <div>
        <div className="font-medium">Datacorp Traffic</div>
        <div className="text-sm text-foreground/70">DevOps Engineer • Jul 2023 – Aug 2025</div>
      </div>
    </div>
  ),
  projects: () => (
    <div className="space-y-3">
      <div className="text-neon-blue">Projects:</div>
      <div>
        <div className="font-medium">Vendor API Archive & Monitoring</div>
        <div className="text-sm text-foreground/70">Terraform • Lambda • S3 Object Lock • ClickHouse</div>
      </div>
      <div>
        <div className="font-medium">CI/CD Pipeline & Web App on AWS</div>
        <div className="text-sm text-foreground/70">Jenkins • GitHub Actions • Docker • Terraform</div>
      </div>
    </div>
  ),
  contact: () => (
    <div className="space-y-2">
      <div className="text-neon-blue">Contact Information:</div>
      <div className="text-sm">
        <div>Email: dheerajkr7866@gmail.com</div>
        <div>LinkedIn: linkedin.com/in/dheerajkr7866</div>
        <div>GitHub: github.com/dheerajkr7866</div>
        <div>Location: Gurgaon, India</div>
      </div>
    </div>
  ),
  resume: () => (
    <div className="space-y-2">
      <div className="text-neon-blue">Resume:</div>
      <div className="text-sm">
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-neon-green hover:underline">
          Download resume (PDF)
        </a>
      </div>
    </div>
  ),
  aws: () => (
    <div className="space-y-2">
      <div className="text-neon-blue">AWS Services Used:</div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2">
        {['EC2', 'ECS', 'EKS', 'S3', 'Lambda', 'RDS', 'CloudWatch', 'CloudTrail', 'IAM', 'VPC', 'KMS', 'SQS', 'ALB', 'CloudFront', 'Route 53', 'Auto Scaling', 'AWS Batch', 'ECR'].map(service => (
          <span key={service} className="px-2 py-1 bg-white/10 dark:bg-gray-800 rounded text-xs text-center">
            {service}
          </span>
        ))}
      </div>
    </div>
  ),
  terraform: () => (
    <div className="space-y-2">
      <div className="text-neon-blue">Terraform Modules:</div>
      <div className="text-sm space-y-1">
        <div>• VPC Module - Network isolation with public/private subnets</div>
        <div>• IAM Module - Least-privilege role management</div>
        <div>• KMS Module - Encryption key lifecycle control</div>
        <div>• S3 Module - Secure storage with Object Lock</div>
        <div>• SQS Module - Message queuing with DLQ support</div>
        <div>• CloudWatch Module - Alarm and metric provisioning</div>
        <div>• CloudTrail Module - Audit logging</div>
      </div>
    </div>
  ),
  kubernetes: () => (
    <div className="space-y-2">
      <div className="text-neon-blue">Kubernetes Experience:</div>
      <div className="text-sm space-y-1">
        <div>• Production-ready Deployment/Service manifests</div>
        <div>• Cluster scheduling and network policy troubleshooting</div>
        <div>• 10+ microservices managed</div>
        <div>• Docker containerization</div>
        <div>• Rolling updates and blue-green deployments</div>
      </div>
    </div>
  ),
  clear: () => null,
  date: () => <div>{new Date().toString()}</div>,
  whoami: () => <div className="text-neon-green">dheeraj-kumar</div>,
  infra: () => (
    <div className="space-y-2">
      <div className="text-neon-blue">Infrastructure Diagram:</div>
      <pre className="text-xs text-foreground/70 mt-2 whitespace-pre">
{`Internet → Route53 → CloudFront → ALB → EKS → Pods → RDS → CloudWatch → Grafana`}
      </pre>
    </div>
  ),
  monitor: () => (
    <div className="space-y-2">
      <div className="text-neon-blue">Monitoring Stack:</div>
      <div className="text-sm">
        <div>• CloudWatch - AWS metrics and alarms</div>
        <div>• Grafana - Dashboards and visualization</div>
        <div>• Prometheus - Metrics collection</div>
        <div>• ClickHouse - Real-time analytics</div>
        <div>• Elasticsearch - Log aggregation</div>
      </div>
    </div>
  ),
  deploy: () => (
    <div className="space-y-2">
      <div className="text-neon-blue">Deployment Pipeline:</div>
      <div className="text-sm mt-2">
        <div className="flex items-center gap-2">
          <span className="text-neon-green">✓</span>
          <span>Git Push</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-neon-green">✓</span>
          <span>GitHub Actions</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-neon-green">✓</span>
          <span>Docker Build</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-neon-green">✓</span>
          <span>ECR Push</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-neon-green">✓</span>
          <span>Terraform Apply</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-neon-green">✓</span>
          <span>Kubernetes Deploy</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-neon-green">✓</span>
          <span>Monitoring</span>
        </div>
      </div>
    </div>
  ),
  tools: () => (
    <div className="space-y-2">
      <div className="text-neon-blue">DevOps Tools:</div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2">
        {['Terraform', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'GitLab', 'Ansible', 'Helm', 'ArgoCD', 'Prometheus', 'Grafana', 'CloudWatch', 'ClickHouse', 'Elasticsearch', 'Python', 'Bash', 'PowerShell', 'Java', 'TypeScript'].map(tool => (
          <span key={tool} className="px-2 py-1 bg-white/10 dark:bg-gray-800 rounded text-xs text-center">
            {tool}
          </span>
        ))}
      </div>
    </div>
  ),
  default: (cmd: string) => (
    <div className="text-neon-red">
      Command not found: {cmd}. Type 'help' for available commands.
    </div>
  ),
};

export default function Terminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([]);
  const [isBooting, setIsBooting] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const commandOutput: CommandOutput = { type: 'command', content: `$ ${cmd}` };

    let output: CommandOutput;

    if (trimmedCmd === 'clear') {
      setHistory([]);
      return;
    }

    const commandFn = COMMANDS[trimmedCmd as keyof typeof COMMANDS] || COMMANDS.default;
    const result = commandFn(trimmedCmd);

    if (result === null) {
      output = { type: 'output', content: '' };
    } else {
      output = { type: 'output', content: result };
    }

    setHistory(prev => [...prev, commandOutput, output]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
      setInput('');
    }
  };

  const bootSequence = () => {
    setIsBooting(true);
    const bootMessages = [
      'Initializing DevOps Terminal...',
      'Loading environment variables...',
      'Connecting to AWS...',
      'Verifying credentials...',
      'Ready.',
    ];

    let i = 0;
    const interval = setInterval(() => {
      if (i < bootMessages.length) {
        setHistory(prev => [...prev, {
          type: 'output',
          content: <span className="text-neon-green">{bootMessages[i]}</span>
        }]);
        i++;
      } else {
        clearInterval(interval);
        setIsBooting(false);
      }
    }, 300);
  };

  const toggleTerminal = () => {
    if (!isOpen) {
      bootSequence();
    }
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <>
      {/* Terminal toggle button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleTerminal}
        className="fixed bottom-6 right-6 z-50 p-4 bg-neon-gradient rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        title="Open Terminal"
      >
        <TerminalIcon className="w-6 h-6 text-white" />
      </motion.button>

      {/* Terminal modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-full max-w-2xl"
          >
            <div className="glass-dark rounded-xl border border-white/20 dark:border-gray-700 overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center justify-between p-3 bg-black/40 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <TerminalIcon className="w-4 h-4 text-neon-green" />
                  <span className="font-mono text-sm text-neon-green">dheeraj@devops:~$</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setHistory([])}
                    className="text-xs text-foreground/50 hover:text-foreground transition-colors"
                    title="Clear"
                  >
                    Clear
                  </button>
                  <button
                    onClick={toggleTerminal}
                    className="text-xs text-foreground/50 hover:text-foreground transition-colors"
                    title="Close"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Terminal content */}
              <div className="h-80 overflow-y-auto p-4 font-mono text-sm bg-black/30">
                <AnimatePresence>
                  {history.map((entry, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {entry.type === 'command' ? (
                        <div className="text-neon-blue mb-1">{entry.content}</div>
                      ) : (
                        <div className="mb-2">{entry.content}</div>
                      )}
                    </motion.div>
                  ))}
                </AnimatePresence>

                {!isBooting && history.length === 0 && (
                  <div className="text-foreground/50">
                    Welcome to the DevOps Terminal. Type 'help' to get started.
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="p-3 border-t border-white/10">
                <form onSubmit={handleSubmit} className="flex items-center gap-2">
                  <span className="text-neon-green font-mono">$</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 bg-transparent border-none outline-none text-foreground font-mono text-sm"
                    placeholder="Type a command..."
                    autoComplete="off"
                    autoCorrect="off"
                    spellCheck="false"
                  />
                  <ChevronRight className="w-4 h-4 text-foreground/50" />
                </form>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
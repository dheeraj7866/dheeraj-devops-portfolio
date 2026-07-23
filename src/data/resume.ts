// src/data/resume.ts
// Central data source for the DevOps dashboard portfolio.
// Every piece of content here is sourced directly from Dheeraj's resume.

export const personal = {
  name: 'Dheeraj Kumar',
  title: 'DevOps Engineer | AWS · Azure · Kubernetes · CI/CD · Automation',
  location: 'Gurgaon, India',
  phone: '+91 74618 80072',
  email: 'dheerajkr7866@gmail.com',
  linkedin: 'https://linkedin.com/in/dheerajkr7866',
  github: 'https://github.com/dheerajkr7866',
  summary:
    'AWS Certified (SAA-C03) DevOps Engineer with 3+ years of hands-on experience across the full delivery lifecycle — Infrastructure as Code (Terraform, CloudFormation, Ansible), container orchestration (Docker, Kubernetes, Amazon ECS, Helm, ArgoCD/GitOps), and CI/CD pipeline ownership (Jenkins, GitHub Actions, GitLab). Operates production data and observability layers including PostgreSQL, RDS, ClickHouse, CloudWatch, Grafana, Prometheus, and Elasticsearch, with daily scripting in Python, Bash, PowerShell, and Java for automation and tooling. Strong background in incident response, root-cause troubleshooting, and configuration management for a regulated financial-services platform, working within Agile/SDLC delivery frameworks and JIRA-tracked workflows. Comfortable across AWS and Azure environments, with a security-first, automation-first mindset focused on reliability and reduced operational toil.',
}

export const skills = {
  cloud: ['AWS', 'Microsoft Azure'],
  containers: ['Docker', 'Kubernetes', 'Amazon ECS', 'Helm', 'ArgoCD (GitOps)'],
  ciCd: ['Jenkins', 'GitHub Actions', 'GitLab', 'Git'],
  iac: ['Terraform', 'AWS CloudFormation', 'Ansible'],
  databases: ['PostgreSQL', 'Amazon RDS', 'ClickHouse'],
  observability: ['CloudWatch', 'Grafana', 'Prometheus', 'Elasticsearch'],
  scripting: ['Python', 'Bash/Shell', 'PowerShell', 'Java', 'Node.js/TypeScript'],
  process: ['Agile/Scrum', 'SDLC', 'JIRA'],
  security: ['IAM least-privilege', 'KMS encryption', 'S3 Object Lock', 'VPC isolation', 'audit logging', 'PII redaction'],
}

export const experience = [
  {
    company: 'Finagle Financial Services Pvt. Ltd.',
    role: 'DevOps Engineer',
    period: 'Feb 2026 – Present',
    location: 'Onsite',
    color: 'neon-blue',
    achievements: [
      {
        title: 'Data & Observability Layer',
        description:
          'Operate a production ClickHouse deployment as the query layer for a real-time observability system, powering Grafana dashboards for failure rates, latency percentiles (p50/p95), and daily spend analysis.',
        tech: ['ClickHouse', 'Grafana', 'CloudWatch', 'Observability'],
      },
      {
        title: 'Infrastructure as Code',
        description:
          'Designed and maintain a modular Terraform codebase (11 modules — VPC, IAM, KMS, S3, SQS, CloudWatch, CloudTrail) provisioning fully codified, reproducible multi-environment (staging/prod) AWS infrastructure with state locking.',
        tech: ['Terraform', 'AWS', 'IaC', 'State Locking'],
      },
      {
        title: 'Incident Response & Auto-Recovery',
        description:
          'Built CloudWatch alarms and automated DLQ redrive for self-healing failure recovery; built Python-based smoke tests and S3-to-ClickHouse recovery workflows used for production incident triage.',
        tech: ['CloudWatch', 'Python', 'SQS', 'DLQ', 'Incident Response'],
      },
      {
        title: 'Security & Networking',
        description:
          'Implemented VPC network isolation, KMS encryption, and dual-control IAM roles, enforcing least-privilege access across a multi-environment AWS deployment for a regulated financial platform.',
        tech: ['VPC', 'KMS', 'IAM', 'Security', 'Compliance'],
      },
    ],
  },
  {
    company: 'Apar Technologies Pvt. Ltd.',
    role: 'DevOps Engineer',
    period: 'Sep 2025 – Dec 2025',
    location: 'Remote',
    color: 'neon-purple',
    achievements: [
      {
        title: 'Kubernetes Operations',
        description:
          'Authored production-ready Kubernetes Deployment/Service manifests and Dockerfiles for new microservice onboarding, diagnosing cluster scheduling issues and network policy misconfigurations across 10+ microservices.',
        tech: ['Kubernetes', 'Docker', 'Manifests', 'Networking'],
      },
      {
        title: 'CI/CD Pipelines',
        description:
          'Owned GitHub Actions pipeline reliability across 10+ microservices — diagnosing Docker image failures and CI/CD bottlenecks to keep release delivery unblocked.',
        tech: ['GitHub Actions', 'CI/CD', 'Docker'],
      },
      {
        title: 'Linux & Root Cause Analysis',
        description:
          'Triaged Linux production incidents — high CPU, memory pressure, disk saturation — performing root-cause analysis and remediations that kept uptime above SLA thresholds.',
        tech: ['Linux', 'RCA', 'Performance'],
      },
      {
        title: 'Release Operations',
        description:
          'Coordinated controlled production deployments with engineering leads, executing change-management checklists and post-deploy validation for zero-impact releases.',
        tech: ['Deployment', 'Change Management', 'Validation'],
      },
    ],
  },
  {
    company: 'Datacorp Traffic Private Limited',
    role: 'DevOps Engineer',
    period: 'Jul 2023 – Aug 2025',
    location: 'Bengaluru, India',
    color: 'neon-green',
    achievements: [
      {
        title: 'Jenkins CI Pipelines',
        description:
          'Cut release cycle time by 20+ minutes by architecting multi-stage Jenkins pipelines (build, unit test, integration test, deploy), eliminating manual handoffs for 5+ application teams working in Agile/Scrum sprints with JIRA-tracked backlogs.',
        tech: ['Jenkins', 'CI/CD', 'Agile', 'JIRA'],
        impact: '20+ min cycle time reduction',
      },
      {
        title: 'Infrastructure as Code',
        description:
          'Automated AWS Batch compute environments, job queues, and IAM roles end-to-end via Terraform, replacing ad-hoc console provisioning and cutting environment setup time from hours to minutes.',
        tech: ['Terraform', 'AWS Batch', 'IAM', 'Automation'],
        impact: 'Hours → Minutes setup',
      },
      {
        title: 'Monitoring & Health Checks',
        description:
          'Reduced system downtime by 15% by codifying AWS CloudWatch alarm provisioning in Terraform, standardizing alert thresholds across services for automated, proactive incident detection.',
        tech: ['CloudWatch', 'Terraform', 'Alerting', 'Monitoring'],
        impact: '15% downtime reduction',
      },
      {
        title: 'Containers on AWS',
        description:
          'Containerized and orchestrated core application workloads using Docker and Amazon ECS, achieving environment parity across dev/staging/prod and enabling horizontal auto-scaling under peak traffic.',
        tech: ['Docker', 'ECS', 'Auto Scaling', 'Environment Parity'],
      },
      {
        title: 'Python & Shell Scripting',
        description:
          'Developed Python and Shell automation scripts for log rotation, deployment health checks, and alert suppression, reducing on-call toil and improving mean time to recovery (MTTR).',
        tech: ['Python', 'Shell', 'Automation', 'MTTR'],
      },
    ],
  },
]

export const projects = [
  {
    title: 'Vendor API Archive & Real-Time Failure Monitoring Infrastructure',
    company: 'Finagle Financial Services',
    description:
      'End-to-end serverless archival system ingesting 500+ vendor API events/batch with compliance-grade immutability, PII redaction, and sub-1ms observability overhead.',
    problem:
      'Vendor API failures were causing data loss and compliance gaps. Needed a system that could archive events immutably while providing real-time observability into failure patterns.',
    solution:
      'Built a serverless pipeline using AWS Lambda, SQS, and S3 Object Lock for immutable storage with KMS encryption. ClickHouse serves as the query layer for real-time Grafana dashboards, with PII redaction applied before storage.',
    challenges: [
      'Ensuring compliance-grade immutability with S3 Object Lock',
      'PII redaction without impacting ingestion performance',
      'Sub-1ms observability overhead requirement',
      'Multi-environment Terraform state management',
    ],
    contributions: [
      'Architected 11-module Terraform codebase for repeatable provisioning',
      'Implemented KMS key lifecycle control and CloudTrail audit logging',
      'Built Python-based recovery workflows for incident triage',
      'Designed ClickHouse schema for real-time observability queries',
    ],
    impact: '500+ events/batch ingested | Compliance-grade immutability | Sub-1ms overhead',
    tech: ['Terraform', 'AWS Lambda', 'SQS', 'S3 Object Lock', 'KMS', 'VPC', 'CloudWatch', 'CloudTrail', 'ClickHouse', 'Node.js/TypeScript', 'Grafana'],
    architecture: [
      { name: 'Vendor APIs', icon: 'api' },
      { name: 'Lambda', icon: 'lambda' },
      { name: 'SQS', icon: 'queue' },
      { name: 'S3 Object Lock', icon: 'storage' },
      { name: 'KMS', icon: 'key' },
      { name: 'CloudWatch', icon: 'monitoring' },
      { name: 'ClickHouse', icon: 'database' },
      { name: 'Grafana', icon: 'dashboard' },
    ],
  },
  {
    title: 'CI/CD Pipeline & Scalable Web Application on AWS',
    company: 'Personal Project',
    description:
      'Built a fully automated CI/CD pipeline from commit to production using Jenkins + GitHub Actions with Docker-containerized builds and Terraform-managed infrastructure (EC2, ALB, ASG, CloudWatch Alarms).',
    problem:
      'Manual deployments were error-prone and slow. Needed a fully automated pipeline from commit to production with zero-downtime deployments.',
    solution:
      'Created a Jenkins + GitHub Actions pipeline with Docker-containerized builds. Terraform manages EC2, ALB, ASG, and CloudWatch alarms. Resolved IAM role, Docker integration, and Jenkins configuration challenges.',
    challenges: [
      'IAM role configuration for cross-service access',
      'Docker integration with Jenkins',
      'Jenkins configuration management',
      'Achieving zero-downtime deployments',
    ],
    contributions: [
      'Designed and implemented the complete CI/CD pipeline',
      'Created Terraform modules for all infrastructure components',
      'Resolved Docker and Jenkins integration issues',
      'Configured auto-scaling for peak traffic handling',
    ],
    impact: 'Zero-downtime deployments | Consistent dev/test/prod environments | Automated scaling',
    tech: ['Terraform', 'Jenkins', 'Docker', 'GitHub Actions', 'EC2', 'Application Load Balancer', 'Auto Scaling', 'CloudWatch'],
    architecture: [
      { name: 'GitHub', icon: 'github' },
      { name: 'GitHub Actions', icon: 'actions' },
      { name: 'Jenkins', icon: 'jenkins' },
      { name: 'Docker', icon: 'docker' },
      { name: 'ECR', icon: 'ecr' },
      { name: 'EC2', icon: 'ec2' },
      { name: 'ALB', icon: 'alb' },
      { name: 'CloudWatch', icon: 'monitoring' },
    ],
  },
]

export const certification = {
  name: 'AWS Certified Solutions Architect – Associate (SAA-C03)',
  issuer: 'Amazon Web Services',
  date: 'Dec 2024',
  credentialId: 'SAA-C03',
  description:
    'Validated expertise in designing distributed systems on AWS, including compute, storage, networking, security, and database services. Demonstrates ability to architect scalable, highly available, and cost-optimized solutions on AWS.',
}

export const education = {
  degree: 'B.E. in Electronics & Communication Engineering',
  institution: 'Sir M. Visvesvaraya Institute of Technology, Bengaluru',
  cgpa: '8.92 / 10',
  period: 'Aug 2019 – Jul 2023',
}

export const dashboardMetrics = [
  { label: 'Years Experience', value: '3+', icon: 'calendar', color: 'neon-blue', unit: '' },
  { label: 'AWS Services', value: '20+', icon: 'cloud', color: 'neon-purple', unit: '' },
  { label: 'Microservices', value: '15+', icon: 'package', color: 'neon-green', unit: '' },
  { label: 'CI/CD Pipelines', value: '10+', icon: 'git-pull-request', color: 'neon-cyan', unit: '' },
  { label: 'Terraform Modules', value: '11', icon: 'box', color: 'neon-pink', unit: '' },
  { label: 'Uptime', value: '99.9', icon: 'activity', color: 'neon-yellow', unit: '%' },
]

// ─── Identity ────────────────────────────────────────────────────────────────
export const siteIdentity = {
  greeting: 'Hello, I am',
  name: 'Emmanuel Kiprotich',
  bio: 'Computer Science graduate, Machine Learning Researcher, and Software Engineer building retrieval-augmented generation systems, federated learning pipelines, deep reinforcement learning agents, and computer vision applications.',
  bioExtended: 'Incoming Master of Computer Science student at the University of Iowa.',
} as const

export const profileImageSrc = new URL('../assets/profile.jpg', import.meta.url).href

// ─── Navigation ──────────────────────────────────────────────────────────────
export const navigation = [
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
] as const

// ─── Profile links ──────────────────────────────────────────────────────────
export type ProfileAction = {
  label: string
  href: string
  kind: 'github' | 'linkedin' | 'email' | 'resume'
  external: boolean
}

export const profileActions: ReadonlyArray<ProfileAction> = [
  { label: 'GitHub', href: 'https://github.com/EGKIP', kind: 'github', external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/emmanuelkiprotich', kind: 'linkedin', external: true },
  { label: 'Email', href: 'mailto:egkiprotich@gmail.com', kind: 'email', external: false },
  { label: 'Résumé', href: '/emmanuel-kiprotich-resume.pdf', kind: 'resume', external: true },
] as const

// ─── Experience ─────────────────────────────────────────────────────────────
export type ExperienceEntry = {
  title: string
  subtitle: string
  org: string
  period: string
  location: string
  description: string
  technologies: readonly string[]
}

export const experienceEntries: ReadonlyArray<ExperienceEntry> = [
  {
    title: 'AWS AI & ML Scholar',
    subtitle: 'Applied AI & Cloud Engineering',
    org: 'Amazon Web Services',
    period: '2026 – Present',
    location: 'Remote',
    description:
      'Completed applied training in generative and responsible AI, cloud architecture, and production ML workflows. Built model-deployment systems with FastAPI, Docker, AWS endpoints, monitoring, and evaluation.',
    technologies: ['AWS', 'SageMaker', 'Hugging Face', 'FastAPI', 'Docker', 'MLOps', 'Generative AI'],
  },
  {
    title: 'Machine Learning Researcher',
    subtitle: 'Federated Learning & Intrusion Detection',
    org: 'Minnesota State University, Mankato',
    period: 'Jan 2025 – Present',
    location: 'Mankato, MN',
    description:
      'Developing privacy-preserving intrusion-detection models for transportation IoT without centralizing sensitive data. Evaluating NSL-KDD and Car-Hacking datasets under non-IID conditions while studying client heterogeneity, federated optimization, and communication-efficient training.',
    technologies: ['Federated Learning', 'Distributed ML', 'NSL-KDD', 'Privacy-Preserving AI'],
  },
  {
    title: 'Undergraduate Research Assistant',
    subtitle: 'Deep Reinforcement Learning & V2I',
    org: 'Minnesota State University, Mankato',
    period: 'Jan 2025 – May 2026',
    location: 'Mankato, MN',
    description:
      'Built DQN agents and Gym-compatible SUMO environments for adaptive traffic-signal control using V2I data. Reduced queue length by 22%, waiting time by 23%, and increased throughput by 11% over fixed-time control. Co-authored research accepted at ACDSA 2026.',
    technologies: ['Deep Q Networks', 'SUMO', 'OpenAI Gym', 'V2I', 'Published Research'],
  },
] as const

// ─── Education ──────────────────────────────────────────────────────────────
const mnsuLogoSrc = new URL('../assets/mnsu-logo.svg', import.meta.url).href
const uiowaLogoSrc = new URL('../assets/uiowa-logo.svg', import.meta.url).href

export type EducationEntry = {
  school: string
  degree: string
  period: string
  status: string
  coursework: readonly string[]
  logoSrc: string
  logoAlt: string
}

export const educationEntries: ReadonlyArray<EducationEntry> = [
  {
    school: 'Minnesota State University, Mankato',
    degree: 'B.S. Computer Science, Minor in Mathematics',
    period: 'Aug 2022 – May 2026',
    status: 'Graduated May 2026',
    coursework: [
      'Data Structures & Algorithms',
      'Operating Systems',
      'Databases & Information Security',
      'Parallel Computing',
      'Probability & Statistics',
      'Intelligent Systems',
    ],
    logoSrc: mnsuLogoSrc,
    logoAlt: 'Minnesota State University, Mankato logo',
  },
  {
    school: 'University of Iowa',
    degree: 'Master of Computer Science',
    period: 'Fall 2026',
    status: 'Incoming',
    coursework: [],
    logoSrc: uiowaLogoSrc,
    logoAlt: 'University of Iowa logo',
  },
]

// ─── Certifications ─────────────────────────────────────────────────────────
const awsCloudPractitionerSrc = new URL('../assets/AWSCPP.png', import.meta.url).href
const awsSolutionsArchitectSrc = new URL('../assets/aws-solutions-architect.jpeg', import.meta.url).href
const awsLogoSrc = new URL('../assets/aws-logo.jpeg', import.meta.url).href
const googleLogoSrc = new URL('../assets/Google Foundations of Project Management.png', import.meta.url).href
const codepathLogoSrc = new URL('../assets/Codepath.png', import.meta.url).href

export type CertEntry = {
  name: string
  issuer: string
  href: string
  logoSrc: string
  logoAlt: string
  detail?: string
}

export const certEntries: ReadonlyArray<CertEntry> = [
  {
    name: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    href: 'https://www.credly.com/badges/eb5c32af-d731-4262-abcc-d090c3432130/public_url',
    logoSrc: awsSolutionsArchitectSrc,
    logoAlt: 'AWS Certified Solutions Architect Associate badge',
    detail: 'View verified credential',
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    href: 'https://www.credly.com/badges/ec713c29-9499-4306-8123-dd5c72c24c67/public_url',
    logoSrc: awsCloudPractitionerSrc,
    logoAlt: 'AWS Certified Cloud Practitioner badge',
    detail: 'View verified credential',
  },
  {
    name: 'AWS AI & ML Scholar',
    issuer: 'Amazon Web Services / Udacity',
    href: 'https://cdn.getblueshift.com/bee/images/ed5b8755-0989-4944-9ca5-287bb68e4a22/Challenge%20Completion%20Badge_Light.png',
    logoSrc: awsLogoSrc,
    logoAlt: 'Amazon Web Services logo',
    detail: 'View completion badge',
  },
  {
    name: 'Intermediate Technical Interview Prep',
    issuer: 'CodePath',
    href: 'https://www.codepath.org/',
    logoSrc: codepathLogoSrc,
    logoAlt: 'CodePath logo',
    detail: 'Credential 128322',
  },
  {
    name: 'Foundations of Project Management',
    issuer: 'Google / Coursera',
    href: 'https://www.coursera.org/account/accomplishments/verify/SXF5Z4TQPTF7',
    logoSrc: googleLogoSrc,
    logoAlt: 'Google logo',
    detail: 'View verified credential',
  },
]

// ─── Projects ───────────────────────────────────────────────────────────────
const clauslyImg = new URL('../assets/clausly-wordmark.jpg', import.meta.url).href
const wrexImg = new URL('../assets/wrex-logo.jpg', import.meta.url).href
const alfalfaImg = new URL('../assets/usda-alfalfa.jpeg', import.meta.url).href
const federatedImg = new URL('../assets/federated.jpg', import.meta.url).href
const trafficImg = new URL('../assets/traffic.jpg', import.meta.url).href
const teachtrackImg = new URL('../assets/teachtrack.jpg', import.meta.url).href
const catalogImg = new URL('../assets/catalog.jpg', import.meta.url).href

export type ProjectLink = {
  label: string
  href: string
  kind: 'live' | 'github' | 'research'
}

export type ProjectEntry = {
  title: string
  subtitle: string
  description: string
  stack: readonly string[]
  imageSrc: string
  imageAlt: string
  links: readonly ProjectLink[]
  year: string
  status: 'Live' | 'Research' | 'In Development'
}

export const projectEntries: ReadonlyArray<ProjectEntry> = [
  {
    title: 'Clausly.app',
    subtitle: 'AI Contract Intelligence Platform',
    description:
      'AI-powered contract intelligence platform that summarizes documents, extracts clauses, identifies risks, answers grounded questions, and manages deadlines through a retrieval-augmented generation pipeline.',
    stack: ['Next.js', 'React', 'TypeScript', 'Supabase', 'PostgreSQL', 'OpenAI', 'RAG'],
    imageSrc: clauslyImg,
    imageAlt: 'Clausly AI contract intelligence platform wordmark',
    links: [
      { label: 'Live Demo', href: 'https://clausly.app/', kind: 'live' },
      { label: 'GitHub', href: 'https://github.com/EGKIP/Clausly', kind: 'github' },
    ],
    year: '2026',
    status: 'Live',
  },
  {
    title: 'Wrex.app',
    subtitle: 'AI Writing Intelligence Platform',
    description:
      'Full-stack AI writing platform for authenticity scoring, grammar, voice consistency, rewriting, and rubric alignment, with secure authentication, subscriptions, rate limiting, and production deployments.',
    stack: ['React', 'TypeScript', 'FastAPI', 'Supabase', 'PostgreSQL', 'OpenAI', 'Stripe'],
    imageSrc: wrexImg,
    imageAlt: 'Wrex AI writing intelligence platform logo',
    links: [
      { label: 'Live Demo', href: 'https://wrex.app/', kind: 'live' },
      { label: 'GitHub', href: 'https://github.com/EGKIP/Wrex.appp', kind: 'github' },
    ],
    year: '2026',
    status: 'Live',
  },
  {
    title: 'USDA Alfalfa Segmentation',
    subtitle: 'Computer Vision Research',
    description:
      'Led a five-member research team developing YOLO instance-segmentation models for 369 USDA 20× alfalfa microscopy images while coordinating annotation review, stakeholder meetings, evaluation, and Gradio deployment planning.',
    stack: ['Python', 'YOLO', 'OpenCV', 'Computer Vision', 'Gradio'],
    imageSrc: alfalfaImg,
    imageAlt: 'Purple alfalfa flowers in a field',
    links: [
      { label: 'Research', href: 'https://github.com/USDA-MNSU-CS-PROJECTS', kind: 'research' },
    ],
    year: '2026',
    status: 'Research',
  },
  {
    title: 'Federated Learning IDS',
    subtitle: 'Privacy-Preserving Intrusion Detection',
    description:
      'Distributed machine-learning research for detecting transportation IoT attacks without centralizing sensitive data, evaluated on NSL-KDD and Car-Hacking datasets under heterogeneous, non-IID conditions.',
    stack: ['Python', 'Federated Learning', 'NSL-KDD', 'Car-Hacking', 'Pandas'],
    imageSrc: federatedImg,
    imageAlt: 'Abstract visualization of a federated network',
    links: [
      { label: 'GitHub', href: 'https://github.com/EGKIP/nn-and-federated-learning-practice', kind: 'github' },
    ],
    year: '2025',
    status: 'Research',
  },
  {
    title: 'Adaptive Traffic Signal Control',
    subtitle: 'Deep Reinforcement Learning',
    description:
      'DQN-based adaptive signal control using SUMO, OpenAI Gym, and V2I data. Reduced vehicle queues by 22%, waiting time by 23%, and increased throughput by 11% against fixed-time control.',
    stack: ['Python', 'DQN', 'SUMO', 'OpenAI Gym', 'V2I'],
    imageSrc: trafficImg,
    imageAlt: 'Traffic moving through a signal-controlled intersection',
    links: [
      { label: 'GitHub', href: 'https://github.com/EGKIP/Adaptive-traffic-signal-control', kind: 'github' },
    ],
    year: '2025',
    status: 'Research',
  },
  {
    title: 'TeachTrack',
    subtitle: 'Reflection & Course Management',
    description:
      'Full-stack platform helping student teachers record classroom reflections and receive supervisor feedback, with role-based dashboards and structured data collection across schools and organizations.',
    stack: ['Django', 'REST APIs', 'PostgreSQL', 'Role-Based Access'],
    imageSrc: teachtrackImg,
    imageAlt: 'TeachTrack reflection and course management interface',
    links: [
      { label: 'GitHub', href: 'https://github.com/MNSU-HLP-Project/MNSU-HLP-Spr25', kind: 'github' },
    ],
    year: '2025',
    status: 'In Development',
  },
  {
    title: 'Course Catalog Automation',
    subtitle: 'Data Pipeline & Knowledge Graph',
    description:
      'Automated extraction and structuring of 200+ academic catalogs into a Neo4j knowledge graph, reducing manual formatting time by 70% and manual errors by 30%.',
    stack: ['Python', 'Neo4j', 'ETL', 'Knowledge Graphs'],
    imageSrc: catalogImg,
    imageAlt: 'Visualization of linked academic catalog data',
    links: [
      { label: 'GitHub', href: 'https://github.com/EGKIP/Course-Catalog-Automation', kind: 'github' },
    ],
    year: '2024',
    status: 'In Development',
  },
]

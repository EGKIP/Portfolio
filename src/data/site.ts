// ─── Identity ────────────────────────────────────────────────────────────────
export const siteIdentity = {
  greeting: 'Hello, I am',
  name: 'Emmanuel Kiprotich',
  bio: "I'm a CS & Math student and aspiring software engineer passionate about machine learning and cloud systems. I have experience in Python, Java, JavaScript, Django, React, and AWS. I'm driven to leverage software engineering and ML to solve real-world problems.",
  bioExtended: 'Starting my MCS at the University of Iowa in Fall 2026.',
} as const

export const profileImageSrc = new URL('../assets/profile.jpg', import.meta.url).href

// ─── Navigation ──────────────────────────────────────────────────────────────
export const navigation = [
  { label: 'Experience',    href: '#experience'    },
  { label: 'Education',     href: '#education'     },
  { label: 'Projects',      href: '#projects'      },
  { label: 'Certifications', href: '#certifications' },
] as const

// ─── Profile links ────────────────────────────────────────────────────────────
export type ProfileAction = {
  label: string
  href: string
  kind: 'github' | 'linkedin' | 'email'
  external: boolean
}

export const profileActions: ReadonlyArray<ProfileAction> = [
  { label: 'GitHub',   href: 'https://github.com/EGKIP',                          kind: 'github',   external: true  },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/EmmanuelKiprotich/',    kind: 'linkedin', external: true  },
  { label: 'Email',    href: 'mailto:ekiprotich@uiowa.edu',                       kind: 'email',    external: false },
] as const

// ─── Experience ───────────────────────────────────────────────────────────────
export type ExperienceEntry = {
  title: string
  subtitle: string
  org: string
  period: string
  description: string
}

export const experienceEntries: ReadonlyArray<ExperienceEntry> = [
  {
    title: 'Undergraduate Research Assistant',
    subtitle: 'Machine Learning & V2I',
    org: 'Minnesota State University, Mankato',
    period: 'Jan 2025 – Present',
    description:
      'Built and maintained simulation environments for adaptive traffic signal control using deep reinforcement learning. Developed structured data pipelines for real-world traffic datasets (NGSIM Peachtree, NYC CV Pilot) and ensured experiments were reproducible and well-documented. Contributed to a peer-reviewed publication accepted at ACDSA 2026.',
  },
  {
    title: 'Researcher',
    subtitle: 'Federated Learning Intrusion Detection Systems',
    org: 'Minnesota State University, Mankato',
    period: 'Jan 2025 – Present',
    description:
      'Exploring privacy-preserving intrusion detection across distributed edge devices using federated learning. Evaluated models on NSL-KDD and car-hacking datasets under non-IID conditions, focusing on detection performance, communication efficiency, and distributed optimization strategies.',
  },
] as const

// ─── Education ────────────────────────────────────────────────────────────────
// Education logos are already in src/assets/ — drop updated ones there if needed.
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
    status: 'Graduating May 2026',
    coursework: [
      'Data Structures & Algorithms', 'Operating Systems',
      'Databases & Information Security', 'Parallel Computing',
      'Probability & Statistics', 'Intelligent Systems',
    ],
    logoSrc: mnsuLogoSrc,
    logoAlt: 'Minnesota State University, Mankato',
  },
  {
    school: 'University of Iowa',
    degree: 'M.S. Computer Science (Incoming)',
    period: 'Fall 2026',
    status: 'Incoming',
    coursework: [],
    logoSrc: uiowaLogoSrc,
    logoAlt: 'University of Iowa',
  },
]

// ─── Certifications ───────────────────────────────────────────────────────────
const awsLogoSrc      = new URL('../assets/AWSCPP.png',                                    import.meta.url).href
const googleLogoSrc   = new URL('../assets/Google Foundations of Project Management.png',  import.meta.url).href
const codepathLogoSrc = new URL('../assets/Codepath.png',                                  import.meta.url).href

export type CertEntry = {
  name: string
  issuer: string
  href: string
  logoSrc: string
  logoAlt: string
}

export const certEntries: ReadonlyArray<CertEntry> = [
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    href: 'https://www.credly.com/badges/ec713c29-9499-4306-8123-dd5c72c24c67/linked_in_profile',
    logoSrc: awsLogoSrc,
    logoAlt: 'AWS',
  },
  {
    name: 'Foundations of Project Management',
    issuer: 'Google / Coursera',
    href: 'https://www.coursera.org/account/accomplishments/verify/SXF5Z4TQPTF7',
    logoSrc: googleLogoSrc,
    logoAlt: 'Google',
  },
  {
    name: 'Intermediate Technical Interview Prep',
    issuer: 'CodePath',
    href: 'https://www.codepath.org/',
    logoSrc: codepathLogoSrc,
    logoAlt: 'CodePath',
  },
]

// ─── Projects ─────────────────────────────────────────────────────────────────
const teachtrackImg  = new URL('../assets/teachtrack.jpg',  import.meta.url).href
const trafficImg     = new URL('../assets/traffic.jpg',     import.meta.url).href
const federatedImg   = new URL('../assets/federated.jpg',   import.meta.url).href
const catalogImg     = new URL('../assets/catalog.jpg',     import.meta.url).href

export type ProjectEntry = {
  title: string
  subtitle: string
  description: string
  stack: readonly string[]
  imageSrc: string
  github: string | null
  year: string
}

export const projectEntries: ReadonlyArray<ProjectEntry> = [
  {
    title: 'TeachTrack',
    subtitle: 'Reflection & Course Management',
    description:
      'Full-stack web application for managing student reflections and course data. Designed backend systems with Django and REST APIs, implemented role-based access control, and created efficient data models for structured storage and retrieval.',
    stack: ['Django', 'REST APIs', 'PostgreSQL'],
    imageSrc: teachtrackImg,
    github: null,
    year: '2025',
  },
  {
    title: 'Traffic Signal Control',
    subtitle: 'Reinforcement Learning',
    description:
      'Simulation-based system using SUMO and OpenAI Gym to train RL agents for adaptive traffic signal optimization. Managed experiment configurations, real-world datasets, and logging to ensure reproducibility and scalability.',
    stack: ['Python', 'DRL', 'SUMO', 'OpenAI Gym'],
    imageSrc: trafficImg,
    github: null,
    year: '2025',
  },
  {
    title: 'Federated IDS',
    subtitle: 'Intrusion Detection System',
    description:
      'Distributed ML system for intrusion detection across edge devices using federated learning. Focused on non-IID data distributions, communication efficiency, and real-world cybersecurity evaluation using NSL-KDD and car-hacking datasets.',
    stack: ['Python', 'Federated Learning', 'NSL-KDD'],
    imageSrc: federatedImg,
    github: null,
    year: '2025',
  },
  {
    title: 'Catalog Automation',
    subtitle: 'Data Pipeline',
    description:
      'Data pipelines transforming 200+ unstructured academic catalogs into queryable structured datasets. Modeled complex prerequisite relationships using Neo4j graph data models for efficient academic data navigation.',
    stack: ['Python', 'Neo4j', 'ETL'],
    imageSrc: catalogImg,
    github: null,
    year: '2024',
  },
]


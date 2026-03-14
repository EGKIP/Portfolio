export const siteIdentity = {
  name: 'Emmanuel Kiprotich',
  role: 'CS student / software engineer',
  focus: 'Machine learning',
  headline: 'Computer Science',
  subheadline: 'and Mathematics',
  intro:
    'Emmanuel Kiprotich is a computer science and mathematics student building software with a focus on machine learning.',
  tools: ['Python', 'Java', 'JavaScript', 'Django', 'React', 'AWS'],
  educationNote: 'Minnesota State University, Mankato · B.S. graduating 05/2026',
} as const

export const heroVisualAssetPath = 'src/assets/hero-visual.png' as const

const mnsuLogoSrc = new URL('../assets/mnsu-logo.svg', import.meta.url).href
const uiowaLogoSrc = new URL('../assets/uiowa-logo.svg', import.meta.url).href

const assetModules = import.meta.glob('../assets/*')
const resumeAssetModulePath = '../assets/Emmanuel_Kiprotich_CV.pdf'

export const hasResumeAsset = resumeAssetModulePath in assetModules

export const navigation = [
  { label: 'Education', id: 'education', href: '#education' },
  { label: 'Research', id: 'research', href: '#research' },
  { label: 'Experience', id: 'experience', href: '#experience' },
  { label: 'Projects', id: 'projects', href: '#projects' },
  { label: hasResumeAsset ? 'Resume' : 'Skills', id: 'resume', href: '#resume' },
  { label: 'Contact', id: 'contact', href: '#contact' },
] as const

type ProfileActionKind = 'github' | 'linkedin' | 'email' | 'resume'

export type ProfileAction = {
  label: string
  href: string
  kind: ProfileActionKind
  external: boolean
  download: boolean
}

const allProfileActions: ReadonlyArray<ProfileAction> = [
  {
    label: 'GitHub',
    href: 'https://github.com/EGKIP',
    kind: 'github',
    external: true,
    download: false,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/EmmanuelKiprotich/',
    kind: 'linkedin',
    external: true,
    download: false,
  },
  {
    label: 'Email',
    href: 'mailto:ekiprotich@uiowa.edu',
    kind: 'email',
    external: false,
    download: false,
  },
  {
    label: 'Resume',
    href: 'src/assets/Emmanuel_Kiprotich_CV.pdf',
    kind: 'resume',
    external: false,
    download: true,
  },
] as const

export const profileActions = allProfileActions.filter(
  (action) => action.kind !== 'resume' || hasResumeAsset,
)

export const researchEntries = [
  {
    label: 'Research I',
    title: 'V2I / adaptive traffic signal control',
    meta: 'Accepted paper · ACDSA 2026',
    summary:
      'Building a DRL environment for traffic signal control with SUMO and connected-vehicle data.',
    highlights: [
      'NGSIM Peachtree and NYC Connected Vehicle Pilot datasets.',
      'Tracked queue length, waiting time, and throughput.',
    ],
  },
  {
    label: 'Research II',
    title: 'FL-IDS',
    meta: 'Privacy-preserving IDS for connected vehicles and transportation IoT',
    summary:
      'Designing a federated intrusion-detection workflow for connected vehicle and transportation IoT settings.',
    highlights: [
      'Benchmarked with NSL-KDD and Car-Hacking datasets.',
      'Focused on non-IID data and edge-device constraints.',
    ],
  },
] as const

export const experienceEntries = [
  {
    title: 'TeachTrack backend',
    meta: 'Jan 2025 – May 2025',
    summary: 'Built backend features for classroom workflows with clean, dependable interfaces.',
  },
  {
    title: 'Course catalog automation',
    meta: 'Aug 2024 – Dec 2024',
    summary: 'Automated catalog processing to reduce manual work and improve data consistency.',
  },
] as const

export const projectEntries = [
  {
    title: 'DRL Traffic Signal Control Environment',
    summary:
      'Research environment for adaptive traffic control using DRL, SUMO, and connected-vehicle data.',
    stack: ['DRL', 'SUMO', 'Traffic data'],
  },
  {
    title: 'Federated Learning IDS Prototype',
    summary:
      'Prototype IDS workflow for connected vehicle and transportation IoT settings with federated learning.',
    stack: ['Federated learning', 'NSL-KDD', 'Car-Hacking'],
  },
  {
    title: 'TeachTrack Backend System',
    summary:
      'Backend application work for a teaching-support platform.',
    stack: ['Backend systems', 'APIs'],
  },
  {
    title: 'Course Catalog Automation System',
    summary:
      'Automation tooling for a cleaner catalog data workflow.',
    stack: ['Data pipelines', 'Automation'],
  },
] as const

export const skillGroups = [
  {
    title: 'Languages',
    items: ['Python', 'Java', 'JavaScript'],
  },
  {
    title: 'Frameworks & cloud',
    items: ['Django', 'React', 'AWS'],
  },
  {
    title: 'Focus areas',
    items: ['Machine learning', 'Backend systems', 'Data workflows'],
  },
] as const

export const educationEntries = [
  {
    school: 'Minnesota State University, Mankato',
    program: 'Bachelor’s in Computer Science and Mathematics',
    meta: 'Graduating 05/2026',
    stage: 'Current',
    note: 'Current undergraduate path.',
    logoSrc: mnsuLogoSrc,
    logoAlt: 'Minnesota State University, Mankato logo',
  },
  {
    school: 'University of Iowa',
    program: 'Incoming Master’s in Computer Science',
    meta: 'Fall 2026',
    stage: 'Next',
    note: 'Incoming graduate step after MNSU.',
    logoSrc: uiowaLogoSrc,
    logoAlt: 'University of Iowa logo',
  },
] as const
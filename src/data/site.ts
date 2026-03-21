export const siteIdentity = {
  name: 'Emmanuel Kiprotich',
  role: 'Software Engineer',
  intro: 'CS & Math student. Building at the intersection of machine learning and systems.',
  location: 'Minnesota',
} as const

export const navigation = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const

export type ProfileAction = {
  label: string
  href: string
  kind: 'github' | 'linkedin' | 'email'
  external: boolean
}

export const profileActions: ReadonlyArray<ProfileAction> = [
  { label: 'GitHub', href: 'https://github.com/EGKIP', kind: 'github', external: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/EmmanuelKiprotich/', kind: 'linkedin', external: true },
  { label: 'Email', href: 'mailto:ekiprotich@uiowa.edu', kind: 'email', external: false },
] as const

export const projectEntries = [
  {
    title: 'Adaptive Traffic Signal Control',
    year: '2025',
    summary: 'DRL environment for traffic signal control using SUMO and connected-vehicle data. Accepted at ACDSA 2026.',
    stack: ['Python', 'DRL', 'SUMO'],
  },
  {
    title: 'Federated IDS for Connected Vehicles',
    year: '2025',
    summary: 'Privacy-preserving intrusion detection for transportation IoT using federated learning.',
    stack: ['Python', 'Federated Learning'],
  },
  {
    title: 'TeachTrack',
    year: '2025',
    summary: 'Backend system for classroom workflow management.',
    stack: ['Django', 'REST APIs'],
  },
  {
    title: 'Course Catalog Automation',
    year: '2024',
    summary: 'Automated pipeline reducing manual catalog processing work.',
    stack: ['Python', 'Automation'],
  },
] as const

export const aboutLines = [
  'CS and Mathematics student at Minnesota State University, Mankato. Graduating May 2026.',
  'Incoming M.S. Computer Science at the University of Iowa, Fall 2026.',
  'Focused on machine learning, backend systems, and applied research.',
  'Python · Java · JavaScript · Django · React · AWS',
] as const


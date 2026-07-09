export interface Bilingual {
  ko: string
  en: string
}

export interface ProjectLink {
  label: Bilingual
  url: string
}

export interface ProjectImage {
  src: string
  alt: Bilingual
}

export interface FlowGroup {
  label?: Bilingual
  steps: Bilingual[]
}

export interface TableData {
  title: Bilingual
  headers: Bilingual[]
  rows: Bilingual[][]
}

export interface FutureSection {
  title: Bilingual
  intro: Bilingual
  oneLiner: Bilingual
  tables: TableData[]
  effects: Bilingual[]
  ideas: Bilingual[]
}

export interface Project {
  slug: string
  emoji: string
  title: Bilingual
  type: Bilingual
  solves: Bilingual
  oneLiner: Bilingual
  problem: Bilingual
  solution: Bilingual
  features: Bilingual[]
  flows: FlowGroup[]
  techStack: string[]
  portfolioPoint: Bilingual
  links: ProjectLink[]
  images: ProjectImage[]
  future?: FutureSection
}

export interface SkillRow {
  area: Bilingual
  keywords: Bilingual
}

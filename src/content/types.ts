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

export interface Project {
  slug: string
  emoji: string
  title: Bilingual
  type: Bilingual
  award?: Bilingual
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
}

export interface SkillRow {
  area: Bilingual
  keywords: Bilingual
}

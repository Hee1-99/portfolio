import type { Bilingual, SkillRow } from './types'

export const profile = {
  chip: {
    ko: 'SNU · Builder · Vibe Coding · Automotive Industry',
    en: 'SNU · Builder · Vibe Coding · Automotive Industry',
  } satisfies Bilingual,

  name: {
    ko: '정희원',
    en: 'Hee Won Jung',
  } satisfies Bilingual,

  nameSub: {
    ko: 'Hee Won Jung',
    en: '정희원',
  } satisfies Bilingual,

  greeting: {
    ko: '안녕하세요, 정희원입니다 👋',
    en: "Hi, I'm Hee Won Jung 👋",
  } satisfies Bilingual,

  headlineLead: {
    ko: '저를 한 문장으로 설명한다면,',
    en: 'If I had to describe myself in one sentence,',
  } satisfies Bilingual,

  headline: {
    ko: '문제를 발견하고 직접 만들어 해결하는 빌더',
    en: 'A builder who finds problems and solves them by building',
  } satisfies Bilingual,

  headlineNote: {
    ko: '아이디어를 글로만 설명하기보다, 빠르게 MVP를 만들고 실제 사용 흐름 안에서 검증하는 것을 좋아합니다.',
    en: 'Rather than describing ideas in writing, I prefer to build MVPs fast and validate them inside real user flows.',
  } satisfies Bilingual,

  aboutParagraphs: [
    {
      ko: '안녕하세요, 저는 서울대학교 자유전공학부 23학번 정희원입니다. 현재 창업, 자동차, 기계공학, 바이브코딩에 관심이 있으며, 서울대학교 바이브코딩 동아리 DWNC에서 활동하고 있습니다.',
      en: "Hello, I'm Hee Won Jung, class of 2023 at Seoul National University's College of Liberal Studies. I'm interested in startups, automobiles, mechanical engineering, and vibe coding, and I'm active in DWNC, SNU's vibe-coding club.",
    },
    {
      ko: '저는 기술을 단순히 배우는 데서 멈추기보다, 직접 문제를 발견하고 해결책을 만들어 실제 사용할 수 있는 형태로 구현하는 것에 흥미를 느낍니다. 앞으로도 분야에 제한을 두지 않고, 새로운 가치를 창출해내는 빌더로 성장하고자 합니다.',
      en: "Rather than stopping at learning technology, I enjoy discovering problems myself, building solutions, and shipping them in a form people can actually use. I aim to keep growing as a builder who creates new value without limiting myself to any single field.",
    },
  ] satisfies Bilingual[],

  focusTitle: { ko: 'Portfolio Focus', en: 'Portfolio Focus' } satisfies Bilingual,

  focusHighlight: {
    ko: '작은 불편을 실제 서비스로 바꾸는 일',
    en: 'turning small inconveniences into real services',
  } satisfies Bilingual,

  focusBody: {
    ko: '저는 작은 불편을 실제 서비스로 바꾸는 일을 좋아합니다. 강의 요약, 파일 정리, 꽃집 콘텐츠 작성, 외국인 근로자 안전교육, 성경 필사 루틴 — 전혀 다른 영역이지만, 전부 제가 직접 발견한 문제에서 시작해 MVP를 만들고 배포까지 이어간 프로젝트들입니다.',
    en: 'I enjoy turning small inconveniences into real services. Lecture summaries, file organizing, flower-shop content, safety training for migrant workers, a Bible transcription routine — very different domains, but every project here started from a problem I spotted myself, became an MVP, and shipped as a working product.',
  } satisfies Bilingual,

  whatIBuildTitle: { ko: 'What I Build', en: 'What I Build' } satisfies Bilingual,

  whatIBuild: [
    {
      ko: '학습과 일상의 반복 작업을 줄이는 생산성 도구',
      en: 'Productivity tools that cut repetitive work in study and daily life',
    },
    {
      ko: 'AI를 실제 사용자 흐름에 연결하는 웹앱',
      en: 'Web apps that connect AI to real user flows',
    },
    {
      ko: '브라우저 확장 프로그램과 로컬 자동화 도구',
      en: 'Browser extensions and local automation tools',
    },
    {
      ko: '공동체·현장·창작자를 위한 문제 해결형 MVP',
      en: 'Problem-solving MVPs for communities, worksites, and creators',
    },
  ] satisfies Bilingual[],

  skillsTitle: { ko: 'Core Skills', en: 'Core Skills' } satisfies Bilingual,

  skills: [
    {
      area: { ko: 'Product Building', en: 'Product Building' },
      keywords: {
        ko: 'MVP 기획, 사용자 흐름 설계, 사용자 조사, 검증',
        en: 'MVP planning, UX flow, user research, validation',
      },
    },
    {
      area: { ko: 'Web App', en: 'Web App' },
      keywords: {
        ko: 'Next.js, React, TypeScript, Tailwind CSS',
        en: 'Next.js, React, TypeScript, Tailwind CSS',
      },
    },
    {
      area: { ko: 'AI Product', en: 'AI Product' },
      keywords: {
        ko: 'LLM 연동, 프롬프트 엔지니어링, AI 워크플로우 설계',
        en: 'LLM integration, prompt engineering, AI workflow design',
      },
    },
    {
      area: { ko: 'Data & Auth', en: 'Data & Auth' },
      keywords: {
        ko: 'Firebase Auth, Firestore, Supabase',
        en: 'Firebase Auth, Firestore, Supabase',
      },
    },
    {
      area: { ko: 'Extension', en: 'Extension' },
      keywords: {
        ko: 'Chrome Extension, Manifest V3, Native Messaging',
        en: 'Chrome Extension, Manifest V3, Native Messaging',
      },
    },
    {
      area: { ko: 'Launch', en: 'Launch' },
      keywords: {
        ko: '배포, 지표 분석, 사용자 피드백, 개선 반복',
        en: 'Deployment, analytics, user feedback, iteration',
      },
    },
  ] satisfies SkillRow[],

  projectsTitle: { ko: 'My Projects', en: 'My Projects' } satisfies Bilingual,

  projectsIntro: {
    ko: '서로 다른 영역에서 직접 발견한 문제를 배포 가능한 제품으로 만들었습니다.',
    en: 'Each project started from a problem I spotted myself and ended as a shipped product.',
  } satisfies Bilingual,

  closingTitle: { ko: 'Closing', en: 'Closing' } satisfies Bilingual,

  closing: {
    ko: '저는 아이디어를 글로만 설명하는 것보다, 빠르게 MVP를 만들고 배포하여 실제 사용 흐름 안에서 검증하는 방식에 관심이 많습니다. 앞으로도 AI, 웹앱, 자동화 도구를 활용해 사람들의 일상적인 문제를 해결하는 제품을 만들고 싶습니다.',
    en: "Instead of only explaining ideas in writing, I care about building and shipping MVPs quickly and validating them inside real user flows. Going forward, I want to keep building products that solve people's everyday problems with AI, web apps, and automation tools.",
  } satisfies Bilingual,

  contact: {
    emails: ['ctlover99@gmail.com', 'ctlover99@snu.ac.kr'],
    phone: '010-6707-6806',
    github: 'https://github.com/Hee1-99',
    githubLabel: 'github.com/Hee1-99',
  },

  nav: {
    about: { ko: 'About', en: 'About' } satisfies Bilingual,
    projects: { ko: 'Projects', en: 'Projects' } satisfies Bilingual,
    skills: { ko: 'Skills', en: 'Skills' } satisfies Bilingual,
    contact: { ko: 'Contact', en: 'Contact' } satisfies Bilingual,
  },

  heroCta: {
    projects: { ko: '프로젝트 보기', en: 'View projects' } satisfies Bilingual,
    contact: { ko: '연락하기', en: 'Get in touch' } satisfies Bilingual,
  },
}

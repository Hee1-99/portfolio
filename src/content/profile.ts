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
      ko: '서울대학교 자유전공학부 23학번 정희원입니다. 현재 창업, AI, 자동차, 기계공학에 관심을 가지고 있으며, 서울대학교 바이브코딩 동아리 DWNC에서 활동하고 있습니다.',
      en: "I'm Hee Won Jung, class of 2023 at Seoul National University's College of Liberal Studies. I'm interested in startups, AI, automobiles, and mechanical engineering, and I'm active in DWNC, SNU's vibe-coding club.",
    },
    {
      ko: '저는 좋은 아이디어를 떠올리는 것보다 실제로 구현해 사용자에게 전달하는 과정에 더 큰 가치를 둡니다. 새로운 기술이 등장하면 이를 단순히 학습하는 데 그치지 않고, 문제를 정의하고 MVP를 제작한 뒤 사용자 반응을 확인하며 서비스를 개선하는 과정을 반복해 왔습니다.',
      en: "I place more value on building an idea and delivering it to users than on simply coming up with one. When a new technology appears, I don't stop at learning it — I define a problem, build an MVP, watch how users respond, and keep improving the service.",
    },
    {
      ko: '특히 AI와 웹 기술을 활용해 실제로 사용할 수 있는 서비스를 만드는 데 관심이 많으며, 기획부터 개발, 배포, 운영까지 제품 개발의 전 과정을 직접 경험하고 있습니다. 앞으로도 기술을 수단으로 삼아 다양한 분야의 문제를 해결하고, 사용자에게 새로운 가치를 제공하는 빌더이자 창업가로 성장하고자 합니다.',
      en: "I'm especially drawn to building services people actually use with AI and web technology, and I've been through the whole product cycle myself — planning, development, deployment, and operation. I want to keep growing as a builder and founder who treats technology as a means to solve problems across fields and deliver new value to users.",
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

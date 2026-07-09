import type { Project } from './types'

export const projects: Project[] = [
  {
    slug: 'on-hwa',
    emoji: '🌷',
    title: { ko: 'ON-HWA', en: 'ON-HWA' },
    type: {
      ko: 'AI Web App / Creator Tool / PWA',
      en: 'AI Web App / Creator Tool / PWA',
    },
    solves: {
      ko: '플로리스트의 꽃다발 이름·소개글·해시태그 작성 시간 단축 (모두의 창업 1라운드 선정)',
      en: 'Cuts the time florists spend naming bouquets and writing captions and hashtags (selected in Round 1 of “Startup for Everyone”)',
    },
    oneLiner: {
      ko: '꽃다발 사진 한 장을 올리면 AI가 꽃다발 이름, 소개 문구, 해시태그 초안을 제안해 플로리스트의 인스타그램 업로드 시간을 줄여주는 서비스입니다.',
      en: 'Upload a single bouquet photo and AI drafts a bouquet name, caption, and hashtags — cutting the time florists spend posting to Instagram.',
    },
    problem: {
      ko: '꽃집에서는 꽃다발 사진을 자주 찍지만, 매번 이름을 붙이고 소개글과 해시태그를 작성하는 데 시간이 걸립니다. 바쁜 매장 운영 중에는 포스팅이 미뤄지기 쉽고, 급하게 작성한 문구는 톤이 일정하지 않을 수 있습니다.',
      en: 'Flower shops photograph bouquets all the time, but naming each one and writing captions and hashtags takes real effort. During busy shop hours, posting gets postponed, and copy written in a hurry ends up with an inconsistent tone.',
    },
    solution: {
      ko: 'ON-HWA는 꽃다발 사진을 업로드하면 분위기와 스타일을 바탕으로 이름, 소개 문구, 해시태그 초안을 생성합니다. 사용자는 결과를 수정하고 저장한 뒤 인스타그램 게시물이나 매장 포트폴리오 콘텐츠로 바로 활용할 수 있습니다.',
      en: 'When a bouquet photo is uploaded, ON-HWA generates a name, caption, and hashtag drafts based on its mood and style. Users can edit and save the results, then use them right away for Instagram posts or shop portfolio content.',
    },
    features: [
      { ko: '꽃다발 사진 업로드', en: 'Bouquet photo upload' },
      { ko: 'AI 기반 꽃다발 이름 생성', en: 'AI-generated bouquet names' },
      {
        ko: '인스타그램 게시글 소개 문구 생성',
        en: 'Instagram caption generation',
      },
      { ko: '해시태그 초안 생성', en: 'Hashtag draft generation' },
      { ko: '결과 수정 및 저장', en: 'Editing and saving results' },
      {
        ko: '모바일 홈 화면 추가를 통한 앱처럼 사용 가능한 PWA 경험',
        en: 'App-like PWA experience via add-to-home-screen on mobile',
      },
    ],
    flows: [
      {
        steps: [
          {
            ko: '플로리스트가 새로 만든 꽃다발 사진을 업로드합니다.',
            en: 'The florist uploads a photo of a freshly made bouquet.',
          },
          {
            ko: 'AI가 꽃다발의 분위기와 스타일을 분석합니다.',
            en: "AI analyzes the bouquet's mood and style.",
          },
          {
            ko: '이름, 소개 문구, 해시태그 초안을 생성합니다.',
            en: 'It generates a name, caption, and hashtag drafts.',
          },
          {
            ko: '사용자가 매장 말투에 맞게 문구를 수정합니다.',
            en: "The user edits the copy to match the shop's voice.",
          },
          {
            ko: '저장 후 인스타그램 게시물이나 매장 포트폴리오에 활용합니다.',
            en: 'After saving, the content is used for Instagram posts or the shop portfolio.',
          },
        ],
      },
    ],
    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Google Gemini API',
      'Supabase',
      'Framer Motion',
      'Vercel',
    ],
    portfolioPoint: {
      ko: 'AI 기능을 단순히 “생성”으로만 두지 않고, 실제 플로리스트의 업무 흐름인 촬영 → 문구 작성 → 저장 → 포스팅으로 연결했습니다. 특정 직업군의 반복 업무를 줄이는 B2B/B2C 경계의 AI 도구로 기획했다는 점이 특징입니다.',
      en: "Rather than leaving AI at plain 'generation', it is wired into the florist's actual workflow: shoot → write → save → post. It was planned as an AI tool on the B2B/B2C boundary that reduces repetitive work for a specific profession.",
    },
    links: [
      { label: { ko: '서비스', en: 'Service' }, url: 'https://on-hwa.com/' },
      {
        label: { ko: 'GitHub', en: 'GitHub' },
        url: 'https://github.com/Hee1-99/ON-HWA',
      },
    ],
    images: [
      {
        src: '/images/on-hwa-1.jpg',
        alt: { ko: 'ON-HWA 앱 화면 1', en: 'ON-HWA app screen 1' },
      },
      {
        src: '/images/on-hwa-2.jpg',
        alt: { ko: 'ON-HWA 앱 화면 2', en: 'ON-HWA app screen 2' },
      },
      {
        src: '/images/on-hwa-3.jpg',
        alt: { ko: 'ON-HWA 앱 화면 3', en: 'ON-HWA app screen 3' },
      },
    ],
    future: {
      title: {
        ko: 'ON:HWA Studio — 플로리스트를 위한 AI 꽃다발 촬영 스테이션',
        en: 'ON:HWA Studio — an AI bouquet photo station for florists',
      },
      intro: {
        ko: '기존 ON:HWA가 꽃다발 사진 기반 AI 콘텐츠 생성 도구였다면, ON:HWA Studio는 플로리스트가 사진을 더 빠르고 일관되게 촬영할 수 있도록 돕는 하드웨어 확장입니다. 조명과 촬영 각도를 고정한 미니 스튜디오에서 버튼 한 번으로 사진을 촬영하고, 촬영 결과를 ON:HWA 웹앱으로 전송해 꽃다발 이름, 소개 문구, 해시태그를 자동 생성하는 것을 목표로 합니다.',
        en: 'Where ON:HWA is an AI content tool built on bouquet photos, ON:HWA Studio is a hardware extension that helps florists shoot faster and more consistently. In a mini studio with fixed lighting and camera angle, one button press takes the photo and sends it to the ON:HWA web app to auto-generate the bouquet name, caption, and hashtags.',
      },
      oneLiner: {
        ko: '꽃다발을 올려두고 버튼만 누르면, 자동 조명 촬영과 AI 문구 생성을 통해 인스타그램 업로드용 콘텐츠를 바로 만들어주는 플로리스트 전용 촬영 스테이션입니다.',
        en: 'Place the bouquet, press one button — automatic lit photography plus AI copywriting turns it straight into Instagram-ready content. A photo station made just for florists.',
      },
      tables: [
        {
          title: { ko: '추천 크기', en: 'Recommended size' },
          headers: [
            { ko: '구분', en: 'Class' },
            { ko: '크기', en: 'Size' },
            { ko: '용도', en: 'Use' },
            { ko: '평가', en: 'Assessment' },
          ],
          rows: [
            [
              { ko: '소형', en: 'Small' },
              { ko: '400 × 400 × 500mm', en: '400 × 400 × 500 mm' },
              { ko: '작은 꽃, 미니 부케, 소품', en: 'Small flowers, mini bouquets, props' },
              { ko: '일반 꽃다발에는 다소 작음', en: 'A bit small for standard bouquets' },
            ],
            [
              { ko: '추천 MVP', en: 'Recommended MVP' },
              { ko: '600 × 600 × 800mm', en: '600 × 600 × 800 mm' },
              {
                ko: '일반 꽃다발, 미니 꽃바구니, 시즌 상품',
                en: 'Standard bouquets, mini baskets, seasonal items',
              },
              { ko: '가장 현실적인 크기', en: 'The most realistic size' },
            ],
            [
              { ko: '확장형', en: 'Extended' },
              { ko: '800 × 800 × 1000mm', en: '800 × 800 × 1000 mm' },
              { ko: '큰 꽃다발, 고급 상품 촬영', en: 'Large bouquets, premium product shots' },
              {
                ko: '좋지만 매장 공간 부담이 커짐',
                en: 'Nice, but demands too much shop space',
              },
            ],
            [
              { ko: '대형', en: 'Large' },
              { ko: '1000mm 이상', en: 'Over 1000 mm' },
              { ko: '대형 화환, 스탠드', en: 'Large wreaths and stands' },
              { ko: '초기 MVP로는 과함', en: 'Overkill for an initial MVP' },
            ],
          ],
        },
        {
          title: { ko: 'MVP 구성', en: 'MVP composition' },
          headers: [
            { ko: '구성 요소', en: 'Component' },
            { ko: '구현 방식', en: 'Implementation' },
          ],
          rows: [
            [
              { ko: '촬영부', en: 'Camera unit' },
              {
                ko: '스마트폰 거치대 또는 라즈베리파이 카메라',
                en: 'Smartphone mount or Raspberry Pi camera',
              },
            ],
            [
              { ko: '조명', en: 'Lighting' },
              { ko: 'LED 링라이트 또는 LED 바', en: 'LED ring light or LED bars' },
            ],
            [
              { ko: '배경', en: 'Backdrop' },
              {
                ko: '흰색/베이지색 접이식 배경판',
                en: 'Foldable white/beige backdrop panel',
              },
            ],
            [
              { ko: '입력', en: 'Input' },
              { ko: '물리 버튼 1개', en: 'A single physical button' },
            ],
            [
              { ko: '연동', en: 'Integration' },
              {
                ko: '버튼을 누르면 사진 업로드 페이지 열기 또는 자동 업로드',
                en: 'Button press opens the upload page or uploads automatically',
              },
            ],
            [
              { ko: 'AI 기능', en: 'AI features' },
              {
                ko: '기존 ON:HWA의 이름·소개글·해시태그 생성 기능과 연결',
                en: "Connected to ON:HWA's name/caption/hashtag generation",
              },
            ],
            [
              { ko: '출력', en: 'Output' },
              {
                ko: '웹 결과 화면, 저장 기능, 인스타그램 업로드용 문구',
                en: 'Web result screen, saving, Instagram-ready copy',
              },
            ],
          ],
        },
      ],
      effects: [
        {
          ko: '플로리스트가 매번 촬영 각도와 조명을 고민하는 시간을 줄일 수 있습니다.',
          en: 'Florists spend less time worrying about camera angles and lighting for every shot.',
        },
        {
          ko: '매장 인스타그램 피드의 사진 톤과 콘텐츠 문구를 더 일관되게 유지할 수 있습니다.',
          en: "The shop's Instagram feed keeps a more consistent photo tone and copy voice.",
        },
        {
          ko: '기존 ON:HWA의 AI 콘텐츠 생성 기능을 실제 매장 작업 흐름과 더 강하게 연결할 수 있습니다.',
          en: "ON:HWA's AI content generation gets tied even more tightly into the real shop workflow.",
        },
        {
          ko: '포트폴리오 관점에서는 AI Web App에서 AI + Hardware + 소상공인 업무 자동화 프로젝트로 확장할 수 있습니다.',
          en: 'From a portfolio angle, it grows from an AI web app into an AI + hardware + small-business automation project.',
        },
      ],
      ideas: [
        {
          ko: '꽃다발 이름과 설명을 출력하는 라벨 프린터 연동',
          en: 'Label-printer integration that prints bouquet names and descriptions',
        },
        {
          ko: 'ON:HWA에 저장된 꽃다발 사진과 문구를 보여주는 매장용 디지털 포트폴리오 액자',
          en: 'An in-store digital portfolio frame showing bouquet photos and copy saved in ON:HWA',
        },
        {
          ko: '촬영 후 바로 인스타그램 캡션 형식으로 복사할 수 있는 모바일 PWA 플로우 개선',
          en: 'An improved mobile PWA flow that copies Instagram-ready captions right after shooting',
        },
        {
          ko: '향후에는 온도·습도 센서를 활용한 꽃 보관 환경 기록 기능도 고려할 수 있으나, 초기에는 콘텐츠 제작 흐름과 직접 연결되는 촬영 스테이션에 집중합니다.',
          en: 'Temperature/humidity sensing for flower-storage logs could come later, but the initial focus stays on the photo station tied directly to the content workflow.',
        },
      ],
    },
  },
  {
    slug: 'safebridge',
    emoji: '🛡️',
    title: { ko: 'SafeBridge', en: 'SafeBridge' },
    type: {
      ko: 'Safety EdTech / AI Web App / 관리자 대시보드',
      en: 'Safety EdTech / AI Web App / Admin Dashboard',
    },
    solves: {
      ko: '외국인 근로자 안전교육의 이해도 검증과 이수 증빙',
      en: 'Verifies comprehension and certifies completion of safety training for migrant workers',
    },
    oneLiner: {
      ko: '안전 관리 가이드 문서를 교육 카드와 퀴즈로 바꾸고, 근로자는 QR 링크로 교육을 완료하며, 관리자는 대시보드에서 이수 상태를 확인할 수 있는 서비스입니다.',
      en: 'Turns safety-management guides into training cards and quizzes; workers complete training via a QR link, and managers track completion on a dashboard.',
    },
    problem: {
      ko: '제조·건설 현장에서는 안전 교육이 중요하지만, 한국어가 서툰 외국인 근로자는 안전 가이드를 충분히 이해하기 어렵습니다. 단순히 문서를 보여주는 것만으로는 실제 이해도를 확인하기 어렵고, 누가 언제 어떤 내용을 학습했는지 증빙하기도 어렵습니다.',
      en: "Safety training matters on manufacturing and construction sites, but migrant workers with limited Korean struggle to fully understand safety guides. Simply showing documents can't confirm real comprehension, and there's no proof of who learned what, and when.",
    },
    solution: {
      ko: '관리자가 안전 관리 가이드를 등록하면 AI가 핵심 내용을 요약하고 교육 카드와 퀴즈로 구성합니다. 근로자는 QR 링크를 통해 별도 앱 설치 없이 교육을 받고, 퀴즈를 통과하면 이수 기록이 저장됩니다. 관리자는 대시보드에서 이수 현황과 리스크 상태를 확인할 수 있습니다.',
      en: 'When a manager registers a safety guide, AI summarizes the key content into training cards and quizzes. Workers train through a QR link with no app install, and passing the quiz stores a completion record. Managers monitor completion and risk status on a dashboard.',
    },
    features: [
      { ko: '안전 관리 가이드 등록', en: 'Safety-guide registration' },
      { ko: 'AI 기반 교육 카드 생성', en: 'AI-generated training cards' },
      {
        ko: '다국어 안전 교육 콘텐츠 구성',
        en: 'Multilingual safety-training content',
      },
      { ko: 'QR 교육 링크 발급', en: 'QR training-link issuance' },
      {
        ko: '근로자 본인 정보 입력 후 교육 진행',
        en: 'Training after simple worker identification',
      },
      { ko: '퀴즈 기반 이해도 검증', en: 'Quiz-based comprehension checks' },
      { ko: '이수 기록 저장', en: 'Completion-record storage' },
      {
        ko: '관리자 대시보드에서 완료 상태 확인',
        en: 'Completion tracking in the admin dashboard',
      },
    ],
    flows: [
      {
        label: { ko: '관리자 흐름', en: 'Manager flow' },
        steps: [
          {
            ko: '안전 관리 가이드를 등록합니다.',
            en: 'Register the safety-management guide.',
          },
          {
            ko: 'AI가 문서를 요약하고 교육 카드와 퀴즈를 생성합니다.',
            en: 'AI summarizes the document and generates training cards and quizzes.',
          },
          {
            ko: '현장에 QR 교육 링크를 공유합니다.',
            en: 'Share the QR training link on site.',
          },
          {
            ko: '대시보드에서 근로자별 이수 상태를 확인합니다.',
            en: 'Check each worker’s completion status on the dashboard.',
          },
        ],
      },
      {
        label: { ko: '근로자 흐름', en: 'Worker flow' },
        steps: [
          { ko: '현장 QR 코드를 스캔합니다.', en: 'Scan the QR code on site.' },
          {
            ko: '이름과 생년월일 등 간단한 본인 정보를 입력합니다.',
            en: 'Enter simple identification such as name and date of birth.',
          },
          {
            ko: '모국어 교육 카드를 읽습니다.',
            en: 'Read the training cards in their native language.',
          },
          { ko: '퀴즈를 풉니다.', en: 'Take the quiz.' },
          {
            ko: '모든 문항을 통과하면 교육 이수 기록이 저장됩니다.',
            en: 'Passing every question stores the completion record.',
          },
        ],
      },
    ],
    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Supabase',
      'Gemini 2.5 Flash',
      'QR Code',
      'Recharts',
      'Vercel',
    ],
    portfolioPoint: {
      ko: 'SafeBridge는 단순 교육 콘텐츠가 아니라 “교육 이해 → 퀴즈 검증 → 이수 증빙”까지 연결한 서비스입니다. 현장 안전, 다국어 접근성, 관리자 운영 효율이라는 문제를 하나의 워크플로우로 묶었다는 점이 강점입니다.',
      en: 'SafeBridge is not just training content — it connects comprehension → quiz verification → completion certification into one service. Its strength is bundling site safety, multilingual accessibility, and manager efficiency into a single workflow.',
    },
    links: [
      {
        label: { ko: '서비스', en: 'Service' },
        url: 'https://safebridge-amber.vercel.app/',
      },
      {
        label: { ko: 'GitHub', en: 'GitHub' },
        url: 'https://github.com/JINOI/workproof',
      },
    ],
    images: [
      {
        src: '/images/safebridge-1.png',
        alt: {
          ko: 'SafeBridge 관리자 대시보드 화면',
          en: 'SafeBridge admin dashboard screen',
        },
      },
    ],
  },
  {
    slug: 'soulfeed',
    emoji: '📖',
    title: { ko: '소울피드', en: 'SoulFeed' },
    type: {
      ko: 'Mobile-first Web App / Bible Writing Routine / Community App',
      en: 'Mobile-first Web App / Bible Writing Routine / Community App',
    },
    solves: {
      ko: '혼자 끊기기 쉬운 성경 필사를 공동체 루틴으로 지속',
      en: 'Keeps Bible transcription going as a community routine instead of a solo habit that fades',
    },
    oneLiner: {
      ko: '혼자 하면 쉽게 끊기는 성경 필사를 개인 기록과 함께 필사방을 통해 꾸준히 이어가도록 돕는 성경 필사 루틴 웹앱입니다.',
      en: 'A Bible-transcription routine web app that keeps an easily-broken solo habit going through personal records and shared transcription rooms.',
    },
    problem: {
      ko: '성경 필사는 의미 있는 루틴이지만, 혼자 지속하기는 어렵습니다. 기존 개인 필사 앱은 조용히 성경을 타이핑하는 경험에 집중하는 경우가 많아, 소그룹·가족·교회 공동체가 함께 루틴을 유지하는 경험은 부족합니다.',
      en: 'Bible transcription is a meaningful routine, but hard to sustain alone. Existing apps mostly focus on quietly typing scripture, leaving little room for small groups, families, and church communities to keep the routine together.',
    },
    solution: {
      ko: '소울피드는 개인 필사를 기본 기능으로 제공하면서, 핵심 경험을 “함께 필사방”에 둡니다. 사용자는 같은 필사 플랜을 공유하고, 오늘 누가 필사를 완료했는지 확인하며, 부담 없는 반응과 리마인드로 서로의 루틴을 응원할 수 있습니다.',
      en: "SoulFeed offers personal transcription as its base, but its core experience is the shared transcription room. Members follow the same plan, see who finished today's writing, and encourage each other's routine with light reactions and gentle reminders.",
    },
    features: [
      { ko: '개인 성경 필사', en: 'Personal Bible transcription' },
      { ko: '함께 필사방 생성', en: 'Shared transcription rooms' },
      { ko: '초대 링크 기반 방 참여', en: 'Join rooms via invite links' },
      {
        ko: '오늘의 필사 항목 대시보드',
        en: "Dashboard of today's transcription items",
      },
      {
        ko: '정확한 타이핑 기반 완료 처리',
        en: 'Completion based on accurate typing',
      },
      { ko: '전체 스트릭 기록', en: 'Overall streak tracking' },
      { ko: '필사 히스토리 관리', en: 'Transcription history' },
      { ko: '완료 로그와 반응', en: 'Completion logs and reactions' },
      { ko: '조용한 리마인드', en: 'Quiet reminders' },
      { ko: '한 줄 묵상 기록', en: 'One-line reflection notes' },
    ],
    flows: [
      {
        steps: [
          {
            ko: '사용자가 홈에서 오늘 해야 할 필사 항목을 확인합니다.',
            en: "Check today's transcription items on the home screen.",
          },
          {
            ko: '개인 필사 또는 함께 필사방 필사를 선택합니다.',
            en: 'Choose personal transcription or a shared room.',
          },
          {
            ko: '배정된 구절을 정확히 입력합니다.',
            en: 'Type the assigned passage accurately.',
          },
          {
            ko: '완료 후 선택적으로 한 줄 묵상을 남깁니다.',
            en: 'Optionally leave a one-line reflection after finishing.',
          },
          {
            ko: '기록과 스트릭에 반영됩니다.',
            en: 'The record and streak update.',
          },
          {
            ko: '함께 필사방에서는 멤버 완료 현황과 반응을 확인할 수 있습니다.',
            en: "In shared rooms, see members' completion status and reactions.",
          },
        ],
      },
    ],
    techStack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Firebase Auth',
      'Firestore',
      'React Hook Form',
      'Zod',
      'Vitest',
      'Vercel',
    ],
    portfolioPoint: {
      ko: '소울피드는 단순 입력 앱이 아니라 루틴 지속 문제를 공동체 UX로 해결하려는 프로젝트입니다. 개인의 기록과 공동체의 참여감을 동시에 설계했으며, 모바일 우선 환경에서 실제 신앙 루틴이 이어지도록 사용자 흐름을 구성했습니다.',
      en: 'SoulFeed is not a plain typing app — it tackles routine persistence through community UX. It designs personal records and communal participation together, with user flows built mobile-first so a real faith routine actually continues.',
    },
    links: [
      {
        label: { ko: '서비스', en: 'Service' },
        url: 'https://soul-feed.vercel.app/',
      },
      {
        label: { ko: 'GitHub', en: 'GitHub' },
        url: 'https://github.com/Hee1-99/soul-feed',
      },
    ],
    images: [],
  },
  {
    slug: 'etl-smart-summary',
    emoji: '🎧',
    title: { ko: 'eTL Smart Summary', en: 'eTL Smart Summary' },
    type: {
      ko: 'Chrome Extension / AI 요약 도구 / 교육 생산성',
      en: 'Chrome Extension / AI Summarizer / Education Productivity',
    },
    solves: {
      ko: '긴 eTL 강의 영상을 빠르게 복습할 수 있게 요약',
      en: 'Summarizes long eTL lecture videos for fast review',
    },
    oneLiner: {
      ko: 'SNU eTL 강의 영상을 Gemini 기반 AI로 요약해, 학생이 강의 내용을 빠르게 복습할 수 있도록 돕는 Chrome 확장 프로그램입니다.',
      en: 'A Chrome extension that summarizes SNU eTL lecture videos with Gemini-based AI so students can review lectures quickly.',
    },
    problem: {
      ko: '온라인 강의는 필요한 부분을 다시 찾기 어렵고, 긴 강의를 복습하는 데 시간이 많이 걸립니다. 특히 eTL 강의 영상은 수업별로 반복해서 확인해야 하는 경우가 많아, 핵심 내용을 빠르게 정리해주는 도구가 필요했습니다.',
      en: 'In online lectures it is hard to find the part you need again, and reviewing long videos takes a lot of time. eTL lecture videos in particular need repeated checking per class, so a tool that quickly organizes the key content was needed.',
    },
    solution: {
      ko: 'eTL 강의 페이지에서 강의 정보와 영상 정보를 감지하고, 확장 프로그램 팝업에서 사용자가 요약을 요청하면 백엔드가 AI 요약을 생성합니다. 사용자는 간단 요약/상세 요약, 한국어/영어 요약을 선택할 수 있고, 최근 요약 기록을 브라우저에 저장해 다시 확인할 수 있습니다.',
      en: 'The extension detects lecture and video info on the eTL page; when the user requests a summary from the popup, the backend generates it with AI. Users choose brief or detailed mode and Korean or English, and recent summaries are stored in the browser for later.',
    },
    features: [
      {
        ko: 'SNU eTL 강의 영상 요약',
        en: 'SNU eTL lecture-video summarization',
      },
      {
        ko: '간단 요약 / 상세 요약 모드 선택',
        en: 'Brief / detailed summary modes',
      },
      {
        ko: '한국어 / 영어 요약 언어 선택',
        en: 'Korean / English summary language',
      },
      { ko: '최근 요약 기록 저장', en: 'Recent-summary history' },
      { ko: '요약 내용 복사 및 삭제', en: 'Copying and deleting summaries' },
      {
        ko: 'Chrome Extension과 Express 백엔드 연동',
        en: 'Chrome extension + Express backend integration',
      },
      {
        ko: 'Gemini API 기반 요약 생성',
        en: 'Summary generation with the Gemini API',
      },
    ],
    flows: [
      {
        steps: [
          {
            ko: '사용자가 SNU eTL 강의 페이지에 접속합니다.',
            en: 'Open an SNU eTL lecture page.',
          },
          {
            ko: '강의 영상을 한 번 재생합니다.',
            en: 'Play the lecture video once.',
          },
          {
            ko: 'Chrome 확장 프로그램 팝업을 엽니다.',
            en: 'Open the extension popup.',
          },
          {
            ko: '요약 모드와 언어를 선택합니다.',
            en: 'Choose the summary mode and language.',
          },
          {
            ko: 'AI 요약을 생성하고 복사하거나 최근 기록으로 저장합니다.',
            en: 'Generate the AI summary, then copy it or keep it in recent history.',
          },
        ],
      },
    ],
    techStack: [
      'Chrome Extension Manifest V3',
      'JavaScript',
      'Node.js / Express',
      'Google Gemini API',
      'Supabase',
      'ffmpeg',
      'WebSocket',
    ],
    portfolioPoint: {
      ko: '단순한 요약 기능이 아니라, 실제 eTL 페이지의 사용 흐름 안에서 강의 정보를 감지하고 AI 백엔드로 연결한 점이 핵심입니다. 사용자가 수업 복습 과정에서 겪는 반복적인 불편을 Chrome Extension 형태로 직접 해결했습니다.',
      en: 'The core is not the summary itself but detecting lecture info inside the real eTL usage flow and wiring it to an AI backend. It directly solves a recurring pain in class review, packaged as a Chrome extension.',
    },
    links: [
      {
        label: { ko: 'Chrome Web Store', en: 'Chrome Web Store' },
        url: 'https://chromewebstore.google.com/detail/etl-smart-summary/hbikmcjglhpipkenfidakkmnjphmbfhn',
      },
      {
        label: { ko: 'GitHub', en: 'GitHub' },
        url: 'https://github.com/Hee1-99/eTL-smart-summary',
      },
    ],
    images: [
      {
        src: '/images/etl-summary-1.png',
        alt: {
          ko: 'eTL Smart Summary 확장 프로그램 팝업 화면',
          en: 'eTL Smart Summary extension popup screen',
        },
      },
      {
        src: '/images/etl-summary-2.png',
        alt: {
          ko: 'eTL Smart Summary 요약 결과 화면',
          en: 'eTL Smart Summary summary-result screen',
        },
      },
    ],
  },
  {
    slug: 'etl-organizer',
    emoji: '📁',
    title: { ko: 'eTL 강의자료 정리기', en: 'eTL Course-File Organizer' },
    type: {
      ko: 'Chrome Extension / Local Native App / 학습 생산성 도구',
      en: 'Chrome Extension / Local Native App / Study Productivity Tool',
    },
    solves: {
      ko: '흩어지는 강의자료를 과목별 폴더로 자동 정리',
      en: 'Automatically sorts scattered course files into per-course folders',
    },
    oneLiner: {
      ko: 'SNU eTL에서 다운로드한 강의자료를 과목별 폴더로 자동 정리하고, 사용자가 지정한 폴더로 이동해주는 Chrome 확장 프로그램입니다.',
      en: 'A Chrome extension that automatically organizes files downloaded from SNU eTL into per-course folders and moves them where the user chooses.',
    },
    problem: {
      ko: 'eTL에서 자료를 다운받을 때, 항상 자동으로 컴퓨터의 기본 Downloads 폴더로 다운받아집니다. 학생들은 이것을 일일이 확인하여 각 과목 폴더로 이동시켜야 하며 이 번거로움을 해결하고자 하였습니다.',
      en: "Files downloaded from eTL always land in the computer's default Downloads folder. Students have to check them one by one and move them into each course folder — this tool removes that chore.",
    },
    solution: {
      ko: '사용자가 확장 프로그램에서 과목명, 과목 URL, 저장 폴더를 한 번 등록하면, 이후 해당 eTL 과목 페이지에서 받은 파일이 자동으로 과목별 폴더에 정리됩니다. Chrome Extension과 로컬 앱을 연결해 브라우저 다운로드 이후 실제 파일 이동까지 처리합니다.',
      en: 'Register a course name, its URL, and a target folder once; from then on, files downloaded from that eTL course page are sorted into per-course folders automatically. The extension connects to a local app so the actual file move happens after the browser download.',
    },
    features: [
      {
        ko: 'eTL 과목 페이지와 과목명 연결',
        en: 'Mapping eTL course pages to course names',
      },
      {
        ko: '과목별 다운로드 경로 자동 생성',
        en: 'Automatic per-course download paths',
      },
      {
        ko: '사용자가 지정한 폴더로 강의자료 자동 이동',
        en: 'Auto-moving files to user-chosen folders',
      },
      {
        ko: 'Windows용 로컬 앱 설치 파일 제공',
        en: 'Windows local-app installer',
      },
      {
        ko: 'Chrome Native Messaging 기반 로컬 파일 처리',
        en: 'Local file handling via Chrome Native Messaging',
      },
      {
        ko: '설치 후 Python 없이 단일 실행 파일로 동작',
        en: 'Runs as a single executable — no Python needed after install',
      },
    ],
    flows: [
      {
        steps: [
          {
            ko: 'Chrome Web Store에서 확장 프로그램을 설치합니다.',
            en: 'Install the extension from the Chrome Web Store.',
          },
          {
            ko: '팝업에서 로컬 앱 설치 파일을 다운로드합니다.',
            en: 'Download the local-app installer from the popup.',
          },
          {
            ko: '과목명, 과목 URL, 저장 폴더를 등록합니다.',
            en: 'Register the course name, course URL, and target folder.',
          },
          {
            ko: 'eTL 과목 페이지에서 강의자료를 다운로드합니다.',
            en: 'Download course files from the eTL course page.',
          },
          {
            ko: '파일이 자동으로 과목별 폴더에 저장되고 지정 폴더로 이동됩니다.',
            en: 'Files are saved into per-course folders and moved to the chosen location automatically.',
          },
        ],
      },
    ],
    techStack: [
      'Chrome Extension Manifest V3',
      'JavaScript',
      'Chrome Downloads API',
      'Chrome Native Messaging',
      'Python 기반 로컬 앱',
      'PowerShell / Inno Setup',
      'Windows 10+',
    ],
    portfolioPoint: {
      ko: '브라우저 확장 프로그램만으로는 처리하기 어려운 로컬 파일 이동 문제를 Native Messaging과 로컬 앱으로 해결했습니다. 단순한 웹 기능이 아니라 사용자의 실제 파일 관리 습관까지 연결한 생산성 도구라는 점이 강점입니다.',
      en: "Local file moves are beyond what a browser extension alone can do, so it pairs Native Messaging with a local app. Its strength is being a productivity tool wired into users' real file-management habits, not just a web feature.",
    },
    links: [
      {
        label: { ko: 'Chrome Web Store', en: 'Chrome Web Store' },
        url: 'https://chromewebstore.google.com/detail/oknnfcnknnalckkpgjnbflmoiofhnffp',
      },
      {
        label: { ko: 'GitHub', en: 'GitHub' },
        url: 'https://github.com/Hee1-99/downloads-allocator',
      },
    ],
    images: [
      {
        src: '/images/etl-organizer-1.png',
        alt: {
          ko: 'eTL 강의자료 정리기 확장 프로그램 화면',
          en: 'eTL Course-File Organizer extension screen',
        },
      },
    ],
  },
]

export function getProject(slug: string | undefined): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

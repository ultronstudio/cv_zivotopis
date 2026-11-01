export const locales = ['cs', 'en'] as const;
export type Locale = (typeof locales)[number];
export type Localized = Record<Locale, string>;

export const siteUrl = 'https://cv.petrvurm.cz';

export const t = (value: string | Localized, locale: Locale) =>
  typeof value === 'string' ? value : value[locale];

export const cv = {
  basics: {
    name: 'Petr Vurm',
    label: 'Software Developer',
    phone: '+420 732 361 259',
    phoneHref: '+420732361259',
    email: 'kontakt@petrvurm.cz',
    web: 'petrvurm.cz',
    webHref: 'https://petrvurm.cz',
    github: 'github.com/ultronstudio',
    githubHref: 'https://github.com/ultronstudio',
    linkedin: 'linkedin.com/in/vurmpetr',
    linkedinHref: 'https://www.linkedin.com/in/vurmpetr/',
    location: {
      cs: 'Nechanice, Královéhradecký kraj, Česká republika',
      en: 'Nechanice, Hradec Králové Region, Czech Republic',
    },
  },
  meta: {
    cs: {
      title: 'Životopis | Petr Vurm',
      description:
        'Software developer zaměřený na webové a full-stack aplikace, backend, databáze, AI-assisted development a technické nástroje.',
      keywords:
        'Petr Vurm, software developer, full-stack developer, PHP, JavaScript, TypeScript, C#, Python, Laravel, React, .NET, OpenAI API, LLM, Linux, Docker, životopis, CV',
    },
    en: {
      title: 'CV | Petr Vurm',
      description:
        'Software developer focused on web and full-stack applications, backend systems, databases, AI-assisted development, and technical tooling.',
      keywords:
        'Petr Vurm, software developer, full-stack developer, PHP, JavaScript, TypeScript, C#, Python, Laravel, React, .NET, OpenAI API, LLM, Linux, Docker, resume, CV',
    },
  },
  ui: {
    print: { cs: 'Vytisknout', en: 'Print' },
    profile: { cs: 'Profil', en: 'Profile' },
    education: { cs: 'Vzdělání', en: 'Education' },
    experience: { cs: 'Praxe', en: 'Experience' },
    skills: { cs: 'Technické znalosti', en: 'Technical Skills' },
    languages: { cs: 'Jazyky', en: 'Languages' },
    strengths: { cs: 'Silné stránky', en: 'Strengths' },
  },
  profile: [
    {
      cs: 'Software developer zaměřený na webové a full-stack aplikace, backend, databáze a technické nástroje. Od roku 2024 pracuji také jako OSVČ na vlastních i klientských projektech.',
      en: 'Software developer focused on web and full-stack applications, backend systems, databases, and technical tooling. Since 2024, I have also worked as a self-employed developer on both client and personal projects.',
    },
    {
      cs: 'Jsem zvyklý převzít existující systém, zorientovat se v cizím kódu, najít problém a dotáhnout změnu od návrhu přes implementaci a testování až po nasazení. AI nástroje používám jako součást vývoje, analýzy a automatizace, jejich výstupy ale kontroluji, testuji a upravuji podle konkrétního systému.',
      en: 'I am used to taking over existing systems, navigating unfamiliar code, identifying problems, and carrying changes from design through implementation and testing to deployment. I use AI tools as part of development, analysis, and automation, while reviewing, testing, and adapting their output to the specific system.',
    },
    {
      cs: 'Vedle webového vývoje se věnuji také serverům, vývojářskému toolingu, herním technologiím a low-level experimentům.',
      en: 'Alongside web development, I also work with servers, developer tooling, game technologies, and low-level experiments.',
    },
  ],
  education: [
    {
      institution: 'SPŠE a VOŠ Pardubice',
      program: {
        cs: 'Informační technologie – vývoj aplikací',
        en: 'Information Technology – Application Development',
      },
      period: { cs: 'září 2026 – dosud', en: 'September 2026 – present' },
      description: {
        cs: 'Předpokládané ukončení: 2027',
        en: 'Expected completion: 2027',
      },
    },
    {
      institution: 'SPŠ, SOŠ a SOU Hradební, Hradec Králové',
      program: {
        cs: 'Informační technologie – všeobecné studium IT',
        en: 'Information Technology – Broad IT Curriculum',
      },
      period: { cs: 'září 2021 – srpen 2026', en: 'September 2021 – August 2026' },
      description: {
        cs: 'Široce zaměřené studium informačních technologií zahrnující software, hardware, elektroniku, automatizaci a robotiku. Studium ukončeno přestupem na SPŠE a VOŠ Pardubice.',
        en: 'Broad information technology studies covering software, hardware, electronics, automation, and robotics. The studies ended with a transfer to SPŠE a VOŠ Pardubice.',
      },
    },
  ],
  experience: [
    {
      role: { cs: 'Software Developer / OSVČ', en: 'Software Developer / Self-employed' },
      place: { cs: 'Samostatná vývojářská činnost', en: 'Independent Software Development' },
      period: { cs: 'únor 2024 – dosud', en: 'February 2024 – present' },
      description: {
        cs: 'Vývoj, rozšiřování a správa webových aplikací, e-shopů, backendů, administračních rozhraní a databázových řešení. Pracuji na nových projektech i existujících systémech. Řeším analýzu problémů, návrh a implementaci změn, API a externí integrace, deployment, testování a následnou technickou správu. Součástí práce je také komunikace se zákazníky a práce s Linux servery a hostingovou infrastrukturou.',
        en: 'Development, extension, and maintenance of web applications, e-commerce systems, backends, administration interfaces, and database solutions. I work on both new projects and existing systems, covering problem analysis, solution design and implementation, APIs and third-party integrations, deployment, testing, and ongoing technical maintenance. The work also includes client communication and Linux server and hosting infrastructure tasks.',
      },
    },
    {
      role: { cs: 'Externí vývojář', en: 'External Developer' },
      place: 'DAMI development s.r.o.',
      period: { cs: 'únor 2024 – květen 2024', en: 'February 2024 – May 2024' },
      duration: { cs: '4 měsíce', en: '4 months' },
      description: {
        cs: 'Údržba a rozšiřování existujících softwarových projektů, orientace ve starší kódové bázi, debugging a implementace požadovaných změn.',
        en: 'Maintenance and extension of existing software projects, navigating an older codebase, debugging, and implementing requested changes.',
      },
    },
    {
      role: { cs: 'Vedoucí školního programátorského týmu', en: 'Lead of the School Programming Team' },
      place: 'SPŠ, SOŠ a SOU Hradební',
      period: { cs: 'červen 2023 – září 2025', en: 'June 2023 – September 2025' },
      duration: { cs: '2 roky a 4 měsíce', en: '2 years 4 months' },
      description: {
        cs: 'Vedení a mentoring členů týmu, rozdělování práce, konzultace technických řešení a spolupráce na programátorských projektech.',
        en: 'Leading and mentoring team members, assigning work, consulting on technical solutions, and collaborating on programming projects.',
      },
    },
  ],
  skills: [
    {
      title: { cs: 'Programovací jazyky a web', en: 'Programming Languages & Web' },
      items: ['PHP', 'JavaScript / TypeScript', 'C#', 'Python', 'SQL', 'HTML / CSS'],
    },
    {
      title: { cs: 'Frameworky a vývojářské technologie', en: 'Frameworks & Development Technologies' },
      items: [
        'Laravel',
        'React',
        '.NET / WinForms',
        'REST API',
        { cs: 'OpenAI API / LLM integrace', en: 'OpenAI API / LLM integrations' },
        'Git / GitHub',
        'Unreal Engine',
        'Visual Studio / Visual Studio Code',
      ],
    },
    {
      title: { cs: 'Databáze, systémy a infrastruktura', en: 'Databases, Systems & Infrastructure' },
      items: [
        'MySQL / MariaDB',
        'Linux',
        'Windows',
        'Docker',
        { cs: 'CI/CD a deployment', en: 'CI/CD and deployment' },
        { cs: 'Monitoring a základní správa sítí', en: 'Monitoring and basic network administration' },
      ],
    },
    {
      title: { cs: 'Další technické oblasti', en: 'Other Technical Areas' },
      items: [
        { cs: 'AI-assisted development a práce s LLM', en: 'AI-assisted development and work with LLMs' },
        { cs: 'Integrace AI do aplikací', en: 'AI integration into applications' },
        { cs: 'Lokální AI modely a vývojářské workflow', en: 'Local AI models and developer workflows' },
        { cs: 'Debugging a profiling', en: 'Debugging and profiling' },
        'Reverse engineering',
        { cs: 'Game development a editor tooling', en: 'Game development and editor tooling' },
        'SEO, Google Analytics, Search Console',
        { cs: 'Adobe Photoshop a střih videa', en: 'Adobe Photoshop and video editing' },
      ],
    },
  ],
  languages: [
    { name: { cs: 'čeština', en: 'Czech' }, level: { cs: 'rodilý mluvčí', en: 'native speaker' } },
    {
      name: { cs: 'angličtina', en: 'English' },
      level: {
        cs: 'práce s technickou dokumentací a běžná technická komunikace',
        en: 'technical documentation and everyday technical communication',
      },
    },
    { name: { cs: 'němčina', en: 'German' }, level: { cs: 'základy', en: 'basic knowledge' } },
  ],
  strengths: [
    { cs: 'Analytické a logické řešení problémů', en: 'Analytical and logical problem-solving' },
    { cs: 'Samostatnost a odpovědnost za svěřenou práci', en: 'Independence and responsibility for assigned work' },
    { cs: 'Rychlá orientace v nových technologiích a cizím kódu', en: 'Fast orientation in new technologies and unfamiliar code' },
    { cs: 'Vedení týmu, mentoring a technická komunikace', en: 'Team leadership, mentoring, and technical communication' },
  ],
} as const;

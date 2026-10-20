import {
  htmlIcon,
  cssIcon,
  bootstrapIcon,
  tailwindIcon,
  javascriptIcon,
  reactLogoIcon,
  vueIcon,
  nextjsIcon,
  frontendCodeIcon,
  phpIcon,
  laravelIcon,
  nestjsIcon,
  backendLayersIcon,
  dartIcon,
  flutterIcon,
  mobileLayersIcon,
  mysqlIcon,
  postgresqlIcon,
  databaseIcon,
  gitIcon,
  githubIcon,
  figmaIcon,
  canvaIcon,
  quizbehaviorSidebar,
  quizbehaviorDashboard,
} from './icons';

export const personalInfo = {
  initials: 'TS',
  name: 'Sang TEY',
  role: 'Full-Stack Developer & ITE Student',
  institution: 'Royal University of Phnom Penh (RUPP)',
  email: 'teysang168@gmail.com',
  status: 'Available for opportunities',
  heroHeadingLine1: 'I build digital',
  heroHeadingLine2: 'experiences that work.',
  heroBio: 'Final-year ITE student at RUPP, focused on creating modern, useful, and scalable web applications from front to back.',
  aboutLead: "I'm a final-year Information Technology Engineering student at the Royal University of Phnom Penh with a strong focus on full-stack web development.",
  aboutBody: "As a fast learner, I enjoy turning ideas into clean, intuitive products and understanding how every layer works together. I'm looking for an opportunity to contribute, learn from a great team, and grow as a Frontend, Backend, or Full-Stack Developer.",
  githubUrl: 'https://github.com/SANGArs5',
  linkedinUrl: 'https://linkedin.com',
  telegramUsername: '@TAESANG_ARS',
  telegramUrl: 'https://t.me/TAESANG_ARS',
};

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const educationList = [
  {
    period: '2023 — Present',
    school: 'Royal University of Phnom Penh',
    degree: 'Bachelor of Information Technology Engineering',
    badge: 'RUPP',
    badgeRotation: 'rot-pos',
    badgeShape: 'square',
  },
  {
    period: '2017 — 2023',
    school: 'Angkor High School, Siem Reap',
    degree: 'Baccalaureate II',
    badge: 'BAC II',
    badgeRotation: 'rot-neg',
    badgeShape: 'square',
  },
  {
    period: '2013 — 2017',
    school: 'Watrajabo Primary School, Siem Reap',
    degree: 'Primary education',
    badge: 'PRIMARY',
    badgeRotation: 'rot-pos',
    badgeShape: 'rect',
  },
];

export const projectsList = [
  {
    id: '01',
    category: 'Full-stack web application',
    title: 'Quiz Behavior',
    subtitle: 'Teacher & Student Integrity Portal',
    description:
      'An academic integrity platform that creates a fair testing environment for online quizzes. It monitors suspicious activity and provides administrators with organized, actionable records of potential violations.',
    tags: ['React.js', 'Laravel', 'MySQL'],
    colorTheme: 'sage',
    accentColor: 'orange',
    previewVariant: 'tilted-neg',
    githubUrl: 'https://github.com/SANGArs5/quizbehavior',
    image: quizbehaviorDashboard,
    sidebarImage: quizbehaviorSidebar,
  },
  {
    id: '02',
    category: 'Flutter mobile application',
    title: 'ITE Store Mobile App',
    description:
      'A responsive mobile shopping experience designed in Figma and developed with reusable Flutter components, multiple environments, smooth API integration, and optimized application performance.',
    tags: ['Flutter', 'Dart', 'REST API', 'Figma'],
    colorTheme: 'rose',
    accentColor: 'lime',
    previewVariant: 'tilted-pos',
  },
];

export const skillsData = [
  {
    id: '01',
    title: 'Frontend',
    iconBoxClass: 'lime',
    icon: frontendCodeIcon,
    description: 'HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, React.js, Vue.js, and Next.js.',
    technologies: [
      { name: 'HTML', icon: htmlIcon },
      { name: 'CSS', icon: cssIcon },
      { name: 'Bootstrap', icon: bootstrapIcon },
      { name: 'Tailwind', icon: tailwindIcon },
      { name: 'JavaScript', icon: javascriptIcon },
      { name: 'React.js', icon: reactLogoIcon },
      { name: 'Vue.js', icon: vueIcon },
      { name: 'Next.js', icon: nextjsIcon },
    ],
  },
  {
    id: '02',
    title: 'Backend',
    iconBoxClass: 'orange',
    icon: backendLayersIcon,
    description: 'Server-side applications and APIs using PHP, Laravel, NestJS, and modern patterns.',
    technologies: [
      { name: 'PHP', icon: phpIcon },
      { name: 'Laravel', icon: laravelIcon },
      { name: 'NestJS', icon: nestjsIcon },
    ],
  },
  {
    id: '03',
    title: 'Mobile',
    iconBoxClass: 'white',
    icon: mobileLayersIcon,
    description: 'Responsive cross-platform mobile applications built with Dart and Flutter.',
    technologies: [
      { name: 'Dart', icon: dartIcon },
      { name: 'Flutter', icon: flutterIcon },
    ],
  },
  {
    id: '04',
    title: 'Database',
    iconBoxClass: 'blue',
    icon: databaseIcon,
    description: 'Relational database design, integration, and management with MySQL and PostgreSQL.',
    technologies: [
      { name: 'MySQL', icon: mysqlIcon },
      { name: 'PostgreSQL', icon: postgresqlIcon },
    ],
  },
];

export const toolsData = [
  { name: 'Git', icon: gitIcon },
  { name: 'GitHub', icon: githubIcon, url: 'https://github.com/SANGArs5' },
  { name: 'Figma', icon: figmaIcon },
  { name: 'Canva', icon: canvaIcon },
];

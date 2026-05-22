'use client';

import { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string | string[];
  tString: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    resume: 'Resume',
    blog: 'Blog',
    experience: 'Experience',
    education: 'Education',
    contact: 'Contact',

    // Hero
    heroHeadline: 'Software Engineering Student Building Modern Web & AI Solutions',
    heroSubheadline: 'I design and develop scalable full-stack applications, analytics platforms, and AI-powered tools with a strong focus on performance, clean architecture, and user experience.',
    viewProjects: 'View Projects',
    downloadResume: 'Download Resume',
    contactMe: 'Contact Me',

    // About
    fullStackDeveloper: 'Software Engineering Student',
    professionalTitle: 'Software Engineering Student | Full-Stack Developer | AI & Data Enthusiast',
    location: 'Tunis, Tunisia',
    email: 'Email',
    phone: 'Phone',
    bio: 'I am a Software Engineering student based in Tunis, Tunisia, passionate about full-stack development, artificial intelligence, and scalable software systems.\n\nI enjoy building modern web applications, analytics platforms, and AI-powered tools that combine clean design with practical engineering solutions.',
    aboutInterests: [
      'Software Architecture',
      'Full-Stack Development',
      'AI & Machine Learning',
      'Data Analytics',
      'Cloud & Scalable Systems'
    ],
    continuousLearning: 'I am continuously improving my technical skills through real-world projects, internships, and engineering studies.',

    // Languages
    languages: 'Languages',
    arabicNative: 'Arabic (Native)',
    englishFluent: 'English (Fluent)',
    frenchC1: 'French (C1)',

    // Skills
    programming: 'Languages',
    frontend: 'Frontend',
    backend: 'Backend',
    mobile: 'Mobile',
    databases: 'Databases',
    aiAndData: 'AI & Data',
    tools: 'Tools',
    technicalSkills: 'Technical Skills',

    // Projects
    featuredProjects: 'Featured Projects',
    otherProjects: 'Other Projects',
    viewProject: 'View on GitHub',

    // Featured project entries
    taskFlow: 'TaskFlow — Task Management Platform',
    taskFlowDesc: 'Modern full-stack productivity platform with authentication, role management, and advanced task organization.',
    aiPdfOrganizer: 'AI-Powered PDF Organizer',
    aiPdfOrganizerDesc: 'AI-based document organization platform using semantic embeddings and intelligent PDF classification.',
    studentPrediction: 'Student Performance Prediction',
    studentPredictionDesc: 'Machine learning project analyzing academic datasets to predict student success using multiple ML models.',
    analyticsplatform: 'Web & Mobile Analytics Platform',
    analyticsDesc: 'Full-stack analytics platform tracking and visualizing user interactions across web and mobile systems.',

    // Other project entries
    portfolioWebsite: 'Portfolio Website',
    portfolioWebsiteDesc: 'Personal portfolio built with Next.js and Tailwind CSS',
    chatgptClone: 'ChatGPT Clone',
    chatgptDesc: 'Desktop AI chat application built with C# and OpenAI API',
    liveChatApp: 'Live Chat App',
    liveChatDesc: 'Real-time chat application with PHP WebSocket backend',

    // Experience
    experienceTitle: 'Full-Stack Developer Intern',
    experienceCompany: 'Wubik',
    experienceLocation: 'Gafsa, Tunisia',
    experiencePeriod: 'Jan 2025 – Apr 2025',
    experiencePoints: [
      'Developed RESTful APIs using Express.js for analytics and reporting systems',
      'Implemented secure authentication and role-based access control (JWT & RBAC)',
      'Built responsive dashboards with React.js and mobile interfaces with Flutter',
      'Collaborated in Agile development sprints and participated in code reviews',
      'Improved performance and scalability of data visualization features'
    ],

    // Education
    educationISAMMDegree: 'Engineering Degree in Computer Science — Software Engineering',
    educationISAMMSchool: 'Higher Institute of Multimedia Arts of Manouba (ISAMM)',
    educationISAMMYear: '2025 – Present',
    educationISAMMLocation: 'Manouba, Tunisia',
    educationISAEGDegree: "Bachelor's Degree in Business Computing — Business Information Systems",
    educationISAEGSchool: 'Higher Institute of Business Administration of Gafsa (ISAEG)',
    educationISAEGYear: '2022 – 2025',
    educationISAEGLocation: 'Gafsa, Tunisia',

    // Contact
    contactHeadline: "Let's Work Together",
    contactSubtext: "I'm always open to new opportunities, collaborations, and interesting projects. Feel free to reach out.",

    // Blog
    readMore: 'Read More',

    // Blog Post 1 — AI Dev Tools
    aiCompetitionTitle: 'I Tried Building Apps with AI Tools — Here\'s What Actually Happened',
    aiCompetitionDate: 'May 2025',
    aiCompetitionDesc: 'After hearing all the hype about AI-powered development platforms, I decided to test them out myself. Some surprised me, others... not so much.',
    aiCompetitionContent: 'After hearing all the hype about AI-powered development platforms, I decided to test them out myself. Some surprised me, others... not so much.',
    aiCompetitionIntro: 'So everyone keeps talking about how AI is going to replace developers. I\'ve been hearing this for months — Lovable, Bolt.new, Cursor, you name it. As a software engineering student, I figured I should actually try these tools instead of just reading hot takes on Twitter. So I spent a couple of weeks building small projects with different AI platforms, and I wanted to share what I actually found.',
    aiCompetitionPoints: [
      'Lovable was impressive for quick prototyping — I built a basic task manager UI in about 20 minutes. But the moment I needed custom backend logic or proper state management, I was back to writing code myself. It\'s great for MVPs, not so much for production apps.',
      'Bolt.new is genuinely cool because everything runs in the browser. I used it to spin up a React app with an Express backend, and it worked surprisingly well. The free tier is generous, which matters when you\'re a student with zero budget.',
      'The biggest lesson: these tools are assistants, not replacements. I still needed to understand what good code looks like to fix the weird stuff the AI generated. If you don\'t know React, the AI-generated React code won\'t save you.',
      'Where AI tools actually shine is boilerplate. Setting up auth, creating CRUD endpoints, writing CSS — all the repetitive stuff goes way faster. That\'s genuinely useful.',
      'My honest take: learn to code properly first, then use AI tools to speed up your workflow. Skipping the fundamentals is a trap.'
    ],
    aiCompetitionConclusion: 'The competition between these platforms is actually great for us developers. Better tools, lower prices, more options. But I think the real skill isn\'t knowing which AI tool to use — it\'s knowing enough about software engineering to evaluate what the AI gives you. That\'s what I\'m focusing on.',

    // Blog Post 2 — Data
    dataValueTitle: 'Why I Think Every Developer Should Understand Data',
    dataValueDate: 'April 2025',
    dataValueDesc: 'After working on analytics projects and studying data science concepts, I realized that understanding data isn\'t optional anymore — it\'s a core engineering skill.',
    dataValueContent: 'After working on analytics projects and studying data science concepts, I realized that understanding data isn\'t optional anymore — it\'s a core engineering skill.',
    dataValueIntro: 'I used to think data science was a completely separate field from software engineering. You either build apps or you analyze data, right? Wrong. After my internship where I built analytics dashboards, and after working on my student performance prediction project, I changed my mind completely. Here\'s why I think data literacy is becoming essential for every developer.',
    dataValuePoints: [
      'During my internship at Wubik, I had to build dashboards that visualize user behavior data. Turns out, if you don\'t understand what the data means, you\'ll build charts that look nice but tell you nothing useful. I had to learn about data aggregation, filtering, and what metrics actually matter.',
      'Working on my ML project (predicting student performance), I learned that the hardest part isn\'t training the model — it\'s cleaning and preparing the data. I spent more time on data preprocessing than on the actual machine learning. Nobody tells you that in tutorials.',
      'Privacy matters more than you think. When you\'re handling user data, you need to think about GDPR, data anonymization, and secure storage from day one. I learned this the hard way when reviewing our API endpoints for security.',
      'Even for \"regular\" web development, understanding database optimization, query performance, and data modeling makes you a much better backend developer. My SQL skills improved significantly once I started thinking about data holistically.',
      'If you\'re a student, my advice: take at least one data science or analytics course. Even if you never become a data scientist, the way it changes how you think about building software is worth it.'
    ],
    dataValueConclusion: 'Data isn\'t just for data scientists anymore. As the line between software engineering and data engineering keeps blurring, developers who understand both sides will have a real advantage. I\'m glad I started learning this early — it\'s already made me a better developer.',

    // Blog Post 3 — Full-Stack Lessons (NEW)
    fullStackLessonsTitle: 'What I Learned Building My First Serious Full-Stack Project',
    fullStackLessonsDate: 'March 2025',
    fullStackLessonsDesc: 'Building an analytics platform from scratch taught me more about software engineering than any textbook. Here are the honest lessons.',
    fullStackLessonsContent: 'Building an analytics platform from scratch taught me more about software engineering than any textbook. Here are the honest lessons.',
    fullStackLessonsIntro: 'For my final year project, I built a full-stack analytics platform — React frontend, Express.js backend, MySQL database, and a Flutter mobile app. It was the biggest project I\'d ever attempted, and honestly, it broke me a few times before it all came together. Here are the things I wish someone had told me before I started.',
    fullStackLessonsPoints: [
      'Architecture matters more than features. I spent the first two weeks just adding features without planning the project structure. By week three, my codebase was a mess. I had to stop and restructure everything — separate concerns, create proper API routes, organize components. It cost me a week, but it saved me a month.',
      'Don\'t underestimate database design. I initially designed my tables around what I thought I needed. When requirements changed (and they always do), I had to migrate data and rewrite queries. Now I spend way more time on database design upfront. A good schema saves you from painful migrations later.',
      'The frontend-backend connection is where most bugs live. CORS issues, auth token handling, API response formatting — these \"boring\" integration problems consumed more debugging time than any complex algorithm. Get your API contracts right early.',
      'Flutter for mobile was a great choice, but context switching between React and Flutter was mentally exhausting. They\'re both declarative UI frameworks, but the ecosystem differences are real. My advice: get comfortable with one platform before adding another.',
      'Testing isn\'t optional when your project grows. I skipped tests at first because \"it\'s just a school project.\" Then I deployed a broken API endpoint that corrupted dashboard data. After that, I wrote tests for every API route. Lesson learned the hard way.'
    ],
    fullStackLessonsConclusion: 'Building this project was the hardest thing I\'ve done as a student, and also the most rewarding. It taught me that real software engineering isn\'t about knowing every framework — it\'s about making good decisions about structure, data, and tradeoffs. If you\'re a student thinking about doing a full-stack project: do it. You\'ll learn more in three months than in a year of tutorials.',

    // Interests (for resume)
    interests: 'Interests',

    // Professional Summary (for resume)
    professionalSummary: 'Software Engineering student with experience in full-stack web development, analytics platforms, and AI-powered applications. Skilled in building scalable systems using React.js, Next.js, Node.js, Python, and modern databases. Passionate about software architecture, machine learning, and creating efficient digital solutions.',
  },
  fr: {
    // Navigation
    about: 'À propos',
    skills: 'Compétences',
    projects: 'Projets',
    resume: 'CV',
    blog: 'Blog',
    experience: 'Expérience',
    education: 'Formation',
    contact: 'Contact',

    // Hero
    heroHeadline: 'Étudiant en Génie Logiciel — Solutions Web & IA Modernes',
    heroSubheadline: 'Je conçois et développe des applications full-stack évolutives, des plateformes d\'analyse et des outils propulsés par l\'IA, avec un accent sur la performance, l\'architecture propre et l\'expérience utilisateur.',
    viewProjects: 'Voir les Projets',
    downloadResume: 'Télécharger le CV',
    contactMe: 'Me Contacter',

    // About
    fullStackDeveloper: 'Étudiant en Génie Logiciel',
    professionalTitle: 'Étudiant en Génie Logiciel | Développeur Full-Stack | Passionné IA & Data',
    location: 'Tunis, Tunisie',
    email: 'Email',
    phone: 'Téléphone',
    bio: 'Je suis un étudiant en Génie Logiciel basé à Tunis, passionné par le développement full-stack, l\'intelligence artificielle et les systèmes logiciels évolutifs.\n\nJ\'aime construire des applications web modernes, des plateformes d\'analyse et des outils propulsés par l\'IA qui allient design épuré et solutions d\'ingénierie pratiques.',
    aboutInterests: [
      'Architecture Logicielle',
      'Développement Full-Stack',
      'IA & Machine Learning',
      'Analyse de Données',
      'Cloud & Systèmes Évolutifs'
    ],
    continuousLearning: 'J\'améliore continuellement mes compétences techniques à travers des projets concrets, des stages et mes études d\'ingénierie.',

    // Languages
    languages: 'Langues',
    arabicNative: 'Arabe (Natif)',
    englishFluent: 'Anglais (Courant)',
    frenchC1: 'Français (C1)',

    // Skills
    programming: 'Langages',
    frontend: 'Frontend',
    backend: 'Backend',
    mobile: 'Mobile',
    databases: 'Bases de données',
    aiAndData: 'IA & Data',
    tools: 'Outils',
    technicalSkills: 'Compétences techniques',

    // Projects
    featuredProjects: 'Projets Principaux',
    otherProjects: 'Autres Projets',
    viewProject: 'Voir sur GitHub',

    // Featured project entries
    taskFlow: 'TaskFlow — Plateforme de Gestion de Tâches',
    taskFlowDesc: 'Plateforme de productivité full-stack moderne avec authentification, gestion des rôles et organisation avancée des tâches.',
    aiPdfOrganizer: 'Organisateur PDF Intelligent',
    aiPdfOrganizerDesc: 'Plateforme d\'organisation de documents basée sur l\'IA utilisant des embeddings sémantiques et la classification intelligente de PDF.',
    studentPrediction: 'Prédiction de Performance Étudiante',
    studentPredictionDesc: 'Projet de machine learning analysant des données académiques pour prédire la réussite des étudiants avec plusieurs modèles ML.',
    analyticsplatform: 'Plateforme d\'Analyse Web & Mobile',
    analyticsDesc: 'Plateforme d\'analyse full-stack pour le suivi et la visualisation des interactions utilisateur sur les systèmes web et mobiles.',

    // Other project entries
    portfolioWebsite: 'Site Portfolio',
    portfolioWebsiteDesc: 'Portfolio personnel construit avec Next.js et Tailwind CSS',
    chatgptClone: 'Clone ChatGPT',
    chatgptDesc: 'Application de chat IA de bureau construite avec C# et l\'API OpenAI',
    liveChatApp: 'Application de Chat en Direct',
    liveChatDesc: 'Application de chat en temps réel avec backend PHP WebSocket',

    // Experience
    experienceTitle: 'Développeur Full-Stack Stagiaire',
    experienceCompany: 'Wubik',
    experienceLocation: 'Gafsa, Tunisie',
    experiencePeriod: 'Jan 2025 – Avr 2025',
    experiencePoints: [
      'Développement d\'APIs RESTful avec Express.js pour les systèmes d\'analyse et de reporting',
      'Implémentation d\'authentification sécurisée et contrôle d\'accès basé sur les rôles (JWT & RBAC)',
      'Création de tableaux de bord responsifs avec React.js et interfaces mobiles avec Flutter',
      'Collaboration dans les sprints de développement Agile et participation aux revues de code',
      'Amélioration de la performance et de l\'évolutivité des fonctionnalités de visualisation de données'
    ],

    // Education
    educationISAMMDegree: 'Diplôme d\'Ingénieur en Informatique — Génie Logiciel',
    educationISAMMSchool: 'Institut Supérieur des Arts Multimédia de la Manouba (ISAMM)',
    educationISAMMYear: '2025 – Présent',
    educationISAMMLocation: 'Manouba, Tunisie',
    educationISAEGDegree: 'Licence en Informatique de Gestion — Systèmes d\'Information',
    educationISAEGSchool: 'Institut Supérieur d\'Administration des Affaires de Gafsa (ISAEG)',
    educationISAEGYear: '2022 – 2025',
    educationISAEGLocation: 'Gafsa, Tunisie',

    // Contact
    contactHeadline: 'Travaillons Ensemble',
    contactSubtext: 'Je suis toujours ouvert aux nouvelles opportunités, collaborations et projets intéressants. N\'hésitez pas à me contacter.',

    // Blog
    readMore: 'Lire la suite',

    // Blog Post 1 — AI Dev Tools
    aiCompetitionTitle: 'J\'ai Essayé de Créer des Apps avec des Outils IA — Voici Ce Qui S\'est Passé',
    aiCompetitionDate: 'Mai 2025',
    aiCompetitionDesc: 'Après avoir entendu tout le buzz autour des plateformes de développement alimentées par l\'IA, j\'ai décidé de les tester moi-même. Certaines m\'ont surpris, d\'autres... pas tellement.',
    aiCompetitionContent: 'Après avoir entendu tout le buzz autour des plateformes de développement alimentées par l\'IA, j\'ai décidé de les tester moi-même. Certaines m\'ont surpris, d\'autres... pas tellement.',
    aiCompetitionIntro: 'Tout le monde parle de comment l\'IA va remplacer les développeurs. J\'entends ça depuis des mois — Lovable, Bolt.new, Cursor, etc. En tant qu\'étudiant en génie logiciel, j\'ai décidé d\'essayer ces outils au lieu de lire des opinions sur Twitter. J\'ai passé quelques semaines à construire des petits projets avec différentes plateformes IA, et je voulais partager ce que j\'ai vraiment trouvé.',
    aiCompetitionPoints: [
      'Lovable était impressionnant pour le prototypage rapide — j\'ai construit une interface de gestion de tâches en 20 minutes environ. Mais dès que j\'avais besoin de logique backend personnalisée ou d\'une gestion d\'état propre, je revenais à écrire du code moi-même. Super pour les MVPs, pas pour la production.',
      'Bolt.new est vraiment cool parce que tout tourne dans le navigateur. J\'ai créé une app React avec un backend Express, et ça marchait étonnamment bien. Le niveau gratuit est généreux, ce qui compte quand on est étudiant sans budget.',
      'La plus grande leçon : ces outils sont des assistants, pas des remplaçants. J\'avais toujours besoin de comprendre à quoi ressemble du bon code pour corriger les trucs bizarres que l\'IA générait.',
      'Là où les outils IA brillent vraiment, c\'est le boilerplate. Configurer l\'auth, créer des endpoints CRUD, écrire du CSS — tout le travail répétitif va beaucoup plus vite.',
      'Mon avis honnête : apprenez à coder correctement d\'abord, puis utilisez les outils IA pour accélérer votre workflow.'
    ],
    aiCompetitionConclusion: 'La compétition entre ces plateformes est géniale pour nous développeurs. De meilleurs outils, des prix plus bas, plus d\'options. Mais la vraie compétence n\'est pas de savoir quel outil IA utiliser — c\'est d\'en savoir assez sur le génie logiciel pour évaluer ce que l\'IA vous donne.',

    // Blog Post 2 — Data
    dataValueTitle: 'Pourquoi Chaque Développeur Devrait Comprendre les Données',
    dataValueDate: 'Avril 2025',
    dataValueDesc: 'Après avoir travaillé sur des projets d\'analyse et étudié les concepts de data science, j\'ai réalisé que comprendre les données n\'est plus optionnel — c\'est une compétence d\'ingénierie essentielle.',
    dataValueContent: 'Après avoir travaillé sur des projets d\'analyse et étudié les concepts de data science, j\'ai réalisé que comprendre les données n\'est plus optionnel — c\'est une compétence d\'ingénierie essentielle.',
    dataValueIntro: 'Je pensais que la data science était un domaine complètement séparé du génie logiciel. On construit des apps ou on analyse des données, non ? Faux. Après mon stage où j\'ai construit des tableaux de bord analytiques, et après avoir travaillé sur mon projet de prédiction de performance étudiante, j\'ai complètement changé d\'avis.',
    dataValuePoints: [
      'Pendant mon stage chez Wubik, j\'ai dû construire des tableaux de bord qui visualisent les données de comportement utilisateur. Il s\'avère que si vous ne comprenez pas les données, vous construirez des graphiques jolis mais qui ne disent rien d\'utile.',
      'En travaillant sur mon projet ML, j\'ai appris que la partie la plus difficile n\'est pas l\'entraînement du modèle — c\'est le nettoyage et la préparation des données. J\'ai passé plus de temps sur le preprocessing que sur le machine learning lui-même.',
      'La confidentialité compte plus qu\'on ne le pense. Quand on gère des données utilisateur, il faut penser au RGPD, à l\'anonymisation et au stockage sécurisé dès le premier jour.',
      'Même pour le développement web \"classique\", comprendre l\'optimisation des bases de données et la modélisation des données fait de vous un bien meilleur développeur backend.',
      'Si vous êtes étudiant, mon conseil : suivez au moins un cours de data science. Même si vous ne devenez jamais data scientist, ça change votre façon de penser la construction de logiciels.'
    ],
    dataValueConclusion: 'Les données ne sont plus réservées aux data scientists. Alors que la frontière entre génie logiciel et ingénierie des données continue de s\'estomper, les développeurs qui comprennent les deux côtés auront un réel avantage.',

    // Blog Post 3 — Full-Stack Lessons (NEW)
    fullStackLessonsTitle: 'Ce Que J\'ai Appris en Construisant Mon Premier Vrai Projet Full-Stack',
    fullStackLessonsDate: 'Mars 2025',
    fullStackLessonsDesc: 'Construire une plateforme d\'analyse de zéro m\'a appris plus sur le génie logiciel que n\'importe quel cours. Voici les leçons honnêtes.',
    fullStackLessonsContent: 'Construire une plateforme d\'analyse de zéro m\'a appris plus sur le génie logiciel que n\'importe quel cours. Voici les leçons honnêtes.',
    fullStackLessonsIntro: 'Pour mon projet de fin d\'études, j\'ai construit une plateforme d\'analyse full-stack — frontend React, backend Express.js, base de données MySQL et une app mobile Flutter. C\'était le plus gros projet que j\'avais tenté, et honnêtement, ça m\'a cassé plusieurs fois avant que tout se mette en place.',
    fullStackLessonsPoints: [
      'L\'architecture compte plus que les fonctionnalités. J\'ai passé les deux premières semaines à ajouter des features sans planifier la structure. À la troisième semaine, mon code était un désastre. J\'ai dû tout restructurer — ça m\'a coûté une semaine mais m\'en a économisé un mois.',
      'Ne sous-estimez pas la conception de base de données. J\'ai conçu mes tables autour de ce que je pensais avoir besoin. Quand les exigences ont changé, j\'ai dû migrer les données et réécrire les requêtes. Maintenant, je passe beaucoup plus de temps sur le design de la base en amont.',
      'La connexion frontend-backend est là où vivent la plupart des bugs. Problèmes CORS, gestion des tokens d\'auth, formatage des réponses API — ces problèmes d\'intégration \"ennuyeux\" ont consommé plus de temps de debug que n\'importe quel algorithme complexe.',
      'Flutter pour le mobile était un bon choix, mais le changement de contexte entre React et Flutter était mentalement épuisant. Ce sont tous les deux des frameworks UI déclaratifs, mais les différences d\'écosystème sont réelles.',
      'Les tests ne sont pas optionnels quand votre projet grandit. J\'ai sauté les tests au début parce que \"c\'est juste un projet scolaire\". Puis j\'ai déployé un endpoint API cassé qui a corrompu des données. Après ça, j\'ai écrit des tests pour chaque route API.'
    ],
    fullStackLessonsConclusion: 'Construire ce projet a été la chose la plus difficile que j\'ai faite en tant qu\'étudiant, et aussi la plus enrichissante. Si vous êtes étudiant et pensez à faire un projet full-stack : faites-le. Vous apprendrez plus en trois mois qu\'en un an de tutoriels.',

    // Interests
    interests: 'Intérêts',

    // Professional Summary
    professionalSummary: 'Étudiant en Génie Logiciel avec de l\'expérience en développement web full-stack, plateformes d\'analyse et applications propulsées par l\'IA. Compétent dans la construction de systèmes évolutifs utilisant React.js, Next.js, Node.js, Python et des bases de données modernes. Passionné par l\'architecture logicielle, le machine learning et la création de solutions numériques efficaces.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('language', language);
    }
  }, [language, mounted]);

  const t = (key: string): string | string[] => {
    return translations[language][key as keyof typeof translations[Language]] || key;
  };

  // Helper function to ensure string return for display purposes
  const tString = (key: string): string => {
    const result = t(key);
    return Array.isArray(result) ? result.join(', ') : result;
  };

  if (!mounted) {
    return null;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, tString }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

'use client';

import { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string | string[];
}

const translations = {
  en: {
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    resume: 'Resume',
    fullStackDeveloper: 'Full-Stack Developer',
    location: 'Gafsa, Tunisia',
    email: 'Email',
    phone: 'Phone',
    bio: 'Full-Stack Developer focused on building web and mobile solutions.\nBusiness Computing graduate.',
    programming: 'Programming',
    web: 'Web',
    mobile: 'Mobile',
    databases: 'Databases',
    languages: 'Languages',
    education: 'Education',
    experience: 'Experience',
    technicalSkills: 'Technical Skills',
    interests: 'Interests',
    analyticsplatform: 'Analytics Platform',
    chatgptClone: 'ChatGPT Clone',
    liveChatApp: 'Live Chat App',
    viewProject: 'View on GitHub',
    arabicNative: 'Arabic (Native)',
    englishFluent: 'English (Fluent)',
    frenchC1: 'French (C1)',
    analyticsDesc: 'Full-stack analytics platform with dashboard and mobile app',
    chatgptDesc: 'AI-powered chat application built with C#',
    liveChatDesc: 'Real-time chat application with modern UI',
    downloadResume: 'Download Resume',
    blog: 'Blog',
    readMore: 'Read More',
    aiCompetitionTitle: 'The AI Development Race: Multiple Players Competing for Dominance',
    aiCompetitionDesc: 'Exploring the competitive landscape of AI development platforms like Lovable, Bolt, and others, and how this competition is driving innovation in the tech industry.',
    dataValueTitle: 'Data: The New Gold in the Technology Industry',
    dataValueDesc: 'Understanding why data has become the most valuable asset in the modern tech industry and how companies are leveraging it for competitive advantage.',
    aiCompetitionContent: 'The artificial intelligence landscape is experiencing unprecedented competition with platforms like Lovable, Bolt, and numerous others vying for market dominance. This competition is driving rapid innovation, better user experiences, and more accessible AI tools for developers and businesses.',
    dataValueContent: 'In today\'s digital economy, data has emerged as the most valuable resource, surpassing traditional assets. Companies that effectively collect, analyze, and leverage data gain significant competitive advantages, driving decision-making, personalization, and innovation across industries.',
    // Full article content
    aiCompetitionIntro: 'The world of artificial intelligence development has become a battleground where innovation meets competition. Multiple platforms are racing to provide the best AI development tools, each bringing unique approaches and capabilities to the market.',
    aiCompetitionPoints: [
      'Lovable focuses on visual AI development with drag-and-drop interfaces',
      'Bolt emphasizes real-time collaboration and cloud-based AI training',
      'Competition drives faster innovation cycles and better pricing models',
      'Developers benefit from diverse toolsets and specialized solutions',
      'Market competition leads to more accessible AI tools for small businesses'
    ],
    aiCompetitionConclusion: 'This competitive landscape ultimately benefits developers and businesses by providing more choices, better tools, and accelerated innovation in the AI space.',
    dataValueIntro: 'Data has transformed from a byproduct of business operations to the most valuable asset driving modern technology companies. Understanding its value and proper utilization is crucial for any tech professional.',
    dataValuePoints: [
      'Data enables personalized user experiences and targeted services',
      'Machine learning models require vast amounts of quality data for training',
      'Data-driven decision making reduces risks and improves outcomes',
      'Companies monetize data through insights, predictions, and analytics services',
      'Privacy regulations like GDPR have made data governance a critical concern'
    ],
    dataValueConclusion: 'As we move forward, the ability to ethically collect, process, and derive insights from data will continue to be a key differentiator in the technology industry.'
  },
  fr: {
    about: 'À propos',
    skills: 'Compétences',
    projects: 'Projets',
    resume: 'CV',
    fullStackDeveloper: 'Développeur Full-Stack',
    location: 'Gafsa, Tunisie',
    email: 'Email',
    phone: 'Téléphone',
    bio: 'Développeur Full-Stack axé sur la création de solutions web et mobiles.\nDiplômé en Informatique de Gestion.',
    programming: 'Programmation',
    web: 'Web',
    mobile: 'Mobile',
    databases: 'Bases de données',
    languages: 'Langues',
    education: 'Formation',
    experience: 'Expérience',
    technicalSkills: 'Compétences techniques',
    interests: 'Intérêts',
    analyticsplatform: 'Plateforme d\'analyse',
    chatgptClone: 'Clone ChatGPT',
    liveChatApp: 'App de chat en direct',
    viewProject: 'Voir sur GitHub',
    arabicNative: 'Arabe (Natif)',
    englishFluent: 'Anglais (Courant)',
    frenchC1: 'Français (C1)',
    analyticsDesc: 'Plateforme d\'analyse full-stack avec tableau de bord et app mobile',
    chatgptDesc: 'Application de chat IA construite avec C#',
    liveChatDesc: 'Application de chat en temps réel avec interface moderne',
    downloadResume: 'Télécharger le CV',
    blog: 'Blog',
    readMore: 'Lire la suite',
    aiCompetitionTitle: 'La Course au Développement IA: Plusieurs Acteurs en Compétition',
    aiCompetitionDesc: 'Explorer le paysage concurrentiel des plateformes de développement IA comme Lovable, Bolt et d\'autres, et comment cette compétition stimule l\'innovation dans l\'industrie tech.',
    dataValueTitle: 'Les Données: Le Nouvel Or de l\'Industrie Technologique',
    dataValueDesc: 'Comprendre pourquoi les données sont devenues l\'actif le plus précieux de l\'industrie tech moderne et comment les entreprises les exploitent pour un avantage concurrentiel.',
    aiCompetitionContent: 'Le paysage de l\'intelligence artificielle connaît une compétition sans précédent avec des plateformes comme Lovable, Bolt et de nombreuses autres qui se disputent la domination du marché. Cette compétition stimule l\'innovation rapide, de meilleures expériences utilisateur et des outils IA plus accessibles.',
    dataValueContent: 'Dans l\'économie numérique d\'aujourd\'hui, les données sont devenues la ressource la plus précieuse, surpassant les actifs traditionnels. Les entreprises qui collectent, analysent et exploitent efficacement les données obtiennent des avantages concurrentiels significatifs.',
    // Full article content
    aiCompetitionIntro: 'Le monde du développement de l\'intelligence artificielle est devenu un champ de bataille où l\'innovation rencontre la compétition. Plusieurs plateformes se disputent pour fournir les meilleurs outils de développement IA.',
    aiCompetitionPoints: [
      'Lovable se concentre sur le développement IA visuel avec des interfaces glisser-déposer',
      'Bolt met l\'accent sur la collaboration en temps réel et l\'entraînement IA basé sur le cloud',
      'La compétition stimule des cycles d\'innovation plus rapides et de meilleurs modèles de prix',
      'Les développeurs bénéficient d\'outils diversifiés et de solutions spécialisées',
      'La concurrence du marché conduit à des outils IA plus accessibles pour les petites entreprises'
    ],
    aiCompetitionConclusion: 'Ce paysage concurrentiel profite finalement aux développeurs et aux entreprises en offrant plus de choix, de meilleurs outils et une innovation accélérée dans l\'espace IA.',
    dataValueIntro: 'Les données se sont transformées d\'un sous-produit des opérations commerciales à l\'actif le plus précieux qui anime les entreprises technologiques modernes.',
    dataValuePoints: [
      'Les données permettent des expériences utilisateur personnalisées et des services ciblés',
      'Les modèles d\'apprentissage automatique nécessitent de vastes quantités de données de qualité',
      'La prise de décision basée sur les données réduit les risques et améliore les résultats',
      'Les entreprises monétisent les données grâce aux insights et services d\'analyse',
      'Les réglementations sur la confidentialité comme le RGPD ont rendu la gouvernance des données cruciale'
    ],
    dataValueConclusion: 'En avançant, la capacité à collecter, traiter et tirer des insights des données de manière éthique continuera d\'être un différenciateur clé dans l\'industrie technologique.'
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

  if (!mounted) {
    return null;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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

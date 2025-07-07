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
    aiCompetitionTitle: '🏁 The AI Development Race: Multiple Players Competing for Dominance',
    aiCompetitionDesc: 'The AI development space has seen explosive growth, with platforms like Lovable, Bolt.new, and even giants like OpenAI and Microsoft racing to offer the best tools.',
    dataValueTitle: '📊 Data Science: Data — The New Gold in the Technology Industry',
    dataValueDesc: 'Data isn\'t just a byproduct anymore—it\'s the lifeblood of modern tech. From personalized recommendations to predictive analytics, data assets are what differentiate today\'s leading tech companies.',
    aiCompetitionContent: 'The AI development space has seen explosive growth, with platforms like Lovable, Bolt.new, and even giants like OpenAI and Microsoft racing to offer the best tools. This competition is fueling innovation at an unprecedented pace, reshaping who can build software—anyone, anywhere.',
    dataValueContent: 'Data isn\'t just a byproduct anymore—it\'s the lifeblood of modern tech. From personalized recommendations to predictive analytics, data assets are what differentiate today\'s leading tech companies.',
    // Full article content
    aiCompetitionIntro: 'The AI development space has seen explosive growth, with platforms like Lovable, Bolt.new, and even giants like OpenAI and Microsoft racing to offer the best tools. This competition is fueling innovation at an unprecedented pace, reshaping who can build software—anyone, anywhere.',
    aiCompetitionPoints: [
      'Lovable: Swedish startup nearing a $1.8–2 billion valuation with "vibe coding" interface enabling users to build full-stack apps using plain language prompts',
      'Bolt.new: Developed by StackBlitz, uses in-browser "WebContainers" to create a full development environment, scaled to nearly $40 million ARR with 3 million signups',
      'Competition drives faster feature rollouts—from database integration to real-time debugging—to stay ahead',
      'Better pricing and free tiers: Both offer generous free options; Bolt\'s core environment is free, Lovable\'s pro version costs $25/month',
      'Accessibility for small business: Affordable tools enable startups and solo founders to ship without a team'
    ],
    aiCompetitionConclusion: 'The unrelenting AI development competition—between Lovable, Bolt, and others—is turbocharging tool quality, pricing, and accessibility. Developers (and non-developers!) are the real winners, as powerful, cost-effective, and user-friendly AI platforms continue to emerge on the market.',
    dataValueIntro: 'Data isn\'t just a byproduct anymore—it\'s the lifeblood of modern tech. From personalized recommendations to predictive analytics, data assets are what differentiate today\'s leading tech companies.',
    dataValuePoints: [
      'Personalization & Targeted Services: Companies leverage user data to create highly personalized experiences—from Netflix\'s recommendations to Spotify\'s Discover Weekly',
      'Machine Learning & AI Training: High-performance AI models demand massive, high-quality datasets. Without them, model efficacy remains limited',
      'Better Decision-Making: Data analytics reduce guesswork, enabling data-driven strategies that improve performance, optimize operations, and cut risks',
      'Monetization through Insights: Companies sell predictive insights and analytics tools to others—customer segmentation reports or supply-chain optimization',
      'Privacy & Governance Matter: Regulations like GDPR in Europe and CCPA in California have made ethical data collection, processing, and compliance essential'
    ],
    dataValueConclusion: 'In today\'s landscape, mastering data collection, governance, and insight generation is central to competitive advantage. As AI and analytics evolve, the ability to responsibly manage data will remain a top differentiator for tech companies moving forward.'
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
    aiCompetitionTitle: '🏁 La Course au Développement IA: Plusieurs Acteurs en Compétition',
    aiCompetitionDesc: 'L\'espace de développement IA a connu une croissance explosive, avec des plateformes comme Lovable, Bolt.new, et même des géants comme OpenAI et Microsoft qui se disputent pour offrir les meilleurs outils.',
    dataValueTitle: '📊 Science des Données: Les Données — Le Nouvel Or de l\'Industrie Technologique',
    dataValueDesc: 'Les données ne sont plus seulement un sous-produit—elles sont la force vitale de la technologie moderne. Des recommandations personnalisées aux analyses prédictives, les actifs de données différencient les entreprises tech leaders d\'aujourd\'hui.',
    aiCompetitionContent: 'L\'espace de développement IA a connu une croissance explosive, avec des plateformes comme Lovable, Bolt.new, et même des géants comme OpenAI et Microsoft qui se disputent pour offrir les meilleurs outils. Cette compétition alimente l\'innovation à un rythme sans précédent, redéfinissant qui peut créer des logiciels—n\'importe qui, n\'importe où.',
    dataValueContent: 'Les données ne sont plus seulement un sous-produit—elles sont la force vitale de la technologie moderne. Des recommandations personnalisées aux analyses prédictives, les actifs de données différencient les entreprises tech leaders d\'aujourd\'hui.',
    // Full article content
    aiCompetitionIntro: 'L\'espace de développement IA a connu une croissance explosive, avec des plateformes comme Lovable, Bolt.new, et même des géants comme OpenAI et Microsoft qui se disputent pour offrir les meilleurs outils. Cette compétition alimente l\'innovation à un rythme sans précédent, redéfinissant qui peut créer des logiciels—n\'importe qui, n\'importe où.',
    aiCompetitionPoints: [
      'Lovable: Startup suédoise approchant une valorisation de 1,8-2 milliards $ avec une interface "vibe coding" permettant aux utilisateurs de créer des apps full-stack avec des prompts en langage naturel',
      'Bolt.new: Développé par StackBlitz, utilise des "WebContainers" dans le navigateur pour créer un environnement de développement complet, atteint près de 40 millions $ ARR avec 3 millions d\'inscriptions',
      'La compétition stimule des déploiements de fonctionnalités plus rapides—de l\'intégration de bases de données au débogage en temps réel—pour rester en avance',
      'Meilleurs prix et niveaux gratuits: Les deux offrent des options gratuites généreuses; l\'environnement principal de Bolt est gratuit, la version pro de Lovable coûte 25$/mois',
      'Accessibilité pour les petites entreprises: Des outils abordables permettent aux startups et fondateurs solo de livrer sans équipe'
    ],
    aiCompetitionConclusion: 'La compétition implacable du développement IA—entre Lovable, Bolt, et d\'autres—turbocharge la qualité des outils, les prix, et l\'accessibilité. Les développeurs (et non-développeurs!) sont les vrais gagnants, alors que des plateformes IA puissantes, rentables et conviviales continuent d\'émerger sur le marché.',
    dataValueIntro: 'Les données ne sont plus seulement un sous-produit—elles sont la force vitale de la technologie moderne. Des recommandations personnalisées aux analyses prédictives, les actifs de données différencient les entreprises tech leaders d\'aujourd\'hui.',
    dataValuePoints: [
      'Personnalisation & Services Ciblés: Les entreprises exploitent les données utilisateur pour créer des expériences hautement personnalisées—des recommandations Netflix au Discover Weekly de Spotify',
      'Apprentissage Automatique & Entraînement IA: Les modèles IA haute performance exigent des ensembles de données massifs et de haute qualité. Sans eux, l\'efficacité des modèles reste limitée',
      'Meilleure Prise de Décision: L\'analyse de données réduit les suppositions, permettant des stratégies basées sur les données qui améliorent les performances, optimisent les opérations et réduisent les risques',
      'Monétisation par les Insights: Les entreprises vendent des insights prédictifs et des outils d\'analyse—rapports de segmentation client ou optimisation de chaîne d\'approvisionnement',
      'Confidentialité & Gouvernance Importantes: Les réglementations comme le RGPD en Europe et CCPA en Californie ont rendu la collecte, traitement et conformité éthiques des données essentiels'
    ],
    dataValueConclusion: 'Dans le paysage d\'aujourd\'hui, maîtriser la collecte, gouvernance et génération d\'insights de données est central pour l\'avantage concurrentiel. Alors que l\'IA et l\'analyse évoluent, la capacité à gérer les données de manière responsable restera un différenciateur clé pour les entreprises technologiques à l\'avenir.'
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

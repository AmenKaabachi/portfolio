'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
	Mail,
	Phone,
	MapPin,
	Github,
	Linkedin,
	Code,
	Database,
	BookOpen,
	X,
	Monitor,
	Server,
	Download,
	ArrowDown,
	GraduationCap,
	Calendar,
	Brain,
	Wrench,
} from 'lucide-react';
import {
	SiPython,
	SiReact,
	SiNodedotjs,
	SiPhp,
	SiFlutter,
	SiMysql,
	SiMongodb,
	SiJavascript,
	SiHtml5,
	SiCss3,
	SiExpress,
	SiC,
	SiDotnet,
	SiTailwindcss,
	SiNextdotjs,
	SiTypescript,
	SiPostgresql,
	SiDocker,
	SiLinux,
	SiPostman,
	SiGit,
	SiPytorch,
	SiStreamlit,
	SiGithub,
	SiPandas,
	SiScikitlearn,
	SiNumpy,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import Flag from 'react-world-flags';
import { motion, AnimatePresence } from 'motion/react';

export default function Home() {
	const { t } = useLanguage();
	const [showModal, setShowModal] = useState(false);
	const [modalArticle, setModalArticle] = useState<string | null>(null);

	// Handle URL hash navigation (for when coming from resume page)
	useEffect(() => {
		const handleHashNavigation = () => {
			const hash = window.location.hash;
			if (hash) {
				// Small delay to ensure page is rendered
				setTimeout(() => {
					const element = document.querySelector(hash);
					if (element) {
						element.scrollIntoView({ behavior: 'smooth' });
					}
				}, 100);
			}
		};

		// Handle initial load
		handleHashNavigation();

		// Listen for hash changes
		window.addEventListener('hashchange', handleHashNavigation);

		return () => window.removeEventListener('hashchange', handleHashNavigation);
	}, []);

	const openModal = (articleId: string) => {
		requestAnimationFrame(() => {
			setModalArticle(articleId);
			setShowModal(true);
		});
		setTimeout(() => {
			document.body.style.overflow = 'hidden';
		}, 0);
	};

	const closeModal = () => {
		setShowModal(false);
		setTimeout(() => {
			setModalArticle(null);
			document.body.style.overflow = 'auto';
		}, 150);
	};

	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape' && showModal) {
				closeModal();
			}
		};

		document.addEventListener('keydown', handleEscape);
		return () => document.removeEventListener('keydown', handleEscape);
	}, [showModal]);

	// Animation variants
	const fadeInUp = {
		initial: { opacity: 0, y: 50 },
		animate: { opacity: 1, y: 0 },
		transition: { duration: 0.8, ease: "easeOut" }
	};

	const staggerContainer = {
		animate: {
			transition: {
				staggerChildren: 0.1
			}
		}
	};

	const modalVariants = {
		hidden: { 
			opacity: 0, 
			scale: 0.85,
			y: 20
		},
		visible: { 
			opacity: 1, 
			scale: 1,
			y: 0
		},
		exit: { 
			opacity: 0, 
			scale: 0.85,
			y: 20
		}
	};

	const backdropVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1 },
		exit: { opacity: 0 }
	};

	const skills = {
		programming: [
			{ name: 'Python', icon: SiPython },
			{ name: 'JavaScript', icon: SiJavascript },
			{ name: 'TypeScript', icon: SiTypescript },
			{ name: 'Java', icon: FaJava },
			{ name: 'C', icon: SiC },
			{ name: 'C#', icon: SiDotnet },
		],
		frontend: [
			{ name: 'React.js', icon: SiReact },
			{ name: 'Next.js', icon: SiNextdotjs },
			{ name: 'Tailwind CSS', icon: SiTailwindcss },
			{ name: 'HTML5', icon: SiHtml5 },
			{ name: 'CSS3', icon: SiCss3 },
		],
		backend: [
			{ name: 'Node.js', icon: SiNodedotjs },
			{ name: 'Express.js', icon: SiExpress },
			{ name: 'PHP', icon: SiPhp },
		],
		databases: [
			{ name: 'PostgreSQL', icon: SiPostgresql },
			{ name: 'MySQL', icon: SiMysql },
			{ name: 'MongoDB', icon: SiMongodb },
		],
		aiAndData: [
			{ name: 'Scikit-learn', icon: SiScikitlearn },
			{ name: 'Pandas', icon: SiPandas },
			{ name: 'NumPy', icon: SiNumpy },
			{ name: 'PyTorch', icon: SiPytorch },
		],
		tools: [
			{ name: 'Git', icon: SiGit },
			{ name: 'GitHub', icon: SiGithub },
			{ name: 'Docker', icon: SiDocker },
			{ name: 'Linux', icon: SiLinux },
			{ name: 'Postman', icon: SiPostman },
		],
	};

	const featuredProjects = [
		{
			title: t('taskFlow'),
			description: t('taskFlowDesc'),
			technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
			type: 'Full-Stack',
			githubUrl: 'https://github.com/amenkaabachi',
			image: '/images/projects/analytics-platform.webp',
		},
		{
			title: t('aiPdfOrganizer'),
			description: t('aiPdfOrganizerDesc'),
			technologies: ['Python', 'PyTorch', 'Streamlit'],
			type: 'AI / ML',
			githubUrl: 'https://github.com/amenkaabachi',
			image: '/images/projects/pdf-organizer.svg',
		},
		{
			title: t('studentPrediction'),
			description: t('studentPredictionDesc'),
			technologies: ['Python', 'Pandas', 'Scikit-learn'],
			type: 'Data Science',
			githubUrl: 'https://github.com/amenkaabachi',
			image: '/images/projects/chatgpt-clone.jpg',
		},
		{
			title: t('analyticsplatform'),
			description: t('analyticsDesc'),
			technologies: ['React.js', 'Express.js', 'Flutter', 'MySQL'],
			type: 'FYP',
			githubUrl: 'https://github.com/amenkaabachi',
			image: '/images/projects/analytics-platform.webp',
		},
	];

	const otherProjects = [
		{
			title: t('portfolioWebsite'),
			description: t('portfolioWebsiteDesc'),
			technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
			githubUrl: 'https://github.com/amenkaabachi',
		},
		{
			title: t('chatgptClone'),
			description: t('chatgptDesc'),
			technologies: ['C#'],
			githubUrl: 'https://github.com/amenkaabachi',
		},
		{
			title: t('liveChatApp'),
			description: t('liveChatDesc'),
			technologies: ['HTML', 'CSS', 'JavaScript', 'PHP'],
			githubUrl: 'https://github.com/amenkaabachi',
		},
	];

	const blogPosts = [
		{
			id: 'ai-competition',
			titleKey: 'aiCompetitionTitle',
			dateKey: 'aiCompetitionDate',
			descKey: 'aiCompetitionDesc',
			contentKey: 'aiCompetitionContent',
			introKey: 'aiCompetitionIntro',
			pointsKey: 'aiCompetitionPoints',
			conclusionKey: 'aiCompetitionConclusion',
			icon: Code,
			badge: 'AI & Dev Tools',
			image: '/images/blog/ai-competition.webp',
		},
		{
			id: 'data-value',
			titleKey: 'dataValueTitle',
			dateKey: 'dataValueDate',
			descKey: 'dataValueDesc',
			contentKey: 'dataValueContent',
			introKey: 'dataValueIntro',
			pointsKey: 'dataValuePoints',
			conclusionKey: 'dataValueConclusion',
			icon: Database,
			badge: 'Data & Engineering',
			image: '/images/blog/data-value.jpg',
		},
		{
			id: 'fullstack-lessons',
			titleKey: 'fullStackLessonsTitle',
			dateKey: 'fullStackLessonsDate',
			descKey: 'fullStackLessonsDesc',
			contentKey: 'fullStackLessonsContent',
			introKey: 'fullStackLessonsIntro',
			pointsKey: 'fullStackLessonsPoints',
			conclusionKey: 'fullStackLessonsConclusion',
			icon: Monitor,
			badge: 'Full-Stack',
			image: '/images/projects/analytics-platform.webp',
		},
	];

	// Function to get tech icon
	const getTechIcon = (tech: string): React.ReactElement => {
		const techIcons: { [key: string]: React.ReactElement } = {
			'React.js': <SiReact className="h-3 w-3" />,
			'Next.js': <SiNextdotjs className="h-3 w-3" />,
			'Express.js': <SiExpress className="h-3 w-3" />,
			'MySQL': <SiMysql className="h-3 w-3" />,
			'Flutter': <SiFlutter className="h-3 w-3" />,
			'C#': <SiDotnet className="h-3 w-3" />,
			'HTML': <SiHtml5 className="h-3 w-3" />,
			'CSS': <SiCss3 className="h-3 w-3" />,
			'JavaScript': <SiJavascript className="h-3 w-3" />,
			'PHP': <SiPhp className="h-3 w-3" />,
			'Node.js': <SiNodedotjs className="h-3 w-3" />,
			'Python': <SiPython className="h-3 w-3" />,
			'Java': <FaJava className="h-3 w-3" />,
			'Bootstrap': <SiCss3 className="h-3 w-3" />,
			'Tailwind CSS': <SiTailwindcss className="h-3 w-3" />,
			'TypeScript': <SiTypescript className="h-3 w-3" />,
			'PostgreSQL': <SiPostgresql className="h-3 w-3" />,
			'PyTorch': <SiPytorch className="h-3 w-3" />,
			'Streamlit': <SiStreamlit className="h-3 w-3" />,
			'Pandas': <SiPandas className="h-3 w-3" />,
			'Scikit-learn': <SiScikitlearn className="h-3 w-3" />,
			'Matplotlib': <SiPython className="h-3 w-3" />,
		};
		return techIcons[tech] || <span className="h-3 w-3 text-gray-500">🔧</span>;
	};

	const skillCategories = [
		{ key: 'programming', data: skills.programming, icon: Code, label: t('programming') },
		{ key: 'frontend', data: skills.frontend, icon: Monitor, label: t('frontend') },
		{ key: 'backend', data: skills.backend, icon: Server, label: t('backend') },
		{ key: 'databases', data: skills.databases, icon: Database, label: t('databases') },
		{ key: 'aiAndData', data: skills.aiAndData, icon: Brain, label: t('aiAndData') },
		{ key: 'tools', data: skills.tools, icon: Wrench, label: t('tools') },
	];

	return (
		<div className="min-h-screen relative">
			{/* ========== HERO SECTION ========== */}
			<motion.section 
				className="py-24 px-4 md:px-8 mobile-content-section"
				initial="initial"
				animate="animate"
				variants={fadeInUp}
			>
				<div className="max-w-4xl mx-auto px-2 md:px-0 text-center">
					<h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-gradient-text">
						{t('heroHeadline')}
					</h1>
					<p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
						{t('heroSubheadline')}
					</p>
					<div className="flex flex-wrap justify-center gap-4">
						<Button size="lg" className="gap-2" asChild>
							<a href="#projects">
								<ArrowDown className="h-4 w-4" />
								{t('viewProjects')}
							</a>
						</Button>
						<Button variant="outline" size="lg" className="gap-2 social-button" asChild>
							<Link href="/resume">
								<Download className="h-4 w-4" />
								{t('downloadResume')}
							</Link>
						</Button>
						<Button variant="outline" size="lg" className="gap-2 social-button" asChild>
							<a href="#contact">
								<Mail className="h-4 w-4" />
								{t('contactMe')}
							</a>
						</Button>
					</div>
				</div>
			</motion.section>

			{/* ========== ABOUT SECTION ========== */}
			<motion.section 
				id="about"
				className="py-16 px-4 md:px-8 bg-muted/50 binary-bg mobile-content-section"
				initial="initial"
				whileInView="animate"
				viewport={{ once: true, amount: 0.3 }}
				variants={fadeInUp}
			>
				<div className="max-w-4xl mx-auto px-2 md:px-0">
					<div className="grid md:grid-cols-2 gap-8 items-start">
						{/* Left: Bio */}
						<div>
							<h2 className="text-2xl font-semibold mb-1">{t('about')}</h2>
							<p className="text-sm text-muted-foreground flex items-center gap-2 mb-6">
								<MapPin className="h-3 w-3" />
								{t('location')}
							</p>
							<p className="text-muted-foreground mb-6 leading-relaxed whitespace-pre-line">
								{t('bio')}
							</p>

							{/* Interest Tags */}
							<div className="flex flex-wrap gap-2 mb-6">
								{(t('aboutInterests') as string[]).map((interest, idx) => (
									<Badge key={idx} variant="secondary" className="text-xs px-3 py-1">
										{interest}
									</Badge>
								))}
							</div>

							<p className="text-sm text-muted-foreground italic">
								{t('continuousLearning')}
							</p>
						</div>

						{/* Right: Contact + Socials + Languages */}
						<div>
							{/* Contact Info */}
							<div className="space-y-3 mb-6">
								<div className="flex items-center gap-3">
									<Mail className="h-4 w-4 text-primary" />
									<a
										href="mailto:kaabachiamen@gmail.com"
										className="text-sm hover:text-primary transition-colors"
									>
										kaabachiamen@gmail.com
									</a>
								</div>
								<div className="flex items-center gap-3">
									<Phone className="h-4 w-4 text-primary" />
									<a
										href="tel:+21699841331"
										className="text-sm hover:text-primary transition-colors"
									>
										+216 99 841 331
									</a>
								</div>
							</div>

							{/* Social Links */}
							<div className="flex gap-3 mb-6">
								<Button variant="outline" size="sm" className="social-button" asChild>
									<a href="mailto:kaabachiamen@gmail.com">
										<Mail className="h-4 w-4 mr-2" />
										{t('email')}
									</a>
								</Button>
								<Button variant="outline" size="sm" className="social-button" asChild>
									<a
										href="https://www.linkedin.com/in/amenkaabachi/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<Linkedin className="h-4 w-4 mr-2" />
										LinkedIn
									</a>
								</Button>
								<Button variant="outline" size="sm" className="social-button" asChild>
									<a
										href="https://github.com/amenkaabachi"
										target="_blank"
										rel="noopener noreferrer"
									>
										<Github className="h-4 w-4 mr-2" />
										GitHub
									</a>
								</Button>
							</div>

							{/* Languages */}
							<div>
								<h3 className="text-sm font-medium text-muted-foreground mb-2">{t('languages')}</h3>
								<div className="flex flex-wrap gap-1">
									<Badge variant="outline" className="flex items-center gap-1 text-xs px-2 py-1">
										<Flag code="TN" style={{ width: '0.75em', height: '0.75em' }} />
										{t('arabicNative')}
									</Badge>
									<Badge variant="outline" className="flex items-center gap-1 text-xs px-2 py-1">
										<Flag code="US" style={{ width: '0.75em', height: '0.75em' }} />
										{t('englishFluent')}
									</Badge>
									<Badge variant="outline" className="flex items-center gap-1 text-xs px-2 py-1">
										<Flag code="FR" style={{ width: '0.75em', height: '0.75em' }} />
										{t('frenchC1')}
									</Badge>
								</div>
							</div>
						</div>
					</div>
				</div>
			</motion.section>

			{/* ========== FEATURED PROJECTS SECTION ========== */}
			<motion.section 
				id="projects" 
				className="py-20 px-4 md:px-8 mobile-content-section"
				initial="initial"
				whileInView="animate"
				viewport={{ once: true, amount: 0.2 }}
				variants={fadeInUp}
			>
				<div className="max-w-4xl mx-auto px-2 md:px-0">
					<h2 className="text-3xl font-bold text-center mb-12 animate-gradient-text">
						{t('featuredProjects')}
					</h2>
					
					<motion.div 
						className="grid md:grid-cols-2 gap-6"
						variants={staggerContainer}
					>
						{featuredProjects.map((project, index) => (
							<motion.div key={index} variants={fadeInUp}>
								<Card className="shadow-md hover:shadow-2xl h-full group border hover:border-primary/50 hover:-translate-y-1 transition-all duration-500 ease-out">
									{/* Project Image */}
									<div className="relative w-full h-48 overflow-hidden rounded-t-lg">
										<Image
											src={project.image}
											alt={project.title as string}
											fill
											className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
										<Badge 
											variant="outline" 
											className="absolute top-3 right-3 text-xs bg-background/90 backdrop-blur-sm border-primary/30 transition-all duration-500 ease-out"
										>
											{project.type}
										</Badge>
									</div>
									<CardHeader className="pb-2">
										<CardTitle className="text-lg group-hover:text-primary transition-colors duration-500 ease-out">{project.title}</CardTitle>
										<CardDescription className="line-clamp-2">{project.description}</CardDescription>
									</CardHeader>
									<CardContent>
										<div className="flex flex-wrap gap-1 mb-4">
											{project.technologies.map((tech) => (
												<Badge key={tech} variant="secondary" className="flex items-center gap-1 px-2 py-1 text-xs transition-all duration-300 ease-out">
													{getTechIcon(tech)}
													{tech}
												</Badge>
											))}
										</div>
										<Button variant="outline" size="sm" className="w-full group/btn hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 ease-out" asChild>
											<a 
												href={project.githubUrl} 
												target="_blank" 
												rel="noopener noreferrer"
												className="flex items-center justify-center"
											>
												<Github className="h-4 w-4 mr-2 transition-transform duration-300 ease-out group-hover/btn:rotate-12" />
												{t('viewProject')}
											</a>
										</Button>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</motion.div>
				</div>
			</motion.section>

			{/* ========== OTHER PROJECTS SECTION ========== */}
			<motion.section 
				className="py-12 px-4 md:px-8 bg-muted/50 binary-bg mobile-content-section"
				initial="initial"
				whileInView="animate"
				viewport={{ once: true, amount: 0.3 }}
				variants={fadeInUp}
			>
				<div className="max-w-4xl mx-auto px-2 md:px-0">
					<h2 className="text-2xl font-bold text-center mb-8 animate-gradient-text">
						{t('otherProjects')}
					</h2>
					<motion.div 
						className="grid md:grid-cols-3 gap-4"
						variants={staggerContainer}
					>
						{otherProjects.map((project, index) => (
							<motion.div key={index} variants={fadeInUp}>
								<Card className="hover:shadow-lg h-full hover:-translate-y-1 transition-all duration-300 ease-out border hover:border-primary/30">
									<CardHeader className="pb-2">
										<CardTitle className="text-base">{project.title}</CardTitle>
										<CardDescription className="text-xs">{project.description}</CardDescription>
									</CardHeader>
									<CardContent>
										<div className="flex flex-wrap gap-1 mb-3">
											{project.technologies.map((tech) => (
												<Badge key={tech} variant="secondary" className="text-xs px-2 py-0.5">
													{tech}
												</Badge>
											))}
										</div>
										<Button variant="ghost" size="sm" className="w-full text-xs" asChild>
											<a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
												<Github className="h-3 w-3 mr-1" />
												GitHub
											</a>
										</Button>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</motion.div>
				</div>
			</motion.section>

			{/* ========== SKILLS SECTION ========== */}
			<motion.section 
				id="skills" 
				className="py-16 px-4 md:px-8 mobile-content-section"
				initial="initial"
				whileInView="animate"
				viewport={{ once: true, amount: 0.3 }}
				variants={fadeInUp}
			>
				<div className="max-w-4xl mx-auto px-2 md:px-0">
					<h2 className="text-3xl font-bold text-center mb-10 animate-gradient-text">
						{t('skills')}
					</h2>
					
					<motion.div 
						className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
						variants={staggerContainer}
					>
						{skillCategories.map((category) => {
							const CategoryIcon = category.icon;
							return (
								<motion.div key={category.key} className="space-y-2" variants={fadeInUp}>
									<div className="flex items-center gap-2 mb-2">
										<CategoryIcon className="h-5 w-5 text-primary" />
										<h3 className="font-semibold text-lg">{category.label}</h3>
									</div>
									<div className="flex flex-wrap gap-2">
										{category.data.map((skill) => {
											const IconComponent = skill.icon;
											return (
												<Badge key={skill.name} className="tech-badge flex items-center gap-2">
													<IconComponent className="h-4 w-4" />
													{skill.name}
												</Badge>
											);
										})}
									</div>
								</motion.div>
							);
						})}
					</motion.div>
				</div>
			</motion.section>

			{/* ========== EXPERIENCE SECTION ========== */}
			<motion.section 
				id="experience" 
				className="py-16 px-4 md:px-8 bg-muted/50 binary-bg mobile-content-section"
				initial="initial"
				whileInView="animate"
				viewport={{ once: true, amount: 0.3 }}
				variants={fadeInUp}
			>
				<div className="max-w-4xl mx-auto px-2 md:px-0">
					<h2 className="text-3xl font-bold text-center mb-10 animate-gradient-text">
						{t('experience')}
					</h2>

					<Card className="border-l-4 border-l-primary shadow-md">
						<CardHeader>
							<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
								<div>
									<CardTitle className="text-xl">{t('experienceTitle')}</CardTitle>
									<CardDescription className="text-base mt-1">
										{t('experienceCompany')} — {t('experienceLocation')}
									</CardDescription>
								</div>
								<Badge variant="outline" className="w-fit flex items-center gap-1.5 px-3 py-1.5">
									<Calendar className="h-3 w-3" />
									{t('experiencePeriod')}
								</Badge>
							</div>
						</CardHeader>
						<CardContent>
							<ul className="space-y-3">
								{(t('experiencePoints') as string[]).map((point, index) => (
									<li key={index} className="flex items-start gap-3 text-muted-foreground">
										<span className="text-primary mt-1 text-sm font-bold">▸</span>
										<span className="text-sm leading-relaxed">{point}</span>
									</li>
								))}
							</ul>
						</CardContent>
					</Card>
				</div>
			</motion.section>

			{/* ========== EDUCATION SECTION ========== */}
			<motion.section 
				id="education" 
				className="py-16 px-4 md:px-8 mobile-content-section"
				initial="initial"
				whileInView="animate"
				viewport={{ once: true, amount: 0.3 }}
				variants={fadeInUp}
			>
				<div className="max-w-4xl mx-auto px-2 md:px-0">
					<h2 className="text-3xl font-bold text-center mb-10 animate-gradient-text">
						{t('education')}
					</h2>

					<motion.div className="grid md:grid-cols-2 gap-6" variants={staggerContainer}>
						{/* ISAMM */}
						<motion.div variants={fadeInUp}>
							<Card className="h-full border-l-4 border-l-primary shadow-md hover:shadow-lg transition-shadow">
								<CardHeader>
									<div className="flex items-center gap-2 mb-1">
										<GraduationCap className="h-5 w-5 text-primary" />
										<Badge variant="outline" className="text-xs">
											{t('educationISAMMYear')}
										</Badge>
									</div>
									<CardTitle className="text-base leading-tight">{t('educationISAMMDegree')}</CardTitle>
									<CardDescription>{t('educationISAMMSchool')}</CardDescription>
								</CardHeader>
								<CardContent>
									<p className="text-xs text-muted-foreground flex items-center gap-1">
										<MapPin className="h-3 w-3" />
										{t('educationISAMMLocation')}
									</p>
								</CardContent>
							</Card>
						</motion.div>

						{/* ISAEG */}
						<motion.div variants={fadeInUp}>
							<Card className="h-full border-l-4 border-l-primary shadow-md hover:shadow-lg transition-shadow">
								<CardHeader>
									<div className="flex items-center gap-2 mb-1">
										<GraduationCap className="h-5 w-5 text-primary" />
										<Badge variant="outline" className="text-xs">
											{t('educationISAEGYear')}
										</Badge>
									</div>
									<CardTitle className="text-base leading-tight">{t('educationISAEGDegree')}</CardTitle>
									<CardDescription>{t('educationISAEGSchool')}</CardDescription>
								</CardHeader>
								<CardContent>
									<p className="text-xs text-muted-foreground flex items-center gap-1">
										<MapPin className="h-3 w-3" />
										{t('educationISAEGLocation')}
									</p>
								</CardContent>
							</Card>
						</motion.div>
					</motion.div>
				</div>
			</motion.section>

			{/* ========== BLOG SECTION ========== */}
			<motion.section 
				id="blog" 
				className="py-20 px-4 md:px-8 bg-muted/50 binary-bg mobile-content-section"
				initial="initial"
				whileInView="animate"
				viewport={{ once: true, amount: 0.2 }}
				variants={fadeInUp}
			>
				<div className="max-w-4xl mx-auto px-2 md:px-0">
					<h2 className="text-3xl font-bold text-center mb-12 animate-gradient-text">
						{t('blog')}
					</h2>
					<motion.div 
						className="grid md:grid-cols-3 gap-6"
						variants={staggerContainer}
					>
						{blogPosts.map((post) => {
							const PostIcon = post.icon;
							return (
								<motion.div key={post.id} variants={fadeInUp}>
									<Card className="hover:shadow-lg transition-shadow hover-lift hover-code h-full">
										{/* Article Image */}
										<div className="relative w-full h-44 overflow-hidden rounded-t-lg">
											<Image
												src={post.image}
												alt={t(post.titleKey) as string}
												fill
												className="object-cover transition-transform duration-300 hover:scale-105"
											/>
										</div>
										<CardHeader className="pb-2">
											<div className="flex items-center justify-between mb-2">
												<div className="flex items-center gap-2">
													<PostIcon className="h-4 w-4 text-primary" />
													<Badge variant="outline" className="text-xs">{post.badge}</Badge>
												</div>
												<span className="text-xs text-muted-foreground">{t(post.dateKey)}</span>
											</div>
											<CardTitle className="text-base leading-tight">
												{t(post.titleKey) as string}
											</CardTitle>
											<CardDescription className="text-xs line-clamp-2">
												{t(post.descKey) as string}
											</CardDescription>
										</CardHeader>
										<CardContent>
											<Button 
												variant="outline" 
												size="sm" 
												className="w-full text-xs"
												onClick={() => openModal(post.id)}
											>
												<BookOpen className="h-3 w-3 mr-1" />
												{t('readMore') as string}
											</Button>
										</CardContent>
									</Card>
								</motion.div>
							);
						})}
					</motion.div>
				</div>
			</motion.section>

			{/* ========== CONTACT SECTION ========== */}
			<motion.section 
				id="contact" 
				className="py-20 px-4 md:px-8 mobile-content-section"
				initial="initial"
				whileInView="animate"
				viewport={{ once: true, amount: 0.3 }}
				variants={fadeInUp}
			>
				<div className="max-w-2xl mx-auto text-center px-2 md:px-0">
					<h2 className="text-3xl font-bold mb-4 animate-gradient-text">
						{t('contactHeadline')}
					</h2>
					<p className="text-muted-foreground mb-8">
						{t('contactSubtext')}
					</p>
					<div className="flex flex-wrap justify-center gap-4">
						<Button size="lg" className="gap-2" asChild>
							<a href="mailto:kaabachiamen@gmail.com">
								<Mail className="h-5 w-5" />
								kaabachiamen@gmail.com
							</a>
						</Button>
						<Button variant="outline" size="lg" className="gap-2 social-button" asChild>
							<a href="https://www.linkedin.com/in/amenkaabachi/" target="_blank" rel="noopener noreferrer">
								<Linkedin className="h-5 w-5" />
								LinkedIn
							</a>
						</Button>
						<Button variant="outline" size="lg" className="gap-2 social-button" asChild>
							<a href="https://github.com/amenkaabachi" target="_blank" rel="noopener noreferrer">
								<Github className="h-5 w-5" />
								GitHub
							</a>
						</Button>
					</div>
				</div>
			</motion.section>

			{/* ========== BLOG MODAL ========== */}
			<AnimatePresence mode="wait">
				{showModal && modalArticle && (
					<motion.div 
						className="fixed inset-0 z-50 flex items-center justify-center p-4"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.15 }}
					>
						{/* Backdrop */}
						<motion.div 
							className="absolute inset-0 bg-black/40" 
							onClick={closeModal}
							variants={backdropVariants}
							initial="hidden"
							animate="visible"
							exit="exit"
							transition={{ duration: 0.2 }}
						/>
						
						{/* Modal Content */}
						<motion.div 
							className="relative bg-background border rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto z-10"
							variants={modalVariants}
							initial="hidden"
							animate="visible"
							exit="exit"
							transition={{ 
								duration: 0.2,
								ease: [0.25, 0.1, 0.25, 1.0]
							}}
							style={{ 
								willChange: 'transform',
								backfaceVisibility: 'hidden' 
							}}
						>
							{/* Close Button */}
							<button
								onClick={closeModal}
								className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/90 hover:bg-background border shadow-sm transition-colors"
								aria-label="Close modal"
							>
								<X className="h-4 w-4" />
							</button>

							{/* Modal Content */}
							<motion.div 
								className="p-8"
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.05, duration: 0.2 }}
							>
								{blogPosts.map((post) => {
									if (modalArticle !== post.id) return null;
									const PostIcon = post.icon;
									return (
										<div key={post.id} className="space-y-6">
											<div className="flex items-center gap-3 mb-6">
												<PostIcon className="h-6 w-6 text-primary" />
												<Badge variant="outline">{post.badge}</Badge>
												<span className="text-sm text-muted-foreground">{t(post.dateKey)}</span>
											</div>
											<h2 className="text-2xl font-bold text-foreground mb-4">
												{t(post.titleKey) as string}
											</h2>
											<p className="text-muted-foreground text-lg leading-relaxed mb-6">
												{t(post.descKey) as string}
											</p>
											
											<div className="prose prose-lg max-w-none">
												<h3 className="font-semibold text-foreground mb-3">Introduction</h3>
												<p className="text-muted-foreground leading-relaxed mb-6">
													{t(post.introKey) as string}
												</p>
												
												<h3 className="font-semibold text-foreground mb-3">Key Points</h3>
												<ul className="text-muted-foreground space-y-2 mb-6">
													{(t(post.pointsKey) as string[]).map((point, index) => (
														<li key={index} className="flex items-start gap-3">
															<span className="text-primary mt-1 text-lg">•</span>
															<span>{point}</span>
														</li>
													))}
												</ul>
												
												<h3 className="font-semibold text-foreground mb-3">Conclusion</h3>
												<p className="text-muted-foreground leading-relaxed">
													{t(post.conclusionKey) as string}
												</p>
											</div>
										</div>
									);
								})}
							</motion.div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}

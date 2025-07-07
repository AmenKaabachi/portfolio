'use client';

import React, { useEffect, useRef, useState } from 'react';
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
	Smartphone,
	Globe,
	BookOpen,
	X,
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
	SiBootstrap,
	SiExpress,
	SiC,
	SiOpenjdk,
	SiDotnet,
} from 'react-icons/si';
import Flag from 'react-world-flags';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
	const { t } = useLanguage();
	const aboutRef = useRef(null);
	const skillsRef = useRef(null);
	const projectsRef = useRef(null);
	const blogRef = useRef(null);
	const [showModal, setShowModal] = useState(false);
	const [modalArticle, setModalArticle] = useState<string | null>(null);
	const modalRef = useRef<HTMLDivElement>(null);

	const openModal = (articleId: string) => {
		setModalArticle(articleId);
		setShowModal(true);
		document.body.style.overflow = 'hidden';
	};

	const closeModal = () => {
		setShowModal(false);
		setModalArticle(null);
		document.body.style.overflow = 'auto';
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

	useEffect(() => {
		if (showModal && modalRef.current) {
			gsap.fromTo(
				modalRef.current,
				{
					opacity: 0,
					scale: 0.8,
				},
				{
					opacity: 1,
					scale: 1,
					duration: 0.3,
					ease: 'power2.out',
				}
			);
		}
	}, [showModal]);

	useEffect(() => {
		// GSAP animations
		gsap.fromTo(
			aboutRef.current,
			{ opacity: 0, y: 50 },
			{ opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
		);

		gsap.fromTo(
			skillsRef.current,
			{ opacity: 0, y: 50 },
			{
				opacity: 1,
				y: 0,
				duration: 1,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: skillsRef.current,
					start: 'top 80%',
					end: 'bottom 20%',
					toggleActions: 'play none none reverse',
				},
			}
		);

		gsap.fromTo(
			projectsRef.current,
			{ opacity: 0, y: 50 },
			{
				opacity: 1,
				y: 0,
				duration: 1,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: projectsRef.current,
					start: 'top 80%',
					end: 'bottom 20%',
					toggleActions: 'play none none reverse',
				},
			}
		);

		gsap.fromTo(
			blogRef.current,
			{ opacity: 0, y: 50 },
			{
				opacity: 1,
				y: 0,
				duration: 1,
				ease: 'power2.out',
				scrollTrigger: {
					trigger: blogRef.current,
					start: 'top 80%',
					end: 'bottom 20%',
					toggleActions: 'play none none reverse',
				},
			}
		);

		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
		};
	}, []);

	const skills = {
		programming: [
			{ name: 'Python', icon: SiPython },
			{ name: 'Java', icon: SiOpenjdk },
			{ name: 'C', icon: SiC },
			{ name: 'C#', icon: SiDotnet }
		],
		web: [
			{ name: 'HTML', icon: SiHtml5 },
			{ name: 'CSS', icon: SiCss3 },
			{ name: 'Bootstrap', icon: SiBootstrap },
			{ name: 'React.js', icon: SiReact },
			{ name: 'Express.js', icon: SiExpress },
			{ name: 'Node.js', icon: SiNodedotjs },
			{ name: 'PHP', icon: SiPhp }
		],
		mobile: [
			{ name: 'Java', icon: SiOpenjdk },
			{ name: 'Flutter', icon: SiFlutter }
		],
		databases: [
			{ name: 'SQL', icon: SiMysql },
			{ name: 'NoSQL', icon: SiMongodb }
		],
	};

	const projects = [
		{
			title: t('analyticsplatform'),
			description: t('analyticsDesc'),
			technologies: ['React.js', 'Express.js', 'MySQL', 'Flutter'],
			type: 'FYP',
			githubUrl: 'https://github.com/amenkaabachi', // Replace with your actual GitHub username
		},
		{
			title: t('chatgptClone'),
			description: t('chatgptDesc'),
			technologies: ['C#'],
			type: 'Personal',
			githubUrl: 'https://github.com/amenkaabachi', // Replace with your actual GitHub username
		},
		{
			title: t('liveChatApp'),
			description: t('liveChatDesc'),
			technologies: ['HTML', 'CSS', 'JavaScript', 'PHP'],
			type: 'Personal',
			githubUrl: 'https://github.com/amenkaabachi', // Replace with your actual GitHub username
		},
	];

	// Function to get tech icon
	const getTechIcon = (tech: string): React.ReactElement => {
		const techIcons: { [key: string]: React.ReactElement } = {
			'React.js': <SiReact className="h-3 w-3" />,
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
			'Java': <SiOpenjdk className="h-3 w-3" />,
			'Bootstrap': <SiBootstrap className="h-3 w-3" />,
		};
		return techIcons[tech] || <span className="h-3 w-3 text-gray-500">🔧</span>;
	};

	return (
		<div className="min-h-screen bg-background">
			{/* About Section */}
			<section ref={aboutRef} className="py-20 px-8">
				<div className="max-w-4xl mx-auto">          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-foreground mb-4 animate-gradient-text">
              Amen KAABACHI
            </h1>
            <p className="text-xl text-muted-foreground mb-2">
              {t('fullStackDeveloper')}
            </p>
            <p className="text-muted-foreground flex items-center justify-center gap-2">
              <MapPin className="h-4 w-4" />
              {t('location')}
            </p>
          </div>

					<div className="grid md:grid-cols-2 gap-8 items-center">
						<div>
							<h2 className="text-2xl font-semibold mb-4">{t('about')}</h2>
							<p className="text-muted-foreground mb-6 leading-relaxed">
								{t('bio')}
							</p>

							<div className="space-y-3">
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
										+216 99841331
									</a>
								</div>
							</div>

							{/* Languages - Compact */}
							<div className="mt-4">
								<h3 className="text-sm font-medium text-muted-foreground mb-2">{t('languages')}</h3>
								<div className="flex flex-wrap gap-1">
									<Badge variant="outline" className="flex items-center gap-1 text-xs px-2 py-1">
										<Flag
											code="TN"
											style={{
												width: '0.75em',
												height: '0.75em',
											}}
										/>
										{t('arabicNative')}
									</Badge>
									<Badge variant="outline" className="flex items-center gap-1 text-xs px-2 py-1">
										<Flag
											code="US"
											style={{
												width: '0.75em',
												height: '0.75em',
											}}
										/>
										{t('englishFluent')}
									</Badge>
									<Badge variant="outline" className="flex items-center gap-1 text-xs px-2 py-1">
										<Flag
											code="FR"
											style={{
												width: '0.75em',
												height: '0.75em',
											}}
										/>
										{t('frenchC1')}
									</Badge>
								</div>
							</div>
						</div>

						<div className="text-center">
							<div className="flex justify-center gap-4 mb-6">
								<Button variant="outline" size="lg" asChild>
									<a href="mailto:kaabachiamen@gmail.com">
										<Mail className="h-5 w-5 mr-2" />
										{t('email')}
									</a>
								</Button>
								<Button variant="outline" size="lg" asChild>
									<a
										href="https://linkedin.com"
										target="_blank"
										rel="noopener noreferrer"
									>
										<Linkedin className="h-5 w-5 mr-2" />
										LinkedIn
									</a>
								</Button>
								<Button variant="outline" size="lg" asChild>
									<a
										href="https://github.com"
										target="_blank"
										rel="noopener noreferrer"
									>
										<Github className="h-5 w-5 mr-2" />
										GitHub
									</a>
								</Button>
							</div>
						</div>
					</div>
				</div>
			</section>      {/* Skills Section */}
      <section id="skills" ref={skillsRef} className="py-20 px-8 bg-muted/50 binary-bg">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 animate-gradient-text">
            {t('skills')}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Programming Languages */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-3">
                <Code className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-lg">{t('programming')}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.programming.map((skill) => {
                  const IconComponent = skill.icon;
                  return (
                    <Badge key={skill.name} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors flex items-center gap-1 px-2 py-1 text-xs">
                      <IconComponent className="h-3 w-3" />
                      {skill.name}
                    </Badge>
                  );
                })}
              </div>
            </div>

            {/* Web Technologies */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-3">
                <Globe className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-lg">{t('web')}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.web.map((skill) => {
                  const IconComponent = skill.icon;
                  return (
                    <Badge key={skill.name} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors flex items-center gap-1 px-2 py-1 text-xs">
                      <IconComponent className="h-3 w-3" />
                      {skill.name}
                    </Badge>
                  );
                })}
              </div>
            </div>

            {/* Mobile Development */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-3">
                <Smartphone className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-lg">{t('mobile')}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.mobile.map((skill) => {
                  const IconComponent = skill.icon;
                  return (
                    <Badge key={skill.name} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors flex items-center gap-1 px-2 py-1 text-xs">
                      <IconComponent className="h-3 w-3" />
                      {skill.name}
                    </Badge>
                  );
                })}
              </div>
            </div>

            {/* Databases */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-3">
                <Database className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-lg">{t('databases')}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.databases.map((skill) => {
                  const IconComponent = skill.icon;
                  return (
                    <Badge key={skill.name} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors flex items-center gap-1 px-2 py-1 text-xs">
                      <IconComponent className="h-3 w-3" />
                      {skill.name}
                    </Badge>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>      {/* Projects Section */}
      <section id="projects" ref={projectsRef} className="py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 animate-gradient-text">
            {t('projects')}
          </h2><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow hover-lift hover-code">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <Badge variant="outline" className="text-xs">
                      {project.type}
                    </Badge>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="flex items-center gap-1 px-2 py-1 text-xs">
                        {getTechIcon(tech)}
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      {t('viewProject')}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
				</div>
			</section>

			{/* Blog Section */}
			<section id="blog" ref={blogRef} className="py-20 px-8 bg-muted/50">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-3xl font-bold text-center mb-12 animate-gradient-text">
						{t('blog')}
					</h2>
					<div className="grid md:grid-cols-2 gap-8">
						{/* AI Competition Article */}
						<Card className="hover:shadow-lg transition-shadow hover-lift hover-code">
							<CardHeader>
								<div className="flex items-center gap-2 mb-2">
									<BookOpen className="h-5 w-5 text-primary" />
									<Badge variant="outline" className="text-xs">AI Development</Badge>
								</div>
								<CardTitle className="text-lg leading-tight">
									{t('aiCompetitionTitle') as string}
								</CardTitle>
								<CardDescription>
									{t('aiCompetitionDesc') as string}
								</CardDescription>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">
									{t('aiCompetitionContent') as string}
								</p>
								<Button 
									variant="outline" 
									size="sm" 
									className="w-full"
									onClick={() => openModal('ai-competition')}
								>
									<BookOpen className="h-4 w-4 mr-2" />
									{t('readMore') as string}
								</Button>
							</CardContent>
						</Card>

						{/* Data Value Article */}
						<Card className="hover:shadow-lg transition-shadow hover-lift hover-code">
							<CardHeader>
								<div className="flex items-center gap-2 mb-2">
									<Database className="h-5 w-5 text-primary" />
									<Badge variant="outline" className="text-xs">Data Science</Badge>
								</div>
								<CardTitle className="text-lg leading-tight">
									{t('dataValueTitle') as string}
								</CardTitle>
								<CardDescription>
									{t('dataValueDesc') as string}
								</CardDescription>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">
									{t('dataValueContent') as string}
								</p>
								<Button 
									variant="outline" 
									size="sm" 
									className="w-full"
									onClick={() => openModal('data-value')}
								>
									<BookOpen className="h-4 w-4 mr-2" />
									{t('readMore') as string}
								</Button>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Blog Modal */}
			{showModal && modalArticle && (
				<div className="fixed inset-0 z-50 flex items-center justify-center p-4">
					{/* Backdrop */}
					<div 
						className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
						onClick={closeModal}
					/>
					
					{/* Modal Content */}
					<div 
						ref={modalRef}
						className="relative bg-background border rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
					>
						{/* Close Button */}
						<button
							onClick={closeModal}
							className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 hover:bg-background border shadow-sm transition-colors"
						>
							<X className="h-4 w-4" />
						</button>

						{/* Modal Content */}
						<div className="p-8">
							{modalArticle === 'ai-competition' && (
								<div className="space-y-6">
									<div className="flex items-center gap-3 mb-6">
										<Code className="h-6 w-6 text-primary" />
										<Badge variant="outline">AI Technology</Badge>
									</div>
									<h2 className="text-2xl font-bold text-foreground mb-4">
										{t('aiCompetitionTitle') as string}
									</h2>
									<p className="text-muted-foreground text-lg leading-relaxed mb-6">
										{t('aiCompetitionDesc') as string}
									</p>
									
									<div className="prose prose-lg max-w-none">
										<h3 className="font-semibold text-foreground mb-3">Introduction</h3>
										<p className="text-muted-foreground leading-relaxed mb-6">
											{t('aiCompetitionIntro') as string}
										</p>
										
										<h3 className="font-semibold text-foreground mb-3">Key Points</h3>
										<ul className="text-muted-foreground space-y-2 mb-6">
											{(t('aiCompetitionPoints') as string[]).map((point, index) => (
												<li key={index} className="flex items-start gap-3">
													<span className="text-primary mt-1 text-lg">•</span>
													<span>{point}</span>
												</li>
											))}
										</ul>
										
										<h3 className="font-semibold text-foreground mb-3">Conclusion</h3>
										<p className="text-muted-foreground leading-relaxed">
											{t('aiCompetitionConclusion') as string}
										</p>
									</div>
								</div>
							)}

							{modalArticle === 'data-value' && (
								<div className="space-y-6">
									<div className="flex items-center gap-3 mb-6">
										<Database className="h-6 w-6 text-primary" />
										<Badge variant="outline">Data Science</Badge>
									</div>
									<h2 className="text-2xl font-bold text-foreground mb-4">
										{t('dataValueTitle') as string}
									</h2>
									<p className="text-muted-foreground text-lg leading-relaxed mb-6">
										{t('dataValueDesc') as string}
									</p>
									
									<div className="prose prose-lg max-w-none">
										<h3 className="font-semibold text-foreground mb-3">Introduction</h3>
										<p className="text-muted-foreground leading-relaxed mb-6">
											{t('dataValueIntro') as string}
										</p>
										
										<h3 className="font-semibold text-foreground mb-3">Key Points</h3>
										<ul className="text-muted-foreground space-y-2 mb-6">
											{(t('dataValuePoints') as string[]).map((point, index) => (
												<li key={index} className="flex items-start gap-3">
													<span className="text-primary mt-1 text-lg">•</span>
													<span>{point}</span>
												</li>
											))}
										</ul>
										
										<h3 className="font-semibold text-foreground mb-3">Conclusion</h3>
										<p className="text-muted-foreground leading-relaxed">
											{t('dataValueConclusion') as string}
										</p>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

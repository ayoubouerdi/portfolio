import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { ExternalLink, Github, Loader2 } from 'lucide-react';

const FALLBACK_PROJECTS = [
  {
    title: "parasud",
    category: "Web App / E-commerce",
    description: "Plateforme de parapharmacie en ligne. Développé avec TypeScript.",
    image: "https://images.unsplash.com/photo-1576602976047-174e57a47881?q=80&w=2069&auto=format&fit=crop",
    tech: ["TypeScript", "React", "Node.js"],
    githubUrl: "https://github.com/ayoubouerdi/parasud",
    demoUrl: "https://parasud.vercel.app"
  },
  {
    title: "innovtech2026",
    category: "Web Development",
    description: "Projet d'innovation technologique pour 2026.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    tech: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/ayoubouerdi/innovtech2026",
    demoUrl: "https://github.com/ayoubouerdi/innovtech2026"
  },
  {
    title: "3acexam2026",
    category: "Education Platform",
    description: "Plateforme de gestion pour l'examen local 2026.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
    tech: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/ayoubouerdi/3acexam2026",
    demoUrl: "https://github.com/ayoubouerdi/3acexam2026"
  }
];

export default function Projects() {
  const [projects, setProjects] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchGithubRepo = async () => {
      try {
        const response = await fetch('https://api.github.com/users/ayoubouerdi/repos?sort=updated');
        if (!response.ok) throw new Error('API request failed');
        const data = await response.json();
        
        // Filter out empty repos or forks if you want, taking top 3 recent ones with a predefined image set
        const images = [
            "https://images.unsplash.com/photo-1576602976047-174e57a47881?q=80&w=2069&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
        ];
        
        const validRepos = data.filter((repo: any) => !repo.fork && repo.name !== "ayoubouerdi").slice(0, 3);
        
        if (validRepos.length > 0) {
            const mappedProjects = validRepos.map((repo: any, index: number) => ({
                title: repo.name,
                category: repo.language ? `Développement ${repo.language}` : 'Projet GitHub',
                description: repo.description || `Explorez ce projet open-source directement importé depuis mon profil GitHub.`,
                image: images[index % images.length],
                tech: repo.language ? [repo.language, "GitHub API", "Open Source"] : ["GitHub API", "Open Source"],
                githubUrl: repo.html_url,
                demoUrl: repo.homepage || repo.html_url
            }));
            setProjects(mappedProjects);
        } else {
            setProjects(FALLBACK_PROJECTS);
        }
      } catch (err) {
        console.error('Failed to fetch github repos', err);
        setProjects(FALLBACK_PROJECTS);
      } finally {
        setTimeout(() => setIsLoading(false), 800); // minimum loading time for animation
      }
    };
    
    fetchGithubRepo();
  }, []);

  return (
    <section id="projects" className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-zinc-900">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-20 flex flex-col items-center md:items-start"
      >
        <span className="font-mono text-cyan-500 mb-4 block">06. Selected Works</span>
        <div className="flex items-center gap-4">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Projets Récents</h2>
          <AnimatePresence>
            {isLoading && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="text-cyan-500"
              >
                <Loader2 size={28} className="animate-spin" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      <div className="flex flex-col gap-32 relative min-h-[600px]">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div 
              key="loader"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
              className="absolute inset-0 w-full flex items-center justify-center flex-col gap-8 h-full min-h-[400px]"
            >
              <div className="relative w-24 h-24">
                <motion.div
                  className="absolute inset-0 rounded-full border-t-2 border-cyan-500"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-2 rounded-full border-r-2 border-blue-500"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-4 rounded-full border-b-2 border-zinc-500"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="w-1 h-1 bg-cyan-400 rounded-full animate-ping" />
                </div>
              </div>
              <motion.span 
                className="font-mono text-cyan-500 tracking-[0.2em] text-sm uppercase"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                Fetching Data
              </motion.span>
            </motion.div>
          ) : (
            <motion.div 
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, staggerChildren: 0.2 }}
              className="flex flex-col gap-32 w-full"
            >
              {projects.map((project, idx) => (
                <ProjectCard key={project.title} project={project} index={idx} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}


const ProjectCard: React.FC<{ project: any, index: number }> = ({ project, index }) => {
  const isEven = index % 2 === 0;
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <motion.div 
      ref={cardRef}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center group`}
    >
      {/* Image container */}
      <motion.div 
        style={{ y: imageY }}
        className="w-full lg:w-3/5 relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-cyan-500/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10" />
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-[300px] sm:h-[400px] object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
        />
        
        {/* Overlay with Icons */}
        <div className="absolute inset-0 bg-zinc-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30 flex items-center justify-center gap-6 backdrop-blur-sm">
          <a href={project.githubUrl || "#"} className="w-12 h-12 rounded-full bg-zinc-900/80 border border-zinc-700 flex items-center justify-center text-zinc-300 hover:text-cyan-400 hover:border-cyan-500 transition-all transform translate-y-8 group-hover:translate-y-0 duration-500 hover:scale-110">
            <Github size={22} />
          </a>
          <a href={project.demoUrl || "#"} className="w-12 h-12 rounded-full bg-zinc-900/80 border border-zinc-700 flex items-center justify-center text-zinc-300 hover:text-cyan-400 hover:border-cyan-500 transition-all transform translate-y-8 group-hover:translate-y-0 duration-500 delay-75 hover:scale-110">
            <ExternalLink size={22} />
          </a>
        </div>

        <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.8)] pointer-events-none z-20" />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ y: contentY }}
        className={`w-full lg:w-2/5 flex flex-col ${isEven ? 'lg:items-start' : 'lg:items-end'} relative z-30 transition-transform duration-500 ease-out ${isEven ? 'group-hover:translate-x-2' : 'group-hover:-translate-x-2'}`}
      >
        <span className="font-mono text-cyan-400 text-sm mb-4 transition-transform duration-500 ease-out group-hover:-translate-y-1">{project.category}</span>
        <h3 className={`text-3xl font-bold mb-6 transition-transform duration-500 ease-out group-hover:-translate-y-1 delay-75 ${!isEven && 'lg:text-right'}`}>{project.title}</h3>
        
        <div className="bg-zinc-900/80 backdrop-blur-md p-6 lg:p-8 rounded-xl border border-zinc-800 shadow-xl mb-6 relative transition-transform duration-500 ease-out group-hover:scale-[1.02] delay-100 group-hover:border-zinc-700">
          <div className="absolute w-2 h-2 bg-cyan-500 rounded-full top-3 left-3 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
          <p className={`text-zinc-400 leading-relaxed ${!isEven && 'lg:text-right'}`}>
            {project.description}
          </p>
        </div>

        <ul className={`flex flex-wrap gap-3 font-mono text-xs mb-8 transition-transform duration-500 ease-out group-hover:-translate-y-1 delay-150 ${!isEven && 'lg:justify-end'}`}>
          {project.tech.map((t: string) => (
            <li key={t} className="relative px-3 py-1.5 rounded-full border border-zinc-700/50 bg-zinc-800/30 text-zinc-300 overflow-hidden group/tech hover:border-cyan-500/50 transition-colors">
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 -translate-x-full group-hover/tech:translate-x-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10 group-hover/tech:text-cyan-300 transition-colors duration-300">{t}</span>
            </li>
          ))}
        </ul>

        <div className={`flex gap-6 transition-transform duration-500 ease-out group-hover:-translate-y-1 delay-200 ${!isEven && 'lg:justify-end'}`}>
          <a href={project.githubUrl || "#"} className="text-zinc-400 hover:text-cyan-400 transition-all duration-300 p-2 hover:bg-cyan-500/10 rounded-full hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:scale-110">
            <Github size={24} />
          </a>
          <a href={project.demoUrl || "#"} className="text-zinc-400 hover:text-cyan-400 transition-all duration-300 p-2 hover:bg-cyan-500/10 rounded-full hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:scale-110">
            <ExternalLink size={24} />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

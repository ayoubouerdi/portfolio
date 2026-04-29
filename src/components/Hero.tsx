import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, ArrowUpRight, Blocks, MonitorSmartphone } from 'lucide-react';

export default function Hero({ setActiveSection }: { setActiveSection: (s: string) => void }) {
  return (
    <section id="about" className="relative w-full flex flex-col pt-4 px-4 md:px-8 max-w-[1400px] mx-auto min-h-[calc(100vh-100px)] justify-center">
      
      {/* Background Waves */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -mr-20 -ml-20">
         <svg className="absolute w-full h-full opacity-30" viewBox="0 0 1000 600" preserveAspectRatio="none">
            <path d="M0,300 C200,400 300,100 500,300 C700,500 800,200 1000,300 L1000,600 L0,600 Z" fill="url(#grad1)" opacity="0.1"/>
            <path d="M0,400 C200,200 400,500 600,300 C800,100 900,400 1000,200 L1000,600 L0,600 Z" fill="url(#grad2)" opacity="0.1"/>
            <path d="M0,350 C300,450 400,150 600,350 C800,550 900,250 1000,350" fill="none" stroke="url(#grad1)" strokeWidth="2" opacity="0.5"/>
            <defs>
               <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#c084fc" />
                  <stop offset="100%" stopColor="#f97316" />
               </linearGradient>
               <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#f97316" />
                  <stop offset="100%" stopColor="#c084fc" />
               </linearGradient>
            </defs>
         </svg>
      </div>

      <div className="relative flex flex-col lg:flex-row items-center justify-between w-full z-10 lg:pl-4 lg:pr-4">
        
        {/* Left Column */}
        <div className="w-full lg:w-1/3 flex flex-col justify-between self-stretch pt-12 lg:pb-12 z-20 order-1 lg:order-1">
           <div>
              <motion.h1 
                 initial={{ opacity: 0, x: -50 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.8 }}
                 className="text-5xl md:text-8xl font-bold mb-4 tracking-tighter"
              >
                 Hello,
              </motion.h1>
              <motion.p 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ duration: 0.8, delay: 0.2 }}
                 className="text-zinc-400 max-w-xs text-sm md:text-base leading-relaxed"
              >
                 Délivrant des solutions efficaces et évolutives pour transformer vos idées en réalité technologique.
              </motion.p>
           </div>
           
           <div className="flex-col gap-4 lg:gap-8 mt-12 lg:mt-20 hidden lg:flex">
               <RoleItem text="Ingénieur en Informatique" active />
               <RoleItem text="Génie Aéronautique" />
               <RoleItem text="Automatisation Industrielle" />
           </div>
        </div>

        {/* Right Column (Moves below Hello on mobile for natural reading flow) */}
        <div className="w-full lg:w-1/3 flex flex-col justify-between self-stretch text-left lg:text-right pt-4 lg:pt-12 pb-4 lg:pb-12 z-20 order-2 lg:order-3">
           <div className="flex-col items-start lg:items-end gap-6 relative hidden lg:flex">
              
              {/* Social line connection */}
              <svg className="absolute -left-10 md:-left-32 top-6 w-32 md:w-56 h-32 pointer-events-none hidden xl:block" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path d="M0,10 L40,10 L60,80 L100,80" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
                  <circle cx="40" cy="10" r="2" fill="#fff" />
                  <circle cx="60" cy="80" r="2" fill="#fff" />
              </svg>

              <div className="flex items-center gap-4 z-10">
                <SocialBox icon={<Github size={20} />} href="https://github.com/ayoubouerdi" />
                <SocialBox icon={<Linkedin size={20} />} href="https://www.linkedin.com/in/ayoub-ouerdi-3919b415a" />
              </div>
           </div>

           <div className="mt-4 lg:mt-20">
              <motion.h2 
                 initial={{ opacity: 0, x: 50 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.8, delay: 0.1 }}
                 className="text-xl md:text-3xl font-light text-zinc-400 mb-0 lg:mb-2"
              >
                 I am
              </motion.h2>
              <motion.h1 
                 initial={{ opacity: 0, x: 50 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.8, delay: 0.3 }}
                 className="text-6xl md:text-7xl font-bold leading-tight tracking-tight"
              >
                 Ayoub<br className="hidden lg:block"/> Ouerdi
              </motion.h1>
           </div>
        </div>

        {/* Center / Image */}
        <div className="relative w-full lg:w-1/3 flex justify-center items-end mt-8 lg:mt-0 z-10 bottom-0 min-h-[400px] lg:min-h-[450px] order-3 lg:order-2">
           <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="relative w-full flex justify-center"
           >
              {/* Profile Image Placeholder */}
              <div className="w-[300px] h-[400px] md:w-[450px] md:h-[550px] relative flex justify-center items-end">
                  <img 
                    src="/ayoub.png" 
                    alt="Ayoub Ouerdi" 
                    className="absolute inset-0 w-full h-full object-cover object-center filter grayscale hover:grayscale-0 transition-all duration-700 z-20"
                    style={{ WebkitMaskImage: 'linear-gradient(to top, transparent 5%, black 30%)', maskImage: 'linear-gradient(to top, transparent 5%, black 30%)' }}
                  />
                  {/* Glowing back shape */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] md:w-[250px] h-[220px] md:h-[250px] bg-gradient-to-tr from-purple-500/30 to-orange-500/30 rounded-full blur-[50px] md:blur-[60px] z-0"></div>
              </div>
           </motion.div>
        </div>

        {/* Mobile Elements - Only show on small screens */}
        <div className="w-full flex flex-col gap-8 mt-8 lg:hidden order-4 z-20 pb-12">
           <div className="flex flex-col gap-4">
               <RoleItem text="Ingénieur en Informatique" active />
               <RoleItem text="Génie Aéronautique" />
               <RoleItem text="Automatisation Industrielle" />
           </div>
           
           <div className="flex items-center gap-4 z-10">
             <SocialBox icon={<Github size={20} />} href="https://github.com/ayoubouerdi" />
             <SocialBox icon={<Linkedin size={20} />} href="https://www.linkedin.com/in/ayoub-ouerdi-3919b415a" />
           </div>
        </div>
      </div>

      {/* About Me Bottom Panel */}
      <motion.div 
         initial={{ opacity: 0, y: 50 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 1, delay: 0.5 }}
         className="w-full bg-zinc-900 border border-zinc-800 rounded-[2rem] p-8 md:p-12 z-30 mt-8 mb-8 shadow-2xl"
      >
         <div className="flex flex-col xl:flex-row gap-12 xl:gap-24 items-center">
             <div className="flex-1 w-full max-w-xl text-left">
                 <h2 className="text-3xl md:text-4xl font-bold mb-6">À propos de moi</h2>
                 <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                    Je suis Ayoub Ouerdi, Ingénieur pluridisciplinaire avec expérience en développement web, architecture logicielle, et ingénierie aéronautique. 
                    Je suis passionné par la création de systèmes fiables et innovants qui aident les entreprises à améliorer leurs processus métiers dans un monde numérique.
                 </p>
             </div>
             
             <div className="flex-1 flex flex-col justify-center gap-6 w-full">
                 <ServiceCard 
                    icon={<Blocks className="text-purple-400" size={24} />} 
                    color="bg-purple-500/10 border-purple-500/20"
                    title="Conception & Architecture Web" 
                    description="Développement de solutions performantes avec des outils modernes." 
                    onClick={() => setActiveSection('projects')}
                 />
                 <ServiceCard 
                    icon={<MonitorSmartphone className="text-orange-400" size={24} />} 
                    color="bg-orange-500/10 border-orange-500/20"
                    title="Systèmes & Automatisation" 
                    description="Maîtrise des environnements industriels et de la mécatronique." 
                    onClick={() => setActiveSection('skills')}
                 />
             </div>
         </div>
      </motion.div>

    </section>
  );
}

function RoleItem({ text, active = false }: { text: string; active?: boolean }) {
  return (
    <div className="flex items-center gap-4 relative group">
      {/* Connecting line */}
      <div className="absolute top-1/2 -left-12 w-8 h-[1px] bg-zinc-700 hidden md:block"></div>
      
      {/* Node dot */}
      <div className={`absolute top-1/2 -left-4 w-1.5 h-1.5 rounded-full -translate-y-1/2 hidden md:block ${active ? 'bg-orange-400 shadow-[0_0_8px_rgba(249,115,22,0.8)]' : 'bg-zinc-700'}`}></div>
      
      <span className={`font-mono text-sm tracking-wide transition-colors ${active ? 'text-zinc-100 font-bold' : 'text-zinc-500 group-hover:text-zinc-300'}`}>
        {text}
      </span>
      
      {active && (
        <svg className="absolute -right-16 md:-right-24 top-1/2 -translate-y-1/2 w-16 md:w-20 h-[100px] pointer-events-none hidden xl:block" preserveAspectRatio="none" viewBox="0 0 100 100">
           <path d="M0,50 L30,50 L70,80 L100,80" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
           <circle cx="100" cy="80" r="2" fill="rgba(255,255,255,0.3)" />
        </svg>
      )}
    </div>
  );
}

function SocialBox({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 hover:border-zinc-600 transition-all shadow-lg hover:-translate-y-1 relative z-20"
    >
      {icon}
    </a>
  );
}

function ServiceCard({ icon, color, title, description, onClick }: { icon: React.ReactNode, color: string, title: string, description: string, onClick: () => void }) {
  return (
    <div className="flex items-center gap-4 md:gap-6 group cursor-pointer text-left" onClick={onClick}>
       <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl shrink-0 flex items-center justify-center border ${color} transition-transform group-hover:scale-110`}>
          {icon}
       </div>
       <div className="flex-1">
          <p className="text-zinc-400 text-xs md:text-sm leading-relaxed pr-4">
             <strong className="text-white font-medium block text-sm md:text-base mb-1">{title}</strong>
             {description}
          </p>
       </div>
       <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all shrink-0">
          <ArrowUpRight size={16} />
       </div>
    </div>
  );
}

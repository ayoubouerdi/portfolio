import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, Linkedin, Twitter, Menu, X } from 'lucide-react';

export default function Navbar({ activeSection, setActiveSection }: { activeSection: string, setActiveSection: (s: string) => void }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu when clicking escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const navItems = [
    { id: 'home', label: '01. Accueil' },
    { id: 'experience', label: '02. Expériences' },
    { id: 'education', label: '03. Formations' },
    { id: 'skills', label: '04. Compétences' },
    { id: 'languages', label: '05. Langues' },
    { id: 'projects', label: '06. Projets' },
    { id: 'contact', label: '07. Contact' },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-zinc-950/50 border-b border-zinc-800"
      >
        <div className="flex items-center gap-2 relative z-[60]">
          <motion.div 
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.3 }}
            className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(6,182,212,0.5)] cursor-pointer"
            onClick={() => setActiveSection('home')}
          >
            AO
          </motion.div>
          <span 
            className="font-mono text-sm tracking-widest font-bold hidden md:block cursor-pointer"
            onClick={() => setActiveSection('home')}
          >
            AYOUB.DEV
          </span>
        </div>

        <div className="flex items-center gap-6 text-sm font-mono tracking-widest hidden lg:flex">
          {navItems.map((item) => (
             <NavLink 
               key={item.id} 
               isActive={activeSection === item.id} 
               onClick={() => setActiveSection(item.id)}
             >
               {item.label}
             </NavLink>
          ))}
        </div>

        {/* Mobile menu toggle */}
        <button 
          className="md:hidden text-zinc-400 hover:text-cyan-400 transition-colors relative z-[60]"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100svh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-zinc-950/95 backdrop-blur-xl flex flex-col items-center justify-center overflow-hidden md:hidden"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="flex flex-col items-center gap-8 text-xl font-mono tracking-widest mb-12"
            >
              {navItems.map((item) => (
                <MobileNavLink 
                  key={item.id} 
                  isActive={activeSection === item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    toggleMenu();
                  }}
                >
                  {item.label}
                </MobileNavLink>
              ))}
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-8 text-zinc-400 mt-8"
            >
              <SocialIcon icon={<Github size={24} />} href="https://github.com/ayoubouerdi" />
              <SocialIcon icon={<Linkedin size={24} />} href="https://www.linkedin.com/in/ayoub-ouerdi-3919b415a" />
              <SocialIcon icon={<Twitter size={24} />} href="#" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const MobileNavLink: React.FC<{ children: React.ReactNode; isActive: boolean; onClick: () => void }> = ({ children, isActive, onClick }) => {
  return (
    <button 
      onClick={onClick} 
      className={`transition-colors py-2 px-6 rounded-full hover:bg-zinc-900/50 ${isActive ? 'text-cyan-400 bg-cyan-900/20' : 'text-zinc-300 hover:text-cyan-400'}`}
    >
      {children}
    </button>
  );
}

const NavLink: React.FC<{ children: React.ReactNode; isActive: boolean; onClick: () => void }> = ({ children, isActive, onClick }) => {
  return (
    <button onClick={onClick} className="relative group overflow-hidden">
      <motion.span 
        className={`block group-hover:-translate-y-full transition-transform duration-300 ${isActive ? 'text-cyan-400' : ''}`}
      >
        {children}
      </motion.span>
      <motion.span 
        className="absolute inset-0 translate-y-full group-hover:translate-y-0 text-cyan-400 transition-transform duration-300"
      >
        {children}
      </motion.span>
      {isActive && (
        <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-cyan-500 rounded-full" />
      )}
    </button>
  );
}

function SocialIcon({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <motion.a 
      whileHover={{ y: -3, color: '#22d3ee' }}
      href={href} 
      className="transition-colors"
    >
      {icon}
    </motion.a>
  );
}

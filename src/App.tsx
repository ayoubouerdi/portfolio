/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { motion, useSpring, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Springs for layered cursor effect
  const springConfigNormal = { damping: 25, stiffness: 400 };
  const springConfigSlow = { damping: 40, stiffness: 150 };

  // Outer ring
  const cursorX = useSpring(0, springConfigNormal);
  const cursorY = useSpring(0, springConfigNormal);

  // Trailing glow
  const glowX = useSpring(0, springConfigSlow);
  const glowY = useSpring(0, springConfigSlow);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      glowX.set(e.clientX - 64);
      glowY.set(e.clientY - 64);
    };

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName.toLowerCase() === 'a' || 
          (e.target as HTMLElement).tagName.toLowerCase() === 'button') {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, glowX, glowY]);

  const renderSection = () => {
    switch(activeSection) {
      case 'home': return <Hero setActiveSection={setActiveSection} />;
      case 'experience': return <Experience />;
      case 'education': return <Education />;
      case 'skills': return <Skills />;
      case 'languages': return <Languages />;
      case 'projects': return <Projects />;
      case 'contact': return <Contact />;
      default: return <Hero setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="bg-zinc-950 min-h-screen text-zinc-50 font-sans selection:bg-cyan-500/30 overflow-x-hidden flex flex-col">
      {/* Trailing Pulsating Glow */}
      <motion.div
        className="fixed top-0 left-0 w-32 h-32 bg-cyan-500/30 blur-[40px] rounded-full pointer-events-none z-[90] hidden md:block mix-blend-screen"
        style={{
          x: glowX,
          y: glowY,
        }}
        animate={{
          scale: isHovering ? 1.5 : [1, 1.2, 1],
          opacity: isHovering ? 0.8 : [0.4, 0.6, 0.4],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Custom Cursor Ring */}
      <motion.div 
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-cyan-400 pointer-events-none z-[100] hidden md:block mix-blend-screen"
        style={{
          x: cursorX,
          y: cursorY,
          scale: isHovering ? 1.8 : 1,
          backgroundColor: isHovering ? 'rgba(6, 182, 212, 0.1)' : 'transparent',
        }}
        transition={{ scale: { duration: 0.3, ease: "easeOut" } }}
      />

      {/* Custom Cursor Dot */}
      <motion.div 
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] rounded-full pointer-events-none z-[100] hidden md:block"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          opacity: isHovering ? 0 : 1,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />

      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="relative flex-grow pt-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

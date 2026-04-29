import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { GraduationCap, Calendar } from 'lucide-react';

const educations = [
  {
    id: 1,
    degree: "Docteur ingénieur, Artificial Intelligence",
    school: "ENSAO",
    period: "Nov 2022 - Présent"
  },
  {
    id: 2,
    degree: "Master en ingénierie, Mécatronique industrielle",
    school: "Université Ibn Tofail",
    period: "Sept 2020 - Sept 2022"
  },
  {
    id: 3,
    degree: "Licence professionnelle, Mécatronique",
    school: "Université Ibn Tofail Kénitra",
    period: "Sept 2019 - Sept 2020"
  },
  {
    id: 4,
    degree: "Formation dans les métiers des NTIC et de l'électronique",
    school: "Complexe De Formation Dans Les Métiers Des Nouvelles Technologies De l'Information, De l'Offshoring et de l'Electronique",
    period: "2016 - 2018"
  }
];

export default function Education() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="education" className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-zinc-900">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-20 flex flex-col items-center md:items-start"
      >
        <span className="font-mono text-cyan-500 mb-4 block">03. Formations</span>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Parcours Académique</h2>
      </motion.div>

      <div ref={containerRef} className="relative max-w-4xl mx-auto md:ml-12">
        {/* Timeline background line */}
        <div className="absolute left-[15px] md:left-0 top-0 bottom-0 w-[2px] bg-zinc-800" />
        
        {/* Timeline progress line */}
        <motion.div 
          className="absolute left-[15px] md:left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500 via-blue-500 to-transparent origin-top"
          style={{ scaleY: lineHeight }}
        />

        <div className="flex flex-col gap-12">
          {educations.map((edu, idx) => (
            <EducationItem key={edu.id} education={edu} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

const EducationItem: React.FC<{ education: any, index: number }> = ({ education, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="relative pl-12 md:pl-10"
    >
      {/* Timeline Dot */}
      <motion.div 
        className="absolute left-[11px] md:left-[-4px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-950 border-2 border-cyan-500 z-10"
        whileInView={{ scale: [0, 1.5, 1], backgroundColor: ["#09090b", "#06b6d4", "#09090b"] }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      <div className="absolute left-[3px] md:left-[-12px] top-[0px] w-6 h-6 rounded-full bg-cyan-500/20 animate-ping opacity-75" />

      {/* Card Content */}
      <motion.div 
        className="bg-zinc-900/40 border border-zinc-800 hover:border-cyan-500/30 p-6 md:p-8 rounded-2xl transition-all group relative overflow-hidden"
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 relative z-10">
          <div>
            <h3 className="text-2xl font-bold text-zinc-100 group-hover:text-cyan-400 transition-colors">
              {education.degree}
            </h3>
            <div className="flex items-center gap-2 mt-2 text-lg font-medium text-zinc-300">
              <GraduationCap size={18} className="text-cyan-500 shrink-0" />
              <span>{education.school}</span>
            </div>
          </div>
          
          <div className="flex flex-col gap-2 text-sm font-mono text-zinc-400 shrink-0 mt-1 md:mt-0">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{education.period}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

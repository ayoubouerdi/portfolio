import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: "Ingénieur domotique",
    company: "ALAQ Holding",
    type: "Temps plein",
    period: "Juin 2025 - Présent",
    location: "Marrakech, Maroc",
    description: [],
    skills: []
  },
  {
    id: 2,
    role: "Président",
    company: "CBIA Lab",
    type: "Temps plein",
    period: "Sept 2024 - Juil 2025",
    location: "Marrakech, Maroc",
    description: [],
    skills: []
  },
  {
    id: 3,
    role: "Manager",
    company: "Atlas International, INC",
    type: "Temps plein",
    period: "Nov 2023 - Août 2024",
    location: "Marrakech, Maroc",
    description: [],
    skills: []
  },
  {
    id: 4,
    role: "Ingénieur en Aéronautique",
    company: "Office National Des Aéroports",
    type: "Stage",
    period: "Juin 2021 - Août 2021",
    location: "Oujda, Maroc",
    description: [
      "Ingénieur et responsable d’une équipe de maintenance.",
      "La construction d’engins et de prototypes : avions, hélicoptères, satellites.",
      "La conception des pièces en accord avec le cahier des charges établi.",
      "La création de logiciels de calcul destinés à détecter les anomalies.",
      "La maintenance des pièces et des différents ensembles."
    ],
    skills: ["Leadership", "Analyse de données"]
  },
  {
    id: 5,
    role: "Technicien réseau",
    company: "Orientalus",
    type: "Temps plein",
    period: "Sept 2020 - Nov 2020",
    location: "Oujda, Maroc",
    description: [],
    skills: []
  },
  {
    id: 6,
    role: "Responsable du service technique",
    company: "Yazaki Morocco",
    type: "Stage",
    period: "Janv 2017 - Mars 2018",
    location: "Kénitra, Maroc",
    description: [],
    skills: ["Leadership"]
  },
  {
    id: 7,
    role: "Sous-Chef d’équipe de maintenance",
    company: "Office National des Chemins de Fer (ONCF)",
    type: "Stage",
    period: "Févr 2017 - Mars 2017",
    location: "Oujda, Maroc",
    description: [
      "Regroupe les actions de dépannage et de réparation des équipements.",
      "Réalisation de la maintenance corrective des wagons."
    ],
    skills: ["Leadership"]
  }
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-zinc-900">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-20 flex flex-col items-center md:items-start"
      >
        <span className="font-mono text-cyan-500 mb-4 block">02. Parcours</span>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Expérience Professionnelle</h2>
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
          {experiences.map((exp, idx) => (
            <ExperienceItem key={exp.id} experience={exp} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

const ExperienceItem: React.FC<{ experience: any, index: number }> = ({ experience, index }) => {
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
        
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6 relative z-10">
          <div>
            <h3 className="text-2xl font-bold text-zinc-100 group-hover:text-cyan-400 transition-colors">
              {experience.role}
            </h3>
            <div className="flex items-center gap-2 mt-2 text-lg font-medium text-zinc-300">
              <Briefcase size={18} className="text-cyan-500" />
              <span>{experience.company}</span>
              <span className="text-zinc-600 px-2">•</span>
              <span className="text-sm font-mono text-cyan-400/80">{experience.type}</span>
            </div>
          </div>
          
          <div className="flex flex-col gap-2 text-sm font-mono text-zinc-400 shrink-0">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{experience.period}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span>{experience.location}</span>
            </div>
          </div>
        </div>

        {experience.description && experience.description.length > 0 && (
          <ul className="list-none space-y-2 mb-6 relative z-10">
            {experience.description.map((desc: string, i: number) => (
              <li key={i} className="text-zinc-400 flex items-start gap-3">
                <span className="text-cyan-500 mt-1.5 leading-none">▹</span>
                <span className="leading-relaxed">{desc}</span>
              </li>
            ))}
          </ul>
        )}

        {experience.skills && experience.skills.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4 relative z-10">
            {experience.skills.map((skill: string) => (
              <span 
                key={skill} 
                className="px-3 py-1 text-xs font-mono rounded-full border border-zinc-700 bg-zinc-800/80 text-zinc-300"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

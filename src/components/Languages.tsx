import React from 'react';
import { motion } from 'motion/react';
import { Globe, BookOpen, MessageCircle } from 'lucide-react';

const languages = [
  {
    name: "Arabe",
    level: "Bilingue ou langue natale",
    percentage: 100,
    icon: <MessageCircle size={20} />
  },
  {
    name: "Français",
    level: "Capacité professionnelle complète",
    percentage: 90,
    icon: <MessageCircle size={20} />
  },
  {
    name: "Anglais",
    level: "Capacité professionnelle limitée",
    percentage: 65,
    icon: <Globe size={20} />
  },
  {
    name: "Allemand",
    level: "Notions de base",
    percentage: 25,
    icon: <BookOpen size={20} />
  }
];

export default function Languages() {
  return (
    <section id="languages" className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-zinc-900">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-20 flex flex-col items-center md:items-start"
      >
        <span className="font-mono text-cyan-500 mb-4 block">05. Langues</span>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Compétences Linguistiques</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
        {languages.map((lang, idx) => (
          <LanguageCard key={lang.name} language={lang} index={idx} />
        ))}
      </div>
    </section>
  );
}

const LanguageCard: React.FC<{ language: any, index: number }> = ({ language, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      className="bg-zinc-900/40 border border-zinc-800 p-6 md:p-8 rounded-2xl group hover:border-cyan-500/30 transition-all relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="flex items-center gap-4 mb-6 relative z-10">
        <div className="w-12 h-12 rounded-full bg-zinc-800/80 border border-zinc-700 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-500">
          {language.icon}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-zinc-100 group-hover:text-cyan-400 transition-colors">
            {language.name}
          </h3>
          <p className="text-sm font-mono text-zinc-400 mt-1">
            {language.level}
          </p>
        </div>
      </div>

      <div className="w-full bg-zinc-800 rounded-full h-2.5 relative z-10 overflow-hidden">
        <motion.div 
          className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2.5 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${language.percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 + (index * 0.1), ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

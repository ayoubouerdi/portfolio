import React from 'react';
import { motion } from 'motion/react';
import { 
  Code, Layout, Sparkles, Box, 
  Server, Terminal, Network, 
  Database, Search, Boxes, Cloud, Workflow, Settings,
  Cog, Cpu, Plane, PenTool, BarChart, Users, MessageSquare, Target, Laptop, Factory
} from 'lucide-react';

const getIcon = (item: string) => {
  switch (item) {
    case "React": case "Next.js": return <Layout size={14} />;
    case "TypeScript": case "Tailwind CSS": return <Code size={14} />;
    case "Framer Motion": return <Sparkles size={14} />;
    case "Three.js": return <Box size={14} />;
    
    case "Node.js": case "Express": case "NestJS": return <Server size={14} />;
    case "Python": case "Go": return <Terminal size={14} />;
    case "GraphQL": return <Network size={14} />;
    
    case "PostgreSQL": case "MongoDB": case "Redis": return <Database size={14} />;
    case "Prisma": return <Boxes size={14} />;
    case "ElasticSearch": return <Search size={14} />;
    
    case "Docker": case "Kubernetes": return <Boxes size={14} />;
    case "AWS": return <Cloud size={14} />;
    case "CI/CD": return <Workflow size={14} />;
    case "Linux": return <Settings size={14} />;

    case "Génie mécanique": case "Ingénierie": case "Automatisation industrielle": return <Cog size={14} />;
    case "Électronique": case "Mécatronique": return <Cpu size={14} />;
    case "Génie aérospatial": return <Plane size={14} />;
    case "Infrastructure industrielle et équipement": return <Factory size={14} />;
    case "AutoCAD": return <PenTool size={14} />;
    case "Technologies de l’information": return <Laptop size={14} />;
    
    case "Analyse de données": case "Compétences analytiques": return <BarChart size={14} />;
    case "Gestion de projet": case "Amélioration des processus": case "Amélioration des processus métiers": return <Workflow size={14} />;
    
    case "Leadership": case "Compétences de supervision": return <Users size={14} />;
    case "Communication": case "Compétences interpersonnelles": return <MessageSquare size={14} />;
    case "Résolution de problèmes": return <Target size={14} />;
    
    default: return <Code size={14} />;
  }
};

const skills = [
  { category: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "Three.js"] },
  { category: "Backend", items: ["Node.js", "Express", "NestJS", "Python", "Go", "GraphQL"] },
  { category: "Base de Données", items: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "ElasticSearch"] },
  { category: "DevOps & Cloud", items: ["Docker", "Kubernetes", "AWS", "CI/CD", "Linux"] },
  { 
    category: "Génie & Industrie", 
    items: [
      "Mécatronique", "Génie mécanique", "Électronique", 
      "Génie aérospatial", "Automatisation industrielle", 
      "Infrastructure industrielle et équipement", "Ingénierie"
    ] 
  },
  { 
    category: "Outils & Processus", 
    items: [
      "AutoCAD", "Technologies de l’information", 
      "Gestion de projet", "Amélioration des processus", 
      "Amélioration des processus métiers", "Analyse de données", "Compétences analytiques"
    ] 
  },
  { 
    category: "Soft Skills & Leadership", 
    items: [
      "Leadership", "Compétences de supervision", 
      "Résolution de problèmes", "Communication", 
      "Compétences interpersonnelles"
    ] 
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-zinc-900 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <span className="font-mono text-cyan-500 mb-4 block">04. Expertise Technique</span>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          Compétences <span className="text-cyan-500">& Outils</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-transparent" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((skillGroup, idx) => (
          <SkillCategory key={skillGroup.category} title={skillGroup.category} items={skillGroup.items} delay={idx * 0.15} />
        ))}
      </div>
    </section>
  );
}

const SkillCategory: React.FC<{ title: string, items: string[], delay: number }> = ({ title, items, delay }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 hover:border-cyan-500/30 transition-colors group relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <h3 className="text-xl font-semibold mb-6 font-mono text-zinc-300">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item, i) => (
          <motion.span 
            key={item}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: delay + (i * 0.05) }}
            whileHover={{ 
              scale: 1.15, 
              rotate: i % 2 === 0 ? 5 : -5,
              backgroundColor: "rgba(6, 182, 212, 0.15)", 
              color: "#22d3ee", 
              borderColor: "rgba(6, 182, 212, 0.5)",
              boxShadow: "0 0 20px rgba(6, 182, 212, 0.3)",
              zIndex: 10
            }}
            whileTap={{ scale: 0.95 }}
            className="px-3 py-1.5 text-sm rounded-md border border-zinc-700 bg-zinc-800/50 text-zinc-400 cursor-default inline-flex items-center gap-2 relative"
          >
            {getIcon(item)}
            {item}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

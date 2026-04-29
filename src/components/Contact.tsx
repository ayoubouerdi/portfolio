import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Copyright, Heart, Terminal, Mail, Phone, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [outputLines, setOutputLines] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isTerminalOpen && inputRef.current) {
      inputRef.current.focus();
      // Initialize welcome message
      if (outputLines.length === 0) {
        setOutputLines([
          `Welcome to Ayoub's Contact Terminal v1.0.0`,
          `Type 'help' to see available commands.`,
          ``,
          `Or skip the terminal and contact me directly:`,
          `📧 Email:    <a href="mailto:ayoubouerdi@gmail.com" class="text-cyan-400 hover:underline">ayoubouerdi@gmail.com</a>`,
          `📱 Phone:    <a href="tel:0635611579" class="text-cyan-400 hover:underline">0635611579</a>`,
          `💼 LinkedIn: <a href="https://www.linkedin.com/in/ayoub-ouerdi-3919b415a" target="_blank" class="text-cyan-400 hover:underline">www.linkedin.com/in/ayoub-ouerdi-3919b415a</a>`,
          `🐙 GitHub:   <a href="https://github.com/ayoubouerdi" target="_blank" class="text-cyan-400 hover:underline">https://github.com/ayoubouerdi</a>`,
          ``
        ]);
      }
    }
  }, [isTerminalOpen]);

  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [outputLines]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = inputVal.trim();
    setOutputLines(prev => [...prev, `> ${trimmed}`]);
    setInputVal('');
    
    if (!trimmed) return;

    const [command, ...args] = trimmed.split(' ');
    const message = args.join(' ');

    switch(command.toLowerCase()) {
      case 'help':
        setOutputLines(prev => [...prev, 
          `Available commands:`,
          `  help    - Show this help message`,
          `  contact - Show contact information`,
          `  email   - Open default mail client (usage: email [your message])`,
          `  clear   - Clear terminal output`
        ]);
        break;
      case 'contact':
        setOutputLines(prev => [...prev, 
          `Contact Information:`,
          `  📧 Email:    <a href="mailto:ayoubouerdi@gmail.com" class="text-cyan-400 hover:underline">ayoubouerdi@gmail.com</a>`,
          `  📱 Phone:    <a href="tel:0635611579" class="text-cyan-400 hover:underline">0635611579</a>`,
          `  💼 LinkedIn: <a href="https://www.linkedin.com/in/ayoub-ouerdi-3919b415a" target="_blank" class="text-cyan-400 hover:underline">www.linkedin.com/in/ayoub-ouerdi-3919b415a</a>`,
          `  🐙 GitHub:   <a href="https://github.com/ayoubouerdi" target="_blank" class="text-cyan-400 hover:underline">https://github.com/ayoubouerdi</a>`
        ]);
        break;
      case 'email':
        setOutputLines(prev => [...prev, `! Opening mail client...`]);
        const mailto = message 
          ? `mailto:ayoubouerdi@gmail.com?subject=Contact from Terminal&body=${encodeURIComponent(message)}`
          : `mailto:ayoubouerdi@gmail.com`;
        setTimeout(() => {
          window.open(mailto, '_blank');
        }, 500);
        break;
      case 'clear':
        setOutputLines([]);
        break;
      default:
        setOutputLines(prev => [...prev, `command not found: ${command}`]);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 border-t border-zinc-900 bg-zinc-950 relative overflow-hidden flex-grow flex flex-col justify-between">
      {/* Decorative dots grid behind */}
      <div className="absolute inset-0 opacity-[0.03]" 
        style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} 
      />

      <div className="max-w-4xl mx-auto w-full relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-mono text-cyan-500 mb-6 block">07. Et la suite ?</span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">On discute ?</h2>
          <p className="text-xl text-zinc-400 mb-12 max-w-xl mx-auto">
            Je suis actuellement ouvert à de nouvelles opportunités. 
            Que vous ayez une question, une proposition, ou juste pour dire bonjour, 
            je ferai de mon mieux pour vous répondre rapidement !
          </p>
          
          {!isTerminalOpen && (
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsTerminalOpen(true)}
              className="inline-flex items-center gap-2 px-10 py-5 rounded-full border border-cyan-500/50 bg-cyan-500/10 text-cyan-300 font-bold hover:bg-cyan-500 hover:text-zinc-950 transition-all duration-300 backdrop-blur-sm cursor-pointer"
            >
              Démarrer le terminal <Terminal size={20} />
            </motion.button>
          )}
        </motion.div>

        <AnimatePresence>
          {isTerminalOpen && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.4, type: "spring" }}
              className="mt-12 text-left bg-zinc-900 border border-zinc-700 rounded-lg overflow-hidden max-w-2xl mx-auto shadow-2xl relative"
            >
              <div className="flex items-center justify-between px-4 py-3 bg-zinc-950 border-b border-zinc-800">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 cursor-pointer hover:bg-red-400" onClick={() => setIsTerminalOpen(false)} />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="text-zinc-400 font-mono text-xs flex items-center gap-2">
                  <Terminal size={14} /> guest@ayoub-dev: ~
                </div>
                <div className="w-12"></div>
              </div>
              <div 
                className="p-6 font-mono text-sm sm:text-base text-zinc-300 h-80 overflow-y-auto cursor-text"
                onClick={() => inputRef.current?.focus()}
              >
                {outputLines.map((line, i) => (
                  <div key={i} className="mb-2 whitespace-pre-wrap flex">
                    {line.startsWith('> ') ? (
                       <><span className="text-green-400 mr-2">guest@dev:~$</span><span className="text-white">{line.slice(2)}</span></>
                    ) : line.startsWith('!') ? (
                       <span className="text-yellow-400">{line.slice(1)}</span>
                    ) : (
                       <span dangerouslySetInnerHTML={{ __html: line }} />
                    )}
                  </div>
                ))}
                <form onSubmit={handleCommand} className="flex mt-2 items-center">
                  <span className="text-green-400 mr-2 flex-shrink-0">guest@dev:~$</span>
                  <input 
                    ref={inputRef}
                    type="text" 
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    className="flex-1 bg-transparent outline-none text-white focus:ring-0 p-0 border-0 m-0 leading-tight"
                    autoFocus
                    spellCheck="false"
                    autoComplete="off"
                  />
                </form>
                <div ref={terminalEndRef} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.footer 
        className="mt-20 flex flex-col items-center justify-center text-center font-mono text-xs text-zinc-600 relative z-10 w-full"
      >
        <motion.div
           whileHover={{ scale: 1.05, color: '#e4e4e7' }}
           transition={{ duration: 0.3 }}
           className="inline-flex flex-col items-center gap-2 cursor-default"
        >
          <div className="flex items-center gap-1.5 justify-center flex-wrap">
            Conçu et développé avec passion 
            <motion.span 
               animate={{ scale: [1, 1.25, 1] }} 
               transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }} 
               className="text-cyan-500 flex items-center justify-center"
            >
              <Heart size={14} fill="currentColor" />
            </motion.span> 
            & animations par Ayoub Ouerdi.
          </div>
          <div className="flex items-center gap-1.5 justify-center mt-1">
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              className="flex items-center justify-center text-zinc-500"
            >
              <Copyright size={14} />
            </motion.span>
            {new Date().getFullYear()} Tous droits réservés.
          </div>
        </motion.div>
      </motion.footer>
    </section>
  );
}

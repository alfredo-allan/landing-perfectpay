"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Megaphone } from "lucide-react";

export function AdModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // 1. Mostrar após 10 segundos na página
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000);

    // 2. Ou mostrar quando o mouse sair da tela (Exit Intent)
    const handleMouseOut = (e: MouseEvent) => {
      if (e.clientY < 0) {
        setIsOpen(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseOut);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseOut);
    };
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-999 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white dark:bg-slate-950 w-full max-w-lg rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800"
          >
            {/* Botão Fechar */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-500 hover:text-brand-primary transition-colors z-50"
            >
              <X size={20} />
            </button>

            <div className="p-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mb-6">
                <Megaphone size={32} />
              </div>

              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                Publicidade / Oferta Exclusiva
              </span>

              <h2 className="text-2xl font-black font-heading text-slate-900 dark:text-white uppercase leading-tight mb-4">
                Oportunidade que <br />{" "}
                <span className="text-brand-primary italic">
                  Acaba em Breve
                </span>
              </h2>

              {/* ÁREA DO GOOGLE ADSENSE */}
              <div className="w-full min-h-62.5 bg-slate-50 dark:bg-slate-900 rounded-2xl flex items-center justify-center border-2 border-dashed border-slate-200 dark:border-slate-800 relative overflow-hidden">
                {/* Aqui você vai colar o código do AdSense (ins ou script) */}
                <span className="text-xs font-bold text-slate-400 uppercase italic">
                  Espaço reservado para Google Adsense
                </span>

                {/* Exemplo de Script do AdSense:
                <ins className="adsbygoogle"
                     style={{ display: 'block' }}
                     data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
                     data-ad-slot="XXXXXXXXXX"
                     data-ad-format="auto"
                     data-full-width-responsive="true"></ins>
                */}
              </div>

              <p className="mt-6 text-sm text-slate-500 dark:text-slate-400 font-medium">
                Gostou das nossas ferramentas? Clique no anúncio acima para
                apoiar nosso marketplace.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

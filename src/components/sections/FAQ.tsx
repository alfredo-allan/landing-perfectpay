"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Os produtos possuem garantia?",
    a: "Sim. Todos os produtos listados no Perfect Check passam por uma inspeção de checkout. De acordo com o CDC, você tem 7 dias de garantia incondicional após a compra.",
  },
  {
    q: "Como recebo o acesso ao conteúdo?",
    a: "Imediatamente após a confirmação do pagamento, você receberá os dados de acesso no e-mail cadastrado na plataforma de checkout (Hotmart, PerfectPay, etc).",
  },
  {
    q: "O site Perfect Check é seguro?",
    a: "Somos uma plataforma de curadoria e inspeção. Nosso selo garante que o link de destino é oficial e que o produtor possui histórico de entrega positiva.",
  },
  {
    q: "Posso solicitar a análise de um produto?",
    a: "Com certeza! Basta acessar nossa página 'Venda Conosco' ou entrar em contato pelo suporte para sugerir uma nova inspeção técnica.",
  },
];

export default function FAQ() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white dark:bg-slate-950 transition-colors">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-full mb-4">
            <HelpCircle size={18} />
            <span className="text-[10px] font-black uppercase tracking-widest">
              Dúvidas
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black font-heading uppercase text-foreground">
            Perguntas{" "}
            <span className="text-brand-primary italic">Frequentes</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border-b border-slate-200 dark:border-slate-800"
            >
              <button
                onClick={() => setActiveIdx(activeIdx === i ? null : i)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <span className="font-bold text-slate-700 dark:text-slate-200 uppercase text-sm tracking-tight group-hover:text-brand-primary transition-colors">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`text-slate-400 transition-transform duration-300 ${
                    activeIdx === i ? "rotate-180 text-brand-primary" : ""
                  }`}
                  size={20}
                />
              </button>
              <AnimatePresence>
                {activeIdx === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

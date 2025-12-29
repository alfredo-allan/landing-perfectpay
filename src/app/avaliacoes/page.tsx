"use client";

import { motion } from "framer-motion";
import { Star, Quote, CheckCircle2, MessageSquare } from "lucide-react";

// Removi o import do Image que não estava sendo usado

const reviews = [
  {
    id: 1,
    user: "Marcos Oliveira",
    role: "Empreendedor Digital",
    comment:
      "O selo Perfect Check me deu a segurança que eu precisava. Comprei o curso de Tráfego Pago e o conteúdo é exatamente o que foi prometido na inspeção.",
    rating: 5,
    product: "Campanhas Lucrativas ADS",
  },
  {
    id: 2,
    user: "Ana Beatriz",
    role: "Freelancer",
    comment:
      "O e-book de Hardware é fantástico. Evitei gastar 400 reais em uma fonte que não precisava graças aos mitos desvendados aqui.",
    rating: 5,
    product: "Os Mitos do Hardware",
  },
  {
    id: 3,
    user: "Ricardo Santos",
    role: "Analista de Dados",
    comment:
      "Melhor marketplace para quem não quer perder tempo minerando produto. Aqui já vem tudo mastigado e validado.",
    rating: 4,
    product: "Mestre do Excel",
  },
  {
    id: 4,
    user: "Carla Mendes",
    role: "Estudante",
    comment:
      "Suporte do desenvolvedor é nota 10. Tive uma dúvida sobre o acesso e me responderam no WhatsApp em menos de 5 minutos.",
    rating: 5,
    product: "Word Express",
  },
];

export default function AvaliacoesPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      {/* Header da Página */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-600 dark:text-yellow-500 px-4 py-2 rounded-full mb-6 border border-yellow-500/20"
        >
          <Star size={16} fill="currentColor" />
          <span className="text-[10px] font-black uppercase tracking-widest">
            4.9/5 Média de Satisfação
          </span>
        </motion.div>

        <h1 className="text-4xl md:text-6xl font-black font-heading uppercase tracking-tighter text-foreground mb-6">
          O que dizem os <br />
          <span className="text-brand-primary italic">Nossos Membros</span>
        </h1>
        <p className="text-slate-600 dark:text-slate-400 font-medium">
          Transparência total. Veja o depoimento de quem já utilizou as
          ferramentas validadas pela nossa curadoria técnica.
        </p>
      </div>

      {/* Grid de Depoimentos */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {reviews.map((review, idx) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="break-inside-avoid bg-white dark:bg-slate-950 p-8 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 hover:shadow-2xl transition-all duration-500 group"
          >
            <div className="flex items-center gap-1 text-yellow-500 mb-6">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>

            <div className="relative">
              <Quote
                className="absolute -top-4 -left-2 text-brand-primary/10"
                size={40}
              />
              {/* CORREÇÃO DAS ASPAS: Usei &quot; para escapar os caracteres */}
              <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed mb-8 relative z-10 italic">
                &quot;{review.comment}&quot;
              </p>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-900">
              <div className="flex flex-col">
                <span className="text-sm font-black text-slate-200` dark:text-slate-200 uppercase tracking-tight flex items-center gap-2">
                  {review.user}
                  <CheckCircle2 size={14} className="text-brand-primary" />
                </span>
                <span className="text-[10px] font-bold text-slate-400 uppercase">
                  {review.role}
                </span>
              </div>
              <div className="bg-slate-100 dark:bg-slate-900 px-3 py-1 rounded-lg">
                <span className="text-[9px] font-black text-brand-primary uppercase italic">
                  {review.product}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Final */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-20 p-12 bg-brand-primary rounded-[3rem] text-center text-white"
      >
        <MessageSquare size={48} className="mx-auto mb-6 opacity-20" />
        <h2 className="text-3xl font-black font-heading uppercase tracking-tighter mb-4">
          Sua opinião importa para nós
        </h2>
        <p className="text-white/80 mb-8 max-w-xl mx-auto font-medium">
          Adquiriu algum produto através do nosso Marketplace? Envie seu
          feedback para nossa equipe e ajude outros usuários.
        </p>
        <button className="bg-white text-brand-primary px-10 py-4 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-slate-100 transition-all active:scale-95 shadow-xl">
          Enviar minha Avaliação
        </button>
      </motion.div>
    </div>
  );
}

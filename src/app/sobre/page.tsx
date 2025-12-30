"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Target, Users, Search, CheckCircle2 } from "lucide-react";

export default function SobrePage() {
  return (
    // Removi as cores de fundo fixas daqui para deixar o ThemeProvider trabalhar no layout
    <div className="container mx-auto px-4 py-16 md:py-24">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-full mb-6"
        >
          <ShieldCheck size={16} />
          <span className="text-[10px] font-black uppercase tracking-widest">
            Nossa Missão
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-black font-heading uppercase tracking-tighter mb-6"
        >
          <span className="text-foreground">Transparência no</span>
          <br />
          <span className="text-brand-primary italic">Mercado Digital</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed"
        >
          O Perfect Check nasceu da necessidade de filtrar o excesso de
          informações na internet. Nossa plataforma não é apenas um marketplace,
          mas um laboratório de inspeção técnica onde validamos a entrega, a
          segurança e a qualidade de produtos digitais.
        </motion.p>
      </div>

      {/* Grid de Pilares */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {[
          {
            icon: <Search className="text-brand-primary" size={32} />,
            title: "Curadoria Técnica",
            desc: "Analisamos cada curso e ferramenta. Se o conteúdo não cumpre o que promete, ele não entra aqui.",
          },
          {
            icon: <Target className="text-brand-primary" size={32} />,
            title: "Foco no Aluno",
            desc: "Nosso objetivo é garantir que seu investimento em educação digital seja seguro e lucrativo.",
          },
          {
            icon: <Users className="text-brand-primary" size={32} />,
            title: "Comunidade Livre",
            desc: "Damos voz aos usuários através de avaliações reais, criando um ecossistema de confiança mútua.",
          },
        ].map((pilar, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-10 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[3rem] text-center shadow-sm"
          >
            <div className="flex justify-center mb-6">{pilar.icon}</div>
            <h3 className="text-xl font-black font-heading text-slate-900 dark:text-white uppercase mb-4">
              {pilar.title}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
              {pilar.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Seção de Compromisso - INVERSÃO DE TEMA CORRIGIDA */}
      <div className="bg-slate-950 dark:bg-white rounded-[3.5rem] p-12 md:p-20 text-center md:text-left flex flex-col md:flex-row items-center gap-12 shadow-2xl transition-colors duration-500">
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-black font-heading text-white dark:text-slate-950 uppercase mb-6 leading-tight">
            O Selo de Qualidade <br />
            <span className="text-brand-primary italic">Perfect Check</span>
          </h2>
          <div className="space-y-4">
            {[
              "Verificação de Checkout Seguro",
              "Validação de Conteúdo Programático",
              "Teste de Suporte do Produtor",
              "Análise de Reclamações e Garantia",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-brand-primary" />
                <span className="text-white/80 dark:text-slate-700 font-black uppercase text-[10px] tracking-widest">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-shrink-0">
          <div className="bg-brand-primary p-8 rounded-full animate-pulse shadow-2xl shadow-brand-primary/40">
            <ShieldCheck size={80} className="text-white" />
          </div>
        </div>
      </div>

      {/* Assinatura */}
      <div className="mt-20 text-center">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-2">
          Desenvolvido por
        </p>
        <span className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-tighter">
          Leap In Technology
        </span>
      </div>
    </div>
  );
}

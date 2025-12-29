"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Rocket,
  Users,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function VendaConoscoPage() {
  // Substitua pelo seu número (Ex: 5511999999999)
  const WHATSAPP_NUMBER = "5511994102660";
  const message =
    "Olá! Gostaria de submeter meu produto para a curadoria do Perfect Check.";
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-full mb-6"
        >
          <Rocket size={16} />
          <span className="text-[10px] font-black uppercase tracking-widest">
            Expanda seu Alcance
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-black font-heading uppercase tracking-tighter text-foreground mb-6"
        >
          Seu produto com o selo <br />
          <span className="text-brand-primary italic">Perfect Check</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed"
        >
          Se você é criador de conteúdo, infoprodutor ou desenvolvedor e possui
          um produto de alta qualidade, nós queremos te ajudar a vender mais.
          Nossa curadoria seleciona os melhores projetos para nossa base
          exclusiva de compradores.
        </motion.p>
      </div>

      {/* Grid de Benefícios */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {[
          {
            icon: <ShieldCheck className="text-brand-primary" size={32} />,
            title: "Selo de Confiança",
            desc: "Seu produto ganha autoridade imediata ao passar pela nossa inspeção técnica.",
          },
          {
            icon: <Users className="text-brand-primary" size={32} />,
            title: "Tráfego Qualificado",
            desc: "Exposição direta para pessoas que buscam soluções reais e validadas.",
          },
          {
            icon: <CheckCircle2 className="text-brand-primary" size={32} />,
            title: "Checkout Direto",
            desc: "Mantemos seu link da Hotmart ou PerfectPay. O controle das vendas é seu.",
          },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + idx * 0.1 }}
            className="p-8 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] text-center hover:shadow-2xl transition-all duration-500"
          >
            <div className="flex justify-center mb-6">{item.icon}</div>
            <h3 className="text-xl font-black font-heading text-foreground uppercase mb-4">
              {item.title}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Seção de Chamada para Ação (CTA) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="max-w-3xl mx-auto bg-slate-900 dark:bg-white p-8 md:p-12 rounded-[3rem] text-center shadow-2xl"
      >
        <h2 className="text-3xl font-black font-heading text-white dark:text-slate-900 uppercase tracking-tighter mb-6">
          Pronto para o próximo nível?
        </h2>
        <p className="text-slate-400 dark:text-slate-500 mb-10 font-medium">
          Clique no botão abaixo para iniciar uma conversa com nossa equipe de
          curadoria. Analisaremos seu projeto em até 48 horas.
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-brand-primary hover:bg-brand-primary/90 text-white px-10 py-5 rounded-2xl text-sm font-black uppercase tracking-tighter transition-all active:scale-95 shadow-lg shadow-brand-primary/25"
        >
          Falar com a Curadoria <MessageCircle size={20} />
        </a>

        <div className="mt-8 flex items-center justify-center gap-4 text-[10px] font-black uppercase tracking-widest text-slate-500">
          <span>Análise Técnica</span>
          <div className="w-1 h-1 bg-brand-primary rounded-full"></div>
          <span>Feedback Real</span>
          <div className="w-1 h-1 bg-brand-primary rounded-full"></div>
          <span>Escala de Vendas</span>
        </div>
      </motion.div>
    </div>
  );
}

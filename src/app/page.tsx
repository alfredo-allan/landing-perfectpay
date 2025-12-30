"use client";

import Link from "next/link";
import { ShoppingCart, Star } from "lucide-react";
import { motion } from "framer-motion";
import FAQ from "@/components/sections/FAQ"; // Importando o FAQ que criamos

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* SECTION HERO */}
      <section className="relative py-24 px-4 flex flex-col items-center justify-center text-center max-w-5xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-brand-primary font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs mb-4 italic bg-brand-primary/10 px-4 py-1 rounded-full"
        >
          Marketplace Autorizado PerfectPay
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-7xl font-black leading-tight mb-6 font-heading tracking-tighter uppercase text-slate-950 dark:text-white"
        >
          Encontre os melhores <br />
          <span className="text-brand-primary italic">Produtos e Métodos</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base md:text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl font-medium leading-relaxed"
        >
          Nossa equipe inspeciona e valida ferramentas para escalar sua
          operação. Escolha uma categoria abaixo e comece a analisar agora.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          {/* Botão Principal */}
          <Link
            href="/produtos"
            className="w-full sm:w-auto bg-brand-primary text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-xl shadow-brand-primary/30 active:scale-95"
          >
            <ShoppingCart size={20} />
            Ver Marketplace
          </Link>

          {/* Botão Secundário */}
          <Link
            href="/avaliacoes"
            className="w-full sm:w-auto px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest border-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-900 transition-all active:scale-95"
          >
            Ver Avaliações
          </Link>
        </motion.div>

        {/* Badge de Segurança */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400"
        >
          <div className="flex text-yellow-500 gap-0.5">
            <Star size={12} fill="currentColor" />
            <Star size={12} fill="currentColor" />
            <Star size={12} fill="currentColor" />
            <Star size={12} fill="currentColor" />
            <Star size={12} fill="currentColor" />
          </div>
          <span>Plataforma 100% verificada e segura</span>
        </motion.div>
      </section>

      {/* SEÇÃO DE FAQ (A "BLINDAGEM" DO ADSENSE) */}
      <FAQ />
    </main>
  );
}

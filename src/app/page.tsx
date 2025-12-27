"use client";
import { CtaButton } from "@/components/ui/CtaButton";
import Link from "next/link"; // Importe o Link
import { ShoppingCart } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="relative py-24 px-4 flex flex-col items-center justify-center text-center max-w-5xl mx-auto">
        <span className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-4 italic">
          Marketplace Autorizado PerfectPay
        </span>

        <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 font-heading tracking-tighter uppercase">
          Encontre os melhores <br />
          <span className="text-brand-primary italic">Produtos e Métodos</span>
        </h1>

        <p className="text-lg opacity-70 mb-10 max-w-2xl">
          Nossa equipe inspeciona e valida ferramentas para escalar sua
          operação. Escolha uma categoria abaixo e comece a analisar agora.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          {/* Botão que leva para a página de produtos que programamos */}
          <Link
            href="/produtos"
            className="bg-brand-primary text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest flex items-center gap-3 hover:scale-105 transition-transform shadow-xl shadow-brand-primary/20"
          >
            <ShoppingCart size={20} />
            Ver Marketplace
          </Link>

          {/* Botão de contato ou FAQ opcional */}
          <Link
            href="/avaliacoes"
            className="px-8 py-4 rounded-2xl font-bold border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
          >
            Ver Avaliações
          </Link>
        </div>

        <div className="mt-12 flex items-center gap-2 text-sm opacity-60">
          <span className="flex text-yellow-500 font-bold">★★★★★</span>
          <span>Plataforma 100% verificada e segura</span>
        </div>
      </section>
    </main>
  );
}

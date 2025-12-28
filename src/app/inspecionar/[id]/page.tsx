"use client";

import { useParams, useRouter } from "next/navigation";
import produtosDataRaw from "@/data/produtos.json";
import { Produto } from "@/types/produto";
import {
  ShieldCheck,
  ChevronLeft,
  Star,
  CheckCircle2,
  AlertCircle,
  Zap,
  Lock,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const produtosData = produtosDataRaw as Produto[];

export default function InspecaoPage() {
  const { id } = useParams();
  const router = useRouter();

  // Procura o produto no JSON usando o ID da URL
  const produto = produtosData.find((p) => p.id === id);

  if (!produto) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-black uppercase italic text-foreground">
          Produto não encontrado
        </h1>
        <button
          onClick={() => router.push("/produtos")}
          className="mt-4 text-brand-primary font-bold uppercase text-xs"
        >
          Voltar para Marketplace
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Botão Voltar */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-slate-500 hover:text-brand-primary transition-colors mb-8 group font-bold uppercase text-[10px] tracking-widest"
      >
        <ChevronLeft
          size={16}
          className="group-hover:-translate-x-1 transition-transform"
        />
        Voltar ao Marketplace
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Lado Esquerdo - Visual (Onde a imagem estava "estourada") */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="sticky top-24"
          >
            <div className="aspect-square bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] relative overflow-hidden border border-slate-200 dark:border-slate-800 p-12 mb-8">
              <Image
                src={produto.thumbnail}
                alt={produto.nome}
                fill
                className="object-contain p-8" // Padding interno para a imagem não tocar nas bordas
                priority
              />
            </div>

            {/* Card de Score */}
            <div className="bg-brand-primary text-white p-8 rounded-4xl shadow-xl shadow-brand-primary/20">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                  Relatório de Segurança
                </span>
                <ShieldCheck size={24} />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black font-heading">9.8</span>
                <span className="text-white/60 font-bold uppercase text-xs">
                  / 10 Score
                </span>
              </div>
              <p className="mt-4 text-sm font-medium leading-relaxed opacity-90">
                Produto verificado manualmente. O checkout e a entrega
                automática foram validados com sucesso.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Lado Direito - Conteúdo e Link de Afiliado */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-500 px-3 py-1 rounded-full border border-green-500/20 mb-4">
              <CheckCircle2 size={14} />
              <span className="text-[10px] font-black uppercase tracking-wider text-green-600 dark:text-green-400">
                Inspeção Concluída
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black font-heading uppercase tracking-tighter text-foreground mb-4">
              {produto.nome}
            </h1>

            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center gap-1.5 text-yellow-500">
                <Star size={18} fill="currentColor" />
                <span className="font-black text-lg">{produto.rate}</span>
              </div>
              <div className="h-4 w-px bg-slate-200 dark:bg-slate-800" />
              <span className="text-slate-500 font-black uppercase text-[10px] tracking-widest">
                {produto.categoria}
              </span>
            </div>

            <div className="space-y-8 mb-12">
              <section>
                <h3 className="text-xs font-black uppercase tracking-widest text-brand-primary mb-3">
                  Veredito Técnico
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  {produto.descricao}
                </p>
              </section>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Entrega Imediata",
                  "Conteúdo Atualizado",
                  "Checkout Seguro",
                  "Garantia Vitalícia",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 bg-slate-50 dark:bg-slate-900 p-4 rounded-2xl border border-slate-100 dark:border-slate-800"
                  >
                    <Zap size={16} className="text-brand-primary" />
                    <span className="text-sm font-bold text-foreground">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* BLOCO DE COMPRA FINAL (USANDO O CHECKOUT_URL) */}
            <div className="bg-slate-950 dark:bg-white p-8 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
              <div>
                <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] block mb-1">
                  Valor Promocional
                </span>
                <span className="text-white dark:text-slate-950 text-4xl font-black font-heading tracking-tighter">
                  {produto.valor.includes("R$")
                    ? produto.valor
                    : `R$ ${produto.valor}`}
                </span>
              </div>

              <a
                href={produto.checkout_url} // AQUI ESTÁ O SEU LINK DE AFILIADO DO JSON
                target="_blank" // Abre numa nova aba para não fechar o seu site
                rel="noopener noreferrer" // Segurança para links externos
                className="w-full md:w-auto flex items-center justify-center gap-3 bg-brand-primary hover:bg-brand-primary/90 text-white px-10 py-5 rounded-2xl text-sm font-black uppercase tracking-tighter transition-all active:scale-95 shadow-lg shadow-brand-primary/20"
              >
                Garantir Acesso Agora <Lock size={18} />
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center gap-6 text-slate-400 opacity-60">
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
                <ShieldCheck size={14} /> Compra Protegida
              </div>
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
                <AlertCircle size={14} /> Risco Zero
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

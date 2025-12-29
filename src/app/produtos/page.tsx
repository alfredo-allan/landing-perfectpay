"use client";

import { useState, useMemo, Fragment } from "react";
import produtosDataRaw from "@/data/produtos.json";
import { Produto } from "@/types/produto";
import { Search, Star, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { AdCard } from "@/components/AdCard"; // Importando o componente de anúncio

const produtosData = produtosDataRaw as Produto[];

export default function ProdutosPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todos");

  const categorias = useMemo(() => {
    const cats = produtosData.map((p) => p.categoria);
    return ["Todos", ...Array.from(new Set(cats))];
  }, []);

  const filteredProdutos = useMemo(() => {
    return produtosData.filter((p: Produto) => {
      const matchesSearch =
        p.nome.toLowerCase().includes(search.toLowerCase()) ||
        p.descricao.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        activeCategory === "Todos" || p.categoria === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-black font-heading uppercase tracking-tighter text-foreground transition-colors duration-300">
          Marketplace{" "}
          <span className="text-brand-primary italic">Perfect Check</span>
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mt-2 font-medium">
          Produtos verificados e validados por nossa equipe técnica de inspeção.
        </p>
      </motion.header>

      {/* Barra de Busca e Filtros */}
      <section className="flex flex-col md:flex-row gap-4 mb-12 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={18}
          />
          <input
            type="text"
            placeholder="O que você está procurando?"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-slate-100 dark:bg-slate-900 border-none rounded-2xl outline-none focus:ring-2 focus:ring-brand-primary transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
          />
        </div>

        <div className="md:flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide hidden sm:block">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 whitespace-nowrap ${
                activeCategory === cat
                  ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/25"
                  : "bg-slate-100 dark:bg-slate-900 text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-800 border border-transparent dark:border-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid de Produtos com Injeção de Anúncios */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-100">
        <AnimatePresence mode="popLayout">
          {filteredProdutos.map((produto: Produto, index: number) => (
            <Fragment key={produto.id}>
              {/* Card do Produto */}
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                className="group bg-white dark:bg-slate-950 rounded-4xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col h-full hover:shadow-2xl hover:shadow-brand-primary/10 transition-all duration-500"
              >
                {/* Área da Imagem */}
                <div className="aspect-video bg-slate-50 dark:bg-slate-900 relative overflow-hidden flex items-center justify-center p-2">
                  <span className="absolute top-4 left-4 z-30 bg-brand-primary/90 backdrop-blur-sm text-white text-[9px] font-black uppercase px-2.5 py-1 rounded-lg shadow-sm">
                    {produto.categoria}
                  </span>

                  <div className="relative w-full h-full z-20">
                    <Image
                      src={produto.thumbnail}
                      alt={produto.nome}
                      fill
                      priority
                      className="object-contain group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>

                {/* Conteúdo do Card */}
                <div className="p-7 flex flex-col grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-black font-heading text-slate-900 dark:text-white leading-tight">
                      {produto.nome}
                    </h3>
                    <div className="flex items-center gap-1.5 text-yellow-500 bg-yellow-500/10 px-2 py-1 rounded-full border border-yellow-500/20">
                      <Star size={14} fill="currentColor" />
                      <span className="text-xs font-bold">{produto.rate}</span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mb-6 leading-relaxed font-medium">
                    {produto.descricao}
                  </p>

                  <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-900 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter mb-0.5">
                        Investimento
                      </span>
                      <span className="text-2xl font-black text-brand-primary font-heading tracking-tighter leading-none">
                        {produto.valor.includes("R$")
                          ? produto.valor
                          : `R$ ${produto.valor}`}
                      </span>
                    </div>
                    <Link
                      href={`/inspecionar/${produto.id}`}
                      className="flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-tighter hover:bg-brand-primary dark:hover:bg-brand-primary hover:text-white transition-all duration-300 shadow-md active:scale-95"
                    >
                      Analisar <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Injeção de Anúncio a cada 3 produtos */}
              {(index + 1) % 3 === 0 && (
                <motion.div
                  key={`ad-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <AdCard />
                </motion.div>
              )}
            </Fragment>
          ))}
        </AnimatePresence>
      </div>

      {/* Empty State */}
      {filteredProdutos.length === 0 && (
        <div className="text-center py-32 opacity-30">
          <p className="font-bold uppercase tracking-widest text-sm">
            Nenhum resultado encontrado
          </p>
        </div>
      )}
    </div>
  );
}

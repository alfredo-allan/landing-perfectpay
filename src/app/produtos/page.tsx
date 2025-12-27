"use client";

import { useState, useMemo } from "react";
import produtosDataRaw from "@/data/produtos.json";
import { Produto } from "@/types/produto";
import { Search, Star, ArrowRight } from "lucide-react"; // Corrigido o erro de vírgula aqui
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

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
        <h1 className="text-4xl md:text-5xl font-black font-heading uppercase tracking-tighter text-slate-900 dark:text-white">
          Marketplace{" "}
          <span className="text-brand-primary italic">Perfect Check</span>
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mt-2 font-medium">
          Produtos verificados e validados por nossa equipe técnica.
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
            className="w-full pl-12 pr-4 py-4 bg-slate-100 dark:bg-slate-900 border-none rounded-2xl outline-none focus:ring-2 focus:ring-brand-primary transition-all text-slate-900 dark:text-white placeholder:text-slate-500"
          />
        </div>
        <div className="flex items-center gap-2 overflow-x-auto w-full hidden md:flex md:w-auto pb-2 md:pb-0 scrollbar-hide">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`
        w-37.5 h-10 mr-2.5
        flex items-center justify-center
        rounded-xl text-xs font-black uppercase tracking-widest
        transition-all duration-300
        ${
          activeCategory === cat
            ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/25"
            : "bg-slate-100 dark:bg-slate-900 text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-800"
        }
      `}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid de Produtos - Ajustado para min-h-100 (Tailwind v4) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-100">
        <AnimatePresence mode="popLayout">
          {filteredProdutos.map((produto: Produto) => (
            <motion.div
              key={produto.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              className="group bg-white dark:bg-slate-950 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col h-full hover:shadow-2xl hover:shadow-brand-primary/10 transition-shadow duration-500"
            >
              <div className="aspect-video bg-linear-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 relative flex items-center justify-center overflow-hidden">
                <span className="absolute top-4 left-4 z-10 bg-brand-primary text-white text-[10px] font-black uppercase px-3 py-1 rounded-lg">
                  {produto.categoria}
                </span>
                <span className="text-slate-400 dark:text-slate-600 font-bold italic text-sm uppercase group-hover:scale-110 transition-transform duration-700">
                  {produto.nome}
                </span>
              </div>

              <div className="p-6 flex flex-col grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white leading-tight">
                    {produto.nome}
                  </h3>
                  <div className="flex items-center gap-1 text-yellow-500 font-bold bg-yellow-500/10 px-2 py-1 rounded-lg">
                    <Star size={14} fill="currentColor" />
                    <span className="text-xs">{produto.rate}</span>
                  </div>
                </div>

                <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 mb-6 leading-relaxed">
                  {produto.descricao}
                </p>

                <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-900 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                      Investimento
                    </span>
                    <span className="text-xl font-black text-brand-primary font-heading tracking-tighter">
                      R$ {produto.valor}
                    </span>
                  </div>
                  <Link
                    href={`/inspecionar/${produto.id}`}
                    className="flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-5 py-3 rounded-xl text-xs font-black uppercase tracking-tighter hover:bg-brand-primary dark:hover:bg-brand-primary hover:text-white transition-all duration-300"
                  >
                    Analisar <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

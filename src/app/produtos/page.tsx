"use client";

import { useState, useMemo, Fragment } from "react";
import React from "react";
import produtosDataRaw from "@/data/produtos.json";
import { Produto } from "@/types/produto";
import {
  Search,
  Star,
  ArrowRight,
  LayoutGrid,
  Target,
  Cpu,
  Database,
  Briefcase,
  TrendingUp,
  Sparkles,
  ShieldAlert,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { AdCard } from "@/components/AdCard";

const produtosData = produtosDataRaw as Produto[];

// Mapeamento de Ícones por Categoria
const categoriaConfigs: Record<
  string,
  { icon: React.ComponentType<{ size: number }>; color: string }
> = {
  Todos: { icon: LayoutGrid, color: "bg-blue-500" },
  "Marketing Digital": { icon: Target, color: "bg-orange-500" },
  "Tráfego Pago": { icon: TrendingUp, color: "bg-green-500" },
  Tecnologia: { icon: Cpu, color: "bg-purple-500" },
  Produtividade: { icon: Briefcase, color: "bg-blue-400" },
  "Engenharia de Dados": { icon: Database, color: "bg-cyan-500" },
  Programação: { icon: Cpu, color: "bg-indigo-500" },
  Espiritualidade: { icon: Sparkles, color: "bg-yellow-500" },
  "Bem-estar Íntimo": { icon: ShieldAlert, color: "bg-red-500" },
};

export default function ProdutosPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categoriasUnicas = useMemo(() => {
    const cats = produtosData.map((p) => p.categoria);
    return Array.from(new Set(cats));
  }, []);

  const filteredProdutos = useMemo(() => {
    return produtosData.filter((p: Produto) => {
      const matchesSearch =
        p.nome.toLowerCase().includes(search.toLowerCase()) ||
        p.descricao.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = !activeCategory || p.categoria === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen">
      {/* HEADER DINÂMICO */}
      <motion.header layout className="mb-12">
        <h1 className="text-4xl md:text-6xl font-black font-heading uppercase tracking-tighter text-foreground transition-all">
          {activeCategory ? activeCategory : "Explorar"}{" "}
          <span className="text-brand-primary italic">Trilhas</span>
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mt-2 font-medium max-w-xl">
          {activeCategory
            ? `Mostrando os melhores produtos verificados em ${activeCategory}.`
            : "Escolha uma trilha de conhecimento abaixo para visualizar os produtos inspecionados."}
        </p>
      </motion.header>

      {/* SEARCH BAR */}
      <section className="mb-12">
        <div className="relative w-full max-w-2xl">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Buscar por nome, tecnologia ou nicho..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-5 bg-slate-100 dark:bg-slate-900 border-none rounded-3xl outline-none focus:ring-2 focus:ring-brand-primary transition-all text-lg font-medium"
          />
        </div>
      </section>

      {/* PÁTIO DE CATEGORIAS (Apenas visível se nenhuma categoria estiver ativa ou se estiver buscando) */}
      <AnimatePresence mode="wait">
        {!activeCategory && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {categoriasUnicas.map((cat) => {
              const Config = categoriaConfigs[cat] || categoriaConfigs["Todos"];
              const Icon = Config.icon;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="group relative h-48 rounded-4xl bg-slate-100 dark:bg-slate-900 overflow-hidden hover:shadow-2xl hover:shadow-brand-primary/20 transition-all border border-transparent hover:border-brand-primary"
                >
                  <div
                    className={`absolute top-6 left-6 p-3 rounded-2xl ${Config.color} text-white shadow-lg`}
                  >
                    <Icon size={24} />
                  </div>
                  <div className="absolute bottom-6 left-6 text-left">
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">
                      Trilha
                    </p>
                    <h3 className="text-[initial]font-black uppercase font-heading leading-tight">
                      {cat}
                    </h3>
                  </div>
                  <ArrowRight
                    className="absolute bottom-6 right-6 text-slate-300 group-hover:text-brand-primary group-hover:translate-x-2 transition-all"
                    size={20}
                  />
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* GRID DE PRODUTOS FILTRADOS */}
      {activeCategory && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <button
            onClick={() => setActiveCategory(null)}
            className="mb-8 flex items-center gap-2 text-slate-500 hover:text-brand-primary font-bold uppercase text-xs tracking-widest transition-colors"
          >
            <X size={16} /> Voltar para Categorias
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProdutos.map((produto: Produto, index: number) => (
                <Fragment key={produto.id}>
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="group bg-white dark:bg-slate-950 rounded-4xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col h-full hover:shadow-2xl transition-all duration-500"
                  >
                    {/* Área da Imagem */}
                    <div className="aspect-video bg-slate-50 dark:bg-slate-900 relative overflow-hidden flex items-center justify-center p-2">
                      <Image
                        src={produto.thumbnail}
                        alt={produto.nome}
                        fill
                        priority={index < 3}
                        className="object-contain group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        quality={75}
                      />
                    </div>

                    {/* Conteúdo */}
                    <div className="p-7 flex flex-col grow">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-black font-heading text-slate-900 dark:text-white leading-tight">
                          {produto.nome}
                        </h3>
                        <div className="flex items-center gap-1.5 text-yellow-500 bg-yellow-500/10 px-2 py-1 rounded-full border border-yellow-500/20">
                          <Star size={14} fill="currentColor" />
                          <span className="text-xs font-bold">
                            {produto.rate}
                          </span>
                        </div>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mb-6 font-medium leading-relaxed">
                        {produto.descricao}
                      </p>
                      <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-900 flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter mb-0.5">
                            Investimento
                          </span>
                          <span className="text-2xl font-black text-brand-primary font-heading tracking-tighter leading-none">
                            {produto.valor}
                          </span>
                        </div>
                        <Link
                          href={`/inspecionar/${produto.id}`}
                          className="flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-tighter hover:bg-brand-primary dark:hover:bg-brand-primary hover:text-white transition-all shadow-md"
                        >
                          Analisar <ArrowRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </motion.div>

                  {(index + 1) % 3 === 0 && (
                    <div className="col-span-full lg:col-span-1">
                      <AdCard />
                    </div>
                  )}
                </Fragment>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      )}

      {/* EMPTY STATE */}
      {filteredProdutos.length === 0 && (
        <div className="text-center py-32 opacity-30">
          <p className="font-bold uppercase tracking-widest text-sm text-foreground">
            Nenhum resultado encontrado
          </p>
        </div>
      )}
    </div>
  );
}

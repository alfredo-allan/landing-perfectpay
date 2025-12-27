"use client";
import { useParams } from "next/navigation";
import { Star, ShieldCheck, CheckCircle2 } from "lucide-react";
import { CtaButton } from "@/components/ui/CtaButton";

export default function InspecionarProduto() {
  const { id } = useParams();

  // Simulação de dados que virão da PerfectPay pelo ID
  const produto = {
    nome: "Sistema de Vendas Automáticas",
    preco: "R$ 147,90",
    id_perfectpay: id,
  };

  return (
    <div className="min-h-screen pt-10 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 text-brand-primary mb-6 justify-center">
          <ShieldCheck size={20} />
          <span className="font-bold uppercase tracking-widest text-sm">
            Análise Técnica Autorizada
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-black text-center mb-10 font-heading">
          Inspecionando:{" "}
          <span className="text-brand-primary uppercase italic">
            {produto.nome}
          </span>
        </h1>

        <div className="grid md:grid-cols-2 gap-10 bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-800">
          <div className="aspect-video bg-slate-200 dark:bg-slate-800 rounded-2xl flex items-center justify-center">
            {/* Aqui viria a imagem do produto ou VSL */}
            <span className="text-slate-500 italic">Preview do Produto</span>
          </div>

          <div className="flex flex-col justify-center">
            <div className="flex text-yellow-500 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="currentColor" />
              ))}
            </div>
            <h3 className="text-2xl font-bold mb-4 italic">
              Veredito: Aprovado
            </h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-green-500" /> Checkout
                Seguro
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-green-500" /> Entrega
                Imediata
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-green-500" /> Garantia
                PerfectPay
              </li>
            </ul>
            <CtaButton
              text={`Acessar Produto: ${produto.preco}`}
              url={`https://pay.perfectpay.com.br/${id}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

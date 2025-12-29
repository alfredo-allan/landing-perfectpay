"use client";

import { motion } from "framer-motion";
import { Info, CheckCircle2, AlertTriangle, Scale } from "lucide-react";

export default function TermosPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-full mb-6">
          <Scale size={16} />
          <span className="text-[10px] font-black uppercase tracking-widest">
            Acordo de Utilização
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black font-heading uppercase tracking-tighter text-foreground">
          Termos de <span className="text-brand-primary italic">Uso</span>
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="p-8 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-[2.5rem]">
          <CheckCircle2 className="text-brand-primary mb-4" size={24} />
          <h3 className="text-lg font-black font-heading text-foreground uppercase mb-2">
            Uso Permitido
          </h3>
          <p className="text-sm text-slate-500">
            O site deve ser utilizado apenas para consulta de produtos e acesso
            a links de checkout oficiais.
          </p>
        </div>
        <div className="p-8 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-[2.5rem]">
          <AlertTriangle className="text-brand-primary mb-4" size={24} />
          <h3 className="text-lg font-black font-heading text-foreground uppercase mb-2">
            Isenção de Responsabilidade
          </h3>
          <p className="text-sm text-slate-500">
            O Perfect Check é um intermediário de divulgação. A garantia e
            entrega do produto são de responsabilidade do produtor.
          </p>
        </div>
      </div>

      <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 font-medium">
        <h2 className="text-foreground uppercase font-black font-heading">
          Condições Gerais
        </h2>
        <p>
          Ao aceder ao Perfect Check, concorda em cumprir estes termos de
          serviço, todas as leis e regulamentos aplicáveis. Se não concordar com
          algum destes termos, está proibido de usar ou aceder a este site.
        </p>
        <p>
          Reservamo-nos o direito de modificar estes termos a qualquer momento,
          sem aviso prévio. Recomendamos a revisão periódica desta página.
        </p>
      </div>
    </div>
  );
}

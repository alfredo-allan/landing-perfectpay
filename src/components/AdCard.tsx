"use client";

import { Megaphone, ExternalLink } from "lucide-react";

export function AdCard() {
  return (
    <div className="group bg-slate-100/50 dark:bg-slate-900/50 rounded-4xl border-2 border-dashed border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col h-full min-h-112.5 transition-all duration-500 hover:border-brand-primary/50">
      {/* Header do Anúncio */}
      <div className="p-6 flex items-center justify-between border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-brand-primary/10 rounded-lg text-brand-primary">
            <Megaphone size={16} />
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">
            Patrocinado
          </span>
        </div>
        <ExternalLink size={14} className="text-slate-400" />
      </div>

      {/* Espaço para o Google AdSense */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
        <div className="w-full h-full min-h-62.5 flex flex-col items-center justify-center">
          {/* O código do Google AdSense (ins) entra aqui */}
          <div className="text-slate-400 dark:text-slate-600">
            <span className="text-xs font-bold uppercase italic block mb-2">
              Publicidade Google
            </span>
            <p className="text-[10px] leading-relaxed max-w-45 mx-auto opacity-50">
              Este anúncio ajuda a manter nossas ferramentas gratuitas e
              verificadas.
            </p>
          </div>

          {/* Exemplo de onde o script entraria:
          <ins className="adsbygoogle"
               style={{ display: 'block' }}
               data-ad-format="fluid"
               data-ad-layout-key="-fb+5w+4e-db+86"
               data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
               data-ad-slot="XXXXXXXXXX"></ins>
          */}
        </div>
      </div>

      {/* Footer do Card de Anúncio */}
      <div className="p-6 bg-slate-200/30 dark:bg-slate-900/80 mt-auto">
        <div className="w-full py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-center text-[10px] font-black uppercase tracking-widest text-slate-400">
          Anúncio Sugerido
        </div>
      </div>
    </div>
  );
}

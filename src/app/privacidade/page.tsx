"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText } from "lucide-react";

export default function PrivacidadePage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-full mb-6">
          <Shield size={16} />
          <span className="text-[10px] font-black uppercase tracking-widest">
            Segurança de Dados
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black font-heading uppercase tracking-tighter text-foreground">
          Política de{" "}
          <span className="text-brand-primary italic">Privacidade</span>
        </h1>
      </motion.div>

      <div className="space-y-12 text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
        <section>
          <h2 className="text-xl font-black font-heading text-foreground uppercase mb-4 flex items-center gap-2">
            <Eye className="text-brand-primary" size={20} /> 1. Coleta de
            Informações
          </h2>
          <p>
            O <strong>Perfect Check</strong> coleta informações básicas de
            navegação para melhorar a sua experiência. Como um marketplace de
            afiliados, não processamos pagamentos diretamente; todos os dados
            financeiros são geridos pelas plataformas Hotmart e PerfectPay.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-black font-heading text-foreground uppercase mb-4 flex items-center gap-2">
            <Lock className="text-brand-primary" size={20} /> 2. Cookies e
            Google AdSense
          </h2>
          <p>
            Utilizamos cookies para personalizar anúncios e analisar o nosso
            tráfego. O Google, como fornecedor terceiro, utiliza cookies para
            exibir anúncios no nosso site. Os utilizadores podem desativar o
            cookie DART visitando a política de privacidade da rede de conteúdo
            e anúncios do Google.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-black font-heading text-foreground uppercase mb-4 flex items-center gap-2">
            <FileText className="text-brand-primary" size={20} /> 3. Links de
            Terceiros
          </h2>
          <p>
            O nosso site contém links para sites externos (checkouts de
            pagamento). Não temos controlo sobre o conteúdo ou práticas de
            privacidade desses sites e não podemos aceitar responsabilidade
            pelas suas respetivas políticas.
          </p>
        </section>

        <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800">
          <p className="text-sm italic">
            Última atualização: Dezembro de 2024. Ao continuar a navegar no
            Perfect Check, você concorda com os termos aqui descritos.
          </p>
        </div>
      </div>
    </div>
  );
}

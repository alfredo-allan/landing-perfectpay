"use client";

import Link from "next/link";
import {
  Phone,
  ArrowUpRight,
  Shield,
  Handshake,
  Info,
  Mail,
} from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  // Link para falar com você (Desenvolvedor)
  const DEV_WHATSAPP = "5511994102660"; // COLOQUE SEU NÚMERO AQUI
  const devMessage =
    "Olá! Gostaria de falar sobre o desenvolvimento do Perfect Check.";
  const devUrl = `https://wa.me/${DEV_WHATSAPP}?text=${encodeURIComponent(
    devMessage
  )}`;

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 pt-16 pb-8 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Coluna 1: Branding */}
          <div className="col-span-1 md:col-span-1">
            <Link
              href="/"
              className="text-2xl font-black font-heading uppercase tracking-tighter transition-colors"
            >
              {/* Usamos !text-foreground para respeitar seu globals.css e o ThemeProvider */}
              <span className="!text-foreground">Perfect</span>{" "}
              <span className="text-brand-primary italic">Check</span>
            </Link>
            <p className="mt-4 text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
              A maior curadoria de produtos digitais verificados. Qualidade,
              segurança e transparência em cada inspeção.
            </p>
          </div>

          {/* Coluna 2: Navegação */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary mb-6">
              Plataforma
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/produtos"
                  className="text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-brand-primary transition-colors flex items-center gap-2"
                >
                  Marketplace <ArrowUpRight size={14} />
                </Link>
              </li>
              <li>
                <Link
                  href="/avaliacoes"
                  className="text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-brand-primary transition-colors flex items-center gap-2"
                >
                  Avaliações <ArrowUpRight size={14} />
                </Link>
              </li>
              <li>
                <Link
                  href="/venda-conosco"
                  className="text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-brand-primary transition-colors flex items-center gap-2"
                >
                  Venda Conosco <Handshake size={14} />
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre"
                  className="text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-brand-primary transition-colors flex items-center gap-2"
                >
                  Sobre <Info size={14} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Legal */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary mb-6">
              Legal
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/privacidade"
                  className="text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-brand-primary transition-colors flex items-center gap-2"
                >
                  Privacidade <Shield size={14} />
                </Link>
              </li>
              <li>
                <Link
                  href="/termos"
                  className="text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-brand-primary transition-colors flex items-center gap-2"
                >
                  Termos de Uso <Info size={14} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Suporte/Dev */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-primary mb-6">
              Suporte Especializado
            </h4>

            <a
              href={devUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-2xl hover:border-brand-primary transition-all group"
            >
              <div className="bg-brand-primary/10 p-2 rounded-lg text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                <Phone size={18} />
              </div>
              <div className="text-left">
                <span className="block text-[10px] font-black uppercase text-slate-400">
                  Falar com o
                </span>
                <span className="text-sm font-black text-slate-800 dark:text-slate-200 uppercase tracking-tight">
                  Desenvolvedor
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
            © {currentYear} Perfect Check. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              Desenvolvido por
            </span>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-800 dark:text-slate-200 hover:text-brand-primary transition-colors cursor-pointer">
              Leap In Technology
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

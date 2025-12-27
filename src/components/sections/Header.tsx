"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { useAuth } from "@/contexts/AuthContext";
import {
  Sun,
  Moon,
  Menu,
  X,
  ShieldCheck,
  ShoppingBag,
  LogOut,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// Helper para detectar montagem no cliente sem disparar erro de renderização
const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { isAuthenticated, user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Detecta se está no navegador de forma compatível com o React 19/Linter
  const isMounted = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Produtos", href: "/produtos" },
    { name: "Avaliações", href: "/avaliacoes" },
  ];

  return (
    <header className="sticky top-0 z-100 w-full border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors duration-300 shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <div className="bg-brand-primary p-2 rounded-lg text-white shadow-lg shadow-brand-primary/20">
            <ShieldCheck size={24} />
          </div>
          <span className="text-xl font-black font-heading tracking-tighter uppercase text-slate-800 dark:text-slate-100 transition-colors duration-300">
            Perfect<span className="text-brand-primary">Check</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-semibold text-xs uppercase tracking-[0.1em]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-slate-600 dark:text-slate-400 hover:text-brand-primary dark:hover:text-brand-primary transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all border border-transparent dark:border-slate-700"
          >
            <div className="w-5 h-5 flex items-center justify-center">
              {isMounted ? (
                theme === "light" ? (
                  <Moon size={20} className="text-slate-700" />
                ) : (
                  <Sun size={20} className="text-yellow-400" />
                )
              ) : (
                <div className="w-5 h-5" />
              )}
            </div>
          </button>

          <div className="hidden md:flex items-center gap-3 ml-2 border-l border-slate-200 dark:border-slate-800 pl-4">
            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                <div className="flex flex-col items-end text-right">
                  <span className="text-[10px] font-bold opacity-50 uppercase leading-none text-slate-500">
                    Membro
                  </span>
                  <span className="text-sm font-bold text-brand-primary leading-tight">
                    {user?.name.split(" ")[0]}
                  </span>
                </div>
                <button
                  onClick={logout}
                  className="p-2 text-slate-400 hover:text-red-500 transition-colors"
                >
                  <LogOut size={18} />
                </button>
              </div>
            ) : (
              <button className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest">
                Login
              </button>
            )}
          </div>

          <button
            className="md:hidden p-2.5 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-600 dark:text-slate-300"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-110 md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="fixed top-0 right-0 h-full w-[75%] bg-white dark:bg-slate-950 z-120 p-8 flex flex-col md:hidden shadow-2xl"
            >
              <div className="flex justify-between items-center mb-10 text-brand-primary">
                <span className="font-black uppercase italic tracking-tighter">
                  Menu
                </span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500"
                >
                  <X size={24} />
                </button>
              </div>
              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between text-xl font-bold border-b border-slate-100 dark:border-slate-900 pb-4 text-slate-800 dark:text-slate-100"
                  >
                    {link.name}
                    <ChevronRight size={20} className="text-brand-primary" />
                  </Link>
                ))}
              </nav>
              <div className="mt-auto">
                <button className="w-full bg-brand-primary text-white py-5 rounded-2xl font-black text-sm uppercase flex items-center justify-center gap-3 shadow-lg shadow-brand-primary/20">
                  <ShoppingBag size={20} /> Começar Agora
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

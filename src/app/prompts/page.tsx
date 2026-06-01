"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Check, Copy, Search, Sparkles, X } from "lucide-react";
import { prompts } from "@/lib/prompts";

const categories = ["Todos", "MVP", "Landing", "Copy", "IA", "Automação", "Vendas", "Oferta"];

export default function PromptsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Todos");
  const [selectedPrompt, setSelectedPrompt] = useState<any>(null);
  const [copied, setCopied] = useState(false);

  const filteredPrompts = useMemo(() => {
    return prompts.filter((item) => {
      const matchesCategory = category === "Todos" || item.category === category;
      const matchesQuery = `${item.title} ${item.category} ${item.level} ${item.prompt}`.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  async function copyPrompt(text: string) {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  }

  return (
    <main className="min-h-screen bg-[#060914] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,rgba(124,58,237,.35),transparent_30%),radial-gradient(circle_at_85%_15%,rgba(217,70,239,.22),transparent_30%),linear-gradient(180deg,#060914,#090d1d)]" />

      <section className="mx-auto max-w-7xl px-6 py-10">
        <Link href="/dashboard" className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-violet-200"><ArrowLeft size={16} />Voltar para dashboard</Link>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] shadow-2xl">
          <div className="bg-gradient-to-br from-violet-700 via-purple-950 to-[#0b1020] p-8 md:p-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-black text-violet-100"><Sparkles size={16} />BIBLIOTECA PREMIUM</div>
            <h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-6xl">Biblioteca de Prompts</h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-violet-100">Prompts prontos para acelerar criação de produtos, landing pages, ofertas, MVPs e automações com IA.</p>
          </div>

          <div className="grid gap-4 border-b border-white/10 p-6 md:grid-cols-[1fr_260px]">
            <div className="flex h-14 items-center gap-3 rounded-2xl border border-white/10 bg-[#0b1020] px-4">
              <Search size={18} className="text-slate-400" />
              <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar prompt..." className="w-full bg-transparent outline-none" />
            </div>

            <select value={category} onChange={(e) => setCategory(e.target.value)} className="h-14 rounded-2xl border border-white/10 bg-[#0b1020] px-4 font-bold outline-none">
              {categories.map((item) => <option key={item}>{item}</option>)}
            </select>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredPrompts.map((item) => (
            <div key={item.id} className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-xl transition hover:-translate-y-1 hover:border-violet-300/40">
              <div className="mb-4 flex items-start justify-between gap-3">
                <div>
                  <div className="mb-3 flex flex-wrap gap-2">
                    <span className="rounded-full bg-violet-500/20 px-3 py-1 text-xs font-black text-violet-200">{item.category}</span>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-black text-slate-300">{item.level}</span>
                  </div>
                  <h3 className="text-xl font-black">{item.title}</h3>
                </div>
              </div>

              <p className="line-clamp-4 min-h-[96px] text-sm leading-6 text-slate-300">{item.prompt}</p>

              <div className="mt-5 flex gap-3">
                <button onClick={() => setSelectedPrompt(item)} className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 font-black">Ver prompt</button>
                <button onClick={() => copyPrompt(item.prompt)} className="rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-4 py-3 font-black"><Copy size={18} /></button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedPrompt && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-6 backdrop-blur">
          <div className="max-h-[90vh] w-full max-w-3xl overflow-auto rounded-[2rem] border border-white/10 bg-[#111827] p-6 shadow-2xl">
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <p className="mb-2 text-sm font-black text-violet-300">{selectedPrompt.category} • {selectedPrompt.level}</p>
                <h2 className="text-3xl font-black">{selectedPrompt.title}</h2>
              </div>
              <button onClick={() => setSelectedPrompt(null)} className="grid h-10 w-10 place-items-center rounded-xl bg-white/10"><X size={18} /></button>
            </div>

            <pre className="whitespace-pre-wrap rounded-2xl border border-white/10 bg-black/30 p-5 text-sm leading-7 text-slate-200">{selectedPrompt.prompt}</pre>

            <button onClick={() => copyPrompt(selectedPrompt.prompt)} className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-5 py-4 font-black">
              {copied ? <Check size={18} /> : <Copy size={18} />}
              {copied ? "Prompt copiado" : "Copiar prompt"}
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

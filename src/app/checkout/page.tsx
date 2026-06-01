"use client";

import Link from "next/link";
import { ArrowLeft, CheckCircle, CreditCard, Lock, Rocket, ShieldCheck, Sparkles, Trophy, Zap } from "lucide-react";

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-[#060914] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,rgba(124,58,237,.35),transparent_30%),radial-gradient(circle_at_85%_15%,rgba(217,70,239,.22),transparent_30%),linear-gradient(180deg,#060914,#090d1d)]" />

      <section className="mx-auto max-w-6xl px-6 py-10">
        <Link href="/dashboard" className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-violet-200"><ArrowLeft size={16} />Voltar para dashboard</Link>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] shadow-2xl">
            <div className="bg-gradient-to-br from-violet-700 via-purple-950 to-[#0b1020] p-8 md:p-10">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-black text-violet-100"><Sparkles size={16} />OFERTA ESPECIAL</div>
              <h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-6xl">Fábrica de Produtos IA</h1>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-violet-100">Acesse a plataforma completa para transformar ideias em produtos digitais, páginas, ofertas, automações e negócios com IA.</p>
            </div>

            <div className="p-6 md:p-8">
              <h2 className="mb-5 text-2xl font-black">O que você recebe</h2>

              <div className="grid gap-4 md:grid-cols-2">
                {[
                  "7 módulos estratégicos",
                  "Biblioteca premium de prompts",
                  "Checklists práticos",
                  "Templates de criação",
                  "Acesso vitalício",
                  "Atualizações futuras",
                  "Método passo a passo",
                  "Área de membros própria"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/5 p-4">
                    <CheckCircle className="shrink-0 text-emerald-400" size={20} />
                    <span className="font-bold text-slate-200">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-5">
                  <ShieldCheck className="mb-3 text-violet-300" size={26} />
                  <h3 className="font-black">Compra segura</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">Ambiente preparado para integração com checkout seguro.</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-5">
                  <Zap className="mb-3 text-violet-300" size={26} />
                  <h3 className="font-black">Acesso imediato</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">Após a compra, o aluno acessa a plataforma.</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-5">
                  <Trophy className="mb-3 text-violet-300" size={26} />
                  <h3 className="font-black">Garantia</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">Garantia incondicional de 7 dias.</p>
                </div>
              </div>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl lg:sticky lg:top-8 lg:h-fit">
            <div className="rounded-[1.5rem] bg-gradient-to-br from-violet-600 to-fuchsia-500 p-6">
              <div className="mb-4 inline-flex rounded-full bg-yellow-300 px-4 py-2 text-xs font-black text-slate-950">OFERTA DE LANÇAMENTO</div>
              <p className="text-sm font-bold text-violet-100">Acesso vitalício</p>
              <div className="mt-2 flex items-end gap-2">
                <span className="text-5xl font-black">R$ 47</span>
                <span className="mb-2 text-violet-100">pagamento único</span>
              </div>
              <p className="mt-3 text-sm text-violet-100 line-through">De R$ 197</p>
            </div>

            <div className="mt-6 space-y-3">
              {[
                "Acesso completo à plataforma",
                "Biblioteca de prompts premium",
                "Módulos e aulas práticas",
                "Atualizações futuras",
                "Garantia de 7 dias"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle className="text-emerald-400" size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Link href="/sucesso">
              <button className="mt-6 flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 font-black shadow-[0_0_40px_rgba(217,70,239,.25)]">
                <CreditCard size={20} />
                Comprar agora
              </button>
            </Link>

            <div className="mt-5 flex items-center justify-center gap-2 text-sm text-slate-400">
              <Lock size={16} />
              Pagamento seguro • Acesso imediato
            </div>

            <div className="mt-6 rounded-2xl border border-violet-500/20 bg-violet-500/10 p-5">
              <div className="mb-2 flex items-center gap-2 font-black text-violet-200">
                <Rocket size={18} />
                Próximo passo
              </div>
              <p className="text-sm leading-6 text-slate-300">Depois vamos conectar este botão ao checkout real: Kiwify, Hotmart, Kirvano, Stripe ou Mercado Pago.</p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

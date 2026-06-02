"use client";

import Link from "next/link";
import { ArrowLeft, BookOpen, CheckCircle, Gift, Rocket, Sparkles, Trophy, Zap } from "lucide-react";

export default function SucessoPage() {
  return (
    <main className="min-h-screen bg-[#060914] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,rgba(124,58,237,.35),transparent_30%),radial-gradient(circle_at_85%_15%,rgba(217,70,239,.22),transparent_30%),linear-gradient(180deg,#060914,#090d1d)]" />

      <section className="mx-auto max-w-5xl px-6 py-10">
        <Link href="/checkout" className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-violet-200"><ArrowLeft size={16} />Voltar para checkout</Link>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] shadow-2xl">
          <div className="bg-gradient-to-br from-violet-700 via-purple-950 to-[#0b1020] p-8 text-center md:p-12">
            <div className="mx-auto mb-6 grid h-24 w-24 place-items-center rounded-[2rem] bg-white/10 shadow-[0_0_50px_rgba(168,85,247,.45)]">
              <Trophy size={46} />
            </div>

            <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-black text-violet-100"><Sparkles size={16} />COMPRA CONCLUÍDA</div>

            <h1 className="mx-auto max-w-3xl text-4xl font-black tracking-tight md:text-6xl">Bem-vindo à Fábrica de Produtos IA</h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-violet-100">
              Seu acesso foi liberado com sucesso. Agora você pode entrar na plataforma e começar sua jornada.
            </p>

            <Link href="/dashboard">
              <button className="mt-8 rounded-2xl bg-white px-7 py-4 font-black text-[#090d1d] transition hover:bg-violet-100">
                Entrar na plataforma
              </button>
            </Link>
          </div>

          <div className="grid gap-4 p-6 md:grid-cols-4">
            <div className="rounded-2xl bg-white/5 p-5">
              <BookOpen className="mb-3 text-violet-300" size={26} />
              <h3 className="font-black">Módulos</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">Acesse a jornada completa de criação.</p>
            </div>

            <div className="rounded-2xl bg-white/5 p-5">
              <Zap className="mb-3 text-violet-300" size={26} />
              <h3 className="font-black">Prompts</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">Use comandos prontos para acelerar.</p>
            </div>

            <div className="rounded-2xl bg-white/5 p-5">
              <Gift className="mb-3 text-violet-300" size={26} />
              <h3 className="font-black">Bônus</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">Receba materiais extras e atualizações.</p>
            </div>

            <div className="rounded-2xl bg-white/5 p-5">
              <CheckCircle className="mb-3 text-violet-300" size={26} />
              <h3 className="font-black">Acesso vitalício</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">Entre quando quiser e avance no seu ritmo.</p>
            </div>
          </div>

          <div className="border-t border-white/10 p-6">
            <div className="rounded-3xl border border-violet-500/20 bg-violet-500/10 p-6">
              <div className="mb-2 flex items-center gap-2 font-black text-violet-200">
                <Rocket size={18} />
                Próximo passo
              </div>
              <p className="leading-7 text-slate-300">
                Comece pelo Módulo 1 para encontrar sua oportunidade vencedora. Depois avance para o Módulo 2 e transforme essa oportunidade em produto.
              </p>

              <Link href="/modulo/1">
                <button className="mt-5 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-5 py-4 font-black">
                  Começar Módulo 1
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

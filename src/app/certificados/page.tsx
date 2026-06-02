"use client";

import Link from "next/link";
import { ArrowLeft, Award, CheckCircle, Lock, Medal, Sparkles, Trophy } from "lucide-react";

const certificates = [
  {
    title: "Módulo 1 — Da Ideia à Oportunidade",
    status: "Disponível",
    progress: 100,
    icon: "🏆",
    description: "Concedido ao concluir a etapa de validação e escolha da oportunidade vencedora.",
  },
  {
    title: "Módulo 2 — Criação do Produto",
    status: "Em andamento",
    progress: 25,
    icon: "📦",
    description: "Desbloqueado ao estruturar produto, módulos, entregáveis e oferta.",
  },
  {
    title: "Certificado Master",
    status: "Bloqueado",
    progress: 0,
    icon: "🎓",
    description: "Concedido ao concluir toda a jornada da Fábrica de Produtos IA.",
  },
];

export default function CertificadosPage() {
  return (
    <main className="min-h-screen bg-[#060914] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,rgba(124,58,237,.35),transparent_30%),radial-gradient(circle_at_85%_15%,rgba(217,70,239,.22),transparent_30%),linear-gradient(180deg,#060914,#090d1d)]" />

      <section className="mx-auto max-w-6xl px-6 py-10">
        <Link href="/dashboard" className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-violet-200"><ArrowLeft size={16} />Voltar para dashboard</Link>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] shadow-2xl">
          <div className="bg-gradient-to-br from-violet-700 via-purple-950 to-[#0b1020] p-8 text-center md:p-12">
            <div className="mx-auto mb-6 grid h-24 w-24 place-items-center rounded-[2rem] bg-white/10 shadow-[0_0_50px_rgba(168,85,247,.45)]">
              <Award size={46} />
            </div>

            <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-black text-violet-100"><Sparkles size={16} />CERTIFICADOS</div>

            <h1 className="mx-auto max-w-3xl text-4xl font-black tracking-tight md:text-6xl">Suas conquistas</h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-violet-100">
              Complete módulos, avance na jornada e desbloqueie certificados dentro da Fábrica de Produtos IA.
            </p>
          </div>

          <div className="grid gap-4 border-b border-white/10 p-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white/5 p-5">
              <Trophy className="mb-3 text-violet-300" size={26} />
              <h3 className="font-black">1 certificado</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">Disponível para emissão.</p>
            </div>

            <div className="rounded-2xl bg-white/5 p-5">
              <Medal className="mb-3 text-violet-300" size={26} />
              <h3 className="font-black">2 em progresso</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">Continue avançando nos módulos.</p>
            </div>

            <div className="rounded-2xl bg-white/5 p-5">
              <Lock className="mb-3 text-violet-300" size={26} />
              <h3 className="font-black">Master bloqueado</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">Conclua toda a jornada para liberar.</p>
            </div>
          </div>

          <div className="grid gap-5 p-6">
            {certificates.map((item) => (
              <div key={item.title} className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6">
                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                  <div className="flex gap-4">
                    <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-violet-500/20 text-3xl">
                      {item.icon}
                    </div>

                    <div>
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        <h2 className="text-xl font-black">{item.title}</h2>
                        <span className={`rounded-full px-3 py-1 text-xs font-black ${item.status === "Disponível" ? "bg-emerald-400 text-slate-950" : item.status === "Em andamento" ? "bg-violet-500/20 text-violet-200" : "bg-white/10 text-slate-400"}`}>
                          {item.status}
                        </span>
                      </div>

                      <p className="max-w-2xl leading-7 text-slate-300">{item.description}</p>
                    </div>
                  </div>

                  {item.status === "Disponível" ? (
                    <button className="rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-5 py-4 font-black">
                      Emitir certificado
                    </button>
                  ) : (
                    <button className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 font-black text-slate-400">
                      Bloqueado
                    </button>
                  )}
                </div>

                <div className="mt-5">
                  <div className="mb-2 flex justify-between text-sm font-bold text-slate-400">
                    <span>Progresso</span>
                    <span>{item.progress}%</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500" style={{ width: `${item.progress}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 p-6">
            <div className="rounded-3xl border border-violet-500/20 bg-violet-500/10 p-6">
              <h3 className="mb-2 text-xl font-black">Como desbloquear certificados?</h3>
              <p className="leading-7 text-slate-300">
                Conclua os módulos, finalize as missões práticas e avance pela jornada. Na versão com login real, os certificados serão liberados automaticamente conforme seu progresso.
              </p>

              <Link href="/modulo/1">
                <button className="mt-5 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-5 py-4 font-black">
                  Continuar jornada
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

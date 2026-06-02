"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, BookOpen, CheckCircle, Mail, Trophy, User, Zap } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function PerfilPage() {
  const [email, setEmail] = useState("Carregando...");

useEffect(() => {
  async function loadUser() {
    const { data } = await supabase.auth.getUser();
    setEmail(data.user?.email || "Email não encontrado");
  }

  loadUser();
}, []);
  
  return (
    <main className="min-h-screen bg-[#060914] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,rgba(124,58,237,.35),transparent_30%),radial-gradient(circle_at_85%_15%,rgba(217,70,239,.22),transparent_30%),linear-gradient(180deg,#060914,#090d1d)]" />

      <section className="mx-auto max-w-6xl px-6 py-10">
        <Link href="/dashboard" className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-violet-200"><ArrowLeft size={16} />Voltar para dashboard</Link>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] shadow-2xl">
          <div className="bg-gradient-to-br from-violet-700 via-purple-950 to-[#0b1020] p-8 md:p-10">
            <div className="mb-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-5">
                <div className="grid h-24 w-24 place-items-center rounded-[2rem] bg-white/10 text-4xl shadow-[0_0_40px_rgba(168,85,247,.35)]">
                  <User size={42} />
                </div>
                <div>
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-black text-violet-100"><Zap size={16} />PERFIL DO ALUNO</div>
                  <h1 className="text-4xl font-black tracking-tight md:text-6xl">Meu Perfil</h1>
                  <p className="mt-3 text-lg text-violet-100">Acompanhe seu progresso dentro da Fábrica de Produtos IA.</p>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/10 p-5 md:min-w-[230px]">
                <p className="mb-2 text-sm font-bold text-violet-100">Progresso geral</p>
                <div className="text-4xl font-black">12%</div>
                <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/15"><div className="h-full w-[12%] rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-400"></div></div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 p-6 md:grid-cols-[.8fr_1.2fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6">
              <h2 className="mb-5 text-2xl font-black">Dados do aluno</h2>

              <div className="space-y-4">
                <div className="rounded-2xl bg-white/5 p-4">
                  <div className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-400"><User size={16} />Nome</div>
                  <p className="text-lg font-black">Aluno Fábrica IA</p>
                </div>

                <div className="rounded-2xl bg-white/5 p-4">
                  <div className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-400"><Mail size={16} />Email</div>
                  <p className="text-lg font-black">{email}</p>
                </div>

                <div className="rounded-2xl bg-white/5 p-4">
                  <div className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-400"><Trophy size={16} />Plano</div>
                  <p className="text-lg font-black">Acesso Vitalício</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6">
              <h2 className="mb-5 text-2xl font-black">Resumo da jornada</h2>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl bg-white/5 p-4">
                  <BookOpen className="mb-3 text-violet-300" size={24} />
                  <p className="text-sm text-slate-400">Módulos</p>
                  <p className="text-2xl font-black">7</p>
                </div>

                <div className="rounded-2xl bg-white/5 p-4">
                  <CheckCircle className="mb-3 text-violet-300" size={24} />
                  <p className="text-sm text-slate-400">Aulas disponíveis</p>
                  <p className="text-2xl font-black">9</p>
                </div>

                <div className="rounded-2xl bg-white/5 p-4">
                  <Trophy className="mb-3 text-violet-300" size={24} />
                  <p className="text-sm text-slate-400">Certificados</p>
                  <p className="text-2xl font-black">0</p>
                </div>
              </div>

              <div className="mt-6 rounded-3xl border border-violet-500/20 bg-violet-500/10 p-6">
                <h3 className="mb-2 text-xl font-black">Próximo passo recomendado</h3>
                <p className="mb-5 leading-7 text-slate-300">Continue pelo Módulo 2 para transformar sua oportunidade em um produto digital estruturado.</p>
                <Link href="/modulo/2">
                  <button className="rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-5 py-4 font-black">Continuar Módulo 2</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

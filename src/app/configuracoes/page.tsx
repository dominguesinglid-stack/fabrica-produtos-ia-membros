"use client";

import Link from "next/link";
import { ArrowLeft, Bell, CheckCircle, Lock, Mail, Moon, Shield, Sparkles, User } from "lucide-react";

export default function ConfiguracoesPage() {
  return (
    <main className="min-h-screen bg-[#060914] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,rgba(124,58,237,.35),transparent_30%),radial-gradient(circle_at_85%_15%,rgba(217,70,239,.22),transparent_30%),linear-gradient(180deg,#060914,#090d1d)]" />

      <section className="mx-auto max-w-5xl px-6 py-10">
        <Link href="/dashboard" className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-violet-200"><ArrowLeft size={16} />Voltar para dashboard</Link>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] shadow-2xl">
          <div className="bg-gradient-to-br from-violet-700 via-purple-950 to-[#0b1020] p-8 md:p-12">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-black text-violet-100"><Sparkles size={16} />CONFIGURAÇÕES</div>
            <h1 className="text-4xl font-black tracking-tight md:text-6xl">Configurações da conta</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-violet-100">Gerencie dados, preferências, segurança e notificações da sua área de membros.</p>
          </div>

          <div className="grid gap-6 p-6">
            <section className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-violet-500/20 text-violet-200"><User size={24} /></div>
                <div>
                  <h2 className="text-2xl font-black">Dados pessoais</h2>
                  <p className="text-sm text-slate-400">Informações básicas do aluno.</p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-slate-400">Nome</span>
                  <input defaultValue="Aluno Fábrica IA" className="h-14 w-full rounded-2xl border border-white/10 bg-[#0b1020] px-4 font-bold outline-none focus:border-violet-400" />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-slate-400">Email</span>
                  <input defaultValue="aluno@email.com" className="h-14 w-full rounded-2xl border border-white/10 bg-[#0b1020] px-4 font-bold outline-none focus:border-violet-400" />
                </label>
              </div>
            </section>

            <section className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-violet-500/20 text-violet-200"><Lock size={24} /></div>
                <div>
                  <h2 className="text-2xl font-black">Segurança</h2>
                  <p className="text-sm text-slate-400">Configurações futuras de senha e acesso.</p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-slate-400">Nova senha</span>
                  <input type="password" placeholder="••••••••" className="h-14 w-full rounded-2xl border border-white/10 bg-[#0b1020] px-4 font-bold outline-none focus:border-violet-400" />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-slate-400">Confirmar senha</span>
                  <input type="password" placeholder="••••••••" className="h-14 w-full rounded-2xl border border-white/10 bg-[#0b1020] px-4 font-bold outline-none focus:border-violet-400" />
                </label>
              </div>
            </section>

            <section className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-violet-500/20 text-violet-200"><Bell size={24} /></div>
                <div>
                  <h2 className="text-2xl font-black">Preferências</h2>
                  <p className="text-sm text-slate-400">Ajustes visuais e notificações.</p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl bg-white/5 p-5">
                  <Moon className="mb-3 text-violet-300" size={24} />
                  <h3 className="font-black">Tema escuro</h3>
                  <p className="mt-2 text-sm text-slate-400">Ativado por padrão.</p>
                </div>

                <div className="rounded-2xl bg-white/5 p-5">
                  <Mail className="mb-3 text-violet-300" size={24} />
                  <h3 className="font-black">Emails</h3>
                  <p className="mt-2 text-sm text-slate-400">Receber atualizações.</p>
                </div>

                <div className="rounded-2xl bg-white/5 p-5">
                  <Shield className="mb-3 text-violet-300" size={24} />
                  <h3 className="font-black">Privacidade</h3>
                  <p className="mt-2 text-sm text-slate-400">Conta protegida.</p>
                </div>
              </div>
            </section>

            <section className="rounded-3xl border border-violet-500/20 bg-violet-500/10 p-6">
              <div className="mb-2 flex items-center gap-2 font-black text-violet-200">
                <CheckCircle size={18} />
                Status da conta
              </div>
              <p className="leading-7 text-slate-300">Você está no plano Acesso Vitalício. Na versão com login real, esta página será conectada ao banco de dados do usuário.</p>

              <button className="mt-5 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-5 py-4 font-black">
                Salvar alterações
              </button>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}

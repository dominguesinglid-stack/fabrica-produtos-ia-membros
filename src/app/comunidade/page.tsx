"use client";

import Link from "next/link";
import { ArrowLeft, Bell, HelpCircle, Megaphone, MessageCircle, Rocket, Sparkles, Trophy, Users } from "lucide-react";

const channels = [
  {
    title: "Anúncios Oficiais",
    description: "Novidades, atualizações da plataforma e comunicados importantes.",
    icon: Megaphone,
    tag: "Oficial",
  },
  {
    title: "Canal Geral",
    description: "Converse com outros alunos, compartilhe ideias e tire dúvidas rápidas.",
    icon: MessageCircle,
    tag: "Aberto",
  },
  {
    title: "Networking",
    description: "Encontre parceiros, prestadores, criadores e oportunidades de colaboração.",
    icon: Users,
    tag: "Conexões",
  },
  {
    title: "Resultados dos Alunos",
    description: "Compartilhe conquistas, produtos criados, lançamentos e primeiras vendas.",
    icon: Trophy,
    tag: "Vitórias",
  },
  {
    title: "Dúvidas e Suporte",
    description: "Envie perguntas sobre aulas, prompts, módulos e execução prática.",
    icon: HelpCircle,
    tag: "Suporte",
  },
  {
    title: "Desafios Semanais",
    description: "Missões práticas para acelerar sua evolução e manter o ritmo de criação.",
    icon: Rocket,
    tag: "Desafios",
  },
];

export default function ComunidadePage() {
  return (
    <main className="min-h-screen bg-[#060914] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,rgba(124,58,237,.35),transparent_30%),radial-gradient(circle_at_85%_15%,rgba(217,70,239,.22),transparent_30%),linear-gradient(180deg,#060914,#090d1d)]" />

      <section className="mx-auto max-w-6xl px-6 py-10">
        <Link href="/dashboard" className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-violet-200"><ArrowLeft size={16} />Voltar para dashboard</Link>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] shadow-2xl">
          <div className="bg-gradient-to-br from-violet-700 via-purple-950 to-[#0b1020] p-8 md:p-12">
            <div className="mb-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-black text-violet-100"><Sparkles size={16} />COMUNIDADE PREMIUM</div>
                <h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-6xl">Comunidade Fábrica de Produtos IA</h1>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-violet-100">Um espaço para trocar ideias, tirar dúvidas, compartilhar progresso e criar produtos digitais junto com outros membros.</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/10 p-5 md:min-w-[230px]">
                <p className="mb-2 text-sm font-bold text-violet-100">Status</p>
                <div className="text-3xl font-black">Em breve</div>
                <p className="mt-2 text-sm text-violet-100">A comunidade será conectada a um grupo real.</p>
              </div>
            </div>

            <button className="rounded-2xl bg-white px-6 py-4 font-black text-[#090d1d] transition hover:bg-violet-100">Entrar na comunidade</button>
          </div>

          <div className="grid gap-4 border-b border-white/10 p-6 md:grid-cols-4">
            <div className="rounded-2xl bg-white/5 p-5">
              <Users className="mb-3 text-violet-300" size={26} />
              <h3 className="font-black">+1.500 membros</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">Meta da comunidade.</p>
            </div>

            <div className="rounded-2xl bg-white/5 p-5">
              <MessageCircle className="mb-3 text-violet-300" size={26} />
              <h3 className="font-black">6 canais</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">Organizados por tema.</p>
            </div>

            <div className="rounded-2xl bg-white/5 p-5">
              <Bell className="mb-3 text-violet-300" size={26} />
              <h3 className="font-black">Atualizações</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">Novidades e avisos.</p>
            </div>

            <div className="rounded-2xl bg-white/5 p-5">
              <Trophy className="mb-3 text-violet-300" size={26} />
              <h3 className="font-black">Resultados</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">Espaço para vitórias.</p>
            </div>
          </div>

          <div className="p-6">
            <div className="mb-6">
              <p className="font-black text-violet-300">CANAIS</p>
              <h2 className="text-3xl font-black tracking-tight">Espaços da comunidade</h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {channels.map((channel) => {
                const Icon = channel.icon;

                return (
                  <div key={channel.title} className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 transition hover:-translate-y-1 hover:border-violet-300/40">
                    <div className="mb-5 flex items-start justify-between gap-4">
                      <div className="grid h-14 w-14 place-items-center rounded-2xl bg-violet-500/20 text-violet-200">
                        <Icon size={26} />
                      </div>

                      <span className="rounded-full bg-violet-500/20 px-3 py-1 text-xs font-black text-violet-200">
                        {channel.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-black">{channel.title}</h3>
                    <p className="mt-3 leading-7 text-slate-300">{channel.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="border-t border-white/10 p-6">
            <div className="rounded-3xl border border-violet-500/20 bg-violet-500/10 p-6">
              <h3 className="mb-2 text-xl font-black">Como será liberado?</h3>
              <p className="leading-7 text-slate-300">
                Na versão real, este botão poderá levar para uma comunidade no WhatsApp, Telegram, Discord, Circle, Canny ou uma área social interna da própria plataforma.
              </p>

              <Link href="/dashboard">
                <button className="mt-5 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-5 py-4 font-black">
                  Voltar para plataforma
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

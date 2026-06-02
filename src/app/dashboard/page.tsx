"use client";
import Link from "next/link";
import { BookOpen, LogOut, Search, Sparkles, Trophy, FileText, Download, Award, Users, User, Settings, CreditCard } from "lucide-react";
import { modules } from "@/lib/data";

const tools = [
  { title: "Biblioteca de Prompts", description: "Prompts prontos para criar produtos, ofertas e páginas.", href: "/prompts", icon: FileText },
  { title: "Recursos Premium", description: "Templates, checklists, canvas e materiais práticos.", href: "/recursos", icon: Download },
  { title: "Certificados", description: "Acompanhe conquistas e certificados desbloqueados.", href: "/certificados", icon: Award },
  { title: "Comunidade", description: "Networking, dúvidas, resultados e desafios.", href: "/comunidade", icon: Users },
  { title: "Meu Perfil", description: "Veja seus dados, plano e progresso geral.", href: "/perfil", icon: User },
  { title: "Configurações", description: "Gerencie conta, segurança e preferências.", href: "/configuracoes", icon: Settings },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#060914] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,rgba(124,58,237,.35),transparent_30%),radial-gradient(circle_at_85%_15%,rgba(217,70,239,.22),transparent_30%),linear-gradient(180deg,#060914,#090d1d)]" />
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#060914]/85 backdrop-blur-xl">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500"><BookOpen size={24} /></div>
            <div><div className="text-xl font-black">Fábrica de Produtos IA</div><div className="text-xs text-violet-200">Área de membros</div></div>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/perfil"><button className="hidden rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-bold text-slate-200 md:block">Meu perfil</button></Link>
            <button className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-bold text-slate-200"><LogOut size={16} />Sair</button>
          </div>
        </nav>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8 grid gap-6 lg:grid-cols-[1.2fr_.8fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-8 shadow-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-violet-500/20 px-4 py-2 text-sm font-black text-violet-200"><Sparkles size={16} />Continue construindo</div>
            <h1 className="text-4xl font-black tracking-tight md:text-6xl">Bem-vindo de volta.</h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">Comece pelo Módulo 1, avance no Módulo 2 e use os prompts e recursos para transformar uma ideia em produto real.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/modulo/1"><button className="rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-6 py-4 font-black">Continuar Módulo 1</button></Link>
              <Link href="/prompts"><button className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 font-black">Ver prompts</button></Link>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-violet-700 to-fuchsia-600 p-8 shadow-2xl">
            <Trophy size={40} /><h2 className="mt-4 text-2xl font-black">Seu progresso</h2><p className="mt-2 text-violet-100">Primeiro objetivo: concluir o Módulo 1.</p>
            <div className="mt-6"><div className="mb-2 flex justify-between text-sm font-bold"><span>Progresso geral</span><span>18%</span></div><div className="h-3 rounded-full bg-white/20"><div className="h-3 w-[18%] rounded-full bg-white" /></div></div>
            <Link href="/certificados"><button className="mt-6 rounded-2xl bg-white px-5 py-4 font-black text-violet-700">Ver certificados</button></Link>
          </div>
        </div>

        <div className="mb-8">
          <div className="mb-5 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div><p className="font-black text-violet-300">FERRAMENTAS</p><h2 className="text-3xl font-black">Acesse tudo da plataforma</h2></div>
            <Link href="/checkout"><button className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-5 py-4 font-black"><CreditCard size={18} />Ver checkout</button></Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {tools.map((tool) => {
              const Icon = tool.icon;
              return (
                <Link key={tool.title} href={tool.href}>
                  <div className="group h-full rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-xl transition hover:-translate-y-1 hover:border-violet-300/40">
                    <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-violet-500/20 text-violet-200"><Icon size={26} /></div>
                    <h3 className="text-xl font-black">{tool.title}</h3>
                    <p className="mt-3 min-h-[56px] text-sm leading-6 text-slate-300">{tool.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div><p className="font-black text-violet-300">MÓDULOS</p><h2 className="text-3xl font-black">Sua jornada de criação</h2></div>
          <div className="flex h-12 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4"><Search size={18} className="text-slate-400" /><input placeholder="Buscar módulo..." className="bg-transparent outline-none" /></div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {modules.map((module) => (
            <Link key={module.id} href={`/modulo/${module.id}`}>
              <div className="group h-full rounded-[2rem] border border-white/10 bg-white/[0.055] p-6 shadow-xl transition hover:-translate-y-1 hover:border-violet-300/40">
                <div className="mb-5 flex items-start justify-between"><div className="grid h-16 w-16 place-items-center rounded-2xl bg-violet-500/20 text-3xl">{module.icon}</div><span className="rounded-full bg-white/10 px-3 py-1 text-xs font-black text-violet-100">{module.status}</span></div>
                <h3 className="text-xl font-black">{module.title}</h3>
                <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-300">{module.description}</p>
                <div className="mt-5 flex items-center justify-between text-sm text-slate-300"><span>{module.lessons} aulas</span><span>{module.prompts} prompts</span></div>
                <div className="mt-4"><div className="mb-2 flex justify-between text-xs font-bold text-slate-400"><span>Progresso</span><span>{module.progress}%</span></div><div className="h-2 rounded-full bg-white/10"><div className="h-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" style={{ width: `${module.progress}%` }} /></div></div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

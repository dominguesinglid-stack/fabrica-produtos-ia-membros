"use client";

import Link from "next/link";
import { ArrowLeft, BookOpen, CheckSquare, Download, FileText, Layers, Sparkles, Table, Wand2 } from "lucide-react";

const resources = [
  {
    title: "Canvas de Produto Digital",
    type: "Canvas",
    description: "Modelo para organizar ideia, público, problema, promessa, oferta e entregáveis.",
    icon: Layers,
    status: "Disponível",
  },
  {
    title: "Checklist de Validação",
    type: "Checklist",
    description: "Lista prática para validar uma oportunidade antes de construir o produto.",
    icon: CheckSquare,
    status: "Disponível",
  },
  {
    title: "Planilha de Ideias e Nichos",
    type: "Planilha",
    description: "Organize nichos, dores, concorrentes, notas de validação e oportunidades.",
    icon: Table,
    status: "Em breve",
  },
  {
    title: "Template de Landing Page",
    type: "Template",
    description: "Estrutura base de página de venda com headline, oferta, benefícios e CTA.",
    icon: FileText,
    status: "Disponível",
  },
  {
    title: "Mapa de Oferta Irresistível",
    type: "Framework",
    description: "Material para montar promessa, bônus, garantia, preço e diferenciais.",
    icon: Wand2,
    status: "Em breve",
  },
  {
    title: "Roteiro de Lançamento em 7 Dias",
    type: "Plano",
    description: "Sequência prática para preparar, divulgar e lançar o produto rapidamente.",
    icon: BookOpen,
    status: "Em breve",
  },
];

export default function RecursosPage() {
  return (
    <main className="min-h-screen bg-[#060914] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,rgba(124,58,237,.35),transparent_30%),radial-gradient(circle_at_85%_15%,rgba(217,70,239,.22),transparent_30%),linear-gradient(180deg,#060914,#090d1d)]" />

      <section className="mx-auto max-w-6xl px-6 py-10">
        <Link href="/dashboard" className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-violet-200"><ArrowLeft size={16} />Voltar para dashboard</Link>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] shadow-2xl">
          <div className="bg-gradient-to-br from-violet-700 via-purple-950 to-[#0b1020] p-8 md:p-12">
            <div className="mb-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-black text-violet-100"><Sparkles size={16} />BIBLIOTECA DE RECURSOS</div>
                <h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-6xl">Recursos Premium</h1>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-violet-100">Templates, checklists, canvas, planilhas e materiais práticos para acelerar a criação do seu produto digital.</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/10 p-5 md:min-w-[230px]">
                <p className="mb-2 text-sm font-bold text-violet-100">Materiais</p>
                <div className="text-4xl font-black">6</div>
                <p className="mt-2 text-sm text-violet-100">Novos recursos serão adicionados.</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 border-b border-white/10 p-6 md:grid-cols-4">
            <div className="rounded-2xl bg-white/5 p-5">
              <FileText className="mb-3 text-violet-300" size={26} />
              <h3 className="font-black">Templates</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">Modelos prontos para adaptar.</p>
            </div>

            <div className="rounded-2xl bg-white/5 p-5">
              <CheckSquare className="mb-3 text-violet-300" size={26} />
              <h3 className="font-black">Checklists</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">Passos práticos para executar.</p>
            </div>

            <div className="rounded-2xl bg-white/5 p-5">
              <Table className="mb-3 text-violet-300" size={26} />
              <h3 className="font-black">Planilhas</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">Organização e decisão.</p>
            </div>

            <div className="rounded-2xl bg-white/5 p-5">
              <Layers className="mb-3 text-violet-300" size={26} />
              <h3 className="font-black">Frameworks</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">Métodos para criar melhor.</p>
            </div>
          </div>

          <div className="p-6">
            <div className="mb-6">
              <p className="font-black text-violet-300">MATERIAIS</p>
              <h2 className="text-3xl font-black tracking-tight">Escolha um recurso</h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {resources.map((resource) => {
                const Icon = resource.icon;

                return (
                  <div key={resource.title} className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 transition hover:-translate-y-1 hover:border-violet-300/40">
                    <div className="mb-5 flex items-start justify-between gap-4">
                      <div className="grid h-14 w-14 place-items-center rounded-2xl bg-violet-500/20 text-violet-200">
                        <Icon size={26} />
                      </div>

                      <span className={`rounded-full px-3 py-1 text-xs font-black ${resource.status === "Disponível" ? "bg-emerald-400 text-slate-950" : "bg-white/10 text-slate-400"}`}>
                        {resource.status}
                      </span>
                    </div>

                    <p className="mb-2 text-sm font-black text-violet-300">{resource.type}</p>
                    <h3 className="text-xl font-black">{resource.title}</h3>
                    <p className="mt-3 min-h-[84px] leading-7 text-slate-300">{resource.description}</p>

                    <button className={`mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-2xl font-black ${resource.status === "Disponível" ? "bg-gradient-to-r from-violet-600 to-fuchsia-500" : "border border-white/10 bg-white/5 text-slate-400"}`}>
                      <Download size={18} />
                      {resource.status === "Disponível" ? "Acessar recurso" : "Em breve"}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="border-t border-white/10 p-6">
            <div className="rounded-3xl border border-violet-500/20 bg-violet-500/10 p-6">
              <h3 className="mb-2 text-xl font-black">Como usar os recursos?</h3>
              <p className="leading-7 text-slate-300">
                Use os materiais junto com as aulas. Primeiro assista à aula, depois aplique o recurso correspondente para transformar conhecimento em execução prática.
              </p>

              <Link href="/prompts">
                <button className="mt-5 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-5 py-4 font-black">
                  Ver Biblioteca de Prompts
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

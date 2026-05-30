"use client";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Lock, PlayCircle } from "lucide-react";
import { getLessonsByModule, getModule } from "@/lib/data";

export default function ModulePage({ params }: any) {
  const module = getModule(params.id);
  const lessons = getLessonsByModule(params.id);
  if (!module) return <main className="p-10 text-white">Módulo não encontrado.</main>;
  return (
    <main className="min-h-screen bg-[#060914] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,rgba(124,58,237,.35),transparent_30%),linear-gradient(180deg,#060914,#090d1d)]" />
      <section className="mx-auto max-w-6xl px-6 py-10">
        <Link href="/dashboard" className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-violet-200"><ArrowLeft size={16} />Voltar para dashboard</Link>
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-8 shadow-2xl">
          <div className="mb-6 flex items-center gap-4">
            <div className="grid h-20 w-20 place-items-center rounded-3xl bg-violet-500/20 text-4xl">{module.icon}</div>
            <div><p className="font-black text-violet-300">MÓDULO {module.id}</p><h1 className="text-4xl font-black tracking-tight">{module.title}</h1><p className="mt-2 text-slate-300">{module.description}</p></div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-white/5 p-4"><p className="text-sm text-slate-400">Aulas</p><p className="text-2xl font-black">{module.lessons}</p></div>
            <div className="rounded-2xl bg-white/5 p-4"><p className="text-sm text-slate-400">Prompts</p><p className="text-2xl font-black">{module.prompts}</p></div>
            <div className="rounded-2xl bg-white/5 p-4"><p className="text-sm text-slate-400">Progresso</p><p className="text-2xl font-black">{module.progress}%</p></div>
          </div>
        </div>
        <div className="mt-8 space-y-4">
          {lessons.map((lesson, index) => (
            <Link key={lesson.id} href={`/aula/${lesson.id}`}>
              <div className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/[0.055] p-5 shadow-xl transition hover:border-violet-300/40">
                <div className="flex items-center gap-4">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-violet-500/20 text-violet-200">{lesson.status === "available" ? <PlayCircle size={26} /> : <Lock size={24} />}</div>
                  <div><p className="text-xs font-black text-violet-300">AULA {index + 1}</p><h3 className="text-lg font-black">{lesson.title}</h3><p className="text-sm text-slate-400">{lesson.duration}</p></div>
                </div>
                <CheckCircle className="text-slate-600" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

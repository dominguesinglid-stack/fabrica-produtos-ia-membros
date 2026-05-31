"use client";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Lock, PlayCircle, Trophy, BookOpen, Sparkles, Clock, FileText } from "lucide-react";
import { getLessonsByModule, getModule } from "@/lib/data";

export default function ModulePage({ params }: any) {
  const module = getModule(params.id);
  const lessons = getLessonsByModule(params.id);

  if (!module) return <main className="p-10 text-white">Módulo não encontrado.</main>;

  const firstLesson = lessons[0];
  const availableLessons = lessons.filter((lesson) => lesson.status === "available").length;

  return (
    <main className="min-h-screen bg-[#060914] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,rgba(124,58,237,.35),transparent_30%),radial-gradient(circle_at_85%_15%,rgba(217,70,239,.22),transparent_30%),linear-gradient(180deg,#060914,#090d1d)]" />

      <section className="mx-auto max-w-6xl px-6 py-10">
        <Link href="/dashboard" className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-violet-200"><ArrowLeft size={16} />Voltar para dashboard</Link>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] shadow-2xl">
          <div className="bg-gradient-to-br from-violet-700 via-purple-950 to-[#0b1020] p-8 md:p-10">
            <div className="mb-6 flex flex-col justify-between gap-6 md:flex-row md:items-start">
              <div className="flex gap-5">
                <div className="grid h-20 w-20 shrink-0 place-items-center rounded-3xl bg-white/10 text-4xl shadow-[0_0_40px_rgba(168,85,247,.35)]">{module.icon}</div>
                <div>
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-black text-violet-100"><Sparkles size={16} />MÓDULO {module.id} DE 7</div>
                  <h1 className="max-w-3xl text-4xl font-black tracking-tight md:text-6xl">{module.title}</h1>
                  <p className="mt-4 max-w-3xl text-lg leading-8 text-violet-100">{module.description}</p>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/10 p-5 md:min-w-[220px]">
                <p className="mb-2 text-sm font-bold text-violet-100">Progresso do módulo</p>
                <div className="text-4xl font-black">{module.progress}%</div>
                <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/15"><div className="h-full rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-400" style={{ width: `${module.progress}%` }} /></div>
              </div>
            </div>

            {firstLesson && (
              <Link href={`/aula/${firstLesson.id}`}>
                <button className="mt-2 rounded-2xl bg-white px-6 py-4 font-black text-[#090d1d] transition hover:bg-violet-100">Continuar módulo</button>
              </Link>
            )}
          </div>

          <div className="grid gap-4 border-b border-white/10 p-6 md:grid-cols-4">
            <div className="rounded-2xl bg-white/5 p-4"><BookOpen className="mb-3 text-violet-300" size={24} /><p className="text-sm text-slate-400">Aulas</p><p className="text-2xl font-black">{module.lessons}</p></div>
            <div className="rounded-2xl bg-white/5 p-4"><FileText className="mb-3 text-violet-300" size={24} /><p className="text-sm text-slate-400">Prompts</p><p className="text-2xl font-black">{module.prompts}</p></div>
            <div className="rounded-2xl bg-white/5 p-4"><CheckCircle className="mb-3 text-violet-300" size={24} /><p className="text-sm text-slate-400">Disponíveis</p><p className="text-2xl font-black">{availableLessons}</p></div>
            <div className="rounded-2xl bg-white/5 p-4"><Trophy className="mb-3 text-violet-300" size={24} /><p className="text-sm text-slate-400">Status</p><p className="text-2xl font-black">{module.status}</p></div>
          </div>
        </div>

        <div className="mt-10 mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="font-black text-violet-300">AULAS DO MÓDULO</p>
            <h2 className="text-3xl font-black tracking-tight">Comece por aqui</h2>
          </div>
          <p className="hidden text-sm text-slate-400 md:block">Complete as aulas em ordem para desbloquear a jornada.</p>
        </div>

        <div className="space-y-4">
          {lessons.map((lesson, index) => {
            const isFirst = index === 0;
            const isAvailable = lesson.status === "available";

            return (
              <Link key={lesson.id} href={`/aula/${lesson.id}`}>
                <div className={`group flex items-center justify-between rounded-3xl border p-5 shadow-xl transition hover:-translate-y-1 ${isFirst ? "border-violet-300/40 bg-violet-500/10" : "border-white/10 bg-white/[0.055] hover:border-violet-300/40"}`}>
                  <div className="flex items-center gap-4">
                    <div className={`grid h-14 w-14 place-items-center rounded-2xl ${isAvailable ? "bg-violet-500/20 text-violet-200" : "bg-white/5 text-slate-500"}`}>
                      {isAvailable ? <PlayCircle size={26} /> : <Lock size={24} />}
                    </div>

                    <div>
                      <div className="mb-1 flex flex-wrap items-center gap-2">
                        <p className="text-xs font-black text-violet-300">AULA {index + 1}</p>
                        {isFirst && <span className="rounded-full bg-emerald-400 px-3 py-1 text-[10px] font-black text-slate-950">CONTINUE</span>}
                      </div>
                      <h3 className="text-lg font-black">{lesson.title}</h3>
                      {lesson.subtitle && <p className="mt-1 max-w-2xl text-sm text-slate-400">{lesson.subtitle}</p>}
                      <div className="mt-2 flex items-center gap-2 text-sm text-slate-400"><Clock size={14} />{lesson.duration}</div>
                    </div>
                  </div>

                  <CheckCircle className={isFirst ? "text-violet-300" : "text-slate-600"} />
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}

"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Check, Clipboard, Copy, Lightbulb, Target, Rocket, Zap } from "lucide-react";
import { getLesson } from "@/lib/data";

export default function LessonPage({ params }: any) {
  const lesson = getLesson(params.id);
  const [copied, setCopied] = useState(false);
  if (!lesson) return <main className="p-10 text-white">Aula não encontrada.</main>;

  async function copyPrompt() {
    await navigator.clipboard.writeText(lesson.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 1400);
  }

  return (
    <main className="min-h-screen bg-[#060914] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,rgba(124,58,237,.35),transparent_30%),linear-gradient(180deg,#060914,#090d1d)]" />
      <section className="mx-auto max-w-5xl px-6 py-10">
        <Link href={`/modulo/${lesson.moduleId}`} className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-violet-200"><ArrowLeft size={16} />Voltar para o módulo</Link>
        <article className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-8 shadow-2xl">
            <p className="font-black text-violet-300">AULA PREMIUM</p><h1 className="mt-2 text-4xl font-black tracking-tight">{lesson.title}</h1>{lesson.subtitle && <p className="mt-4 text-lg text-slate-300">{lesson.subtitle}</p>}<p className="mt-3 text-slate-400">⏱ {lesson.duration}</p>          <div className="mt-8 grid gap-5">
            <section className="rounded-3xl border border-white/10 bg-white/[0.045] p-6"><h2 className="mb-3 text-xl font-black">🎯 Objetivo</h2><p className="leading-8 text-slate-300">{lesson.objective}</p></section>
            {lesson.contentSections?.map((section:any)=><section key={section.title} className="rounded-3xl border border-white/10 bg-white/[0.045] p-6"><h2 className="mb-3 text-xl font-black">{section.title}</h2><p className="leading-8 text-slate-300">{section.content}</p></section>)}
            <section className="rounded-3xl border border-white/10 bg-white/[0.045] p-6"><h2 className="mb-3 text-xl font-black">🧠 Conceito</h2><p className="leading-8 text-slate-300">{lesson.concept}</p></section>
            <section className="rounded-3xl border border-white/10 bg-white/[0.045] p-6"><h2 className="mb-3 text-xl font-black">📚 Framework</h2><ul className="space-y-3">{lesson.framework.map((item) => <li key={item} className="flex gap-3 text-slate-300"><Check className="mt-1 shrink-0 text-violet-300" size={18} />{item}</li>)}</ul></section>
            <section className="rounded-3xl border border-violet-300/30 bg-[#0b1020] p-6 shadow-[0_0_50px_rgba(168,85,247,.18)]">
              <div className="mb-4 flex items-center justify-between gap-4"><h2 className="text-xl font-black">🤖 Prompt principal</h2><button onClick={copyPrompt} className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-4 py-3 text-sm font-black">{copied ? <Clipboard size={16} /> : <Copy size={16} />}{copied ? "Copiado" : "Copiar prompt"}</button></div>
              <pre className="whitespace-pre-wrap rounded-2xl border border-white/10 bg-black/30 p-5 text-sm leading-7 text-slate-200">{lesson.prompt}</pre>
            </section>
           <section className="rounded-3xl border border-white/10 bg-white/[0.045] p-6"><h2 className="mb-3 text-xl font-black">📌 Exemplo</h2><p className="leading-8 text-slate-300">{lesson.example}</p></section>
           {lesson.exercise && <section className="rounded-3xl border border-yellow-500/20 bg-yellow-500/10 p-6"><h2 className="mb-3 text-xl font-black">🚀 Exercício Prático</h2><p className="leading-8 text-slate-300">{lesson.exercise}</p></section>}
            <section className="rounded-3xl border border-white/10 bg-white/[0.045] p-6"><h2 className="mb-3 text-xl font-black">✅ Checklist</h2><ul className="space-y-3">{lesson.checklist.map((item) => <li key={item} className="flex gap-3 text-slate-300"><Check className="mt-1 shrink-0 text-violet-300" size={18} />{item}</li>)}</ul></section>
          {lesson.proTip && <section className="rounded-3xl border border-emerald-500/20 bg-emerald-500/10 p-6"><h2 className="mb-3 text-xl font-black">💡 Dica Premium</h2><p className="leading-8 text-slate-300">{lesson.proTip}</p></section>}
          {lesson.nextAction && <section className="rounded-3xl border border-violet-500/20 bg-violet-500/10 p-6"><h2 className="mb-3 text-xl font-black">🎯 Próxima Ação</h2><p className="leading-8 text-slate-300">{lesson.nextAction}</p></section>}
            </div>
          <div className="mt-8 flex justify-between gap-4"><Link href={`/modulo/${lesson.moduleId}`}><button className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 font-black">Voltar</button></Link><button className="rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-5 py-4 font-black">Marcar como concluída</button></div>
        </article>
      </section>
    </main>
  );
}

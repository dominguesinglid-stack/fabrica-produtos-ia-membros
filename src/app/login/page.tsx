"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { BookOpen, Lock, Mail, Sparkles } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleAuth() {
  setLoading(true);
  setMessage("");

  const result =
    mode === "login"
      ? await supabase.auth.signInWithPassword({ email, password })
      : await supabase.auth.signUp({ email, password });

  setLoading(false);

  if (result.error) {
    setMessage(result.error.message);
    return;
  }

  if (mode === "signup") {
    setMessage(
      "Cadastro criado. Verifique seu email, se a confirmação estiver ativada."
    );
    return;
  }

  router.push("/dashboard");
}

  return (
    <main className="min-h-screen bg-[#060914] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(124,58,237,.45),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(217,70,239,.28),transparent_32%),linear-gradient(180deg,#060914,#0a0d1d)]" />
      <div className="mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-6 py-12 lg:grid-cols-2">
        <section>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-white/5 px-4 py-2 text-sm font-black text-violet-200">
            <Sparkles size={16} /> Área de membros premium
          </div>
          <h1 className="text-5xl font-black leading-tight tracking-[-0.04em] md:text-7xl">
            Bem-vindo à <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Fábrica de Produtos IA</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Acesse módulos, aulas, prompts, checklists e frameworks para transformar ideias em produtos digitais com IA.
          </p>
        </section>

        <section className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 shadow-2xl backdrop-blur">
          <div className="mb-8 flex items-center gap-3">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500">
              <BookOpen size={28} />
            </div>
            <div>
              <h2 className="text-2xl font-black">{mode === "login" ? "Entrar na plataforma" : "Criar acesso"}</h2>
              <p className="text-sm text-slate-400">Acesso exclusivo para membros</p>
            </div>
          </div>

          <div className="mb-5 grid grid-cols-2 gap-3 rounded-2xl bg-[#0b1020] p-2">
            <button onClick={() => setMode("login")} className={`rounded-xl px-4 py-3 font-black ${mode === "login" ? "bg-violet-600" : "text-slate-400"}`}>Entrar</button>
            <button onClick={() => setMode("signup")} className={`rounded-xl px-4 py-3 font-black ${mode === "signup" ? "bg-violet-600" : "text-slate-400"}`}>Cadastrar</button>
          </div>

          <div className="space-y-4">
            <label className="block">
              <span className="mb-2 block text-sm font-bold text-slate-300">Email</span>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0b1020] px-4">
                <Mail size={18} className="text-violet-300" />
                <input value={email} onChange={(e) => setEmail(e.target.value)} className="h-14 w-full bg-transparent outline-none" placeholder="seuemail@email.com" />
              </div>
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-bold text-slate-300">Senha</span>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0b1020] px-4">
                <Lock size={18} className="text-violet-300" />
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="h-14 w-full bg-transparent outline-none" placeholder="••••••••" />
              </div>
            </label>

            <button onClick={handleAuth} disabled={loading} className="mt-2 h-14 w-full rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 font-black text-white disabled:opacity-60">
              {loading ? "Carregando..." : mode === "login" ? "Entrar agora" : "Criar minha conta"}
            </button>

            {message && <p className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center text-sm text-slate-300">{message}</p>}

            <p className="text-center text-sm text-slate-400">
              Login conectado ao Supabase.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

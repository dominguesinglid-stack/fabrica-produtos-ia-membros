"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function TesteSupabasePage() {
  const [status, setStatus] = useState("Testando conexão...");

  useEffect(() => {
    async function testConnection() {
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        setStatus("Erro ao conectar com Supabase");
        return;
      }

      setStatus("Supabase conectado com sucesso ✅");
    }

    testConnection();
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#060914] p-6 text-white">
      <div className="rounded-3xl border border-white/10 bg-white/[0.055] p-8 text-center shadow-2xl">
        <h1 className="text-3xl font-black">Teste Supabase</h1>
        <p className="mt-4 text-lg text-slate-300">{status}</p>
      </div>
    </main>
  );
}

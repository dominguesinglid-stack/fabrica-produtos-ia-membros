import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Área de Membros | Fábrica de Produtos IA",
  description: "Plataforma premium da Fábrica de Produtos IA.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}

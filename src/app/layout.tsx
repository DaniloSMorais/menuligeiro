import "./globals.css";
import Header from "../components/Header";
import { ReactNode } from "react";

export const metadata = {
  title: "Menu Ligeiro",
  description: "Automação de atendimento para bares e restaurantes",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="bg-gray-50 text-gray-800 font-sans">
        <Header />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}

"use client";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const sobreRef = useRef<HTMLDivElement | null>(null);
  const planosRef = useRef<HTMLDivElement | null>(null);
  const quemSomosRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIsVisible(entry.isIntersecting));
      },
      { threshold: 0.3 }
    );

    if (sobreRef.current) observer.observe(sobreRef.current);
    return () => observer.disconnect();
  }, []);

  const CheckIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={3}
      stroke="currentColor"
      className="w-5 h-5 text-green-500 inline-block mr-2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );

  return (
    <div className="flex flex-col items-center justify-center text-center px-4">
      {/* SEÇÃO 1 — Hero */}
      <div className="relative flex flex-col items-center justify-center min-h-[100vh] w-full overflow-hidden bg-[#0a2540] text-white">
        {/* Efeitos de fundo sutis */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-cover bg-center"></div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        </div>

        {/* Conteúdo principal */}
        <div className="relative z-10 max-w-3xl text-center animate-fadeIn">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Bem-vindo ao
          </h1>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
            <span className="text-blue-300">Menu Ligeiro</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed">
            O sistema inteligente que transforma o atendimento do seu restaurante.
            <br />
            Prático, moderno e eficiente.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => scrollToSection("pedido-section")}
              className="bg-blue-600 hover:bg-blue-500 px-10 py-4 rounded-2xl text-lg font-semibold shadow-lg hover:scale-105 transition-all duration-300 w-56 hover:shadow-blue-400/40"
            >
              Fazer Pedido
            </button>

            <button
              onClick={() => scrollToSection("sobre-section")}
              className="bg-white text-blue-900 px-10 py-4 rounded-2xl text-lg font-semibold shadow-lg hover:bg-blue-100 hover:scale-105 transition-all duration-300 w-56"
            >
              Adquirir Sistema
            </button>
          </div>
        </div>
      </div>

      {/* SEÇÃO 2 — Fazer Pedido */}
      <section
        id="pedido-section"
        className="min-h-[100vh] w-full flex flex-col items-center justify-center bg-white text-blue-900 rounded-t-3xl mt-10 py-16 shadow-inner"
      >
        <h3 className="text-3xl font-bold mb-8">Fazer Pedido</h3>
        <p className="text-lg max-w-2xl text-center mb-8">
          Em breve você poderá fazer os seus pedidos diretamente por aqui!
        </p>

        <div className="bg-blue-50 p-8 rounded-3xl shadow-xl w-full max-w-md space-y-5 border border-blue-200">
          <input
            type="text"
            placeholder="Escolha a cidade"
            className="w-full bg-white border border-blue-300 rounded-xl p-3 text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            placeholder="Digite o estabelecimento"
            className="w-full bg-white border border-blue-300 rounded-xl p-3 text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button className="w-full bg-blue-600 hover:bg-blue-500 py-3 rounded-xl font-semibold text-white shadow-md hover:scale-105 transition-transform">
            Buscar
          </button>
        </div>
      </section>

      {/* SEÇÃO 3 — Conheça o Sistema */}
      <section
        id="sobre-section"
        ref={sobreRef}
        className={`min-h-[100vh] w-full flex flex-col items-center justify-center bg-gradient-to-b from-blue-800 to-blue-900 text-white py-20 px-8 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h3 className="text-3xl font-bold mb-8 text-center">Conheça o Sistema</h3>

        <div className="max-w-4xl text-justify text-blue-100 leading-relaxed text-lg space-y-4 mb-12">
          <p>
            O <strong>Menu Ligeiro</strong> é uma solução personalizada para melhorar o
            atendimento de clientes em estabelecimentos gastronômicos: bares, restaurantes,
            lanchonetes e afins.
          </p>

          <p>
            Nossa principal ferramenta é o <strong>Garçom Virtual</strong>, um assistente que
            é acionado por <strong>QR Code</strong> na mesa do estabelecimento e mantém uma
            conversação natural com o usuário, faz sugestões, anotações e encaminhamento do
            pedido.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-10">
          <div className="flex flex-col items-center bg-white/10 p-6 rounded-2xl shadow-lg w-48">
            <img src="/qrcode.png" alt="QR Code" className="w-24 h-24 object-contain mb-3" />
            <p className="text-sm text-blue-100">QR Code nas Mesas</p>
          </div>

          <div className="flex flex-col items-center bg-white/10 p-6 rounded-2xl shadow-lg w-48">
            <img src="/robot.png" alt="Garçom Virtual" className="w-24 h-24 object-contain mb-3" />
            <p className="text-sm text-blue-100">Garçom Virtual Inteligente</p>
          </div>

          <div className="flex flex-col items-center bg-white/10 p-6 rounded-2xl shadow-lg w-48">
            <img src="/pedido.png" alt="Pedido Integrado" className="w-24 h-24 object-contain mb-3" />
            <p className="text-sm text-blue-100">Pedidos Integrados</p>
          </div>
        </div>

        <button
          onClick={() => scrollToSection("planos-section")}
          className="mt-12 bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg hover:scale-105 transition-transform"
        >
          Conheça os Planos
        </button>
      </section>

      {/* SEÇÃO 4 — Planos */}
      <section
        id="planos-section"
        ref={planosRef}
        className="min-h-[100vh] w-full bg-blue-50 text-blue-900 py-20 px-8"
      >
        <h3 className="text-3xl font-bold text-center mb-12">Planos</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* START */}
          <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center border border-blue-200 hover:scale-105 transition-transform">
            <h4 className="text-2xl font-bold mb-4 text-blue-700">Start</h4>
            <ul className="text-left space-y-2">
              <li><CheckIcon />Até 5 QRCODES nas mesas</li>
              <li><CheckIcon />Garçom Virtual</li>
              <li><CheckIcon />Pedidos integrados com sistema de gestão</li>
              <li className="line-through opacity-60"><CheckIcon />Integração com Delivery</li>
              <li className="line-through opacity-60"><CheckIcon />Integração com WhatsApp</li>
            </ul>
            <p className="mt-6 text-xl font-semibold text-blue-700">12x de R$ 199,90</p>
          </div>

          {/* PRO */}
          <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center border border-blue-200 hover:scale-105 transition-transform">
            <h4 className="text-2xl font-bold mb-4 text-blue-700">Pro</h4>
            <ul className="text-left space-y-2">
              <li><CheckIcon />Até 15 QRCODES nas mesas</li>
              <li><CheckIcon />Garçom Virtual</li>
              <li><CheckIcon />Pedidos integrados com sistema de gestão</li>
              <li><CheckIcon />Integração com sistema Delivery</li>
              <li><CheckIcon />Integração com WhatsApp</li>
              <li className="line-through opacity-60"><CheckIcon />Landing Page Personalizada</li>
              <li className="line-through opacity-60"><CheckIcon />Promoções Semanais</li>
            </ul>
            <p className="mt-6 text-xl font-semibold text-blue-700">12x de R$ 299,90</p>
          </div>

          {/* PREMIUM */}
          <div className="bg-blue-700 text-white rounded-3xl shadow-xl p-8 flex flex-col items-center hover:scale-105 transition-transform">
            <h4 className="text-2xl font-bold mb-4">Premium</h4>
            <ul className="text-left space-y-2">
              <li><CheckIcon />Até 50 QRCODES nas mesas</li>
              <li><CheckIcon />Garçom Virtual</li>
              <li><CheckIcon />Pedidos Integrados com sistema de gestão</li>
              <li><CheckIcon />Integração com sistema Delivery</li>
              <li><CheckIcon />Interação com WhatsApp</li>
              <li><CheckIcon />Landing Page Personalizada</li>
              <li><CheckIcon />Promoções Semanais</li>
            </ul>
            <a
              href="https://wa.me/5543998419973"
              target="_blank"
              className="mt-6 bg-green-500 hover:bg-green-400 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform"
            >
              Conversar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* SEÇÃO 5 — Quem Somos */}
      <section
        id="quem-somos-section"
        ref={quemSomosRef}
        className="min-h-[100vh] w-full flex flex-col items-center justify-center bg-gradient-to-b from-blue-900 to-blue-950 text-white py-20 px-8"
      >
        <h3 className="text-3xl font-bold mb-8 text-center">Quem Somos</h3>

        <div className="max-w-4xl text-justify text-blue-100 leading-relaxed text-lg space-y-6 mb-10">
          <p>
            A <strong>Micro Power UP</strong> é sua parceira estratégica na criação de soluções
            inteligentes que simplificam o dia a dia do seu negócio. Nossa missão é desenvolver
            sistemas práticos e personalizados, capazes de tornar sua rotina mais ágil, eficiente
            e livre da burocracia.
          </p>
          <p>
            Mais do que uma empresa de tecnologia, somos um time comprometido com o seu
            crescimento, oferecendo ferramentas que unem inovação e resultados reais.
          </p>
          <p>
            <strong>Junte-se a nós</strong> e potencialize suas ideias com tecnologia!
          </p>
        </div>

        <p className="text-blue-200 mb-6">
          <strong>contato@micropowerup.com.br</strong>
        </p>

        <a
          href="https://wa.me/5543998419973"
          target="_blank"
          className="bg-green-500 hover:bg-green-400 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform"
        >
          Conversar no WhatsApp
        </a>
      </section>
    </div>
  );
}

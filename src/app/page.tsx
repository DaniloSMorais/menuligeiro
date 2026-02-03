"use client";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  
  // Estado para os campos do formulário
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    restaurante: "",
  });

  const sobreRef = useRef<HTMLDivElement | null>(null);
  const planosRef = useRef<HTMLDivElement | null>(null);
  const quemSomosRef = useRef<HTMLDivElement | null>(null);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  // Função para enviar os dados via WhatsApp
  const handleWhatsAppClick = () => {
    const { nome, email, whatsapp, restaurante } = formData;
    
    // Validação simples
    if (!nome || !whatsapp) {
      alert("Por favor, preencha ao menos seu nome e WhatsApp.");
      return;
    }

    const mensagem = `Olá! Gostaria de solicitar o teste gratuito de 7 dias.%0A%0A` +
      `*Nome:* ${nome}%0A` +
      `*E-mail:* ${email}%0A` +
      `*WhatsApp:* ${whatsapp}%0A` +
      `*Restaurante:* ${restaurante}`;

    const url = `https://wa.me/5543998419973?text=${mensagem}`;
    window.open(url, "_blank");
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
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-cover bg-center"></div>
        </div>

        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-3xl text-center animate-fadeIn">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Economize mais de 
          </h1>
         <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
            R$ 65.000,00/ano com 
         </h1>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
            <span className="text-blue-300">Menu Ligeiro</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed">
            Tudo isso, sem levar em consideração a economia de tempo. 
            <br />
            
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => scrollToSection("videos-section")}
              className="bg-blue-600 hover:bg-blue-500 px-10 py-4 rounded-2xl text-lg font-semibold shadow-lg hover:scale-105 transition-all duration-300 w-56 hover:shadow-blue-400/40"
            >
              Veja na prática
            </button>

            <button
              onClick={() => scrollToSection("sobre-section")}
              className="bg-white text-blue-900 px-10 py-4 rounded-2xl text-lg font-semibold shadow-lg hover:bg-blue-100 hover:scale-105 transition-all duration-300 w-56"
            >
              Por que investir?
            </button>
          </div>
        </div>
      </div>
    {/* SEÇÃO 2 - Veja na prática nosso Atendente */}
      <section id="videos-section" className="py-20 bg-white w-full flex flex-col items-center border-t border-blue-100">
        <h3 className="text-3xl font-bold mb-12 text-blue-900 text-center px-4">
          Veja na prática nosso Atendente
        </h3>

        <div className="flex flex-col md:flex-row gap-12 md:gap-20 justify-center items-center w-full max-w-6xl px-4">
          
          {/* VÍDEO 01 — Atendimento Local */}
          <div className="flex flex-col items-center">
            <h4 className="text-xl font-semibold mb-6 text-blue-700">Atendimento Local</h4>
            {/* W-64 (256px) garante que a largura seja idêntica para ambos */}
            <div className="relative w-64 aspect-[9/16] bg-black rounded-[2.5rem] border-[8px] border-gray-900 shadow-2xl overflow-hidden">
              <video 
                className="absolute inset-0 w-full h-full object-cover"
                controls
                playsInline
                preload="metadata"
              >
                <source src="/videos/automacao.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
            </div>
          </div>

          {/* VÍDEO 02 — Atendimento Delivery */}
          <div className="flex flex-col items-center">
            <h4 className="text-xl font-semibold mb-6 text-blue-700">Atendimento Delivery</h4>
            <div className="relative w-64 aspect-[9/16] bg-black rounded-[2.5rem] border-[8px] border-gray-900 shadow-2xl overflow-hidden">
              <video 
                className="absolute inset-0 w-full h-full object-cover"
                controls
                playsInline
                preload="metadata"
              >
                <source src="/videos/delivery.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
            </div>
          </div>
        </div>
          <button
            onClick={() => scrollToSection("pedido-section")}
            className="mt-12 bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-2xl text-lg font-semibold shadow-lg hover:scale-105 transition-all duration-300 w-64 hover:shadow-blue-400/40"
          >
            Quero testar
          </button>
      </section>

      {/* SEÇÃO 3 — Conheça o Sistema */}
      <section
        id="sobre-section"
        ref={sobreRef}
        className={`min-h-[100vh] w-full flex flex-col items-center justify-center bg-gradient-to-b from-blue-800 to-blue-900 text-white py-20 px-8 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h3 className="text-3xl font-bold mb-8 text-center">Veja essa análise comparativa</h3>

        <div className="max-w-4xl text-justify text-blue-100 leading-relaxed text-lg space-y-4 mb-12">
          
        <div style={{ fontFamily: 'sans-serif', color: '#FFFFFF', maxWidth: '800px', padding: '20px' }}>
  
            {/* Seção de Contraste de Impacto */}
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '20px', 
              marginBottom: '30px',
              textAlign: 'center' 
            }}>
              {/* Card Custo Humano */}
              <div style={{ 
                flex: '1', 
                minWidth: '280px', 
                padding: '25px', 
                borderRadius: '12px', 
                backgroundColor: 'rgba(255, 77, 79, 0.1)', // Vermelho sutil de fundo
                border: '2px solid #FF4D4F' 
              }}>
                <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#FF7875', textTransform: 'uppercase' }}>Custos com Equipe (2026)</span>
                <h3 style={{ fontSize: '32px', margin: '10px 0', color: '#FF4D4F' }}>R$ 65.000,00</h3>
                <p style={{ fontSize: '14px', margin: 0, color: '#E0E6ED' }}>Custo médio anual para 2 colaboradores (Mesa + Delivery) com encargos.</p>
              </div>

              {/* Card Menu Ligeiro */}
              <div style={{ 
                flex: '1', 
                minWidth: '280px', 
                padding: '25px', 
                borderRadius: '12px', 
                backgroundColor: 'rgba(82, 196, 26, 0.1)', // Verde sutil de fundo
                border: '2px solid #52C41A',
                boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
              }}>
                <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#73D13D', textTransform: 'uppercase' }}>Com Menu Ligeiro</span>
                <h3 style={{ fontSize: '32px', margin: '10px 0', color: '#52C41A' }}>R$ 99,90/mês</h3>
                <p style={{ fontSize: '14px', margin: 0, color: '#E0E6ED' }}>Investimento mensal para automatizar as mesmas funções com IA.</p>
              </div>
            </div>

            {/* Texto de Venda com cores claras */}
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '20px', color: '#FFFFFF' }}>
              O <strong>Menu Ligeiro</strong> é a solução que transforma seu atendimento. Mais que um cardápio, somos um 
              <span style={{ color: '#40A9FF' }}> <strong>assistente de vendas com IA</strong></span> que substitui a necessidade de múltiplos atendentes, garantindo escala e precisão.
            </p>

            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
              <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#52C41A', marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
                <span style={{ color: '#E0E6ED' }}><strong style={{ color: '#FFFFFF' }}>Mesa e Delivery:</strong> Pedidos automáticos via QR Code ou link, operando 24/7 sem erros.</span>
              </li>
              <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#52C41A', marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
                <span style={{ color: '#E0E6ED' }}><strong style={{ color: '#FFFFFF' }}>IA que Vende:</strong> Sugestões inteligentes para aumentar seu ticket médio automaticamente.</span>
              </li>
              <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'flex-start' }}>
                <span style={{ color: '#52C41A', marginRight: '10px', fontSize: '1.2rem' }}>✔</span>
                <span style={{ color: '#E0E6ED' }}><strong style={{ color: '#FFFFFF' }}>Gestão Financeira:</strong> Controle total do seu faturamento em um sistema de retaguarda completo.</span>
              </li>
            </ul>

            <p style={{ 
              marginTop: '25px', 
              padding: '15px', 
              borderTop: '1px solid rgba(255,255,255,0.1)', 
              fontSize: '1.1rem', 
              textAlign: 'center',
              color: '#BAE7FF' 
            }}>
              <strong>Pare de queimar lucro com processos manuais. Foque no que importa: seu cliente.</strong>
            </p>
          </div>






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
            onClick={() => scrollToSection("videos-section")}
            className="mt-10 inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform"
          >
            Veja na prática
          </button>
        </section>
    
      {/* SEÇÃO 4 — Fazer Teste Gratuito */}
      <section
        id="pedido-section"
        className="min-h-[100vh] w-full flex flex-col items-center justify-center bg-white text-blue-900 rounded-t-3xl mt-10 py-16 shadow-inner"
      >
        <h3 className="text-3xl font-bold mb-8">Teste Gratuito por 7 dias</h3>
        <p className="text-lg max-w-2xl text-center mb-8">
          Você vai se <strong>surpreender</strong>!
        </p>
         <p className="text-lg max-w-2xl text-center mb-8">
           Preencha e aguarde as instruções
        </p>

        <div className="bg-blue-50 p-8 rounded-3xl shadow-xl w-full max-w-md space-y-5 border border-blue-200">
          <input
            type="text"
            placeholder="Nome Completo"
            value={formData.nome}
            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
            className="w-full bg-white border border-blue-300 rounded-xl p-3 text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-white border border-blue-300 rounded-xl p-3 text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            placeholder="WhatsApp"
            value={formData.whatsapp}
            onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
            className="w-full bg-white border border-blue-300 rounded-xl p-3 text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="text"
            placeholder="Nome do Restaurante"
            value={formData.restaurante}
            onChange={(e) => setFormData({ ...formData, restaurante: e.target.value })}
            className="w-full bg-white border border-blue-300 rounded-xl p-3 text-blue-900 placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button 
            onClick={handleWhatsAppClick}
            className="w-full bg-blue-600 hover:bg-blue-500 py-3 rounded-xl font-semibold text-white shadow-md hover:scale-105 transition-transform"
          >
            Enviar Dados
          </button>
        </div>
      </section>

      {/* SEÇÃO 5 — Planos */}
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
              <li><CheckIcon />Sistema de Delivery</li>
              <li className="line-through opacity-60"><CheckIcon />Integração com WhatsApp</li>
              <li className="line-through opacity-60"><CheckIcon />Landing Page Personalizada</li>
              <li className="line-through opacity-60"><CheckIcon />Promoções Semanais</li>
            </ul>
            <p className="mt-6 text-xl font-semibold text-blue-700 line-through opacity-60">R$ 199,90 / mês</p>
             <p className="mt-1 text-xl font-semibold text-blue-700">R$ 99,90 / mês</p>
          </div>

          {/* PRO */}
          <div className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center border border-blue-200 hover:scale-105 transition-transform">
            <h4 className="text-2xl font-bold mb-4 text-blue-700">Pro</h4>
            <ul className="text-left space-y-2">
              <li><CheckIcon />Até 15 QRCODES nas mesas</li>
              <li><CheckIcon />Garçom Virtual</li>
              <li><CheckIcon />Pedidos integrados com sistema de gestão</li>
              <li><CheckIcon />Sistema de Delivery</li>
              <li><CheckIcon />Integração com WhatsApp</li>
              <li className="line-through opacity-60"><CheckIcon />Landing Page Personalizada</li>
              <li className="line-through opacity-60"><CheckIcon />Promoções Semanais</li>
            </ul>
            <a
              href="https://wa.me/5543998419973"
              target="_blank"
              className="mt-6 bg-green-500 hover:bg-green-400 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform"
            >
              Consulte agora
            </a>
          </div>

          {/* PREMIUM */}
          <div className="bg-blue-700 text-white rounded-3xl shadow-xl p-8 flex flex-col items-center hover:scale-105 transition-transform">
            <h4 className="text-2xl font-bold mb-4">Premium</h4>
            <ul className="text-left space-y-2">
              <li><CheckIcon />Até 50 QRCODES nas mesas</li>
              <li><CheckIcon />Garçom Virtual</li>
              <li><CheckIcon />Pedidos Integrados com sistema de gestão</li>
              <li><CheckIcon />Sistema de Delivery</li>
              <li><CheckIcon />Interação com WhatsApp</li>
              <li><CheckIcon />Landing Page Personalizada</li>
              <li><CheckIcon />Promoções Semanais</li>
            </ul>
            <a
              href="https://wa.me/5543998419973"
              target="_blank"
              className="mt-6 bg-green-500 hover:bg-green-400 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform"
            >
              Consulte agora
            </a>
          </div>
        </div>
      </section>

 {/* SEÇÃO 6 — Quem Somos */}
      <section
        id="quem-somos-section"
        ref={quemSomosRef}
        className="min-h-[100vh] w-full flex flex-col items-center justify-center bg-gradient-to-b from-blue-900 to-blue-950 text-white py-20 px-8"
      >
        <h3 className="text-3xl font-bold mb-8 text-center">Quem Somos</h3>

        <div className="max-w-4xl text-justify text-blue-100 leading-relaxed text-lg space-y-6 mb-10">
          <p>
            A <strong>Micro Power UP</strong> nasceu com uma missão clara: potencializar pequenos e médios negócios com apoio da Inteligência Artificial e de aplicações de sofware.
          </p>
          <p>
            Nós não entregamos apenas software; entregamos <strong>liberdade e escala</strong>. Nossa especialidade é transformar operações caóticas em engrenagens automáticas de vendas, utilizando Inteligência Artificial para que você possa focar na estratégia, enquanto a tecnologia cuida da execução.
          </p>
          <p>
            <strong>Sua empresa não precisa ser gigante para ter uma gestão de elite.</strong> Com a Micro Power UP, você profissionaliza seu atendimento, elimina erros humanos e coloca o seu negócio no mesmo nível de competitividade das grandes redes.
          </p>
          <p className="text-center text-xl font-semibold text-white">
            Prepare-se para o próximo nível. O futuro do seu negócio começa agora.
          </p>
        </div>

        <a
          href="https://wa.me/5543998419973"
          target="_blank"
          className="bg-green-500 hover:bg-green-400 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform"
        >
          Conversar no WhatsApp
        </a>
      </section>

      {/* BOTÃO FLUTUANTE FIXO */}
      <a
        href="https://wa.me/5543998419973"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-400 hover:scale-110 transition-all duration-300 flex items-center justify-center group"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

    </div> // Div final que fecha o return principal
  );
}
export default function Buscar() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      <h2 className="text-3xl font-semibold mb-8 text-white drop-shadow-lg">
        Escolha onde deseja pedir
      </h2>

      <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-3xl shadow-2xl w-full max-w-md space-y-5 border border-white/20">
        <input
          type="text"
          placeholder="Escolha a cidade"
          className="w-full bg-transparent border border-white/30 rounded-xl p-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="text"
          placeholder="Digite o estabelecimento"
          className="w-full bg-transparent border border-white/30 rounded-xl p-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button className="w-full bg-blue-600 hover:bg-blue-500 py-3 rounded-xl font-semibold text-white shadow-md hover:scale-105 transition-transform">
          Buscar
        </button>
      </div>
    </div>
  );
}

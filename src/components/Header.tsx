import Link from "next/link"

export default function Header() {
  return (
    <header className="w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white py-4 shadow-md fixed top-0 z-50">
      <div className="flex justify-center items-center">
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-wide drop-shadow-md hover:text-blue-200 transition-colors"
        >
          Menu Ligeiro
        </Link>
      </div>
    </header>
  );
}

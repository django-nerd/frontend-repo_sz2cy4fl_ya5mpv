import { Home, MessageSquare, Users } from "lucide-react";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-emerald-950/70 border-b border-emerald-700/40">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 grid place-items-center rounded-md bg-gradient-to-br from-emerald-500 to-lime-400 shadow-inner shadow-emerald-900 border border-emerald-700">
            <span className="text-emerald-950 font-extrabold">⛏️</span>
          </div>
          <div>
            <h1 className="text-lg font-extrabold tracking-tight text-emerald-100">
              BlockTalk
            </h1>
            <p className="text-xs text-emerald-300/80 -mt-0.5">Minecraft community hub</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-emerald-100/90">
          <a href="#forum" className="hover:text-white flex items-center gap-2 text-sm">
            <Home size={18} /> Forum
          </a>
          <a href="#chat" className="hover:text-white flex items-center gap-2 text-sm">
            <MessageSquare size={18} /> Chat Roulette
          </a>
          <a href="#resources" className="hover:text-white flex items-center gap-2 text-sm">
            <Users size={18} /> Resources
          </a>
        </nav>

        <button className="px-3 py-1.5 rounded-md bg-emerald-600 hover:bg-emerald-500 text-emerald-50 text-sm font-medium border border-emerald-300/20 shadow">
          Sign In
        </button>
      </div>
    </header>
  );
}

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Forum from "./components/Forum";
import ChatRoulette from "./components/ChatRoulette";
import Resources from "./components/Resources";
import { LangProvider } from "./i18n";

export default function App() {
  return (
    <LangProvider>
      <div className="min-h-screen bg-[linear-gradient(180deg,#052e16,transparent_40%),linear-gradient(0deg,#000,transparent_20%)] bg-emerald-950 text-emerald-100">
        <NavBar />
        <Hero />
        <main className="space-y-2">
          <Forum />
          <ChatRoulette />
          <Resources />
        </main>
        <footer className="mt-12 border-t border-emerald-800/60 py-8 text-center text-emerald-300/80">
          Built with love by the BlockTalk community. Not affiliated with Mojang.
        </footer>
      </div>
    </LangProvider>
  );
}

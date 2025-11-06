import React from 'react';
import { LangProvider } from './i18n';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import ChatPreview from './components/ChatPreview';
import Resources from './components/Resources';

export default function App() {
  return (
    <LangProvider>
      <div className="min-h-screen flex flex-col bg-white text-gray-900">
        <NavBar />
        <main className="flex-1">
          <Hero />
          <ChatPreview />
          <Resources />
        </main>
        <footer className="py-10 border-t border-black/5">
          <div className="mx-auto max-w-6xl px-4 text-sm text-gray-600">© {new Date().getFullYear()} Vibe AI — Built with React and Tailwind.</div>
        </footer>
      </div>
    </LangProvider>
  );
}

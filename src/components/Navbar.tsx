import { useState } from 'react';
import { type Language, languageNames } from '../i18n';
import type { Translation } from '../i18n';

interface NavbarProps {
  t: Translation;
  language: Language;
  setLanguage: (lang: Language) => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export function Navbar({ t, language, setLanguage, darkMode, setDarkMode }: NavbarProps) {
  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const languages: Language[] = ['en', 'ps', 'hi', 'fa'];

  const navItems = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.features, href: '#features' },
    { label: t.nav.demo, href: '#demo' },
    { label: t.nav.architecture, href: '#architecture' },
    { label: t.nav.download, href: '#download' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-gray-950/80 border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <div>
              <span className="text-lg font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Safa AI
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-all"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-all"
              >
                <span>🌐</span>
                <span className="hidden sm:inline">{languageNames[language]}</span>
              </button>
              {langOpen && (
                <div className="absolute top-full mt-1 right-0 bg-gray-900 border border-gray-700 rounded-xl shadow-2xl py-1 min-w-[140px] z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => { setLanguage(lang); setLangOpen(false); }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-white/10 transition-colors ${
                        language === lang ? 'text-emerald-400' : 'text-gray-300'
                      }`}
                    >
                      {languageNames[lang]}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-all"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>

            {/* Mobile Menu */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5"
            >
              {mobileOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-gray-800 mt-2 pt-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-all"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

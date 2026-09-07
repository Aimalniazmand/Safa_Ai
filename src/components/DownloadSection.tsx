import type { Translation } from '../i18n';

interface DownloadProps {
  t: Translation;
  darkMode: boolean;
}

export function DownloadSection({ t, darkMode }: DownloadProps) {
  return (
    <section id="download" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-emerald-950/10 to-gray-950" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              {t.download.title}
            </span>
          </h2>
          <p className="text-lg text-gray-400">{t.download.subtitle}</p>
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700/50">
            <span className="text-sm text-gray-400">{t.download.version}</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>
        </div>

        {/* Download Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Windows Installer */}
          <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/30 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/5">
            <div className="text-4xl mb-4">🪟</div>
            <h3 className="text-xl font-bold text-white mb-2">{t.download.windows}</h3>
            <p className="text-sm text-gray-400 mb-6">
              Complete installer for Windows
            </p>
            <ul className="space-y-2 mb-6 text-sm text-gray-400">
              <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Desktop shortcut</li>
              <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Start menu entry</li>
              <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Auto-updates</li>
              <li className="flex items-center gap-2"><span className="text-emerald-400">✓</span> Uninstaller</li>
            </ul>
            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold hover:opacity-90 transition-all shadow-lg shadow-emerald-500/20">
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                SAFA-AI-Setup.exe
              </span>
            </button>
            <div className="mt-3 text-center text-xs text-gray-500">~150 MB</div>
          </div>

          {/* Portable */}
          <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/30 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5">
            <div className="text-4xl mb-4">📦</div>
            <h3 className="text-xl font-bold text-white mb-2">{t.download.portable}</h3>
            <p className="text-sm text-gray-400 mb-6">
              No-install portable version
            </p>
            <ul className="space-y-2 mb-6 text-sm text-gray-400">
              <li className="flex items-center gap-2"><span className="text-cyan-400">✓</span> USB drive ready</li>
              <li className="flex items-center gap-2"><span className="text-cyan-400">✓</span> No admin needed</li>
              <li className="flex items-center gap-2"><span className="text-cyan-400">✓</span> Self-contained</li>
              <li className="flex items-center gap-2"><span className="text-cyan-400">✓</span> All features</li>
            </ul>
            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:opacity-90 transition-all shadow-lg shadow-cyan-500/20">
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                SAFA-AI-Portable.zip
              </span>
            </button>
            <div className="mt-3 text-center text-xs text-gray-500">~200 MB</div>
          </div>

          {/* Source Code */}
          <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/30 hover:border-purple-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/5">
            <div className="text-4xl mb-4">💻</div>
            <h3 className="text-xl font-bold text-white mb-2">{t.download.source}</h3>
            <p className="text-sm text-gray-400 mb-6">
              Source code for development
            </p>
            <ul className="space-y-2 mb-6 text-sm text-gray-400">
              <li className="flex items-center gap-2"><span className="text-purple-400">✓</span> Full source code</li>
              <li className="flex items-center gap-2"><span className="text-purple-400">✓</span> Build scripts</li>
              <li className="flex items-center gap-2"><span className="text-purple-400">✓</span> Documentation</li>
              <li className="flex items-center gap-2"><span className="text-purple-400">✓</span> Tests included</li>
            </ul>
            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:opacity-90 transition-all shadow-lg shadow-purple-500/20">
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                GitHub Repository
              </span>
            </button>
            <div className="mt-3 text-center text-xs text-gray-500">Open Source</div>
          </div>
        </div>

        {/* System Requirements */}
        <div className="mt-16 p-6 rounded-2xl bg-gray-800/20 border border-gray-700/30">
          <h3 className="text-lg font-bold text-white mb-4 text-center">System Requirements</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-sm text-gray-400 mb-1">Operating System</div>
              <div className="text-white font-medium">Windows 10/11 (64-bit)</div>
            </div>
            <div>
              <div className="text-sm text-gray-400 mb-1">RAM</div>
              <div className="text-white font-medium">4 GB minimum (8 GB recommended)</div>
            </div>
            <div>
              <div className="text-sm text-gray-400 mb-1">Storage</div>
              <div className="text-white font-medium">500 MB free space</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

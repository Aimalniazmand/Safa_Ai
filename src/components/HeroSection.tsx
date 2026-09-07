import { type Language } from '../i18n';
import type { Translation } from '../i18n';

interface HeroProps {
  t: Translation;
  language: Language;
  darkMode: boolean;
}

export function HeroSection({ t, language, darkMode }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/30 via-gray-950 to-cyan-950/20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-emerald-400 text-sm font-medium">AI Connected</span>
        </div>

        {/* Title */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-6">
          <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            {t.hero.title}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-gray-300 mb-4 font-medium">
          {t.hero.subtitle}
        </p>

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.hero.description}
        </p>

        {/* Language Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {['🇦🇫 پښتو', '🇮🇳 हिन्दी', '🇦🇫 دری', '🇬🇧 English'].map((lang) => (
            <span key={lang} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 backdrop-blur-sm">
              {lang}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#download"
            className="group px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold text-lg shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all hover:scale-105"
          >
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              {t.hero.cta}
            </span>
          </a>
          <a
            href="#demo"
            className="px-8 py-4 rounded-xl border border-gray-600 text-gray-300 font-semibold text-lg hover:bg-white/5 hover:border-gray-500 transition-all"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>

        {/* App Preview */}
        <div className="mt-16 relative">
          <div className="mx-auto max-w-4xl rounded-2xl border border-gray-700/50 bg-gray-900/80 backdrop-blur-xl shadow-2xl overflow-hidden">
            {/* Window Chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-800/80 border-b border-gray-700/50">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-xs text-gray-400">Safa AI — MyProject</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-emerald-400">Online</span>
              </div>
            </div>
            {/* App Content Preview */}
            <div className="flex min-h-[300px] sm:min-h-[400px]">
              {/* Sidebar */}
              <div className="hidden sm:block w-48 bg-gray-800/50 border-r border-gray-700/50 p-3">
                <div className="space-y-1">
                  {['📊 Dashboard', '📁 Projects', '📝 Editor', '💻 Terminal', '🗄 Database', '🔀 Git', '🤖 Agent', '🎙 Voice', '⚙️ Settings'].map((item) => (
                    <div key={item} className="px-3 py-2 rounded-lg text-xs text-gray-400 hover:bg-white/5 hover:text-gray-200 cursor-pointer transition-colors">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              {/* Main Chat Area */}
              <div className="flex-1 flex flex-col p-4 sm:p-6">
                <div className="flex-1 space-y-4">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-white text-xs font-bold shrink-0">S</div>
                    <div className="bg-gray-800/50 rounded-xl rounded-tl-sm px-4 py-3 max-w-md">
                      <p className="text-sm text-gray-300">
                        {language === 'ps' ? 'سلام! زه صفا یم، ستاسو د کوډینګ مرستیال. څنګه کولای شم تاسو سره مرسته وکړم؟' :
                         language === 'hi' ? 'नमस्ते! मैं सफा हूं, आपकी कोडिंग सहायक। मैं आपकी कैसे मदद कर सकती हूं?' :
                         language === 'fa' ? 'سلام! من صفا هستم، دستیار کدنویسی شما. چطور می‌توانم کمکتان کنم؟' :
                         "Hello! I'm Safa, your coding assistant. How can I help you today?"}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 justify-end">
                    <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl rounded-tr-sm px-4 py-3 max-w-md">
                      <p className="text-sm text-gray-300">
                        {language === 'ps' ? 'زما لپاره یو Django project جوړ کړه.' :
                         language === 'hi' ? 'मेरे लिए एक Django project बनाओ।' :
                         language === 'fa' ? 'برای من یک پروژه Django بساز.' :
                         'Create a Django project for me.'}
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-gray-700 flex items-center justify-center text-gray-400 text-xs shrink-0">U</div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-white text-xs font-bold shrink-0">S</div>
                    <div className="bg-gray-800/50 rounded-xl rounded-tl-sm px-4 py-3 max-w-lg">
                      <p className="text-sm text-gray-300">
                        {language === 'ps' ? '✅ زه ستاسو لپاره یو بشپړ Django project جوړوم:' :
                         language === 'hi' ? '✅ मैं आपके लिए एक पूर्ण Django project बना रही हूं:' :
                         language === 'fa' ? '✅ من در حال ساخت یک پروژه Django کامل برای شما هستم:' :
                         "✅ I'm creating a complete Django project for you:"}
                      </p>
                      <div className="mt-2 space-y-1 text-xs text-gray-400">
                        <div>✓ Project structure</div>
                        <div>✓ Database models</div>
                        <div>✓ Authentication</div>
                        <div className="text-emerald-400">⟳ Installing dependencies...</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Input */}
                <div className="mt-4 flex items-center gap-2 p-2 rounded-xl bg-gray-800/50 border border-gray-700/50">
                  <button className="p-2 rounded-lg text-gray-400 hover:text-emerald-400 hover:bg-white/5 transition-colors">
                    🎙
                  </button>
                  <input
                    type="text"
                    placeholder={t.demo.placeholder}
                    className="flex-1 bg-transparent text-sm text-gray-300 placeholder-gray-500 outline-none px-2"
                    readOnly
                  />
                  <button className="px-4 py-2 rounded-lg bg-emerald-500 text-white text-sm font-medium hover:bg-emerald-600 transition-colors">
                    {t.demo.send}
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-blue-500/10 rounded-3xl blur-xl -z-10" />
        </div>
      </div>
    </section>
  );
}

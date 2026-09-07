import type { Translation } from '../i18n';

interface FooterProps {
  t: Translation;
  darkMode: boolean;
}

export function Footer({ t, darkMode }: FooterProps) {
  return (
    <footer className="relative border-t border-gray-800/50 bg-gray-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Safa AI
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              {t.footer.tagline}
            </p>
            <div className="flex gap-3 mt-4">
              {['GitHub', 'Twitter', 'Discord'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-8 h-8 rounded-lg bg-gray-800/50 border border-gray-700/50 flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all text-xs"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              {[
                { label: t.nav.home, href: '#home' },
                { label: t.nav.features, href: '#features' },
                { label: t.nav.demo, href: '#demo' },
                { label: t.nav.download, href: '#download' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-gray-400 hover:text-emerald-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">{t.footer.resources}</h4>
            <ul className="space-y-2">
              {['Documentation', 'API Reference', 'Changelog', 'License'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-400 hover:text-emerald-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">{t.footer.community}</h4>
            <ul className="space-y-2">
              {['GitHub Issues', 'Discord Server', 'Feature Requests', 'Bug Reports'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-400 hover:text-emerald-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">{t.footer.rights}</p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-gray-500">Made with ❤️ for developers worldwide</span>
          </div>
        </div>

        {/* Language Display */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-4 text-xs text-gray-600">
            <span>پښتو</span>
            <span>•</span>
            <span>हिन्दी</span>
            <span>•</span>
            <span>دری</span>
            <span>•</span>
            <span>English</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

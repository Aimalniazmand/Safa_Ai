import type { Translation } from '../i18n';

interface FeaturesProps {
  t: Translation;
  darkMode: boolean;
}

const featureIcons = [
  '🌍', '📝', '💻', '🤖', '🐛', '🔀',
  '🗄', '🎙', '📁', '🔐', '🧠', '📦'
];

export function FeaturesSection({ t, darkMode }: FeaturesProps) {
  return (
    <section id="features" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900/50 to-gray-950" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              {t.features.title}
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {t.features.subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {t.features.items.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-gray-800/30 border border-gray-700/30 hover:border-emerald-500/30 hover:bg-gray-800/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/5"
            >
              {/* Icon */}
              <div className="text-3xl mb-4">
                {featureIcons[index]}
              </div>
              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                {feature.title}
              </h3>
              {/* Description */}
              <p className="text-sm text-gray-400 leading-relaxed">
                {feature.description}
              </p>
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/0 to-cyan-500/0 group-hover:from-emerald-500/5 group-hover:to-cyan-500/5 transition-all duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { value: '4', label: 'Languages' },
            { value: '12+', label: 'Core Features' },
            { value: '∞', label: 'Code Possibilities' },
            { value: '🎙', label: 'Female Voice' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-2xl bg-gray-800/20 border border-gray-700/20">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

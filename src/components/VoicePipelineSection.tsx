import { useState } from 'react';
import { type Language, languageNames } from '../i18n';

interface VoicePipelineProps {
  darkMode: boolean;
}

export function VoicePipelineSection({ darkMode }: VoicePipelineProps) {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    { icon: '🎙', label: 'Microphone', desc: 'User speaks in any language' },
    { icon: '🔄', label: 'Speech-to-Text', desc: 'Convert audio to text' },
    { icon: '🌍', label: 'Language Detection', desc: 'Auto-detect language' },
    { icon: '🧠', label: 'Safa AI', desc: 'Process and understand' },
    { icon: '⚡', label: 'Action', desc: 'Execute or generate code' },
    { icon: '🔊', label: 'Text-to-Speech', desc: 'Female voice response' },
  ];

  const examples: Record<Language, string[]> = {
    en: [
      'Safa, open my project.',
      'Create a Django REST API.',
      'Find and fix errors in my code.',
      'Explain this function.',
    ],
    ps: [
      'صفا، زما پروژه خلاصه کړه.',
      'یو Django REST API جوړ کړه.',
      'زما په کوډ کې تېروتنې ومومه او سمه یې کړه.',
      'دا function راته تشریح کړه.',
    ],
    hi: [
      'सफा, मेरा project खोलो।',
      'एक Django REST API बनाओ।',
      'मेरे code में errors खोजो और ठीक करो।',
      'इस function को समझाओ।',
    ],
    fa: [
      'صفا، پروژه من را باز کن.',
      'یک Django REST API بساز.',
      'خطاهای کد من را پیدا و اصلاح کن.',
      'این function را توضیح بده.',
    ],
  };

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900/30 to-gray-950" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Voice Pipeline */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              🎙 Voice Pipeline
            </span>
          </h2>
          <p className="text-lg text-gray-400">Natural conversation in your language with female AI voice</p>
        </div>

        {/* Pipeline Steps */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 mb-12">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center gap-2 sm:gap-4">
              <button
                onClick={() => setActiveStep(i)}
                className={`flex flex-col items-center p-3 sm:p-4 rounded-xl transition-all duration-300 ${
                  activeStep === i
                    ? 'bg-emerald-500/10 border border-emerald-500/30 shadow-lg shadow-emerald-500/10'
                    : 'bg-gray-800/30 border border-gray-700/30 hover:border-gray-600/50'
                }`}
              >
                <span className="text-2xl sm:text-3xl mb-1">{step.icon}</span>
                <span className={`text-xs font-medium ${activeStep === i ? 'text-emerald-400' : 'text-gray-400'}`}>
                  {step.label}
                </span>
              </button>
              {i < steps.length - 1 && (
                <span className="text-gray-600 hidden sm:block">→</span>
              )}
            </div>
          ))}
        </div>

        {/* Active Step Detail */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gray-800/30 border border-gray-700/30">
            <span className="text-2xl">{steps[activeStep].icon}</span>
            <div className="text-left">
              <div className="text-sm font-semibold text-white">{steps[activeStep].label}</div>
              <div className="text-xs text-gray-400">{steps[activeStep].desc}</div>
            </div>
          </div>
        </div>

        {/* Language Examples */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-2">Natural Voice Commands</h3>
          <p className="text-sm text-gray-400">Speak naturally in any supported language</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {(Object.keys(examples) as Language[]).map((lang) => (
            <div key={lang} className="p-4 rounded-xl bg-gray-800/30 border border-gray-700/30">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">
                  {lang === 'en' ? '🇬🇧' : lang === 'ps' ? '🇦🇫' : lang === 'hi' ? '🇮🇳' : '🇦🇫'}
                </span>
                <span className="text-sm font-semibold text-white">{languageNames[lang]}</span>
                {(lang === 'ps' || lang === 'fa') && (
                  <span className="text-xs px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400">RTL</span>
                )}
              </div>
              <div className="space-y-2">
                {examples[lang].map((example, i) => (
                  <div key={i} className="text-xs text-gray-400 p-2 rounded-lg bg-gray-900/50 hover:bg-gray-900/80 transition-colors cursor-default">
                    "{example}"
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Voice Features */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { icon: '👩', label: 'Female Voice', desc: 'Natural female AI voice' },
            { icon: '🎚', label: 'Speed Control', desc: 'Adjustable speech rate' },
            { icon: '🔒', label: 'Privacy First', desc: 'No hidden recording' },
            { icon: '⌨️', label: 'Wake Word', desc: 'Optional voice activation' },
          ].map((feature) => (
            <div key={feature.label} className="p-4 rounded-xl bg-gray-800/20 border border-gray-700/20 text-center">
              <span className="text-2xl mb-2 block">{feature.icon}</span>
              <div className="text-sm font-medium text-white">{feature.label}</div>
              <div className="text-xs text-gray-500 mt-1">{feature.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

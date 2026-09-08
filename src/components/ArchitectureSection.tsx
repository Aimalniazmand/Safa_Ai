import type { Translation } from '../i18n';

interface ArchitectureProps {
  t: Translation;
  darkMode: boolean;
}

export function ArchitectureSection({ t, darkMode }: ArchitectureProps) {
  const layers = [
    {
      name: 'UI Layer',
      color: 'from-emerald-500 to-emerald-600',
      items: ['PySide6 Desktop UI', 'Chat Interface', 'Code Editor', 'Terminal', 'Settings'],
      icon: '🖥',
    },
    {
      name: 'AI Layer',
      color: 'from-cyan-500 to-cyan-600',
      items: ['Provider Manager', 'Context Engine', 'Memory System', 'Prompt Templates', 'Streaming'],
      icon: '🧠',
    },
    {
      name: 'Coding Engine',
      color: 'from-blue-500 to-blue-600',
      items: ['Code Generator', 'Analyzer', 'Debugger', 'Refactorer', 'Test Generator'],
      icon: '⚡',
    },
    {
      name: 'Agent System',
      color: 'from-purple-500 to-purple-600',
      items: ['Task Planner', 'Executor', 'Verifier', 'Multi-step Tasks', 'Approval System'],
      icon: '🤖',
    },
    {
      name: 'Voice Layer',
      color: 'from-pink-500 to-pink-600',
      items: ['Speech-to-Text', 'Text-to-Speech', 'Language Detection', 'Female Voice', 'Privacy Controls'],
      icon: '🎙',
    },
    {
      name: 'Infrastructure',
      color: 'from-orange-500 to-orange-600',
      items: ['SQLite Database', 'Security System', 'Permissions', 'Logging', 'File Manager'],
      icon: '🏗',
    },
  ];

  const techStack = [
    { name: 'Python 3.11+', category: 'Core' },
    { name: 'PySide6', category: 'Desktop UI' },
    { name: 'SQLite', category: 'Database' },
    { name: 'PyInstaller', category: 'Packaging' },
    { name: 'Inno Setup', category: 'Installer' },
    { name: 'OpenAI API', category: 'AI Provider' },
    { name: 'Ollama', category: 'Local AI' },
    { name: 'GitPython', category: 'Git' },
    { name: 'Whisper', category: 'STT' },
    { name: 'pyttsx3', category: 'TTS' },
    { name: 'asyncio', category: 'Async' },
    { name: 'pytest', category: 'Testing' },
  ];

  return (
    <section id="architecture" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900/50 to-gray-950" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              {t.architecture.title}
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {t.architecture.subtitle}
          </p>
        </div>

        {/* Architecture Layers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {layers.map((layer) => (
            <div
              key={layer.name}
              className="group relative p-6 rounded-2xl bg-gray-800/30 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{layer.icon}</span>
                <h3 className={`text-lg font-bold bg-gradient-to-r ${layer.color} bg-clip-text text-transparent`}>
                  {layer.name}
                </h3>
              </div>
              <div className="space-y-2">
                {layer.items.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-white mb-8">Technology Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="group px-4 py-3 rounded-xl bg-gray-800/30 border border-gray-700/30 hover:border-emerald-500/30 hover:bg-gray-800/50 transition-all duration-300"
              >
                <div className="text-sm font-medium text-gray-200 group-hover:text-emerald-400 transition-colors">
                  {tech.name}
                </div>
                <div className="text-xs text-gray-500 mt-0.5">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Directory Structure */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-white mb-8">Project Structure</h3>
          <div className="rounded-2xl bg-gray-900/80 border border-gray-700/50 p-6 overflow-x-auto">
            <pre className="text-sm text-gray-300 font-mono leading-relaxed">
{`SAFA-AI/
├── app/
│   ├── main.py
│   ├── core/          # Config, Logger, Security
│   ├── ai/            # Provider, Manager, Context, Memory
│   ├── coding/        # Generator, Analyzer, Debugger
│   ├── agents/        # Agent, Planner, Executor
│   ├── projects/      # Manager, Scanner, Workspace
│   ├── terminal/      # Executor, Security
│   ├── database/      # Database, Models, Repository
│   ├── git/           # Git Manager
│   ├── voice/         # STT, TTS, Languages
│   ├── i18n/          # en, ps, hi, fa translations
│   └── ui/            # MainWindow, Chat, Editor, Terminal
├── assets/            # Icons, Sounds, Images
├── tests/             # Unit & Integration tests
├── data/              # SQLite database
├── logs/              # Application logs
├── .env.example
├── requirements.txt
├── run.py
└── README.md`}
            </pre>
          </div>
        </div>

        {/* AI Providers */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-white mb-8">AI Provider Support</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'OpenAI', icon: '🟢' },
              { name: 'Anthropic', icon: '🟠' },
              { name: 'Google', icon: '🔵' },
              { name: 'Ollama', icon: '🟣' },
              { name: 'Local LLM', icon: '⚪' },
              { name: 'Custom API', icon: '🟡' },
            ].map((provider) => (
              <div key={provider.name} className="flex flex-col items-center p-4 rounded-xl bg-gray-800/30 border border-gray-700/30 hover:border-gray-600/50 transition-all">
                <span className="text-2xl mb-2">{provider.icon}</span>
                <span className="text-sm text-gray-300">{provider.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState, useRef, useEffect } from 'react';
import { type Language } from '../i18n';
import type { Translation } from '../i18n';

interface DemoProps {
  t: Translation;
  language: Language;
  darkMode: boolean;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
  code?: string;
  typing?: boolean;
}

const demoResponses: Record<Language, Record<string, { content: string; code?: string }>> = {
  en: {
    default: {
      content: "Hello! I'm Safa AI, your intelligent coding assistant. I can help you with code generation, debugging, project analysis, and much more. Try asking me to explain code, find errors, or create a new project!",
    },
    'create django': {
      content: "I'll create a complete Django project for you with proper structure, models, and views.",
      code: `# Django Project Structure
myproject/
├── manage.py
├── myproject/
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── app/
│   ├── models.py
│   ├── views.py
│   ├── urls.py
│   └── admin.py
└── requirements.txt

# models.py
from django.db import models

class Project(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.name`,
    },
    'explain': {
      content: "Let me explain this code step by step. This function takes a list of numbers and returns the average. It handles edge cases like empty lists and uses Python's built-in sum() and len() functions for efficiency.",
      code: `def calculate_average(numbers: list[float]) -> float:
    """
    Calculate the average of a list of numbers.
    
    Args:
        numbers: List of floating point numbers
        
    Returns:
        The arithmetic mean of the numbers
        
    Raises:
        ValueError: If the list is empty
    """
    if not numbers:
        raise ValueError("Cannot calculate average of empty list")
    return sum(numbers) / len(numbers)`,
    },
    'error': {
      content: "I've analyzed the error. The issue is a missing migration. Here's how to fix it:",
      code: `# Error: No migrations to apply
# Solution:

# 1. Create the migration
python manage.py makemigrations

# 2. Apply the migration  
python manage.py migrate

# 3. Verify
python manage.py showmigrations`,
    },
    'test': {
      content: "I'll generate comprehensive tests for your code using pytest:",
      code: `import pytest
from myapp.utils import calculate_average

class TestCalculateAverage:
    def test_normal_case(self):
        assert calculate_average([1, 2, 3, 4, 5]) == 3.0
    
    def test_single_value(self):
        assert calculate_average([42]) == 42.0
    
    def test_negative_numbers(self):
        assert calculate_average([-1, 0, 1]) == 0.0
    
    def test_empty_list_raises(self):
        with pytest.raises(ValueError):
            calculate_average([])
    
    def test_float_precision(self):
        result = calculate_average([1.1, 2.2, 3.3])
        assert abs(result - 2.2) < 0.001`,
    },
  },
  ps: {
    default: {
      content: 'سلام! زه صفا AI یم، ستاسو هوښیار کوډینګ مرستیال. زه کولای شم تاسو سره د کوډ جوړولو، ډیبګینګ، پروژې تحلیل او ډېرو نورو کې مرسته وکړم. هڅه وکړئ چې ما څخه کوډ تشریح، تېروتنې موندل، یا نوی پروژه جوړول وغواړئ!',
    },
    'create django': {
      content: 'زه به ستاسو لپاره یو بشپړ Django پروژه جوړه کړم د سم جوړښت، ماډلونو، او لیدونو سره.',
      code: `# د Django پروژې جوړښت
myproject/
├── manage.py
├── myproject/
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── app/
│   ├── models.py
│   ├── views.py
│   └── admin.py
└── requirements.txt

# models.py
from django.db import models

class Project(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)`,
    },
    'explain': {
      content: 'راځئ چې دا کوډ ګام په ګام تشریح کړم. دا فنکشن د شمیرو لیست اخلي او اوسط بیرته ورکوي. دا د خالي لیستونو په څیر حالتونه اداره کوي.',
      code: `def calculate_average(numbers: list[float]) -> float:
    """د شمیرو د لیست اوسط محاسبه کوي."""
    if not numbers:
        raise ValueError("د خالي لیست اوسط نشي محاسبه کیدی")
    return sum(numbers) / len(numbers)`,
    },
    'error': {
      content: 'ما تېروتنه تحلیل کړه. ستونزه ورکه مهاجرت ده. دلته د حل لاره ده:',
      code: `# تېروتنه: هیڅ مهاجرت نه شته
# حل:

python manage.py makemigrations
python manage.py migrate
python manage.py showmigrations`,
    },
    'test': {
      content: 'زه به ستاسو د کوډ لپاره بشپړ ازموینې جوړې کړم:',
      code: `import pytest
from myapp.utils import calculate_average

def test_normal():
    assert calculate_average([1, 2, 3]) == 2.0

def test_empty():
    with pytest.raises(ValueError):
        calculate_average([])`,
    },
  },
  hi: {
    default: {
      content: 'नमस्ते! मैं सफा AI हूं, आपकी बुद्धिमान कोडिंग सहायक। मैं कोड जनरेशन, डिबगिंग, प्रोजेक्ट एनालिसिस और बहुत कुछ में आपकी मदद कर सकती हूं।',
    },
    'create django': {
      content: 'मैं आपके लिए एक पूर्ण Django project बना रही हूं।',
      code: `# Django Project Structure
myproject/
├── manage.py
├── myproject/
│   ├── settings.py
│   └── urls.py
├── app/
│   ├── models.py
│   └── views.py
└── requirements.txt`,
    },
    'explain': {
      content: 'आइए इस code को चरणबद्ध तरीके से समझाएं।',
      code: `def calculate_average(numbers):
    """संख्याओं की औसत की गणना करता है।"""
    if not numbers:
        raise ValueError("खाली सूची")
    return sum(numbers) / len(numbers)`,
    },
    'error': {
      content: 'मैंने error का विश्लेषण किया है। समस्या missing migration है।',
      code: `python manage.py makemigrations
python manage.py migrate`,
    },
    'test': {
      content: 'मैं आपके code के लिए comprehensive tests बना रही हूं:',
      code: `import pytest

def test_average():
    assert calculate_average([1, 2, 3]) == 2.0`,
    },
  },
  fa: {
    default: {
      content: 'سلام! من صفا AI هستم، دستیار هوشمند کدنویسی شما. من می‌توانم در تولید کد، اشکال‌زدایی، تحلیل پروژه و خیلی چیزهای دیگر به شما کمک کنم.',
    },
    'create django': {
      content: 'من یک پروژه Django کامل برای شما می‌سازم.',
      code: `# ساختار پروژه Django
myproject/
├── manage.py
├── myproject/
│   ├── settings.py
│   └── urls.py
├── app/
│   ├── models.py
│   └── views.py
└── requirements.txt`,
    },
    'explain': {
      content: 'بیایید این کد را مرحله به مرحله توضیح دهیم.',
      code: `def calculate_average(numbers):
    """میانگین اعداد را محاسبه می‌کند."""
    if not numbers:
        raise ValueError("لیست خالی")
    return sum(numbers) / len(numbers)`,
    },
    'error': {
      content: 'خطا را تحلیل کردم. مشکل migration گمشده است.',
      code: `python manage.py makemigrations
python manage.py migrate`,
    },
    'test': {
      content: 'من تست‌های جامع برای کد شما می‌سازم:',
      code: `import pytest

def test_average():
    assert calculate_average([1, 2, 3]) == 2.0`,
    },
  },
};

function getResponse(message: string, lang: Language): { content: string; code?: string } {
  const lower = message.toLowerCase();
  const responses = demoResponses[lang];
  
  if (lower.includes('django') || lower.includes('project') || lower.includes('پروژه') || lower.includes('प्रोजेक्ट') || lower.includes('پروژه')) {
    return responses['create django'];
  }
  if (lower.includes('explain') || lower.includes('تشریح') || lower.includes('समझा') || lower.includes('توضیح')) {
    return responses['explain'];
  }
  if (lower.includes('error') || lower.includes('تېروتنه') || lower.includes('error') || lower.includes('خطا')) {
    return responses['error'];
  }
  if (lower.includes('test') || lower.includes('ازموین') || lower.includes('test') || lower.includes('تست')) {
    return responses['test'];
  }
  return responses['default'];
}

export function DemoSection({ t, language, darkMode }: DemoProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: getResponse('hello', language).content,
    },
  ]);
  const [input, setInput] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMsg: Message = { role: 'user', content: input.trim() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const response = getResponse(input, language);
      setMessages(prev => [...prev, { role: 'assistant', ...response }]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleSpeak = () => {
    setIsListening(!isListening);
    if (!isListening) {
      setTimeout(() => {
        setIsListening(false);
        const demoInputs: Record<Language, string> = {
          en: 'Create a Django project for me',
          ps: 'زما لپاره یو Django project جوړ کړه',
          hi: 'मेरे लिए Django project बनाओ',
          fa: 'برای من یک پروژه Django بساز',
        };
        setInput(demoInputs[language]);
      }, 2000);
    }
  };

  return (
    <section id="demo" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900/30 to-gray-950" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              {t.demo.title}
            </span>
          </h2>
          <p className="text-lg text-gray-400">{t.demo.subtitle}</p>
        </div>

        {/* Chat Interface */}
        <div className="rounded-2xl border border-gray-700/50 bg-gray-900/80 backdrop-blur-xl shadow-2xl overflow-hidden">
          {/* Chat Header */}
          <div className="flex items-center justify-between px-6 py-4 bg-gray-800/50 border-b border-gray-700/50">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-white text-xs font-bold">
                S
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Safa AI</div>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs text-emerald-400">Online</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-xs">
                {language === 'en' ? 'English' : language === 'ps' ? 'پښتو' : language === 'hi' ? 'हिन्दी' : 'دری'}
              </span>
            </div>
          </div>

          {/* Messages */}
          <div className="h-[400px] overflow-y-auto p-6 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                {msg.role === 'assistant' && (
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-white text-xs font-bold shrink-0">
                    S
                  </div>
                )}
                <div className={`max-w-lg ${
                  msg.role === 'user' 
                    ? 'bg-emerald-500/10 border border-emerald-500/20 rounded-xl rounded-tr-sm' 
                    : 'bg-gray-800/50 rounded-xl rounded-tl-sm'
                } px-4 py-3`}>
                  <p className="text-sm text-gray-200 leading-relaxed">{msg.content}</p>
                  {msg.code && (
                    <pre className="mt-3 p-3 rounded-lg bg-gray-950/80 border border-gray-700/50 overflow-x-auto">
                      <code className="text-xs text-emerald-300 font-mono whitespace-pre">{msg.code}</code>
                    </pre>
                  )}
                </div>
                {msg.role === 'user' && (
                  <div className="w-8 h-8 rounded-lg bg-gray-700 flex items-center justify-center text-gray-400 text-xs shrink-0">
                    U
                  </div>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-white text-xs font-bold shrink-0">
                  S
                </div>
                <div className="bg-gray-800/50 rounded-xl rounded-tl-sm px-4 py-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" />
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.1s' }} />
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.2s' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="px-4 pb-4 pt-2 border-t border-gray-700/50">
            <div className="flex items-center gap-2 p-2 rounded-xl bg-gray-800/50 border border-gray-700/50">
              <button
                onClick={handleSpeak}
                className={`p-2.5 rounded-lg transition-all ${
                  isListening 
                    ? 'bg-red-500/20 text-red-400 animate-pulse' 
                    : 'text-gray-400 hover:text-emerald-400 hover:bg-white/5'
                }`}
              >
                {isListening ? '🔴' : '🎙'}
              </button>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder={t.demo.placeholder}
                className="flex-1 bg-transparent text-sm text-gray-200 placeholder-gray-500 outline-none px-2"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="px-4 py-2.5 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-sm font-medium hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {t.demo.send}
              </button>
            </div>
            {isListening && (
              <div className="mt-2 text-center">
                <span className="text-xs text-red-400 animate-pulse">🔴 {t.demo.listening}</span>
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {[
            language === 'ps' ? 'دا code تشریح کړه' : language === 'hi' ? 'इस code को समझाओ' : language === 'fa' ? 'این کد را توضیح بده' : 'Explain this code',
            language === 'ps' ? 'تېروتنه ومومه' : language === 'hi' ? 'error खोजो' : language === 'fa' ? 'خطا را پیدا کن' : 'Find errors',
            language === 'ps' ? 'ازموینې جوړې کړې' : language === 'hi' ? 'tests बनाओ' : language === 'fa' ? 'تست بساز' : 'Generate tests',
            language === 'ps' ? 'Django project جوړ کړه' : language === 'hi' ? 'Django project बनाओ' : language === 'fa' ? 'پروژه Django بساز' : 'Create Django project',
          ].map((action) => (
            <button
              key={action}
              onClick={() => { setInput(action); }}
              className="px-3 py-1.5 rounded-full bg-gray-800/50 border border-gray-700/50 text-xs text-gray-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all"
            >
              {action}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

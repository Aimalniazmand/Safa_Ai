import { useState } from 'react';
import { type Language, languageNames } from '../i18n';

interface CodeShowcaseProps {
  darkMode: boolean;
}

export function CodeShowcaseSection({ darkMode }: CodeShowcaseProps) {
  const [activeTab, setActiveTab] = useState<Language>('en');
  
  const codeExamples: Record<Language, { command: string; response: string; code: string }> = {
    en: {
      command: 'Safa, create a FastAPI endpoint for user registration',
      response: "I'll create a secure FastAPI endpoint with validation and error handling:",
      code: `from fastapi import FastAPI, HTTPException, status
from pydantic import BaseModel, EmailStr
from datetime import datetime

app = FastAPI(title="User API")

class UserCreate(BaseModel):
    username: str
    email: EmailStr
    password: str

class UserResponse(BaseModel):
    id: int
    username: str
    email: str
    created_at: datetime

@app.post("/users/", response_model=UserResponse, 
          status_code=status.HTTP_201_CREATED)
async def create_user(user: UserCreate):
    # Validate and create user
    if len(user.password) < 8:
        raise HTTPException(
            status_code=400,
            detail="Password must be at least 8 characters"
        )
    
    # Create user in database
    new_user = {
        "id": 1,
        "username": user.username,
        "email": user.email,
        "created_at": datetime.utcnow()
    }
    return new_user`,
    },
    ps: {
      command: 'صفا، زما لپاره د FastAPI endpoint جوړ کړه د کارونکي ثبت لپاره',
      response: 'زه به یو خوندي FastAPI endpoint جوړ کړم د اعتبار او تېروتنې اداره کولو سره:',
      code: `from fastapi import FastAPI, HTTPException, status
from pydantic import BaseModel, EmailStr
from datetime import datetime

app = FastAPI(title="د کارونکي API")

class UserCreate(BaseModel):
    username: str
    email: EmailStr
    password: str

@app.post("/users/", status_code=status.HTTP_201_CREATED)
async def create_user(user: UserCreate):
    # د پاسورډ اعتبار
    if len(user.password) < 8:
        raise HTTPException(
            status_code=400,
            detail="پاسورډ باید لږ تر لږه ۸ حرفه وي"
        )
    
    # نوی کارونکی جوړ کړئ
    return {
        "id": 1,
        "username": user.username,
        "email": user.email,
        "created_at": datetime.utcnow()
    }`,
    },
    hi: {
      command: 'सफा, मेरे लिए user registration का FastAPI endpoint बनाओ',
      response: 'मैं validation और error handling के साथ एक सुरक्षित FastAPI endpoint बना रही हूं:',
      code: `from fastapi import FastAPI, HTTPException, status
from pydantic import BaseModel, EmailStr
from datetime import datetime

app = FastAPI(title="User API")

class UserCreate(BaseModel):
    username: str
    email: EmailStr
    password: str

@app.post("/users/", status_code=status.HTTP_201_CREATED)
async def create_user(user: UserCreate):
    # पासवर्ड validation
    if len(user.password) < 8:
        raise HTTPException(
            status_code=400,
            detail="पासवर्ड कम से कम 8 अक्षर का होना चाहिए"
        )
    
    # नया user बनाएं
    return {
        "id": 1,
        "username": user.username,
        "email": user.email,
        "created_at": datetime.utcnow()
    }`,
    },
    fa: {
      command: 'صفا، یک FastAPI endpoint برای ثبت نام کاربر بساز',
      response: 'من یک endpoint امن FastAPI با اعتبارسنجی و مدیریت خطا می‌سازم:',
      code: `from fastapi import FastAPI, HTTPException, status
from pydantic import BaseModel, EmailStr
from datetime import datetime

app = FastAPI(title="API کاربر")

class UserCreate(BaseModel):
    username: str
    email: EmailStr
    password: str

@app.post("/users/", status_code=status.HTTP_201_CREATED)
async def create_user(user: UserCreate):
    # اعتبارسنجی رمز عبور
    if len(user.password) < 8:
        raise HTTPException(
            status_code=400,
            detail="رمز عبور باید حداقل ۸ کاراکتر باشد"
        )
    
    # ایجاد کاربر جدید
    return {
        "id": 1,
        "username": user.username,
        "email": user.email,
        "created_at": datetime.utcnow()
    }`,
    },
  };

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900/50 to-gray-950" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              ⚡ Safa in Action
            </span>
          </h2>
          <p className="text-lg text-gray-400">See how Safa responds to coding requests in every language</p>
        </div>

        {/* Language Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {(Object.keys(codeExamples) as Language[]).map((lang) => (
            <button
              key={lang}
              onClick={() => setActiveTab(lang)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === lang
                  ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400'
                  : 'bg-gray-800/30 border border-gray-700/30 text-gray-400 hover:text-gray-200'
              }`}
            >
              {lang === 'en' ? '🇬🇧' : lang === 'ps' ? '🇦🇫' : lang === 'hi' ? '🇮🇳' : '🇦🇫'} {languageNames[lang]}
            </button>
          ))}
        </div>

        {/* Code Example */}
        <div className="rounded-2xl border border-gray-700/50 bg-gray-900/80 backdrop-blur-xl overflow-hidden">
          {/* User Command */}
          <div className="p-4 sm:p-6 border-b border-gray-700/50">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-gray-700 flex items-center justify-center text-gray-400 text-xs shrink-0">U</div>
              <div>
                <div className="text-xs text-gray-500 mb-1">User Command</div>
                <p className="text-sm text-gray-200">{codeExamples[activeTab].command}</p>
              </div>
            </div>
          </div>

          {/* Safa Response */}
          <div className="p-4 sm:p-6 border-b border-gray-700/50">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center text-white text-xs font-bold shrink-0">S</div>
              <div className="flex-1">
                <div className="text-xs text-gray-500 mb-1">Safa AI Response</div>
                <p className="text-sm text-gray-300 mb-4">{codeExamples[activeTab].response}</p>
                {/* Code Block */}
                <div className="rounded-xl bg-gray-950/80 border border-gray-700/50 overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 bg-gray-800/50 border-b border-gray-700/50">
                    <span className="text-xs text-gray-400">main.py</span>
                    <span className="text-xs text-gray-500">Python</span>
                  </div>
                  <pre className="p-4 overflow-x-auto">
                    <code className="text-xs text-emerald-300 font-mono whitespace-pre leading-relaxed">
                      {codeExamples[activeTab].code}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Status Bar */}
          <div className="px-4 sm:px-6 py-3 bg-gray-800/30 border-t border-gray-700/50 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-xs text-gray-400">Code generated successfully</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-500">UTF-8</span>
              <span className="text-xs text-gray-500">Python 3.11</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

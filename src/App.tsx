import { useState, useEffect } from 'react';
import { translations, isRTL, type Language } from './i18n';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { DemoSection } from './components/DemoSection';
import { VoicePipelineSection } from './components/VoicePipelineSection';
import { CodeShowcaseSection } from './components/CodeShowcaseSection';
import { ArchitectureSection } from './components/ArchitectureSection';
import { DownloadSection } from './components/DownloadSection';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';

function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [darkMode, setDarkMode] = useState(true);
  const t = translations[language];
  const rtl = isRTL(language);

  useEffect(() => {
    document.documentElement.dir = rtl ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, rtl]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'} transition-colors duration-300`}>
      <Navbar
        t={t}
        language={language}
        setLanguage={setLanguage}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <HeroSection t={t} language={language} darkMode={darkMode} />
      <FeaturesSection t={t} darkMode={darkMode} />
      <DemoSection t={t} language={language} darkMode={darkMode} />
      <CodeShowcaseSection darkMode={darkMode} />
      <VoicePipelineSection darkMode={darkMode} />
      <ArchitectureSection t={t} darkMode={darkMode} />
      <DownloadSection t={t} darkMode={darkMode} />
      <Footer t={t} darkMode={darkMode} />
    </div>
  );
}

export default App;

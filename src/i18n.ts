export type Language = 'en' | 'ps' | 'hi' | 'fa';

export interface Translation {
  nav: {
    home: string;
    features: string;
    demo: string;
    architecture: string;
    download: string;
    docs: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    cta: string;
    ctaSecondary: string;
  };
  features: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  demo: {
    title: string;
    subtitle: string;
    placeholder: string;
    send: string;
    speak: string;
    listening: string;
  };
  architecture: {
    title: string;
    subtitle: string;
  };
  download: {
    title: string;
    subtitle: string;
    windows: string;
    portable: string;
    source: string;
    version: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    resources: string;
    community: string;
    rights: string;
  };
}

export const translations: Record<Language, Translation> = {
  en: {
    nav: {
      home: 'Home',
      features: 'Features',
      demo: 'Live Demo',
      architecture: 'Architecture',
      download: 'Download',
      docs: 'Documentation',
    },
    hero: {
      title: 'Safa AI',
      subtitle: 'Your Intelligent Coding Partner',
      description: 'A professional multilingual AI coding assistant that understands Pashto, Hindi, Dari, and English. Code naturally in your language with a female AI voice.',
      cta: 'Download for Windows',
      ctaSecondary: 'Try Live Demo',
    },
    features: {
      title: 'Powerful Features',
      subtitle: 'Everything you need for professional development',
      items: [
        { title: 'Multilingual AI', description: 'Understands Pashto, Hindi, Dari, and English with automatic language detection.' },
        { title: 'Code Editor', description: 'Professional editor with syntax highlighting, IntelliSense, and AI-powered suggestions.' },
        { title: 'Integrated Terminal', description: 'Secure terminal with permission system and AI command suggestions.' },
        { title: 'AI Coding Agent', description: 'Multi-step task execution with planning, testing, and verification.' },
        { title: 'Debugging Engine', description: 'Analyze errors, find root causes, and suggest fixes automatically.' },
        { title: 'Git Assistant', description: 'Visual Git integration with safe operations and confirmation system.' },
        { title: 'Database Helper', description: 'Design databases, generate SQL, and manage migrations.' },
        { title: 'Female Voice', description: 'Natural female AI voice in all supported languages.' },
        { title: 'Project Manager', description: 'Analyze projects, manage files, and organize your workspace.' },
        { title: 'Security First', description: 'Permission system, command confirmation, and workspace restrictions.' },
        { title: 'Memory System', description: 'Context-aware AI that remembers your project and preferences.' },
        { title: 'Installable', description: 'Professional Windows installer with desktop shortcuts and auto-updates.' },
      ],
    },
    demo: {
      title: 'Try Safa AI',
      subtitle: 'Chat with Safa in any language',
      placeholder: 'Ask Safa anything...',
      send: 'Send',
      speak: 'Speak',
      listening: 'Listening...',
    },
    architecture: {
      title: 'Professional Architecture',
      subtitle: 'Built with modern technologies for reliability and performance',
    },
    download: {
      title: 'Download Safa AI',
      subtitle: 'Get started with the intelligent coding assistant',
      windows: 'Windows Installer',
      portable: 'Portable Version',
      source: 'Source Code',
      version: 'Version 1.0.0',
    },
    footer: {
      tagline: 'Intelligent Multilingual AI Coding Assistant',
      quickLinks: 'Quick Links',
      resources: 'Resources',
      community: 'Community',
      rights: '© 2026 Safa AI. All rights reserved.',
    },
  },
  ps: {
    nav: {
      home: 'کور',
      features: 'ځانګړتیاوې',
      demo: 'ژوندی امتحان',
      architecture: 'جوړښت',
      download: 'ډاونلوډ',
      docs: 'لاسوندونه',
    },
    hero: {
      title: 'صفا AI',
      subtitle: 'ستاسو هوښیار کوډینګ ملګری',
      description: 'یو مسلکي څو ژبنی AI کوډینګ مرستیال چې پښتو، هندي، دري، او انګلیسي پوهیږي. په خپله ژبه کې طبیعي کوډ وکړئ.',
      cta: 'د وینډوز لپاره ډاونلوډ',
      ctaSecondary: 'ژوندی امتحان',
    },
    features: {
      title: 'ځواکمنې ځانګړتیاوې',
      subtitle: 'هر څه چې تاسو د مسلکي پراختیا لپاره اړتیا لرئ',
      items: [
        { title: 'څو ژبنی AI', description: 'پښتو، هندي، دري، او انګلیسي پوهیږي او اتوماتیک ژبه پیژني.' },
        { title: 'کوډ ایډیټر', description: 'مسلکي ایډیټر د سینټیکس هایلایټینګ او AI وړاندیزونو سره.' },
        { title: 'یوځای ټرمینل', description: 'خوندي ټرمینل د اجازې سیسټم او AI کمانډ وړاندیزونو سره.' },
        { title: 'AI کوډینګ ایجنټ', description: 'د پلان کولو، ازموینې، او تصدیق سره څو ګامه دنده اجرا.' },
        { title: 'د ډیبګ انجن', description: 'تېروتنې تحلیل کړئ، اصلي لامل ومومئ، او سمون وړاندیز کړئ.' },
        { title: 'Git مرستیال', description: 'د خوندي عملیاتو او تایید سیسټم سره لید Git یوځای کول.' },
        { title: 'ډاټابیس مرستیال', description: 'ډاټابیس ډیزاین کړئ، SQL تولید کړئ، او مهاجرت مدیریت کړئ.' },
        { title: 'ښځینه غږ', description: 'طبیعي ښځینه AI غږ په ټولو ملاتړ شویو ژبو کې.' },
        { title: 'پروژه مدیر', description: 'پروژې تحلیل کړئ، فایلونه مدیریت کړئ، او کاري ځای تنظیم کړئ.' },
        { title: 'لومړی امنیت', description: 'د اجازې سیسټم، کمانډ تایید، او کاري ځای محدودیتونه.' },
        { title: 'حافظه سیسټم', description: 'د شرایطو پوه AI چې ستاسو پروژه او ترجیحات یادوي.' },
        { title: 'نصب کیدونکی', description: 'مسلکي وینډوز نصبونکی د ډیسکټاپ لنډلارو سره.' },
      ],
    },
    demo: {
      title: 'صفا AI امتحان کړئ',
      subtitle: 'له صفا سره په هرې ژبې خبرې وکړئ',
      placeholder: 'له صفا څخه هرڅه وپوښتئ...',
      send: 'ولېږه',
      speak: 'وغږیږه',
      listening: 'اورم...',
    },
    architecture: {
      title: 'مسلکي جوړښت',
      subtitle: 'د اعتماد او فعالیت لپاره د عصري ټیکنالوجیو سره جوړ شوی',
    },
    download: {
      title: 'صفا AI ډاونلوډ کړئ',
      subtitle: 'د هوښیار کوډینګ مرستیال سره پیل وکړئ',
      windows: 'وینډوز نصبونکی',
      portable: 'پورټ ایبل نسخه',
      source: 'سرچینه کوډ',
      version: 'نسخه ۱.۰.۰',
    },
    footer: {
      tagline: 'هوښیار څو ژبنی AI کوډینګ مرستیال',
      quickLinks: 'چټکې لینکونه',
      resources: 'سرچینې',
      community: 'ټولنه',
      rights: '© ۲۰۲۶ صفا AI. ټول حقونه خوندي دي.',
    },
  },
  hi: {
    nav: {
      home: 'होम',
      features: 'विशेषताएं',
      demo: 'लाइव डेमो',
      architecture: 'आर्किटेक्चर',
      download: 'डाउनलोड',
      docs: 'दस्तावेज़',
    },
    hero: {
      title: 'सफा AI',
      subtitle: 'आपका बुद्धिमान कोडिंग साथी',
      description: 'एक पेशेवर बहुभाषी AI कोडिंग सहायक जो पश्तो, हिंदी, दरी और अंग्रेजी समझता है। अपनी भाषा में स्वाभाविक रूप से कोड करें।',
      cta: 'Windows के लिए डाउनलोड करें',
      ctaSecondary: 'लाइव डेमो आज़माएं',
    },
    features: {
      title: 'शक्तिशाली विशेषताएं',
      subtitle: 'पेशेवर विकास के लिए आपको जो कुछ भी चाहिए',
      items: [
        { title: 'बहुभाषी AI', description: 'पश्तो, हिंदी, दरी और अंग्रेजी समझता है। स्वचालित भाषा पहचान।' },
        { title: 'कोड संपादक', description: 'सिंटेक्स हाइलाइटिंग और AI सुझावों के साथ पेशेवर संपादक।' },
        { title: 'एकीकृत टर्मिनल', description: 'अनुमति प्रणाली और AI कमांड सुझावों के साथ सुरक्षित टर्मिनल।' },
        { title: 'AI कोडिंग एजेंट', description: 'योजना, परीक्षण और सत्यापन के साथ बहु-चरण कार्य निष्पादन।' },
        { title: 'डिबगिंग इंजन', description: 'त्रुटियों का विश्लेषण करें, मूल कारण खोजें, और फिक्स सुझाएं।' },
        { title: 'Git सहायक', description: 'सुरक्षित संचालन और पुष्टि प्रणाली के साथ विज़ुअल Git एकीकरण।' },
        { title: 'डेटाबेस सहायक', description: 'डेटाबेस डिज़ाइन करें, SQL जनरेट करें, और माइग्रेशन प्रबंधित करें।' },
        { title: 'महिला आवाज़', description: 'सभी समर्थित भाषाओं में प्राकृतिक महिला AI आवाज़।' },
        { title: 'प्रोजेक्ट प्रबंधक', description: 'प्रोजेक्ट का विश्लेषण करें, फ़ाइलें प्रबंधित करें, और कार्यक्षेत्र व्यवस्थित करें।' },
        { title: 'सुरक्षा पहले', description: 'अनुमति प्रणाली, कमांड पुष्टि, और कार्यक्षेत्र प्रतिबंध।' },
        { title: 'मेमोरी सिस्टम', description: 'संदर्भ-सचेत AI जो आपके प्रोजेक्ट और प्राथमिकताओं को याद रखता है।' },
        { title: 'इंस्टॉल करने योग्य', description: 'डेस्कटॉप शॉर्टकट और ऑटो-अपडेट के साथ पेशेवर Windows इंस्टॉलर।' },
      ],
    },
    demo: {
      title: 'सफा AI आज़माएं',
      subtitle: 'किसी भी भाषा में सफा से बात करें',
      placeholder: 'सफा से कुछ भी पूछें...',
      send: 'भेजें',
      speak: 'बोलें',
      listening: 'सुन रहा हूं...',
    },
    architecture: {
      title: 'पेशेवर आर्किटेक्चर',
      subtitle: 'विश्वसनीयता और प्रदर्शन के लिए आधुनिक तकनीकों के साथ निर्मित',
    },
    download: {
      title: 'सफा AI डाउनलोड करें',
      subtitle: 'बुद्धिमान कोडिंग सहायक के साथ शुरुआत करें',
      windows: 'Windows इंस्टॉलर',
      portable: 'पोर्टेबल संस्करण',
      source: 'स्रोत कोड',
      version: 'संस्करण 1.0.0',
    },
    footer: {
      tagline: 'बुद्धिमान बहुभाषी AI कोडिंग सहायक',
      quickLinks: 'त्वरित लिंक',
      resources: 'संसाधन',
      community: 'समुदाय',
      rights: '© 2026 सफा AI। सर्वाधिकार सुरक्षित।',
    },
  },
  fa: {
    nav: {
      home: 'خانه',
      features: 'ویژگی‌ها',
      demo: 'نمایش زنده',
      architecture: 'معماری',
      download: 'دانلود',
      docs: 'مستندات',
    },
    hero: {
      title: 'صفا AI',
      subtitle: 'شریک هوشمند برنامه‌نویسی شما',
      description: 'یک دستیار برنامه‌نویسی AI چندزبانه حرفه‌ای که پشتو، هندی، دری و انگلیسی را می‌فهمد. به زبان خودتان به طور طبیعی کد بنویسید.',
      cta: 'دانلود برای ویندوز',
      ctaSecondary: 'نمایش زنده',
    },
    features: {
      title: 'ویژگی‌های قدرتمند',
      subtitle: 'هر آنچه برای توسعه حرفه‌ای نیاز دارید',
      items: [
        { title: 'AI چندزبانه', description: 'پشتو، هندی، دری و انگلیسی را می‌فهمد با تشخیص خودکار زبان.' },
        { title: 'ویرایشگر کد', description: 'ویرایشگر حرفه‌ای با هایلایت سینتکس و پیشنهادات AI.' },
        { title: 'ترمینال یکپارچه', description: 'ترمینال امن با سیستم مجوز و پیشنهادات دستور AI.' },
        { title: 'ایجنت کدنویسی AI', description: 'اجرای وظایف چندمرحله‌ای با برنامه‌ریزی، آزمایش و تأیید.' },
        { title: 'موتور اشکال‌زدایی', description: 'تحلیل خطاها، یافتن علت اصلی و پیشنهاد رفع.' },
        { title: 'دستیار Git', description: 'ادغام بصری Git با عملیات امن و سیستم تأیید.' },
        { title: 'کمک پایگاه داده', description: 'طراحی پایگاه داده، تولید SQL و مدیریت مهاجرت.' },
        { title: 'صدای زنانه', description: 'صدای طبیعی AI زنانه در تمام زبان‌های پشتیبانی شده.' },
        { title: 'مدیر پروژه', description: 'تحلیل پروژه‌ها، مدیریت فایل‌ها و سازماندهی فضای کاری.' },
        { title: 'امنیت در اولویت', description: 'سیستم مجوز، تأیید دستورات و محدودیت‌های فضای کاری.' },
        { title: 'سیستم حافظه', description: 'AI آگاه از زمینه که پروژه و ترجیحات شما را به یاد می‌آورد.' },
        { title: 'قابل نصب', description: 'نصب‌کننده حرفه‌ای ویندوز با میانبرهای دسکتاپ و به‌روزرسانی خودکار.' },
      ],
    },
    demo: {
      title: 'صفا AI را امتحان کنید',
      subtitle: 'به هر زبانی با صفا صحبت کنید',
      placeholder: 'هر چیزی از صفا بپرسید...',
      send: 'ارسال',
      speak: 'صحبت',
      listening: 'در حال گوش دادن...',
    },
    architecture: {
      title: 'معماری حرفه‌ای',
      subtitle: 'ساخته شده با فناوری‌های مدرن برای قابلیت اطمینان و عملکرد',
    },
    download: {
      title: 'صفا AI را دانلود کنید',
      subtitle: 'با دستیار کدنویسی هوشمند شروع کنید',
      windows: 'نصب‌کننده ویندوز',
      portable: 'نسخه پرتابل',
      source: 'کد منبع',
      version: 'نسخه ۱.۰.۰',
    },
    footer: {
      tagline: 'دستیار کدنویسی AI چندزبانه هوشمند',
      quickLinks: 'لینک‌های سریع',
      resources: 'منابع',
      community: 'جامعه',
      rights: '© ۲۰۲۶ صفا AI. تمامی حقوق محفوظ است.',
    },
  },
};

export const isRTL = (lang: Language): boolean => lang === 'ps' || lang === 'fa';

export const languageNames: Record<Language, string> = {
  en: 'English',
  ps: 'پښتو',
  hi: 'हिन्दी',
  fa: 'دری',
};

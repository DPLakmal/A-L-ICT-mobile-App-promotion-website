export interface SyllabusUnit {
  id: number;
  unitNumber: string;
  grade: 'Grade 12' | 'Grade 13';
  title: string;
  titleSi: string;
  description: string;
  topics: string[];
  color: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'ios' | 'android' | 'general';
}

export const APP_CONFIG = {
  name: 'Smartify - A/L ICT',
  shortName: 'Smartify',
  tagline: {
    en: 'Master Sri Lankan G.C.E. A/L ICT with Ease',
    si: 'අ.පො.ස. උ/පෙළ ICT විභාගය විශිෂ්ට ලෙස ජයගන්න',
    ta: 'க.பொ.த உ/த தகவல் தொழினுட்ப பரீட்சையை எளிதாக வெல்லுங்கள்',
  },
  subtitle: {
    en: 'The all-in-one companion for A/L ICT students: interactive MCQ quizzes, complete syllabus lessons, high-yield short notes, and 10+ years of past papers with marking schemes.',
    si: 'MCQ ප්‍රශ්නාවලි, 12 ශ්‍රේණිය සහ 13 ශ්‍රේණිය සම්පූර්ණ විෂය නිර්දේශ පාඩම්, කෙටි සටහන් සහ පසුගිය ප්‍රශ්න පත්‍ර සියල්ල එකම තැනකින්.',
    ta: 'வினாடி வினாக்கள், பாடத்திட்டம், குறுங்குறிப்புகள் மற்றும் கடந்த கால வினாத்தாள்கள் அனைத்தும் ஒரே செயலியில்.',
  },
  version: 'v1.0.1',
  downloads: {
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.entroop.alict',
    apkDirectUrl: '/downloads/Smartify-AL-ICT.apk',
    ipaDirectUrl: '/downloads/Smartify-AL-ICT.ipa',
    githubRepoUrl: 'https://github.com/DPLakmal/A-L-ICT-Mobile-Application-V2',
    iosSize: '38.4 MB',
    androidSize: '32.1 MB',
    updatedDate: 'November 2026',
    requirements: {
      android: 'Android 7.0 and up',
      ios: 'iOS 13.0 or later (iPhone & iPad)',
    },
  },
  stats: [
    { value: '12', label: 'Complete Units', labelSi: 'සම්පූර්ණ පාඩම් ඒකක', suffix: '' },
    { value: '1000', label: 'Practice MCQs', labelSi: 'MCQ පුහුණු ගැටලු', suffix: '+' },
    { value: '10', label: 'Years Past Papers', labelSi: 'වසරක පසුගිය ප්‍රශ්න පත්‍ර', suffix: '+' },
    { value: '100', label: 'Free for Students', labelSi: 'නොමිලේ අධ්‍යයනයට', suffix: '%' },
  ],
  modules: [
    {
      id: 'quizzes',
      title: 'Interactive Quizzes & MCQs',
      titleSi: 'ප්‍රශ්නාවලි සහ MCQ පුහුණුව',
      description: 'Exam-timed practice quizzes categorized by syllabus unit with instant answer validation, scoring, and step-by-step explanations.',
      color: '#4F46E5',
      badge: 'Real-time Grading',
    },
    {
      id: 'lessons',
      title: 'Complete 12-Unit Syllabus',
      titleSi: 'සම්පූර්ණ විෂය නිර්දේශය',
      description: 'Comprehensive lessons strictly aligned with the Sri Lankan NIE (National Institute of Education) curriculum for Grade 12 and 13.',
      color: '#0D9488',
      badge: 'NIE Aligned',
    },
    {
      id: 'shortnotes',
      title: 'Quick Revision Short Notes',
      titleSi: 'කෙටි සටහන් සහ සාරාංශ',
      description: 'High-yield memory summaries, logic gate truth tables, Python syntax cheat-sheets, and quick reference definitions for last-minute review.',
      color: '#D97706',
      badge: 'High Yield',
    },
    {
      id: 'pastpapers',
      title: 'Past Papers & Marking Schemes',
      titleSi: 'පසුගිය විභාග ප්‍රශ්න පත්‍ර',
      description: 'Official G.C.E. A/L examination papers from 2015 to 2024 with integrated high-definition PDF viewer and official answer schemes.',
      color: '#059669',
      badge: '2015-2024 Archive',
    },
  ],
  syllabus: [
    {
      id: 1,
      unitNumber: 'Unit 01',
      grade: 'Grade 12',
      title: 'Basic Concepts of ICT',
      titleSi: 'තොරතුරු සහ සන්නිවේදන තාක්ෂණයේ මූලික සංකල්ප',
      description: 'Data vs. Information, evolution of computing, characteristics of quality information, and ethical use of technology.',
      topics: ['Data vs Information', 'Information Systems', 'Classification of Computers', 'Ethical Issues in ICT'],
      color: 'from-blue-500 to-indigo-600',
    },
    {
      id: 2,
      unitNumber: 'Unit 02',
      grade: 'Grade 12',
      title: 'Evolution of Computing',
      titleSi: 'පරිගණකයේ පරිණාමය',
      description: 'Generations of computing devices from vacuum tubes to modern AI chips and quantum computing paradigms.',
      topics: ['First to Fifth Generations', 'Von Neumann Architecture', 'Microprocessors', 'Modern Trends'],
      color: 'from-indigo-500 to-purple-600',
    },
    {
      id: 3,
      unitNumber: 'Unit 03',
      grade: 'Grade 12',
      title: 'Data Representation & Number Systems',
      titleSi: 'දත්ත නිරූපණය සහ සංඛ්‍යා පද්ධති',
      description: 'Binary, Octal, Decimal, Hexadecimal conversions, Two’s Complement, Floating Point, and Character Encoding (ASCII, Unicode).',
      topics: ['Number Base Conversions', "Two's Complement Arithmetic", 'Floating Point Representation', 'Character Encoding'],
      color: 'from-purple-500 to-pink-600',
    },
    {
      id: 4,
      unitNumber: 'Unit 04',
      grade: 'Grade 12',
      title: 'Digital Logic & Boolean Algebra',
      titleSi: 'ඩිජිටල් තාර්කික පරිපථ සහ බූලීය වීජ ගණිතය',
      description: 'Fundamental and universal logic gates, Boolean laws, truth tables, Karnaugh Maps (K-Maps), and combinational logic circuits.',
      topics: ['Logic Gates (AND, OR, NOT, NAND, NOR)', 'Boolean Algebra Laws', 'K-Map Simplification', 'Half & Full Adders'],
      color: 'from-pink-500 to-rose-600',
    },
    {
      id: 5,
      unitNumber: 'Unit 05',
      grade: 'Grade 12',
      title: 'Operating Systems & System Software',
      titleSi: 'මෙහෙයුම් පද්ධති සහ පද්ධති මෘදුකාංග',
      description: 'OS architecture, process scheduling algorithms, memory paging, file system hierarchy, and peripheral management.',
      topics: ['Process Management & States', 'CPU Scheduling (FCFS, Round Robin)', 'Virtual Memory & Paging', 'File Systems'],
      color: 'from-emerald-500 to-teal-600',
    },
    {
      id: 6,
      unitNumber: 'Unit 06',
      grade: 'Grade 12',
      title: 'Data Communication & Computer Networks',
      titleSi: 'දත්ත සන්නිවේදනය සහ පරිගණක ජාල',
      description: 'OSI 7-Layer and TCP/IP models, transmission media, IP addressing (IPv4/IPv6), subnetting, and network security protocols.',
      topics: ['OSI & TCP/IP Reference Models', 'Transmission Media (UTP, Fiber, Wireless)', 'IPv4 Subnetting & CIDR', 'Network Security'],
      color: 'from-teal-500 to-cyan-600',
    },
    {
      id: 7,
      unitNumber: 'Unit 07',
      grade: 'Grade 13',
      title: 'Systems Analysis & Design (SAD)',
      titleSi: 'පද්ධති විශ්ලේෂණය සහ නිර්මාණය',
      description: 'Software Development Life Cycle (SDLC) models, Data Flow Diagrams (DFD), Entity-Relationship (ER) diagrams, and testing.',
      topics: ['SDLC Methodologies (Waterfall, Agile)', 'Context & Level 1 DFDs', 'ER Diagrams & Cardinality', 'Software Testing'],
      color: 'from-amber-500 to-orange-600',
    },
    {
      id: 8,
      unitNumber: 'Unit 08',
      grade: 'Grade 13',
      title: 'Database Management Systems (DBMS)',
      titleSi: 'දත්ත සමුදාය කළමනාකරණ පද්ධති',
      description: 'Relational database concepts, normalization (1NF, 2NF, 3NF), and structured querying with SQL (DDL, DML).',
      topics: ['Relational Model & Keys', 'Database Normalization', 'SQL DDL (CREATE, ALTER)', 'SQL DML (SELECT, JOIN)'],
      color: 'from-orange-500 to-red-600',
    },
    {
      id: 9,
      unitNumber: 'Unit 09',
      grade: 'Grade 13',
      title: 'Programming with Python',
      titleSi: 'පයිතන් ක්‍රමලේඛකරණය',
      description: 'Computational thinking, flowcharts, Python data types, control flow, functions, file handling, and algorithms.',
      topics: ['Variables & Data Types', 'Control Structures (if-else, loops)', 'Custom Functions & Scope', 'File I/O & Searching Algorithms'],
      color: 'from-blue-600 to-sky-500',
    },
    {
      id: 10,
      unitNumber: 'Unit 10',
      grade: 'Grade 13',
      title: 'Web Development (HTML/CSS/JS/PHP)',
      titleSi: 'වෙබ් අඩවි නිර්මාණය සහ සංවර්ධනය',
      description: 'Client-side web technologies (HTML5, CSS3, DOM scripting with JavaScript) and server-side backend integration with PHP.',
      topics: ['HTML5 Semantic Elements', 'CSS3 Layouts & Styling', 'JavaScript Client Validation', 'PHP Server-side Scripts'],
      color: 'from-cyan-500 to-blue-600',
    },
    {
      id: 11,
      unitNumber: 'Unit 11',
      grade: 'Grade 13',
      title: 'Internet of Things (IoT)',
      titleSi: 'අන්තර්ජාලගත දෑ (IoT)',
      description: 'IoT architecture, sensory components, microcontrollers (Arduino/Raspberry Pi), actuator control, and cloud IoT platforms.',
      topics: ['Sensors & Actuators', 'Microcontroller Interfacing', 'IoT Communication Protocols', 'Smart Home & Agriculture Use Cases'],
      color: 'from-violet-500 to-purple-700',
    },
    {
      id: 12,
      unitNumber: 'Unit 12',
      grade: 'Grade 13',
      title: 'ICT in Business & Emerging Trends',
      titleSi: 'ව්‍යාපාරික ක්ෂේත්‍රයේ ICT සහ නව ප්‍රවණතා',
      description: 'e-Commerce business models (B2B, B2C), digital payments, artificial intelligence, cloud computing, and cybersecurity laws.',
      topics: ['e-Commerce Models & Gateways', 'Cloud Service Models (IaaS, PaaS, SaaS)', 'Artificial Intelligence in Industry', 'Cyber Laws in Sri Lanka'],
      color: 'from-fuchsia-500 to-indigo-700',
    },
  ] as SyllabusUnit[],
  faqs: [
    {
      category: 'ios',
      question: 'How do I download and install Smartify on an iPhone or iPad?',
      answer: 'Since the iOS version is currently distributed directly while awaiting Apple App Store review, you can download the .ipa file directly from this site. You can install it on your iOS device in under 2 minutes using free student tools like Scarlet (no PC needed), AltStore, or Sideloadly. Click "iOS Install Guide" on the download card for our visual step-by-step tutorial!',
    },
    {
      category: 'ios',
      question: 'Is installing the iOS .ipa file safe?',
      answer: 'Yes! The .ipa package contains the exact same clean, verified Flutter application binary that is compiled for iOS. It requires no jailbreak and operates safely within iOS sandboxed security guidelines.',
    },
    {
      category: 'android',
      question: 'Can I install the app directly if I do not have Google Play Services?',
      answer: 'Absolutely. We provide both the official Google Play Store download link and a direct Android APK download file. Both give you the exact same full-featured app with automatic database updates.',
    },
    {
      category: 'general',
      question: 'Is Smartify completely free for students?',
      answer: 'Yes, 100% free! All 12 syllabus lessons, interactive MCQ quizzes, short notes, and past papers are made available at no cost to support Sri Lankan students preparing for their G.C.E. A/L examinations.',
    },
    {
      category: 'general',
      question: 'Does the app work without internet (offline)?',
      answer: 'Yes! Once downloaded, all short notes, curriculum summaries, and saved past papers are available offline so you can study uninterrupted anywhere.',
    },
    {
      category: 'general',
      question: 'Which languages are supported?',
      answer: 'The app natively supports English, Sinhala (සිංහල), and Tamil (தமிழ்), allowing you to study in the examination medium of your choice.',
    },
  ] as FAQItem[],
};

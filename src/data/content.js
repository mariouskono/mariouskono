import { Github, Linkedin, Instagram, Code, Database, Brain, Terminal, BarChart, Server } from 'lucide-react';

export const personalInfo = {
  name: "Bertnardo Mario Uskono",
  shortName: "Mario",
  role: "Machine Learning Engineer & Data Science Enthusiast",
  bio: "Final-year Computer Science student specializing in Informatics with a 3.85 GPA, offering a strong track record in Web Development and Applied Data Science. Distinction Graduate of the DBS Foundation Coding Camp and an Expert-Level Data Scientist alumnus from IDCamp. Proven expertise in engineering predictive models, Recommender Systems, and Computer Vision solutions. Adept at turning complex datasets into actionable digital products, combining rigorous academic research with hands-on industry experience in financial tech and data auditing.",
  email: "bertnardouskono@gmail.com",
  socials: [
    { name: "GitHub", url: "https://github.com/mariouskono", icon: Github },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/bertnardo-mario-uskono/", icon: Linkedin },
    { name: "Kaggle", url: "https://www.kaggle.com/bertnardomariouskono", icon: Code },
    { name: "HuggingFace", url: "https://huggingface.co/mariouskono", icon: Brain },
    { name: "Instagram", url: "https://www.instagram.com/mario.uskono/", icon: Instagram },
  ]
};

export const experiences = [
  {
    id: 1,
    role: "Web Development Specialist",
    company: "PT. BPR Sentral Mandiri (BSM)",
    period: "Mar 2026 - Present",
    description: [
      "Spearheaded the technical audit and complete redevelopment of the main BSM banking website infrastructure.",
      "Designed, built, and deployed custom web platforms for BSM's strategic partners, including Aureka and Popcorn.",
      "Managed end-to-end web development processes, focusing on responsive UI/UX design and robust front-end to back-end integration.",
      "Collaborated in a hybrid work environment to deliver high-quality digital solutions for the banking sector."
    ],
    technologies: ["Web Development", "Banking Infrastructure", "B2B Platforms", "Security"]
  },
  {
    id: 2,
    role: "Data Scientist",
    company: "IDCamp Indosat Ooredoo Hutchison",
    period: "Sep 2025 - Mar 2026",
    description: [
      "Progressed consistently through Basic, Beginner, and Intermediate levels to successfully graduate from the Expert-level Data Scientist learning path.",
      "Earned official certification in Fundamental Data Analysis (Intermediate) and Applied Data Science (Expert).",
      "Advanced theoretical knowledge by completing a specialized bonus curriculum in Mathematics for Data Science.",
      "Engaged in an intensive 7+ month remote internship focusing on real-world data science applications."
    ],
    technologies: ["Data Science", "Data Analytics", "Machine Learning", "Python"]
  },
  {
    id: 3,
    role: "Machine Learning Engineer",
    company: "DBS Foundation Coding Camp",
    period: "Feb 2025 - Jun 2025",
    description: [
      "Participated in a 5+ month intensive program combining technical AI mastery with professional development.",
      "Capstone Project (Nusabali): Developed a Bali tourism recommendation system using Collaborative & Content-Based Filtering.",
      "Built integrated data pipelines for geospatial feature processing and tourism reviews, alongside solution architecture design.",
      "Technical Competencies: Deep Learning, Computer Vision, NLP, SQL, Python, TensorFlow, Scikit-Learn.",
      "Soft Skills: Growth Mindset, Stress Management, Persuasive Communication, Personal Branding, and Financial Literacy."
    ],
    technologies: ["Machine Learning", "Data Analytics", "Python"]
  },
  {
    id: 4,
    role: "Bachelor of Computer Science, Informatics",
    company: "Bhayangkara Jakarta Raya University",
    period: "Sept 2022 - Present",
    description: [
      "Currently in the final year (8th semester), specializing in Data Science and Artificial Intelligence with a GPA of 3.85/4.00.",
      "Actively developing a final year project (skripsi) focused on Machine Learning implementations.",
      "Building strong fundamentals in Data Structures, Algorithms, Statistics, and Data Mining.",
      "Balancing academic excellence with professional portfolio development and industry-level certifications."
    ],
    technologies: ["Computer Science", "Informatics", "Data Science"]
  },
  {
    id: 5,
    role: "Intern ICT Division",
    company: "Polres Metro Bekasi Kota",
    period: "Feb 2025 - Mar 2025",
    description: [
      "Responsible for administrative and technical tasks within the Information and Communication Technology (ICT) division.",
      "Performed data entry, report drafting, and official correspondence management.",
      "Managed Wi-Fi network infrastructure and configured Zoom platforms for internal meetings.",
      "Provided technical support (Sound System, Visuals) for general meetings in the main hall."
    ],
    technologies: ["IT Support", "Networking", "Administration", "Communication"]
  },
  {
    id: 6,
    role: "Komsos Live Streaming Crew",
    company: "Seminari Menengah Roh Kudus Tuka Bali",
    period: "Jul 2020 - Aug 2022",
    description: [
      "Video Editor: Managed post-production (cutting, visual effects, grading, audio mixing) for documentation content.",
      "Broadcast Operator: Operated vMix and OBS Studio, audio mixers, and visual systems to ensure smooth live streaming.",
      "Cameraman & Photographer: Conducted live visual capture and photographic documentation with professional composition.",
      "Videographer: Planned video production with cinematic storyboards and shot lists."
    ],
    technologies: ["OBS Studio", "Video Editing", "Live Streaming", "Photography", "Audio Mixing"]
  }
];

export const skills = [
  { 
    name: "Python, SQL, Java, JS", 
    icon: Code, 
    category: "Languages" 
  },
  { 
    name: "TensorFlow, Keras, Scikit", 
    icon: Brain, 
    category: "Machine Learning" 
  },
  { 
    name: "API, ETL, MongoDB", 
    icon: Database, 
    category: "Data Engineering" 
  },
  { 
    name: "Docker, Flask, Git", 
    icon: Server, 
    category: "DevOps & Deployment" 
  },
  { 
    name: "Matplotlib, Seaborn, Plotly", 
    icon: BarChart, 
    category: "Visualization" 
  },
  { 
    name: "Indonesia & English", 
    icon: Terminal, 
    category: "Spoken Languages" 
  }
];

export const projects = [
    {
    id: 1,
    title: "FridgeToFeast: AI Culinary Vision",
    description: "An intelligent web application that uses state-of-the-art computer vision to detect available kitchen ingredients from images and instantly recommends optimal cooking recipes.",
    tech: ["YOLOv8", "Computer Vision", "FastAPI", "Tailwind CSS"],
    github: "https://github.com/mariouskono/fridge-to-feast",
    demo: "https://fridge-to-feast.netlify.app/",
    image: "https://images.unsplash.com/photo-1768690753301-4dd667e3f880?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    featured: true
  },
  {
    id: 2,
    title: "HomeHygn: Home Cleaning Service Platform",
    description: "A full-stack home cleaning service platform with a dual-interface architecture. Features a customer storefront with cart & order tracking, and an admin dashboard for managing employees, products, finances, and users.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    github: "https://github.com/mariouskono/home-hygene",
    demo: "https://homehygene.vercel.app/",
    image: "https://images.unsplash.com/photo-1646980241033-cd7abda2ee88?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    featured: true
  },
  {
    id: 3,
    title: "FloodZone AI: Intelligent Flood Segmentation",
    description: "Real-time flood mapping and instance segmentation at the edge using YOLOv8-Seg. Designed for disaster mitigation to precisely estimate flood areas via CCTV or drone footage.",
    tech: ["YOLOv8-Seg", "Computer Vision", "Flask", "Tailwind CSS"],
    github: "https://huggingface.co/spaces/mariouskono/floodzoneai/tree/main",
    demo: "https://mariouskono-floodzoneai.hf.space",
    image: "https://images.unsplash.com/photo-1604275689235-fdc521556c16?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    featured: true
  },
  {
    id: 4,
    title: "SlopeWatch AI: Landslide Early Warning",
    description: "Intelligent landslide detection system using YOLOv8 Nano and ONNX edge inference. Identifies microscopic soil cracks and anomalous slopes in real-time to prevent geological disasters.",
    tech: ["YOLOv8", "ONNX Edge AI", "Flask", "Tailwind CSS"],
    github: "https://huggingface.co/spaces/mariouskono/SlopeWatch/tree/main",
    demo: "https://mariouskono-slopewatch.hf.space",
    image: "https://images.unsplash.com/photo-1621315898086-0e940d7a221e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    featured: true
  },
  {
    id: 5,
    title: "Spotify Intelligent Recommender",
    description: "End-to-end music recommendation engine using Content-Based Filtering and Cosine Similarity. Features a Neural Network chatbot (TensorFlow) for intent-based discovery and robust API data pipelines.",
    tech: ["TensorFlow", "Docker", "Flask", "Spotipy"],
    github: "https://huggingface.co/spaces/mariouskono/spotify-recommender/tree/main",
    demo: "https://mariouskono-spotify-recommender.hf.space",
    image: "https://images.unsplash.com/photo-1611339555312-e607c8352fd7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    featured: true
  },
  {
    id: 6,
    title: "InfernoGuard: AI Fire & Smoke Detection",
    description: "Early Warning System powered by YOLOv8 to detect Fire and Smoke in real-time. Designed for forest and industrial disaster mitigation with high precision.",
    tech: ["YOLOv8", "Computer Vision", "Flask", "Tailwind CSS"],
    github: "https://huggingface.co/spaces/mariouskono-inferno-guard/tree/main",
    demo: "https://mariouskono-inferno-guard.hf.space",
    image: "https://images.unsplash.com/photo-1714731982147-b4f90eb827aa?q=80&w=1635&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    featured: true
  },
  {
    id: 7,
    title: "SafeGuard Vision: Human Hazard Detection",
    description: "Industrial safety monitoring system using YOLOv8 Object Detection. Identifies falls, walking, and sitting activities to prevent workplace accidents.",
    tech: ["YOLOv8", "Object Detection", "Safety Tech", "HuggingFace"],
    github: "https://huggingface.co/spaces/mariouskono-safeguard-vision/tree/main",
    demo: "https://mariouskono-safeguard-vision.hf.space",
    image: "https://plus.unsplash.com/premium_photo-1750167827386-59df44706b3b?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    featured: true
  },
  {
    id: 8,
    title: "StructuraGuard: Infrastructure Assessment",
    description: "Rapid structural health monitoring tool using MobileNetV2 (Transfer Learning). Detects concrete cracks with 99.8% accuracy for post-disaster assessment.",
    tech: ["TensorFlow", "MobileNetV2", "Transfer Learning", "Flask"],
    github: "https://huggingface.co/spaces/mariouskono-structura-guard/tree/main",
    demo: "https://mariouskono-structura-guard.hf.space",
    image: "https://images.unsplash.com/photo-1606362811767-c96ff375b3d9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    featured: true
  },
  {
    id: 9,
    title: "FitForm AI: Real-Time Yoga Correction",
    description: "Advanced Computer Vision system for real-time yoga posture analysis. Utilizing deep learning to provide instant biomechanical feedback, functioning as a virtual personal instructor to perfect your asana.",
    tech: ["Computer Vision", "Deep Learning", "Mediapipe", "HuggingFace"],
    github: "https://huggingface.co/spaces/mariouskono/fit-form/tree/main",
    demo: "https://mariouskono-fit-form.hf.space",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    featured: true
  },
  {
    id: 10,
    title: "Bogor Travel Recommender",
    description: "Travel recommendation system for Bogor area utilizing Content-Based Filtering and AutoEncoder architecture for personalized suggestions.",
    tech: ["Python", "AutoEncoder", "Content-Based", "HuggingFace"],
    github: "https://huggingface.co/spaces/mariouskono/bogor-travel/tree/main",
    demo: "https://mariouskono-bogor-travel.hf.space",
    image: "/assets/images/project-bogor.jpg",
    featured: true
  },
  {
    id: 11,
    title: "MNIST Digit Recognizer",
    description: "A classic Computer Vision application to recognize handwritten digits with high accuracy using Convolutional Neural Networks (CNN).",
    tech: ["Deep Learning", "CNN", "Computer Vision"],
    github: "https://huggingface.co/spaces/mariouskono/mnist-digit-recognizer/tree/main",
    demo: "https://mariouskono-mnist-digit-recognizer.hf.space",
    image: "/assets/images/project-mnist.jpg",
    featured: true
  },
  {
    id: 12,
    title: "Nusa Bali Tourism Recommender",
    description: "Capstone Project for DBS Foundation. Built a comprehensive recommendation system for Bali tourism with web scraping and backend integration.",
    tech: ["TensorFlow", "Recommender System", "Web Scraping"],
    github: "https://github.com/mariouskono/nusabalifix",
    demo: "https://tiny-faun-d9a27c.netlify.app/",
    image: "/assets/images/project-bali.jpg",
    featured: true
  },
  {
    id: 13,
    title: "OVO App Sentiment Analysis",
    description: "Analyzed user reviews to understand customer perception using Random Forest (93% Train Acc) and Decision Tree.",
    tech: ["NLP", "Random Forest", "Sentiment Analysis"],
    github: "https://github.com/mariouskono",
    demo: null,
    image: "/assets/images/project-ovo.jpg",
    featured: false
  },
  {
    id: 14,
    title: "Income Survey Analysis",
    description: "Conducted clustering (K-Means) and classification to identify income patterns and anomalies for data cleaning.",
    tech: ["K-Means", "Clustering", "Scikit-Learn"],
    github: "https://github.com/mariouskono",
    demo: null,
    image: "/assets/images/project-income.jpg",
    featured: false
  },
  {
    id: 15,
    title: "Scalable ML Pipelines & Database Integration",
    description: "Implemented robust data ingestion workflows using SQL, NoSQL, and Cloud Database. Integrated deep learning pipelines with TensorFlow for scalable experimentation.",
    tech: ["SQL", "No-SQL", "CloudDB", "TensorFlow"],
    github: "https://github.com/mariouskono/Database-Deep-Learning",
    demo: null,
    image: "/assets/images/project-ml-dm.jpg",
    featured: false
  },

];

const certBaseUrl = "https://www.dicoding.com/certificates/";

export const certificates = [
  { title: "Belajar Matematika untuk Data Science", id: "L4PQ9Q34OPO1", date: "Mar 2026 - 2029" },
  { title: "Belajar Penerapan Data Science", id: "N9ZON5LQRXG5", date: "Mar 2026 - 2029" },
  { title: "Introduction to Financial Literacy", id: "EYX4QY415PDL", date: "Dec 2025 - 2028" },
  { title: "Belajar Fundamental Deep Learning", id: "", date: "Apr 2025 - 2028" },
  { title: "Belajar Fundamental Analisis Data", id: "07Z6JN8O2XQR", date: "Jan 2026 - 2029" },
  { title: "Belajar Machine Learning untuk Pemula", id: "81P25571NPOY", date: "Okt 2025 - 2028" },
  { title: "Memulai Pemrograman dengan Python", id: "4EXG3VRMDZRL", date: "Okt 2025 - 2028" },
  { title: "Belajar Dasar Structured Query Language (SQL)", id: "53XEKD3QKXRN", date: "Okt 2025 - 2028" },
  { title: "Belajar Dasar AI", id: "N9ZO2Y0V6PG5", date: "Okt 2025 - 2028" },
  { title: "Belajar Dasar Data Science", id: "72ZDKK79VPYW", date: "Okt 2025 - 2028" },
  { title: "Belajar Penggunaan Generative AI", id: "GRX53V84YZ0M", date: "Jun 2025 - 2028" },
  { title: "AI Praktis untuk Produktivitas", id: "JMZVE68YRPN9", date: "Jun 2025 - 2028" },
  { title: "Machine Learning Terapan", id: "72ZD5G3RLZYW", date: "Mei 2025 - 2028" },
  { title: "Belajar Fundamental Pemrosesan Data", id: "MEPJQ7N3WX3V", date: "Mei 2025 - 2028" },
  { title: "Belajar Pengembangan Machine Learning", id: "6RPNR2529X2M", date: "Apr 2025 - 2028" },
  { title: "Financial Literacy 101", id: "JLX196Q6NP72", date: "Apr 2025 - 2028" },
  { title: "Belajar Dasar Visualisasi Data", id: "QLZ9398L2Z5D", date: "Feb 2025 - 2028" },
  { title: "Belajar Dasar Git dengan GitHub", id: "RVZKW09DQZD5", date: "Feb 2025 - 2028" },
  { title: "Pengenalan ke Logika Pemrograman (Programming Logic 101)", id: "JLX19V0M5P72", date: "Feb 2025 - 2028" },
  { title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software", id: "GRX53WN73Z0M", date: "Feb 2025 - 2028" },
  { 
    title: "Deep Learning Fundamentals", 
    id: "5319b4c5394c4c7a8ba9cdb973cb80cb", 
    date: "Nov 2025", 
    issuer: "Cognitive Class",
    url: "https://courses.cognitiveclass.ai/certificates/5319b4c5394c4c7a8ba9cdb973cb80cb" 
  }
].map(cert => ({
  ...cert,
  issuer: cert.issuer || "Dicoding Indonesia",
  link: cert.url || `${certBaseUrl}${cert.id}`
}));
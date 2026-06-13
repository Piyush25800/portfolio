export const profile = {
  name: "Piyush",
  role: "Data Analyst · Data Scientist · AI Engineer · Prompt Engineer",
  tagline: "From raw data to intelligent systems — I turn numbers into narratives, models into products, and AI into impact.",
  email: "bhajikhayepiyush93@gmail.com",
  resumeUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/Piyush25800",
    linkedin: "https://www.linkedin.com/in/piyushs-bhajikhaye/",
    twitter: "https://x.com/PiyushB93",
    email: "mailto:bhajikhayepiyush93@gmail.com",
  },
};

export const typedRoles = [
  "Data Analyst",
  "Data Scientist",
  "AI Engineer",
  "Prompt Engineer",
];

export const stats = [
  { label: "Projects Completed", value: 10 },
  { label: "Technologies Learned", value: 25 },
  { label: "Certifications", value: 6 },
  { label: "Internships", value: 4 },
];

export const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", level: 95, icon: "python" },
      { name: "SQL", level: 90, icon: "mysql" },
    ],
  },
  {
    title: "Data Analytics",
    skills: [
      { name: "Excel", level: 90, icon: "excel" },
      { name: "Pandas", level: 95, icon: "pandas" },
      { name: "NumPy", level: 92, icon: "numpy" },
      { name: "Statistics", level: 85, lucide: "sigma" },
      { name: "Power Query", level: 88, lucide: "filter" },
      { name: "Data Cleaning", level: 90, lucide: "brush" },
    ],
  },
  {
    title: "Machine Learning",
    skills: [
      { name: "Scikit-Learn", level: 92, icon: "scikitlearn" },
      { name: "Regression", level: 88, lucide: "trending-up" },
      { name: "Classification", level: 88, lucide: "layers" },
      { name: "Feature Engineering", level: 90, lucide: "settings-2" },
    ],
  },
  {
    title: "Visualization Tools",
    skills: [
      { name: "Power BI", level: 90, icon: "powerbi" },
      { name: "Matplotlib", level: 90, icon: "matplotlib" },
      { name: "Seaborn", level: 88, icon: "seaborn" },
      { name: "Plotly", level: 85, icon: "plotly" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", level: 88, icon: "mysql" },
      { name: "MongoDB", level: 78, icon: "mongodb" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "Streamlit", level: 90, icon: "streamlit" },
      { name: "LangChain", level: 75, icon: "langchain" },
      { name: "Ollama", level: 70, icon: "ollama" },
    ],
  },
  {
    title: "Cloud & Tools",
    skills: [
      { name: "Git", level: 92, icon: "git" },
      { name: "GitHub", level: 92, icon: "github" },
      { name: "Jupyter Notebook", level: 90, icon: "jupyter" },
      { name: "Google Colab", level: 88, icon: "googlecolab" },
      { name: "VS Code", level: 85, icon: "vscode" },
      { name: "n8n", level: 75, icon: "n8n" },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "HTML", level: 90, icon: "html5" },
      { name: "CSS", level: 88, icon: "css" },
      { name: "JavaScript", level: 85, icon: "javascript" },
    ],
  },
];

import crimeDashboardImg from "@/assets/project-crime-dashboard.jpg";
import mdhSpiceImg from "@/assets/project-mdh-spice.jpg";
import rbiFinancialImg from "@/assets/project-rbi-financial.jpg";
import synapseosImg from "@/assets/project-synapseos.jpg";
import influencerIntelligenceImg from "@/assets/project-influencer-intelligence.jpg";
import contentCalendarImg from "@/assets/project-content-calendar.jpg";

export type Project = {
  title: string;
  description: string;
  category: "Data Analysis" | "Machine Learning" | "AI" | "Dashboard" | "Real-time Analytics";
  tech: string[];
  features: string[];
  github: string;
  demo: string;
  gradient: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Crime Analysis Dashboard",
    description:
      "Interactive analytics dashboard uncovering crime patterns across India through visual storytelling and trend analysis.",
    category: "Data Analysis",
    tech: ["Power BI", "DAX", "Power Query", "Data Analytics", "Visualization"],
    features: [
      "Identified high-risk states and crime hotspots",
      "Analyzed year-wise trends and crime distribution",
      "Generated insights using DAX and interactive visualizations",
    ],
    github: "https://github.com/Piyush25800/crime-analysis-dashboard-PowerBI",
    demo: "#",
    gradient: "from-violet-500/30 to-cyan-500/30",
    image: crimeDashboardImg,
  },
  {
    title: "MDH Spice Production & Export Analysis",
    description:
      "Industry-level analytics on Indian spice production and exports, surfacing supply risk, market concentration, and growth potential.",
    category: "Data Analysis",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    features: [
      "Analyzed production efficiency and potential gaps",
      "Assessed export concentration across global markets",
      "Generated business insights through EDA and visualization",
    ],
    github: "https://github.com/Piyush25800/MDH_Spice_Data_Analysis",
    demo: "#",
    gradient: "from-amber-500/30 to-rose-500/30",
    image: mdhSpiceImg,
  },
  {
    title: "RBI Financial Market Intelligence Dashboard",
    description:
      "Transformed RBI financial market turnover data to reveal market dynamics, volatility trends, and macroeconomic event impacts.",
    category: "Data Analysis",
    tech: ["Python", "Pandas", "Plotly", "NumPy", "Financial Analytics"],
    features: [
      "Assessed market performance using trend and volatility analysis",
      "Explored correlations across financial market segments",
      "Built interactive visualizations for business and economic insights",
    ],
    github: "https://github.com/Piyush25800/RBI-Financial-Market-Analysis",
    demo: "#",
    gradient: "from-emerald-500/30 to-cyan-500/30",
    image: rbiFinancialImg,
  },
  {
    title: "SynapseOS – Multi-Agent AI Platform",
    description:
      "Designed and developed a scalable Multi-Agent AI platform capable of contextual research, intelligent workflow routing, and roadmap generation using local LLM infrastructure.",
    category: "AI",
    tech: ["Python", "FastAPI", "LangChain", "Ollama", "n8n"],
    features: [
      "Built collaborative AI agents with automated task routing",
      "Engineered backend APIs and workflow orchestration pipelines",
      "Implemented vector memory foundations for future RAG capabilities",
    ],
    github: "https://github.com/Piyush25800/SynapseOS-Multi-Agent-AI-Roadmap-Research-Assistant",
    demo: "#",
    gradient: "from-cyan-500/30 to-violet-500/30",
    image: synapseosImg,
  },
  {
    title: "Influencer Collaboration Intelligence Platform",
    description:
      "Designed and developed a machine learning-driven influencer intelligence system that transforms social media data into actionable insights for partnership discovery, lead scoring, and campaign optimization.",
    category: "Machine Learning",
    tech: ["Python", "Scikit-Learn", "NumPy", "Pandas", "Streamlit", "Power BI"],
    features: [
      "Built predictive models to identify high-impact influencer collaborations",
      "Implemented influencer scoring, segmentation, and recommendation workflows",
      "Created interactive dashboards and web applications for decision support",
    ],
    github: "https://github.com/Piyush25800",
    demo: "#",
    gradient: "from-pink-500/30 to-violet-500/30",
    image: influencerIntelligenceImg,
  },
  {
    title: "Content Calendar Intelligence Platform",
    description:
      "Built a data-driven content intelligence platform that transforms social media performance data into actionable marketing insights. Leveraged machine learning and analytics to predict post performance and recommend the best content type, platform, posting time, and hashtags for maximum reach and engagement.",
    category: "Machine Learning",
    tech: ["Python", "Scikit-Learn", "NumPy", "Pandas", "Streamlit", "Power BI"],
    features: [
      "Achieved 85%+ prediction accuracy using ML classification models",
      "Built analytics dashboards to identify top-performing content patterns",
      "Developed an intelligent recommendation system for content planning and optimization",
    ],
    github: "https://github.com/Piyush25800",
    demo: "#",
    gradient: "from-amber-500/30 to-emerald-500/30",
    image: contentCalendarImg,
  },
];

export const projectCategories = [
  "All",
  "Data Analysis",
  "Machine Learning",
  "AI",
] as const;

export const experience = [
  {
    role: "Data Science & Analytics Intern",
    company: "Graphura India Pvt. Ltd.",
    period: "Dec 2025 – Mar 2026",
    points: [
      "Built AI/ML-based analytics and prediction systems with 90%+ model accuracy",
      "Developed Influencer Collaboration & Partnership Intelligence and Content Calendar Intelligence models using Python & Scikit-learn",
      "Created data-driven dashboards and Streamlit web applications for business insights and recommendations",
    ],
    tech: ["Python", "Excel", "Scikit-learn", "Streamlit"],
  },
  {
    role: "Data Science Intern",
    company: "Codec Technologies",
    period: "Aug 2025 – Oct 2025",
    points: [
      "Gained hands-on experience in Data Analytics, Machine Learning, and real-world business problem solving",
      "Built an end-to-end Customer Churn Prediction System using data preprocessing, feature engineering, and classification models",
      "Analyzed customer behavior patterns and generated actionable insights to support retention strategies",
    ],
    tech: ["Python", "NumPy", "Pandas", "Matplotlib", "Scikit-Learn"],
  },
  {
    role: "AI Intern",
    company: "EI Systems",
    period: "Jan 2025 – Feb 2025",
    points: [
      "Gained hands-on experience in Artificial Intelligence, Python programming, data analysis, and machine learning workflows",
      "Developed a Real Estate Price Trend Analysis project to identify market patterns, pricing trends, and investment insights",
      "Applied data preprocessing, exploratory data analysis, visualization, and predictive modeling techniques using Python",
    ],
    tech: ["Python", "NumPy", "Pandas", "Matplotlib", "Scikit-Learn"],
  },
];

export const certifications = [
  { title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional", issuer: "Oracle University", year: "2025", verifyUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=A6669A4985F6452316E17D00478717BBD5D33307B920A079632D1497FACB5C31" },
  { title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional", issuer: "Oracle University", year: "2025", verifyUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=CC8E7FA6868ADE66869C7D39BC8454B3035DD55E3BDF8D6AC3092707DA5B0D58" },
  { title: "Career Essentials in Business Analysis", issuer: "Microsoft · LinkedIn Learning", year: "2025", verifyUrl: "https://www.linkedin.com/learning/certificates/b4c02df8d27951695c70ee31c81ffcd7c0d54ac53b592401f4fc44cd0a6e945f?trk=share_certificate" },
  { title: "Google Analytics Certification", issuer: "Google", year: "2025", verifyUrl: "https://skillshop.credential.net/09dcce1c-08a5-4039-86e4-4c65d9a0765e#acc.6fm8p2qI" },
  { title: "Introduction to Machine Learning", issuer: "NPTEL", year: "2025", verifyUrl: "https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/106/noc25-cs91/Course/NPTEL25CS91S46440334210413006.pdf" },
  { title: "Artificial Intelligence Fundamentals", issuer: "IBM SkillsBuild", year: "2025", verifyUrl: "https://www.credly.com/badges/7a58ecfb-7c98-4095-8984-ba09d314be0a" },
];

export const education = [
  {
    degree: "B.Tech in Artificial Intelligence",
    school: "JD College of Engineering & Management",
    period: "2022 – 2026",
    details: "CGPA: 8.49 · Coursework: AI, Machine Learning, Data Science, DBMS.",
  },
  {
    degree: "Higher Secondary Certificate (PCMB)",
    school: "Shri. Dadasaheb Dhanwatey Nagar Vidyalaya & Junior College",
    period: "2020 – 2022",
    details: "63.83% · Maharashtra State Board.",
  },
];

export type Achievement = {
  title: string;
  org: string;
  description: string;
  year: string;
  icon: string;
};

export const achievements: Achievement[] = [
  {
    title: "IEEE Research Paper Accepted",
    org: "IEEE Conference 2026",
    description: "Research paper on Smart Safety Handbag for Women Using IoT accepted at an IEEE conference. Proposed an IoT-enabled safety solution with real-time tracking and emergency alert features.",
    year: "2026",
    icon: "scroll-text",
  },
  {
    title: "Review Paper Published",
    org: "IIIE Conference 2025",
    description: "Published a review paper on Smart Safety Handbag for Women Using IoT, analyzing IoT-based safety technologies, location tracking, and emergency alert mechanisms.",
    year: "2025",
    icon: "book-open",
  },
  {
    title: "Copyright Registered",
    org: "Government of India",
    description: "Successfully secured copyright registration for the Smart Safety Handbag for Women Using IoT, recognizing the originality and innovation of the developed solution.",
    year: "2026",
    icon: "file-check",
  },
];

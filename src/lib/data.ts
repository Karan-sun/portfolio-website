import { SkillCategory, Quest, ChronicleNode, Trophy, LoreEntry } from "@/types";

export const PROTAGONIST = {
  name: "Karan Kumar Maloo",
  title: "AI-ML Engineer in Training",
  alias: "The Code Alchemist",
  class: "Mage / Warrior (Full Stack)",
  level: 2,
  university: "Poornima University, Jaipur",
  degree: "B.Tech — Computer Science (AI-ML)",
  batch: "2023–2027",
  gpa: 8.30,
  location: "Jaipur, Rajasthan, India",
  email: "Karanj542002@gmail.com",
  phone: "7014753889",
  github: "https://github.com/Karan-sun",
  linkedin: "https://www.linkedin.com/in/karan-maloo-a492043a0",
  rank: "CORE TEAM OFFICER",
};

export const ORIGIN_STORY = {
  summary: "Computer Science undergraduate with strong foundations in machine learning, data structures, and algorithms. Experienced in designing, developing, and testing real-world software solutions using Python. Demonstrated ability to solve complex problems, collaborate with cross-functional teams, provide technical guidance, manage time effectively, and maintain high product quality with a growth mindset and accountability.",
  anime_lore: "Born in Sri Dungargarh, Rajasthan, the young prodigy discovered his affinity for code at an early age. Now training at Poornima Academy, he hones his AI-ML jutsu daily — driven by a singular goal: to build technology that changes lives.",
};

export const ARSENAL: SkillCategory[] = [
  {
    title: "PYTHON ARTS",
    skills: [
      { name: "Python", level: 90, rank: "S" },
      { name: "C++", level: 72, rank: "A" },
      { name: "SQL", level: 68, rank: "A" },
    ]
  },
  {
    title: "ML SUMMONS",
    skills: [
      { name: "TensorFlow", level: 80, rank: "A" },
      { name: "Scikit-Learn", level: 82, rank: "A" },
      { name: "OpenCV", level: 78, rank: "A" },
      { name: "MediaPipe", level: 75, rank: "A" },
    ]
  },
  {
    title: "ARTIFACT MASTERY",
    skills: [
      { name: "SAS / SAS Viya", level: 85, rank: "A" },
      { name: "GitHub", level: 80, rank: "A" },
      { name: "VS Code", level: 88, rank: "S" },
    ]
  },
  {
    title: "SUPPORT ARTS",
    skills: [
      { name: "HTML/CSS", level: 70, rank: "B" },
      { name: "JavaScript", level: 65, rank: "B" },
    ]
  },
  {
    title: "CS CORE",
    skills: [
      { name: "Data Structures", level: 82, rank: "A" },
      { name: "Algorithms", level: 80, rank: "A" },
      { name: "OOP", level: 85, rank: "A" },
    ]
  },
  {
    title: "PASSIVE SKILLS",
    skills: [
      { name: "Leadership", level: 85, rank: "A" },
      { name: "Team Collaboration", level: 90, rank: "S" },
      { name: "Communication", level: 88, rank: "S" },
    ]
  }
];

export const QUESTS: Quest[] = [
  {
    id: "bus-track",
    codename: "The Iron Route",
    realName: "Operation BusTrack",
    status: "COMPLETED",
    difficulty: "B-RANK MISSION",
    objective: "Develop a full-stack real-time tracking platform to improve efficiency, safety, and user experience of public transportation for both passengers and drivers.",
    tech: ["HTML", "CSS", "JavaScript", "Python"],
    achievements: [
      "Built real-time bus tracking with secure login + interactive maps",
      "Enabled live tracking, schedule updates, dual interface (driver/passenger)"
    ],
    link: "https://github.com/Karan-sun/Bus-Tracking-System",
    boss: "The Inefficiency Demon",
  },
  {
    id: "weather-seer",
    codename: "Eye of the Storm",
    realName: "Operation WeatherSeer",
    status: "COMPLETED",
    difficulty: "C-RANK MISSION",
    objective: "GUI-based weather intelligence app with forecasting and alerts.",
    tech: ["Python", "OpenWeather API", "Tkinter", "Pandas"],
    achievements: [
      "Developed 5-day/hourly forecast with visual trend charts",
      "City-based input, weather alerts, clean GUI"
    ],
    link: "https://github.com/Karan-sun/Weather-Forecast",
    boss: "The Chaos Weather Elemental",
  },
  {
    id: "gesture-link",
    codename: "The Unseen Hand",
    realName: "Operation GestureLink",
    status: "COMPLETED",
    difficulty: "A-RANK MISSION",
    objective: "Real-time vision-based interface for touchless gesture control.",
    tech: ["Python", "OpenCV", "TensorFlow", "MediaPipe"],
    achievements: [
      "Real-time hand gesture recognition using AI + computer vision",
      "Gesture classification with visual feedback, touchless interaction"
    ],
    link: "https://github.com/Karan-sun/Hand-Gesture-Recognition",
    boss: "The Phantom Interface",
    special: "LEGENDARY TECHNIQUE USED: TensorFlow Summon + MediaPipe Seal"
  }
];

export const CHRONICLES: ChronicleNode[] = [
  {
    id: "falcons-intern",
    title: "AI Intern",
    organization: "Falcons – Beyond Imagination",
    period: "Internship (April 2024 – June 2024)",
    animeRank: "Field Mission — Rank B",
    achievements: [
      "Developed AI and ML models in Python for real-world applications",
      "Implemented advanced ML techniques to improve model accuracy",
      "Collaborated with team to deploy and evaluate production-ready models"
    ],
    quote: "Karan's models hit production in record time. Most junior interns don't do that."
  },
  {
    id: "poornima-uni",
    title: "B.Tech AIML — GPA 8.30",
    organization: "Poornima University",
    period: "2023 - 2027",
    animeRank: "Level 2 of 4 — CURRENTLY TRAINING",
    isActive: true
  },
  {
    id: "bharti-school",
    title: "Class XII — 81%",
    organization: "Bharti Niketan School",
    period: "Completed",
    animeRank: "ACADEMY ENTRANCE ARC COMPLETE"
  }
];

export const GUILD_INFO = {
  name: "Google Developer Group (GDG) On Campus, Poornima University",
  role: "Core Team Member",
  period: "Sep 2024 – Mar 2025",
  rank: "GUILD OFFICER",
  achievements: [
    "Led weekly meetings to promote coding and development culture",
    "Ranked 10th out of 200 in Google Gen AI Study Jams",
    "\"TOP 10\" badge: Google Gen AI Study Jams (out of 200 participants)"
  ]
};

export const TROPHIES: Trophy[] = [
  { id: "sas-ml", title: "SAS Certified Specialist: ML Using SAS Viya", issuer: "SAS", tier: "LEGENDARY" },
  { id: "nptel-ml", title: "NPTEL — Machine Learning", issuer: "NPTEL", tier: "EPIC" },
  { id: "nptel-soft-1", title: "NPTEL — Developing Soft Skills", issuer: "NPTEL", tier: "RARE" },
  { id: "nptel-soft-2", title: "NPTEL — Enhancing Soft Skills", issuer: "NPTEL", tier: "RARE" },
  { id: "google-genai", title: "Google Gen AI Study Jams Top 10 Rank", issuer: "GDG", tier: "EPIC" },
  { id: "sas-prog-1", title: "SAS Programming 1 Badge", issuer: "SAS", tier: "UNCOMMON" },
  { id: "sas-viya", title: "SAS Viya Badge", issuer: "SAS", tier: "UNCOMMON" },
  { id: "sas-stat-ml", title: "SAS Statistics for ML Badge", issuer: "SAS", tier: "UNCOMMON" }
];

export const CODEX_LORE: LoreEntry[] = [
  { id: "lore-1", number: "ENTRY 001", text: "Compulsive builder — if an idea strikes at 2 AM, the code will exist by morning.", icon: "zap" },
  { id: "lore-2", number: "ENTRY 002", text: "Believes AI is the closest humans have come to magic. Training it feels like summoning a familiar.", icon: "sparkles" },
  { id: "lore-3", number: "ENTRY 003", text: "Fascinated by computer vision — the idea that a machine can see and understand the world is endlessly exciting.", icon: "eye" },
  { id: "lore-4", number: "ENTRY 004", text: "GDG Core Team member — because great power must be shared with the next generation of coders.", icon: "users" },
  { id: "lore-5", number: "ENTRY 005", text: "Favourite anime trope: the underdog who outworks everyone. Applies it to every hackathon and project sprint.", icon: "flame" },
  { id: "lore-6", number: "ENTRY 006", text: "Power source: chai, algorithms, and lo-fi beats.", icon: "coffee" }
];

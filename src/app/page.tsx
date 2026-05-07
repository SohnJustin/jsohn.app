"use client";

import { useState, useEffect, useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

// ─── Data ─────────────────────────────────────────────────────────────────────

const NAV_ITEMS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const ROLES = [
  "Software Engineer",
  "Full-Stack Developer",
  "Next.js Developer",
  "TypeScript Engineer",
];

const SKILLS: Record<string, string[]> = {
  Languages: ["Python", "JavaScript", "TypeScript", "SQL", "HTML", "CSS"],
  Frameworks: ["React", "React Native", "Next.js"],
  Tools: [
    "Node.js",
    "Express.js",
    "Bash",
    "Git",
    "Docker",
    "RESTful APIs",
    "Jira",
    "Pytest",
  ],
  Databases: [
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Firebase",
    "Supabase",
    "Prisma ORM",
  ],
};

const STATS = [
  {
    value: "30%",
    label: "Lookup Time Reduced",
    sub: "Defect traceability standardization",
  },
  {
    value: "20%",
    label: "Defect Recurrence Cut",
    sub: "Root cause process improvements",
  },
  {
    value: "20+",
    label: "Students Tutored",
    sub: "HTML/CSS & CS concepts, ACM CSUF",
  },
  {
    value: "15%",
    label: "Latency Reduced",
    sub: "Socket.io message queuing optimization",
  },
];

const EXPERIENCE = [
  {
    role: "Quality Assurance Engineer",
    org: "TruAbutment",
    period: "Jan 2025 – Apr 2025",
    location: "Buena Park, CA",
    bullets: [
      "Drafted and maintained over 20 test documents per release cycle, standardizing defect traceability and improving audit readiness, which reduced lookup time by 30%.",
      "Conducted root cause analysis on recurring defects, identified systemic issues, and implemented process improvements, reducing defect recurrence by approximately 20% across release cycles.",
      "Created and maintained test cases, configuration records, and defect logs to ensure product stability before deployment.",
      "Designed structured test cases with measurable success criteria and applied controlled A/B testing to isolate bugs, detect defects early in the QA cycle, and decrease deployment bugs by 15%.",
    ],
  },
  {
    role: "ACM Tutor",
    org: "California State University, Fullerton",
    period: "Aug 2023 – May 2024",
    location: "Fullerton, CA",
    bullets: [
      "Provided one-on-one tutoring in HTML/CSS and core computer science concepts to over 20 students, creating tailored problem sets and live debugging sessions, which increased average participant grades by 7%.",
      "Coached students through debugging and code optimization exercises, resulting in cleaner codebases with fewer than half the runtime errors compared to initial drafts.",
      "Explained technical concepts clearly to non-technical audiences.",
    ],
  },
];

const PROJECTS = [
  {
    num: "01",
    title: "MP4 to Sheet Music Transcription Automator",
    period: "Mar 2026",
    tech: [
      "Python",
      "basic-pitch",
      "librosa",
      "pretty_midi",
      "ffmpeg",
      "MuseScore CLI",
    ],
    bullets: [
      "Developed a modular Python CLI pipeline that converts piano MP4 recordings into PDF sheet music through four independently maintained processing stages: audio extraction, neural network transcription, MIDI processing, and sheet music rendering.",
      "Integrated Spotify's basic-pitch machine learning model for note onset and pitch detection from WAV audio, adjusting onset and frame confidence thresholds above default values to reduce phantom note artifacts.",
      "Implemented beat-aligned sixteenth note quantization using librosa's beat tracker, aligning detected notes to a dynamically generated rhythmic grid and filtering short artifact notes to improve sheet music readability.",
    ],
    github: "https://github.com/SohnJustin",
  },
  {
    num: "02",
    title: "VCT Discord Bot",
    period: "Jan 2026",
    tech: ["Python", "asyncio", "httpx", "pytest", "Discord.py"],
    bullets: [
      "Built a Discord bot that scrapes live Valorant Champions Tour match results and standings by integrating with vlr.gg's API, using asyncio and httpx to handle concurrent requests and response caching to reduce redundant fetches.",
      "Implemented a modular architecture separating data fetching, command routing, and automated posting logic, making it straightforward to extend with new commands or swap data sources.",
      "Created test coverage for core modules using pytest with mocked API responses to validate error handling and cache behavior.",
    ],
    github: "https://github.com/SohnJustin",
  },
  {
    num: "03",
    title: "AI StoryTeller Generator App",
    period: "Aug 2025",
    tech: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Prisma ORM",
      "TailwindCSS",
      "OpenAI API",
    ],
    bullets: [
      "Developed an AI-powered script-writing tool for short-form content creators to address growing demands for fast, original content on platforms such as TikTok and Instagram Reels.",
      "Integrated Supabase Auth and Postgres using Prisma ORM, making database access straightforward while enabling story storage across all accounts.",
    ],
    github: "https://github.com/SohnJustin",
  },
  {
    num: "04",
    title: "Swipe&Dine",
    period: "Feb – May 2024",
    tech: [
      "React Native",
      "Expo",
      "Firebase Auth",
      "Yelp API",
      "Google Cloud Platform",
      "Figma",
    ],
    bullets: [
      "Built a cross-platform mobile app (iOS & Android via Expo) that integrates Yelp API and Google Cloud Platform to deliver real-time restaurant recommendations based on user location.",
      "Implemented Firebase Authentication for secure user login and session management across the full app lifecycle.",
    ],
    github: "https://github.com/SohnJustin",
  },
  {
    num: "05",
    title: "Mumble – Real-time Communication App",
    period: "Feb – Mar 2024",
    tech: [
      "JavaScript",
      "Node.js",
      "Express.js",
      "EJS",
      "Socket.io",
      "MongoDB",
    ],
    bullets: [
      "Designed a three-tier role architecture (User, Channel Admin, DB Admin) to support access control, enabling secure channel ownership and administrative moderation.",
      "Diagnosed Socket.io bottlenecks in user-to-user connections and implemented message queuing, reducing average message delivery latency by 15% for concurrent users.",
      "Delivered a production-ready product to stakeholders within the three-month schedule, meeting team deliverables and addressing stakeholder concerns.",
    ],
    github: "https://github.com/SohnJustin",
  },
];

// ─── Hooks ────────────────────────────────────────────────────────────────────

function useTypewriter(
  words: string[],
  speed = 75,
  deleteSpeed = 38,
  pause = 1800,
) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];
    let timer: ReturnType<typeof setTimeout>;

    if (!deleting && text === word) {
      timer = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    } else {
      const next = deleting
        ? word.slice(0, text.length - 1)
        : word.slice(0, text.length + 1);
      timer = setTimeout(() => setText(next), deleting ? deleteSpeed : speed);
    }

    return () => clearTimeout(timer);
  }, [text, deleting, index, words, speed, deleteSpeed, pause]);

  return text;
}

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -60% 0px" },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids]);

  return active;
}

// ─── Primitives ───────────────────────────────────────────────────────────────

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionHeader({ num, title }: { num: string; title: string }) {
  return (
    <FadeUp className="mb-14">
      <p className="font-mono text-xs tracking-[0.25em] text-zinc-500 uppercase mb-3">
        {num} ──────
      </p>
      <h2 className="font-syne text-4xl sm:text-5xl font-bold text-white">
        {title}
      </h2>
      <div className="mt-4 h-[2px] w-10 bg-cyan-400" />
    </FadeUp>
  );
}

function Tag({ label }: { label: string }) {
  return (
    <span className="inline-block px-3 py-1 text-xs font-mono bg-zinc-900 border border-zinc-800 text-zinc-300 rounded-full">
      {label}
    </span>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

function Navbar({ active }: { active: string }) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-0.5 bg-zinc-950/90 backdrop-blur-xl border border-zinc-800 rounded-full px-2 py-1.5 shadow-2xl">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className={[
              "px-3 py-1.5 rounded-full text-xs font-mono transition-all duration-200",
              active === item.id
                ? "bg-white text-black font-medium"
                : "text-zinc-400 hover:text-white hover:bg-zinc-800",
            ].join(" ")}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  const role = useTypewriter(ROLES);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden dot-grid"
    >
      {/* Radial vignette to fade dot-grid toward edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent_30%,#000_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono text-[11px] text-zinc-500 tracking-[0.3em] uppercase mb-10"
        >
          Hi there, I&apos;m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="font-syne text-6xl sm:text-8xl md:text-9xl font-bold text-white leading-[0.9] tracking-tight"
        >
          Justin
          <br />
          <span className="text-zinc-400 tracking-normal">Weonjun</span>
          <br />
          Sohn
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-8 font-mono text-lg sm:text-xl text-cyan-400 h-8 flex items-center justify-center gap-0.5"
        >
          <span>{role}</span>
          <span className="animate-blink ml-0.5">_</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-5 font-dmsans text-zinc-500 max-w-md mx-auto text-sm sm:text-base"
        >
          B.S. Computer Science · CSUF · Dean&apos;s Honor List · Buena Park, CA
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="/Resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-medium rounded-full hover:bg-zinc-100 transition-colors"
          >
            Download CV
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </a>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-2 px-6 py-3 bg-transparent text-white text-sm border border-zinc-700 rounded-full hover:border-zinc-400 hover:bg-zinc-900/50 transition-colors"
          >
            Get in touch →
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="mt-8 flex items-center justify-center gap-5"
        >
          {[
            { label: "GitHub", href: "https://github.com/SohnJustin" },
            { label: "LinkedIn", href: "https://linkedin.com/in/sohnjustin" },
            { label: "Email", href: "mailto:sohnjustin2@gmail.com" },
          ].map((link, i, arr) => (
            <span key={link.label} className="flex items-center gap-5">
              <a
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                className="font-mono text-[11px] text-zinc-500 hover:text-white transition-colors tracking-widest uppercase"
              >
                {link.label} ↗
              </a>
              {i < arr.length - 1 && (
                <span className="text-zinc-800 text-xs">·</span>
              )}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-700"
      >
        <span className="font-mono text-[9px] tracking-[0.35em] uppercase">
          Scroll down for more info
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-zinc-700 to-transparent" />
      </motion.div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────

function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 max-w-5xl mx-auto">
      <SectionHeader num="01" title="About" />
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <FadeUp>
          <p className="font-dmsans text-zinc-300 text-base sm:text-lg leading-relaxed mb-4">
            I&apos;m a software engineer based in Southern California, holding a
            B.S. in Computer Science from Cal State Fullerton (Dean&apos;s Honor
            List, May 2024).
          </p>
          <p className="font-dmsans text-zinc-400 text-base leading-relaxed mb-4">
            Most recently I worked as a Quality Assurance Engineer at
            TruAbutment, where I standardized defect traceability, reduced
            defect recurrence by 20%, and applied A/B testing to cut deployment
            bugs by 15%. My work spans Python, React, Next.js, and Node.js —
            with a focus on software quality, reliability, and clean system
            design.
          </p>
          <p className="font-dmsans text-zinc-400 text-base leading-relaxed">
            Bilingual: English · Korean.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              {
                label: "GitHub ↗",
                href: "https://github.com/SohnJustin",
                external: true,
              },
              {
                label: "LinkedIn ↗",
                href: "https://linkedin.com/in/sohnjustin",
                external: true,
              },
              {
                label: "sohnjustin2@gmail.com",
                href: "mailto:sohnjustin2@gmail.com",
                external: false,
              },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.external ? "_blank" : undefined}
                rel="noreferrer"
                className="inline-flex items-center font-mono text-xs text-zinc-400 border border-zinc-800 rounded-full px-4 py-2 hover:border-zinc-500 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </FadeUp>

        <div className="grid grid-cols-2 gap-4">
          {STATS.map((stat, i) => (
            <FadeUp key={stat.value} delay={i * 0.1}>
              <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 h-full">
                <p className="font-syne text-4xl font-bold text-white">
                  {stat.value}
                </p>
                <p className="font-dmsans text-sm text-zinc-300 mt-2">
                  {stat.label}
                </p>
                <p className="font-mono text-[10px] text-zinc-600 mt-1">
                  {stat.sub}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Skills ───────────────────────────────────────────────────────────────────

function Skills() {
  return (
    <section
      id="skills"
      className="py-24 md:py-32 px-6 max-w-5xl mx-auto dot-grid"
    >
      <SectionHeader num="02" title="Skills" />
      <div className="space-y-6">
        {Object.entries(SKILLS).map(([category, items], i) => (
          <FadeUp key={category} delay={i * 0.05}>
            <div className="flex flex-col sm:flex-row sm:items-start gap-4 py-4 border-b border-zinc-900">
              <p className="font-mono text-xs text-zinc-500 pt-1 w-44 shrink-0 tracking-wider">
                {category}
              </p>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <Tag key={skill} label={skill} />
                ))}
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

// ─── Experience ───────────────────────────────────────────────────────────────

function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 max-w-5xl mx-auto">
      <SectionHeader num="03" title="Experience" />
      <div className="space-y-6">
        {EXPERIENCE.map((exp, i) => (
          <FadeUp key={exp.org} delay={i * 0.1}>
            <div className="group border border-zinc-800 rounded-2xl p-6 sm:p-8 hover:border-zinc-600 transition-colors bg-zinc-950/40">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-5">
                <div>
                  <h3 className="font-syne text-lg font-semibold text-white">
                    {exp.role}
                  </h3>
                  <p className="font-mono text-sm text-cyan-400 mt-1">
                    {exp.org}
                  </p>
                </div>
                <div className="sm:text-right shrink-0">
                  <p className="font-mono text-xs text-zinc-400">
                    {exp.period}
                  </p>
                  <p className="font-mono text-xs text-zinc-600 mt-0.5">
                    {exp.location}
                  </p>
                </div>
              </div>
              <ul className="space-y-2.5">
                {exp.bullets.map((b, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-3 text-zinc-400 text-sm font-dmsans leading-relaxed"
                  >
                    <span className="text-cyan-400 mt-[5px] shrink-0 text-[10px]">
                      ▸
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}

// ─── Projects ─────────────────────────────────────────────────────────────────

function Projects() {
  return (
    <section
      id="projects"
      className="py-24 md:py-32 px-6 max-w-5xl mx-auto dot-grid"
    >
      <SectionHeader num="04" title="Projects" />
      <div className="space-y-6">
        {PROJECTS.map((p, i) => (
          <FadeUp key={p.num} delay={i * 0.07}>
            <div className="relative overflow-hidden border border-zinc-800 rounded-2xl p-6 sm:p-8 hover:border-zinc-600 transition-colors bg-zinc-950/40 group">
              {/* Large muted background number */}
              <span className="absolute -right-4 -top-4 font-syne text-[130px] font-bold text-white/[0.025] select-none leading-none pointer-events-none">
                {p.num}
              </span>

              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                  <div>
                    <p className="font-mono text-[11px] text-zinc-600 mb-1.5 tracking-wide">
                      {p.period}
                    </p>
                    <h3 className="font-syne text-xl font-bold text-white">
                      {p.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-xs text-zinc-400 hover:text-white transition-colors"
                    >
                      GitHub ↗
                    </a>
                  </div>
                </div>

                <ul className="space-y-2 mb-5">
                  {p.bullets.map((b, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-zinc-400 text-sm font-dmsans leading-relaxed"
                    >
                      <span className="text-cyan-400 mt-[5px] shrink-0 text-[10px]">
                        ▸
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <Tag key={t} label={t} />
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>

      <FadeUp delay={0.1} className="mt-10 text-center">
        <a
          href="https://github.com/SohnJustin"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 font-mono text-xs text-zinc-500 hover:text-white border border-zinc-800 hover:border-zinc-600 rounded-full px-5 py-2.5 transition-colors"
        >
          View all projects on GitHub ↗
        </a>
      </FadeUp>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────

function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    try {
      await emailjs.sendForm(
        "service_6xquh79",
        "template_6st1yon",
        formRef.current,
        "0Vy8NjbnZKeFAaa6L",
      );
      setStatus("sent");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  };

  const inputCls =
    "w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-600 font-dmsans focus:outline-none focus:border-zinc-600 transition-colors";

  return (
    <section id="contact" className="py-24 md:py-32 px-6 max-w-5xl mx-auto">
      <SectionHeader num="05" title="Contact" />
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <FadeUp>
          <h3 className="font-syne text-2xl font-bold text-white mb-4">
            Let&apos;s work together.
          </h3>
          <p className="font-dmsans text-zinc-400 text-base leading-relaxed mb-8">
            Open to software engineering opportunities across any industry —
            whether it&apos;s building products, improving systems, or solving
            hard problems. Available for full-time positions.
          </p>
          <div className="space-y-5">
            {[
              {
                label: "Email",
                value: "sohnjustin2@gmail.com",
                href: "mailto:sohnjustin2@gmail.com",
              },
              { label: "Location", value: "Buena Park, CA", href: null },
            ].map((item) => (
              <div key={item.label}>
                <p className="font-mono text-[10px] text-zinc-600 tracking-[0.2em] uppercase mb-1">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="font-dmsans text-zinc-300 hover:text-white transition-colors text-sm"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="font-dmsans text-zinc-300 text-sm">
                    {item.value}
                  </p>
                )}
              </div>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          {status === "sent" ? (
            <div className="border border-zinc-800 rounded-2xl p-10 text-center">
              <p className="font-syne text-2xl font-bold text-white mb-2">
                Message sent.
              </p>
              <p className="font-dmsans text-zinc-400 text-sm">
                I&apos;ll get back to you soon.
              </p>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  name="user_name"
                  required
                  placeholder="Name"
                  className={inputCls}
                />
                <input
                  name="user_email"
                  type="email"
                  required
                  placeholder="Email"
                  className={inputCls}
                />
              </div>
              <textarea
                name="message"
                required
                placeholder="Message"
                rows={5}
                className={inputCls + " resize-none"}
              />
              {status === "error" && (
                <p className="font-mono text-xs text-red-400">
                  Send failed — email me directly at sohnjustin2@gmail.com
                </p>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-3 bg-white text-black text-sm font-medium rounded-full hover:bg-zinc-100 disabled:opacity-40 transition-colors"
              >
                {status === "sending" ? "Sending…" : "Send Message"}
              </button>
            </form>
          )}
        </FadeUp>
      </div>

      {/* Footer */}
      <FadeUp
        delay={0.15}
        className="mt-20 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <p className="font-mono text-xs text-zinc-700">
          © {new Date().getFullYear()} Justin Weonjun Sohn
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/SohnJustin"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs text-zinc-600 hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/sohnjustin"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs text-zinc-600 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </FadeUp>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Page() {
  const sectionIds = NAV_ITEMS.map((n) => n.id);
  const active = useActiveSection(sectionIds);

  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar active={active} />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}

import React, { useState } from "react";
import {
  Linkedin,
  Mail,
  Menu,
  X,
  ArrowUpRight,
  Users,
  FileText,
  BarChart,
  Phone,
  Briefcase,
  SquareStar,
} from "lucide-react";

export default function PortfolioPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Data Profil disesuaikan dengan PDF
  const profile = {
    name: "Ami Lia Calista",
    title: "Human Resource / Human Capital",
    tagline:
      "Detail-oriented Human Resources aspiring professional with hands-on experience in recruitment coordination, HR administration, and payroll support (PPh 21). Proven ability to manage end-to-end hiring processes for 20+ candidates.",
    email: "amiliacalista91@gmail.com",
    linkedin: "https://www.linkedin.com/in/amiliacalista/",
    resumeUrl: "https://drive.google.com/your-google-drive-link-here", // SILAHKAN GANTI DENGAN LINK DRIVE RESUME ANDA
    location: "Yogyakarta,Indonesia",
    photoUrl:
      "https://media.discordapp.net/attachments/771872445460250644/1505196031372169217/Desain_tanpa_judul_60.png?ex=6a09be8b&is=6a086d0b&hm=ae0803c28c5482d6810b94b09b36f8e6f7c3bf6aca2e90c386853d7fffe9ce0c&=&format=webp&quality=lossless&width=944&height=960",
  };

  // Data Kompetensi / Pendidikan
  const competencies = [
    {
      id: 1,
      title: "Recruitment & Talent Acquisition",
      desc: "Supported end-to-end recruitment process for 20+ candidates, organized data, and maintained HR reporting.",
      category: "HR Operations",
      icon: <Users size={40} className="text-zinc-400 mb-4" />,
    },
    {
      id: 2,
      title: "HR Administration & Payroll",
      desc: "Managed employee records, coordinated administrative workflows, and supported payroll administration (PPh 21).",
      category: "Administration",
      icon: <FileText size={40} className="text-zinc-400 mb-4" />,
    },
    {
      id: 3,
      title: "English Literature Graduate",
      desc: "Bachelor of English Literature from Universitas Ahmad Dahlan with a GPA of 3.89/4.00 (Graduation: 2026).",
      category: "Education",
      icon: <Briefcase size={40} className="text-zinc-400 mb-4" />,
    },
  ];

  // Data Experience beserta Detail Deskripsi dari PDF
  const experiences = [
    {
      id: 1,
      title: "Recruitment Support (Student Hiring Project)",
      label: "APR - MAY 2025",
      company: "Pusat Studi Astronomi, UAD",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2000&auto=format&fit=crop",
      descriptions: [
        "Supported end-to-end recruitment process for 20+ candidates (screening, shortlisting, interview coordination).",
        "Organized and structured candidate data to support efficient evaluation and decision-making.",
        "Maintained recruitment database and ensured accuracy of HR reporting.",
      ],
      tags: ["Screening", "Interview", "Database"],
    },
    {
      id: 2,
      title: "HR Administrative & Documentation Support",
      label: "AUG 2024 - FEB 2025",
      company: "Pusat Studi Astronomi, UAD",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop",
      descriptions: [
        "Managed and systemized HR documentation and employee records for improved data accessibility.",
        "Supported payroll administration (PPh 21) and ensured accurate HR reporting.",
        "Coordinated administrative workflows to ensure timely and efficient HR operations.",
      ],
      tags: ["Payroll", "Records", "Workflows"],
    },
    {
      id: 3,
      title: "Tour Guide",
      label: "JUN 2024 - FEB 2026",
      company: "Observatorium UAD",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop",
      descriptions: [
        "Managed large groups (50-100+ participants) in structured sessions.",
        "Demonstrated strong communication and problem-solving skills in dynamic environments.",
      ],
      tags: ["Communication", "Leadership"],
    },
    {
      id: 4,
      title: "Data Analyst & AI Trainee",
      label: "TRAINING",
      company: "Mari Belajar",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
      descriptions: [
        "Performed data cleaning and basic analysis to support reporting needs.",
        "Applied data insights to support HR-related analysis and workforce tracking.",
      ],
      tags: ["Data Cleaning", "Analytics"],
    },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-zinc-900 selection:bg-zinc-900 selection:text-white">
      {/* --- NAVIGATION BAR --- */}
      <nav className="fixed top-0 w-full bg-white/50 backdrop-blur-xl backdrop-saturate-150 z-50 py-4 px-6 border-b border-zinc-200/30 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-sm font-medium tracking-wide">
              Available for HR Role
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {["Competencies", "Skills", "Experience"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors uppercase tracking-wider"
              >
                {item}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollToSection("contact")}
            className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-zinc-900 text-white text-sm font-semibold rounded-full hover:bg-zinc-800 transition-all duration-300"
          >
            Contact Me<ArrowUpRight size={16} />
          </button>

          <button
            className="md:hidden text-zinc-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/80 backdrop-blur-xl backdrop-saturate-150 border-b border-zinc-200 p-6 flex flex-col gap-4 shadow-xl">
            {["Competencies", "Skills", "Experience"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-left text-lg font-bold text-zinc-900 uppercase tracking-wide"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen bg-[#F5F5F5] overflow-hidden px-6 pt-24 md:pt-32 flex items-center justify-center">
        
        {/* BIG BACKGROUND NAME */}
        <div className="absolute top-16 md:top-25 left-1/2 -translate-x-1/2 w-full flex justify-center z-0 pointer-events-none select-none">
          <h1 className="text-center font-black uppercase tracking-wider whitespace-nowrap text-[10vw] sm:text-[8vw] md:text-[10vw] lg:text-[7vw] leading-none px-4">
            <span className="text-transparent [-webkit-text-stroke:1px_#333] md:[-webkit-text-stroke:2px_#222] opacity-30 md:opacity-100">
              AMI LIA CALISTA
            </span>
          </h1>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full h-full flex flex-col justify-between md:block">
          {/* CENTER IMAGE */}
          <div className="relative z-10 flex justify-center items-end pt-12 md:pt-32 order-1 md:order-none">
            <img
              src={profile.photoUrl}
              alt={profile.name}
              className="w-[240px] sm:w-[320px] md:w-[450px] lg:w-[500px] object-contain drop-shadow-md"
            />
          </div>

          {/* LEFT CONTENT */}
          <div className="relative md:absolute md:left-0 md:bottom-12 lg:bottom-24 z-20 max-w-md text-center md:text-left mt-8 md:mt-0 order-2 md:order-none">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 mb-4 md:mb-5 leading-tight">
              Human Resources
            </h2>
            <p className="text-zinc-600 text-base md:text-lg leading-relaxed mb-6 md:mb-8 max-w-sm mx-auto md:mx-0">
              Recruitment, HR administration, payroll support, and data-driven
              workforce management.
            </p>
            <div className="flex justify-center md:justify-start">
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-black text-white px-7 py-4 rounded-full flex items-center gap-2 text-sm font-semibold hover:scale-105 transition-all shadow-xl"
              >
                Contact me
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>

          {/* RIGHT SOCIALS */}
          <div className="relative md:absolute md:right-5 md:bottom-12 lg:bottom-24 z-20 flex flex-row flex-wrap justify-center md:flex-col gap-3 md:gap-4 mt-8 md:mt-0 order-3 md:order-none">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="bg-white border border-zinc-200 rounded-full px-4 py-3 md:px-6 md:py-4 flex items-center gap-2 md:gap-3 shadow-sm hover:shadow-md transition-all text-sm md:text-base"
            >
              <Linkedin size={18} />
              <span className="font-medium">LinkedIn</span>
            </a>
            
            {/* Mengarah langsung ke Gmail Compose Jendela Baru */}
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}
              target="_blank"
              rel="noreferrer"
              className="bg-white border border-zinc-200 rounded-full px-4 py-3 md:px-6 md:py-4 flex items-center gap-2 md:gap-3 shadow-sm hover:shadow-md transition-all text-sm md:text-base"
            >
              <Mail size={18} />
              <span className="font-medium">Email</span>
            </a>


            {/* REVISI: Tombol Baru Resume Mengarah ke Drive */}
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-white border border-zinc-200 rounded-full px-4 py-3 md:px-6 md:py-4 flex items-center gap-2 md:gap-3 shadow-sm hover:shadow-md transition-all text-sm md:text-base"
            >
              <FileText size={18} />
              <span className="font-medium">Resume</span>
            </a>
          </div>
        </div>
      </section>

      {/* --- COMPETENCIES SECTION --- */}
      <section
        id="competencies"
        className="py-32 px-6 bg-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <h3 className="text-3xl md:text-5xl font-bold text-zinc-900 uppercase tracking-tight mb-16">
            Core Competencies
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {competencies.map((comp) => (
              <div
                key={comp.id}
                className="bg-[#FAFAFA] p-8 rounded-[2rem] border border-zinc-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
              >
                <div className="bg-zinc-100 w-full h-48 rounded-2xl mb-8 flex flex-col items-center justify-center border border-zinc-200/50 group-hover:bg-white transition-colors">
                  {comp.icon}
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 bg-zinc-200 px-3 py-1 rounded-full">
                    {comp.category}
                  </span>
                </div>
                <h4 className="text-2xl font-bold text-zinc-900 mb-4 leading-tight">
                  {comp.title}
                </h4>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {comp.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SKILLS SECTION --- */}
      <section id="skills" className="py-32 px-6 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl md:text-5xl font-bold text-zinc-900 uppercase tracking-tight mb-16">
            Skills & Tools
          </h3>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="bg-[#1C1C1C] text-white p-10 md:p-14 rounded-[2rem] md:w-[45%] relative shadow-2xl flex flex-col justify-center">
              <h4 className="text-3xl md:text-4xl font-black uppercase mb-6 leading-tight">
                HR &<br />
                Recruitment
              </h4>
              <p className="text-zinc-400 text-lg leading-relaxed font-light">
                Recruitment Coordination, Candidate Screening, Interview
                Scheduling, HR Documentation, and Payroll Basics (PPh 21).
              </p>
              <X
                size={40}
                className="absolute top-8 right-8 text-zinc-700 opacity-50"
              />
            </div>
            <div className="md:w-[55%] flex flex-col justify-center divide-y divide-zinc-200">
              <div className="py-10 flex flex-col sm:flex-row justify-between items-start sm:items-center group border-t border-zinc-200">
                <h4 className="text-2xl md:text-3xl font-bold uppercase text-zinc-900 mb-2 sm:mb-0">
                  Data & Tools
                </h4>
                <div className="flex flex-wrap gap-2 sm:justify-end">
                  {[
                    "Ms. Excel",
                    "Google Sheets",
                    "Data Structuring",
                    "Data Analysis",
                  ].map((s) => (
                    <span
                      key={s}
                      className="text-xs font-bold uppercase tracking-wider text-zinc-600 border border-zinc-300 px-3 py-1 rounded-full"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="py-10 flex flex-col sm:flex-row justify-between items-start sm:items-center group">
                <h4 className="text-2xl md:text-3xl font-bold uppercase text-zinc-900 mb-2 sm:mb-0">
                  Professional
                </h4>
                <div className="flex flex-wrap gap-2 sm:justify-end max-w-sm">
                  {[
                    "Communication",
                    "Analytical",
                    "Problem Solving",
                    "Stakeholder Mgmt",
                    "Detail-Oriented",
                  ].map((s) => (
                    <span
                      key={s}
                      className="text-xs font-bold uppercase tracking-wider text-zinc-600 border border-zinc-300 px-3 py-1 rounded-full"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- EXPERIENCE SECTION --- */}
      <section
        id="experience"
        className="py-32 px-6 bg-[#111111] text-zinc-100 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter text-center mb-10">
              <span className="text-zinc-400 font-medium tracking-widest text-xl block mb-4">
                EXPERIENCE
              </span>
              PROFESSIONAL JOURNEY
            </h2>
            <div className="w-full flex justify-between items-center gap-6 border-b border-zinc-800 pb-6">
              <div className="flex gap-8">
                <button className="text-sm font-bold text-white tracking-wide border-b-2 border-white pb-1">
                  All Roles
                </button>
              </div>
            </div>
          </div>

          {/* Experience Grid */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="group bg-white rounded-2xl p-6 md:p-8 hover:-translate-y-2 transition-transform duration-500 shadow-lg cursor-default flex flex-col"
              >
                <div className="relative w-full h-[200px] md:h-[250px] bg-zinc-200 rounded-xl overflow-hidden mb-6 shrink-0">
                  <div className="absolute top-4 left-4 z-10 bg-zinc-900/90 backdrop-blur text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    {exp.label}
                  </div>
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-zinc-900 mb-1">
                  {exp.title}
                </h3>
                <p className="text-emerald-600 font-bold text-sm uppercase tracking-wider mb-4 border-b border-zinc-200 pb-4">
                  {exp.company}
                </p>

                <ul className="list-disc list-outside ml-4 mb-8 text-zinc-600 text-sm leading-relaxed space-y-2 grow">
                  {exp.descriptions.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>

                <div className="flex gap-2 flex-wrap mt-auto pt-4 border-t border-zinc-100">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold text-zinc-500 bg-zinc-100 border border-zinc-200 px-3 py-1 rounded-full uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER / CONTACT --- */}
      <section
        id="contact"
        className="py-32 px-6 bg-gradient-to-b from-[#FAFAFA] to-zinc-100 relative text-center"
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="flex items-center gap-2 px-4 py-2 bg-white border border-zinc-200 rounded-full mb-8 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-bold text-zinc-600 uppercase tracking-wider">
              Ready to contribute
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-zinc-900 uppercase tracking-tighter mb-6 leading-tight">
            LOOKING FOR HR
            <br />
            TALENT?
          </h2>
          <p className="text-lg text-zinc-500 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            I am highly motivated to bring my data-driven mindset and
            organizational skills to your HR team. Let's connect!
          </p>

          {/* Mengarah langsung ke Gmail Compose Jendela Baru */}
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-10 py-5 bg-zinc-900 text-white text-lg font-bold rounded-full hover:bg-zinc-800 hover:scale-105 hover:shadow-2xl transition-all duration-300 uppercase tracking-wider"
          >
            Contact Me <ArrowUpRight size={20} />
          </a>
        </div>
      </section>

      <footer className="bg-white py-8 px-6 border-t border-zinc-200 text-center flex flex-col md:flex-row justify-between items-center gap-4 max-w-7xl mx-auto">
        <div className="flex gap-4">
          <span className="text-zinc-900 font-bold uppercase tracking-wider text-sm">
            {profile.name}
          </span>
        </div>
        <p className="text-zinc-500 text-sm font-medium">
          © {new Date().getFullYear()}. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            <Linkedin size={20} />
          </a>
          
          {/* Mengarah langsung ke Gmail Compose Jendela Baru */}
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`}
            target="_blank"
            rel="noreferrer"
            className="text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>
      </footer>
    </div>
  );
}
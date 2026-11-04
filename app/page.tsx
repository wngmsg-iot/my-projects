import Image from 'next/image';
import { FaArrowRight, FaEnvelope } from 'react-icons/fa';

export default function PortfolioProfile() {
  return (
    <main className="min-h-screen bg-[#07090e] text-slate-100 font-sans p-4 sm:p-6 md:p-8 flex flex-col items-center">
      
      {/* Container หลักขนาดความกว้างแบบ Mobile-First / Compact Portfolio */}
      <div className="w-full max-w-md space-y-6">

        {/* Navbar ด้านบน */}
        <nav className="flex justify-between items-center py-2 border-b border-slate-800/60">
          <span className="text-sm font-mono text-cyan-400">&lt; Saswan Maseng /&gt;</span>
          <button className="text-slate-400 hover:text-white p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </nav>

        {/* Hero Section */}
        <section className="flex flex-col items-center text-center space-y-4 pt-2">
          
          {/* รูปโปรไฟล์ */}
          <div className="w-32 h-32 rounded-2xl overflow-hidden border-2 border-slate-700 shadow-xl bg-slate-800">
            {/* ใส่ path รูปของคุณตรง src */}
            <Image 
              src="/195403ED-07D5-4C60-AEE5-C0BBA3F3114F.png"
              alt="Profile Picture" 
              width={128} 
              height={128} 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-1">
            <p className="text-xs text-amber-400 font-mono">// Hello, World 👋</p>
            <h1 className="text-3xl font-bold tracking-tight">Saswan Maseng<span className="text-cyan-400">.</span></h1>
            <p className="text-sm text-slate-400">
              Full-Stack & AI Developer • Prince of Sonkla University Phuket 🇹🇭
            </p>
          </div>

          {/* คำโปรยแนะนำตัว */}
          <p className="text-sm text-slate-300 bg-slate-900/60 p-3.5 rounded-xl border border-slate-800 text-left leading-relaxed">
            ออกแบบสร้างแอปจริง UX/UI —  database และสร้าง AI agents  
          </p>

          {/* ปุ่มติดต่อ/ดูงาน */}
          <div className="flex gap-2 w-full pt-1">
            <a href="https://github.com/wngmsg-iot" target="_blank" rel="noopener noreferrer" className="flex-1 bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-lg shadow-blue-600/20">
              ดูผลงาน <FaArrowRight className="text-[10px]" />
            </a>
            <a href="#skills" className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 border border-slate-700/60 transition-all">
              ดู Skills <FaArrowRight className="text-[10px]" />
            </a>
            <a href="mailto:saswanmanny@gmail.com" className="bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium py-2.5 px-3 rounded-xl flex items-center justify-center border border-slate-700/60 transition-all">
              <FaEnvelope />
            </a>
          </div>

        </section>

        {/* Stats Counter Section */}
        <section className="grid grid-cols-2 gap-3 pt-2">
          <div className="bg-slate-900/40 border border-slate-800/80 p-4 rounded-2xl text-center">
            <div className="text-2xl font-bold text-white">0+</div>
            <div className="text-xs text-slate-400 mt-0.5">Production Apps</div>
          </div>
          <div className="bg-slate-900/40 border border-slate-800/80 p-4 rounded-2xl text-center">
            <div className="text-2xl font-bold text-white">0+</div>
            <div className="text-xs text-slate-400 mt-0.5">AI agents & Databases</div>
          </div>
          <div className="bg-slate-900/40 border border-slate-800/80 p-4 rounded-2xl text-center">
            <div className="text-2xl font-bold text-white">2026</div>
            <div className="text-xs text-slate-400 mt-0.5">Currently Shipping</div>
          </div>
          <div className="bg-slate-900/40 border border-slate-800/80 p-4 rounded-2xl text-center">
            <div className="text-2xl font-bold text-white">20</div>
            <div className="text-xs text-slate-400 mt-0.5">Years Old</div>
          </div>
        </section>

        {/* What I Build / Skills Section */}
        <section id="skills" className="space-y-3 pt-2">
          <p className="text-xs font-mono text-slate-500">// What I build & Skills</p>

          {/* การ์ดที่ 1: Programming Core */}
          <div className="bg-slate-900/60 border border-slate-800/80 p-4 rounded-2xl space-y-2 hover:border-slate-700 transition-all">
            <div className="text-amber-400 text-base">💻</div>
            <h2 className="text-sm font-bold text-white">Programming Core</h2>
            <p className="text-xs text-slate-400 font-mono">
              Python • C • Java • Object-Oriented Programming & Logic
            </p>
          </div>

          {/* การ์ดที่ 2: AI Agents & Automation */}
          <div className="bg-slate-900/60 border border-slate-800/80 p-4 rounded-2xl space-y-2 hover:border-slate-700 transition-all">
            <div className="text-cyan-400 text-base">🤖</div>
            <h2 className="text-sm font-bold text-white">AI Agents & Automation</h2>
            <p className="text-xs text-slate-400 font-mono">
              Workflow Automation • AI Agent Systems • Microsoft Ecosystem & Tools
            </p>
          </div>

          {/* การ์ดที่ 3: UX/UI & Product Design */}
          <div className="bg-slate-900/60 border border-slate-800/80 p-4 rounded-2xl space-y-2 hover:border-slate-700 transition-all">
            <div className="text-pink-400 text-base">🎨</div>
            <h2 className="text-sm font-bold text-white">UX/UI Design</h2>
            <p className="text-xs text-slate-400 font-mono">
              User Research • Wireframing • Interface Prototyping • Design Thinking
            </p>
          </div>

        </section>

        {/* Footer */}
        <footer className="text-center text-xs text-slate-600 pt-6 pb-4">
          Designed & Built by Saswan Maseng © 2026
        </footer>

      </div>
    </main>
  );
}
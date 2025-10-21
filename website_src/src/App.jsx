import React from 'react'

function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-sky-900 to-indigo-900 text-white py-32 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-sky-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="geometric-grid"></div>
        <div className="geometric-shape geometric-triangle"></div>
        <div className="geometric-shape geometric-triangle-small"></div>
        <div className="geometric-shape geometric-diamond"></div>
        <div className="geometric-shape geometric-diamond-small"></div>
        <div className="geometric-shape geometric-hex"></div>
        <div className="geometric-shape geometric-hex-alt"></div>
        <div className="geometric-shape geometric-circle"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="mb-6 inline-block">
          <span className="inline-block px-4 py-2 bg-sky-500/20 border border-sky-400/50 rounded-full text-sm font-semibold text-sky-300">
            ✨ Autonomous AI Coding Agent
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-sky-300 to-indigo-300">
          AIEXEcode
        </h1>
        <p className="text-xl md:text-2xl text-sky-100 mb-4 font-light">
          Describe your mission in plain language
        </p>
        <p className="text-lg md:text-xl text-sky-200/80 mb-10 max-w-2xl mx-auto">
          Let AI autonomously plan, execute, and iterate on your coding tasks
        </p>
        <div className="mt-8 max-w-xl mx-auto text-left">
          <div className="bg-slate-900/80 border border-sky-400/40 rounded-lg px-6 py-5 font-mono text-base md:text-lg text-sky-100 shadow-lg backdrop-blur">
            <div className="flex items-center justify-center gap-3">
              <span className="text-slate-500 text-lg">$</span>
              <span>npm install -g aiexecode</span>
            </div>
          </div>
          <p className="mt-3 text-sky-200/80 text-sm md:text-base text-center">
            Install globally and launch missions instantly.
          </p>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a href="#features" className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-sky-900 bg-white rounded-lg hover:bg-sky-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
            Explore Features
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a href="#get-started" className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-sky-300 rounded-lg hover:bg-sky-500/20 transition-all duration-300 backdrop-blur-sm">
            Get Started
          </a>
        </div>
      </div>
    </section>
  )
}

function Overview() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="relative w-fit mx-auto text-4xl md:text-5xl font-bold text-slate-900 mb-6 pb-3 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-full after:bg-gradient-to-r after:from-sky-500 after:to-indigo-500 after:rounded-full">What is AIEXEcode?</h2>
          </div>


          <p className="text-center text-gray-700 text-lg leading-relaxed">
            AIEXEcode is a CLI-based autonomous AI coding agent that executes development tasks through natural language missions. 
            Simply describe what you want to build or fix, and AIEXEcode will autonomously plan, execute, and iterate on the task 
            using a comprehensive toolkit.
          </p>
        </div>
      </div>
    </section>
  )
}

function Features() {
  const items = [
    { 
      icon: '💬',
      title: 'Natural Language Interface', 
      desc: 'Describe tasks in plain language (any natural language)', 
    },
    { 
      icon: '⚡',
      title: 'Autonomous Execution', 
      desc: 'Self-directed task completion through iterative cycles' 
    },
    { 
      icon: '🤖',
      title: 'Multi-Provider AI', 
      desc: 'Support for OpenAI and Anthropic models' 
    },
    { 
      icon: '💾',
      title: 'Session Persistence', 
      desc: 'Save and resume work sessions with full context' 
    },
    { 
      icon: '🔌',
      title: 'MCP Integration', 
      desc: 'Extend capabilities through Model Context Protocol servers' 
    },
    { 
      icon: '🎨',
      title: 'Interactive UI', 
      desc: 'Terminal-based interface with real-time feedback' 
    },
  ]
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="relative w-fit mx-auto text-4xl md:text-5xl font-bold text-slate-900 mb-8 pb-3 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-full after:bg-gradient-to-r after:from-sky-500 after:to-indigo-500 after:rounded-full">Powerful Features</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((it) => (
              <div key={it.title} className="relative p-8 bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-xl">
                <div className="text-4xl mb-4">{it.icon}</div>
                <h3 className="font-bold text-lg text-slate-900 mb-3">{it.title}</h3>
                <p className="text-gray-600 leading-relaxed">{it.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Installation() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="relative w-fit mx-auto text-4xl md:text-5xl font-bold text-slate-900 mb-8 pb-3 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-full after:bg-gradient-to-r after:from-sky-500 after:to-indigo-500 after:rounded-full">Installation</h2>
          </div>
          
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="inline-flex items-center justify-center w-8 h-8 bg-sky-500 text-white rounded-full mr-3 text-sm font-bold">1</span>
              Prerequisites
            </h3>
            <div className="bg-gradient-to-br from-sky-50 to-indigo-50 border border-sky-200 rounded-lg p-6">
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-sky-500 text-white rounded-full mr-3 text-xs">✓</span>
                  Node.js
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-sky-500 text-white rounded-full mr-3 text-xs">✓</span>
                  Python
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-sky-500 text-white rounded-full mr-3 text-xs">✓</span>
                  ripgrep (rg)
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-sky-500 text-white rounded-full mr-3 text-xs">✓</span>
                  OpenAI or Claude API key
                </li>
              </ul>
            </div>
            </div>
          
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="inline-flex items-center justify-center w-8 h-8 bg-indigo-500 text-white rounded-full mr-3 text-sm font-bold">2</span>
              Install via npm
            </h3>
            <div className="bg-slate-900 text-sky-300 p-6 rounded-lg font-mono text-sm overflow-x-auto border border-slate-700 shadow-lg">
              <div className="flex items-center">
                <span className="text-slate-500 mr-4">$</span>
                <span>npm install -g aiexecode</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


function Usage() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="relative w-fit mx-auto text-4xl md:text-5xl font-bold text-slate-900 mb-8 pb-3 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-full after:bg-gradient-to-r after:from-sky-500 after:to-indigo-500 after:rounded-full">Usage Examples</h2>
          </div>
          
          <div className="space-y-10">
            <div className="group">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-emerald-500 text-white rounded-full mr-3 text-sm font-bold">1</span>
                Interactive Mode
              </h3>
              <p className="text-gray-700 mb-4">Launch without arguments for interactive prompt (recommended primary mode):</p>
              <div className="bg-slate-900 text-sky-300 p-6 rounded-lg font-mono text-sm border border-slate-700 shadow-lg">
                <div className="flex items-center">
                  <span className="text-slate-500 mr-4">$</span>
                  <span>aiexecode</span>
                </div>
              </div>
            </div>

            <div className="group">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-sky-500 text-white rounded-full mr-3 text-sm font-bold">2</span>
                Starting a New Mission
              </h3>
              <div className="bg-slate-900 text-sky-300 p-6 rounded-lg font-mono text-sm space-y-3 border border-slate-700 shadow-lg overflow-x-auto">
                <div className="flex items-start">
                  <span className="text-slate-500 mr-4 flex-shrink-0">$</span>
                  <span>aiexecode "refactor authentication module to use JWT tokens"</span>
                </div>
                <div className="flex items-start">
                  <span className="text-slate-500 mr-4 flex-shrink-0">$</span>
                  <span>aiexecode "add unit tests for the user service"</span>
                </div>
                <div className="flex items-start">
                  <span className="text-slate-500 mr-4 flex-shrink-0">$</span>
                  <span>aiexecode "optimize database queries in the analytics module"</span>
                </div>
              </div>
            </div>

            <div className="group">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                <span className="inline-flex items-center justify-center w-8 h-8 bg-indigo-500 text-white rounded-full mr-3 text-sm font-bold">3</span>
                Continue Previous Session
              </h3>
              <p className="text-gray-700 mb-4">Resume work using session ID:</p>
              <div className="bg-slate-900 text-sky-300 p-6 rounded-lg font-mono text-sm border border-slate-700 shadow-lg overflow-x-auto">
                <div className="flex items-center">
                  <span className="text-slate-500 mr-4">$</span>
                  <span>aiexecode -c abc1234567890def "now add integration tests"</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function GetStarted() {
  return (
    <section id="get-started" className="relative py-24 bg-gradient-to-br from-slate-900 via-sky-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-sky-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="relative w-fit mx-auto text-4xl md:text-5xl font-bold mb-8 pb-3 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-full after:bg-gradient-to-r after:from-sky-300 after:to-indigo-300 after:rounded-full">Ready to Get Started?</h2>
        <p className="text-xl text-sky-100 mb-12 max-w-2xl mx-auto">
          Install AIEXEcode and start automating your coding tasks today. Join developers who are revolutionizing their workflow.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="https://github.com/kstost/aiexecode" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-slate-900 bg-white rounded-lg hover:bg-sky-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
            <span>View on GitHub</span>
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div className="bg-white">
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        @keyframes float-triangle {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
          50% { transform: translate3d(60px, -60px, 0) rotate(10deg); }
        }
        @keyframes float-diamond {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
          50% { transform: translate3d(-40px, 50px, 0) rotate(-12deg); }
        }
        @keyframes float-hex {
          0%, 100% { transform: translate3d(0, 0, 0) rotate(0deg); }
          50% { transform: translate3d(50px, 40px, 0) rotate(8deg); }
        }
        @keyframes float-circle {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(-40px, -50px, 0) scale(1.08); }
        }

        @keyframes grid-shift {
          0% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(-60px, -30px, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .geometric-grid {
          position: absolute;
          inset: -15%;
          background-image:
            linear-gradient(120deg, rgba(125, 211, 252, 0.07) 1px, transparent 1px),
            linear-gradient(-120deg, rgba(165, 243, 252, 0.05) 1px, transparent 1px);
          background-size: 160px 160px;
          background-position: center;
          opacity: 0.35;
          pointer-events: none;
          -webkit-mask-image: radial-gradient(circle at center, rgba(255, 255, 255, 0.7), transparent 70%);
          mask-image: radial-gradient(circle at center, rgba(255, 255, 255, 0.7), transparent 70%);
          animation: grid-shift 9s ease-in-out infinite;
        }
        .geometric-shape {
          position: absolute;
          border: 1px solid rgba(125, 211, 252, 0.4);
          background: linear-gradient(135deg, rgba(14, 165, 233, 0.22), rgba(99, 102, 241, 0.18));
          mix-blend-mode: screen;
          opacity: 0.35;
          filter: drop-shadow(0 0 40px rgba(56, 189, 248, 0.25));
          pointer-events: none;
        }
        .geometric-triangle {
          top: 12%;
          left: 8%;
          width: 220px;
          height: 220px;
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
          animation: float-triangle 10s ease-in-out infinite;
        }
        .geometric-triangle-small {
          top: 26%;
          left: 20%;
          width: 160px;
          height: 160px;
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
          opacity: 0.28;
          animation: float-triangle 7s ease-in-out infinite;
          animation-delay: -2s;
        }

        .geometric-diamond {
          top: 38%;
          right: 30%;
          width: 160px;
          height: 160px;
          clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
          animation: float-diamond 8.5s ease-in-out infinite;
        }
        .geometric-diamond-small {
          top: 24%;
          right: 18%;
          width: 120px;
          height: 120px;
          clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
          opacity: 0.3;
          animation: float-diamond 6s ease-in-out infinite;
          animation-delay: -1s;
        }

        .geometric-hex {
          bottom: 10%;
          right: 8%;
          width: 210px;
          height: 210px;
          clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
          animation: float-hex 12s ease-in-out infinite;
        }
        @media (max-width: 768px) {
        .geometric-hex-alt {
          bottom: 26%;
          left: 12%;
          width: 180px;
          height: 180px;
          clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
          opacity: 0.3;
          animation: float-hex 9s ease-in-out infinite;
          animation-delay: -3s;
        }

        .geometric-circle {
          top: 58%;
          left: 18%;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          border: 1px solid rgba(165, 243, 252, 0.25);
          background: radial-gradient(circle at 30% 30%, rgba(56, 189, 248, 0.25), rgba(30, 64, 175, 0.18));
          opacity: 0.28;
          animation: float-circle 9s ease-in-out infinite;
          animation-delay: -4s;
        }

          .geometric-triangle,
          .geometric-diamond,
          .geometric-hex {
            width: 140px;
            height: 140px;
          }
          .geometric-diamond {
            top: 45%;
            right: 12%;
          }
        }
      `}</style>
      <Hero />
      <Overview />
      <Features />
      <Installation />

      <Usage />
      <GetStarted />
      <footer className="py-8 text-center text-sm text-gray-600 bg-slate-900 text-slate-400 border-t border-slate-800">
        © {new Date().getFullYear()} AIEXEcode — by 코드깎는노인 · Made with ❤️
      </footer>
    </div>
  )
}
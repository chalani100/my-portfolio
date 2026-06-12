function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-violet-100 selection:text-violet-800">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <span className="font-mono font-bold text-lg text-violet-600">23IT0462</span>
              <span className="text-slate-300">|</span>
              <span className="font-semibold text-slate-700 tracking-tight">LC Gamage</span>
            </div>
            <nav className="flex space-x-1 sm:space-x-4">
              <a href="#home" className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-violet-600 transition-colors duration-200">Home</a>
              <a href="#about" className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-violet-600 transition-colors duration-200">About</a>
              <a href="#projects" className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-violet-600 transition-colors duration-200">Projects</a>
              <a href="#contact" className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-violet-600 transition-colors duration-200">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
        <section id="home" className="scroll-mt-20 flex flex-col-reverse md:flex-row items-center justify-between gap-12 py-16 sm:py-24">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Lakeesha Chalani Gamage
            </h1>
            <p className="text-xl sm:text-2xl text-violet-600 font-semibold">
              Hi, I'm Lakeesha. Welcome to my personal engineering portfolio.
            </p>
            <p className="text-base sm:text-lg text-slate-500 max-w-xl leading-relaxed mx-auto md:mx-0">
              I am a Software Engineering undergraduate student focused on building highly usable and interactive web solutions.
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-4">
              <a
                href="#projects"
                className="px-8 py-3.5 text-sm font-semibold text-white bg-violet-600 hover:bg-violet-700 rounded-lg shadow-sm hover:shadow transition-all duration-200"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3.5 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg transition-all duration-200"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="flex-shrink-0">
            <img
              src="/profile.jpg"
              alt="Lakeesha Chalani Gamage"
              className="w-64 h-64 sm:w-72 sm:h-72 rounded-full object-cover border-4 border-white shadow-md mx-auto"
            />
          </div>
        </section>

        <section id="about" className="scroll-mt-20 border-t border-slate-200 pt-16">
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 tracking-tight">About Me</h2>
                <div className="h-1 w-12 bg-purple-600 rounded mt-2"></div>
              </div>
              <p className="text-slate-600 leading-relaxed">
                I am an IT student passionate about building practical software solutions. This portfolio acts as a checkpoint for my learning progress, incorporating clear layout hierarchies and clean code structure.
              </p>
              <div className="p-4 bg-purple-50 border border-purple-100 rounded-lg space-y-3">
                <div>
                  <span className="text-xs font-semibold text-purple-700 uppercase tracking-wider block mb-1">Internship Goal</span>
                  <p className="text-slate-800 font-medium text-sm">
                    My next major goal is to get a <span className="text-purple-700 font-semibold">Software Engineering Internship</span> in the industry.
                  </p>
                </div>
                <div>
                  <span className="text-xs font-semibold text-purple-700 uppercase tracking-wider block mb-1">Long-term Goals</span>
                  <p className="text-slate-700 text-xs">
                    To successfully apply the theoretical knowledge and Human-Computer Interaction (HCI) principles acquired at university to practical projects.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-3 space-y-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-900">Educational Background</h3>
                <ul className="space-y-3 pl-1">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-500 flex-shrink-0"></span>
                    <div>
                      <p className="font-semibold text-slate-800 text-sm">National Diploma in Technology (NDT)</p>
                      <p className="text-xs text-slate-500">Institute of Technology, University of Moratuwa | 2023 - Present</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-slate-900">Technical Skills</h3>
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-1">
                    <span className="font-semibold text-violet-600 block">Frontend</span>
                    <p className="text-slate-600 text-xs">React, JavaScript, HTML5, CSS3, Tailwind CSS</p>
                  </div>
                  <div className="space-y-1">
                    <span className="font-semibold text-violet-600 block">Backend</span>
                    <p className="text-slate-600 text-xs">Node.js, Express.js, MongoDB</p>
                  </div>
                  <div className="space-y-1">
                    <span className="font-semibold text-violet-600 block">Styling</span>
                    <p className="text-slate-600 text-xs">Tailwind CSS, Vanilla CSS</p>
                  </div>
                  <div className="space-y-1">
                    <span className="font-semibold text-violet-600 block">Tools</span>
                    <p className="text-slate-600 text-xs">Git, GitHub, VS Code</p>
                  </div>
                  <div className="sm:col-span-2 space-y-1 border-t border-slate-200 pt-3">
                    <span className="font-semibold text-purple-600 block">Low-Level AVR Microcontroller</span>
                    <ul className="list-disc pl-5 space-y-1 text-slate-600 text-xs mt-1">
                      <li>AVR Microcontroller Assembly (ATmega328P)</li>
                      <li>Direct register manipulations (DDRB, PORTB, PINB)</li>
                      <li>Timer/Counter programming & interrupts</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-20 border-t border-slate-200 pt-16 space-y-10">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">University Projects</h2>
            <div className="h-1 w-12 bg-violet-600 rounded mx-auto"></div>
            <p className="text-sm text-slate-600">
              Selected projects built individually or collaboratively as part of academic modules.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <article className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:border-violet-400 transition-all duration-300 flex flex-col justify-center">
              <div className="p-6 flex flex-col space-y-4">
                <h3 className="font-bold text-slate-900 text-base hover:text-violet-600 transition-colors">Library Management System</h3>
                <div className="pt-2">
                  <a
                    href="https://github.com/chalani100/Library-Management-System"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-semibold text-violet-600 hover:text-violet-800 transition-colors"
                  >
                    View Repository
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>

            <article className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:border-violet-400 transition-all duration-300 flex flex-col justify-center">
              <div className="p-6 flex flex-col space-y-4">
                <h3 className="font-bold text-slate-900 text-base hover:text-violet-600 transition-colors">E-Commerce Backend System</h3>
                <div className="pt-2">
                  <a
                    href="https://github.com/Rasanga086/E-commerce-backend-system.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-semibold text-violet-600 hover:text-violet-800 transition-colors"
                  >
                    View Repository
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>

            <article className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:border-violet-400 transition-all duration-300 flex flex-col justify-center">
              <div className="p-6 flex flex-col space-y-4">
                <h3 className="font-bold text-slate-900 text-base hover:text-violet-600 transition-colors">Student Management System</h3>
                <div className="pt-2">
                  <a
                    href="https://github.com/nawodya2003/NSS-SMS.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-semibold text-violet-600 hover:text-violet-800 transition-colors"
                  >
                    View Repository
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 border-t border-slate-200 pt-16">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Get In Touch</h2>
              <div className="h-1 w-12 bg-violet-600 rounded mx-auto"></div>
              <p className="text-slate-600 text-sm leading-relaxed max-w-lg mx-auto">
                Have a project in mind, want to discuss software engineering, or interested in internship possibilities? Feel free to reach out!
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 font-medium text-slate-700 text-sm">
              <div className="flex items-center gap-3 bg-white px-5 py-3.5 rounded-xl border border-slate-200 shadow-sm w-full sm:w-auto justify-center">
                <div className="p-2 bg-violet-50 text-violet-600 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:lakeeshagamage43@gmail.com" className="hover:text-violet-600 hover:underline">lakeeshagamage43@gmail.com</a>
              </div>
              <div className="flex items-center gap-3 bg-white px-5 py-3.5 rounded-xl border border-slate-200 shadow-sm w-full sm:w-auto justify-center">
                <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span>University of Moratuwa, Sri Lanka</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-8 mt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <p>&copy; {new Date().getFullYear()} Lakeesha Chalani Gamage. All rights reserved.</p>
            <p className="text-slate-400 mt-1">Index: 23IT0462 | IT Student Portfolio</p>
          </div>
          <div className="flex gap-4">
            <span className="font-medium text-slate-600">University of Moratuwa</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

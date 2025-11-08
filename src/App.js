import React, { useEffect } from 'react';

export default function App() {
  // Smooth scroll function with navbar offset
  useEffect(() => {
    const handleNavClick = (e) => {
      const href = e.currentTarget.getAttribute('href');

      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          const navbarHeight = 80; // Adjust this based on your navbar height
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    // Add click listeners to all nav links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', handleNavClick);
    });

    // Cleanup
    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleNavClick);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 w-full bg-[#1e1e1f] text-white p-4 shadow-lg z-50">
        <div className="container flex items-center justify-between mx-auto">
          <h1 className="flex items-center gap-2 text-3xl font-bold">
            <a href="#" className="p-3 rounded hover:bg-sky-700">
              @kurt.poklay();
            </a>
            <span className="hidden text-sm text-gray-400 md:inline">
              // warning: function may contain bugs and coffee
            </span>
          </h1>
          <nav className="flex gap-4">
            <a href="#about" className="p-2 text-sm rounded hover:bg-sky-700 md:text-base">About</a>
            <a href="#skills" className="p-2 text-sm rounded hover:bg-sky-700 md:text-base">Skills</a>
            <a href="#education" className="p-2 text-sm rounded hover:bg-sky-700 md:text-base">Education</a>
            <a href="#seminars" className="p-2 text-sm rounded hover:bg-sky-700 md:text-base">Seminars</a>
            <a href="#projects" className="p-2 text-sm rounded hover:bg-sky-700 md:text-base">Projects</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div
        className="min-h-screen bg-fixed bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/811.png)`,
          backgroundColor: '#000'
        }}
      >
        <div className="flex justify-center min-h-screen py-8 bg-gradient-to-b from-transparent via-black/80 to-black">
          <main className="z-10 w-full max-w-4xl p-6 mx-8 border shadow-lg rounded-xl bg-white/10 backdrop-blur-md border-white/30">

            {/* Basic Info Section */}
            <section id="basic-info" className="relative overflow-hidden max-w-5xl mx-auto p-8 my-8 mt-20 rounded-3xl bg-gradient-to-br from-[#2d2d2e] to-[#1a1a1b] text-amber-50 shadow-2xl border border-[#383838]">
              <div className="flex flex-col-reverse items-center justify-between gap-8 md:flex-row">
                <div className="flex-1 space-y-2 text-center md:text-left md:space-y-3">
                  <p className="text-sm tracking-wide text-amber-200/80 md:text-base">Hello there, I'm</p>
                  <h1 className="text-3xl font-extrabold text-transparent md:text-4xl bg-gradient-to-r from-amber-200 to-amber-100 bg-clip-text">
                    HERSON KURT T. POKLAY
                  </h1>
                  <div className="flex items-center">
                    <h2 className="mr-4 text-lg font-semibold md:text-xl text-amber-100/90">
                      Aspiring Software Developer
                    </h2>
                    <div className="flex-1 h-px bg-gradient-to-r from-amber-200/40 to-transparent"></div>
                  </div>

                  {/* Social Icons */}
                  <div className="flex flex-wrap items-center justify-center gap-4 pt-4 md:justify-start">
                    <div className="flex items-center justify-center gap-3 p-3 rounded-full bg-amber-200/10">
                      <a href="https://github.com/KuuurtP" className="p-2 transition-colors hover:text-amber-200">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                      <a href="https://www.facebook.com/kurt.poklay.9/" className="p-2 transition-colors hover:text-amber-200">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </a>
                      <a href="https://www.linkedin.com/in/herson-kurt-poklay-1a64162a3/" className="p-2 transition-colors hover:text-amber-200">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                        </svg>
                      </a>
                    </div>
                    <a
                      href={`${process.env.PUBLIC_URL}/images/POKLAY.pdf`}
                      download
                      className="flex items-center gap-2 px-4 py-2 transition-all border rounded-lg bg-gradient-to-r from-amber-200/20 to-amber-200/10 hover:from-amber-200/30 hover:to-amber-200/20 text-amber-200 border-amber-200/30 hover:border-amber-200/50"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download CV
                    </a>
                  </div>
                </div>

                {/* Profile Photo */}
                <div className="p-2 transition-transform rounded-full shadow-lg md:mr-8 bg-gradient-to-br from-amber-200/20 to-transparent hover:scale-105">
                  <div className="p-1 border rounded-full border-amber-200/30">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/Profile Pic.png`}
                      alt="Profile Photo"
                      className="object-cover border-2 rounded-full w-60 h-60 border-amber-200/40"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* About Section */}
            <section id="about" className="relative overflow-hidden max-w-5xl mx-auto p-8 my-8 rounded-3xl bg-[#1e1e1f] text-amber-50 shadow-2xl border border-[#383838]">
              <div className="flex items-center mb-5 text-2xl font-bold text-amber-100/90">
                About Me
                <div className="h-[1px] w-32 bg-amber-200 md:w-96 ml-4"></div>
              </div>
              <section className="flex flex-col gap-4 text-sm text-justify md:text-lg md:flex-row md:gap-8 md:items-center">
                <div className="flex justify-center">
                  <img
                    className="mb-3 rounded-lg w-96"
                    src={`${process.env.PUBLIC_URL}/images/GAMES.png`}
                    alt="about photo"
                  />
                </div>
                <div className="md:w-7/12">
                  <p className="mb-3">
                    Hi, I'm Kurt. I'm an aspiring software developer with a deep interest in creating clean, efficient, and meaningful software. Whether it's building small tools or large-scale applications, I aim to make a positive impact through what I create.
                  </p>
                  <p className="mb-3">
                    My goal is to design user-friendly, scalable, and visually engaging solutions. I'm constantly learning new technologies to improve my craft and contribute effectively to every project I work on.
                  </p>
                </div>

              </section>
            </section>

            {/* Skills Section */}
            <section id="skills" className="relative overflow-hidden max-w-5xl mx-auto p-8 my-8 rounded-3xl bg-[#1e1e1f] text-amber-50 shadow-2xl border border-[#383838]">
              <div className="flex items-center mb-5 text-2xl font-bold text-amber-100/90">
                <div className="h-[1px] w-10 bg-amber-200 md:w-20 mr-2"></div>
                Skills
              </div>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
                {[
                  { name: 'HTML', img: 'html.png' },
                  { name: 'CSS', img: 'css.png' },
                  { name: 'JavaScript', img: 'JS.png' },
                  { name: 'React.js', img: 'REACT.png' },
                  { name: 'Node.js', img: 'nodejs.png' },
                  { name: 'Laravel', img: 'laravel.png' },
                  { name: 'MySQL', img: 'MYSQL.png' },
                  { name: 'MongoDB', img: 'cdnlogo.com_mongodb-icon.svg' }
                ].map((skill) => (
                  <div key={skill.name} className="flex items-center gap-3 px-3 py-4 transition-colors border rounded border-amber-200 hover:bg-amber-200 hover:bg-opacity-10">
                    <img src={`${process.env.PUBLIC_URL}/images/${skill.img}`} alt={skill.name} className="object-cover w-10 h-10" />
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center mt-6 mb-5 text-2xl font-bold text-amber-100/90">
                <div className="h-[1px] w-10 bg-amber-200 md:w-20 mr-2"></div>
                Tools
              </div>
              <div className="grid grid-cols-2 gap-4 mt-10 md:grid-cols-3 xl:grid-cols-4">
                {[
                  { name: 'VS Code', img: 'VSCODE.png' },
                  { name: 'Git', img: 'Git.png' },
                  { name: 'GitHub', img: 'Github.png' },
                  { name: 'XAMPP', img: 'XAMPP.png' },
                  { name: 'Google Colab', img: 'Colab.png' }
                ].map((tool) => (
                  <div key={tool.name} className="flex items-center gap-3 px-3 py-4 transition-colors border rounded border-amber-200 hover:bg-amber-200 hover:bg-opacity-10">
                    <img src={`${process.env.PUBLIC_URL}/images/${tool.img}`} alt={tool.name} className="object-cover w-10 h-10" />
                    <span className="text-sm font-medium">{tool.name}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Education Section */}
            <section id="education" className="relative overflow-hidden max-w-5xl mx-auto p-8 my-8 rounded-3xl bg-[#1e1e1f] px-5 py-10 md:px-12 text-left border border-[#383838] text-amber-50 mx-3 mb-10">
              <header>
                <div className="flex items-center mb-5 text-2xl font-bold text-amber-100/90">
                  Educational Attainment
                  <div className="h-[1px] w-32 bg-amber-200 md:w-96 ml-4"></div>
                </div>
              </header>
              <div className="space-y-6">
                {[
                  {
                    logo: 'UC.png',
                    color: 'blue',
                    title: 'Tertiary Education',
                    degree: 'Bachelor of Science in Information Technology - Web Technology',
                    school: 'University of the Cordilleras',
                    location: 'Gov. Pack Rd., Baguio City',
                    years: '2022 - 2025'
                  },
                  {
                    logo: 'SLU.png',
                    color: 'green',
                    title: 'Senior High School',
                    degree: 'STEM Strand',
                    school: 'Saint Louis University Laboratory Senior High School',
                    location: '84 C.M. Recto St, Baguio, Benguet',
                    years: '2019 - 2021'
                  },
                  {
                    logo: 'SLU.png',
                    color: 'purple',
                    title: 'Junior High School',
                    degree: '',
                    school: 'Saint Louis University Laboratory Junior High School',
                    location: '84 C.M. Recto St, Baguio, Benguet',
                    years: '2015 - 2019'
                  },
                  {
                    logo: 'SLSC.png',
                    color: 'orange',
                    title: 'Primary Education',
                    degree: '',
                    school: 'Saint Louis School Center',
                    location: 'Assumption Rd, Baguio, Benguet',
                    years: '2011 - 2015'
                  }
                ].map((edu, index) => (
                  <div key={index} className="flex items-stretch gap-4">
                    <div className="flex items-center rounded-md">
                      <img src={`${process.env.PUBLIC_URL}/images/${edu.logo}`} alt={`${edu.school} Logo`} className="object-contain w-16 h-16" />
                    </div>
                    <div className={`pl-4 border-l-4 border-${edu.color}-400 hover:border-${edu.color}-500 transition-colors`}>
                      <h3 className={`text-lg font-semibold text-${edu.color}-300 mb-2`}>{edu.title}</h3>
                      <div className="space-y-1 text-sm md:text-base">
                        {edu.degree && <p className="font-medium text-white">{edu.degree}</p>}
                        <p className="text-gray-300">{edu.school}</p>
                        <p className="text-gray-400">{edu.location}</p>
                        <p className={`text-${edu.color}-400 text-sm`}>{edu.years}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Seminars Section */}
            <section id="seminars" className="relative overflow-hidden max-w-5xl mx-auto p-8 my-8 rounded-3xl bg-[#1e1e1f] text-amber-50 shadow-2xl border border-[#383838]">
              <div className="flex items-center mb-5 text-2xl font-bold text-amber-100/90">
                Seminars
                <div className="h-[1px] w-32 bg-amber-200 md:w-96 ml-4"></div>
              </div>
              <div className="pl-4 space-y-6 border-l-4 border-gray-400">
                <div className="p-4 rounded-lg">
                  <h3 className="mb-2 text-lg font-semibold text-white">
                    Backlog to the Future: Product Leadership for AI
                  </h3>
                  <div className="grid grid-cols-1 gap-2 mb-3 text-sm md:grid-cols-2">
                    <p className="text-white">
                      <span className="font-medium text-white">Date:</span> February 28, 2025
                    </p>
                    <p className="text-white">
                      <span className="font-medium text-white">Venue:</span> University of the Cordilleras
                    </p>
                  </div>
                  <button
                    onClick={() => window.open(`${process.env.PUBLIC_URL}/images/cert.jpg`, '_blank')}
                    className="inline-block px-4 py-2 font-medium text-black transition rounded bg-amber-500 hover:bg-amber-600"
                  >
                    View Certificate
                  </button>
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="relative overflow-hidden max-w-5xl mx-auto p-8 my-8 rounded-3xl bg-[#1e1e1f] text-amber-50 shadow-2xl border border-[#383838]">
              <div className="flex items-center mb-5 text-2xl font-bold text-amber-100/90">
                Projects
                <div className="h-[1px] w-32 bg-amber-200 md:w-96 ml-4"></div>
              </div>
              <div className="flex flex-col gap-8 p-4 md:flex-row">
                <div className="flex-shrink-0">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/OOAK.png`}
                    alt="Project Thumbnail"
                    className="object-cover border-2 border-gray-700 w-60 h-60"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <div className="mb-4">
                    <h3 className="mb-2 text-lg font-semibold text-white">OOAK Coffee Website</h3>
                    <p className="text-white">
                      The COFFEA website is an AI-powered platform designed to elevate customer engagement and streamline operations for Ooak Coffee, a specialty coffee shop in Baguio City. Built with React.js, Node.js, and MongoDB, the platform prioritizes usability and scalability. By integrating AI, COFFEA helps small businesses like Ooak Coffee reduce operational costs while fostering loyalty and satisfaction in a competitive market.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 text-sm font-medium text-white bg-green-600 rounded-full">MongoDB</span>
                    <span className="px-3 py-1 text-sm font-medium text-white bg-gray-800 rounded-full">Express</span>
                    <span className="px-3 py-1 text-sm font-medium text-white bg-blue-500 rounded-full">React</span>
                    <span className="px-3 py-1 text-sm font-medium text-white bg-gray-700 rounded-full">Node.js</span>
                  </div>
                  <div className="mt-auto">
                    <a
                      href="https://ooak-capstone-client.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-2 text-white transition-all bg-blue-600 border-2 border-gray-800 rounded-md hover:bg-blue-700"
                    >
                      Visit Project
                    </a>
                  </div>
                </div>
              </div>
            </section>

          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1e1e1f] text-white p-4 shadow-lg">
        <div className="container flex items-center justify-center h-20 mx-auto">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Kurt Poklay
            <span className="block mt-1 text-sm">All rights reserved</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
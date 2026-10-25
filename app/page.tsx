import AnimatedSection from "./AnimatedSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 md:px-16">
        <a href="#" className="text-xl font-bold tracking-wide">
          PK<span className="text-blue-400">.</span>
        </a>

        <div className="flex gap-6 text-sm text-gray-300">
          <a href="#about" className="transition hover:text-blue-400">
            About
          </a>
          <a href="#skills" className="transition hover:text-blue-400">
  Skills
</a>
          <a href="#projects" className="transition hover:text-blue-400">
            Projects
          </a>
          <a href="#contact" className="transition hover:text-blue-400">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex min-h-[75vh] flex-col justify-center px-8 md:px-24">
      <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
  Computer Science Student · Open to Opportunities
</div>

        <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
        Hi, I&apos;m{" "}
<span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
  Prashant.
</span>
          <br />
          I build things for the web.
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
          A Computer Science student passionate about software development,
          problem-solving, and building useful digital experiences.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-blue-500 px-7 py-3 font-medium transition hover:bg-blue-600"
          >
            Explore My Work ↗️
          </a>

          <a
            href="#contact"
            className="rounded-full border border-gray-700 px-7 py-3 transition hover:border-blue-400"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* About Section */}
      <AnimatedSection
        id="about"
        className="border-t border-gray-800 px-8 py-20 md:px-24"
      >
        <h2 className="text-3xl font-bold">About Me</h2>

        <p className="mt-5 max-w-2xl leading-8 text-gray-400">
          I&apos;m a Computer Science student exploring web development and
          building projects to improve my programming skills. I enjoy learning
          new technologies and turning ideas into working applications.
        </p>
      </AnimatedSection>
       {/* Skills Section */}
      <AnimatedSection
        id="skills"
        className="border-t border-gray-800 px-8 py-20 md:px-24"
      >
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-400">
          My Expertise
        </p>

        <h2 className="text-3xl font-bold">Skills & Technologies</h2>

        <p className="mt-4 max-w-2xl leading-7 text-gray-400">
          Technologies I'm learning and using to build practical projects.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {[
            { name: "Python", category: "Programming" },
            { name: "Java", category: "Programming" },
            { name: "JavaScript", category: "Web Development" },
            { name: "React", category: "Frontend" },
            { name: "Next.js", category: "Frontend" },
            { name: "Tailwind CSS", category: "Styling" },
            { name: "Flask", category: "Backend" },
            { name: "SQLite", category: "Database" },
            { name: "Git & GitHub", category: "Tools" },
          ].map((skill) => (
            <div
              key={skill.name}
              className="rounded-xl border border-gray-800 bg-gray-900/50 p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-500"
            >
              <h3 className="font-semibold">{skill.name}</h3>
              <p className="mt-2 text-sm text-gray-500">
                {skill.category}
              </p>
            </div>
          ))}
        </div>
      </AnimatedSection>
      {/* Projects Section */}
      <AnimatedSection
        id="projects"
        className="border-t border-gray-800 px-8 py-20 md:px-24"
      >
        <h2 className="text-3xl font-bold">Featured Projects</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-gray-800 bg-gray-900/50 p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500">
            <p className="text-sm text-blue-400">
              PYTHON · FLASK · SQLITE
            </p>

            <h3 className="mt-4 text-xl font-semibold">Expense Tracker</h3>

            <p className="mt-3 leading-7 text-gray-400">
              A web application for recording expenses and analysing spending.
            </p>

            <a
              href="https://github.com/Prashant181910/expense-tracker"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block text-blue-400 hover:underline"
            >
              View on GitHub ↗️
            </a>
          </article>

          <article className="rounded-2xl border border-gray-800 bg-gray-900/50 p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500">
            <p className="text-sm text-blue-400">NEXT.JS · REACT</p>

            <h3 className="mt-4 text-xl font-semibold">
              Portfolio Website
            </h3>

            <p className="mt-3 leading-7 text-gray-400">
              A personal website showcasing my skills, projects, and learning
              journey.
            </p>

            <span className="mt-5 inline-block text-gray-500">
              You&apos;re viewing this project now.
            </span>
          </article>
        </div>

      </AnimatedSection>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
  {/* Expense Tracker */}
  <article className="group rounded-2xl border border-gray-800 bg-gray-900/40 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/60 hover:bg-gray-900">
    <div className="flex items-start justify-between">
      <div className="rounded-xl border border-gray-700 bg-gray-800 p-3 text-2xl">
        💰
      </div>

      <span className="text-sm text-gray-500">01 / 02</span>
    </div>

    <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-blue-400">
      Python · Flask · SQLite
    </p>

    <h3 className="mt-3 text-2xl font-bold transition-colors group-hover:text-blue-400">
      Expense Tracker
    </h3>

    <p className="mt-4 leading-7 text-gray-400">
      A web application designed to record expenses, organise transactions,
      and help users understand their spending habits.
    </p>

    <div className="mt-5 flex flex-wrap gap-2">
      {["Python", "Flask", "SQLite", "JavaScript"].map((tech) => (
        <span
          key={tech}
          className="rounded-full border border-gray-800 px-3 py-1 text-xs text-gray-400"
        >
          {tech}
        </span>
      ))}
    </div>

    <a
      href="https://github.com/Prashant181910/expense-tracker"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-7 inline-flex items-center gap-2 font-medium text-white transition-colors hover:text-blue-400"
    >
      View source code <span>↗️</span>
    </a>
  </article>

  {/* Portfolio Website */}
  <article className="group rounded-2xl border border-gray-800 bg-gray-900/40 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/60 hover:bg-gray-900">
    <div className="flex items-start justify-between">
      <div className="rounded-xl border border-gray-700 bg-gray-800 p-3 text-2xl">
        💻
      </div>

      <span className="text-sm text-gray-500">02 / 02</span>
    </div>

    <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-blue-400">
      Next.js · React · Tailwind CSS
    </p>

    <h3 className="mt-3 text-2xl font-bold transition-colors group-hover:text-blue-400">
      Personal Portfolio
    </h3>

    <p className="mt-4 leading-7 text-gray-400">
      A responsive portfolio website showcasing my background, technical
      skills, projects, and development journey.
    </p>

    <div className="mt-5 flex flex-wrap gap-2">
      {["Next.js", "React", "Tailwind CSS", "Framer Motion"].map((tech) => (
        <span
          key={tech}
          className="rounded-full border border-gray-800 px-3 py-1 text-xs text-gray-400"
        >
          {tech}
        </span>
      ))}
    </div>

    <span className="mt-7 inline-flex items-center gap-2 text-sm text-gray-500">
      Currently viewing this website
    </span>
  </article>
</div>
      {/* Contact Section */}
      {/* Contact Section */}
<AnimatedSection
  id="contact"
  className="border-t border-gray-800 px-8 py-20 text-center md:px-24"
>
  <p className="mb-3 text-sm font-medium uppercase tracking-widest text-blue-400">
    GET IN TOUCH
  </p>

  <h2 className="text-3xl font-bold md:text-4xl">
    Let&apos;s Build Something Together
  </h2>

  <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-400">
    I&apos;m interested in learning, collaborating on projects, and exploring
    opportunities in software development.
  </p>

  <div className="mt-8 flex flex-wrap justify-center gap-4">
    {/* GitHub */}
    <a
      href="https://github.com/Prashant181910"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full border border-gray-700 px-6 py-3 transition hover:border-blue-400 hover:text-blue-400"
    >
      GitHub ↗️
    </a>

    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/prashant-kumar-a19225325/"
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full border border-gray-700 px-6 py-3 transition hover:border-blue-400 hover:text-blue-400"
    >
      LinkedIn ↗️
    </a>

    {/* Email */}
    <a
      href="mailto:pras33hant@gmail.com"
      className="rounded-full bg-blue-500 px-6 py-3 font-medium transition hover:bg-blue-600"
    >
      Email Me ↗️
    </a>
  </div>
</AnimatedSection>

      {/* Footer */}
<footer className="border-t border-gray-800 px-8 py-6 text-center text-sm text-gray-400">
  <p>
  ©️ 2026 Prashant. Built with Next.js and Tailwind CSS.
  </p>
</footer>
    </main>
  );
}
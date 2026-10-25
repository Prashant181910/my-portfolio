import AnimatedBackground from "./AnimatedBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gray-950 text-white">
      {/* Animated background */}
      <AnimatedBackground />

      {/* Portfolio content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="flex items-center justify-between border-b border-gray-800 px-6 py-5 md:px-16">
          <a href="#home" className="text-2xl font-bold tracking-tight">
            PK.
          </a>

          <div className="flex items-center gap-5 text-sm text-gray-300 md:gap-8">
            <a
              href="#about"
              className="transition hover:text-blue-400"
            >
              About
            </a>

            <a
              href="#projects"
              className="transition hover:text-blue-400"
            >
              Projects
            </a>

            <a
              href="#skills"
              className="transition hover:text-blue-400"
            >
              Skills
            </a>

            <a
              href="#contact"
              className="transition hover:text-blue-400"
            >
              Contact
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <section
          id="home"
          className="flex min-h-[80vh] flex-col justify-center px-6 py-24 md:px-24"
        >
          <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-blue-400">
            Hello, World! 👋
          </p>

          <h1 className="max-w-5xl text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
            Hi, I&apos;m Prashant.
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
              I build things for the web.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-400">
            A Computer Science student passionate about software development,
            problem-solving, and building useful digital experiences.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-blue-500 px-7 py-3 font-semibold text-white transition hover:bg-blue-600"
            >
              Explore My Work →
            </a>

            <a
              href="#contact"
              className="rounded-full border border-gray-700 px-7 py-3 font-semibold transition hover:border-blue-400 hover:text-blue-400"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-3 text-sm text-gray-400">
            <span className="rounded-full border border-gray-800 px-4 py-2">
              Computer Science
            </span>

            <span className="rounded-full border border-gray-800 px-4 py-2">
              Web Development
            </span>

            <span className="rounded-full border border-gray-800 px-4 py-2">
              Problem Solving
            </span>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="scroll-mt-20 border-t border-gray-800 px-6 py-20 md:px-24"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
            Get to know me
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">
            About Me
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            I&apos;m a Computer Science student exploring web development and
            building projects to improve my programming skills. I enjoy
            learning new technologies, solving problems, and turning ideas
            into working applications. My goal is to become a skilled software
            developer by continuously learning and creating useful products.
          </p>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="scroll-mt-20 border-t border-gray-800 px-6 py-20 md:px-24"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
            Technologies
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">
            Skills & Tools
          </h2>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {[
              "Python",
              "Java",
              "C",
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "HTML & CSS",
              "Tailwind CSS",
              "Flask",
              "SQLite",
              "Git & GitHub",
            ].map((skill) => (
              <div
                key={skill}
                className="rounded-xl border border-gray-800 bg-gray-900/60 p-5 text-center text-gray-300 transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-400"
              >
                {skill}
              </div>
            ))}
          </div>

          <p className="mt-5 text-sm text-gray-500">
            Technologies I&apos;m learning and using in my projects.
          </p>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="scroll-mt-20 border-t border-gray-800 px-6 py-20 md:px-24"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
            What I&apos;ve been building
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">
            Featured Projects
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* Project 1 */}
            <article className="group rounded-2xl border border-gray-800 bg-gray-900/60 p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10">
              <p className="text-sm font-medium text-blue-400">
                PYTHON · FLASK · SQLITE
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Expense Tracker
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                A web application for recording expenses, managing spending,
                and analysing personal financial activity.
              </p>

              <a
                href="https://github.com/Prashant181910/expense-tracker"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-block font-semibold text-gray-200 transition hover:text-blue-400"
              >
                View on GitHub ↗️
              </a>
            </article>

            {/* Project 2 */}
            <article className="group rounded-2xl border border-gray-800 bg-gray-900/60 p-7 transition duration-300 hover:-translate-y-2 hover:border-purple-500 hover:shadow-xl hover:shadow-purple-500/10">
              <p className="text-sm font-medium text-purple-400">
                NEXT.JS · REACT · TAILWIND CSS
              </p>

              <h3 className="mt-4 text-2xl font-bold">
                Personal Portfolio
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                A personal website showcasing my background, technical skills,
                projects, and professional contact information, with an
                animated visual design.
              </p>

              <a
                href="https://github.com/Prashant181910/my-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-block font-semibold text-gray-200 transition hover:text-purple-400"
              >
                View on GitHub ↗️
              </a>
            </article>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="scroll-mt-20 border-t border-gray-800 px-6 py-20 md:px-24"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">
            Let&apos;s connect
          </p>

          <h2 className="text-3xl font-bold md:text-4xl">
            Contact Me
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-gray-400">
            I&apos;m interested in software development, learning new
            technologies, and collaborating on useful projects. Feel free to
            connect with me.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:pras33hant@gmail.com"
              className="rounded-full bg-blue-500 px-6 py-3 font-semibold transition hover:bg-blue-600"
            >
              Email Me ↗️
            </a>

            <a
              href="https://www.linkedin.com/in/prashant-kumar-a19225325"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-gray-700 px-6 py-3 font-semibold transition hover:border-blue-400 hover:text-blue-400"
            >
              LinkedIn ↗️
            </a>

            <a
              href="https://github.com/Prashant181910"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-gray-700 px-6 py-3 font-semibold transition hover:border-blue-400 hover:text-blue-400"
            >
              GitHub ↗️
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-800 px-6 py-6 text-center text-sm text-gray-500">
          <p>
            ©️ 2026 Prashant. Built with Next.js, Tailwind CSS, and Framer
            Motion.
          </p>
        </footer>
      </div>
    </main>
  );
}
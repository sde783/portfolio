import Image from 'next/image'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import PrimaryNav from '@/components/PrimaryNav'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

const stats = [
  { label: 'Products launched', value: '14' },
  { label: 'Teams coached', value: '7' },
  { label: 'Uptime across projects', value: '99.94%' },
]

const projects = [
  {
    title: 'Visa Account Attack Intelligence(VAAI)',
    description:
      'VAAI is a real-time fraud detection system that leverages machine learning to process over 20 billion account events monthly,achieving a 40% reduction in false positives and a 3x improvement in attack detection across global issuers.',
    image: '/images/project-pulseboard.svg',
    tech: ['Java', 'Microservices', 'REST', 'MySQL','React'],
  },
  {
    title: 'Ecommerce Threat Detection(ETD)',
    description:
      'ETD is an AI-driven system that monitors ober 10M transactions daily,detecting fraud,bot attacks and anomalies with over 95% accuracy over global merchant platforms in real time ',
    image: '/images/project-northstar.svg',
    tech: ['React', 'Kafka Streams', 'GraphQL','MySQL'],
    
  },
  {
    title: 'Oracle Cloud Infrastructure Modernization (OCI)',
    description:
      'OCI project modernized legacy systems by migrating 250+ adapters and connectors to Oracle cloud, enabling 99.9% uptime,accelerating partner onboarding by 40%, and reducing annual infrastructure costs by $2.5M',
    image: '/images/project-harbor.svg',
    tech: ['Oracle Integration Cloud', 'Java', 'Oracle Data Flow'],
    
  },
]

const recognitions = [
  {
    title: 'Women in Technology Leadership',
    org: 'VISA',
    year: '2024',
    detail: 'Recognized for pioneering AI solutions that empower women-led businesses through safer and smarter digital payment systems.',
  },
  {
    title: 'AI Innovation Excellence',
    org: 'VISA',
    year: '2023',
    detail: 'Led a 70+ member team to develop a GenAI powered risk intelligence platform.',
  },
  {
    title: 'Distinguised Mentor',
    org: 'Oracle',
    year: '2022',
    detail: 'Honored for providing career mentorship to 50+ junior engineers, fostering a culture of growth and inclusivity within the engineering community.',
  },
]

const proficiencies = [
  { name: 'Architecture Design and Review', level: 92 },
  { name: 'Technical Roadmap Planning', level: 90 },
  { name: 'REST & API Design', level: 86 },
  { name: 'Data Visualization', level: 84 },
  { name: 'UX Storytelling', level: 88 },
  { name: 'Product Strategy', level: 94 },
]

const toolkits = [
  {
    title: 'Frontend Craft',
    items: ['Next.js', 'Vite', 'Storybook', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Data & Cloud',
    items: ['PostgreSQL', 'Supabase', 'BigQuery', 'Cloud Run', 'Docker'],
  },
  {
    title: 'Collaboration',
    items: ['Figma', 'Linear', 'Jira', 'Notion', 'Miro'],
  },
]

const orgFocus = [
  {
    title: 'Reliability & scale',
    detail:
      'Hardening observability, SLO scorecards, and deployment safety rails to keep a 99.95% uptime promise.',
  },
  {
    title: 'Responsible AI rollout',
    detail:
      'Partnering with research, policy, and GTM to codify guardrails and review loops for every generative AI feature.',
  },
  {
    title: 'People systems',
    detail:
      'Mentoring engineering managers, hiring mission-driven tech leads, and modernizing our growth framework.',
  },
]

export default function Home() {
  return (
    <div className="relative isolate min-h-screen bg-slate-950 text-slate-100">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-hero-glow opacity-60"
      />

      <PrimaryNav navItems={navItems} />

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-24 pt-16 sm:px-8 lg:gap-32">
        <section
          id="home"
          className="grid gap-12 pt-16 lg:grid-cols-[1.1fr,0.9fr]"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-brand-300">
              Director of Engineering · Visa, Bangalore ↗
            </p>
            <h1 className="mt-8 max-w-3xl text-5xl sm:text-6xl font-semibold leading-tight text-white font-sans tracking-tight">
              Hello! I&apos;m Shreya De!
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-300">
              I am an Engineering Leader driving next-generation
              product strategies that blend AI innovation with scalable technologies.I lead product-minded engineering teams, blending systems thinking
              and storytelling to align AI investments with measurable outcomes.
              My teams thrive where rigorous delivery, inclusive research, and
              resilient infrastructure intersect.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-brand-200 hover:text-slate-900"
              >
                Explore my work
              </a>
              <a
                href="/documents/shreya-de-resume.pdf"
                download
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Download CV
              </a>
              <a
                href="https://www.linkedin.com/in/shreya-de22/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Connect on LinkedIn
              </a>
            </div>

            <div className="mt-10 grid gap-4 text-sm text-slate-300 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/5 bg-white/5 px-4 py-5"
                >
                  <p className="text-3xl font-semibold text-white">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/5 bg-gradient-to-br from-slate-900 to-slate-800 p-8 shadow-glow-lg">
            <p className="text-xs uppercase tracking-[0.4em] text-brand-200">
              Org focus
            </p>
            <h3 className="mt-4 text-2xl text-white">
              Scaling AI-powered platforms with resilient teams.
            </h3>
            <div className="mt-8 space-y-5 text-sm text-slate-300">
              {orgFocus.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/5 bg-white/5 p-4"
                >
                  <p className="text-sm font-semibold text-white">
                    {item.title}
                  </p>
                  <p className="mt-2 text-slate-300">{item.detail}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-white/5 bg-slate-950/60 p-4 text-xs uppercase tracking-wide text-slate-400">
              Currently coaching five squads across platform, data, and AI experience workstreams.
            </div>
          </div>
        </section>

        <section id="projects" className="space-y-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-brand-200">
                Projects & Awards
              </p>
              <h2 className="mt-3 text-3xl text-white">
                A snapshot of recent launches and recognition.
              </h2>
            </div>
            <Link
              href="https://github.com/sde783"
              target="_blank"
              className="text-sm font-semibold text-white underline decoration-white/30 underline-offset-8 transition hover:decoration-white"
            >
              Browse more on GitHub ↗
            </Link>
          </div>

          <div className="grid gap-8 lg:grid-cols-[2fr,1fr]">
            <div className="grid gap-8 md:grid-cols-2">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="flex flex-col rounded-3xl border border-white/5 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-900/20 p-6 shadow-panel"
                >
                  <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    width={640}
                    height={400}
                    className="rounded-2xl border border-white/5"
                  />
                  <div className="mt-5 flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-2xl text-white">{project.title}</h3>
                      <div className="flex gap-3 text-xs font-semibold uppercase tracking-wide text-brand-200">
                        <a
                          
                          target="_blank"
                          rel="noreferrer"
                          className="transition hover:text-white"
                        >
                         
                        </a>
                        <span className="text-slate-600">•</span>
                        <a
                          
                          target="_blank"
                          rel="noreferrer"
                          className="transition hover:text-white"
                        >
                          
                        </a>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-slate-300">
                      {project.description}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2 text-xs text-slate-400">
                      {project.tech.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-full border border-white/10 px-3 py-1"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>

            <aside className="rounded-3xl border border-white/5 bg-slate-900/60 p-6 shadow-panel">
              <h3 className="text-lg font-semibold text-white">
                Recognitions
              </h3>
              <ul className="mt-6 space-y-6 text-sm text-slate-300">
                {recognitions.map((item) => (
                  <li key={item.title}>
                    <div className="flex items-center justify-between text-xs uppercase tracking-wide text-slate-400">
                      <span>{item.org}</span>
                      <span>{item.year}</span>
                    </div>
                    <p className="mt-2 font-medium text-white">{item.title}</p>
                    <p className="text-slate-400">{item.detail}</p>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <section id="skills" className="space-y-10">
          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-[0.4em] text-brand-200">
              Skills
            </p>
            <h2 className="text-3xl text-white">
              Crafting resilient products end-to-end.
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.4fr,1fr]">
            <div className="rounded-3xl border border-white/5 bg-slate-900/60 p-6 shadow-panel">
              <h3 className="text-xl text-white">Technical pulse</h3>
              <div className="mt-6 space-y-6">
                {proficiencies.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between text-sm text-white">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-brand-400 to-brand-200"
                        style={{ width: `${skill.level}%` }}
                        aria-label={`${skill.name} proficiency ${skill.level} percent`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/5 bg-white/5 p-6 shadow-panel">
              <h3 className="text-xl text-white">Toolbox</h3>
              <div className="mt-6 space-y-6">
                {toolkits.map((group) => (
                  <div key={group.title}>
                    <p className="text-sm font-semibold uppercase tracking-wide text-brand-100">
                      {group.title}
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2 text-sm text-slate-200">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="rounded-full border border-white/10 px-3 py-1"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="grid gap-10 rounded-3xl border border-white/5 bg-gradient-to-br from-slate-900/80 to-slate-900/40 p-8 shadow-panel lg:grid-cols-[1.05fr,0.95fr]"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-brand-200">
              Contact
            </p>
            <h2 className="mt-3 text-3xl text-white">
              Let&apos;s build your next story together.
            </h2>
            <p className="mt-4 text-slate-300">
              Drop a note about collaboration, speaking invitations, or just to
              nerd out about purposeful AI. I respond within two business days.
            </p>
            <dl className="mt-8 space-y-4 text-sm text-slate-300">
              <div>
                <dt className="text-xs uppercase tracking-wide text-slate-400">
                  Email
                </dt>
                <dd>
                  <a
                    href="mailto:shreyade783@gmail.com"
                    className="font-semibold text-white"
                  >
                    shreyade783@gmail.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-slate-400">
                  LinkedIn
                </dt>
                <dd>
                  <a
                    href="https://www.linkedin.com/in/shreya-de22/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-white underline decoration-white/30 underline-offset-4"
                  >
                    linkedin.com/in/shreya-de22
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <ContactForm />
        </section>
      </main>

      <footer className="border-t border-white/5 px-6 py-8 text-center text-xs text-slate-400">
        Built with Next.js · Tailwind CSS · Deployed on Google Cloud Run
      </footer>
    </div>
  )
}

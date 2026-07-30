import type { ReactNode } from 'react'
import { ExternalLink, Github, Microscope } from 'lucide-react'
import { Container } from '../components/ui/container'
import { ProfileActionLink } from '../components/ui/profile-action-link'
import { certEntries, educationEntries, experienceEntries, profileActions, projectEntries } from '../data/site'

function Label({ children }: { children: ReactNode }) {
  return (
    <p className="mb-6 text-[11px] font-semibold tracking-[0.18em] uppercase text-[var(--fg-muted)]">{children}</p>
  )
}

const cardBg = [
  'linear-gradient(135deg,#241a0e,#0f0b08)',
  'linear-gradient(135deg,#0e1a16,#0f0b08)',
  'linear-gradient(135deg,#16120e,#0f0b08)',
  'linear-gradient(135deg,#141a0e,#0f0b08)',
]

const statusStyles = {
  Live: 'border-sky-400/25 bg-sky-400/10 text-sky-300',
  Research: 'border-sky-400/25 bg-sky-400/10 text-sky-300',
  'In Development': 'border-amber-400/25 bg-amber-400/10 text-amber-300',
} as const

export function PortfolioContent() {
  return (
    <div>

      {/* ── Experience ─────────────────────────────────────────── */}
      <section id="experience" className="py-8 sm:py-10">
        <Container>
          <Label>Experience</Label>
          <div className="relative">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-[var(--accent)] via-[var(--accent)]/25 to-transparent" />
            <div className="space-y-7">
              {experienceEntries.map((entry) => (
                <div key={entry.title} className="relative pl-8">
                  <div className="absolute left-0 top-[4px] h-3 w-3 rounded-full border-2 border-[var(--accent)] bg-[var(--bg)]" />
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                    <div>
                      <p className="text-[11px] font-semibold tracking-widest uppercase text-[var(--accent)]">{entry.title}</p>
                      <p className="mt-0.5 text-base font-medium text-[var(--fg)]">{entry.subtitle}</p>
                    </div>
                    <div className="shrink-0 sm:text-right">
                      <p className="text-sm text-[var(--fg-muted)]">{entry.org}</p>
                      <p className="mt-0.5 text-xs text-[var(--fg-faint)]">{entry.period}</p>
                      <p className="mt-0.5 text-xs text-[var(--fg-faint)]">{entry.location}</p>
                    </div>
                  </div>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--fg-muted)]">{entry.description}</p>
                  <div className="mt-3 flex max-w-3xl flex-wrap gap-1.5">
                    {entry.technologies.map((technology) => (
                      <span key={technology} className="rounded border border-[var(--border)] px-2 py-0.5 text-[11px] tracking-wide text-[var(--fg-faint)]">
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Education ──────────────────────────────────────────── */}
      <section id="education" className="py-8 sm:py-10">
        <Container>
          <Label>Education</Label>
          <div className="grid gap-4 sm:grid-cols-2">
            {educationEntries.map((entry) => (
              <article key={entry.school} className="flex flex-col rounded-xl border border-[var(--border)] bg-[var(--bg-subtle)] p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/90 p-1.5">
                    <img src={entry.logoSrc} alt={entry.logoAlt} className="h-full w-full object-contain" />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold tracking-widest uppercase text-[var(--accent)]">{entry.status}</span>
                    <h3 className="mt-0.5 text-sm font-semibold leading-snug text-[var(--fg)]">{entry.school}</h3>
                  </div>
                </div>
                <p className="mt-3 text-base font-medium text-[var(--fg-muted)]">{entry.degree}</p>
                <p className="mt-0.5 text-xs text-[var(--fg-faint)]">{entry.period}</p>
                {entry.coursework.length > 0 && (
                  <div className="mt-4 border-t border-[var(--border)] pt-3">
                    <p className="mb-2 text-[10px] font-semibold tracking-widest uppercase text-[var(--fg-faint)]">Coursework</p>
                    <div className="flex flex-wrap gap-1.5">
                      {entry.coursework.map((c) => (
                        <span key={c} className="rounded border border-[var(--border)] px-2 py-0.5 text-[10px] tracking-wide text-[var(--fg-muted)]">{c}</span>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Projects ───────────────────────────────────────────── */}
      <section id="projects" className="py-8 sm:py-10">
        <Container>
          <Label>Projects</Label>
          <div className="grid gap-5 md:grid-cols-2">
            {projectEntries.map((project, i) => (
              <article
                key={project.title}
                className="group flex flex-col overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg-subtle)] transition duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/25 hover:shadow-[0_18px_50px_rgba(0,0,0,0.24)]"
              >
                {/* image */}
                <div className="relative aspect-[16/10] overflow-hidden" style={{ background: cardBg[i % cardBg.length] }}>
                  <img
                    src={project.imageSrc}
                    alt={project.imageAlt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.025]"
                    onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0' }}
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[var(--bg-subtle)] to-transparent" />
                </div>

                {/* body */}
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-sans text-sm font-semibold text-[var(--fg)]">{project.title}</h3>
                      <p className="mt-0.5 text-xs text-[var(--fg-faint)]">{project.subtitle}</p>
                    </div>
                    <span className="shrink-0 text-xs tabular-nums text-[var(--fg-faint)]">{project.year}</span>
                  </div>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--fg-muted)]">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.stack.map((tag) => (
                      <span key={tag} className="rounded border border-[var(--border)] px-2 py-0.5 text-[10px] tracking-wider uppercase text-[var(--fg-faint)]">{tag}</span>
                    ))}
                  </div>
                  <div className="mt-5 flex flex-wrap items-end justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                      {project.links.map((link) => {
                        const Icon = link.kind === 'github' ? Github : link.kind === 'research' ? Microscope : ExternalLink
                        return (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${link.label} for ${project.title}`}
                            className={`flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] font-medium tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${
                              link.kind === 'live'
                                ? 'border-sky-400/45 bg-sky-400/15 text-sky-300 hover:border-sky-300/70 hover:bg-sky-400/25 focus-visible:outline-sky-300'
                                : 'border-[var(--accent)]/35 bg-[var(--accent)]/10 text-[var(--accent)] hover:bg-[var(--accent)]/20 focus-visible:outline-[var(--accent)]'
                            }`}
                          >
                            <Icon className="h-3 w-3" />
                            <span>{link.label}</span>
                          </a>
                        )
                      })}
                    </div>
                    <span className={`ml-auto inline-flex shrink-0 items-center rounded-full border px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase ${statusStyles[project.status]}`}>
                      {project.status === 'Live' && (
                        <span className="mr-1.5 h-1.5 w-1.5 animate-pulse rounded-full bg-sky-300 shadow-[0_0_8px_rgba(125,211,252,0.8)]" />
                      )}
                      {project.status}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Certifications ─────────────────────────────────────── */}
      <section id="certifications" className="py-8 sm:py-10">
        <Container>
          <Label>Certifications</Label>
          <div className="flex flex-col gap-3">
            {certEntries.map((cert) => (
              <a
                key={cert.name}
                href={cert.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--bg-subtle)] px-5 py-4 transition-colors hover:border-[var(--accent)]/40 hover:bg-[var(--accent)]/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/90 p-1.5">
                  <img src={cert.logoSrc} alt={cert.logoAlt} className="h-full w-full object-contain" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors">{cert.name}</p>
                  <p className="mt-0.5 text-xs text-[var(--fg-faint)]">{cert.issuer}</p>
                  {cert.detail && <p className="mt-1 text-[11px] text-[var(--accent)]/75">{cert.detail}</p>}
                </div>
                <ExternalLink className="h-4 w-4 shrink-0 text-[var(--fg-faint)] group-hover:text-[var(--accent)] transition-colors" />
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Footer ─────────────────────────────────────────────── */}
      <footer className="pt-6 pb-14 border-t border-[var(--border)]">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              {profileActions.map((action) => (
                <ProfileActionLink key={action.label} action={action} />
              ))}
            </div>
            <p className="text-xs text-[var(--fg-faint)]">© {new Date().getFullYear()} Emmanuel Kiprotich</p>
          </div>
        </Container>
      </footer>

    </div>
  )
}

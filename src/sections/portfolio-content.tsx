import type { ReactNode } from 'react'
import { Github } from 'lucide-react'
import { Container } from '../components/ui/container'
import { ProfileActionLink } from '../components/ui/profile-action-link'
import { educationEntries, experienceEntries, profileActions, projectEntries } from '../data/site'

function Label({ children }: { children: ReactNode }) {
  return (
    <p className="mb-14 text-[10px] tracking-[0.22em] uppercase text-[var(--fg-faint)]">{children}</p>
  )
}

const cardBg = [
  'linear-gradient(135deg,#241a0e,#0f0b08)',
  'linear-gradient(135deg,#0e1a16,#0f0b08)',
  'linear-gradient(135deg,#16120e,#0f0b08)',
  'linear-gradient(135deg,#141a0e,#0f0b08)',
]

export function PortfolioContent() {
  return (
    <div>

      {/* ── Experience ─────────────────────────────────────────── */}
      <section id="experience" className="py-24">
        <Container>
          <Label>Experience</Label>
          <div className="relative">
            {/* vertical connecting line */}
            <div className="absolute left-[7px] top-3 bottom-3 w-px bg-gradient-to-b from-[var(--accent)] via-[var(--accent)]/30 to-transparent" />
            <div className="space-y-12">
              {experienceEntries.map((entry) => (
                <div key={entry.title} className="relative pl-9">
                  {/* dot */}
                  <div className="absolute left-0 top-[5px] h-3.5 w-3.5 rounded-full border-2 border-[var(--accent)] bg-[var(--bg)]" />

                  <div className="flex flex-col gap-0.5 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                    <div>
                      <p className="text-[11px] tracking-widest uppercase text-[var(--accent)]">{entry.title}</p>
                      <p className="mt-0.5 text-sm text-[var(--fg)]">{entry.subtitle}</p>
                    </div>
                    <div className="shrink-0 sm:text-right">
                      <p className="text-xs text-[var(--fg-faint)]">{entry.org}</p>
                      <p className="mt-0.5 text-xs text-[var(--fg-faint)]">{entry.period}</p>
                    </div>
                  </div>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--fg-muted)]">{entry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Education ──────────────────────────────────────────── */}
      <section id="education" className="py-24">
        <Container>
          <Label>Education</Label>
          <div className="grid gap-5 sm:grid-cols-2">
            {educationEntries.map((entry) => (
              <article key={entry.school} className="flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--bg-subtle)] p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/90 p-2">
                    <img src={entry.logoSrc} alt={entry.logoAlt} className="h-full w-full object-contain" />
                  </div>
                  <div>
                    <span className="text-[10px] tracking-widest uppercase text-[var(--accent)]">{entry.status}</span>
                    <h3 className="mt-0.5 text-sm font-normal leading-snug text-[var(--fg)]">{entry.school}</h3>
                  </div>
                </div>
                <p className="mt-4 text-sm text-[var(--fg-muted)]">{entry.degree}</p>
                <p className="mt-1 text-xs text-[var(--fg-faint)]">{entry.period}</p>
                {entry.coursework.length > 0 && (
                  <div className="mt-5 border-t border-[var(--border)] pt-4">
                    <p className="mb-2.5 text-[10px] tracking-widest uppercase text-[var(--fg-faint)]">Coursework</p>
                    <div className="flex flex-wrap gap-1.5">
                      {entry.coursework.map((c) => (
                        <span key={c} className="rounded border border-[var(--border)] px-2 py-0.5 text-[10px] tracking-wide text-[var(--fg-faint)]">{c}</span>
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
      <section id="projects" className="py-24">
        <Container>
          <Label>Projects</Label>
          <div className="grid gap-5 sm:grid-cols-2">
            {projectEntries.map((project, i) => (
              <article key={project.title} className="flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-subtle)]">
                {/* image / placeholder */}
                <div className="relative aspect-video overflow-hidden" style={{ background: cardBg[i % cardBg.length] }}>
                  <img
                    src={project.imageSrc}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300"
                    onError={(e) => { (e.target as HTMLImageElement).style.opacity = '0' }}
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[var(--bg-subtle)] to-transparent" />
                </div>

                {/* body */}
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-base text-[var(--fg)]">{project.title}</h3>
                      <p className="mt-0.5 text-xs text-[var(--fg-faint)]">{project.subtitle}</p>
                    </div>
                    <span className="shrink-0 text-xs tabular-nums text-[var(--fg-faint)]">{project.year}</span>
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--fg-muted)]">{project.description}</p>
                  <div className="mt-5 flex items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((tag) => (
                        <span key={tag} className="rounded border border-[var(--border)] px-2 py-0.5 text-[10px] tracking-wider uppercase text-[var(--fg-faint)]">{tag}</span>
                      ))}
                    </div>
                    {project.github ? (
                      <a href={project.github} target="_blank" rel="noreferrer"
                        className="flex shrink-0 items-center gap-1.5 rounded-full border border-[var(--accent)]/40 bg-[var(--accent)]/10 px-3 py-1 text-[11px] tracking-wide text-[var(--accent)] transition-colors hover:bg-[var(--accent)]/20">
                        <Github className="h-3 w-3" />
                        <span>View Code</span>
                      </a>
                    ) : (
                      <a
                        href={`mailto:ekiprotich@uiowa.edu?subject=Code Request — ${project.title}`}
                        className="flex shrink-0 items-center gap-1.5 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/8 px-3 py-1 text-[11px] tracking-wide text-[var(--accent)]/70 transition-colors hover:border-[var(--accent)]/60 hover:text-[var(--accent)]"
                      >
                        <Github className="h-3 w-3" />
                        <span>Request Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Contact ────────────────────────────────────────────── */}
      <section id="contact" className="py-24">
        <Container>
          <Label>Contact</Label>
          <p className="mb-8 max-w-md text-sm leading-relaxed text-[var(--fg-muted)]">
            Open to research collaborations, internships, and interesting conversations. Best reached by email.
          </p>
          <div className="flex flex-wrap items-center gap-7">
            {profileActions.map((action) => (
              <ProfileActionLink key={action.label} action={action} />
            ))}
          </div>
        </Container>
      </section>

    </div>
  )
}
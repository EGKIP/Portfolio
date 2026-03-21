import { Container } from '../components/ui/container'
import { ProfileActionLink } from '../components/ui/profile-action-link'
import { aboutLines, profileActions, projectEntries } from '../data/site'

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-10 text-xs tracking-widest uppercase text-[var(--fg-faint)]">{children}</p>
  )
}

export function PortfolioContent() {
  return (
    <div>
      {/* Work */}
      <section id="work" className="border-t border-[var(--border)] py-24">
        <Container>
          <SectionLabel>Work</SectionLabel>
          <div className="space-y-0">
            {projectEntries.map((project, i) => (
              <article
                key={project.title}
                className="grid grid-cols-[1fr_auto] items-start gap-8 border-b border-[var(--border)] py-8 first:pt-0"
              >
                <div>
                  <div className="flex items-baseline gap-4">
                    <span className="text-[11px] tracking-widest uppercase text-[var(--fg-faint)] tabular-nums">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-lg font-normal text-[var(--fg)]">{project.title}</h3>
                  </div>
                  <p className="mt-3 pl-8 text-sm leading-relaxed text-[var(--fg-muted)] max-w-lg">
                    {project.summary}
                  </p>
                </div>
                <div className="pt-1 text-right">
                  <span className="text-xs tracking-widest text-[var(--fg-faint)]">{project.year}</span>
                  <div className="mt-2 flex flex-wrap justify-end gap-1.5">
                    {project.stack.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] tracking-wider uppercase text-[var(--fg-faint)] border border-[var(--border)] rounded px-2 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* About */}
      <section id="about" className="border-t border-[var(--border)] py-24">
        <Container>
          <SectionLabel>About</SectionLabel>
          <div className="max-w-lg space-y-4">
            {aboutLines.map((line) => (
              <p key={line} className="text-sm leading-relaxed text-[var(--fg-muted)]">
                {line}
              </p>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-[var(--border)] py-24">
        <Container>
          <SectionLabel>Contact</SectionLabel>
          <div className="flex items-center gap-8">
            {profileActions.map((action) => (
              <ProfileActionLink key={action.label} action={action} />
            ))}
          </div>
        </Container>
      </section>
    </div>
  )
}
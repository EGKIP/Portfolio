import { ProfileActionLink } from '../components/ui/profile-action-link'
import { SectionShell } from '../components/ui/section-shell'
import {
  educationEntries,
  experienceEntries,
  hasResumeAsset,
  profileActions,
  projectEntries,
  researchEntries,
  skillGroups,
} from '../data/site'

export function PortfolioContent() {
  const resumeActions = profileActions.filter((action) => action.kind === 'resume')
  const currentSchool = educationEntries[0]

  return (
    <div className="relative pb-16 sm:pb-24">
      <SectionShell
        id="education"
        eyebrow="Education"
        title="Education"
        description="MNSU now, University of Iowa next."
      >
        <div className="space-y-8">
          {educationEntries.map((entry, index) => (
            <article
              key={entry.school}
              className="border-b border-white/10 pb-8 last:border-b-0 last:pb-0"
            >
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-slate-50 p-3 shadow-[0_0_0_1px_rgba(148,163,184,0.08)] sm:h-20 sm:w-20">
                  <img
                    src={entry.logoSrc}
                    alt={entry.logoAlt}
                    className="max-h-full w-full object-contain"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-blue-200/80">
                      {entry.stage}
                    </p>
                    <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-slate-500">
                      {entry.meta}
                    </p>
                  </div>

                  <h3 className={`mt-3 leading-tight text-white ${index === 0 ? 'text-[1.35rem] sm:text-[1.5rem]' : 'text-xl'}`}>
                    {entry.school}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-300 sm:text-base">{entry.program}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{entry.note}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        id="research"
        eyebrow="Research / Experience"
        title="Research at MNSU"
        description="A simpler research view centered on current work at Minnesota State University, Mankato."
      >
        <div className="space-y-8">
          <div className="flex items-center gap-4 border-b border-white/10 pb-6">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-50 p-3 shadow-[0_0_0_1px_rgba(148,163,184,0.08)]">
              <img
                src={currentSchool.logoSrc}
                alt={currentSchool.logoAlt}
                className="max-h-full w-full object-contain"
              />
            </div>

            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-blue-200/80">
                Minnesota State University, Mankato
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Current research home for connected transportation and security work.
              </p>
            </div>
          </div>

          <div className="divide-y divide-white/10">
          {researchEntries.map((entry) => (
            <article key={entry.title} className="py-7 first:pt-0 last:pb-0">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-blue-200/80">{entry.label}</p>
                <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-slate-500">{entry.meta}</p>
              </div>
              <h3 className="mt-3 text-[1.35rem] leading-tight text-white sm:text-[1.45rem]">{entry.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">{entry.summary}</p>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-300">
                {entry.highlights.map((highlight) => (
                  <li key={highlight} className="relative pl-4 before:absolute before:left-0 before:top-3 before:h-1 before:w-1 before:rounded-full before:bg-slate-500">
                    {highlight}
                  </li>
                ))}
              </ul>
            </article>
          ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell
        id="experience"
        eyebrow="Additional"
        title="Additional experience"
        description="Two lighter supporting roles kept concise to avoid crowding the page."
      >
        <div className="space-y-7">
          {experienceEntries.map((entry) => (
            <article key={entry.title} className="border-b border-white/10 pb-7 last:border-b-0 last:pb-0">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg text-white sm:text-xl">{entry.title}</h3>
                <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-slate-500">{entry.meta}</p>
              </div>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">{entry.summary}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        id="projects"
        eyebrow="Projects"
        title="Projects"
        description="A few recent builds."
      >
        <div className="divide-y divide-white/10">
          {projectEntries.map((project) => (
            <article key={project.title} className="py-5 first:pt-0 last:pb-0">
              <h3 className="text-xl text-white">{project.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{project.summary}</p>
              <p className="mt-3 text-xs uppercase tracking-[0.2em] text-slate-500">{project.stack.join(' · ')}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell
        id="resume"
        eyebrow={hasResumeAsset ? 'Resume / Skills' : 'Skills'}
        title={hasResumeAsset ? 'Resume & skills' : 'Skills'}
        description="Core tools and technologies."
      >
        <div className="space-y-8">
          {resumeActions.length > 0 ? (
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {resumeActions.map((action) => (
                <ProfileActionLink key={action.label} action={action} emphasized />
              ))}
            </div>
          ) : null}

          <div className="grid gap-5 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <article key={group.title} className="border-t border-white/10 pt-4">
                <h3 className="text-base text-white">{group.title}</h3>
                <ul className="mt-3 space-y-1.5 text-sm leading-7 text-slate-300">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell
        id="contact"
        eyebrow="Contact"
        title="Contact"
        description="GitHub, LinkedIn, and email."
      >
        <div>
          <p className="max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            {hasResumeAsset ? 'GitHub, LinkedIn, email, and resume.' : 'GitHub, LinkedIn, and email.'}
          </p>

          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
            {profileActions.map((action) => (
              <ProfileActionLink key={action.label} action={action} emphasized={action.kind === 'resume'} />
            ))}
          </div>
        </div>
      </SectionShell>
    </div>
  )
}
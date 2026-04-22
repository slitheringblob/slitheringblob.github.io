import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import userData from "@/constants/data";

export default function About() {
  return (
    <section className="editorial-wrap pb-10 pt-8 md:pb-16 md:pt-10">
      <div className="panel ambient-border relative overflow-hidden px-6 py-8 md:px-10 md:py-12">
        <div className="max-w-4xl">
          <h1 className="text-6xl leading-[0.92] text-[var(--text)] md:text-8xl">
            {userData.hero.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 md:text-xl">
            {userData.hero.intro}
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center">
          <a
            href={userData.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="button-primary"
          >
            View resume
          </a>
          <a href={`mailto:${userData.email}`} className="button-secondary">
            Start a conversation
          </a>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {userData.hero.stats.map((item) => (
            <div key={item.label} className="soft-card px-5 py-4">
              <p className="section-kicker">{item.label}</p>
              <p className="mt-3 text-base leading-7 text-[var(--text)]">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="soft-card p-6 md:p-8">
          <p className="section-kicker">Core stack</p>
          <h2 className="mt-3 text-4xl text-[var(--text)] md:text-5xl">
            Things I know.
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {userData.stack.map((item) => (
              <span key={item} className="stack-pill">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="soft-card p-6 md:p-8">
          <p className="section-kicker">Current role</p>
          <div className="mt-4 space-y-4">
            <div>
              <p className="text-2xl text-[var(--text)]">{userData.hero.currentRole}</p>
              <p className="mt-2 text-base leading-7">{userData.hero.currentSummary}</p>
            </div>
            <a
              href={userData.hero.currentRoleUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[var(--accent-blue)]"
            >
              Visit company <FiArrowUpRight />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 soft-card p-6 md:p-8">
        <p className="section-kicker">Reach out</p>
        <h2 className="mt-3 text-4xl text-[var(--text)] md:text-5xl">
          If the work feels aligned, send a note.
        </h2>
        <div className="mt-8 space-y-4 text-sm md:text-base">
          <a
            href={`mailto:${userData.email}`}
            className="flex items-center justify-between border-b border-[var(--border)] pb-4 text-[var(--text)]"
          >
            <span>Email</span>
            <span>{userData.email}</span>
          </a>
          <a
            href={userData.socialLinks.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between border-b border-[var(--border)] pb-4 text-[var(--text)]"
          >
            <span>GitHub</span>
            <span>@{userData.githubUsername}</span>
          </a>
          <a
            href={userData.socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between border-b border-[var(--border)] pb-4 text-[var(--text)]"
          >
            <span>LinkedIn</span>
            <span>Connect</span>
          </a>
          <a
            href={userData.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between text-[var(--text)]"
          >
            <span>Resume</span>
            <span>Open PDF</span>
          </a>
        </div>
      </div>
    </section>
  );
}

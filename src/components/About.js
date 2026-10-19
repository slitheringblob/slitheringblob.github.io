import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import userData from "@/constants/data";

const statColors = ["var(--blue)", "var(--green)", "var(--violet)"];

export default function About() {
  return (
    <section className="editorial-wrap pb-10 pt-8 md:pb-16 md:pt-10">
      <div className="panel ambient-border relative overflow-hidden px-6 py-8 md:px-10 md:py-12">
        <div className="max-w-4xl">
          <h1 className="text-[clamp(34px,5.6vw,68px)] leading-[1] tracking-[-0.055em] text-[var(--txt)]">
            {userData.hero.title}<span className="cursor" aria-hidden="true"></span>
          </h1>
          <p className="mt-6 max-w-3xl text-sm leading-7 md:text-base md:leading-8">
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
          {userData.hero.stats.map((item, idx) => (
            <div key={item.label} className="soft-card tinted px-5 py-4" style={{ "--c": statColors[idx % statColors.length] }}>
              <p className="section-kicker text-[var(--c)]">{item.label}</p>
              <p className="mt-3 text-sm leading-6 text-[var(--txt)]">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="soft-card p-6 md:p-8">
          <p className="section-kicker">Core stack</p>
          <h2 className="mt-3 text-3xl text-[var(--txt)] md:text-4xl">
            <span className="grad">Things I know.</span>
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
              <p className="text-lg font-bold tracking-[-0.03em] text-[var(--txt)] md:text-xl">{userData.hero.currentRole}</p>
              <p className="mt-2 text-sm leading-7">{userData.hero.currentSummary}</p>
            </div>
            <a
              href={userData.hero.currentRoleUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--blue)] hover:underline underline-offset-4"
            >
              Visit company <FiArrowUpRight />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 soft-card p-6 md:p-8">
        <p className="section-kicker">Reach out</p>
        <h2 className="mt-3 text-3xl text-[var(--txt)] md:text-4xl">
          If the work feels aligned, send a note.
        </h2>
        <div className="mt-8 space-y-4 text-xs md:text-sm">
          <a
            href={`mailto:${userData.email}`}
            className="flex items-center justify-between border-b border-[var(--bdr)] pb-4 text-[var(--txt)] transition hover:text-[var(--c)]"
            style={{ "--c": "var(--rose)" }}
          >
            <span>Email</span>
            <span>{userData.email}</span>
          </a>
          <a
            href={userData.socialLinks.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between border-b border-[var(--bdr)] pb-4 text-[var(--txt)] transition hover:text-[var(--c)]"
            style={{ "--c": "var(--violet)" }}
          >
            <span>GitHub</span>
            <span>@{userData.githubUsername}</span>
          </a>
          <a
            href={userData.socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between border-b border-[var(--bdr)] pb-4 text-[var(--txt)] transition hover:text-[var(--c)]"
            style={{ "--c": "var(--blue)" }}
          >
            <span>LinkedIn</span>
            <span>Connect</span>
          </a>
          <a
            href={userData.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between text-[var(--txt)] transition hover:text-[var(--c)]"
            style={{ "--c": "var(--amber)" }}
          >
            <span>Resume</span>
            <span>Open PDF</span>
          </a>
        </div>
      </div>
    </section>
  );
}

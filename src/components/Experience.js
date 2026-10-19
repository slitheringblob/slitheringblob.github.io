import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import userData from "@/constants/data";

// Each company keeps one colour across all its roles.
const palette = ["var(--blue)", "var(--violet)", "var(--green)", "var(--cyan)", "var(--orange)", "var(--rose)"];
const companies = [...new Set(userData.experience.map((item) => item.company))];
const companyColor = (company) => palette[companies.indexOf(company) % palette.length];

export default function Experience() {
  return (
    <section className="editorial-wrap pb-12 pt-10 md:pb-20">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-8 lg:self-start">
          <p className="eyebrow">Career ledger</p>
          <h1 className="section-title mt-8">
            <span className="grad" style={{ "--g1": "var(--violet)", "--g2": "var(--rose)", "--g3": "var(--orange)" }}>
              Experience shaped by product work, backend delivery, and platform thinking.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-7 md:text-base md:leading-8">
            The titles changed over time, but the pattern stayed familiar: understand the problem,
            simplify the system, and ship the thing without drama.
          </p>
        </div>

        <div className="relative pl-0 md:pl-10">
          <div className="timeline-rail absolute left-3 top-0 hidden h-full w-0.5 rounded-full md:block" />
          <div className="space-y-6">
            {userData.experience.map((item, idx) => (
              <article
                key={`${item.year}-${item.title}`}
                className={`soft-card lift relative p-6 md:p-8 ${idx === 0 ? "tinted" : ""}`}
                style={{ "--c": companyColor(item.company) }}
              >
                <div className={`timeline-dot absolute -left-[34px] top-10 hidden h-3.5 w-3.5 rounded-full md:block ${idx === 0 ? "timeline-dot--live" : ""}`} />
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="section-kicker text-[var(--c)]">{item.year}</p>
                    <h2 className="mt-3 text-xl text-[var(--txt)] md:text-2xl">{item.title}</h2>
                    <a
                      href={item.companyLink}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-[var(--c)] hover:underline underline-offset-4"
                    >
                      {item.company} <FiArrowUpRight />
                    </a>
                  </div>
                  <div className="max-w-xl">
                    <p className="text-sm leading-7 md:text-base">{item.desc}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

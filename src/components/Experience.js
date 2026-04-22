import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import userData from "@/constants/data";

export default function Experience() {
  return (
    <section className="editorial-wrap pb-12 pt-10 md:pb-20">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-8 lg:self-start">
          <p className="eyebrow">Career ledger</p>
          <h1 className="section-title mt-8">Experience shaped by product work, backend delivery, and platform thinking.</h1>
          <p className="mt-6 max-w-xl text-lg leading-8 md:text-xl">
            The titles changed over time, but the pattern stayed familiar: understand the problem,
            simplify the system, and ship the thing without drama.
          </p>
        </div>

        <div className="relative pl-0 md:pl-10">
          <div className="absolute left-3 top-0 hidden h-full w-px bg-[var(--border)] md:block" />
          <div className="space-y-6">
            {userData.experience.map((item) => (
              <article key={`${item.year}-${item.title}`} className="soft-card relative p-6 md:p-8">
                <div className="absolute -left-[2.9rem] top-10 hidden h-4 w-4 rounded-full border border-[var(--border)] bg-[var(--background)] md:block" />
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="section-kicker">{item.year}</p>
                    <h2 className="mt-3 text-3xl text-[var(--text)] md:text-4xl">{item.title}</h2>
                    <a
                      href={item.companyLink}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex items-center gap-2 text-sm text-[var(--accent-blue)]"
                    >
                      {item.company} <FiArrowUpRight />
                    </a>
                  </div>
                  <div className="max-w-xl">
                    <p className="text-base leading-8 md:text-lg">{item.desc}</p>
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

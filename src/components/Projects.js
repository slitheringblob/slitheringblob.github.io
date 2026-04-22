import React from "react";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import userData from "@/constants/data";

export default function Projects() {
  return (
    <section className="editorial-wrap pb-12 pt-10 md:pb-20">
      <div className="max-w-4xl">
        <h1 className="section-title">Things I make in my Free Time.</h1>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {userData.projects.map((project) => (
          <article key={project.title} className="soft-card overflow-hidden">
            <div className="relative aspect-[16/10]">
              <Image
                src={project.imgUrl}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-5">
                <span
                  className="inline-flex rounded-full px-3 py-1 text-xs uppercase tracking-[0.24em] text-white/90"
                  style={{ backgroundColor: project.accent }}
                >
                  {project.category}
                </span>
              </div>
            </div>

            <div className="p-6 md:p-7">
              <div>
                <div className="flex items-center justify-between gap-4">
                  <p className="section-kicker">{project.year}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-[var(--text)] transition hover:text-[var(--accent-red)]"
                  >
                    Open project <FiArrowUpRight />
                  </a>
                </div>
                <h2 className="mt-4 text-4xl text-[var(--text)] md:text-5xl">{project.title}</h2>
                <p className="mt-4 text-base leading-7 md:text-lg">{project.summary}</p>
              </div>

              <div className="mt-6">
                <p className="section-kicker mb-3">Stack</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="stack-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

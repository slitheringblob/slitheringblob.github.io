import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import userData from "@/constants/data";

export default function Footer() {
  return (
    <footer className="editorial-wrap pb-8 pt-20 md:pb-12">
      <div className="section-divider" />
      <div className="flex flex-col gap-8 py-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-lg">
          <p className="section-kicker">Open for thoughtful work</p>
        </div>

        <div className="flex flex-col gap-3 text-sm md:items-end">
          <a
            href={`mailto:${userData.email}`}
            className="inline-flex items-center gap-2 text-[var(--text)] transition hover:text-[var(--accent-red)]"
          >
            {userData.email} <FiArrowUpRight />
          </a>
          <a
            href={userData.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-[var(--text)] transition hover:text-[var(--accent-blue)]"
          >
            Resume <FiArrowUpRight />
          </a>
          <p className="text-[var(--text-muted)]">
            © {new Date().getFullYear()} {userData.name}
          </p>
        </div>
      </div>
    </footer>
  );
}

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import { FiArrowUpRight, FiMoon, FiSun } from "react-icons/fi";
import userData from "@/constants/data";

const navigation = [
  { href: "/", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
];

export default function Navbar() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? theme !== "light" : true;

  return (
    <header className="editorial-wrap pt-6 md:pt-8">
      <div className="panel ambient-border px-5 py-4 md:px-8 md:py-5">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-1">
            <Link href="/" className="group inline-flex w-fit items-center gap-3">
              <div className="relative h-11 w-11 overflow-hidden rounded-full border border-[var(--border)] bg-[var(--surface-muted)]">
                <Image
                  src={userData.avatarUrl}
                  alt={userData.name}
                  fill
                  className="object-cover"
                  sizes="44px"
                  priority
                />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl text-[var(--text)]">
                  {userData.name}
                </h1>
                <p className="max-w-md text-sm md:text-base">{userData.roleSummary}</p>
              </div>
            </Link>
          </div>

          <div className="flex flex-col gap-4 md:items-end">
            <nav className="flex flex-wrap items-center gap-2 md:gap-3">
              {navigation.map((item) => {
                const isActive = router.asPath === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-full px-4 py-2 text-sm transition duration-300 ${
                      isActive
                        ? "bg-[var(--text)] text-[var(--background)]"
                        : "border border-[var(--border)] text-[var(--text)] hover:bg-[var(--surface-muted)]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex flex-wrap items-center gap-3 text-sm">
              <a
                href={userData.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-[var(--text-muted)] transition hover:text-[var(--text)]"
              >
                GitHub <FiArrowUpRight />
              </a>
              <a
                href={userData.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-[var(--text-muted)] transition hover:text-[var(--text)]"
              >
                LinkedIn <FiArrowUpRight />
              </a>
              <button
                type="button"
                aria-label="Toggle theme"
                onClick={() => setTheme(isDark ? "light" : "dark")}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text)] transition hover:bg-[var(--surface-muted)]"
              >
                {mounted && isDark ? <FiSun /> : <FiMoon />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

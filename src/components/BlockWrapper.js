import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function BlockWrapper({ children, ...customMeta }) {
  const router = useRouter();

  const meta = {
    title: "Jaydeep Ganatra | Senior Software Engineer",
    description:
      "Portfolio of Jaydeep Ganatra, a senior software engineer building full-stack products, platforms, and applied machine learning systems.",
    image: "/avatar.jpg",
    type: "website",
    ...customMeta,
  };

  const canonicalUrl = `https://jaydeepganatra.dev${router.asPath === "/" ? "" : router.asPath}`;

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <link rel="canonical" href={canonicalUrl} />
      </Head>

      <main className="page-shell w-full">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </>
  );
}

import React from "react";
import Projects from "@/components/Projects";
import BlockWrapper from "@/components/BlockWrapper";

export default function ProjectsPage() {
  return (
    <BlockWrapper
      title="Projects | Jaydeep Ganatra"
      description="Selected software projects by Jaydeep Ganatra across frontend, backend, and product engineering."
    >
      <Projects />
    </BlockWrapper>
  );
}

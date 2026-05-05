"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/lib/data";

const filters = ["All", "Featured"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "Featured"
    ? projects.filter((p) => p.featured)
    : projects;

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/20 mb-4">
              Portfolio
            </span>
            <h2 className="section-heading">
              Things I&apos;ve{" "}
              <span className="text-gradient">Built</span>
            </h2>
            <p className="section-subheading mx-auto">
              A selection of projects that showcase my skills across the full stack.
            </p>
          </div>
        </ScrollReveal>

        {/* Filter tabs */}
        <ScrollReveal delay={0.1}>
          <div className="flex items-center justify-center gap-2 mb-10">
            {filters.map((filter) => {
              const isActive = activeFilter === filter;
              const btnClass = isActive
                ? "bg-indigo-600 text-white border-indigo-600"
                : "bg-white dark:bg-white/5 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-white/10 hover:border-indigo-300 dark:hover:border-indigo-500/40";
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={"px-5 py-2 rounded-lg text-sm font-medium border transition-all duration-200 " + btnClass}
                >
                  {filter}
                  {filter === "Featured" && (
                    <span className="ml-2 px-1.5 py-0.5 rounded text-xs bg-white/20">
                      {projects.filter((p) => p.featured).length}
                    </span>
                  )}
                  {filter === "All" && (
                    <span className={"ml-2 px-1.5 py-0.5 rounded text-xs " + (isActive ? "bg-white/20" : "bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-gray-400")}>
                      {projects.length}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <ScrollReveal delay={0.2}>
          <div className="mt-14 text-center">
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Want to see more? Check out my GitHub for all projects.
            </p>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5 rounded-xl px-6 py-3 font-semibold"
            >
              View All on GitHub →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

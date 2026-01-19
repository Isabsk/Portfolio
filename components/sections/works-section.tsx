"use client";

import React from "react";
import { FocusCards } from "@/components/ui/focus-cards";

import { projects } from "@/lib/projects";

export function WorksSection() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section
      id="work"
      className="relative min-h-screen w-full pb-24 bg-black px-4 md:px-8 lg:px-10"
    >
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-white/[0.02] via-transparent to-transparent" />

      <div className="swiss-container relative z-10">
        {/* Section header */}
        <div className="mb-16 md:mb-24">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="font-poppins text-xs font-medium uppercase tracking-[0.3em] text-white/40 block mb-4">
                Selected Works
              </span>
              <h2 className="font-poppins text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
                Projects
              </h2>
            </div>

            <p className="font-poppins text-base md:text-lg text-white/50 max-w-md">
              A curated selection of projects that showcase my expertise in
              creating exceptional digital experiences.
            </p>
          </div>

          {/* Divider */}
          <div className="mt-8 h-px bg-gradient-to-r from-white/20 via-white/5 to-transparent" />
        </div>

        {/* Projects grid */}
        <FocusCards cards={featuredProjects} />

        {/* View all link */}
        <div className="mt-16 flex justify-center">
          <a
            href="/projects"
            className="group inline-flex items-center gap-3 font-poppins text-sm uppercase tracking-widest text-white/60 hover:text-white transition-colors duration-300"
            data-cursor-hover
          >
            <span>View All Projects</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

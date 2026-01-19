"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function ProcessSection() {
  const timelineData = [
    {
      title: "2024",
      date: "Student",
      content: (
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-2">
            <a
              href="https://www.zohoschools.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-60 h-16 grayscale opacity-80 grayscale-[0.2] hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <img
                src="/images/logos/zoho-schools-logo.png"
                alt="Zoho Schools Logo"
                className="w-full h-full object-contain border border-white/20 rounded-2xl p-3"
              />
            </a>
          </div>
          <h4 className="font-poppins text-2xl md:text-3xl font-bold text-white">
            <a
              href="https://www.zohoschools.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-blue transition-colors duration-300"
            >
              Zoho Schools of Learning
            </a>
          </h4>
          <p className="font-poppins text-base text-white/60 max-w-lg">
            Immersive learning experience focusing on both the technical and business aspects of software development.
          </p>
          <ul className="space-y-2 font-poppins text-sm text-white/50">
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-blue" />
              Java & Backend Development
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-blue" />
              Fullstack Web Technologies
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-blue" />
              Business & Marketing Fundamentals
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "2023",
      date: "Internship",
      content: (
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-2">
            <a
              href="https://jumpstartcxo.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-60 h-16 grayscale-[0.2] opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <img
                src="/images/logos/jumpstartcxo-logo.png"
                alt="JumpstartCXO Logo"
                className="w-full h-full object-contain border border-white/20 rounded-2xl p-2"
              />
            </a>
          </div>
          <h4 className="font-poppins text-2xl md:text-3xl font-bold text-white">
            <a
              href="https://jumpstartcxo.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-blue transition-colors duration-300"
            >
              JumpstartCXO Startup
            </a>
          </h4>
          <p className="font-poppins text-base text-white/60 max-w-lg">
            Worked closely with the founding team to design and develop digital presence for various ventures.
          </p>
          <ul className="space-y-2 font-poppins text-sm text-white/50">
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-blue" />
              WordPress Development
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-blue" />
              Web Design & UI/UX
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-blue" />
              SEO Strategy & Implementation
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "2022",
      date: "Freelancer",
      content: (
        <div className="space-y-4">
          <h4 className="font-poppins text-2xl md:text-3xl font-bold text-white">
            Freelance Developer
          </h4>
          <p className="font-poppins text-base text-white/60 max-w-lg">
            Began my professional journey by delivering custom web solutions for diverse clients.
          </p>
          <ul className="space-y-2 font-poppins text-sm text-white/50">
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-blue" />
              Frontend Development
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-blue" />
              Web Development
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-blue" />
              Responsive Web Design
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <section
      id="process"
      className="relative min-h-screen w-full bg-black"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-blue/[0.02] to-transparent" />

      <div className="swiss-container relative z-10">
        {/* Section header */}
        <div className="mb-16 md:mb-24 max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
          <div>
            <span className="font-poppins text-xs font-medium uppercase tracking-[0.3em] text-white/40 block mb-4">
              My Journey
            </span>
            <h2 className="font-poppins text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
              Experience
            </h2>
            <p className="font-poppins text-lg text-white/50 max-w-xl">
              A timeline of my professional growth, from freelance development to specialized internships and advanced studies.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <Timeline data={timelineData} />
      </div>
    </section>
  );
}

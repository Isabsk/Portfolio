"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function ProcessSection() {
  const timelineData = [
    {
      title: "01",
      date: "Discovery",
      content: (
        <div className="space-y-4">
          <h4 className="font-harmond text-2xl md:text-3xl font-bold text-white">
            Understanding Your Vision
          </h4>
          <p className="font-nohemi text-base text-white/60 max-w-lg">
            Every great project starts with deep understanding. I dive into your
            goals, audience, and requirements to craft a strategic foundation
            that ensures success.
          </p>
          <ul className="space-y-2 font-nohemi text-sm text-white/50">
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-blue" />
              Research & Analysis
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-blue" />
              Competitive Audit
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-blue" />
              User Journey Mapping
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "02",
      date: "Design",
      content: (
        <div className="space-y-4">
          <h4 className="font-harmond text-2xl md:text-3xl font-bold text-white">
            Crafting the Experience
          </h4>
          <p className="font-nohemi text-base text-white/60 max-w-lg">
            Using Swiss design principles and modern aesthetics, I create
            wireframes and high-fidelity designs that balance beauty with
            functionality.
          </p>
          <ul className="space-y-2 font-nohemi text-sm text-white/50">
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-blue" />
              Wireframing & Prototyping
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-blue" />
              Visual Design System
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-blue" />
              Motion Design
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "03",
      date: "Development",
      content: (
        <div className="space-y-4">
          <h4 className="font-harmond text-2xl md:text-3xl font-bold text-white">
            Building with Precision
          </h4>
          <p className="font-nohemi text-base text-white/60 max-w-lg">
            Clean, performant code is the backbone of every project. I use
            modern frameworks and best practices to build experiences that are
            fast, accessible, and scalable.
          </p>
          <ul className="space-y-2 font-nohemi text-sm text-white/50">
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-blue" />
              React & Next.js Development
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-blue" />
              Three.js & WebGL Integration
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-blue" />
              Performance Optimization
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "04",
      date: "Launch",
      content: (
        <div className="space-y-4">
          <h4 className="font-harmond text-2xl md:text-3xl font-bold text-white">
            Delivering Excellence
          </h4>
          <p className="font-nohemi text-base text-white/60 max-w-lg">
            A successful launch is just the beginning. I ensure smooth
            deployment, comprehensive testing, and ongoing support to keep your
            project running flawlessly.
          </p>
          <ul className="space-y-2 font-nohemi text-sm text-white/50">
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-blue" />
              Quality Assurance
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-blue" />
              Deployment & CI/CD
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-accent-blue" />
              Ongoing Maintenance
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <section
      id="process"
      className="relative min-h-screen w-full py-32 md:py-48 bg-black"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-blue/[0.02] to-transparent" />

      <div className="swiss-container relative z-10">
        {/* Section header */}
        <div className="mb-16 md:mb-24 max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
          <div>
            <span className="font-nohemi text-xs font-medium uppercase tracking-[0.3em] text-white/40 block mb-4">
              How I Work
            </span>
            <h2 className="font-harmond text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
              Process
            </h2>
            <p className="font-nohemi text-lg text-white/50 max-w-xl">
              A refined methodology that ensures every project is delivered with
              the highest quality and attention to detail.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <Timeline data={timelineData} />
      </div>
    </section>
  );
}

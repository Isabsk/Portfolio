"use client";

import React, { memo } from "react";
import { cn } from "@/lib/utils";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import {
  IconCode,
  IconGitBranch,
  IconDeviceLaptop,
  IconRocket,
  IconDatabase,
  IconApiApp,
} from "@tabler/icons-react";

interface SkillCardProps {
  area?: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Skill card with glowing border gradient effect
const SkillCard = memo(function SkillCard({
  area,
  icon,
  title,
  description,
}: SkillCardProps) {
  return (
    <li className={cn("min-h-[14rem] list-none", area)}>
      <div className="relative h-full rounded-2xl border border-white/10 p-2 md:rounded-3xl md:p-3 bg-black-50">
        {/* Glowing border gradient effect */}
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={2}
        />

        <div
          className={cn(
            "relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-8",
            "bg-gradient-to-br from-white/[0.03] to-transparent"
          )}
        >
          <div className="relative flex flex-1 flex-col justify-between gap-4">
            {/* Icon */}
            <div className="w-fit rounded-xl border border-white/10 bg-white/5 p-3">
              {icon}
            </div>

            {/* Content */}
            <div className="space-y-3">
              <h3 className="font-poppins text-xl md:text-2xl font-bold text-white">
                {title}
              </h3>
              <p className="font-poppins text-sm md:text-base text-white/50">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
});

export function SkillsSection() {
  const skills = [
    {
      area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
      icon: <IconCode className="h-6 w-6 text-accent-blue" />,
      title: "Java Backend Development",
      description:
        "Building robust backend systems using Java, Servlets, JSP, JDBC, and Apache Tomcat.",
    },
    {
      area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
      icon: <IconApiApp className="h-6 w-6 text-accent-blue" />,
      title: "REST API Design",
      description:
        "Designing and implementing REST APIs with proper HTTP methods, status codes, and clean data contracts.",
    },
    {
      area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
      icon: <IconDatabase className="h-6 w-6 text-accent-blue" />,
      title: "Database & Persistence",
      description:
        "Working with MySQL and MongoDB, handling data modeling, queries, and persistence using JDBC.",
    },
    {
      area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
      icon: <IconDeviceLaptop className="h-6 w-6 text-accent-blue" />,
      title: "Full Stack Web Development",
      description:
        "Developing complete web applications using HTML, CSS, JavaScript, React, and Node.js.",
    },
    {
      area: "md:[grid-area:3/1/4/7] xl:[grid-area:2/8/3/10]",
      icon: <IconRocket className="h-6 w-6 text-accent-blue" />,
      title: "Frontend & UI/UX",
      description:
        "Designinng interfaces.",
    },
    {
      area: "md:[grid-area:3/7/4/13] xl:[grid-area:2/10/3/13]",
      icon: <IconGitBranch className="h-6 w-6 text-accent-blue" />,
      title: "Development Tools",
      description:
        "Using Git, npm, Postman, and the terminal.",
    },
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen w-full py-32 md:py-48 bg-black px-4 md:px-8 lg:px-10"
    >
      <div className="swiss-container relative z-10">
        {/* Section header */}
        <div className="mb-16 md:mb-24">
          <div>
            <span className="font-poppins text-xs font-medium uppercase tracking-[0.3em] text-white/40 block mb-4">
              Expertise
            </span>
            <h2 className="font-poppins text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
              Skills & Expertise
            </h2>
            <p className="font-poppins text-lg text-white/50 max-w-xl">
              A comprehensive skill set refined through years of building
              digital products for startups and enterprises alike.
            </p>
          </div>
        </div>

        {/* Skills grid */}
        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[36rem] xl:grid-rows-2">
          {skills.map((skill) => (
            <SkillCard
              key={skill.title}
              area={skill.area}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

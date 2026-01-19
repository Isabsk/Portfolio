"use client";

import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { FooterSection } from "@/components/sections/footer-section";
import { FocusCards } from "@/components/ui/focus-cards";
import { cn } from "@/lib/utils";

import { projects } from "@/lib/projects";

export default function ProjectsPage() {
    const navItems = [
        { name: "About", link: "/#about" },
        { name: "Experience", link: "/#process" },
        { name: "Skills", link: "/#skills" },
        { name: "Projects", link: "/#work" },
    ];

    return (
        <main className="bg-black min-h-screen">
            <FloatingNav navItems={navItems} />

            <section className="pt-32 pb-24 px-4 md:px-8 lg:px-10">
                <div className="swiss-container max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="mb-16 md:mb-24">
                        <span className="font-poppins text-xs font-medium uppercase tracking-[0.3em] text-white/40 block mb-4">
                            All Projects
                        </span>
                        <h1 className="font-poppins text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8">
                            Archive<span className="text-white/20">.</span>
                        </h1>
                        <p className="font-poppins text-lg md:text-xl text-white/50 max-w-2xl">
                            A collection of projects spanning from web development to brand design.
                            Each project represents a unique challenge and a creative solution.
                        </p>
                        {/* Divider */}
                        <div className="mt-12 h-px bg-gradient-to-r from-white/20 via-white/5 to-transparent" />
                    </div>

                    {/* Grid */}
                    <div className="w-full">
                        <FocusCards cards={projects} />
                    </div>

                    {/* Back to Home link */}
                    <div className="mt-24 flex justify-center">
                        <a
                            href="/"
                            className="group inline-flex items-center gap-3 font-poppins text-sm uppercase tracking-widest text-white/60 hover:text-white transition-colors duration-300"
                        >
                            <svg
                                className="w-4 h-4 rotate-180 transition-transform duration-300 group-hover:translate-x-[-4px]"
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
                            <span>Back to Home</span>
                        </a>
                    </div>
                </div>
            </section>

            <FooterSection />
        </main>
    );
}

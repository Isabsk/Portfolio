import React from "react";
import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { FooterSection } from "@/components/sections/footer-section";
import { cn } from "@/lib/utils";

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    const { content } = project;

    const navItems = [
        { name: "About", link: "/#about" },
        { name: "Experience", link: "/#process" },
        { name: "Skills", link: "/#skills" },
        { name: "Projects", link: "/#work" },
    ];

    return (
        <main className="bg-black min-h-screen">
            <FloatingNav navItems={navItems} />

            {/* Hero Section */}
            <section className="relative h-[70vh] w-full overflow-hidden">
                <img
                    src={project.src}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-end px-4 md:px-8 lg:px-10 pb-16">
                    <div className="swiss-container max-w-7xl mx-auto w-full">
                        <span className="font-poppins text-xs font-medium uppercase tracking-[0.3em] text-white/60 block mb-4">
                            {project.category}
                        </span>
                        <h1 className="font-poppins text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white">
                            {project.title}
                        </h1>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 px-4 md:px-8 lg:px-10">
                <div className="swiss-container max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        {/* Main Info */}
                        <div className="lg:col-span-8 space-y-12">
                            <div className="space-y-6">
                                <h2 className="font-poppins text-3xl font-bold text-white">Overview</h2>
                                <p className="font-poppins text-lg text-white/60 leading-relaxed">
                                    {content?.overview || project.description}
                                </p>
                            </div>

                            {content?.challenge && (
                                <div className="space-y-6">
                                    <h2 className="font-poppins text-3xl font-bold text-white">The Challenge</h2>
                                    <p className="font-poppins text-lg text-white/60 leading-relaxed">
                                        {content.challenge}
                                    </p>
                                </div>
                            )}

                            {content?.solution && (
                                <div className="space-y-6">
                                    <h2 className="font-poppins text-3xl font-bold text-white">The Solution</h2>
                                    <p className="font-poppins text-lg text-white/60 leading-relaxed">
                                        {content.solution}
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Sidebar Stats */}
                        <div className="lg:col-span-4 space-y-12">
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-1 gap-8">
                                {content?.role && (
                                    <div>
                                        <span className="text-xs font-poppins font-semibold uppercase tracking-widest text-white/40 block mb-2">Role</span>
                                        <span className="text-white font-poppins">{content.role}</span>
                                    </div>
                                )}
                                {content?.year && (
                                    <div>
                                        <span className="text-xs font-poppins font-semibold uppercase tracking-widest text-white/40 block mb-2">Year</span>
                                        <span className="text-white font-poppins">{content.year}</span>
                                    </div>
                                )}
                                {content?.technologies && (
                                    <div>
                                        <span className="text-xs font-poppins font-semibold uppercase tracking-widest text-white/40 block mb-2">Tech Stack</span>
                                        <div className="flex flex-wrap gap-2">
                                            {content.technologies.map((tech) => (
                                                <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/70 font-poppins">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Additional Images */}
                    {content?.images && content.images.length > 1 && (
                        <div className="mt-24 space-y-12">
                            {content.images.slice(1).map((img, i) => (
                                <div key={i} className="relative aspect-video rounded-3xl overflow-hidden border border-white/10">
                                    <img src={img} alt={`${project.title} detail ${i + 1}`} className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Footer Navigation */}
                    <div className="mt-32 pt-16 border-t border-white/10 flex justify-between items-center">
                        <a
                            href="/projects"
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
                            <span>Back to Archive</span>
                        </a>

                        {/* Simple NEXT project link */}
                        {projects.indexOf(project) < projects.length - 1 && (
                            <a
                                href={`/projects/${projects[projects.indexOf(project) + 1].slug}`}
                                className="group inline-flex items-center gap-3 font-poppins text-sm uppercase tracking-widest text-white/60 hover:text-white transition-colors duration-300"
                            >
                                <span>Next Project</span>
                                <svg
                                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-[4px]"
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
                        )}
                    </div>
                </div>
            </section>

            <FooterSection />
        </main>
    );
}

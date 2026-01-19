export interface Project {
    slug: string;
    title: string;
    src: string;
    category: string;
    description: string;
    link: string;
    content?: {
        overview: string;
        challenge: string;
        solution: string;
        technologies: string[];
        role: string;
        year: string;
        images?: string[];
    };
}

export const projects: Project[] = [
    {
        slug: "e-commerce-platform",
        title: "E-Commerce Platform",
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        category: "Web Development",
        description: "A high-performance e-commerce solution with real-time inventory and 3D product visualization.",
        link: "/projects/e-commerce-platform",
        content: {
            overview: "A comprehensive e-commerce overhaul for a luxury retail brand, focusing on performance and immersive 3D visualization.",
            challenge: "The brand struggled with low conversion rates on mobile and a disconnected shopping experience for their premium products.",
            solution: "We implemented a Next.js based headless architecture with a custom 3D product viewer that increased engagement by 45%.",
            technologies: ["Next.js", "Three.js", "TailwindCSS", "Shopify Engine"],
            role: "Lead Full Stack Developer",
            year: "2023",
            images: [
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2000&auto=format&fit=crop"
            ]
        }
    },
    {
        slug: "interactive-dashboard",
        title: "Interactive Dashboard",
        src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop",
        category: "UI/UX Design",
        description: "Data visualization dashboard with smooth animations and intuitive user experience.",
        link: "/projects/interactive-dashboard",
        content: {
            overview: "A high-fidelity dashboard for a fintech startup to visualize complex market data in real-time.",
            challenge: "Processing hundreds of data points per second while maintaining a smooth 60fps UI was the primary technical hurdle.",
            solution: "Used D3.js with React and custom Web Workers for data processing, ensuring the main thread stays responsive.",
            technologies: ["React", "D3.js", "Web Workers", "Framer Motion"],
            role: "UI/UX Developer",
            year: "2023",
            images: [
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop"
            ]
        }
    },
    {
        slug: "brand-identity-system",
        title: "Brand Identity System",
        src: "https://images.unsplash.com/photo-1634942537034-2531766767d1?q=80&w=2340&auto=format&fit=crop",
        category: "Branding",
        description: "Complete brand identity system including logo, typography, and digital guidelines.",
        link: "/projects/brand-identity-system",
        content: {
            overview: "A full brand redesign for a sustainable tech company looking to appeal to a younger, eco-conscious demographic.",
            challenge: "The old identity felt dated and corporate, failing to communicate the company's innovative and green mission.",
            solution: "Developed a vibrant, flexible design system based on organic shapes and a digital-first color palette.",
            technologies: ["Illustrator", "Figma", "Motion Design"],
            role: "Art Director",
            year: "2022",
        }
    },
    {
        slug: "webgl-experience",
        title: "WebGL Experience",
        src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2532&auto=format&fit=crop",
        category: "3D / WebGL",
        description: "Immersive 3D experience built with Three.js featuring interactive storytelling.",
        link: "/projects/webgl-experience",
        content: {
            overview: "An experimental web experience that pushes the boundaries of what's possible in a browser.",
            challenge: "Optimizing heavy 3D assets for low-end devices while maintaining visual parity.",
            solution: "Custom shader optimizations and baked lighting for mobile while using high-end Ray tracing for desktops.",
            technologies: ["Three.js", "GLSL", "React Three Fiber"],
            role: "Creative Developer",
            year: "2023",
        }
    },
    {
        slug: "mobile-application",
        title: "Mobile Application",
        src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2340&auto=format&fit=crop",
        category: "Mobile",
        description: "Cross-platform mobile app with seamless animations and offline-first architecture.",
        link: "/projects/mobile-application",
        content: {
            overview: "A lifestyle tracking app designed to help users build better daily habits through gamification.",
            challenge: "Ensuring 100% functionality offline and seamless data synchronization across multiple devices.",
            solution: "React Native with SQLite and a custom sync layer built on top of WebSockets.",
            technologies: ["React Native", "Expo", "SQLite", "Firebase"],
            role: "Lead Mobile Developer",
            year: "2022",
        }
    },
    {
        slug: "saas-platform",
        title: "SaaS Platform",
        src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2340&auto=format&fit=crop",
        category: "Full Stack",
        description: "Enterprise SaaS platform with real-time collaboration and AI-powered features.",
        link: "/projects/saas-platform",
        content: {
            overview: "A collaboration hub for remote teams that integrates AI to automate routine meeting summaries.",
            challenge: "Real-time state synchronization for thousands of concurrent users in a collaborative document editor.",
            solution: "Implemented Yjs CRDTs with a Node.js backend to provide conflict-free collaborative editing.",
            technologies: ["Next.js", "Node.js", "Redis", "OpenAI API"],
            role: "Full Stack Engineer",
            year: "2024",
        }
    },
];

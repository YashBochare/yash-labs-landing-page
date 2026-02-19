"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS, ANIMATION } from "@/constants";
import { cn } from "@/lib/utils";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: ANIMATION.duration,
            ease: ANIMATION.easing,
        },
    },
};

interface ProjectCardProps {
    title: string;
    category: string;
    description: string;
    gradient: string;
}

function ProjectCard({ title, category, description, gradient }: ProjectCardProps) {
    return (
        <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.04, y: -4 }}
            transition={{ duration: 0.25, ease: ANIMATION.easing }}
            className={cn(
                "group relative flex flex-col overflow-hidden rounded-2xl",
                "bg-white/5 backdrop-blur-md border border-white/10",
                "hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]",
                "transition-colors duration-300 cursor-pointer"
            )}
        >
            {/* Thumbnail */}
            <div className={cn("relative h-48 bg-gradient-to-br", gradient)}>
                {/* Subtle grid pattern overlay */}
                <div className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
                        backgroundSize: "24px 24px",
                    }}
                />
                {/* Category tag */}
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 text-xs text-white font-medium">
                    {category}
                </span>
                {/* Arrow icon */}
                <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-6 gap-3">
                <h3 className="text-lg font-semibold text-white group-hover:text-indigo-300 transition-colors duration-200">
                    {title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed flex-1">{description}</p>
                <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="inline-flex items-center gap-1.5 text-sm text-indigo-400 hover:text-indigo-300 transition-colors duration-200 mt-1"
                >
                    View Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
            </div>
        </motion.div>
    );
}

export function Work() {
    const ref = useRef(null);

    return (
        <section id="work" className="py-24">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: ANIMATION.duration, ease: ANIMATION.easing }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-4">
                        Our Work
                    </span>
                    <h2 className="text-4xl font-semibold text-white mb-4">
                        Projects That{" "}
                        <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                            Deliver Results
                        </span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        From AI-powered platforms to cloud-native infrastructure — here&apos;s a selection of
                        the products we&apos;ve shipped for our clients.
                    </p>
                </motion.div>

                {/* Project Grid */}
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {PROJECTS.map((project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

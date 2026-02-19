"use client";

import { motion } from "framer-motion";
import { StatsCounter } from "@/components/shared/StatsCounter";
import { ANIMATION } from "@/constants";

const STATS = [
    { id: "projects", label: "Projects Delivered", value: 150, suffix: "+" },
    { id: "uptime", label: "Uptime SLA", value: 99, suffix: ".9%" },
    { id: "satisfaction", label: "Client Satisfaction", value: 98, suffix: "%" },
    { id: "team", label: "Team Members", value: 40, suffix: "+" },
];

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: ANIMATION.duration,
            ease: ANIMATION.easing,
        },
    },
};

export function About() {
    return (
        <section id="about" className="py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column — About Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: ANIMATION.duration, ease: ANIMATION.easing }}
                        className="space-y-6"
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium">
                            About Us
                        </span>

                        <h2 className="text-4xl font-semibold text-white leading-snug">
                            Built by Engineers,{" "}
                            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                                Driven by Data
                            </span>
                        </h2>

                        <p className="text-lg text-gray-400 leading-relaxed">
                            Yash Labs is a team of AI researchers, full-stack engineers, and
                            product strategists who believe that intelligent software should be
                            the default — not the exception.
                        </p>

                        <p className="text-lg text-gray-400 leading-relaxed">
                            We partner with tech-native founders and enterprise CTOs to design,
                            build, and scale AI-powered SaaS platforms that deliver measurable
                            business outcomes from day one.
                        </p>

                        <div className="flex flex-wrap gap-3 pt-2">
                            {["AI Research", "Full-Stack Dev", "Cloud Native", "MLOps"].map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column — Statistics Grid */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={{
                            hidden: {},
                            visible: { transition: { staggerChildren: 0.15 } },
                        }}
                        className="grid grid-cols-2 gap-6"
                    >
                        {STATS.map((stat) => (
                            <motion.div
                                key={stat.id}
                                variants={itemVariants}
                                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center hover:border-indigo-500/30 transition-colors duration-300"
                            >
                                <p className="text-4xl font-bold text-white mb-2">
                                    <StatsCounter
                                        value={stat.value}
                                        suffix={stat.suffix}
                                        duration={2.0}
                                    />
                                </p>
                                <p className="text-sm text-gray-400">{stat.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

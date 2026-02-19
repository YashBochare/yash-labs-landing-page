"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ANIMATION } from "@/constants";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: ANIMATION.stagger,
        },
    },
};

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

function handleScroll(href: string) {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function Hero() {
    return (
        <section className="min-h-screen flex items-center pt-16">
            <div className="max-w-7xl mx-auto px-6 py-24 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column — Text & CTAs */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="space-y-8"
                    >
                        {/* Badge */}
                        <motion.div variants={itemVariants}>
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400">
                                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                                AI-Powered SaaS Agency
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            variants={itemVariants}
                            className="text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
                        >
                            <span className="bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
                                Build Smarter.
                            </span>
                            <br />
                            <span className="bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
                                Scale Faster.
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                                Powered by AI.
                            </span>
                        </motion.h1>

                        {/* Subtext */}
                        <motion.p
                            variants={itemVariants}
                            className="text-lg text-gray-400 max-w-lg leading-relaxed"
                        >
                            We design and build premium AI-powered SaaS platforms and
                            automation systems for tech-native founders and enterprise CTOs.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-wrap gap-4"
                        >
                            <Button
                                size="lg"
                                variant="primary"
                                onClick={() => handleScroll("#contact")}
                            >
                                Get Started
                            </Button>
                            <Button
                                size="lg"
                                variant="secondary"
                                onClick={() => handleScroll("#services")}
                            >
                                View Projects
                            </Button>
                        </motion.div>

                        {/* Social Proof */}
                        <motion.div
                            variants={itemVariants}
                            className="flex items-center gap-6 pt-2"
                        >
                            <div className="text-center">
                                <p className="text-2xl font-bold text-white">150+</p>
                                <p className="text-xs text-gray-500">Projects Delivered</p>
                            </div>
                            <div className="w-px h-10 bg-white/10" />
                            <div className="text-center">
                                <p className="text-2xl font-bold text-white">99.9%</p>
                                <p className="text-xs text-gray-500">Client Satisfaction</p>
                            </div>
                            <div className="w-px h-10 bg-white/10" />
                            <div className="text-center">
                                <p className="text-2xl font-bold text-white">40+</p>
                                <p className="text-xs text-gray-500">Team Members</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column — Abstract Visual / Gradient Orb */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            ease: ANIMATION.easing,
                            delay: 0.3,
                        }}
                        className="relative hidden lg:flex items-center justify-center"
                    >
                        {/* Outer glow ring */}
                        <div className="absolute w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-3xl animate-pulse" />
                        <div className="absolute w-[350px] h-[350px] rounded-full bg-purple-500/10 blur-2xl animate-pulse [animation-delay:1s]" />
                        <div className="absolute w-[200px] h-[200px] rounded-full bg-cyan-500/10 blur-xl animate-pulse [animation-delay:2s]" />

                        {/* Central glass card */}
                        <div className="relative z-10 w-80 h-80 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 flex flex-col items-center justify-center gap-6 p-8">
                            {/* Abstract grid lines */}
                            <div className="absolute inset-0 rounded-3xl overflow-hidden opacity-20">
                                <div className="absolute inset-0 grid grid-cols-4 grid-rows-4">
                                    {Array.from({ length: 16 }).map((_, i) => (
                                        <div key={i} className="border border-white/10" />
                                    ))}
                                </div>
                            </div>

                            {/* Floating metric cards */}
                            <motion.div
                                animate={{ y: [-6, 6, -6] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="relative z-10 w-full bg-white/5 border border-white/10 rounded-2xl p-4"
                            >
                                <p className="text-xs text-gray-500 mb-1">AI Model Accuracy</p>
                                <div className="flex items-center gap-2">
                                    <div className="flex-1 h-1.5 rounded-full bg-white/10 overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: "97%" }}
                                            transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                                            className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500"
                                        />
                                    </div>
                                    <span className="text-sm font-bold text-white">97%</span>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [6, -6, 6] }}
                                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                                className="relative z-10 w-full bg-white/5 border border-white/10 rounded-2xl p-4"
                            >
                                <p className="text-xs text-gray-500 mb-1">Automation Rate</p>
                                <div className="flex items-center gap-2">
                                    <div className="flex-1 h-1.5 rounded-full bg-white/10 overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: "89%" }}
                                            transition={{ duration: 1.5, delay: 1.0, ease: "easeOut" }}
                                            className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                                        />
                                    </div>
                                    <span className="text-sm font-bold text-white">89%</span>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [-4, 4, -4] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="relative z-10 w-full bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 border border-indigo-500/30 rounded-2xl p-4 text-center"
                            >
                                <p className="text-xs text-gray-400">Avg. Time to Deploy</p>
                                <p className="text-2xl font-bold text-white mt-1">14 days</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

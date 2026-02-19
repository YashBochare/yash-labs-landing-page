"use client";

import { motion } from "framer-motion";
import { Twitter, Linkedin, Github, Zap } from "lucide-react";
import { ANIMATION } from "@/constants";

const QUICK_LINKS = [
    { label: "Home", href: "#" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
];

const LEGAL_LINKS = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
];

const SOCIAL_LINKS = [
    { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: Github, label: "GitHub", href: "https://github.com" },
];

function scrollToSection(href: string) {
    if (href === "#") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: ANIMATION.duration, ease: ANIMATION.easing }}
                    className="grid grid-cols-1 md:grid-cols-4 gap-12"
                >
                    {/* Brand Column */}
                    <div className="md:col-span-1 space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center">
                                <Zap className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-lg font-bold text-white">
                                Yash<span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Labs</span>
                            </span>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Building the future of AI-powered SaaS. From concept to production in record time.
                        </p>
                        {/* Social Icons */}
                        <div className="flex items-center gap-3 pt-2">
                            {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-colors duration-200"
                                >
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
                            Navigation
                        </h4>
                        <ul className="space-y-2.5">
                            {QUICK_LINKS.map(({ label, href }) => (
                                <li key={label}>
                                    <button
                                        onClick={() => scrollToSection(href)}
                                        className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                                    >
                                        {label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
                            Legal
                        </h4>
                        <ul className="space-y-2.5">
                            {LEGAL_LINKS.map(({ label, href }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
                            Contact
                        </h4>
                        <ul className="space-y-2.5 text-sm text-gray-400">
                            <li>hello@Yashlabs.ai</li>
                            <li>PUNE, INDIA</li>
                            <li className="pt-1">
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                    Available for projects
                                </span>
                            </li>
                        </ul>
                    </div>
                </motion.div>

                {/* Copyright Bar */}
                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-500">
                        © 2026 Yash Labs. All rights reserved.
                    </p>
                    <p className="text-sm text-gray-600">
                        Built with Next.js &amp; Framer Motion
                    </p>
                </div>
            </div>
        </footer>
    );
}

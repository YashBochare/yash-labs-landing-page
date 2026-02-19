"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { NAV_LINKS, ANIMATION } from "@/constants";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setMobileOpen(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleNavClick = (href: string) => {
        setMobileOpen(false);
        const el = document.querySelector(href);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <motion.header
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    duration: ANIMATION.duration,
                    ease: ANIMATION.easing,
                }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    scrolled
                        ? "bg-white/5 backdrop-blur-md border-b border-white/10"
                        : "bg-transparent"
                )}
            >
                <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    {/* Logo */}
                    <a
                        href="#"
                        className="text-xl font-bold text-white tracking-tight hover:opacity-80 transition-opacity"
                    >
                        Yash<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-500">Labs</span>
                    </a>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {NAV_LINKS.map((link) => (
                            <button
                                key={link.href}
                                onClick={() => handleNavClick(link.href)}
                                className="text-sm text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>

                    {/* Desktop CTA + Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <Button
                            size="sm"
                            variant="primary"
                            className="hidden md:inline-flex"
                            onClick={() => handleNavClick("#contact")}
                        >
                            Get Started
                        </Button>

                        {/* Mobile Hamburger */}
                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="md:hidden text-white p-2 cursor-pointer"
                            aria-label={mobileOpen ? "Close menu" : "Open menu"}
                        >
                            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </nav>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{
                            duration: ANIMATION.duration,
                            ease: ANIMATION.easing,
                        }}
                        className="fixed inset-0 z-40 bg-[#0f0f14]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
                    >
                        {NAV_LINKS.map((link, i) => (
                            <motion.button
                                key={link.href}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: ANIMATION.duration,
                                    ease: ANIMATION.easing,
                                    delay: i * ANIMATION.stagger,
                                }}
                                onClick={() => handleNavClick(link.href)}
                                className="text-2xl text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer"
                            >
                                {link.label}
                            </motion.button>
                        ))}
                        <Button
                            size="lg"
                            variant="primary"
                            onClick={() => handleNavClick("#contact")}
                            className="mt-4"
                        >
                            Get Started
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

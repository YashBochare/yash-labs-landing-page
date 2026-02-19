"use client";

import { useRef, useState, MouseEvent } from "react";
import { motion } from "framer-motion";
import { Brain, Layers, Zap, Shield, BarChart3, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";
import { ANIMATION } from "@/constants";

const SERVICES = [
    {
        id: "ai-development",
        icon: Brain,
        title: "AI Development",
        description:
            "Custom AI models and intelligent automation solutions tailored to your business needs. From NLP to computer vision.",
    },
    {
        id: "saas-platforms",
        icon: Layers,
        title: "SaaS Platforms",
        description:
            "End-to-end SaaS development with scalable architecture and modern cloud infrastructure built to grow.",
    },
    {
        id: "process-automation",
        icon: Zap,
        title: "Process Automation",
        description:
            "Streamline operations with intelligent workflow automation and seamless integration solutions.",
    },
    {
        id: "security",
        icon: Shield,
        title: "AI Security",
        description:
            "Enterprise-grade security for AI systems. Protect your models and data with advanced threat detection.",
    },
    {
        id: "analytics",
        icon: BarChart3,
        title: "Data & Analytics",
        description:
            "Transform raw data into actionable insights with real-time dashboards and predictive analytics.",
    },
    {
        id: "rapid-deployment",
        icon: Rocket,
        title: "Rapid Deployment",
        description:
            "From concept to production in 14 days. CI/CD pipelines, containerization, and cloud-native delivery.",
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: ANIMATION.stagger,
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

interface ServiceCardProps {
    icon: React.ElementType;
    title: string;
    description: string;
}

function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [flashlight, setFlashlight] = useState({ x: 0, y: 0, visible: false });

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        setFlashlight({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
            visible: true,
        });
    };

    const handleMouseLeave = () => {
        setFlashlight((prev) => ({ ...prev, visible: false }));
    };

    return (
        <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={cn(
                "relative overflow-hidden rounded-2xl p-6 cursor-default",
                "bg-white/5 backdrop-blur-md border border-white/10",
                "hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]",
                "transition-[border-color,box-shadow] duration-300"
            )}
        >
            {/* Flashlight radial gradient effect */}
            {flashlight.visible && (
                <div
                    className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300"
                    style={{
                        background: `radial-gradient(200px circle at ${flashlight.x}px ${flashlight.y}px, rgba(99,102,241,0.12), transparent 70%)`,
                    }}
                />
            )}

            {/* Icon */}
            <div className="relative z-10 mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                <Icon className="w-6 h-6 text-indigo-400" />
            </div>

            {/* Title */}
            <h3 className="relative z-10 text-lg font-semibold text-white mb-2">
                {title}
            </h3>

            {/* Description */}
            <p className="relative z-10 text-sm text-gray-400 leading-relaxed">
                {description}
            </p>
        </motion.div>
    );
}

export function Services() {
    return (
        <section id="services" className="py-24">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: ANIMATION.duration, ease: ANIMATION.easing }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-4">
                        What We Do
                    </span>
                    <h2 className="text-4xl font-semibold text-white mb-4">
                        Services Built for Scale
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        From AI model development to full-stack SaaS platforms, we deliver
                        end-to-end solutions that drive measurable business impact.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {SERVICES.map((service) => (
                        <ServiceCard
                            key={service.id}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

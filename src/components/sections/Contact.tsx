"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Send, Loader2 } from "lucide-react";
import { contactSchema, type ContactFormData } from "@/lib/validations";
import { cn } from "@/lib/utils";
import { ANIMATION } from "@/constants";

const inputClass = cn(
    "w-full bg-transparent rounded-xl px-4 py-3",
    "border border-white/10 text-white placeholder:text-gray-500",
    "focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500",
    "transition-all duration-200"
);

export function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (_data: ContactFormData) => {
        setIsSubmitting(true);
        // Mock submission — 1s delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsSubmitting(false);
        setIsSuccess(true);
        reset();
    };

    return (
        <section id="contact" className="py-24">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: ANIMATION.duration, ease: ANIMATION.easing }}
                    className="text-center mb-12"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-4">
                        Get In Touch
                    </span>
                    <h2 className="text-4xl font-semibold text-white mb-4">
                        Start Your Project
                    </h2>
                    <p className="text-lg text-gray-400 max-w-xl mx-auto">
                        Ready to build something remarkable? Tell us about your project and
                        we&apos;ll get back to you within 24 hours.
                    </p>
                </motion.div>

                {/* Form Container */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: ANIMATION.duration,
                        ease: ANIMATION.easing,
                        delay: 0.15,
                    }}
                    className="max-w-lg mx-auto"
                >
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8">
                        <AnimatePresence mode="wait">
                            {isSuccess ? (
                                /* Success State */
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4, ease: ANIMATION.easing }}
                                    className="flex flex-col items-center justify-center py-12 text-center gap-4"
                                >
                                    <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                                        <CheckCircle className="w-8 h-8 text-cyan-400" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-white">
                                        Message Sent!
                                    </h3>
                                    <p className="text-gray-400">
                                        Thanks for reaching out. We&apos;ll be in touch within 24 hours.
                                    </p>
                                    <button
                                        onClick={() => setIsSuccess(false)}
                                        className="mt-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                                    >
                                        Send another message
                                    </button>
                                </motion.div>
                            ) : (
                                /* Form */
                                <motion.form
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onSubmit={handleSubmit(onSubmit)}
                                    className="space-y-5"
                                >
                                    {/* Name */}
                                    <div>
                                        <label className="block text-sm text-gray-400 mb-1.5">
                                            Name
                                        </label>
                                        <input
                                            {...register("name")}
                                            placeholder="John Smith"
                                            className={cn(
                                                inputClass,
                                                errors.name && "border-red-500/50 focus:border-red-500 focus:ring-red-500"
                                            )}
                                        />
                                        {errors.name && (
                                            <p className="mt-1.5 text-sm text-red-400">
                                                {errors.name.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block text-sm text-gray-400 mb-1.5">
                                            Email
                                        </label>
                                        <input
                                            {...register("email")}
                                            type="email"
                                            placeholder="john@company.com"
                                            className={cn(
                                                inputClass,
                                                errors.email && "border-red-500/50 focus:border-red-500 focus:ring-red-500"
                                            )}
                                        />
                                        {errors.email && (
                                            <p className="mt-1.5 text-sm text-red-400">
                                                {errors.email.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label className="block text-sm text-gray-400 mb-1.5">
                                            Message
                                        </label>
                                        <textarea
                                            {...register("message")}
                                            rows={4}
                                            placeholder="Tell us about your project..."
                                            className={cn(
                                                inputClass,
                                                "resize-none",
                                                errors.message && "border-red-500/50 focus:border-red-500 focus:ring-red-500"
                                            )}
                                        />
                                        {errors.message && (
                                            <p className="mt-1.5 text-sm text-red-400">
                                                {errors.message.message}
                                            </p>
                                        )}
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={cn(
                                            "w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl",
                                            "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold",
                                            "hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]",
                                            "transition-all duration-300",
                                            "disabled:opacity-60 disabled:cursor-not-allowed"
                                        )}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="w-4 h-4 animate-spin" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-4 h-4" />
                                                Send Message
                                            </>
                                        )}
                                    </button>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

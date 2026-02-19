"use client";

import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/ui/GlassCard";

export default function DesignSystemPage() {
    return (
        <main className="min-h-screen py-24 px-6 max-w-7xl mx-auto space-y-16">
            <section>
                <h1 className="text-6xl font-bold tracking-tight mb-4">
                    Design System
                </h1>
                <p className="text-lg text-gray-400">
                    Yash Labs component gallery and token verification.
                </p>
            </section>

            {/* Typography */}
            <section className="space-y-4">
                <h2 className="text-4xl font-semibold">Typography</h2>
                <div className="space-y-3">
                    <h1 className="text-6xl font-bold tracking-tight">H1 — Hero Heading</h1>
                    <h2 className="text-4xl font-semibold">H2 — Section Heading</h2>
                    <h3 className="text-2xl font-semibold">H3 — Subsection</h3>
                    <p className="text-lg text-gray-400">Body text — text-lg text-gray-400</p>
                    <p className="text-sm text-gray-500">Small text — text-sm text-gray-500</p>
                </div>
            </section>

            {/* Colors */}
            <section className="space-y-4">
                <h2 className="text-4xl font-semibold">Colors</h2>
                <div className="flex gap-4 flex-wrap">
                    <div className="w-24 h-24 rounded-2xl bg-[#0f0f14] border border-white/20 flex items-center justify-center text-xs">BG</div>
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 flex items-center justify-center text-xs font-semibold">Gradient</div>
                    <div className="w-24 h-24 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xs">Surface</div>
                </div>
            </section>

            {/* Glassmorphism */}
            <section className="space-y-4">
                <h2 className="text-4xl font-semibold">GlassCard</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <GlassCard className="p-6">
                        <h3 className="text-xl font-semibold mb-2">Default Glass</h3>
                        <p className="text-gray-400 text-sm">No hover effect</p>
                    </GlassCard>
                    <GlassCard className="p-6" hover>
                        <h3 className="text-xl font-semibold mb-2">Hover Glass</h3>
                        <p className="text-gray-400 text-sm">Hover to see effect</p>
                    </GlassCard>
                    <div className="glass p-6">
                        <h3 className="text-xl font-semibold mb-2">CSS .glass</h3>
                        <p className="text-gray-400 text-sm">Using global utility</p>
                    </div>
                </div>
            </section>

            {/* Buttons */}
            <section className="space-y-4">
                <h2 className="text-4xl font-semibold">Buttons</h2>
                <div className="space-y-6">
                    <div className="flex gap-4 flex-wrap items-center">
                        <Button variant="primary">Primary</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="outline">Outline</Button>
                        <Button variant="ghost">Ghost</Button>
                    </div>
                    <div className="flex gap-4 flex-wrap items-center">
                        <Button size="sm">Small</Button>
                        <Button size="md">Medium</Button>
                        <Button size="lg">Large</Button>
                    </div>
                </div>
            </section>
        </main>
    );
}

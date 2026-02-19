"use client";

import { cn } from "@/lib/utils";

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
}

export function GlassCard({ children, className, hover = false }: GlassCardProps) {
    return (
        <div
            className={cn(
                "bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl",
                hover && "transition-all duration-300 hover:bg-white/10 hover:border-white/20",
                className
            )}
        >
            {children}
        </div>
    );
}

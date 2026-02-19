"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface StatsCounterProps {
    value: number;
    suffix?: string;
    duration?: number;
}

export function StatsCounter({ value, suffix = "", duration = 2.0 }: StatsCounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;

        const startTime = performance.now();
        const totalDuration = duration * 1000; // ms

        const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / totalDuration, 1); // linear easing
            setCount(Math.floor(progress * value));

            if (progress < 1) {
                requestAnimationFrame(tick);
            } else {
                setCount(value);
            }
        };

        requestAnimationFrame(tick);
    }, [isInView, value, duration]);

    return (
        <span ref={ref}>
            {count}
            {suffix}
        </span>
    );
}

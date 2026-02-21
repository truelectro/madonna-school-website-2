'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Drop this inside any `relative overflow-hidden` dark hero section.
 * It renders a soft sky-blue orb that smoothly follows the mouse cursor
 * while confined within the section boundaries.
 */
export default function HeroMouseOrb() {
    const orbRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLElement | null>(null);
    const rafRef = useRef<number>(0);

    // Current render position (lerped)
    const currentPos = useRef({ x: 0, y: 0 });
    // Target position (raw mouse)
    const targetPos = useRef({ x: 0, y: 0 });
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Walk up the DOM to find the nearest `relative` section ancestor
        const orb = orbRef.current;
        if (!orb) return;

        const section = orb.closest('section') as HTMLElement | null;
        sectionRef.current = section;

        const handleMouseMove = (e: MouseEvent) => {
            if (!section) return;
            const rect = section.getBoundingClientRect();
            // Position relative to the section
            targetPos.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            };
            if (!visible) setVisible(true);
        };

        const handleMouseLeave = () => setVisible(false);

        section?.addEventListener('mousemove', handleMouseMove);
        section?.addEventListener('mouseleave', handleMouseLeave);

        // Smooth lerp animation loop
        const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
        const SPEED = 0.08; // 0-1: lower = more lag, higher = snappier

        const animate = () => {
            currentPos.current.x = lerp(currentPos.current.x, targetPos.current.x, SPEED);
            currentPos.current.y = lerp(currentPos.current.y, targetPos.current.y, SPEED);

            if (orb) {
                orb.style.transform = `translate(${currentPos.current.x - 300}px, ${currentPos.current.y - 300}px)`;
            }
            rafRef.current = requestAnimationFrame(animate);
        };

        rafRef.current = requestAnimationFrame(animate);

        return () => {
            section?.removeEventListener('mousemove', handleMouseMove);
            section?.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(rafRef.current);
        };
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div
            ref={orbRef}
            aria-hidden="true"
            className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none will-change-transform"
            style={{
                background: 'radial-gradient(circle, rgba(56,189,248,0.18) 0%, rgba(56,189,248,0.06) 50%, transparent 70%)',
                filter: 'blur(60px)',
                opacity: visible ? 1 : 0,
                transition: 'opacity 0.4s ease',
                zIndex: 1,
            }}
        />
    );
}

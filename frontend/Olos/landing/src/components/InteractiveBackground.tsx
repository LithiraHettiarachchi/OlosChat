"use client";

import { useEffect, useRef, useState } from "react";

type Shape = {
    id: number;
    type: "circle" | "square";
    initialTop: string;
    initialLeft: string;
    size: string;
    className: string;
    style?: React.CSSProperties;
};

const SHAPES: Shape[] = [
    // Original shapes
    {
        id: 1, type: "circle", initialTop: "5rem", initialLeft: "2.5rem", size: "6rem",
        className: "border-2 border-primary shadow-[inset_0_0_0_2px_#D4AF37] opacity-20"
    },
    {
        id: 2, type: "square", initialTop: "auto", initialLeft: "auto", size: "8rem",
        className: "border-2 border-primary shadow-[inset_0_0_0_2px_#D4AF37] opacity-20 rotate-12",
        style: { bottom: "10rem", right: "5rem" }
    },
    {
        id: 3, type: "circle", initialTop: "33%", initialLeft: "75%", size: "16rem",
        className: "border border-primary/30 shadow-[inset_0_0_0_1px_#D4AF37] opacity-10"
    },
    {
        id: 4, type: "square", initialTop: "10rem", initialLeft: "33%", size: "4rem",
        className: "border border-primary/40 shadow-[inset_0_0_0_1px_#D4AF37] opacity-15 -rotate-6"
    },
    // Previously added shapes
    {
        id: 5, type: "circle", initialTop: "auto", initialLeft: "2.5rem", size: "8rem",
        className: "border-2 border-primary shadow-[inset_0_0_0_2px_#D4AF37] opacity-20",
        style: { bottom: "5rem" }
    },
    {
        id: 6, type: "square", initialTop: "2.5rem", initialLeft: "auto", size: "3rem",
        className: "border border-primary shadow-[inset_0_0_0_1px_#D4AF37] opacity-30 rotate-45",
        style: { right: "2.5rem" }
    },
    {
        id: 7, type: "square", initialTop: "50%", initialLeft: "auto", size: "5rem",
        className: "border-2 border-primary/20 shadow-[inset_0_0_0_2px_#D4AF37] opacity-10 -rotate-12",
        style: { right: "0" }
    },
    // Newly added shapes for density
    {
        id: 8, type: "circle", initialTop: "15%", initialLeft: "45%", size: "3rem",
        className: "border border-primary shadow-[inset_0_0_0_1px_#D4AF37] opacity-15"
    },
    {
        id: 9, type: "square", initialTop: "60%", initialLeft: "10%", size: "4rem",
        className: "border border-primary shadow-[inset_0_0_0_1px_#D4AF37] opacity-10 rotate-12"
    },
    {
        id: 10, type: "circle", initialTop: "80%", initialLeft: "60%", size: "5rem",
        className: "border border-primary/40 shadow-[inset_0_0_0_1px_#D4AF37] opacity-20"
    },
    {
        id: 11, type: "square", initialTop: "20%", initialLeft: "90%", size: "2.5rem",
        className: "border border-primary shadow-[inset_0_0_0_1px_#D4AF37] opacity-25 rotate-45"
    },
    // Even more shapes (User request: 3 circles, 3 squares)
    {
        id: 12, type: "circle", initialTop: "70%", initialLeft: "20%", size: "4rem",
        className: "border-2 border-primary shadow-[inset_0_0_0_2px_#D4AF37] opacity-15"
    },
    {
        id: 13, type: "circle", initialTop: "10%", initialLeft: "60%", size: "2rem",
        className: "border border-primary/50 shadow-[inset_0_0_0_1px_#D4AF37] opacity-20"
    },
    {
        id: 14, type: "circle", initialTop: "85%", initialLeft: "85%", size: "6rem",
        className: "border border-primary/30 shadow-[inset_0_0_0_1px_#D4AF37] opacity-10"
    },
    {
        id: 15, type: "square", initialTop: "40%", initialLeft: "5%", size: "3rem",
        className: "border border-primary shadow-[inset_0_0_0_1px_#D4AF37] opacity-20 rotate-12"
    },
    {
        id: 16, type: "square", initialTop: "15%", initialLeft: "15%", size: "5rem",
        className: "border-2 border-primary/20 shadow-[inset_0_0_0_2px_#D4AF37] opacity-10 -rotate-6"
    },
    {
        id: 17, type: "square", initialTop: "90%", initialLeft: "40%", size: "2.5rem",
        className: "border border-primary shadow-[inset_0_0_0_1px_#D4AF37] opacity-25 rotate-45"
    },
];

export default function InteractiveBackground() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [shapeTransforms, setShapeTransforms] = useState<{ [key: number]: { x: number, y: number } }>({});

    const transformsRef = useRef<{ [key: number]: { x: number, y: number } }>({});

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;

            const { clientX, clientY } = e;

            const newTransforms: { [key: number]: { x: number, y: number } } = {};
            const children = Array.from(containerRef.current.children) as HTMLElement[];
            // Exclude the gradients (last 2 children)
            const shapeElements = children.slice(0, children.length - 2);

            shapeElements.forEach((el, index) => {
                const shapeId = SHAPES[index].id;
                const rect = el.getBoundingClientRect();

                // Get current transform to calculate base position (resting position)
                const currentTransform = transformsRef.current[shapeId] || { x: 0, y: 0 };

                // Calculate center of the element AS IF it were at rest
                // We subtract the current transform from the measured position
                const centerX = rect.left + rect.width / 2 - currentTransform.x;
                const centerY = rect.top + rect.height / 2 - currentTransform.y;

                const distX = clientX - centerX;
                const distY = clientY - centerY;
                const distance = Math.sqrt(distX * distX + distY * distY);

                const repulsionRadius = 300; // Increased slightly for better feel

                if (distance < repulsionRadius) {
                    const force = (repulsionRadius - distance) / repulsionRadius;
                    const moveDistance = force * 60; // Slightly stronger movement
                    const angle = Math.atan2(distY, distX);

                    // Move AWAY: negate the vector
                    newTransforms[shapeId] = {
                        x: -Math.cos(angle) * moveDistance,
                        y: -Math.sin(angle) * moveDistance
                    };
                } else {
                    newTransforms[shapeId] = { x: 0, y: 0 };
                }
            });

            // Update ref
            transformsRef.current = newTransforms;

            setShapeTransforms(prev => {
                let changed = false;
                for (const key in newTransforms) {
                    if (newTransforms[Number(key)].x !== prev[Number(key)]?.x || newTransforms[Number(key)].y !== prev[Number(key)]?.y) {
                        changed = true;
                        break;
                    }
                }
                if (!changed && Object.keys(newTransforms).length === Object.keys(prev).length) return prev;
                return newTransforms;
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div ref={containerRef} className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
            {SHAPES.map((shape) => {
                const transform = shapeTransforms[shape.id] || { x: 0, y: 0 };
                return (
                    <div
                        key={shape.id}
                        className={`absolute ${shape.type === "circle" ? "rounded-full" : ""} ${shape.className} transition-transform duration-100 ease-out`}
                        style={{
                            top: shape.initialTop !== "auto" ? shape.initialTop : undefined,
                            left: shape.initialLeft !== "auto" ? shape.initialLeft : undefined,
                            width: shape.size,
                            height: shape.size,
                            transform: `translate(${transform.x}px, ${transform.y}px)`,
                            ...shape.style,
                        }}
                    />
                );
            })}

            {/* Background Gradients (Kept static) */}
            <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10 animate-pulse [animation-delay:2s]" />
        </div>
    );
}

"use client";

import { Easing, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.5,
        },
    },
};

const lineVariants = {
    hidden: { opacity: 0, y: 100, rotateX: 90, transformOrigin: "bottom center" },
    visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: {
            duration: 1.5,
            ease: [0.2, 0.6, 0.3, 0.9] as Easing,
        },
    },
};

const buttonVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.17, 0.67, 0.83, 0.67] as Easing, delay: 2.0 },
    },
};

const AnimatedHeading = () => (
    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] font-display font-extrabold text-foreground leading-tight mb-6 drop-shadow-lg text-balance">
        <motion.span variants={lineVariants} className="block animate-text-glow">
            CRAFTING
        </motion.span>
        <motion.span variants={lineVariants} className="block animate-text-glow">
            DIGITAL
        </motion.span>
        <motion.span variants={lineVariants} className="block animate-text-glow">
            MASTERPIECES
        </motion.span>
        <motion.span variants={lineVariants} className="block animate-text-glow">
            FOR YOU<span className="text-dynamic-primary">*</span>
        </motion.span>
    </h1>
);

export function IntroSection() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springConfig = { stiffness: 100, damping: 10, mass: 0.5 };
    const smoothMouseX = useSpring(mouseX, springConfig);
    const smoothMouseY = useSpring(mouseY, springConfig);

    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const updateWindowSize = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        };
        updateWindowSize();
        window.addEventListener("resize", updateWindowSize);
        return () => window.removeEventListener("resize", updateWindowSize);
    }, []);

    const rotateX = useTransform(
        smoothMouseY,
        [0, windowSize.height],
        [-5, 5]
    );
    const rotateY = useTransform(
        smoothMouseX,
        [0, windowSize.width],
        [5, -5]
    );
    const translateX = useTransform(
        smoothMouseX,
        [0, windowSize.width],
        [-20, 20]
    );
    const translateY = useTransform(
        smoothMouseY,
        [0, windowSize.height],
        [-20, 20]
    );

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            mouseX.set(event.clientX);
            mouseY.set(event.clientY);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <section
            id="intro"
            className="relative h-screen w-full flex items-center justify-start bg-background overflow-hidden p-6 sm:p-10 md:p-16 lg:p-24"
        >
            {/* ✅ Way Better New Background Elements */}
            <div className="absolute inset-0 z-0">
                {/* Subtle grid pattern for base texture */}
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-[0.01]"></div>

                {/* Large, animated radial gradient for the main glowing nebula effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-dynamic-primary/20 via-dynamic-accent/10 to-transparent bg-[length:200%_200%] animate-gradient-shift opacity-70"></div>

                {/* Interactive light particles / blobs */}
                <motion.div
                    className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-dynamic-accent/30 blur-3xl animate-blob-pulse"
                    style={{
                        x: useTransform(smoothMouseX, [0, windowSize.width], [-50, 50]),
                        y: useTransform(smoothMouseY, [0, windowSize.height], [-50, 50]),
                        scale: useTransform(smoothMouseX, [0, windowSize.width], [0.9, 1.2]),
                        opacity: useTransform(smoothMouseX, [0, windowSize.width], [0.6, 0.8]),
                    }}
                />
                <motion.div
                    className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-dynamic-secondary/30 blur-3xl animate-blob-pulse delay-1000"
                    style={{
                        x: useTransform(smoothMouseX, [0, windowSize.width], [50, -50]),
                        y: useTransform(smoothMouseY, [0, windowSize.height], [50, -50]),
                        scale: useTransform(smoothMouseY, [0, windowSize.height], [0.8, 1.1]),
                        opacity: useTransform(smoothMouseY, [0, windowSize.height], [0.5, 0.7]),
                    }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/2 w-32 h-32 rounded-full bg-dynamic-primary/30 blur-3xl animate-blob-pulse delay-2000"
                    style={{
                        x: useTransform(smoothMouseX, [0, windowSize.width], [-25, 25]),
                        y: useTransform(smoothMouseY, [0, windowSize.height], [-25, 25]),
                        scale: useTransform(smoothMouseX, [0, windowSize.width], [0.7, 1.0]),
                        opacity: useTransform(smoothMouseX, [0, windowSize.width], [0.4, 0.6]),
                    }}
                />
            </div>

            {/* ✅ Main Content */}
            <motion.div
                className="text-left z-10 max-w-4xl"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{ rotateX, rotateY, translateX, translateY }}
                transition={{ type: "spring", stiffness: 50, damping: 10 }}
            >
                <AnimatedHeading />
            </motion.div>

            {/* ✅ CTA Button */}
            <motion.div
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 md:bottom-16 md:left-16 lg:bottom-24 lg:left-24 z-20"
            >
                <Link href="#projects">
                    <Button className="px-6 py-3 text-lg font-semibold bg-card cursor-pointer border border-border/50 text-dynamic-text-primary hover:bg-dynamic-primary hover:text-primary-foreground transition-all duration-300 ease-in-out rounded-lg shadow-md hover:shadow-dynamic-primary/30 transform hover:scale-105">
                        <span className="text-dynamic-text-secondary text-xs block mb-0.5">
                            OUR NEXT STEP:
                        </span>
                        YOUR PROJECT
                    </Button>
                </Link>
            </motion.div>
        </section>
    );
}

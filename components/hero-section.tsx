"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const heroVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.6, 0.05, 0.01, 0.9] as [number, number, number, number] },
  },
};

export function HeroSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
      <section id="hero" className="py-24 md:py-40 bg-background relative overflow-hidden">
        {/* Minimalistic background elements */}
        <div className="absolute inset-0 z-0">
          {/* Very subtle grid pattern */}
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-[0.03]"></div>
          {/* Subtle radial gradient */}
          <div
              className="absolute inset-0 bg-gradient-to-tl from-transparent via-secondary/5 to-transparent opacity-10 animate-pulse-slow"
          ></div>
        </div>

        <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10">
          <motion.div
              ref={ref}
              className="text-center max-w-4xl mx-auto"
              variants={heroVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              style={{ pointerEvents: "auto" }} // ensure this container allows pointer events
          >
            <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-dynamic-primary to-dynamic-accent leading-tight mb-6 drop-shadow-lg"
            >
              Your Vision, Our Expertise.
            </motion.h1>
            <motion.p
                variants={itemVariants}
                className="text-xl md:text-2xl lg:text-3xl text-dynamic-text-secondary font-body mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              We are Phoenix Reforge, a collective of Web Developers and Designers. Together, we transform ideas
              into stunning, functional web experiences.
            </motion.p>
            <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row justify-center gap-6"
                style={{ pointerEvents: "auto" }} // allow buttons to be clickable
            >
              {/* Button Solution for "View Our Portfolio" */}
              <Button
                  asChild
                  className="px-8 py-4 text-xl font-semibold bg-dynamic-primary hover:bg-dynamic-accent transition-all duration-300 ease-in-out rounded-full shadow-md hover:shadow-dynamic-primary/30 transform hover:scale-105 cursor-pointer"
              >
                {/* Use <Link> as a direct child of the Button */}
                <Link href="#projects">
                  View Our Portfolio
                </Link>
              </Button>

              {/* Button Solution for "Get In Touch" */}
              <Button
                  asChild
                  variant="outline"
                  className="px-8 py-4 text-xl font-semibold border-dynamic-primary text-dynamic-primary hover:bg-dynamic-primary/10 transition-all duration-300 ease-in-out rounded-full bg-transparent shadow-md hover:shadow-dynamic-primary/30 transform hover:scale-105 cursor-pointer"
              >
                {/* Use <Link> as a direct child of the Button */}
                <Link href="#contact">
                  Get In Touch
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
  );
}
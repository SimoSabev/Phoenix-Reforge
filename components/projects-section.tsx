"use client"

import { useState, useEffect } from "react"
import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"

const projectList = [
  {
    name: "Azion",
    role: "Frontend Development",
    type: "IT Competition",
    year: 2024,
    image: "/azion.png?height=200&width=300&query=Azion%20website%20screenshot",
    link: "https://www.azion.online/",
  },
  {
    name: "Ilios Decor",
    role: "Frontend Development",
    type: "Freelance",
    year: 2025,
    image: "/ilios.png?height=200&width=300&query=Ilios%20Decor%20website%20screenshot",
    link: "https://www.iliosdecor.com/",
  },
  {
    name: "Yachtllywood",
    role: "Frontend Development",
    type: "Freelance",
    year: 2024,
    image: "/yachtllywood.png?height=200&width=300&query=Yachtllywood%20website%20screenshot",
    link: "https://www.yachtllywood.com/",
  },
  {
    name: "Shiseikan Aikido Dojo",
    role: "Frontend Development",
    type: "Freelance",
    year: 2022,
    image: "/shiseikan.png?height=200&width=300&query=Shiseikan%20Aikido%20Dojo%20website%20screenshot",
    link: "https://www.aikidoshiseikan.com/",
  },
  {
    name: "Cruz Cuts",
    role: "Frontend Development",
    type: "Freelance",
    year: 2023,
    image: "/cruz.png?height=200&width=300&query=Cruz%20Cuts%20website%20screenshot",
    link: "https://fifo-barber.vercel.app",
  },
  {
    name: "Personal Portfolio",
    role: "Design & Frontend Development",
    type: "Freelance",
    year: 2021,
    image: "/personalportfolio.png?height=200&width=300&query=Personal%20Portfolio%20website%20screenshot",
    link: "https://frontend-portfolio-six-kappa.vercel.app/",
  },
  {
    name: "Arlekin",
    role: "Frontend Development",
    type: "Freelance",
    year: 2023,
    image: "/arlekin.png?height=200&width=300&query=Arlekin%20website%20screenshot",
    link: "https://arlekin.vercel.app",
  },
]

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.42, 0, 0.58, 1] as [number, number, number, number] },
  },
}

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.42, 0, 0.58, 1] as [number, number, number, number] },
  },
}

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<{ name: string; image: string } | null>(null)
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const [sectionRef, sectionInView] = useInView({ triggerOnce: true, threshold: 0.05 })
  const [isMobile, setIsMobile] = useState(false) // State to track mobile view

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768) // Tailwind's 'md' breakpoint is 768px
    }

    // Set initial state
    handleResize()

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleMouseMove = (event: React.MouseEvent) => {
    const { clientX, clientY } = event
    setCursorPosition({ x: clientX, y: clientY })
  }

  return (
      <section
          id="projects"
          ref={sectionRef}
          onMouseMove={handleMouseMove}
          className="py-24 md:py-40 bg-background text-dynamic-text-primary relative overflow-hidden"
      >
        <motion.h2
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            variants={sectionVariants}
            className="text-6xl md:text-7xl font-display font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-dynamic-accent to-dynamic-primary drop-shadow-lg pb-2 leading-tight"
        >
          Projects
        </motion.h2>
        <div className="absolute inset-0 z-0">
          {/* Base texture */}
          <div className="absolute inset-0 bg-[url('/hexagonal-pattern.svg')] bg-repeat opacity-5 animate-background-pan"></div>
          {/* Subtle gradient glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/10 to-transparent opacity-20 animate-pulse-slow"></div>
          {/* Abstract shapes texture */}
          <div className="absolute inset-0 bg-[url('/abstract-shapes.svg')] bg-cover bg-center opacity-3 animate-fade-in"></div>
          {/* Large radial glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[800px] h-[800px] rounded-full bg-dynamic-accent/10 blur-3xl opacity-30 animate-blob-pulse"></div>
          </div>
        </div>
        <div className="container mx-auto px-8 md:px-16 lg:px-24 relative z-10">
          <motion.h2
              initial="hidden"
              animate={sectionInView ? "visible" : "hidden"}
              variants={itemVariants}
              className="text-5xl md:text-6xl font-display font-extrabold text-center mb-20 text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(to right, hsl(var(--accent)), hsl(var(--primary)))",
              }}
          >
            Our Creative Portfolio
          </motion.h2>
          <motion.div className="relative" initial="hidden" animate={sectionInView ? "visible" : "hidden"}>
            <div className="grid grid-cols-1 gap-y-6">
              {projectList.map((project) => (
                  <Link
                      key={project.name}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group"
                  >
                    <motion.div
                        variants={itemVariants}
                        className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between py-6 px-8 rounded-xl transition-all duration-300 ease-in-out group bg-card border border-border/50 hover:bg-dynamic-primary/10 hover:border-dynamic-primary/50 cursor-pointer group-hover:shadow-2xl group-hover:shadow-dynamic-primary/40 group-hover:ring-2 group-hover:ring-dynamic-primary/60"
                        onMouseEnter={() => setHoveredProject({ name: project.name, image: project.image })}
                        onMouseLeave={() => setHoveredProject(null)}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8 w-full sm:w-auto mb-4 sm:mb-0">
                        <motion.span
                            className="text-3xl sm:text-2xl font-display font-bold text-dynamic-primary group-hover:text-dynamic-primary-foreground transition-colors duration-300"
                            whileHover={{ scale: 1.02, x: 5 }}
                        >
                          {project.name}
                        </motion.span>
                        <span className="text-dynamic-text-secondary text-lg sm:text-xl">{project.role}</span>
                      </div>
                      <div className="flex items-center gap-4 sm:gap-6">
                        <span className="text-dynamic-text-secondary text-lg sm:text-xl hidden md:block">{project.type}</span>
                        <span className="text-dynamic-text-secondary text-lg sm:text-xl">{project.year}</span>
                      </div>
                      {/* Conditionally render the hover image only on non-mobile screens */}
                      {!isMobile && (
                          <AnimatePresence>
                            {hoveredProject?.name === project.name && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                    style={{
                                      position: "fixed",
                                      top: cursorPosition.y + 10,
                                      left: cursorPosition.x + 20,
                                      pointerEvents: "none",
                                      zIndex: 50,
                                    }}
                                    className="w-80 h-52 bg-card rounded-xl shadow-2xl overflow-hidden border border-border/50"
                                >
                                  <Image
                                      src={project.image || "/placeholder.svg"}
                                      alt={`Preview of ${project.name}`}
                                      width={320}
                                      height={208}
                                      className="object-cover w-full h-full"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                                    <span className="text-lg font-semibold text-white">{project.name}</span>
                                  </div>
                                </motion.div>
                            )}
                          </AnimatePresence>
                      )}
                    </motion.div>
                  </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
  )
}

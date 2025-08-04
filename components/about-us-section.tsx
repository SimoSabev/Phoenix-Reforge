"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, Sparkles, CircleDotDashed } from "lucide-react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

const sectionVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
     transition: { duration: 0.9, ease: [0.42, 0, 0.58, 1] as [number, number, number, number] },
  },
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" as const } },
}

export function AboutUsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section id="about" className="py-24 md:py-40 bg-background text-foreground relative overflow-hidden">
      {/* Minimalistic background elements */}
      <div className="absolute inset-0 z-0">
        {/* Very subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-[0.03]"></div>
        {/* Subtle radial gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-accent/5 to-transparent opacity-10 animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <motion.h2
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={sectionVariants}
          className="text-5xl md:text-6xl font-display font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-dynamic-accent to-dynamic-primary drop-shadow-lg"
        >
          Meet the Visionaries
        </motion.h2>
        <motion.div
          ref={ref}
          className="grid grid-cols-1 gap-10 max-w-4xl mx-auto"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={sectionVariants}
        >
          {/* Simeon Sabev - Web Developer */}
          <motion.div variants={cardVariants} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
            <Card className="bg-card border border-border/50 shadow-xl p-8 rounded-2xl hover:shadow-dynamic-primary/20 transition-all duration-300 ease-in-out flex flex-col md:flex-row items-center md:items-start gap-6 hover:scale-115">
              <div className="relative w-36 h-36 md:w-40 md:h-40 flex-shrink-0">
                <Image
                  src="/placeholder.svg?height=200&width=200&text=Simeon"
                  alt="Simeon Sabev"
                  width={200}
                  height={200}
                  className="rounded-full object-cover w-full h-full border-3 border-dynamic-primary"
                />
                <Badge className="absolute top-0 right-0 bg-dynamic-primary text-primary-foreground px-2.5 py-0.5 rounded-full text-xs font-semibold flex items-center gap-1">
                  <Sparkles className="h-3 w-3" /> Available
                </Badge>
              </div>
              <div className="text-center md:text-left flex-grow">
                <CardHeader className="p-0 pb-3">
                  <CardTitle className="text-3xl font-display font-bold text-dynamic-primary mb-0.5">
                    Simeon Sabev
                  </CardTitle>
                  <CardDescription className="text-lg text-dynamic-text-secondary">Frontend Developer</CardDescription>
                </CardHeader>
                <CardContent className="p-0 text-base text-foreground space-y-3">
                  <p className="leading-relaxed">
                    I&apos;m a professional front-end developer with over two years of experience crafting beautiful,
                    responsive, and highly functional web applications. I specialize in modern technologies and
                    user-centered design, bringing ideas to life with clean, efficient code.
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-1.5 mb-3">
                    <Badge variant="outline" className="border-dynamic-primary text-dynamic-primary text-xs">
                      React & Next.js
                    </Badge>
                    <Badge variant="outline" className="border-dynamic-primary text-dynamic-primary text-xs">
                      Web Development
                    </Badge>
                    <Badge variant="outline" className="border-dynamic-primary text-dynamic-primary text-xs">
                      Responsive Design
                    </Badge>
                  </div>
                  <div className="flex flex-col items-center md:items-start gap-1.5">
                    <a
                      href="tel:+359885031865"
                      className="flex items-center gap-2 text-dynamic-text-secondary hover:text-dynamic-primary transition-colors text-base"
                    >
                      <Phone className="h-4 w-4" />
                      <span>+359 88 503 1865</span>
                    </a>
                    <a
                      href="mailto:sabevsimeon08@gmail.com"
                      className="flex items-center gap-2 text-dynamic-text-secondary hover:text-dynamic-primary transition-colors text-base"
                    >
                      <Mail className="h-4 w-4" />
                      <span>sabevsimeon08@gmail.com</span>
                    </a>
                  </div>
                </CardContent>
              </div>
            </Card>
          </motion.div>

          {/* Maksim Akimov - Web Designer */}
          <motion.div variants={cardVariants} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
            <Card className="bg-card border border-border/50 shadow-xl p-8 rounded-2xl hover:shadow-dynamic-primary/20 transition-all duration-300 ease-in-out flex flex-col md:flex-row-reverse items-center md:items-start gap-6 hover:scale-115">
              <div className="relative w-36 h-36 md:w-40 md:h-40 flex-shrink-0">
                <Image
                  src="/placeholder.svg?height=200&width=200&text=Maksim"
                  alt="Maksim Akimov"
                  width={200}
                  height={200}
                  className="rounded-full object-cover w-full h-full border-3 border-dynamic-secondary"
                />
                <Badge className="absolute top-0 left-0 bg-dynamic-secondary text-secondary-foreground px-2.5 py-0.5 rounded-full text-xs font-semibold flex items-center gap-1">
                  <CircleDotDashed className="h-3 w-3" /> Open
                </Badge>
              </div>
              <div className="text-center md:text-right flex-grow">
                <CardHeader className="p-0 pb-3">
                  <CardTitle className="text-3xl font-display font-bold text-dynamic-secondary mb-0.5">
                    Maksim Akimov
                  </CardTitle>
                  <CardDescription className="text-lg text-dynamic-text-secondary">
                    Web Designer & UI/UX
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0 text-base text-foreground space-y-3">
                  <p className="leading-relaxed">
                    I am a passionate web designer with an eye for aesthetics and user-centric interfaces. My designs
                    prioritize visual appeal, intuitive navigation, and a strong brand identity, creating engaging
                    digital experiences.
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-end gap-1.5 mb-3">
                    <Badge variant="outline" className="border-dynamic-secondary text-dynamic-secondary text-xs">
                      Figma & Sketch
                    </Badge>
                    <Badge variant="outline" className="border-dynamic-secondary text-dynamic-secondary text-xs">
                      UI/UX Design
                    </Badge>
                    <Badge variant="outline" className="border-dynamic-secondary text-dynamic-secondary text-xs">
                      User Experience
                    </Badge>
                  </div>
                  <div className="flex flex-col items-center md:items-end gap-1.5">
                    <a
                      href="tel:+359988231539"
                      className="flex items-center gap-2 text-dynamic-text-secondary hover:text-dynamic-secondary transition-colors text-base"
                    >
                      <Phone className="h-4 w-4" />
                      <span>+359 98 823 1539</span>
                    </a>
                    <a
                      href="mailto:maxym.akimov@gmail.com"
                      className="flex items-center gap-2 text-dynamic-text-secondary hover:text-dynamic-secondary transition-colors text-base"
                    >
                      <Mail className="h-4 w-4" />
                      <span>maxym.akimov@gmail.com</span>
                    </a>
                  </div>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

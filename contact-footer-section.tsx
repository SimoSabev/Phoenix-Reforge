"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import emailjs from "emailjs-com"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import Link from "next/link"

const sectionVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.42, 0, 0.58, 1] as [number, number, number, number] },
  },
}

const socialIconVariants = {
  hover: { scale: 1.2, rotate: 10, color: "hsl(var(--dynamic-primary))", transition: { duration: 0.3 } },
}

export default function ContactFooterSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionSuccess, setSubmissionSuccess] = useState<boolean | null>(null) // Use null for initial state

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmissionSuccess(null) // Reset submission status

    const dataToSend = {
      ...formData,
      title: "New Contact Message",
      time: new Date().toLocaleString(),
    }

    emailjs.send("service_zatwx56", "template_2mitpjc", dataToSend, "LI0fIzPp7hvH2VqTM").then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text)
        setIsSubmitting(false)
        setSubmissionSuccess(true)
        setFormData({ name: "", email: "", message: "" }) // Clear form on success
      },
      (error) => {
        console.log("FAILED...", error)
        setIsSubmitting(false)
        setSubmissionSuccess(false)
        alert("An error occurred while sending your message. Please try again.")
      },
    )
  }

  return (
    <>
      <section id="contact" className="py-24 md:py-40 bg-background text-dynamic-text-primary bg-network-mesh">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <motion.h2
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={sectionVariants}
            className="text-5xl md:text-6xl font-extrabold text-center mb-20 text-transparent bg-clip-text"
            style={{
              // Updated gradient to match the ProjectsSection
              backgroundImage: "linear-gradient(to right, hsl(var(--dynamic-accent)), hsl(var(--dynamic-primary)))",
            }}
          >
            Let&apos;s Create Together
          </motion.h2>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={sectionVariants}
            className="max-w-3xl mx-auto bg-card backdrop-blur-sm p-12 rounded-3xl shadow-2xl border border-border/50"
          >
            <form className="grid gap-8" onSubmit={handleSubmit}>
              <div>
                <Label htmlFor="name" className="text-xl text-dynamic-text-secondary mb-3 block">
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-input border-border text-dynamic-text-primary placeholder:text-dynamic-text-secondary py-3 px-4 text-lg focus:border-dynamic-primary focus:ring-2 focus:ring-dynamic-primary/50 transition-all duration-300"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-xl text-dynamic-text-secondary mb-3 block">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-input border-border text-dynamic-text-primary placeholder:text-dynamic-text-secondary py-3 px-4 text-lg focus:border-dynamic-primary focus:ring-2 focus:ring-dynamic-primary/50 transition-all duration-300"
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-xl text-dynamic-text-secondary mb-3 block">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project or inquiry..."
                  rows={7}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-input border-border text-dynamic-text-primary placeholder:text-dynamic-text-secondary py-3 px-4 text-lg focus:border-dynamic-primary focus:ring-2 focus:ring-dynamic-primary/50 transition-all duration-300"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 text-xl font-semibold hover:bg-dynamic-primary/90 transition-all duration-300 rounded-lg shadow-lg hover:shadow-dynamic-primary/40"
                style={{ backgroundColor: "hsl(var(--dynamic-primary))" }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
            {submissionSuccess === true && (
              <p className="mt-4 text-lg text-green-500 text-center">Message sent successfully!</p>
            )}
            {submissionSuccess === false && (
              <p className="mt-4 text-lg text-red-500 text-center">Failed to send message. Please try again.</p>
            )}
          </motion.div>
        </div>
      </section>
      <footer className="bg-card py-16 text-dynamic-text-secondary text-center border-t border-border/50">
        <div className="container mx-auto px-8 md:px-16 lg:px-24 flex flex-col items-center gap-8">
          <div className="flex gap-8">
            <motion.div whileHover="hover" variants={socialIconVariants}>
              <Link
                href="#"
                className="hover:text-dynamic-primary transition-colors"
                aria-label="GitHub"
                style={{ color: "hsl(var(--dynamic-text-secondary))" }}
              >
                <Github className="h-8 w-8" />
              </Link>
            </motion.div>
            <motion.div whileHover="hover" variants={socialIconVariants}>
              <Link
                href="#"
                className="hover:text-dynamic-primary transition-colors"
                aria-label="LinkedIn"
                style={{ color: "hsl(var(--dynamic-text-secondary))" }}
              >
                <Linkedin className="h-8 w-8" />
              </Link>
            </motion.div>
            <motion.div whileHover="hover" variants={socialIconVariants}>
              <Link
                href="#"
                className="hover:text-dynamic-primary transition-colors"
                aria-label="Twitter"
                style={{ color: "hsl(var(--dynamic-text-secondary))" }}
              >
                <Twitter className="h-8 w-8" />
              </Link>
            </motion.div>
            <motion.div whileHover="hover" variants={socialIconVariants}>
              <Link
                href="mailto:contact@devanddesign.com"
                className="hover:text-dynamic-primary transition-colors"
                aria-label="Email"
                style={{ color: "hsl(var(--dynamic-text-secondary))" }}
              >
                <Mail className="h-8 w-8" />
              </Link>
            </motion.div>
          </div>
          <p className="text-lg leading-relaxed">
            &copy; {new Date().getFullYear()} Dev & Design. All rights reserved.
            <br />
            Crafting digital masterpieces with passion and precision.
          </p>
        </div>
      </footer>
    </>
  )
}

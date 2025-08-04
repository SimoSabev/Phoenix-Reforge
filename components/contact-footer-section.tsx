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
import { Mail, Phone } from "lucide-react" // Removed Github, Linkedin, Twitter icons
import Link from "next/link"
import Image from "next/image"

const sectionVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, ease: [0.42, 0, 0.58, 1] as [number, number, number, number] },
    },
}

// Removed socialIconVariants as social icons are being removed from the footer

export default function ContactFooterSection() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })
    const [sectionRef, sectionInView] = useInView({ triggerOnce: true, threshold: 0.05 })
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submissionSuccess, setSubmissionSuccess] = useState<boolean | null>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target
        setFormData((prev) => ({ ...prev, [id]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmissionSuccess(null)

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
                setFormData({ name: "", email: "", message: "" })
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
            <section id="contact" className="py-24 md:py-40 bg-background text-foreground relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-[0.03]"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-secondary/5 to-transparent opacity-10 animate-pulse-slow"></div>
                </div>

                <div className="container mx-auto px-8 md:px-16 lg:px-24">
                    <motion.h2
                        ref={sectionRef}
                        initial="hidden"
                        animate={sectionInView ? "visible" : "hidden"}
                        variants={sectionVariants}
                        className="text-6xl md:text-7xl font-display font-extrabold text-center bg-clip-text text-transparent bg-gradient-to-r from-dynamic-accent to-dynamic-primary drop-shadow-lg pb-2 leading-tight"
                    >
                        Let&apos;s Connect Together
                    </motion.h2>
                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={sectionVariants}
                        className="max-w-3xl mx-auto mt-20 bg-card backdrop-blur-sm p-7 rounded-2xl shadow-xl border border-border/50"
                    >
                        <form className="flex flex-col w-full gap-8" onSubmit={handleSubmit}>
                            <div className="flex flex-col w-full">
                                <Label htmlFor="name" className="text-lg font-medium text-dynamic-text-secondary mb-2">
                                    Name
                                </Label>
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder="Your Full Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-input text-foreground placeholder:text-muted-foreground py-4 px-5 border rounded-lg border-border focus:border-primary focus:ring focus:ring-primary/40 transition-all"
                                />
                            </div>
                            <div className="flex flex-col w-full">
                                <Label htmlFor="email" className="text-lg font-medium text-dynamic-text-secondary mb-2">
                                    Email
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="your@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-input text-foreground placeholder:text-muted-foreground py-4 px-5 border rounded-lg border-border focus:border-primary focus:ring focus:ring-primary/40 transition-all"
                                />
                            </div>
                            <div className="flex flex-col w-full">
                                <Label htmlFor="message" className="text-lg font-medium text-dynamic-text-secondary mb-2">
                                    Message
                                </Label>
                                <Textarea
                                    id="message"
                                    placeholder="Tell us about your project or inquiry..."
                                    rows={6}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-input text-foreground placeholder:text-muted-foreground py-4 px-5 border rounded-lg border-border focus:border-primary focus:ring focus:ring-primary/40 transition-all resize-none"
                                />
                            </div>
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 text-xl font-semibold text-white rounded-lg shadow-md bg-primary hover:bg-primary/80 active:bg-primary/70 transition-all transform hover:-translate-y-1 focus:ring-2 focus:ring-primary/60 cursor-pointer"
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-t-transparent rounded-full animate-spin border-white"></div>
                    <span>Sending...</span>
                  </span>
                                ) : (
                                    "Send Message"
                                )}
                            </Button>
                            {submissionSuccess === true && (
                                <p className="text-center text-lg text-green-500">Message sent successfully!</p>
                            )}
                            {submissionSuccess === false && (
                                <p className="text-center text-lg text-red-500">Failed to send message. Please try again.</p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </section>
            <footer className="bg-card py-12 text-muted-foreground text-center border-t border-border/50">
                <div className="container mx-auto px-8 md:px-16 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 items-start">
                    {/* Left Column: Logo and Copyright */}
                    <div className="flex flex-col items-center md:items-start md:col-span-1">
                        <Link href="#intro" className="cursor-pointer flex items-center gap-2">
                            <Image
                                src="/phoenixfavicon.png"
                                alt="Phoenix Reforge Logo"
                                width={80}
                                height={30}
                                className="object-contain"
                            />
                            <span className="text-xl font-semibold text-muted-foreground">PHOENIX REFORGE</span>
                        </Link>
                        <p className="text-base leading-relaxed text-dynamic-text-secondary mt-4 md:text-left">
                            &copy; {new Date().getFullYear()} Phoenix Reforge. All rights reserved.
                            <br />
                            Crafting digital masterpieces with passion and precision.
                        </p>
                    </div>

                    {/* Right Column: Contact Information */}
                    <div className="flex flex-col items-center md:items-end md:col-span-1">
                        <h3 className="text-xl font-semibold text-foreground mb-4">Contact Us</h3>
                        <div className="flex flex-col items-center md:items-end gap-3">
                            {/* Simeon's Contact */}
                            <div className="flex flex-col items-center md:items-end">
                                <p className="text-lg font-medium text-dynamic-primary mb-1">Simeon Sabev</p>
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
                            {/* Maksim's Contact */}
                            <div className="flex flex-col items-center md:items-end mt-4">
                                <p className="text-lg font-medium text-dynamic-primary mb-1">Maksim Akimov</p>
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
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

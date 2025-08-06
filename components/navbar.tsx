"use client"

import Link from "next/link"
import Image from "next/image"
import {Easing, motion} from "framer-motion"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "Home", href: "#intro" },
  { name: "About Us", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

const linkVariants = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
  hover: { scale: 1.05, color: "hsl(var(--primary))", transition: { duration: 0.2 } },
}

const mobileDropdownVariants = {
  hidden: { opacity: 0, y: "-100%", transition: { duration: 0.3, ease: [0.42, 0, 0.58, 1] as Easing } },
  visible: {
    opacity: 1,
    y: "0%",
    transition: {
      duration: 0.3,
      ease: [0.42, 0, 0.58, 1] as Easing,
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
}

const mobileLinkVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
}

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
      <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm py-4 px-8 md:px-16 lg:px-24 border-b border-border/50 shadow-lg"
      >
        <div className="container mx-auto flex justify-between items-center h-14">
          <Link href="#intro" className="cursor-pointer flex items-center">
            <Image
                src="/phoenixfull.png" // Corrected logo path
                alt="Phoenix Reforge Logo"
                width={130}
                height={35}
                className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
                <motion.a
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors relative group"
                    variants={linkVariants}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                </motion.a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
              {isMobileMenuOpen ? (
                  <X className="h-6 w-6 text-foreground" />
              ) : (
                  <Menu className="h-6 w-6 text-foreground" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
            <motion.div
                className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-lg py-4 md:hidden"
                initial="hidden"
                animate="visible"
                exit="hidden" // Use hidden for exit animation
            >
              <nav className="flex flex-col items-center gap-4 text-xl font-bold text-foreground">
                {navLinks.map((link, index) => (
                    <motion.a
                        key={link.name}
                        href={link.href}
                        onClick={closeMobileMenu} // Close menu on link click
                        variants={mobileLinkVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: index * 0.05 }}
                        className="hover:text-primary transition-colors py-2 w-full text-center"
                    >
                      {link.name}
                    </motion.a>
                ))}
              </nav>
            </motion.div>
        )}
      </motion.nav>
  )
}

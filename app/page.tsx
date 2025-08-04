import {Navbar} from "@/components/navbar"
import {IntroSection} from "@/components/intro-section"
import {HeroSection} from "@/components/hero-section"
import {AboutUsSection} from "@/components/about-us-section"
import ProjectsSection from "@/components/projects-section"
import ContactFooterSection from "@/components/contact-footer-section"

export default function Home() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Navbar/>
            <IntroSection/>
            <HeroSection/>
            <AboutUsSection/>
            <ProjectsSection/>
            <ContactFooterSection/>
        </div>
    )
}

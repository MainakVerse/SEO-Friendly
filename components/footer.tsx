"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Twitter, Linkedin, Github, Mail } from "lucide-react"

export function Footer() {
  const footerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const footer = footerRef.current
    if (!footer) return

    // Create sparkles
    const createSparkle = () => {
      const sparkle = document.createElement("div")
      sparkle.className = "sparkle"
      sparkle.style.left = `${Math.random() * 100}%`
      sparkle.style.top = `${Math.random() * 100}%`
      sparkle.style.animationDelay = `${Math.random() * 2}s`
      footer.appendChild(sparkle)

      setTimeout(() => sparkle.remove(), 2000)
    }

    const interval = setInterval(createSparkle, 300)
    return () => clearInterval(interval)
  }, [])

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden bg-gradient-to-br from-secondary via-primary to-secondary py-16"
    >
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div>
            <h3 className="mb-4 text-2xl font-bold text-white">SEO Friendly</h3>
            <p className="text-sm leading-relaxed text-white/80">
              AI-powered SEO and analytics platform helping businesses grow their online presence.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Product</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  API
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Services</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Technical SEO Audit
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Content Optimization
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Keyword Research
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Link Building
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Local SEO
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Company</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Connect</h4>
            <div className="flex gap-2 mb-4">
              <Button size="icon" variant="secondary" className="bg-white/10 hover:bg-white/20 text-white border-0">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="secondary" className="bg-white/10 hover:bg-white/20 text-white border-0">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="secondary" className="bg-white/10 hover:bg-white/20 text-white border-0">
                <Github className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="secondary" className="bg-white/10 hover:bg-white/20 text-white border-0">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-white/80">Subscribe to our newsletter for SEO tips and updates.</p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-8 text-center">
          <p className="text-sm text-white/80">
            © 2025 SEO Friendly. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>

      {/* Gradient overlays for sparkle effect */}
      <div className="absolute top-0 left-0 h-32 w-32 bg-primary/30 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 h-32 w-32 bg-accent/30 blur-3xl rounded-full" />
      <div className="absolute top-1/2 left-1/4 h-24 w-24 bg-secondary/20 blur-2xl rounded-full" />
    </footer>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Mail, Phone, Twitter, Linkedin, Github, Play } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    service: "",
    budget: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Get In Touch</h2>
            <p className="text-lg text-muted-foreground">Have questions? We'd love to hear from you.</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <Input
                          placeholder="Your Name *"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Input
                          type="email"
                          placeholder="Your Email *"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <Input
                          placeholder="Company Name"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        />
                      </div>
                      <div>
                        <Input
                          type="url"
                          placeholder="Website URL"
                          value={formData.website}
                          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div>
                        <Select
                          value={formData.service}
                          onValueChange={(value) => setFormData({ ...formData, service: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Service Interest" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="technical-seo">Technical SEO Audit</SelectItem>
                            <SelectItem value="content-optimization">Content Optimization</SelectItem>
                            <SelectItem value="keyword-research">Keyword Research</SelectItem>
                            <SelectItem value="link-building">Link Building</SelectItem>
                            <SelectItem value="local-seo">Local SEO</SelectItem>
                            <SelectItem value="enterprise">Enterprise Solutions</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Select
                          value={formData.budget}
                          onValueChange={(value) => setFormData({ ...formData, budget: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Monthly Budget" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-1k">Under $1,000</SelectItem>
                            <SelectItem value="1k-5k">$1,000 - $5,000</SelectItem>
                            <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                            <SelectItem value="10k-plus">$10,000+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Textarea
                        placeholder="Tell us about your SEO goals and challenges *"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={5}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10">
                  <CardTitle className="flex items-center gap-2">
                    <Play className="h-5 w-5 text-primary" />
                    Watch: How SEO Friendly Works
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="relative aspect-video w-full">
                    <iframe
                      className="absolute inset-0 h-full w-full"
                      src="https://www.youtube.com/embed/QrebFqrdbWk"
                      title="SEO Friendly Tutorial"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map and Contact Info */}
            <div className="space-y-6">
              <Card className="overflow-hidden">
                <div className="h-64 w-full bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 flex items-center justify-center">
                  <MapPin className="h-16 w-16 text-primary" />
                </div>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-semibold">Address</p>
                        <p className="text-sm text-muted-foreground">Kolkata, West Bengal, India</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-sm text-muted-foreground">hello@seofriendly.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-semibold">Phone</p>
                        <p className="text-sm text-muted-foreground">+91 898 17 97415</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t">
                    <p className="mb-3 font-semibold">Follow Us</p>
                    <div className="flex gap-3">
                      <Button size="icon" variant="outline">
                        <Twitter className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="outline">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="outline">
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div>
                    <div className="relative mt-8 max-w-xl mx-auto bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    className="absolute top-4 left-4 w-6 h-6 text-gray-300"
  >
    <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V18h7v-6H5.58a3.17 3.17 0 0 1 3.09-3H9V6H7.17Zm9 0A5.17 5.17 0 0 0 11 11.17V18h7v-6h-3.42a3.17 3.17 0 0 1 3.09-3H18V6h-1.83Z" />
  </svg>

  <blockquote className="text-gray-700 text-base md:text-lg font-medium italic pl-10 pr-4">
    “SEO is a race, not a sprint. It’s about building trust, credibility, and authority over time.”
  </blockquote>

  <p className="mt-4 text-right text-sm text-gray-500 font-semibold">
    — Neil Patel
  </p>
</div>

                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, FileText, BarChart2, Link2, ImageIcon, Code } from "lucide-react"

const services = [
  {
    icon: Search,
    title: "Keyword Research",
    description: "Discover high-value keywords and search opportunities with AI-powered analysis",
  },
  {
    icon: FileText,
    title: "Content Optimization",
    description: "Optimize your content for search engines while maintaining readability",
  },
  {
    icon: BarChart2,
    title: "Performance Analytics",
    description: "Track rankings, traffic, and conversions with comprehensive dashboards",
  },
  {
    icon: Link2,
    title: "Backlink Analysis",
    description: "Monitor your backlink profile and discover new link-building opportunities",
  },
  {
    icon: ImageIcon,
    title: "Technical SEO Audit",
    description: "Identify and fix technical issues that impact your search visibility",
  },
  {
    icon: Code,
    title: "Schema Markup",
    description: "Implement structured data to enhance your search result appearance",
  },
]

export function ServicesSection() {
  const [activeService, setActiveService] = useState<number | null>(null)
  const [question, setQuestion] = useState("")

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Our Services</h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive SEO solutions powered by artificial intelligence
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="relative overflow-hidden transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="leading-relaxed">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2">
                      <Input
                        placeholder="Ask AI about this..."
                        value={activeService === index ? question : ""}
                        onChange={(e) => {
                          setActiveService(index)
                          setQuestion(e.target.value)
                        }}
                        className="text-sm"
                      />
                      <Button size="sm" variant="secondary">
                        Ask
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

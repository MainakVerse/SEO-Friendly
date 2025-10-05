"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageCircle, Send } from "lucide-react"

const faqs = [
  {
    question: "How does SEO Friendly use AI?",
    answer:
      "Our platform leverages advanced machine learning algorithms to analyze your website, identify optimization opportunities, and provide personalized recommendations based on millions of data points from successful websites.",
  },
  {
    question: "What makes SEO Friendly different from other tools?",
    answer:
      "Unlike traditional SEO tools that just show data, we provide actionable insights with clear next steps. Our AI understands context and provides recommendations tailored to your specific industry and goals.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Most users see improvements in their search rankings within 4-6 weeks of implementing our recommendations. However, SEO is a long-term strategy, and consistent optimization yields the best results.",
  },
  {
    question: "Do I need technical knowledge to use SEO Friendly?",
    answer:
      "Not at all! Our platform is designed for users of all skill levels. We provide clear, jargon-free explanations and step-by-step guidance for every recommendation.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We offer 24/7 AI-powered chat support, comprehensive documentation, video tutorials, and dedicated account managers for enterprise customers.",
  },
]

export function FaqSection() {
  const [chatMessage, setChatMessage] = useState("")
  const [chatHistory, setChatHistory] = useState<Array<{ role: "user" | "bot"; message: string }>>([])

  const handleSendMessage = () => {
    if (!chatMessage.trim()) return

    setChatHistory([
      ...chatHistory,
      { role: "user", message: chatMessage },
      {
        role: "bot",
        message: "Thank you for your question! Our AI assistant will respond shortly with a personalized answer.",
      },
    ])
    setChatMessage("")
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">Find answers to common questions about SEO Friendly</p>
          </div>

          <Accordion type="single" collapsible className="mb-12">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-primary" />
                Ask Our AI Chatbot
              </CardTitle>
            </CardHeader>
            <CardContent>
              {chatHistory.length > 0 && (
                <div className="mb-4 max-h-48 space-y-3 overflow-y-auto rounded-lg bg-background/50 p-4">
                  {chatHistory.map((chat, index) => (
                    <div key={index} className={`flex ${chat.role === "user" ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-[80%] rounded-lg px-4 py-2 ${
                          chat.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
                        }`}
                      >
                        <p className="text-sm">{chat.message}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <div className="flex gap-2">
                <Input
                  placeholder="Ask any question about SEO Friendly..."
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                />
                <Button onClick={handleSendMessage} className="gap-2">
                  <Send className="h-4 w-4" />
                  Send
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

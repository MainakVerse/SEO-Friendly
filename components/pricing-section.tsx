"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false)

  const plans = [
    {
      name: "Bronze",
      description: "Perfect for getting started with AI-powered SEO",
      monthlyPrice: 12,
      yearlyPrice: 10,
      features: [
        "Basic AI-powered SEO analysis",
        "Data saving and storage",
        "Monthly performance reports",
        "Basic keyword tracking",
        "Email support",
      ],
      color: "from-amber-500 to-orange-500",
      popular: false,
    },
    {
      name: "Silver",
      description: "Advanced features for growing businesses",
      monthlyPrice: 20,
      yearlyPrice: 15,
      features: [
        "Extended AI features",
        "Dedicated support consultants",
        "Extended resources and tools",
        "Advanced keyword research",
        "Competitor analysis",
        "Priority email & chat support",
        "Custom reporting",
      ],
      color: "from-slate-400 to-slate-600",
      popular: true,
    },
    {
      name: "Gold",
      description: "Premium solution for enterprise-level optimization",
      monthlyPrice: 30,
      yearlyPrice: 23,
      features: [
        "Agentic AI capabilities",
        "24/7 customer support",
        "High-tech task optimization",
        "Optimized development workflows",
        "White-label reporting",
        "API access",
        "Custom integrations",
        "Dedicated account manager",
      ],
      color: "from-yellow-400 to-amber-500",
      popular: false,
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-violet-600 bg-clip-text text-transparent">
            Choose Your Plan
          </h2>
          <p className="text-lg text-muted-foreground mb-8">Select the perfect plan for your SEO needs</p>

          {/* Toggle Switch */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-sm font-medium ${!isYearly ? "text-foreground" : "text-muted-foreground"}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                isYearly ? "bg-gradient-to-r from-blue-600 to-violet-600" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                  isYearly ? "translate-x-7" : "translate-x-1"
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isYearly ? "text-foreground" : "text-muted-foreground"}`}>
              Yearly
              <span className="ml-2 text-xs text-green-600 font-semibold">Save up to 23%</span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => {
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice
            const savings = plan.monthlyPrice - plan.yearlyPrice

            return (
              <Card
                key={plan.name}
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                  plan.popular ? "border-2 border-blue-500 shadow-xl scale-105" : "border-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-violet-600 text-white px-4 py-1 text-xs font-semibold rounded-bl-lg">
                    MOST POPULAR
                  </div>
                )}

                <CardHeader className="text-center pb-8 pt-8">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center`}
                  >
                    <span className="text-2xl font-bold text-white">{plan.name[0]}</span>
                  </div>
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <CardDescription className="text-sm">{plan.description}</CardDescription>
                  <div className="mt-6">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                        ${price}
                      </span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                    {isYearly && (
                      <p className="text-sm text-green-600 font-medium mt-2">
                        Save ${savings}/month with yearly billing
                      </p>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700"
                        : "bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800"
                    } text-white`}
                    size="lg"
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-12">
          All plans include a 14-day free trial. No credit card required.
        </p>
      </div>
    </section>
  )
}

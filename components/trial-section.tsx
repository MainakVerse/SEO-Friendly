"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, TrendingUp, ImageIcon, BarChart3, Link2, Sparkles, Activity } from "lucide-react"
import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  RadialBarChart,
  RadialBar,
  Legend,
} from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend as ChartLegend,
} from "chart.js"
import { Bar } from "react-chartjs-2"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, ChartLegend)

const sampleData = [
  { month: "Jan", traffic: 4000, conversions: 240, competitor1: 3500, competitor2: 4200, competitor3: 3800 },
  { month: "Feb", traffic: 4800, conversions: 288, competitor1: 3800, competitor2: 4100, competitor3: 4000 },
  { month: "Mar", traffic: 6200, conversions: 372, competitor1: 4100, competitor2: 4500, competitor3: 4300 },
  { month: "Apr", traffic: 5500, conversions: 330, competitor1: 4000, competitor2: 4300, competitor3: 4100 },
  { month: "May", traffic: 7800, conversions: 468, competitor1: 4400, competitor2: 4800, competitor3: 4600 },
  { month: "Jun", traffic: 9200, conversions: 552, competitor1: 4700, competitor2: 5200, competitor3: 4900 },
  { month: "Jul", traffic: 8500, conversions: 510, competitor1: 4600, competitor2: 5000, competitor3: 4800 },
  { month: "Aug", traffic: 10500, conversions: 630, competitor1: 5000, competitor2: 5500, competitor3: 5200 },
  { month: "Sep", traffic: 9800, conversions: 588, competitor1: 4900, competitor2: 5300, competitor3: 5100 },
  { month: "Oct", traffic: 11800, conversions: 708, competitor1: 5200, competitor2: 5800, competitor3: 5400 },
  { month: "Nov", traffic: 10200, conversions: 612, competitor1: 5100, competitor2: 5600, competitor3: 5300 },
  { month: "Dec", traffic: 13500, conversions: 810, competitor1: 5500, competitor2: 6200, competitor3: 5700 },
]

const topPages = [
  { page: "/blog/seo-guide", lcp: "1.2s", fcp: "0.8s", cls: "0.05", ttfb: "0.3s", seoTags: "✓", crawlability: "✓" },
  { page: "/products/analytics", lcp: "1.5s", fcp: "0.9s", cls: "0.08", ttfb: "0.4s", seoTags: "✓", crawlability: "✓" },
  { page: "/about", lcp: "2.1s", fcp: "1.2s", cls: "0.12", ttfb: "0.5s", seoTags: "⚠", crawlability: "✓" },
  { page: "/pricing", lcp: "1.8s", fcp: "1.0s", cls: "0.09", ttfb: "0.4s", seoTags: "✓", crawlability: "✓" },
  { page: "/contact", lcp: "2.4s", fcp: "1.4s", cls: "0.15", ttfb: "0.6s", seoTags: "✗", crawlability: "⚠" },
]

const histogramData = {
  labels: ["1-10", "11-20", "21-30", "31-40", "41-50", "51-60", "61-70", "71-80", "81-90", "91-100"],
  datasets: [
    {
      label: "Keywords by Ranking Position",
      data: [45, 38, 29, 22, 18, 15, 12, 8, 5, 3],
      backgroundColor: [
        "hsl(262, 83%, 58%)", // violet
        "hsl(280, 80%, 60%)", // purple
        "hsl(250, 85%, 62%)", // blue-purple
        "hsl(220, 90%, 56%)", // blue
        "hsl(200, 85%, 55%)", // cyan
        "hsl(180, 75%, 50%)", // teal
        "hsl(160, 70%, 50%)", // green-teal
        "hsl(142, 76%, 36%)", // green
        "hsl(120, 70%, 45%)", // bright green
        "hsl(100, 65%, 50%)", // lime
      ],
      borderColor: [
        "hsl(262, 83%, 48%)",
        "hsl(280, 80%, 50%)",
        "hsl(250, 85%, 52%)",
        "hsl(220, 90%, 46%)",
        "hsl(200, 85%, 45%)",
        "hsl(180, 75%, 40%)",
        "hsl(160, 70%, 40%)",
        "hsl(142, 76%, 26%)",
        "hsl(120, 70%, 35%)",
        "hsl(100, 65%, 40%)",
      ],
      borderWidth: 2,
    },
  ],
}

const histogramOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        precision: 0,
      },
    },
  },
}

const imageOptimizationData = [
  {
    name: "Score",
    value: 78,
    fill: "url(#gaugeGradient)",
  },
]

const seoBalanceData = [
  { name: "Link Strategy", value: 35, color: "#8B5CF6" }, // vibrant violet
  { name: "Crawl Paths", value: 40, color: "#38BDF8" }, // vibrant sky blue
  { name: "SEO Balance", value: 25, color: "#3B82F6" }, // vibrant blue
]

export function TrialSection() {
  const [url, setUrl] = useState("")

  const renderStatus = (status: string) => {
    if (status === "✓") return <span className="text-green-500 font-bold">{status}</span>
    if (status === "⚠") return <span className="text-yellow-500 font-bold">{status}</span>
    if (status === "✗") return <span className="text-red-500 font-bold">{status}</span>
    return status
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-muted/30" id="trial-section">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 sm:mb-10 md:mb-12 text-center">
            <h2 className="mb-3 sm:mb-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">Try It Now</h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 px-4">
              Enter your website URL to see a sample analytics report
            </p>
            <div className="mx-auto flex flex-col sm:flex-row max-w-2xl gap-3 sm:gap-2 px-4 sm:px-0">
              <Input
                type="url"
                placeholder="https://yourwebsite.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="h-11 sm:h-12 text-sm sm:text-base"
              />
              <Button size="lg" className="gap-2 px-6 sm:px-8 h-11 sm:h-12 whitespace-nowrap">
                <Search className="h-4 w-4" />
                Analyze
              </Button>
            </div>
          </div>

          <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-12">
            <Card className="col-span-1 sm:col-span-2 md:col-span-8 md:row-span-2 overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
              <CardHeader className="pb-2 px-4 sm:px-6">
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg md:text-xl">
                  <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  Traffic & Conversion Trends
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm">
                  12-month performance overview with competitor analysis
                </CardDescription>
              </CardHeader>
              <CardContent className="overflow-x-auto touch-pan-x pb-4 px-2 sm:px-4 md:px-6">
                <ChartContainer
                  config={{
                    traffic: {
                      label: "Your Site",
                      color: "hsl(220, 90%, 56%)",
                    },
                    competitor1: {
                      label: "Competitor A",
                      color: "hsl(280, 85%, 60%)",
                    },
                    competitor2: {
                      label: "Competitor B",
                      color: "hsl(320, 80%, 60%)",
                    },
                    competitor3: {
                      label: "Competitor C",
                      color: "hsl(180, 75%, 50%)",
                    },
                  }}
                  className="h-[250px] sm:h-[300px] md:h-[400px] min-w-[600px] sm:min-w-[700px] md:min-w-[800px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={sampleData} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
                      <defs>
                        <linearGradient id="colorTraffic" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(220, 90%, 56%)" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="hsl(220, 90%, 56%)" stopOpacity={0.1} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis dataKey="month" tick={{ fontSize: 10 }} tickMargin={5} />
                      <YAxis tick={{ fontSize: 10 }} tickMargin={5} width={45} />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="traffic"
                        stroke="url(#colorTraffic)"
                        strokeWidth={3}
                        dot={{ r: 5, fill: "hsl(220, 90%, 56%)" }}
                        name="Your Site"
                      />
                      <Line
                        type="monotone"
                        dataKey="competitor1"
                        stroke="hsl(280, 85%, 60%)"
                        strokeWidth={2}
                        dot={{ r: 4, fill: "hsl(280, 85%, 60%)" }}
                        strokeDasharray="5 5"
                        name="Competitor A"
                      />
                      <Line
                        type="monotone"
                        dataKey="competitor2"
                        stroke="hsl(320, 80%, 60%)"
                        strokeWidth={2}
                        dot={{ r: 4, fill: "hsl(320, 80%, 60%)" }}
                        strokeDasharray="5 5"
                        name="Competitor B"
                      />
                      <Line
                        type="monotone"
                        dataKey="competitor3"
                        stroke="hsl(180, 75%, 50%)"
                        strokeWidth={2}
                        dot={{ r: 4, fill: "hsl(180, 75%, 50%)" }}
                        strokeDasharray="5 5"
                        name="Competitor C"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
                <p className="text-xs text-muted-foreground text-center mt-2 sm:hidden">← Swipe to see full chart →</p>
              </CardContent>
            </Card>

            <Card className="col-span-1 sm:col-span-1 md:col-span-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader className="px-4 sm:px-6 pb-2">
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                  <ImageIcon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  <span className="text-sm sm:text-base">Image Optimization Score</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center px-4 sm:px-6">
                <ChartContainer
                  config={{
                    score: {
                      label: "Score",
                      color: "hsl(220, 90%, 56%)",
                    },
                  }}
                  className="h-[160px] sm:h-[180px] w-full"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart
                      cx="50%"
                      cy="50%"
                      innerRadius="60%"
                      outerRadius="90%"
                      barSize={20}
                      data={imageOptimizationData}
                      startAngle={180}
                      endAngle={0}
                    >
                      <defs>
                        <linearGradient id="gaugeGradient" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="hsl(320, 80%, 60%)" />
                          <stop offset="50%" stopColor="hsl(280, 85%, 60%)" />
                          <stop offset="100%" stopColor="hsl(220, 90%, 56%)" />
                        </linearGradient>
                      </defs>
                      <RadialBar background dataKey="value" cornerRadius={10} />
                      <text
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="fill-foreground text-3xl sm:text-4xl font-bold"
                      >
                        78
                      </text>
                      <text
                        x="50%"
                        y="65%"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="fill-muted-foreground text-xs sm:text-sm"
                      >
                        out of 100
                      </text>
                    </RadialBarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card className="col-span-1 sm:col-span-1 md:col-span-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader className="px-4 sm:px-6 pb-2">
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                  <Link2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  <span className="text-sm sm:text-base">SEO Distribution</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center px-4 sm:px-6">
                <ChartContainer
                  config={{
                    linkStrategy: {
                      label: "Link Strategy",
                      color: "#8B5CF6",
                    },
                    crawlPaths: {
                      label: "Crawl Paths",
                      color: "#38BDF8",
                    },
                    seoBalance: {
                      label: "SEO Balance",
                      color: "#3B82F6",
                    },
                  }}
                  className="h-[160px] sm:h-[180px] w-full"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={seoBalanceData}
                        cx="50%"
                        cy="50%"
                        innerRadius={35}
                        outerRadius={60}
                        paddingAngle={5}
                        dataKey="value"
                        label={(props: any) => `${props.name} ${(props.percent * 100).toFixed(0)}%`}
                      >
                        {seoBalanceData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <ChartTooltip content={<ChartTooltipContent />} />
                    </PieChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card className="col-span-1 sm:col-span-2 md:col-span-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader className="px-4 sm:px-6">
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                  <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  Keyword Rankings Distribution
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm">Number of keywords by position range</CardDescription>
              </CardHeader>
              <CardContent className="px-4 sm:px-6">
                <div className="h-[220px] sm:h-[250px]">
                  <Bar data={histogramData} options={histogramOptions} />
                </div>
              </CardContent>
            </Card>

            <Card className="col-span-1 sm:col-span-2 md:col-span-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader className="px-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                    <Activity className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    Performance KPIs
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="px-4 sm:px-6">
                <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
                  <table className="w-full text-xs min-w-[600px] sm:min-w-0">
                    <thead>
                      <tr className="border-b">
                        <th className="pb-2 text-left font-semibold whitespace-nowrap pr-2">Page</th>
                        <th
                          className="pb-2 text-center font-semibold whitespace-nowrap px-1"
                          title="Largest Contentful Paint"
                        >
                          LCP
                        </th>
                        <th
                          className="pb-2 text-center font-semibold whitespace-nowrap px-1"
                          title="First Contentful Paint"
                        >
                          FCP
                        </th>
                        <th
                          className="pb-2 text-center font-semibold whitespace-nowrap px-1"
                          title="Cumulative Layout Shift"
                        >
                          CLS
                        </th>
                        <th
                          className="pb-2 text-center font-semibold whitespace-nowrap px-1"
                          title="Time to First Byte"
                        >
                          TTFB
                        </th>
                        <th
                          className="pb-2 text-center font-semibold whitespace-nowrap px-1"
                          title="Core SEO Tags Compliance"
                        >
                          SEO
                        </th>
                        <th
                          className="pb-2 text-center font-semibold whitespace-nowrap px-1"
                          title="Page Crawlability / Indexability"
                        >
                          Crawl
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {topPages.map((page, i) => (
                        <tr key={i} className="border-b last:border-0 hover:bg-muted/50 transition-colors">
                          <td className="py-3 text-muted-foreground pr-2 whitespace-nowrap">{page.page}</td>
                          <td className="py-3 text-center font-medium px-1">{page.lcp}</td>
                          <td className="py-3 text-center font-medium px-1">{page.fcp}</td>
                          <td className="py-3 text-center font-medium px-1">{page.cls}</td>
                          <td className="py-3 text-center font-medium px-1">{page.ttfb}</td>
                          <td className="py-3 text-center font-medium px-1">{renderStatus(page.seoTags)}</td>
                          <td className="py-3 text-center font-medium px-1">{renderStatus(page.crawlability)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-muted-foreground text-center mt-2 sm:hidden">← Swipe to see all metrics →</p>
              </CardContent>
            </Card>

            <Card className="col-span-1 sm:col-span-2 md:col-span-12 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
              <CardHeader className="px-4 sm:px-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                    <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    AI-Generated Summary
                  </CardTitle>
                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-sm text-muted-foreground">Overall SEO Score:</span>
                    <span className="text-xl sm:text-2xl font-bold text-primary">87/100</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="px-4 sm:px-6">
                <div className="space-y-3">
                  <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    Your website shows strong growth momentum with an 18.2% increase in traffic. The blog section is
                    your top performer, particularly the SEO guide which drives significant organic traffic.
                  </p>
                  <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    User engagement has improved by 12.5%, indicating better content relevance. Consider optimizing the
                    contact page to reduce its 52% bounce rate and improve Core Web Vitals scores across slower-loading
                    pages.
                  </p>
                  <div className="mt-4 flex gap-2 flex-wrap">
                    <span className="inline-flex items-center rounded-full bg-green-500/10 px-2 sm:px-3 py-1 text-xs font-medium text-green-600">
                      Strong Traffic Growth
                    </span>
                    <span className="inline-flex items-center rounded-full bg-blue-500/10 px-2 sm:px-3 py-1 text-xs font-medium text-blue-600">
                      Good Engagement
                    </span>
                    <span className="inline-flex items-center rounded-full bg-yellow-500/10 px-2 sm:px-3 py-1 text-xs font-medium text-yellow-600">
                      Needs Optimization
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

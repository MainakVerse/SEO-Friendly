import { Sparkles, Target, Zap } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about-section" className="py-20 bg-background scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">About SEO Friendly</h2>
            <p className="text-lg text-muted-foreground">Empowering businesses with intelligent SEO solutions</p>
          </div>

          <div className="mb-12 rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 p-8 md:p-12">
            <p className="text-lg leading-relaxed text-foreground mb-6">
              At <span className="font-semibold text-primary">SEO Friendly</span>, we believe that every website
              deserves to be discovered. Our mission is to democratize SEO by making advanced analytics and optimization
              accessible to everyone—from solo entrepreneurs to enterprise teams.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Powered by cutting-edge artificial intelligence, our platform analyzes millions of data points to provide
              actionable insights that drive real results. We don't just show you numbers—we tell you what they mean and
              what to do next.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">AI-Powered</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Machine learning algorithms that adapt to your unique needs
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                <Target className="h-8 w-8 text-accent" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Precision Insights</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Data-driven recommendations tailored to your goals
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                <Zap className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Lightning Fast</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Real-time analysis and instant optimization suggestions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

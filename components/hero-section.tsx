"use client";

import { Button } from "@/components/ui/button";
import { Zap, FlaskConical } from "lucide-react";
import { useEffect, useRef } from "react";
import { signIn, useSession, SessionProvider } from "next-auth/react";
import { useRouter } from "next/navigation";

function GoogleSignInButton() {
  const { data: session } = useSession();
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    if (!session) {
      await signIn("google", { callbackUrl: "/dashboard" });
    } else {
      router.push("/dashboard");
    }
  };

  // Extract first name safely
  const firstName = session?.user?.name?.split(" ")[0] ?? null;

  return (
    <Button
      size="lg"
      className="w-full gap-2 sm:w-auto text-base px-8 py-6"
      onClick={handleGoogleSignIn}
    >
      <Zap className="h-5 w-5" />
      {session ? `Hello ${firstName}` : "Quick Sign Up"}
    </Button>
  );
}

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });

  const handleScrollToTrial = () => {
    const trialSection = document.getElementById("trial-section");
    if (trialSection) {
      trialSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // === Canvas Background Animation ===
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mousePos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    canvas.addEventListener("mousemove", handleMouseMove);

    const cols = 20;
    const rows = 15;
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cellWidth = canvas.width / cols;
      const cellHeight = canvas.height / rows;
      time += 0.01;

      ctx.strokeStyle = "rgba(150, 150, 150, 0.15)";
      ctx.lineWidth = 1;

      // Vertical lines
      for (let i = 0; i <= cols; i++) {
        ctx.beginPath();
        for (let j = 0; j <= rows; j++) {
          const x = i * cellWidth;
          const y = j * cellHeight;

          const dx = mousePos.current.x - x;
          const dy = mousePos.current.y - y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 200;

          let offsetX = 0;
          let offsetY = 0;
          if (distance < maxDistance) {
            const force = (1 - distance / maxDistance) * 30;
            offsetX = (dx / distance) * force;
            offsetY = (dy / distance) * force;
          }

          const wave =
            Math.sin(x * 0.01 + time) * 10 + Math.cos(y * 0.01 + time) * 10;

          const finalX = x + offsetX + wave;
          const finalY = y + offsetY + Math.sin(time + i * 0.5) * 5;

          if (j === 0) ctx.moveTo(finalX, finalY);
          else ctx.lineTo(finalX, finalY);
        }
        ctx.stroke();
      }

      // Horizontal lines
      for (let j = 0; j <= rows; j++) {
        ctx.beginPath();
        for (let i = 0; i <= cols; i++) {
          const x = i * cellWidth;
          const y = j * cellHeight;

          const dx = mousePos.current.x - x;
          const dy = mousePos.current.y - y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 200;

          let offsetX = 0;
          let offsetY = 0;
          if (distance < maxDistance) {
            const force = (1 - distance / maxDistance) * 30;
            offsetX = (dx / distance) * force;
            offsetY = (dy / distance) * force;
          }

          const wave =
            Math.sin(x * 0.01 + time) * 10 + Math.cos(y * 0.01 + time) * 10;

          const finalX = x + offsetX + wave;
          const finalY = y + offsetY + Math.sin(time + j * 0.5) * 5;

          if (i === 0) ctx.moveTo(finalX, finalY);
          else ctx.lineTo(finalX, finalY);
        }
        ctx.stroke();
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // === UI Layout ===
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted min-h-screen flex items-center">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-auto"
        style={{ zIndex: 1 }}
      />

      <div className="container mx-auto px-4 relative" style={{ zIndex: 2 }}>
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-balance md:text-7xl lg:text-8xl">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              SEO Friendly
            </span>
          </h1>
          <p className="mb-8 text-xl leading-relaxed text-muted-foreground md:text-2xl lg:text-3xl text-pretty">
            AI-Driven SEO and Page Analytics for Modern Websites
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            {/* Wrap only this button in SessionProvider */}
            <SessionProvider>
              <GoogleSignInButton />
            </SessionProvider>

            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-base px-8 py-6 bg-transparent"
              onClick={handleScrollToTrial}
            >
              <FlaskConical className="h-5 w-5" />
              Start Free Trial
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative gradient orbs */}
      <div
        className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
        style={{ zIndex: 0 }}
      />
      <div
        className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-secondary/10 blur-3xl"
        style={{ zIndex: 0 }}
      />
    </section>
  );
}

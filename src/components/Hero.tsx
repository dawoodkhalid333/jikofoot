import React from "react";
import { Button } from "@/components/ui/button";
import { useContent } from "@/contexts/ContentContext";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-football.jpg";

const Hero: React.FC = () => {
  const { content } = useContent();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/bg-video.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Animated particles/lines effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-foreground/90">
              Plateforme de Scouting Digital #1 en Afrique
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight animate-slide-up">
            <span className="text-foreground">
              {content.hero.title.split(" ").slice(0, 2).join(" ")}
            </span>
            <br />
            <span className="text-gradient-gold">
              {content.hero.title.split(" ").slice(2).join(" ")}
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-10 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            {content.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button variant="hero" size="xl" asChild>
              <a href="#investir">
                {content.hero.cta}
                <ArrowRight className="ml-2" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#vision">
                <Play className="mr-2" />
                Découvrir Jikofoot
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/30 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="text-center">
              <div className="font-display text-4xl md:text-5xl text-primary mb-2">
                10K+
              </div>
              <div className="text-sm text-foreground/60">Jeunes Talents</div>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl md:text-5xl text-primary mb-2">
                50+
              </div>
              <div className="text-sm text-foreground/60">
                Clubs Partenaires
              </div>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl md:text-5xl text-primary mb-2">
                15+
              </div>
              <div className="text-sm text-foreground/60">Pays Africains</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

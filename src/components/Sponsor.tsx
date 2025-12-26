import React from "react";
import { useContent } from "@/contexts/ContentContext";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Building2, Megaphone, Heart, HandshakeIcon } from "lucide-react";
import teamImage from "@/assets/team-training.jpg";

const Sponsor: React.FC = () => {
  const { content } = useContent();

  const benefitIcons = [Megaphone, Building2, Heart, HandshakeIcon];

  return (
    <section id="sponsor" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Column */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Partenariat</span>
            <h2 className="font-display text-4xl md:text-5xl mt-4 mb-6 text-foreground">
              {content.sponsor.title}
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed mb-8">
              {content.sponsor.description}
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-10">
              {content.sponsor.benefits.map((benefit, index) => {
                const Icon = benefitIcons[index];
                return (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-border hover:border-primary/30 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-foreground/80 pt-2">{benefit}</p>
                  </div>
                );
              })}
            </div>

            <Button variant="default" size="lg" asChild>
              <a href="#contact">
                <HandshakeIcon className="mr-2 w-5 h-5" />
                Devenir Sponsor
              </a>
            </Button>
          </div>

          {/* Image Column */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img
                src={teamImage}
                alt="Équipe d'entraînement"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
            </div>

            {/* Floating testimonial */}
            <div className="absolute -bottom-8 -left-8 bg-card rounded-xl p-6 shadow-card border border-border max-w-sm hidden lg:block">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">💼</span>
                </div>
                <div>
                  <p className="text-foreground font-medium mb-2">
                    "Soutenir Jikofoot, c'est investir dans l'avenir du football africain."
                  </p>
                  <p className="text-sm text-muted-foreground">— Partenaire officiel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsor;

import React from "react";
import { useContent } from "@/contexts/ContentContext";
import { Button } from "@/components/ui/button";
import { Check, Star, Crown, Gem } from "lucide-react";

const packageIcons = [Star, Crown, Gem, Crown];

const Investment: React.FC = () => {
  const { content } = useContent();

  return (
    <section id="investir" className="py-24 bg-background relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Opportunités d'Investissement</span>
          <h2 className="font-display text-4xl md:text-6xl mt-4 mb-6 text-foreground">
            {content.investment.title}
          </h2>
          <p className="text-foreground/70 text-lg">
            Rejoignez l'aventure Jikofoot et bénéficiez de commissions sur les contrats signés par vos filleuls.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.investment.packages.map((pkg, index) => {
            const Icon = packageIcons[index];
            const isPopular = index === 2;

            return (
              <div
                key={index}
                className={`relative rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 ${
                  isPopular 
                    ? "bg-gradient-card border-2 border-primary shadow-gold" 
                    : "bg-card border border-border hover:border-primary/50"
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full">
                    Populaire
                  </div>
                )}

                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                  isPopular ? "bg-primary text-primary-foreground" : "bg-primary/20 text-primary"
                }`}>
                  <Icon className="w-7 h-7" />
                </div>

                <h3 className="font-display text-2xl text-foreground mb-2">{pkg.name}</h3>
                <div className="font-display text-3xl text-primary mb-2">{pkg.price}</div>
                <div className="text-sm text-muted-foreground mb-4">{pkg.duration}</div>
                
                <p className="text-foreground/70 text-sm mb-6 min-h-[60px]">
                  {pkg.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 text-sm text-foreground/80">
                      <Check className="w-4 h-4 text-accent flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={isPopular ? "default" : "outline"} 
                  className="w-full"
                  asChild
                >
                  <a href="#contact">Nous Contacter</a>
                </Button>
              </div>
            );
          })}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            Des questions sur nos offres d'investissement ?{" "}
            <a href="#contact" className="text-primary hover:underline">
              Contactez-nous pour obtenir le business plan détaillé
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Investment;

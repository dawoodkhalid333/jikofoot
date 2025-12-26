import React from "react";
import { useContent } from "@/contexts/ContentContext";
import { Target, Users, Globe, TrendingUp } from "lucide-react";
import talentImage from "@/assets/talent-celebration.jpg";

const features = [
  {
    icon: Target,
    title: "Visibilité Mondiale",
    description: "Permettre aux jeunes talents d'être vus par les clubs et recruteurs internationaux.",
  },
  {
    icon: Users,
    title: "Connexion Directe",
    description: "Créer un pont entre les joueurs, agents, académies et sponsors.",
  },
  {
    icon: Globe,
    title: "Impact Panafricain",
    description: "Couvrir tout le continent africain avec une plateforme unifiée.",
  },
  {
    icon: TrendingUp,
    title: "Suivi de Carrière",
    description: "Accompagner chaque talent de la découverte au contrat professionnel.",
  },
];

const About: React.FC = () => {
  const { content } = useContent();

  return (
    <section id="vision" className="py-24 bg-gradient-pitch relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 border-4 border-primary rounded-full" />
        <div className="absolute bottom-1/4 right-1/3 w-48 h-48 border-2 border-accent rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img
                src={talentImage}
                alt="Jeune talent célébrant"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              
              {/* Floating card */}
              <div className="absolute bottom-6 left-6 right-6 bg-card/90 backdrop-blur-md rounded-xl p-4 border border-border">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-2xl">⚽</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Révélez votre talent</p>
                    <p className="text-sm text-muted-foreground">Des milliers d'opportunités vous attendent</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats card */}
            <div className="absolute -top-8 -right-8 bg-primary text-primary-foreground rounded-xl p-6 shadow-gold hidden lg:block">
              <div className="font-display text-4xl mb-1">97%</div>
              <div className="text-sm opacity-80">Taux de satisfaction</div>
            </div>
          </div>

          {/* Content Column */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Notre Vision</span>
            <h2 className="font-display text-4xl md:text-5xl mt-4 mb-6 text-foreground">
              {content.about.title}
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed mb-10">
              {content.about.description}
            </p>

            {/* Features grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-xl bg-card/50 border border-border hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-3 group-hover:bg-primary/30 transition-colors">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

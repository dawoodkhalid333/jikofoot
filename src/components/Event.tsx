import React, { useState } from "react";
import { useContent } from "@/contexts/ContentContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, MapPin, Clock, CheckCircle2, Users } from "lucide-react";
import { submitForm } from "@/lib/firebase";
import { toast } from "@/hooks/use-toast";

const Event: React.FC = () => {
  const { content } = useContent();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    telephone: "",
    email: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const success = await submitForm({
      type: "event",
      ...formData,
    });

    if (success) {
      toast({
        title: "Inscription confirmée !",
        description: "Nous vous contacterons avec les détails de l'événement.",
      });
      setFormData({ nom: "", prenom: "", telephone: "", email: "" });
    } else {
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite. Veuillez réessayer.",
        variant: "destructive",
      });
    }

    setLoading(false);
  };

  return (
    <section id="evenement" className="py-24 bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Event Info */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Événement Exclusif</span>
            <h2 className="font-display text-4xl md:text-5xl mt-4 mb-6 text-foreground">
              {content.event.title}
            </h2>

            {/* Event details cards */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Date</p>
                  <p className="font-semibold text-foreground">{content.event.date}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Lieu</p>
                  <p className="font-semibold text-foreground">{content.event.location}</p>
                </div>
              </div>
            </div>

            <p className="text-foreground/70 text-lg mb-8">
              {content.event.description}
            </p>

            {/* Program */}
            <div className="bg-card/50 rounded-xl p-6 border border-border">
              <h3 className="font-display text-xl text-foreground mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Au Programme
              </h3>
              <ul className="space-y-3">
                {content.event.program.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Registration Form */}
          <div className="bg-card rounded-2xl p-8 border border-border shadow-card">
            <h3 className="font-display text-2xl text-foreground mb-2">Confirmez Votre Présence</h3>
            <p className="text-muted-foreground mb-6">
              Réservez votre place à notre événement de levée de fonds.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nom">Nom *</Label>
                  <Input
                    id="nom"
                    value={formData.nom}
                    onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                    required
                    placeholder="Votre nom"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="prenom">Prénom *</Label>
                  <Input
                    id="prenom"
                    value={formData.prenom}
                    onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                    required
                    placeholder="Votre prénom"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="telephone">Téléphone *</Label>
                <Input
                  id="telephone"
                  type="tel"
                  value={formData.telephone}
                  onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                  required
                  placeholder="+243 XXX XXX XXX"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="votre@email.com"
                />
              </div>

              <Button type="submit" className="w-full" size="lg" disabled={loading}>
                {loading ? "Envoi en cours..." : "Confirmer ma participation"}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                En confirmant, vous acceptez de recevoir des informations sur l'événement.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Event;

import React, { useState } from "react";
import { useContent } from "@/contexts/ContentContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MessageCircle, Facebook, MapPin, Send } from "lucide-react";
import { submitForm } from "@/lib/firebase";
import { toast } from "@/hooks/use-toast";

const Contact: React.FC = () => {
  const { content } = useContent();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    telephone: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const success = await submitForm({
      type: "contact",
      ...formData,
    });

    if (success) {
      toast({
        title: "Message envoyé !",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
      setFormData({ nom: "", prenom: "", telephone: "", email: "", message: "" });
    } else {
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite. Veuillez réessayer.",
        variant: "destructive",
      });
    }

    setLoading(false);
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: content.contact.email, href: `mailto:${content.contact.email}` },
    { icon: Phone, label: "Téléphone", value: content.contact.phone, href: `tel:${content.contact.phone}` },
    { icon: MessageCircle, label: "WhatsApp", value: content.contact.whatsapp, href: `https://wa.me/${content.contact.whatsapp.replace(/\s/g, "")}` },
    { icon: Facebook, label: "Facebook", value: content.contact.facebook, href: `https://facebook.com/${content.contact.facebook}` },
    { icon: MapPin, label: "Adresse", value: content.contact.address, href: "#" },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-pitch relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Nous Contacter</span>
          <h2 className="font-display text-4xl md:text-6xl mt-4 mb-6 text-foreground">
            {content.contact.title}
          </h2>
          <p className="text-foreground/70 text-lg">
            Contactez-nous pour obtenir le business plan détaillé ou pour toute question sur les opportunités d'investissement.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-display text-2xl text-foreground mb-6">Nos Coordonnées</h3>
            
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border hover:border-primary/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="font-medium text-foreground">{item.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-card rounded-2xl p-8 border border-border shadow-card">
              <h3 className="font-display text-2xl text-foreground mb-6">Envoyez-nous un Message</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-nom">Nom *</Label>
                    <Input
                      id="contact-nom"
                      value={formData.nom}
                      onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                      required
                      placeholder="Votre nom"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-prenom">Prénom *</Label>
                    <Input
                      id="contact-prenom"
                      value={formData.prenom}
                      onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                      required
                      placeholder="Votre prénom"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-telephone">Téléphone *</Label>
                    <Input
                      id="contact-telephone"
                      type="tel"
                      value={formData.telephone}
                      onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                      required
                      placeholder="+243 XXX XXX XXX"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Email</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-message">Message *</Label>
                  <Textarea
                    id="contact-message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    placeholder="Décrivez votre intérêt pour Jikofoot..."
                    rows={5}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg" disabled={loading}>
                  {loading ? (
                    "Envoi en cours..."
                  ) : (
                    <>
                      <Send className="mr-2 w-4 h-4" />
                      Envoyer le Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React from "react";
import { Facebook, Instagram, Twitter, Linkedin, ArrowUp } from "lucide-react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card py-16 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-display text-4xl text-primary mb-4">JIKOFOOT</h3>
            <p className="text-foreground/70 max-w-md mb-6">
              Jikofoot révèle les talents du football africain. Une plateforme innovante qui connecte les jeunes joueurs avec les opportunités mondiales.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors"
              >
                <Facebook className="w-5 h-5 text-primary" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors"
              >
                <Twitter className="w-5 h-5 text-primary" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <a href="#vision" className="text-foreground/70 hover:text-primary transition-colors">
                  Notre Vision
                </a>
              </li>
              <li>
                <a href="#investir" className="text-foreground/70 hover:text-primary transition-colors">
                  Devenir Parrain
                </a>
              </li>
              <li>
                <a href="#sponsor" className="text-foreground/70 hover:text-primary transition-colors">
                  Devenir Sponsor
                </a>
              </li>
              <li>
                <a href="#evenement" className="text-foreground/70 hover:text-primary transition-colors">
                  Événements
                </a>
              </li>
              <li>
                <a href="#contact" className="text-foreground/70 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Légal</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  Conditions d'utilisation
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                  Mentions légales
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-border">
          <p className="text-foreground/60 text-sm">
            © {new Date().getFullYear()} Jikofoot. Tous droits réservés.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 sm:mt-0 w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition-colors"
            aria-label="Retour en haut"
          >
            <ArrowUp className="w-5 h-5 text-primary" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    MARKETPLACE: ["About", "Blog", "Jobs", "Brand"],
    PRODUCT: ["Features", "Pricing", "Testimonials", "Integration"],
    SUPPORT: [
      "Help Center",
      "Guidelines",
      "Terms of Service",
      "Privacy Policy",
    ],
  };

  return (
    <footer className=" border-t border-border py-12 px-20">
      <div className="grid grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="text-lg font-bold text-foreground mb-4">
            Marketplace
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Empowering creators to share their passion with the world. Join our
            community today.
          </p>
        </div>
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="font-semibold text-foreground mb-4 text-sm">
              {title}
            </h4>
            <ul className="space-y-2">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border pt-8 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          © 2026 Marketplace Inc. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
          <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
          <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
          <Facebook className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

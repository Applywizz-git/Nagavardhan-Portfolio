import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: portfolioData.github, label: "GitHub" },
    { icon: Linkedin, href: portfolioData.linkedin, label: "LinkedIn" },
    { icon: Mail, href:"https://mail.google.com/mail/?view=cm&to=nagavardhan768@gmail.com", label: "Email" },
  ];

  return (
    <footer className="relative py-12 bg-background border-t border-border overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-display font-extrabold text-gradient"
          >
            NB
          </motion.div>

          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.3, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-primary/10 rounded-full hover:bg-primary hover:text-primary-foreground transition-all glow-card"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center space-y-2">
            <motion.p
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-muted-foreground flex items-center justify-center gap-2"
            >
              {/* Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by{" "} */}
              <span className="text-gradient font-semibold">{portfolioData.name}</span>
            </motion.p>
            <p className="text-sm text-muted-foreground">
              © {currentYear} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

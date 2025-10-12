import { useEffect } from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import AOS from "aos";

const Certifications = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-display font-extrabold text-gradient mb-3">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {portfolioData.certifications.map((cert, index) => (
            <motion.div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group relative glass-effect rounded-2xl p-6 hover:glow-card transition-all cursor-pointer overflow-hidden"
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 shine-effect opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Badge Icon */}
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4"
              >
                <Award className="w-8 h-8 text-primary" />
              </motion.div>

              <h3 className="text-xl font-display font-bold text-foreground mb-2 group-hover:text-gradient transition-all">
                {cert.name}
              </h3>

              <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
              <p className="text-xs text-muted-foreground mb-4">{cert.date}</p>

              {cert.link && (
                <motion.a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm"
                >
                  View Certificate
                  <ExternalLink size={16} />
                </motion.a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

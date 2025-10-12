import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { portfolioData } from "@/data/portfolioData";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-secondary/40 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-accent/40 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display font-extrabold text-gradient mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {portfolioData.stats.map((stat, index) => (
            <motion.div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-effect rounded-2xl p-6 text-center glow-card"
            >
              <div className="text-4xl md:text-5xl font-display font-extrabold text-gradient mb-2">
                {inView && (
                  <CountUp
                    end={parseInt(stat.value.replace(/\D/g, "")) || 0}
                    duration={2.5}
                    suffix={stat.value.replace(/[0-9]/g, "")}
                  />
                )}
              </div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Summary */}
        <motion.div
          data-aos="fade-up"
          className="glass-effect rounded-3xl p-8 md:p-12 mb-12"
        >
          <p className="text-lg text-foreground/90 leading-relaxed text-center max-w-4xl mx-auto">
            {portfolioData.summary}
          </p>
        </motion.div>

        {/* Core Expertise */}
        <motion.div data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-3xl font-display font-bold text-center mb-8">Core Expertise</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {portfolioData.expertise.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="glass-effect rounded-xl p-4 text-center hover:glow-card transition-all cursor-pointer"
              >
                <div className="text-sm font-semibold text-foreground">{item}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

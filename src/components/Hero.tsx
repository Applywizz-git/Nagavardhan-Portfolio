import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Download } from "lucide-react";
import { Link } from "react-scroll";
import { portfolioData } from "@/data/portfolioData";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col-reverse md:grid md:grid-cols-2 items-center justify-center overflow-hidden pt-24 pb-12 min-h-screen"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 animate-gradient-shift bg-[length:200%_200%]" />
        <div className="absolute top-1/4 left-1/4 max-w-[90vw] w-72 sm:w-80 md:w-80 h-72 sm:h-80 md:h-80 bg-primary/30 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 max-w-[90vw] w-72 sm:w-80 md:w-80 h-72 sm:h-80 md:h-80 bg-secondary/30 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Left Text */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6 px-4 text-center md:text-left md:pr-6 lg:pl-16"
      >
        <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-7xl font-display font-extrabold leading-tight">
          Hi, I'm{" "}
          <span className="text-gradient">
            {portfolioData.name.split(" ")[0]}
          </span>
        </h1>

        <div className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold text-foreground/90 h-14 sm:h-16">
          <TypeAnimation
            sequence={[
              "Generative AI Engineer",
              2000,
              "LLM Specialist",
              2000,
              "RAG Expert",
              2000,
              "AI Solutions Architect",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>

        <p className="text-base sm:text-lg md:text-base lg:text-lg text-muted-foreground max-w-xl mx-auto md:mx-0">
          Transforming enterprise challenges into intelligent AI solutions with
          cutting-edge LLMs, RAG pipelines, and multimodal systems.
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <Link to="projects" smooth={true} duration={500} offset={-80}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 sm:px-8 sm:py-4 bg-primary text-primary-foreground rounded-full font-semibold shadow-lg"
            >
              View Projects
            </motion.button>
          </Link>

          <motion.a
            href="/assets/resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 sm:px-8 sm:py-4 glass-effect rounded-full font-semibold flex items-center gap-2"
          >
            <Download size={20} />
            Download Resume
          </motion.a>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative flex justify-center mb-10 md:mb-0 px-4"
      >
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
          <motion.div
            animate={{ scale: [1, 1.05, 1], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-accent opacity-50 blur-2xl"
          />
          <img
            src="/assets/profile.jpg"
            alt="Profile"
            className="relative w-full h-full object-cover object-[50%_15%] rounded-full border-4 border-primary/30 shadow-2xl transform scale-100 hover:scale-110 transition-transform duration-500"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

import { useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";
import { portfolioData } from "@/data/portfolioData";
import AOS from "aos";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Parallax Background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, hsl(var(--primary)) 0px, transparent 1px, transparent 10px, hsl(var(--secondary)) 11px, transparent 12px, transparent 20px)",
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display font-extrabold text-gradient mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
        </motion.div>

        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="max-w-6xl mx-auto pb-12"
        >
          {portfolioData.projects.map((project, index) => (
            <SwiperSlide key={index} className="!w-[90%] md:!w-[600px]">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass-effect rounded-3xl overflow-hidden shadow-2xl hover:glow-card transition-all"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden group">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={project.demoLink}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold flex items-center gap-2 shadow-lg"
                    >
                      <ExternalLink size={18} />
                      Preview
                    </motion.a>
                    <motion.a
                      href={project.codeLink}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="px-6 py-3 glass-effect rounded-full font-semibold flex items-center gap-2"
                    >
                      <Github size={18} />
                      Code
                    </motion.a>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-8">
                  <h3 className="text-2xl font-display font-bold text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">●</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-semibold"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;

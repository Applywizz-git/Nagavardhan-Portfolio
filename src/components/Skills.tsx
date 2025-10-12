import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import AOS from "aos";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const categories = Object.keys(portfolioData.skills);
  const displayedSkills = selectedCategory
    ? { [selectedCategory]: portfolioData.skills[selectedCategory] }
    : portfolioData.skills;

  // Icon mapping for categories
  const categoryIcons: { [key: string]: string } = {
    "Programming & Frameworks": "/assets/icons/python.png",
    "Generative AI & LLMs": "/assets/icons/ai.png",
    "Vector Databases": "/assets/icons/database.png",
    "Machine Learning": "/assets/icons/ml.png",
    "Cloud & MLOps": "/assets/icons/cloud.png",
    "Data & Visualization": "/assets/icons/visualization.png",
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display font-extrabold text-gradient mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedCategory(null)}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              selectedCategory === null
                ? "bg-primary text-primary-foreground shadow-lg"
                : "glass-effect hover:glow-card"
            }`}
          >
            All Skills
          </motion.button>
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "glass-effect hover:glow-card"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {Object.entries(displayedSkills).map(([category, skills], catIndex) => (
            <motion.div
              key={category}
              data-aos="fade-up"
              data-aos-delay={catIndex * 100}
              className="glass-effect rounded-3xl p-8"
            >
              {/* Category Header with Icon */}
              <div className="flex items-center justify-center gap-4 mb-8">
                {categoryIcons[category] && (
                  <motion.img
                    src={categoryIcons[category]}
                    alt={category}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 object-contain"
                  />
                )}
                <h3 className="text-3xl font-display font-bold text-gradient">
                  {category}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="relative p-6 bg-background/50 rounded-2xl hover:glow-card transition-all"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-lg font-semibold text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm font-bold text-primary">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar Only */}
                    <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.05 }}
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full shadow-lg"
                        style={{
                          boxShadow: "0 0 10px rgba(var(--primary-rgb), 0.5)",
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

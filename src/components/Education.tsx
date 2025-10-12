import { motion } from "framer-motion";

const educationData = [
  {
    degree: "Master of Science in Information Systems",
    school: "Central Michigan University",
    location: "USA",
    duration: "Aug 2023 – May 2025",
  },
  {
    degree: "Bachelor of Technology in Electronics & Communication Engineering",
    school: "Annamacharya University",
    location: "India",
    duration: "Aug 2018 – Jun 2022",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="relative py-16 sm:py-20 lg:py-24 bg-background overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-gradient text-center mb-12"
        >
          Education
        </motion.h2>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto flex flex-col gap-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative flex flex-col sm:flex-row sm:justify-between sm:items-center bg-card border border-border rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
            >
              <div className="text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-1">
                  {edu.degree}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {edu.school} | {edu.location}
                </p>
              </div>
              <div className="mt-3 sm:mt-0 text-sm sm:text-base text-primary font-medium text-center sm:text-right">
                {edu.duration}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

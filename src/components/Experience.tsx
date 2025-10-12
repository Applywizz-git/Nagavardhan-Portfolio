import { motion } from "framer-motion";

const experiences = [
  {
    role: "Generative AI Engineer",
    company: "OneMain Financial",
    location: "USA",
    duration: "Sep 2024 – Present",
    points: [
      "Spearheaded the creation of a document intelligence platform using Python, Azure AI Vision, and LangGraph, transforming a prototype into an enterprise-grade solution that accelerated document processing by 3×.",
      "Developed RAG pipelines with LangGraph, Hugging Face embeddings, and Milvus, improving search precision by 45% and recall by 42%.",
      "Designed multi-agent LLM workflows combining retrieval, reasoning, summarization, and citation verification with PyTorch and LangChain, reducing manual document review by 60%.",
      "Integrated OCR and multilingual text extraction to support over 10 languages, boosting ingestion speed by 35%.",
    ],
  },
  {
    role: "Generative AI Intern",
    company: "OneMain Financial",
    location: "USA",
    duration: "May 2024 – Aug 2024",
    points: [
      "Led the creation of a Generative AI Research Assistant using LangGraph, orchestrating retrieval, reasoning, summarization, and citation verification workflows, reducing research turnaround time by 70%.",
      "Leveraged Tavily Search API and Groq LLaMA-3.1 to deliver low-latency contextual search and text synthesis, increasing research accuracy by 40%.",
      "Built Streamlit-based dashboards for interactive research tracking, improving adoption among business teams by 50%.",
    ],
  },
  {
    role: "LLM Engineer",
    company: "Cognizant",
    location: "India",
    duration: "Jan 2021 – Jun 2023",
    points: [
      "Led development of LLM-powered analytics pipelines using Python and Hugging Face Transformers, automating KPI extraction and cutting manual reporting by 40%.",
      "Built robust data preprocessing and validation workflows ensuring 99% accuracy across datasets.",
      "Implemented RAG pipelines with Milvus and FAISS, improving enterprise retrieval and decreasing manual lookup by 50%.",
      "Engineered integration of Java APIs with SQL and MongoDB to enable high-performance LLM inference workflows, reducing latency by 30%.",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
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
          Experience
        </motion.h2>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block w-1 bg-gradient-to-b from-primary to-secondary rounded-full h-full"></div>

          <div className="flex flex-col gap-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Dot */}
                <div className="absolute hidden md:block left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-primary border-4 border-background z-10 top-6"></div>

                {/* Card */}
                <div
                  className={`bg-card border border-border rounded-xl shadow-md p-6 w-full md:w-[45%] ${
                    index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                        {exp.role}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground">
                        {exp.company} — {exp.location}
                      </p>
                    </div>
                    <p className="text-xs sm:text-sm text-primary font-medium mt-2 sm:mt-0 text-right">
                      {exp.duration}
                    </p>
                  </div>

                  <ul className="list-disc list-inside text-sm sm:text-base text-muted-foreground space-y-1 mt-3">
                    {exp.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 🔥 Add attribute to hide header
    document.documentElement.setAttribute("data-preloading", "true");

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.documentElement.setAttribute("data-preloading", "false");
    }, 2500);

    return () => {
      clearTimeout(timer);
      document.documentElement.setAttribute("data-preloading", "false");
    };
  }, []);

  if (!isLoading) return null;

  const letters = "LOADING".split("");

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <div className="flex gap-3">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: [0, 1, 1, 0],
              y: [20, 0, 0, -20],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: index * 0.1,
              ease: "easeInOut",
            }}
            className="text-4xl font-display font-extrabold text-gradient"
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default Preloader;

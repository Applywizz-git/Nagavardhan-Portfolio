import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, Github, Linkedin, CheckCircle } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import confetti from "canvas-confetti";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });

      // Success effects
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });

      toast.success("Message sent successfully!", {
        description: "I'll get back to you as soon as possible.",
        icon: <CheckCircle className="text-green-500" />,
      });
    }, 2000);
  };

  const socialLinks = [
    // { icon: Github, href: portfolioData.github, label: "GitHub" },
    { icon: Linkedin, href: portfolioData.linkedin, label: "LinkedIn" },
    { icon: Mail, href:"https://mail.google.com/mail/?view=cm&to=nagavardhan768@gmail.com", label: "Email" },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display font-extrabold text-gradient mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-display font-bold mb-6">Let's Connect!</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                I'm always open to discussing new opportunities, collaborations, or just
                chatting about AI and technology. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              <motion.a
                href="https://mail.google.com/mail/?view=cm&to=nagavardhan768@gmail.com"
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 group"
              >
                <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground font-semibold">{portfolioData.email}</p>
                </div>
              </motion.a>

              <motion.a
                href="https://mail.google.com/mail/?view=cm&to=nagavardhan768@gmail.com"
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 group"
              >
                <div className="p-4 bg-secondary/10 rounded-xl group-hover:bg-secondary/20 transition-colors">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-foreground font-semibold">{portfolioData.phone}</p>
                </div>
              </motion.a>

              <motion.div whileHover={{ x: 10 }} className="flex items-center gap-4">
                <div className="p-4 bg-accent/10 rounded-xl">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground font-semibold">{portfolioData.location}</p>
                </div>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 bg-primary/10 rounded-full hover:bg-primary hover:text-primary-foreground transition-all glow-card"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="glass-effect rounded-3xl p-8 space-y-6">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-background/50 border-2 border-border rounded-xl px-4 py-3 focus:border-primary focus:outline-none transition-colors peer"
                  placeholder=" "
                />
                <label className="absolute left-4 -top-2.5 bg-background px-2 text-sm text-muted-foreground peer-focus:text-primary transition-colors">
                  Your Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-background/50 border-2 border-border rounded-xl px-4 py-3 focus:border-primary focus:outline-none transition-colors peer"
                  placeholder=" "
                />
                <label className="absolute left-4 -top-2.5 bg-background px-2 text-sm text-muted-foreground peer-focus:text-primary transition-colors">
                  Your Email
                </label>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-background/50 border-2 border-border rounded-xl px-4 py-3 focus:border-primary focus:outline-none transition-colors peer resize-none"
                  placeholder=" "
                />
                <label className="absolute left-4 -top-2.5 bg-background px-2 text-sm text-muted-foreground peer-focus:text-primary transition-colors">
                  Your Message
                </label>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-primary/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

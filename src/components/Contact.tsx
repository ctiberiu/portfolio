import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Mail, MapPin, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = (await response.json().catch(() => null)) as
        | { ok: true }
        | { ok: false; error?: string }
        | null;

      if (!response.ok || !data || data.ok !== true) {
        const errorMessage =
          (data && "error" in data && data.error) ||
          "Something went wrong. Please try again later.";

        toast({
          title: "Message failed",
          description: errorMessage,
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon!",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (err: any) {
      toast({
        title: "Message failed",
        description: err?.message || "Network error. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-card">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 rounded-full brutal-border brutal-shadow-sm mb-6">
            <Sparkles className="w-4 h-4 text-primary-foreground" />
            <span className="text-primary-foreground font-display font-semibold text-sm uppercase tracking-wide">
              Available for Work
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Let's <span className="text-primary">Work Together</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Have a project in mind? I'd love to hear about it. Drop me a message 
            and let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-background p-6 brutal-border hover-lift">
              <div className="flex items-center gap-4">
                <div className="bg-pink-500 p-3 brutal-border brutal-shadow-sm">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground">Email</h3>
                  <p className="text-muted-foreground font-body text-sm">
                    hello@tiberiu.me
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-background p-6 brutal-border hover-lift">
              <div className="flex items-center gap-4">
                <div className="bg-blue-500 p-3 brutal-border brutal-shadow-sm">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground">Location</h3>
                  <p className="text-muted-foreground font-body text-sm">
                    Remote / Worldwide
                  </p>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 bg-primary brutal-border brutal-shadow"
            >
              <p className="text-primary-foreground font-display font-bold text-lg mb-2">
                Quick Response Time
              </p>
              <p className="text-primary-foreground/80 font-body text-sm">
                I typically respond within 24 hours. For urgent projects, 
                feel free to mention it in your message!
              </p>
            </motion.div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-background p-8 brutal-border brutal-shadow space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block font-display font-semibold text-foreground mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card text-foreground font-body brutal-border focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-display font-semibold text-foreground mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card text-foreground font-body brutal-border focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-display font-semibold text-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-card text-foreground font-body brutal-border focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display font-bold text-lg brutal-border hover-lift disabled:opacity-70 disabled:cursor-not-allowed transition-all"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
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

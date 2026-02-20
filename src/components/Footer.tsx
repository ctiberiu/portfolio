import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/ctiberiu", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/tiberiucorici", label: "LinkedIn" },
  // { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
];

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <a
              href="#"
              className="bg-yellow-500 brutal-border brutal-shadow-sm px-4 py-2 font-mono font-bold text-black"
            >
              &gt;tiberiu.me_
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-3"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-card brutal-border hover-lift"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-foreground" />
              </a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-1 text-muted-foreground font-body text-sm"
          >
            Built by me.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Github, Linkedin, Twitter } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/ctiberiu", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/tiberiucorici", label: "LinkedIn" },
];

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-20 pt-32">
      {/* Floating shapes background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-yellow-500 rounded-lg brutal-border brutal-shadow rotate-12"
          animate={{ y: [0, -20, 0], rotate: [12, 18, 12] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-16 h-16 bg-pink-500 rounded-full brutal-border"
          animate={{ y: [0, 15, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        <motion.div
          className="absolute bottom-40 left-1/4 w-12 h-12 bg-green-500 brutal-border brutal-shadow-sm"
          animate={{ y: [0, -10, 0], rotate: [0, 45, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute bottom-20 right-1/3 w-24 h-8 bg-blue-500 rounded-full brutal-border"
          animate={{ x: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        />
        <motion.div
          className="absolute top-1/3 right-10 w-8 h-8 bg-orange-500 brutal-border rotate-45"
          animate={{ rotate: [45, 135, 45] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Photo card */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -5 }}
            animate={{ opacity: 1, x: 0, rotate: -3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto lg:mx-0 order-1 lg:order-1"
          >
            {/* Decorative dashed curve */}
            <svg
              className="absolute -top-8 -right-8 w-32 h-32 text-primary opacity-60"
              viewBox="0 0 100 100"
              fill="none"
            >
              <motion.path
                d="M10 90 Q 50 10, 90 50"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="6 4"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.8 }}
              />
            </svg>

            {/* Colored background frame (tilted) */}
            <div className="absolute inset-0 bg-orange-500 brutal-border rotate-6 translate-x-3 translate-y-3" />
            
            {/* Main photo card */}
            <div className="relative bg-card brutal-border brutal-shadow p-4">
              {/* Photo placeholder */}
              <div className="relative w-56 h-64 md:w-64 md:h-72 bg-gradient-to-br from-pink-500 via-orange-500 to-yellow-500 brutal-border overflow-hidden">
                {/* Placeholder content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-primary-foreground">
                    <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                      <span className="text-4xl">👤</span>
                    </div>
                    <p className="font-display font-bold text-sm">Your Photo</p>
                  </div>
                </div>
              </div>

              {/* Name under photo */}
              <div className="text-center mt-4">
                <h3 className="font-display font-bold text-xl text-foreground">
                  Tiberiu Corici
                </h3>
                <p className="text-muted-foreground font-body text-sm mt-1">
                  Frontend Developer crafting<br />beautiful experiences
                </p>
              </div>

              {/* Social links */}
              <div className="flex justify-center gap-2 mt-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 bg-muted brutal-border hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left order-2 lg:order-2"
          >
            {/* Greeting badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary rounded-full brutal-border brutal-shadow-sm mb-8"
            >
              <Sparkles className="w-4 h-4 text-primary-foreground" />
              <span className="text-primary-foreground font-display font-semibold text-sm uppercase tracking-wide">
                Available for Work
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-[0.95]"
            >
              <span className="text-foreground">FRONTEND</span>
              <br />
              <span className="text-gradient">DEVELOPER</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 font-body"
            >
              Passionate about crafting intuitive and delightful user experiences. 
              I transform ideas into pixel-perfect, interactive web applications.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
            >
              <a
                href="#projects"
                className="group px-8 py-4 bg-primary text-primary-foreground font-display font-bold text-lg brutal-border hover-lift transition-all duration-300"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-card text-foreground font-display font-bold text-lg brutal-border hover-lift transition-all duration-300"
              >
                Get In Touch
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-sm font-body uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

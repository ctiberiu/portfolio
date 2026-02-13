import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
    >
      <div className="container max-w-5xl mx-auto">
        <div className="flex items-center justify-between bg-card/95 backdrop-blur-sm brutal-border brutal-shadow-sm px-6 py-3">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary brutal-border flex items-center justify-center">
              <span className="font-display font-bold text-primary-foreground text-lg">
                P
              </span>
            </div>
            <span className="font-display font-bold text-foreground hidden sm:block">
              Portfolio
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 font-display font-semibold text-foreground hover:bg-muted transition-colors rounded"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 px-4 py-2 bg-primary text-primary-foreground font-display font-bold brutal-border hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_hsl(0,0%,0%)] transition-all"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 brutal-border hover:bg-muted transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-2 bg-card brutal-border brutal-shadow p-4 space-y-2"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 font-display font-semibold text-foreground hover:bg-muted transition-colors rounded"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 bg-primary text-primary-foreground font-display font-bold text-center brutal-border"
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;

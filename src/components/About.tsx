import { motion } from "framer-motion";
import { Code2, Palette, Zap, Users } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Frontend Architecture",
    description: "Designing scalable UI systems, from modular platforms to microfrontend integration",
    color: "bg-yellow-500",
  },
  {
    icon: Palette,
    title: "UI/UX Focus",
    description: "Creating beautiful interfaces with attention to every detail",
    color: "bg-pink-500",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing for speed and smooth user experiences",
    color: "bg-green-500",
  },
  {
    icon: Users,
    title: "Product Delivery",
    description: "Owning features end-to-end across legacy and modern stacks in fast-moving teams",
    color: "bg-blue-500",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-card">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body leading-relaxed">
            I'm a frontend developer who loves building things for the web. 
            With a focus on React and modern JavaScript, I create applications 
            that are not just functional but truly enjoyable to use.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-background p-6 brutal-border hover-lift cursor-default"
            >
              <div className="flex items-start gap-4">
                <div className={`${skill.color} p-3 brutal-border brutal-shadow-sm`}>
                  <skill.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl mb-2 text-foreground">
                    {skill.title}
                  </h3>
                  <p className="text-muted-foreground font-body">
                    {skill.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-xl font-display font-bold text-center mb-8">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "React",
              "Vue.js",
              "Nuxt.js",
              "TypeScript",
              "JavaScript",
              "Node.js",
              "PHP",
              "MySQL",
              "Storybook",
              "Jest",
              "WordPress",
              "Git",
              "Figma",
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-muted text-foreground font-display font-medium text-sm brutal-border brutal-shadow-sm cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

import { motion } from "framer-motion";
import { ExternalLink, Lock, Github, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projectsData, type ProjectData } from "@/data/projects";

const colorVariants = {
  yellow: "bg-yellow-500 border-yellow-500",
  pink: "bg-pink-500 border-pink-500",
  green: "bg-green-500 border-green-500",
  blue: "bg-blue-500 border-blue-500",
  orange: "bg-orange-500 border-orange-500",
};

const ProjectCard = ({ project, index }: { project: ProjectData; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-card brutal-border hover-lift overflow-hidden"
    >
      {/* Color bar */}
      <div className={`h-2 ${colorVariants[project.color]}`} />

      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="font-display font-bold text-xl text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          {project.isPrivate && (
            <span className="flex items-center gap-1 px-2 py-1 bg-muted text-muted-foreground text-xs font-display font-semibold rounded brutal-border">
              <Lock className="w-3 h-3" />
              NDA
            </span>
          )}
        </div>

        <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-muted text-foreground text-xs font-display font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-3">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-card text-foreground font-display font-semibold text-sm brutal-border hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_hsl(0,0%,0%)] transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                {project.linkLabel || "Visit"}
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-card text-foreground font-display font-semibold text-sm brutal-border hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_hsl(0,0%,0%)] transition-all"
              >
                <Github className="w-4 h-4" />
                Code
              </a>
            )}
          </div>
          <Link
            to={`/project/${project.slug}`}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-display font-semibold text-sm brutal-border hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_hsl(0,0%,0%)] transition-all ml-auto"
          >
            Read More
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            A selection of projects I've worked on. Some are public, others are under NDA 
            but I'm happy to discuss them in detail.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

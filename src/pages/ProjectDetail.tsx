import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Lock, Play } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { projectsData, type ProjectData } from "@/data/projects";

const colorVariants = {
  yellow: "bg-yellow-500",
  pink: "bg-pink-500",
  green: "bg-green-500",
  blue: "bg-blue-500",
  orange: "bg-orange-500",
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="py-20 px-4">
          <div className="container max-w-3xl text-center">
            <h1 className="text-4xl font-display font-bold mb-4">Project Not Found</h1>
            <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-display font-semibold brutal-border hover-lift"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 pb-20 px-4">
        <div className="container max-w-3xl">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-display font-medium mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className={`h-2 w-24 ${colorVariants[project.color]} mb-6`} />
            
            <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold">
                {project.title}
              </h1>
              {project.isPrivate && (
                <span className="flex items-center gap-1 px-3 py-1.5 bg-muted text-muted-foreground text-sm font-display font-semibold rounded brutal-border">
                  <Lock className="w-4 h-4" />
                  NDA Protected
                </span>
              )}
            </div>

            <p className="text-xl text-muted-foreground font-body">
              {project.description}
            </p>
          </motion.div>

          {/* Meta info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid sm:grid-cols-2 gap-4 mb-8"
          >
            {project.role && (
              <div className="p-4 bg-card brutal-border">
                <p className="text-sm text-muted-foreground font-display mb-1">Role</p>
                <p className="font-display font-semibold">{project.role}</p>
              </div>
            )}
            {project.duration && (
              <div className="p-4 bg-card brutal-border">
                <p className="text-sm text-muted-foreground font-display mb-1">Duration</p>
                <p className="font-display font-semibold">{project.duration}</p>
              </div>
            )}
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 bg-muted text-foreground text-sm font-display font-medium"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Briefing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-display font-bold mb-4">Project Briefing</h2>
            <p className="text-muted-foreground font-body leading-relaxed text-lg">
              {project.briefing}
            </p>
          </motion.div>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-display font-bold mb-4">Key Highlights</h2>
              <ul className="space-y-3">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className={`w-2 h-2 mt-2 ${colorVariants[project.color]} flex-shrink-0`} />
                    <span className="text-muted-foreground font-body">{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Personal Storytelling */}
          {project.storytelling && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-8"
            >
              <hr className="mb-4" />
              <h2 className="text-2xl font-display font-bold mb-4">Storytelling</h2>
              <h3 className="text-xl font-display font-bold mb-4">{project.storytelling.title}</h3>
              <div className="text-muted-foreground font-body leading-relaxed space-y-4">
                {project.storytelling.content.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
          )}

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="flex flex-wrap gap-4"
          >
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-display font-semibold brutal-border hover-lift"
              >
                <ExternalLink className="w-4 h-4" />
                {project.linkLabel || "View Live Demo"}
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-card text-foreground font-display font-semibold brutal-border hover-lift"
              >
                <Github className="w-4 h-4" />
                View Code
              </a>
            )}
            {project.optional_link && (
              <a
                href={project.optional_link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-card text-foreground font-display font-semibold brutal-border hover-lift"
              >
                {project.optional_link_type === "video" && <Play className="w-4 h-4" />}
                {project.optional_link_type !== "video" && <ExternalLink className="w-4 h-4" />}
                {project.optional_link_label || "View More"}
              </a>
            )}
            {project.isPrivate && !project.link && !project.github && !project.optional_link && (
              <p className="text-muted-foreground font-body italic">
                Due to NDA restrictions, live demo and source code are not publicly available. 
                Please contact me for more details about this project.
              </p>
            )}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;

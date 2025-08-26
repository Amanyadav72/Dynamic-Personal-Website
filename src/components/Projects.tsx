import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Folder, ChevronRight, Code } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      title: "Task Manager",
      description: "A web-based Task Manager built with Flask",
      longDescription: "This app lets you add tasks with deadlines, mark them as complete, and delete them (CRUD operation). Tasks are stored in a local JSON file (no SQL database required — just JSON storage) for easy management.",
      technologies: ["Flask", "Python", "JSON", "HTML/CSS", "JavaScript"],
      features: [
        "Add tasks with deadlines",
        "Mark tasks as complete",
        "Delete tasks",
        "CRUD operations",
        "Local JSON storage"
      ],
      github: "https://github.com/amanyadav/task-manager",
      demo: "#",
      type: "Web Application"
    },
    {
      title: "Guestbook",
      description: "Interactive guestbook application built with Flask",
      longDescription: "Visitors can sign the guestbook by submitting their name and a message, which are displayed on the main page. All entries are stored persistently using Flask and database integration.",
      technologies: ["Flask", "Python", "SQLite", "Bootstrap", "JavaScript"],
      features: [
        "User message submission",
        "Real-time display",
        "Persistent storage",
        "Responsive design",
        "Input validation"
      ],
      github: "https://github.com/amanyadav/guestbook",
      demo: "#",
      type: "Web Application"
    },
    {
      title: "Contact Book",
      description: "Python-based Contact Book application",
      longDescription: "A simple, interactive Contact Book that allows users to add, view, edit, delete, and search contacts. All data is stored persistently in a local JSON file.",
      technologies: ["Python", "JSON", "File I/O", "CLI"],
      features: [
        "Add new contacts",
        "View all contacts",
        "Edit existing contacts",
        "Delete contacts",
        "Search functionality",
        "Persistent JSON storage"
      ],
      github: "https://github.com/amanyadav/contact-book",
      demo: "#",
      type: "CLI Application"
    },
    {
      title: "Personal Portfolio",
      description: "Dynamic portfolio website using HTML, CSS, and JavaScript",
      longDescription: "A simple web-based personal portfolio using HTML, CSS and JavaScript. Features responsive design, smooth animations, and interactive elements.",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      features: [
        "Responsive design",
        "Smooth animations",
        "Interactive UI",
        "Portfolio showcase",
        "Contact form"
      ],
      github: "https://github.com/amanyadav/portfolio",
      demo: "#",
      type: "Website"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing my backend development skills through real-world applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group relative overflow-hidden bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Folder size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <Badge variant="outline" className="mt-1">
                        {project.type}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.demo}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.technologies.length - 3} more
                    </Badge>
                  )}
                </div>

                <Button
                  variant="glow"
                  size="sm"
                  onClick={() => setSelectedProject(project)}
                  className="w-full group"
                >
                  View Details
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-2xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-3">
                  <Code className="text-primary" />
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription>
                  {selectedProject.longDescription}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Key Features</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {selectedProject.features.map((feature: string) => (
                      <li key={feature} className="text-sm text-muted-foreground">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech: string) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button variant="gradient" asChild>
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2" />
                      View Source
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
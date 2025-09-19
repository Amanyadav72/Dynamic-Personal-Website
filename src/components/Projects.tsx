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
      longDescription: "A modern, feature-rich task management web application built with Flask. Stay organized and boost your productivity with an intuitive interface, smart features, and responsive design.",
      technologies: ["Flask", "Python", "SQLAlchemy", "HTML/CSS","Gunicorn","Render","JavaScript"],
      features: [
        "Create & Edit Tasks with deadlines",
        "Personal Workspaces",
        "Progress Dashboard",
        "PWA Ready",
        "Interactive Animations",
        "Secure Authentication"
      ],
      github: "https://github.com/Amanyadav72/Task-Manager-V-2",
      demo: "https://task-manager-pro-dacs.onrender.com/login",
      type: "Web Application"
    },
    {
      title: "Crypto Trading Bot",
      description: "A CLI-Based Trading Bot for Binance USDT-M Futures can place different types of order ",
      longDescription: "Built automated trading bot for Binance USDT-M Futures Testnet with multiple order types. Implemented Market, Limit, Stop-Limit, OCO, and TWAP order execution strategies. Developed comprehensive logging system and robust error handling mechanisms. Created intuitive command-line interface for real-time trading operations. ",
      technologies: ["Python","Binance API","CLI Interface","Error Handling","Logging"],
      features: [
        "Place Market, Limit, Stop-Limit, OCO and TWAP orders",
        "CLI Interface",
        "Robust logging",
        "Error handling mechanisms",
        "Real-time trading operations",
        "Integrated Binance API"
      ],
      github: "https://github.com/Amanyadav72/Aman-Binance-Bot",
      demo: "https://github.com/Amanyadav72/Aman-Binance-Bot",
      type: "CLI Application"
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
      github: "https://github.com/Amanyadav72/Guestbook",
      demo: "https://github.com/Amanyadav72/Guestbook",
      type: "Web Application"
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
      github: "https://amanyadav72.github.io/Portfolio/",
      demo: "https://amanyadav72.github.io/Portfolio/",
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
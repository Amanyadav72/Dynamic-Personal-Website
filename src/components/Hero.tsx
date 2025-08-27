import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Python Developer";
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(217_91%_60%_/_0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-gradient">Aman Yadav</span>
          </h1>
          
          <div className="h-12 mb-8">
            <h2 className="text-2xl md:text-3xl font-mono text-muted-foreground">
              <span className="text-primary">&gt;</span> {text}
              <span className="animate-blink">|</span>
            </h2>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Motivated Backend developer with hands-on experience in Python, Flask, and SQLAlchemy. 
            Skilled at building scalable RESTful APIs and deploying cloud-based applications.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button variant="gradient" size="lg">
              <Mail className="mr-2" />
              Contact Me
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a 
                href="https://drive.google.com/file/d/1UTc5jiExVczzIz_K3B-PLk7AHxqW4zJt/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2" />
                Download Resume
              </a>
            </Button>
          </div>
          
          <div className="flex gap-6 justify-center">
            <a
              href="https://github.com/Amanyadav72"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/aman-yadav-137808279/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:amanyadavabhay@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
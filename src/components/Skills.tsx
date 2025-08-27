import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { 
  Code2, 
  Database, 
  Cloud, 
  GitBranch,
  Terminal,
  Braces,
  Globe,
  Shield
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 className="text-primary" />,
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 70 },
        { name: "C++", level: 80 },
        { name: "C", level: 85 },
      ]
    },
    {
      title: "Frameworks",
      icon: <Braces className="text-secondary" />,
      skills: [
        { name: "Flask", level: 95 },
        { name: "SQLAlchemy", level: 90 },
        { name: "React", level: 75 },
        { name: "FastAPI", level: 80 },
      ]
    },
    {
      title: "Databases",
      icon: <Database className="text-accent" />,
      skills: [
        { name: "MySQL", level: 85 },
        { name: "SQLite", level: 90 },
        { name: "PostgreSQL", level: 65 },
        { name: "MongoDB", level: 65 },
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="text-primary" />,
      skills: [
        { name: "AWS (EC2, S3, RDS)", level: 80 },
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 70 },
        { name: "CI/CD", level: 75 },
      ]
    },
  ];

  const additionalSkills = [
    { name: "RESTful APIs", icon: <Globe /> },
    { name: "Version Control", icon: <GitBranch /> },
    { name: "Linux/CLI", icon: <Terminal /> },
    { name: "Security Best Practices", icon: <Shield /> },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient">Technical Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Proficient in full-stack development with a strong focus on backend technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="p-6 bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                {category.icon}
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-6 bg-gradient-card border-border">
          <h3 className="text-xl font-semibold mb-6 text-center">Additional Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {additionalSkills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center gap-3 p-4 rounded-lg bg-card hover:bg-card-hover border border-border hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="text-muted-foreground group-hover:text-primary transition-colors">
                  {skill.icon}
                </div>
                <span className="text-sm text-center">{skill.name}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
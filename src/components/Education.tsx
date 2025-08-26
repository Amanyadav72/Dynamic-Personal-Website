import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "B.Sc IT (Pursuing)",
      institution: "University of Mumbai",
      year: "2024 - Present",
      grade: "NA",
      description: "Currently pursuing Bachelor of Science in Information Technology",
      icon: <GraduationCap className="text-primary" />
    },
    {
      degree: "12th (Science) [HSC]",
      institution: "Maharashtra State Board",
      year: "2022",
      grade: "65%",
      description: "Higher Secondary Certificate with Science stream",
      icon: <Award className="text-secondary" />
    },
    {
      degree: "10th (SSC)",
      institution: "Maharashtra State Board",
      year: "2020",
      grade: "82.80%",
      description: "Secondary School Certificate with distinction",
      icon: <Award className="text-accent" />
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-gradient">Educational Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic background and qualifications
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />

            {educationData.map((item, index) => (
              <div
                key={index}
                className="relative flex items-center mb-12 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block animate-pulse" />
                
                {/* Card */}
                <Card className="ml-0 md:ml-20 p-6 bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card w-full group">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold">{item.degree}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar size={16} />
                          <span>{item.year}</span>
                        </div>
                      </div>
                      <p className="text-primary mb-2">{item.institution}</p>
                      <p className="text-muted-foreground mb-2">{item.description}</p>
                      {item.grade !== "NA" && (
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-sm">
                          <span className="text-primary">Grade:</span>
                          <span className="font-semibold">{item.grade}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
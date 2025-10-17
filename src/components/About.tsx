import { Code2, Rocket, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable and efficient code",
    },
    {
      icon: Rocket,
      title: "Fast Performance",
      description: "Optimized applications for best UX",
    },
    {
      icon: Users,
      title: "User-Focused",
      description: "Building solutions that users love",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          About <span className="gradient-text">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis provident illo laboriosam deserunt ipsam, laudantium libero in incidunt repellat dolores reprehenderit modi aperiam nobis. Ea eius dolore eligendi repellendus
              aspernatur!
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My expertise includes{" "}
              <span className="text-primary font-semibold">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse culpa natus dolores animi vero iusto, quo magnam autem quis nesciunt placeat magni harum omnis aliquam numquam modi rerum provident sunt!
              </span>
              . I love transforming ideas into functional, beautiful web applications.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio fugiat, officia doloribus harum consectetur, provident vel dolor animi nulla corporis voluptatum beatae. Accusamus accusantium inventore eveniet in qui
              laudantium aliquid.
            </p>
          </div>

          <div className="space-y-4">
            {highlights.map((item, index) => (
              <div key={index} className="glass-card rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

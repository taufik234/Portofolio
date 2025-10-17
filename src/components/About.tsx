import { Code2, Rocket, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icons: Code2,
      title: "Clean Code",
      description: "Writing maintainable and efficient code",
    },
    {
      Icon: Rocket,
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
        <h2 className="text-4x md:text-5xl font-bold mb-12 text-center">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt reiciendis velit at, quidem consectetur minima odio laborum illum nulla error beatae ipsa molestias id saepe laboriosam maxime porro ea temporibus.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {" "}
              My expertise include{" "}
              <span className="text-primary font-semibold">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, qui? Maxime iste deleniti quasi iusto, perferendis facere hic esse sapiente vel laudantium ab debitis nobis expedita ipsam cupiditate. Qui, omnis?
              </span>
              . Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto cupiditate illum alias similique atque est, quo laboriosam fugit neque asperiores reiciendis suscipit aliquam minus quae dolorum, quaerat amet, sit nam.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit ducimus repudiandae provident, pariatur maxime iste impedit reiciendis esse et, sequi odit cupiditate nesciunt earum est consequatur expedita cum aspernatur
              fuga.
            </p>
          </div>
          <div className="space-y-4">
            {highlights.map((item, index) => (
              <div key={index} className="glass-card rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:scale-105">
                <div className="flex items-start gap-4">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-smibold mb-2"> {item.title}</h3>
                  <p className="text-muted-foreground"> {item.description}</p>
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

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "REST API", "golang"],
    },
    {
      title: "Database",
      skills: ["MongoDB", "MySQL"],
    },
    {
      title: "Tools & Others",
      skills: ["Git", "Docker", "Postman", "VS Code"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Technical <span className="gradien-text">Skills</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap 8">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-card rounded-lg p-6 space-y-4">
              <h3 className="text-xl font-bold gradient-text"> {category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="px-3 py-2 text-sm bg-secondary hover:bg-primary/20 rounded-lg transition-colors duration-300 cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

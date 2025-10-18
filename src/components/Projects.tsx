import ProjectCard from "./ProjectCard";
import portfolioImg from "@/assets/project-portfolio.jpg";
import ecommerceImg from "@/assets/project-ecommerce.jpg";
import chatImg from "@/assets/project-chat.jpg";
import iotImg from "@/assets/project-iot.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern, responsive personal portfolio built with React and Tailwind CSS. Features smooth animations, dark theme, and optimized performance.",
      image: portfolioImg,
      technologies: ["React", "Tailwind CSS", "TypeScript"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "E-Commerce REST API",
      description: "Robust RESTful API for e-commerce platform using Node.js, Express, and MongoDB. Implements authentication, product management, and order processing.",
      image: ecommerceImg,
      technologies: ["Node.js", "Express", "MongoDB"],
      githubUrl: "#",
      //   liveUrl: "#",
    },
    {
      title: "Real-Time Chat App",
      description: "Feature-rich chat application with real-time messaging using Socket.io. Supports multiple rooms, user authentication, and message history.",
      image: chatImg,
      technologies: ["React", "Socket.io", "Node.js"],
      githubUrl: "#",
      //   liveUrl: "#",
    },
    {
      title: "IoT Dashboard",
      description: "Comprehensive IoT device monitoring dashboard built with Next.js and Chart.js. Visualizes real-time data with interactive charts and alerts.",
      image: iotImg,
      technologies: ["Next.js", "Chart.js", "WebSocket"],
      githubUrl: "#",
      //   liveUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

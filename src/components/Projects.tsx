import ProjectCard from "./ProjectCard";
import portfolioImg from "@/assets/project-portfolio.jpg";
import ecommerceImg from "@/assets/project-ecommerce.jpg";
import vestion from "@/assets/v.png";
import iotImg from "@/assets/project-iot.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern, responsive personal portfolio built with React and Tailwind CSS. Features smooth animations, dark theme, and optimized performance.",
      image: portfolioImg,
      technologies: ["React", "Tailwind CSS", "TypeScript"],
      githubUrl: "https://github.com/taufik234/Portofolio",
      liveUrl: "#",
    },
    {
      title: "Note REST API",
      description:
        "adalah sebuah backend API sederhana yang ditulis menggunakan bahasa pemrograman Go (Golang). API ini berfungsi untuk mendukung aplikasi pencatatan (notes) — memungkinkan Anda membuat, membaca, memperbarui, dan menghapus (CRUD) catatan. ",
      image: ecommerceImg,
      technologies: ["Golang", "MongoDB"],
      githubUrl: "https://github.com/taufik234/GoNotes-API",
      //   liveUrl: "#",
    },
    {
      title: "Vegetable Information and Nutrition Bangkit 2024 Batch 1 Capstone Team: C241-PS002",
      description:
        "Vetion is an application designed to help retailers and houseconsumers detect the quality of vegetables and provide accurate nutritional information. The app aims to enhance users' awareness and understanding of the quality and nutritional content of the vegetables they consume. With Vetion, users can easily select high-quality vegetables and ensure they receive the maximum nutritional benefits from their choices.",
      image: vestion,
      technologies: ["Python", "Kotlin", "TensorFlow, Java Script "],
      githubUrl: "https://github.com/VetionTeam",
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

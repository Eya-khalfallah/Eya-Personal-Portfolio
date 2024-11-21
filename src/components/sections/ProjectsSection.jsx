import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutDashboard, X } from 'lucide-react';
import {
  FaReact,
  FaNodeJs,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiFlutter,
  SiFirebase,
} from "react-icons/si";

import RecipeFinder from "../../assets/projects/recipe-finder.png";
import Cozy from "../../assets/projects/cozy.png";
import Eje from "../../assets/projects/eje.png";
import MindfulU from "../../assets/projects/mindfulU.jpg";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const projects = [
    {
      image: RecipeFinder,
      title: "CookBook",
      subtitle: "Design & Development",
      tag: "Personal Project",
      description:
        "CookBook is a recipe finder web application designed to connect food enthusiasts. Users can create accounts, manage their profiles, share their own recipes, and explore a diverse collection of recipes shared by others. With features like recipe filtering by categories, viewing the most recent recipes, and detailed ingredient breakdowns, CookBook ensures a seamless and engaging user experience.",
      technologies: ["React.js", "Node.js", "Express", "MongoDB", "CSS"],
      githubLink: "https://github.com/Eya-khalfallah/CookBook",
      liveLink: "https://cookbook-demo.example.com",
    },
    {
      image: Cozy,
      title: "Cozy",
      subtitle: "Design & Development",
      tag: "Academic Project",
      description:
        "Cozy is a cosmetic products website designed to provide a seamless shopping experience. Users can explore a wide range of cosmetic products, filter them by category or price, and discover the most popular items. The website also offers users the ability to contact the team directly and create accounts to receive updates on new products, discounts, and special offers. With a beautiful UI/UX design, Cozy delivers a user-friendly interface and a pleasant browsing experience.",
      technologies: ["PHP", "MySQL", "JavaScript", "CSS"],
      githubLink: "https://github.com/Eya-khalfallah/Cozy",
      liveLink: "https://cozy-demo.example.com",
    },
    {
      image: Eje,
      title: "EJE Website",
      subtitle: "Design & Development",
      tag: "Association Project",
      description:
        "This project is a comprehensive website developed for ENSI Junior Enterprise, an association affiliated with the National School of Computer Science (ENSI) in Tunisia. The website aims to provide visitors with a detailed overview of the association's activities, including its history, services, achievements, past events, and more. The website serves as an informative platform for both current and prospective members, showcasing the enterprise's role in preparing students for the professional world.",
      technologies: ["React.js", "Tailwind CSS"],
      githubLink: "https://ensijuniorentreprise.com/",
      liveLink: "https://eje-demo.example.com",
    },
    {
      image: MindfulU,
      title: "MindfulU",
      subtitle: "Design & Development",
      tag: "Academic Project",
      description:
        "MindfulU is a mobile application designed to promote student mental health. It provides students with a platform to explore their mental health rights, access useful information like psychiatric contacts, and discover the listening cell available at their university. Students can also take psychological tests (for depression, anxiety, and stress), track their mood, and interact with a mental health chatbot that provides advice and recommendations (without diagnosis). The app includes a profile with statistics for the user's tests and overall mental health. With a calming and friendly UI/UX design, MindfulU helps students maintain their mental well-being.",
      technologies: ["Flutter", "Firebase"],
      githubLink: "https://github.com/Eya-khalfallah/MindfulU",
      liveLink: "https://mindfulu-demo.example.com",
    },
  ];

  const openPopup = (project) => {
    setSelectedProject(project);
  };

  const closePopup = () => {
    setSelectedProject(null);
  };

  return (
    <section
      className="mb-8 p-4 sm:p-6 md:p-[5%] bg-[#272231] rounded-2xl text-left"
      id="projects"
    >
      <div className="h-full flex flex-col justify-between">
        <div className="w-fit h-min rounded-full flex space-x-2 justify-between place-items-center py-2 px-5 border border-[#3d3049bb] text-[#d67f92] mb-6 sm:mb-10">
          <LayoutDashboard className="w-4 h-4" />
          <h3 className="text-xs font-medium text-gray-100"> PROJECTS</h3>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 sm:mb-8">
          Featured <span className="font-bold text-[#d67f92]">Projects</span>
        </h1>
        <p className="w-full sm:w-[90%] mt-2 text-base sm:text-lg leading-relaxed text-zinc-400 mb-6 sm:mb-10">
          I've applied my skills in real-world projects through freelance work
          and internships, gaining practical experience in creating impactful
          digital solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`h-full ${
                index === 0 || index === 3 ? "md:col-span-2" : ""
              }`}
            >
              <ProjectCard
                project={project}
                onClick={() => openPopup(project)}
              />
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectPopup
            project={selectedProject}
            isOpen={!!selectedProject}
            onClose={closePopup}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

function ProjectCard({ project, onClick }) {
  const [isHovered, setIsHovered] = useState(false);
  const { image, title, subtitle, tag } = project;

  return (
    <div
      className="relative overflow-hidden rounded-lg transition-all duration-300 ease-in-out group border border-[rgba(255,255,255,0.2)] p-4 hover:cursor-pointer h-full"
      id="projects"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition rounded-lg duration-500 ease-in-out group-hover:blur-sm"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/100 via-[#171717]/50 to-transparent flex flex-col justify-center items-center text-gray-100 p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
        <motion.span
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: isHovered ? 0 : -20, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="absolute top-4 right-4 bg-gray-900/80 px-3 py-1 rounded-full text-sm font-medium"
        >
          {tag}
        </motion.span>
        <motion.h3
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="text-2xl sm:text-3xl md:text-4xl text-gray-100 font-bold mb-2 text-center"
        >
          {title}
        </motion.h3>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="text-xl sm:text-2xl md:text-3xl font-light text-center"
        >
          <div
            className="font-extrabold leading-none text-transparent"
            style={{
              WebkitTextStroke: "1px #f3f4f6",
              textStroke: "1px #D1D5DB",
            }}
          >
            {subtitle}
          </div>
        </motion.p>
      </div>
    </div>
  );
}

function ProjectPopup({ project, isOpen, onClose }) {
  if (!project) return null;

  const getTechIcon = (tech) => {
    switch (tech.toLowerCase()) {
      case "react.js":
        return <FaReact className="w-5 h-5" />;
      case "node.js":
        return <FaNodeJs className="w-5 h-5" />;
      case "express":
        return <SiExpress className="w-5 h-5" />;
      case "mongodb":
        return <SiMongodb className="w-5 h-5" />;
      case "php":
        return <FaPhp className="w-5 h-5" />;
      case "mysql":
        return <SiMysql className="w-5 h-5" />;
      case "html":
        return <FaHtml5 className="w-5 h-5" />;
      case "css":
        return <FaCss3Alt className="w-5 h-5" />;
      case "javascript":
        return <FaJs className="w-5 h-5" />;
      case "tailwind css":
        return <SiTailwindcss className="w-5 h-5" />;
      case "flutter":
        return <SiFlutter className="w-5 h-5" />;
      case "firebase":
        return <SiFirebase className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 50 }}
            transition={{ type: "spring", damping: 15 }}
            className="relative transform overflow-hidden rounded-lg bg-gradient-to-br from-[#2d2839] to-[#1f1b29] text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-0 right-0 pt-4 pr-4 ">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 bg-white/10 rounded-full p-2 hover:bg-white/20 transition-colors"
                aria-label="Close popup"
              >
                <X className="w-6 h-6 text-gray-100" />
              </button>
            </div>
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                <h3 className="text-2xl sm:text-3xl font-bold leading-6 text-[#d67f92] mb-4 px-4 sm:px-6 pt-5">
                  {project.title}
                </h3>
                <div className="mt-2 px-4 sm:px-6 pb-4">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/2">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto rounded-lg shadow-lg"
                      />
                      <div className="mt-4">
                        <h4 className="text-lg font-semibold mb-2 text-[#d67f92]">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="flex items-center bg-[#3d3049] text-gray-100 px-3 py-2 rounded-lg text-sm"
                            >
                              {getTechIcon(tech)}
                              <span className="ml-2">{tech}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="md:w-1/2">
                      <p className="text-base text-zinc-400 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 text-gray-100">
                        <motion.a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center bg-[#d67f92] text-gray-100 px-6 py-3 rounded-lg hover:bg-[#c16c7f] transition-colors"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          <div className="flex justify-between place-items-center ">
                            <FaGithub className="mr-2 text-xl text-gray-100" />
                            <span className=" text-gray-100">
                              View on GitHub
                            </span>
                          </div>
                        </motion.a>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ProjectsSection;
"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Personal Portfolio Website Created Using Next.js",
    image: "./images/projects/portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "PassManage-Password Manager",
    description: "A Password Manager to track all passwords at one place",
    image: "./images/projects/PassManage.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Shoaibkhan-in/PassManage-Password-Manager",
    previewUrl: "https://shoaibkhan-in.github.io/PassManage-Password-Manager/",
  },
  {
    id: 3,
    title: "Get Me A Coffee",
    description: "A Patreon Clone for Fans to support their favorite creators.",
    image: "./images/projects/Coffee.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Shoaibkhan-in/Get_Me_A_Coffee",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Spotify(Clone)",
    description: "Music Streaming Web Application",
    image: "./images/projects/Spotify.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Shoaibkhan-in/Spotify-Music-Player-",
    previewUrl: "https://spotifyclonebyshoaib.freewebhostmost.com/",
  },
  {
    id: 5,
    title: "Retro Games",
    description: "A Gaming Platform For classic players to enjoy their childhood.",
    image: "./images/projects/Games.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Shoaibkhan-in/Basic-Games-of-JavaScript",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Todo-List",
    description: "To keep track of all activities ",
    image: "./images/projects/todo.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Shoaibkhan-in/Todo-List",
    previewUrl: "https://shoaibkhan-in.github.io/Todo-List/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;

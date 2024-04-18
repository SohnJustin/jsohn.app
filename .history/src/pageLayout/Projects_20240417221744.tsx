import { useState } from "react";
import projectsPageImg from "../assets/projects-page.svg";
import { Button, Card, Reveal } from "../components";
import { projects } from "./data";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import { transition } from "../utils/transition";

type Category = "professional" | "project";

const Projects = () => {
  const [activeCategory, setActiveCategory] =
    useState<Category>("professional");

  const filterProjects = () => {
    if (activeCategory === "professional") {
      return projects.filter((item) => item.category === "professional");
    } else {
      return projects.filter((item) => item.category === "project");
    }
  };
  return (
    <div
      id="projects"
      className="min-h-screen"
      style={{
        background: `url(${projectsPageImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-screen-2xl w-full py-16 px-12 mx-auto">
        <div className="flex-1 flex flex-col gap-4">
          <Reveal>
            <h2 className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] font-bold text-textPrimary">
              My recent <span className="text-secondary">Experiences</span>
            </h2>
          </Reveal>

          <motion.div
            variants={fadeIn("up")}
            transition={transition()}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: false }}
            className="flex items-center gap-4 justify-center xl:justify-start flex-col sm:flex-row"
          >
            <Button
              secondary={activeCategory === "professional" ? true : false}
              onClick={() => setActiveCategory("professional")}
            >
              Professional Experience
            </Button>
            <Button
              secondary={activeCategory === "project" ? true : false}
              onClick={() => setActiveCategory("project")}
            >
              Personal Projects
            </Button>
          </motion.div>
          <motion.div
            variants={fadeIn("up")}
            transition={transition()}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: false }}
            className="flex gap-12 mt-12 flex-wrap justify-center"
          >
            {filterProjects().map((item) => (
              <Card imgSrc={item.img} title={item.title} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

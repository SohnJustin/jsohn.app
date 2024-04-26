import projectsPageImg from "../assets/projects-page.svg";
import jsLogo from "../assets/JavaScriptLOGO.png";
import mernLogo from "../assets/MERNstack.png";
import firebaseLogo from "../assets/firebaseLogo.png";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/variants";
import { transition } from "../utils/transition";
import { Reveal } from "../components";

const Skills = () => {
  return (
    <div
      id="skills"
      className="min-h-screen flex items-center justify-center"
      style={{
        background: `url(${projectsPageImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-screen-2xl flex flex-row lg:gap-10 w-full lg:py-16 lg:px-12">
        <div className="flex-1 sm:w-full md:w-full">
          <Reveal>
            <h2 className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] font-bold text-textPrimary md:text-center">
              My <span className="text-secondary">Skills</span>
            </h2>
          </Reveal>
          <Reveal>
            <ul className=" xl:text-xl lg:text-xl text-textPrimary mt-6 list-disc list-inside ">
              <li>
                <strong>Programming Languages:</strong> JavaScript/TypeScript,
                C++, Python, Java, SQL
              </li>
              <li>
                <strong>Front-End: </strong> React, Next.js, HTML / HTML5, CSS3,
                Bootstrap, TailwinCSS, MaterialUI, jQuery, Styled-Components,
                React-Native
              </li>
              <li>
                <strong>Back-End:</strong> Node.js, Express.js, PHP, JSON Web
                Tokens
              </li>
              <li>
                <strong className="text-secondary">APIs:</strong> REST /
                RESTful, GraphQL, Axios
              </li>
              <li>
                <strong className="text-secondary">Databases</strong>{" "}
                PostgresSQL, MongoDB, Firebase / Firestone, Supabase, NoSQL
              </li>
              <li>
                <strong className="text-secondary">DevOps: </strong> Amazon Web
                Services (AWS), CI/CD, Google Cloud Platform
              </li>
              <li>
                <strong className="text-secondary">Tools:</strong> Github,
                Visual Studio Code, Trello, Figma, NPM, Git version control,
                ChatGPT, Google Excel, Vercel
              </li>
              <li>
                <strong>Soft Skills: </strong> Problem-solving, Communication
                Skills, Team collaboration, Software Testing, Troubleshooting
                and Debugging, Agile methodology ( Scrum / Kanban), Adaptive,
                Analytical, Innovative, Flexible,
              </li>
            </ul>
          </Reveal>
        </div>

        <motion.div
          variants={fadeIn("up")}
          transition={transition()}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: false }}
          className="md:flex-1 flex flex-wrap justify-center items-center gap-4 "
        >
          <img
            src={jsLogo}
            alt="JavaScript Logo"
            className="w-40 h-40 hidden md:block md:text-w-max"
          />
          <img
            src={mernLogo}
            alt="MERN Stack Logo"
            className="w-80 h-40 hidden md:block  "
          />
          <img
            src={firebaseLogo}
            alt="Firebase Logo"
            className="w-83 h-40 hidden md:block "
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;

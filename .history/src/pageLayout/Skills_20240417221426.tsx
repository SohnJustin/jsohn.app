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
      <div className="max-w-screen-2xl flex flex-row gap-10 w-full py-16 px-12">
        <div className="flex-1">
          <Reveal>
            <h2 className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] font-bold text-textPrimary">
              My <span className="text-secondary">Skills</span>
            </h2>
            <ul className="text-lg text-textPrimary mt-6 list-disc list-inside">
              <li>
                <strong>Programming Languages:</strong> JavaScript/TypeScript,
                C++, Python, SwiftUI
              </li>
              <li>
                <strong>Frameworks/Databases:</strong> MERN Stack, React Native,
                Firebase
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
          className="flex-1 flex flex-wrap justify-center items-center gap-4"
        >
          <img src={jsLogo} alt="JavaScript Logo" className="w-40 h-40" />
          <img src={mernLogo} alt="MERN Stack Logo" className="w-80 h-40" />
          <img src={firebaseLogo} alt="Firebase Logo" className="w-83 h-40" />
          {/* Add more images as needed */}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;

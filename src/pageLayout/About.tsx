// assets
import aboutPageImg from "../assets/about-me-page.svg";
import aboutIllustration from "../assets/about-illustration.svg";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Laugh from "../assets/LAUGH.png";

// components
import { Reveal } from "../components";

// framer-motion
import { motion } from "framer-motion";

// utils
import { fadeIn, scale } from "../utils/variants";
import { transition } from "../utils/transition";

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen flex items-center justify-center relative"
      style={{
        background: `url(${aboutPageImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="max-w-screen-2xl flx flex-col xl:flex-row xl:justify-between 
      items-center xl:items-start gap-12 w-full py-16 px-12"
      >
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] font-bold text-textPrimary">
            About <span className="text-secondary"> me</span>
          </h2>

          <p className="text-center xl:text-start text-base sm:text-lg text-textSecondary">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit
            repellendus eos iure soluta eum sapiente blanditiis amet id?
            Perferendis doloremque repudiandae dolor repellat, officia tempora
            nemo necessitatibus laboriosam est natus rerum. Officia totam
            recusandae animi. Illo eaque recusandae cupiditate eligendi
            dignissimos maxime harum sint fugiat officia iste eum numquam
            temporibus, officiis atque ullam reprehenderit molestias dicta
            deserunt earum dolore autem eius impedit! Provident, officia culpa!
            Sint maiores pariatur voluptate. Odit, soluta animi. Consequuntur
            doloremque in voluptatibus necessitatibus. Minus nihil deleniti
            aspernatur aut sequi perferendis laudantium a eius accusantium
            voluptatum vel corrupti adipisci quaerat, facere minima iure error,
            cupiditate velit quam!
          </p>
          <div className="flex items-center justify-center xl:justify-start gap-6">
            <a href="https://www.facebook.com/justin.sohn.14" target="_blank">
              <FacebookIcon
                style={{ fontSize: 50 }}
                className="text-secondary"
              />
            </a>
            <a href="https://www.instagram.com/justinsohn2/" target="_blank">
              <InstagramIcon
                style={{ fontSize: 50 }}
                className="text-secondary"
              />
            </a>
            <a href="https://www.linkedin.com/in/sohnjustin/" target="_blank">
              <LinkedInIcon
                style={{ fontSize: 50 }}
                className="text-secondary"
              />
            </a>
            <a href="https://github.com/SohnJustin" target="_blank">
              <GitHubIcon style={{ fontSize: 50 }} className="text-secondary" />
            </a>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <img
              src={Laugh}
              alt=""
              className="w-full max-w-[300px] xl:max-w-[500px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

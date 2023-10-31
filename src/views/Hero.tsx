// assets
import homePageImg from "../assets/home-page.svg";
import homePageIllustation from "../assets/hero-illustration.svg";
import downloadIcon from "../assets/download-btn-icon.svg";
import Wave from "../assets/WAVE.png";

// components
import { Button } from "../components";

// react-simple-typewriter
import { Typewriter } from "react-simple-typewriter";

// framer-motion
import { motion } from "framer-motion";

// utils
import { transition } from "../utils/transition";
import { fadeIn, scale } from "../utils/variants";

const Hero = () => {
  return (
    <div
      id="home"
      className="min-h-screen flex items-center justify-center relative"
      style={{
        background: `url(${homePageImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between items-center xl:items-start gap-12 w-full py-16 px-12">
        <div className="w-full xl:w-fit">
          <h1 className="w-full xl:w-fit text-center xl:text-start text-4xl sm:text-6xl lg:text-8xl font-bolt text-textPrimary uppercase">
            {" "}
            Justin Sohn
            <br />
            <span className="text-secondary">
              <Typewriter
                words={[
                  "Software Engineer",
                  "Computer Science",
                  "Software Developer",
                  "Web Developer",
                  "Programmer",
                  "React Developer",
                  "Freelancer",
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <div className="my-12 flex flex-col sm:flex-row items-center gap-6 justify-center xl:justify-start">
            <Button secondary>Contact Me</Button>
            <Button icon={downloadIcon}>Download CV</Button>
          </div>
        </div>
        <img
          src={Wave}
          alt=""
          className=" xl:w-full max-w-full sm:max-w-[400px]"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-full h=[1px] bg-divider"></div>
    </div>
  );
};

export default Hero;

import homePageImg from "../assets/home-page.svg";
import downloadIcon from "../assets/download-btn-icon.svg";
import Wave from "../assets/WAVE.png";
import MyResume from "../assets/JustinSohnResume.pdf";
import { Button } from "../components";
import { animateScroll } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { transition } from "../utils/transition";
import { fadeIn } from "../utils/variants";
//import { offset } from "@popperjs/core";

const Home = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = MyResume;
    link.download = "JustinSohnResume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const scrollToSection = () => {
    const targetSection = document.getElementById("contact");
    if (targetSection) {
      const offset = targetSection.offsetTop;

      animateScroll.scrollTo(offset, { smooth: true });
    }
  };
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
          <motion.h1
            variants={fadeIn("up")}
            transition={transition()}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: false }}
            className="w-full xl:w-fit text-center xl:text-start text-4xl sm:text-6xl lg:text-8xl font-bolt text-textPrimary uppercase"
          >
            {" "}
            Justin Sohn
            <br />
            <span className="text-secondary">
              <Typewriter
                words={[
                  "Frontend Developer",
                  "Full Stack Developer",
                  "React Developer",
                  "Gamer",
                  "Software Engineer",
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </motion.h1>
          <motion.div
            variants={fadeIn("up")}
            transition={transition()}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: false }}
            className="my-12 flex flex-col sm:flex-row items-center gap-6 justify-center xl:justify-start"
          >
            <Button onClick={scrollToSection} secondary>
              Contact Me
            </Button>
            <Button onClick={handleDownload} icon={downloadIcon}>
              Download CV
            </Button>
          </motion.div>
        </div>
        <motion.img
          variants={fadeIn("right")}
          transition={transition()}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: false }}
          src={Wave}
          alt=""
          className=" xl:w-full max-w-full sm:max-w-[400px]"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-full h=[1px] bg-divider"></div>
    </div>
  );
};

export default Home;

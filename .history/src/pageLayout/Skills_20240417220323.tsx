import projectsPageImg from "../assets/projects-page.svg";
import jsLogo from "../assets/javascript-logo.svg"; // Add paths to your images
import tsLogo from "../assets/typescript-logo.svg";
import cppLogo from "../assets/cpp-logo.svg";
import pythonLogo from "../assets/python-logo.svg";
import swiftUILogo from "../assets/swiftui-logo.svg";
import { Button, Card, Reveal } from "../components";

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
            <div className="text-lg text-textPrimary mt-6">
              <h3>Programming Languages:</h3>
              <p>JavaScript/TypeScript, C++, Python, SwiftUI</p>
              <h3>Frameworks/Databases:</h3>
              <p>MERN Stack, React Native, Firebase</p>
            </div>
          </Reveal>
        </div>
        <div className="flex-1 flex flex-wrap justify-center items-center gap-4">
          <img src={jsLogo} alt="JavaScript Logo" className="w-20 h-20" />
          <img src={tsLogo} alt="TypeScript Logo" className="w-20 h-20" />
          <img src={cppLogo} alt="C++ Logo" className="w-20 h-20" />
          <img src={pythonLogo} alt="Python Logo" className="w-20 h-20" />
          <img src={swiftUILogo} alt="SwiftUI Logo" className="w-20 h-20" />
          {/* Add more images as needed */}
        </div>
      </div>
    </div>
  );
};

export default Skills;

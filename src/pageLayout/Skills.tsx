import projectsPageImg from "../assets/projects-page.svg";
import { Button, Card, Reveal } from "../components";

const Skills = () => {
  return (
    <div
      id="skills"
      className="min-h-screen"
      style={{
        background: `url(${projectsPageImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-screen-2xl w-full py-16 px-12 mx-auto">
        <div className="flex-1 flex flex-col gap-4">
          <Reveal>
            <h2 className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] font-bold text-textPrimary">
              My <span className="text-secondary">skills</span>
            </h2>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Skills;

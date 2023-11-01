import uiUxOne from "../assets/ui-ux-project-one.svg";
import uiUxTwo from "../assets/ui-ux-project-two.svg";
import uiUxThree from "../assets/ui-ux-project-three.svg";
import webOne from "../assets/web-project-one.jpeg";
import webTwo from "../assets/web-project-two.jpeg";
import webThree from "../assets/web-project-three.jpeg";

interface Project {
  id: number;
  category: string;
  img: string;
  title: string;
}
export const projects = [
  {
    id: 0,
    category: "uiUx",
    img: uiUxOne,
    title: "Professional Experience 1",
  },
  {
    id: 1,
    category: "uiUx",
    img: uiUxTwo,
    title: "Professional Experience 2",
  },
  {
    id: 2,
    category: "uiUx",
    img: uiUxThree,
    title: "Professional Experience 3",
  },
  {
    id: 3,
    category: "web",
    img: webOne,
    title: "Spotify Full Stack Clone",
  },
  {
    id: 4,
    category: "web",
    img: webTwo,
    title: "Project 2 ",
  },
  {
    id: 5,
    category: "web",
    img: webThree,
    title: "Project 3",
  },
];

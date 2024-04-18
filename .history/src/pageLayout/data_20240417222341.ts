import CSUFWordle from "../assets/CSUF-Wordle-Play-Page.png";
import CSUFDatabase from "../assets/CSUFDatabase.png";
import SpotifyClone from "../assets/spotify_logo.png";
import KeyBored from "../assets/keybored.jpg";
import MumbleInstantMessenger from "../assets/MumbleInstantMessenger.png";

/*
interface Project {
  id: number;
  category: string;
  img: string;
  title: string;
}
*/
export const projects = [
  {
    id: 0,
    category: "professional",
    img: CSUFWordle,
    title: "CSUF Themed Wordle",
  },
  {
    id: 1,
    category: "professional",
    img: CSUFDatabase,
    title: "Student Database Website",
  },
  {
    id: 2,
    category: "professional",
    img: MumbleInstantMessenger,
    title: "Mumble Instant Messenger",
  },

  {
    id: 3,
    category: "project",
    img: SpotifyClone,
    title: "Spotify Full Stack Clone",
  },

  {
    id: 4,
    category: "project",
    img: KeyBored,
    title: "KeyBored",
  },
  /*
  {
    id: 5,
    category: "project",
    img: webThree,
    title: "Project 3",
  },
  */
];

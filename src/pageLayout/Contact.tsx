// assets
import contactPageImg from "../assets/contact-page.svg";
import contactIllustration from "../assets/contact-illustration.svg";
import Angry from "../assets/ANGRY.png";

// components
import { Button, LabelInput, Reveal } from "../components";

// framer-motion
import { motion } from "framer-motion";

// utils
import { fadeIn, scale } from "../utils/variants";
import { transition } from "../utils/transition";

const Contact = () => {
  return (
    <div
      id="contact"
      className="min-h-screen flex items-center justify-center relative"
      style={{
        background: `url(${contactPageImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between
        items-center xl:items-start gap-12 w-full pt-20 pb-20 sm:pb-16 px-12"
      >
        <div className="flex-1 flex flex-col gap-4">
          <h2
            className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] 
                font-bold text-textPrimary"
          >
            Have any questions for <span className="text-secondary"> me?</span>
          </h2>
          <img
            src={Angry}
            alt=""
            className=" place-content-stretch max-h-[348px] max-w-[350px]"
          />
        </div>
        <div className="flex-1 flex flex-col gap-6 w-full max-w-[696px]">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <LabelInput labelText="Your name" placeholderText="Name" />
            <LabelInput labelText="Your email" placeholderText="Email" />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <LabelInput
              labelText="Your message"
              placeholderText="Message"
              textarea
            />
          </div>

          <Button secondary>Send Message</Button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-divider" />
    </div>
  );
};

export default Contact;

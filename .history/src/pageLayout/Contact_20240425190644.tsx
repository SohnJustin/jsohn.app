import contactPageImg from "../assets/contact-page.svg";
import Laugh from "../assets/LAUGH.png";
import { LabelInput, Reveal } from "../components";
import { motion } from "framer-motion";
import { fadeIn, scale } from "../utils/variants";
import { transition } from "../utils/transition";
import emailjs from "@emailjs/browser";
import { FormEvent, useRef } from "react";

// interface ContactFormData {
//   user_name: string;
//   user_email: string;
//   message: string;
// }

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  // const handleSendButtonClick = () => {
  //   if (form.current) {
  //     form.current.dispatchEvent(new Event("submit"));
  //   }
  // };
  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    if (form.current) {
      //const formData: ContactFormData = new FormData(form.current) as any;

      emailjs
        .sendForm(
          "service_6xquh79",
          "template_6st1yon",
          form.current,
          "0Vy8NjbnZKeFAaa6L"
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("Your message has been sent!");
          },
          (error) => {
            console.log(error.text);
            alert("Your message has not been sent!");
          }
        );
    }
  };
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
        <div className=" flex-1 flex flex-col gap-4">
          <Reveal>
            <h2
              className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] 
                font-bold text-textPrimary"
            >
              Have any questions for{" "}
              <span className="text-secondary"> me?</span>
            </h2>
          </Reveal>
          <div className=" m-auto text-center">
            <motion.img
              variants={scale()}
              transition={transition()}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: false }}
              src={Laugh}
              alt=""
              className=" max-h-[348px] max-w-[350px]"
            />
          </div>
        </div>
        <motion.div
          variants={fadeIn("up")}
          transition={transition()}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: false }}
          className="flex-1 flex flex-col gap-6 w-full max-w-[696px]"
        >
          {
            <form ref={form} onSubmit={sendEmail}>
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
                <button
                  type="submit"
                  value="Send"
                  className=" hover:bg-hoverSecondary  bg-secondary : bg-accent transition-all ease-linear duration-300 py-2.5 px-8 rounded-full text-white text-base sm:text-lg text-bold relative w-full sm:w-fit"
                >
                  Send Message
                </button>
              </div>
            </form>
          }
          {/*
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      */}
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-divider" />
    </div>
  );
};

export default Contact;

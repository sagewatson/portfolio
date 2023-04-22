import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let's build something
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#5651e5]">Sage</span>
          </h1>
          <h1 className="py-4 text-gray-700">A Full-Stack Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            As a Full-Stack Developer, I specialize in creating engaging and
            user-friendly web applications and software that leave a lasting
            impression on visitors. With strong knowledge in frontend languages
            and plenty of experience in backend technologies (with a great eye
            for design too), I am well versed to take on any challenge.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/sage-watson/"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </Link>
            <Link target="_blank" href="https://github.com/sagewatson">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </Link>
            <Link target="_blank" href="mailto:sagewatson8@gmail.com">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
            <Link
              target="_blank"
              href="  https://docs.google.com/document/d/1-CHbQdXX4Qe_3e9Q1RbKqctMPzwMu_Ak8Q-9_JJUksI/edit?usp=sharing"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

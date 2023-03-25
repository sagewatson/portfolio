import Link from "next/link";
import React from "react";
import sageImg from "../public/assets/sage.JPG";
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">Sage Watson</p>
          <p className="py-2 text-gray-600">
            Since I was young, I've always had a passion for technology. Getting
            my first computer at 5, I was obssessed. In 2021, I decided that I
            wanted to turn my passion into my career. Studying at Developers
            Institute, I graduated in 2022 with a Diploma in Web Development.
            Shortly after, I was hired by Developers Institute and working as a
            Junior Trainer, helping people in the same shoes as I was, while
            also working on projects with the company.
          </p>
          <p className="py-2 text-gray-600">
            Fast forward to today, and I've had the opportunity to work on
            various projects and expand my skills to new technologies. I've
            worked on things such as creating an e-commerce website using the
            Stripe and Woocommerce API, creating sites for brands and working in
            teams using Agile practices. With much more to learn and a lot more
            to create, I'm ready and keen to keep growing.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            <Link href="#projects">Check out some of my latest projects</Link>
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image className="rounded-xl" src={sageImg} />
        </div>
      </div>
    </div>
  );
};

export default About;

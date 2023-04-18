import React from "react";
import Image from "next/image";
import watsonsPpImg from "../public/assets/projects/watsons-pp.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const watsonsPp = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={watsonsPpImg}
          alt="Watson's Panel and Paint Image"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Watson's Panel & Paint</h2>
          <h3>Next.js/React.Js</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project </p>
          <h2>Overview</h2>
          <p>
            Watson's Panel & Paint is a website I created for my Dad, who owns a
            panel and paint workshop. In this project I used React and Next.js,
            along with CSS and a bit of JS. It is just a simple one page app
            with also a contact page. As there is no backend for this app, I
            used a service called Formspree to manage the contact forms.
          </p>
          <Link href="https://watsonspp.co.nz/" target="_blank">
            <button className="px-8 py-2 mt-4 mr-8">Live Site</button>
          </Link>
          <Link
            href="https://github.com/sagewatson/watsons-panel-and-paint"
            target="_blank"
          >
            <button className="px-8 py-2 mt-4">Code</button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Next.js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> CSS
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline curser-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default watsonsPp;

import React from "react";
import Image from "next/image";
import DiImg from "../public/assets/projects/di.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const DevelopersInstitute = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={DiImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Developers Institute</h2>
          <h3>Next.js/React.Js</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project </p>
          <h2>Overview</h2>
          <p>
            Developers Institute is where I currently work and for a few months
            I got the opportunity to work on their brand website. I got to work
            in a team with one other person using Agile and Lean practices. Our
            task was to transfer the existing website over to a new CMS
            (Prismic). My specific tasks included updating legacy code,
            refactoring CSS to SCSS and to use CSS modules, creating pages,
            components and things called 'Slices' using Prismic's Slice Machine
            and rendering the content on the page.
          </p>
          <Link href="https://www.developers.ac.nz/" target="_blank">
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
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
                <RiRadioButtonFill className="pr-1" /> Next.Js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Primsic CMS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> SCSS
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

export default DevelopersInstitute;

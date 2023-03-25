import React from "react";
import Image from "next/image";
import fusseyImg from "../public/assets/projects/fussey.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const fussey = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={fusseyImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Fussey</h2>
          <h3>Next.js/React.Js/Tailwind/Stripe API</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project </p>
          <h2>Overview</h2>
          <p>
            Fussey is a project I worked on soley by myself. It's a clothing
            brand I created in 2022 and decided to use my development skills to
            create the website for it. It uses Wordpress/Woocommerce/Stripe in
            the backend and Next.js/React.js in the frontend. This was certainly
            the most challenging project I've worked on as I had to do things
            such as using Tailwind and Next.js for the first time while also
            using things like the Stripe and Woocommerce API, GraphQL and more.
          </p>
          <Link href="https://fussey.co" target="_blank">
            <button className="px-8 py-2 mt-4 mr-8">Live Site</button>
          </Link>
          <Link
            href="https://github.com/sagewatson/woocommerce-fussey-theme"
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
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Next.Js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Stripe API
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Woocommerce API
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

export default fussey;

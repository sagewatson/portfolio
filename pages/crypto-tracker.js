import React from "react";
import Image from "next/image";
import cryptoImg from "../public/assets/projects/crypto-tracker.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const CryptoTracker = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={cryptoImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Crypto Tracker App</h2>
          <h3>React.Js/CSS/Crypto API</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project </p>
          <h2>Overview</h2>
          <p>
            Crypto Tracker was a fun personal desktop application project that I
            created. The purpose of this project was to create an app which
            accurately tracked the price of cryptocurrency coins, while
            displaying them in an easy to use UI. I also wanted a section which
            highlighted trending coins which have had a big increase in price in
            the last 24 hours.
          </p>
          <Link
            href="https://crypto-tracker-0tna.onrender.com/"
            target="_blank"
          >
            <button className="px-8 py-2 mt-4 mr-8">Live Site</button>
          </Link>
          <Link href="https://github.com/sagewatson/crypto-app" target="_blank">
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
                <RiRadioButtonFill className="pr-1" /> CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> CoinGecko API
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

export default CryptoTracker;

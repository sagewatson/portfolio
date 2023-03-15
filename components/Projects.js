import Image from "next/image";
import Link from "next/link";
import React from "react";
import fusseyImg from "../public/assets/projects/fussey.png";
import watsonsPpImg from "../public/assets/projects/watsons-pp.png";
import ProjectItem from "./ProjectItem";
import diImg from "../public/assets/projects/di.png";

const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Fussey"
            backgroundImg={fusseyImg}
            projectUrl="/fussey"
          />
          <ProjectItem
            title="Watson's Panel & Paint"
            backgroundImg={watsonsPpImg}
            projectUrl="/watsons-pp"
          />
          <ProjectItem
            title="Developer's Institute"
            backgroundImg={diImg}
            projectUrl="/watsons-pp"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

import React from "react";
import Image from "next/image";

interface Props {
  src: string;
  title: string;
  description: string;
  techImages: string[];
}

const ProjectCard = ({ src, title, description, techImages }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] transform transition-transform duration-500 hover:scale-105 group">
      <div className="relative overflow-hidden">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full object-contain transition-brightness duration-500 group-hover:brightness-[0.3]"
        />

        <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white py-2 px-4 rounded-lg text-black font-semibold transition-opacity duration-500 opacity-0 group-hover:opacity-100">
          Visit
        </button>
      </div>

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-end mb-4">
        {techImages.map((image, index) => (
          <Image
            key={index}
            src={image}
            width={40}
            height={40}
            objectFit="contain"
            alt={`Tech ${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;

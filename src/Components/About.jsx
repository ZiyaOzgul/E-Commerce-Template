import React from "react";
import { UilLinkedin, UilGithub } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
export const About = () => {
  return (
    <div
      style={{
        backgroundImage: `url('https://akademi.icerikbulutu.com/wp-content/uploads/2020/10/hakkimizda-yazisi.jpg')`,
      }}
      className="h-screen  w-full bg-no-repeat bg-scroll bg-cover flex items-center justify-start"
    >
      <div className="flex container items-start justify-start flex-col space-y-6 lg:space-y-12 w-1/3">
        <h1 className="font-bold text-4xl text-white text-center mx-auto font-open">
          Biz Kimiz
        </h1>
        <p className="font-medium text-lg px-12">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
          recusandae necessitatibus dolore deleniti iure tempora deserunt
          suscipit mollitia, esse sint dolores, soluta, fugit quis repellat
          nesciunt pariatur expedita rem perferendis! Lorem ipsum, dolor sit
          amet consectetur adipisicing elit. Aspernatur impedit corporis dolor
          quis dolore error dolorem, saepe harum voluptatem! Nobis fugiat
          temporibus minus enim sed quia excepturi earum, voluptatum inventore.
        </p>
        <div className="flex items-center justify-evenly space-x-6 lg:space-x-12 w-full">
          <a target="_blank" href="https://github.com/ZiyaOzgul">
            <UilGithub className="h-10 w-16 text-gray-700 hover:text-gray-600 transition-all hover:scale-125 ease-in-out duration-500"></UilGithub>
          </a>
          <a
            href="https://www.linkedin.com/in/ziya-%C3%B6zg%C3%BCl-93816a260/"
            target="_blank"
          >
            <UilLinkedin className="h-10 w-16  text-blue-900 hover:scale-125 hover:text-blue-700 transition-all ease-in-out duration-500"></UilLinkedin>
          </a>
        </div>
      </div>
    </div>
  );
};

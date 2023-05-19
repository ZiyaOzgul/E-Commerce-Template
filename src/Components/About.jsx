import React from "react";

export const About = () => {
  return (
    <div
      style={{
        backgroundImage: `url('https://akademi.icerikbulutu.com/wp-content/uploads/2020/10/hakkimizda-yazisi.jpg')`,
      }}
      className="h-screen  w-full bg-no-repeat bg-scroll bg-cover flex items-center justify-start"
    >
      <div className="flex container items-start justify-start flex-col space-y-6 lg:space-y-12 w-1/3">
        <h1 className="font-bold text-4xl text-white text-center mx-auto">
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
      </div>
    </div>
  );
};

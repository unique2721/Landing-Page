import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl lg:text-7xl text-center tracking-wide">
        VirtualR build tools{" "}
        <span className=" bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          for developers
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>
      <div>
        <button className="flex justify-center space-x-4 my-10">
          <a
            className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
            href="#"
          >
            Start for free
          </a>
          <a className="py-3 px-4 mx-3 border rounded-md" href="#">
            Documentation
          </a>
        </button>
      </div>
    </div>
  );
};

export default Hero;

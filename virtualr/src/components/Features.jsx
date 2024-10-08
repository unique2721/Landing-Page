import { features } from "../constants/constants";

const Features = () => {
  return (
    <div
      id="feature"
      className="relative mt-20 border-b border-neutral-800 min-h-[800px]"
    >
      <div className="text-center">
        <span className=" bg-neutral-900 text-orange-500 uppercase text-lg font-medium px-2 py-1 h-6 tracking-wider">
          Feature
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl mt-10 lg:mt-20 tracking-wide">
          Easily build{" "}
          <span className=" bg-gradient-to-r from-orange-500 to bg-orange-800 text-transparent bg-clip-text">
            your code
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap  mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex mx-6 p-2 justify-center items-center w-10 h-10  bg-neutral-900 text-orange-700 rounded-full ">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                <p className="text-md mb-20 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;

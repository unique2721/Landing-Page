import { features, pricingOptions } from "../constants/constants";
import { CheckCircle2 } from "lucide-react";

const Pricing = () => {
  return (
    <div className="mt-20">
      <h1 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider">
        Pricing
      </h1>
      <div className="flex flex-wrap">
        {pricingOptions.map((pricingOption, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="border border-neutral-700 rounded-xl p-10">
              <p className="text-4xl mb-8">
                {pricingOption.title}{" "}
                {pricingOption.title === "Pro" ? (
                  <span className=" text-xl bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text mb-4 ml-2">
                    (Most Popular)
                  </span>
                ) : null}
              </p>
              <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">
                  {pricingOption.price}
                </span>
                <span className="text-neutral-400 tracking-tight">/Month</span>
              </p>
              <ul>
                {pricingOption.features.map((feature, index) => (
                  <li key={index} className="flex  mt-8">
                    <CheckCircle2 />
                    <span className="ml-2"> {feature}</span>
                  </li>
                ))}
              </ul>
              <button className=" inline-flex justify-center items-center mt-20 w-full border border-orange-800 rounded-md p-3 tracking-tight hover:bg-orange-900 transition duration-200">
                Subscribe
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;

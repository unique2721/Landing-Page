import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/images/code.jpg";
import { checklistItems } from "../constants/constants";
const Workflow = () => {
  return (
    <div id="workflow" className="mt-20">
      <h1 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Accelerate your{" "}
        <span className=" bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          coding workflow.
        </span>{" "}
      </h1>
      <div className="flex flex-wrap justify-center items-center">
        <div className="w-full lg:w-1/2 p-2">
          <img className=" " src={codeImg} alt="codeImg" />
        </div>
        <div className=" pt-12 w-full lg:w-1/2">
          {checklistItems.map((checklistItem, index) => (
            <div key={index} className=" flex mb-12">
              <div className=" text-green-500 mx-6 h-10 w-10 p-2 justify-center items-center rounded-full bg-neutral-900">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{checklistItem.title}</h5>
                <p className=" text-md text-neutral-500">
                  {checklistItem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;

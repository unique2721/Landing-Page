import { testimonials } from "../constants/constants";
import profile from "../assets/images/profile.jpeg";
const Testimonials = () => {
  return (
    <div className="mt-20">
      <h1 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider">
        What people are saying
      </h1>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="border border-neutral-700 rounded-md p-4 ">
              <p className="text-sm text-neutral-400 mb-8 mx-4">
                {testimonial.text}
              </p>
              <div className="flex items-center mb-4">
                <img
                  className="w-10 h-10 mr-4 rounded-full"
                  src={testimonial.image}
                  alt=""
                />
                <span>{testimonial.company}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

import { FaCheckDouble } from "react-icons/fa6";
import { GrSend } from "react-icons/gr";
import { HiOutlineHome } from "react-icons/hi";
const IntroduceSection = () => {
  return (
    <section className="mb-8 p-[5%] bg-[#272231] rounded-2xl text-left">
      {" "}
      <div className="h-full flex flex-col justify-between ">
        <div className="w-fit h-min rounded-full flex space-x-2 justify-between place-items-center py-2 px-5 border-[1px] border-[#3d3049bb] text-[#d67f92] mb-12">
          <HiOutlineHome className="size-4" />
          <h3 className="text-xs text-gray-300"> INTRODUCE</h3>
        </div>
        <div className="w-full flex justify-between">
          <div className="w-[60%] h-fit">
            <h1 className="text-5xl font-bold">I Craft The</h1>
            <div className="h-[15%]"></div>
            <h1 className="text-5xl font-bold text-[#d67f92]">
              Digital Landscape
            </h1>{" "}
            <br />
            <p className="mt-2 text-lg text-gray-400">
              I am a{" "}
              <span className="font-semibold text-gray-300">
                Frontend Developer
              </span>{" "}
              at heart, creating features that are best suited for the job at
              hand.
            </p>
            <br />
            <div className="flex space-x-2 place-items-center text-[#d67f92]">
              <FaCheckDouble className="size-4" />
              <p className="text-base text-gray-400">Available for work</p>
            </div>
            <br />
            {/* Hire Me Button */}
            <button className="mt-2 px-8 py-4 bg-[#c57284] rounded-full">
              <div className="flex space-x-2 place-items-center font-normal text-gray-300">
                <GrSend className="size-5" />
                <p className="text-base font-normal text-gray-300">HIRE ME</p>
              </div>
            </button>
          </div>
          <div className="w-[30%]"></div>
        </div>
        <div className="w-full h-[20%] mt-4"></div>
      </div>
    </section>
  );
};

export default IntroduceSection;

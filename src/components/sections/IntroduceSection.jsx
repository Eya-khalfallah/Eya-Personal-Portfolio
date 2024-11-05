import { FaCheckDouble } from "react-icons/fa6";
import { GrSend } from "react-icons/gr";
import { LuHome } from "react-icons/lu";
import Eya from "../../assets/eyachan.png";
const IntroduceSection = () => {
  return (
    <section className="mb-8 p-[6%] bg-[#272231] rounded-2xl text-left" id="home">
      {" "}
      <div className="h-full flex flex-col justify-between ">
        <div className="w-fit h-min rounded-full flex space-x-2 justify-between place-items-center py-2 px-5 border-[1px] border-[#3d3049bb] text-[#d67f92] mb-10">
          <LuHome className="size-4" />
          <h3 className="text-xs font-medium text-gray-100"> INTRODUCE</h3>
        </div>
        <div className="w-full flex justify-between">
          <div className="w-[60%] h-fit">
            <h1 className="text-5xl font-bold">I Craft The</h1>
            <div className="h-[15%]"></div>
            <h1 className="text-5xl font-bold text-[#d67f92]">
              Digital Landscape
            </h1>{" "}
            <br />
            <p className="mt-2 text-lg text-zinc-400 leading-relaxed">
              I am a dedicated{" "}
              <span className="font-semibold text-gray-200">
                Frontend Developer
              </span>{" "} and {" "}
              <span className="font-semibold text-gray-200">
                Backend Developer
              </span>{" "}
              with a passion for IoT and embedded systems. My work brings functionality and aesthetics together, ensuring the best user experience and technical robustness.
            </p>
            <br />
           
            <br />
            {/* Hire Me Button */}
            <button className="mt-2 px-8 py-4 bg-[#c57284] rounded-full">
              <div className="flex space-x-2 place-items-center font-normal text-gray-100">
                <GrSend className="size-5" />
                <p className="text-base font-normal text-gray-200">HIRE ME</p>
              </div>
            </button>
          </div>
          <div className="flex h-full top-0 w-[40%]">
            <img
              src={Eya}
              alt="Profile"
              className=" top-14 absolute h-[52%]"
            />
          </div>
        </div>
        <div className="w-full h-[20%] mt-4"></div>
      </div>
    </section>
  );
};

export default IntroduceSection;

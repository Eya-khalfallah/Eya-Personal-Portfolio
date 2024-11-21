import { FaCheckDouble } from "react-icons/fa6";
import { GrSend } from "react-icons/gr";
import { LuHome } from "react-icons/lu";
import Eya from "../../assets/eyaakh.png";
const IntroduceSection = () => {
  const handleHireMeClick = () => {
    window.location.href = "mailto:eya.khalfallah@ensi-uma.tn";
  };

  return (
    <section
      className="mb-8 p-6 sm:p-6 md:p-[6%] bg-[#272231] rounded-2xl text-left"
      id="home"
    >
      <div className="h-full flex flex-col justify-between">
        <div className="w-fit h-min rounded-full flex space-x-2 justify-between place-items-center py-2 px-5 border-[1px] border-[#3d3049bb] text-[#d67f92] mb-6 sm:mb-10">
          <LuHome className="w-4 h-4" />
          <h3 className="text-xs font-medium text-gray-100"> INTRODUCE</h3>
        </div>
        <div className="w-full flex justify-between">
          <div className="w-full lg:w-[60%] h-fit">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              I Craft The
            </h1>
            <div className="h-2 sm:h-4"></div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#d67f92]">
              Digital Landscape
            </h1>{" "}
            <br />
            <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed">
              I am a dedicated{" "}
              <span className="font-semibold text-gray-200">
                Frontend Developer
              </span>{" "}
              and{" "}
              <span className="font-semibold text-gray-200">
                Backend Developer
              </span>{" "}
              with a passion for IoT and embedded systems. My work brings
              functionality and aesthetics together, ensuring the best user
              experience and technical robustness.
            </p>

            {/* Hire Me Button */}
            <button
              onClick={handleHireMeClick}
              className="mt-6 px-6 sm:px-8 py-3 sm:py-4 bg-[#c57284] rounded-full hover:bg-[#b56475] transition-color"
            >
              <div className="flex space-x-2 place-items-center font-normal text-gray-100">
                <GrSend className="w-4 h-4 sm:w-5 sm:h-5" />
                <p className="text-sm sm:text-base font-normal text-gray-200">
                  HIRE ME
                </p>
              </div>
            </button>
          </div>
          <div className="hidden justify-center top-0 right-0 overflow-hidden lg:flex lg:w-[40%] lg:h-[52%]">
            <img src={Eya} alt="Profile" className=" w-[75%] " />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroduceSection;

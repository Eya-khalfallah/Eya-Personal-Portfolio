import { SlCloudDownload } from "react-icons/sl";
import { FaCheckDouble } from "react-icons/fa6";
import Typewriter from "typewriter-effect";
import EyaImage from "../assets/eyaaaa.png";

const phrases = ["Web Developer ", "Mobile Developer ", "UI/UX Designer "];

const SelfCard = () => {
  return (
    <div className="w-full max-w-md mx-auto xl:w-[22vw] mb-8 mt-16 xl:mt-0 xl:mb-0 xl:h-screen xl:left-[2vw] xl:p-4 flex flex-col justify-center items-center xl:fixed relative">
      <div className="hidden xl:block xl:fixed xl:top-[2vh] xl:left-[3vw] mb-4">
        <h2 className="text-2xl xl:text-[2vw] font-bold">
          {"<"}
          <span className="text-[#d67f92]">Eya</span>
          <span className="">{" />"}</span>
        </h2>
      </div>
      <div className="w-full p-3 bg-[#272231] rounded-2xl">
        <div className=" pt-2 flex flex-col items-center ">
          {/* Profile Picture */}
          <div className="rounded-full border-8 border-[#3d3049bb] w-32 h-32 sm:w-40 sm:h-40 mb-4">
            <img
              src={EyaImage}
              alt="Profile"
              className=" rounded-full w-full h-full object-contain "
            />
          </div>

          {/* Profile Info */}
          <div className="mb-2 ">
            <h2 className="text-lg font-semibold">Eya KHALFALLAH</h2>

            <p className="text-[#d67f92]">
              <Typewriter
                options={{
                  strings: phrases,
                  autoStart: true,
                  loop: true,
                  delay: 30, // Faster typing speed
                  deleteSpeed: 20, // Faster deleting speed
                  pauseFor: 2000, // Pause on each phrase before deleting
                }}
              />
            </p>

            {/* <p className="text-[#d67f92]">{phrases[index]}</p> */}
          </div>
          <div className="w-[90%] h-[1px] bg-[#3d3049bb]"></div>

          {/* Additional Info */}
          <div className="mt-2 w-full space-y-2">
            <div className="flex justify-between pl-4 pr-4">
              <p>Residence:</p>
              <span className="text-zinc-400">Tunisia</span>
            </div>
            <div className="flex justify-between pl-4 pr-4">
              <p>City:</p>
              <span className="text-zinc-400">Sfax</span>
            </div>
            <div className="flex justify-between pl-4 pr-4">
              <p>Age:</p>
              <span className="text-zinc-400">24</span>
            </div>
          </div>

          <div className=" w-full bg-[#3d3049bb] p-3 rounded-2xl mt-2">
            <div className="flex flex-col items-start text-[#d67f92]  ">
              <div className="flex items-start text-left space-x-2 text-[#d67f92] mb-2">
                <FaCheckDouble className="w-4 h-4 mt-1 flex-shrink-0" />
                <p className="text-base sm:text-base text-zinc-400 m-0 leading-none">
                  Available for final-year internship opportunities
                </p>
              </div>

              <div className="flex items-start text-left space-x-2 text-[#d67f92] mb-2">
                <FaCheckDouble className="w-4 h-4 mt-1 flex-shrink-0" />
                <p className="text-base sm:text-base text-zinc-400 m-0 leading-none">
                  Available for freelance projects
                </p>
              </div>

              <div className="flex items-start text-left space-x-2 text-[#d67f92]">
                <FaCheckDouble className="w-4 h-4 mt-1 flex-shrink-0" />
                <p className="text-base sm:text-base text-zinc-400 m-0 leading-none">
                  Open to full-time roles after graduation
                </p>
              </div>
            </div>
            {/* Download CV Button */}
            <a
              href="CV_Eya_Khalfallah.pdf"
              download="Eya_Khalfallah_CV.pdf"
              className="block mt-3 w-full py-3 bg-[#c57284] rounded-full text-center transition-colors duration-300 hover:bg-[#b3657a] focus:outline-none focus:ring-2 focus:ring-[#d67f92] focus:ring-opacity-50">
              {" "}
              <div className="flex items-center justify-center space-x-2">
                <span className="text-base font-medium text-gray-200">DOWNLOAD CV</span>
                <SlCloudDownload className="w-5 h-5 text-gray-200" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelfCard;

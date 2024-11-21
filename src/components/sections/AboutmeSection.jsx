import { LuUser2 } from "react-icons/lu";

const AboutmeSection = () => {
  return (
    <section className="mb-8 p-4 sm:p-6 md:p-[6%] bg-[#272231] rounded-2xl text-left" id="about">
      <div className="h-full flex flex-col justify-between">
        <div className="w-fit h-min rounded-full flex space-x-2 justify-between items-center py-2 px-5 border border-[#3d3049bb] text-[#d67f92] mb-6 sm:mb-10">
          <LuUser2 className="w-4 h-4" />
          <h3 className="text-xs font-medium text-gray-100">ABOUT ME</h3>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 sm:mb-8">
          About <span className="font-bold text-[#d67f92]">Me</span>
        </h1>
        <p className="w-full sm:w-[90%] mt-2 text-base sm:text-lg leading-relaxed text-zinc-400 mb-6 sm:mb-10">
          Hi, I'm <span className="font-normal text-white">Eya KHALFALLAH</span>
          , a computer science student at the National School of Computer
          Science{" ("}
          <span className="font-normal text-white"> ENSI </span>
          {" )"}, specializing in <span className="font-normal text-white">IoT</span> and passionate about creating
          impactful tech solutions. With experience in{" "}
          <span className="font-normal text-white">mobile</span> and{" "}
          <span className="font-normal text-white">web development</span>, and{" "}
          <span className="font-normal text-white">UI/UX design</span>, I enjoy
          problem-solving and tackling real-world challenges. Currently
          expanding my skills in{" "}
          <span className="font-normal text-white">embedded systems</span> and{" "}
          <span className="font-normal text-white">IoT</span>, Im driven by
          curiosity and a commitment to continuous growth.
        </p>
        <div className="w-full flex flex-col sm:flex-row sm:space-x-8 md:space-x-24">
          <div className="flex flex-col mb-4 sm:mb-0">
            <div className="flex space-x-4 sm:space-x-8">
              <div className="flex flex-col space-y-4">
                <p className="text-sm sm:text-base text-zinc-400">LinkedIn</p>
                <p className="text-sm sm:text-base text-zinc-400">Languages</p>
              </div>
              <div className="flex flex-col space-y-4">
                <p className="text-sm sm:text-base text-zinc-400">:</p>
                <p className="text-sm sm:text-base text-zinc-400">:</p>
              </div>
              <div className="flex flex-col space-y-4">
                <a
                  className="text-sm sm:text-base font-normal text-gray-100 hover:text-[#d67f92] transition-colors"
                  href="https://www.linkedin.com/in/eya-khalfallah/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Eya-khalfallah
                </a>
                <p className="text-sm sm:text-base font-normal text-gray-100">
                  Arabic, English, French
                </p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex space-x-4 sm:space-x-8">
              <div className="flex flex-col space-y-4">
                <p className="text-sm sm:text-base text-zinc-400">Email</p>
                <p className="text-sm sm:text-base text-zinc-400">GitHub</p>
              </div>
              <div className="flex flex-col space-y-4">
                <p className="text-sm sm:text-base text-zinc-400">:</p>
                <p className="text-sm sm:text-base text-zinc-400">:</p>
              </div>
              <div className="flex flex-col space-y-4">
                <p className="text-sm sm:text-base font-normal text-gray-100">
                  eya.khalfallah@ensi-uma.tn
                </p>
                <a
                  className="text-sm sm:text-base font-normal text-gray-100 hover:text-[#d67f92] transition-colors"
                  href="https://github.com/Eya-khalfallah"
                  target="_blank"
                  rel="noreferrer"
                >
                  Eya-khalfallah
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutmeSection;
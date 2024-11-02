import { HiOutlineUser } from "react-icons/hi";
const AboutmeSection = () => {
  return (
    <section className="mb-8 p-[6%] bg-[#272231] rounded-2xl text-left">
      <div className="h-full flex flex-col justify-between ">
        <div className="w-fit h-min rounded-full flex space-x-2 justify-between place-items-center py-2 px-5 border-[1px] border-[#3d3049bb] text-[#d67f92] mb-10">
          <HiOutlineUser className="size-4" />
          <h3 className="text-xs font-medium text-gray-100">ABOUT ME</h3>
        </div>
        <h1 className="text-5xl font-light mb-8">
          About <span className="text-5xl font-bold text-[#d67f92]">Me</span>
        </h1>
        <p className=" w-[90%] mt-2 text-lg leading-relaxed text-gray-300 mb-10">
          Hi, I’m{" "}
          <span className="font-semibold text-white">Eya KHALFALLAH</span>, a
          computer science student at the National School of Computer Science{" "}
          <span className="font-semibold text-white">(ENSI)</span>,
          specializing in <span>IoT</span> and passionate about creating
          impactful tech solutions. With experience in{" "}
          <span className="font-semibold text-white">
            mobile and web development
          </span>
          ,{" "}
          <span className="font-semibold text-white">
            backend architecture
          </span>
          , and{" "}
          <span className="font-semibold text-white">UI/UX design</span>, I
          enjoy problem-solving and tackling real-world challenges. Currently
          expanding my skills in{" "}
          <span className="font-semibold text-white">embedded systems</span>{" "}
          and <span className="font-semibold text-white">IoT</span>, I’m
          driven by curiosity and a commitment to continuous growth.
        </p>
        <div className="w-full flex space-x-24 ">
          <div className="flex flex-col ">
            <div className="flex space-x-8">
              <div className="flex flex-col space-y-3 ">
                {" "}
                <p className="text-base text-gray-300">Phone</p>
                <p className="text-base text-gray-300">LinkedIn</p>
                <p className="text-base text-gray-300">Languages</p>
              </div>
              <div className="flex flex-col space-y-3 ">
                {" "}
                <p className="text-base text-gray-300">:</p>
                <p className="text-base text-gray-300">:</p>
                <p className="text-base text-gray-300">:</p>
              </div>
              <div className="flex flex-col space-y-3 ">
                {" "}
                <p className="text-base font-medium text-white">
                  +216 28 086 759
                </p>
                <p className="text-base font-medium text-white">
                  Eya-khalfallah
                </p>
                <p className="text-base font-medium text-white">
                  Arabic, English, French
                </p>
              </div>
            </div>
          </div>
          <div className="flex space-x-8">
            <div className="flex flex-col space-y-3 ">
              {" "}
              <p className="text-base text-gray-300">Email</p>
              <p className="text-base text-gray-300">GitHub</p>
            </div>
            <div className="flex flex-col space-y-3 ">
              {" "}
              <p className="text-base text-gray-300">:</p>
              <p className="text-base text-gray-300">:</p>
            </div>
            <div className="flex flex-col space-y-3 ">
              {" "}
              <p className="text-base font-medium text-white">
                eya.khalfallah@ensi-uma.tn
              </p>
              <p className="text-base font-medium text-white">
                Eya-khalfallah
              </p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default AboutmeSection;
3;

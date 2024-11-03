import { HiOutlineDocumentText } from "react-icons/hi";

const experiences = [
  {
    company: "Envato Market",
    period: "Mar, 2022 - Current",
    position: "Lead UX Designer",
    description:
      "Owing to advancements in product other designer technologies aute voluptate.",
  },
  {
    company: "Google",
    period: "2018 - 2022",
    position: "UX Designer",
    description:
      "Owing to advancements in product other designer technologies aute voluptate.",
  },
  {
    company: "Apple",
    period: "2014 - 2018",
    position: "Human Interface Designer",
    description:
      "Owing to advancements in product other designer technologies aute voluptate.",
  },
];
const ResumeSection = () => {
  return (
    <section className="mb-8 p-[6%] bg-[#272231] rounded-2xl text-left">
      <div className="h-full flex flex-col justify-between ">
        <div className="w-fit h-min rounded-full flex space-x-2 justify-between place-items-center py-2 px-5 border-[1px] border-[#3d3049bb] text-[#d67f92] mb-10">
          <HiOutlineDocumentText className="size-4" />
          <h3 className="text-xs font-medium text-gray-100"> RESUME </h3>
        </div>
        <h1 className="text-5xl font-light mb-8">
          Professional{" "}
          <span className="text-5xl font-bold text-[#d67f92]">Experience</span>
        </h1>
        <p className=" w-[90%] mt-2 text-lg leading-relaxed text-zinc-400 mb-10">
          I design products that are more than pretty. I make them shippable and
          usable, tempor non mollit dolor et do auter.
        </p>
        <div className=" w-full mb-8">
          {experiences.map((experience, index) => (
            <div key={index} className="relative flex text-left ">
              {/* Left div */}
              <div className="w-[30%] pr-6 text-left">
                <h3 className="font-semibold text-base">
                  {experience.company}
                </h3>
                <p className="text-zinc-400">{experience.period}</p>
              </div>

              {/* Middle Dot and Line */}
              <div className="flex flex-col items-center ">
                <div className="w-6 h-6 z-20 bg-zinc-400 bg-opacity-20 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#d67f92] rounded-full"></div>
                </div>
                {index <= experiences.length - 1 && (
                  <div className="w-px h-full bg-gray-500 bg-opacity-20 absolute"></div>
                )}
              </div>

              {/* Right div */}
              <div className="w-[60%] mb-12 pl-8">
                <h3 className="text-2xl font-bold text-gray-100 mb-3">
                  {experience.position}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {experience.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <h1 className="text-5xl font-light mb-8">
          My{" "}
          <span className="text-5xl font-bold text-[#d67f92]">Education</span>
        </h1>
        <p className=" w-[90%] mt-2 text-lg leading-relaxed text-zinc-400 mb-10">
          I design products that are more than pretty. I make them shippable and
          usable, tempor non mollit dolor et do auter.
        </p>

        <div className=" w-full ">
          {experiences.map((experience, index) => (
            <div key={index} className="relative flex text-left ">
              {/* Left div */}
              <div className="w-[30%] pr-6 text-left">
                <h3 className="font-semibold text-base">
                  {experience.company}
                </h3>
                <p className="text-zinc-400">{experience.period}</p>
              </div>

              {/* Middle Dot and Line */}
              <div className="flex flex-col items-center ">
                <div className="w-6 h-6 z-20 bg-zinc-400 bg-opacity-20 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#d67f92] rounded-full"></div>
                </div>
                {index <= experiences.length - 1 && (
                  <div className="w-px h-full bg-gray-500 bg-opacity-20 absolute"></div>
                )}
              </div>

              {/* Right div */}
              <div className="w-[60%] mb-12 pl-8">
                <h3 className="text-2xl font-bold text-gray-100 mb-3">
                  {experience.position}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {experience.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ResumeSection;

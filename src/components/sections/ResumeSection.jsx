import { LuFileText } from "react-icons/lu";

const experiences = [
  {
    company: "Znet-IT",
    period: "Sep, 2024 - Current",
    position: "Frontend Developer (Freelance)",
    description: "Developing responsive and user-friendly web interfaces using React, ensuring high performance and an optimal user experience.",
  },
  {
    company: "Znet-IT",
    period: "Jun, 2024 - Aug, 2024",
    position: "Mobile Developer (Internship)",
    description: "Created dynamic mobile applications in Flutter, focusing on delivering seamless user experiences and functional, cross-platform designs.",
  },
  {
    company: "I-WAY",
    period: "Jul, 2023 - Aug, 2023",
    position: "Backend Developer (Internship)",
    description: "Designed and implemented backend architecture and RESTful APIs with Node.js and MongoDB, enhancing app functionality and scalability.",
  },
];

const education = [
  {
    company: "National School of Computer Science (ENSI)",
    period: "2022 - Current",
    position: "National Diploma of Engineering in Computer Science",
    description: "Focused on advanced computer science topics, including software engineering, data structures, and algorithms, with hands-on projects and research.",
  },
  {
    company: "Higher Institute of Applied Sciences and Technology (IssatMh)",
    period: "2019 - 2022",
    position: "Diploma of First Cycle University Studies",
    description: "Gained a strong foundation in computer science fundamentals, covering programming, mathematics, and introductory engineering concepts.",
  }
];

const ResumeSection = () => {
  return (
    <section className="mb-8 p-4 sm:p-6 md:p-[6%] bg-[#272231] rounded-2xl text-left" id="resume">
      <div className="h-full flex flex-col justify-between">
        <div className="w-fit h-min rounded-full flex space-x-2 justify-between items-center py-2 px-5 border border-[#3d3049bb] text-[#d67f92] mb-6 sm:mb-10">
          <LuFileText className="w-4 h-4" />
          <h3 className="text-xs font-medium text-gray-100">RESUME</h3>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 sm:mb-8">
          Professional{" "}
          <span className="font-bold text-[#d67f92]">Experience</span>
        </h1>
        <p className="w-full sm:w-[90%] mt-2 text-base sm:text-lg leading-relaxed text-zinc-400 mb-6 sm:mb-10">
          I've applied my skills in real-world projects through freelance work and internships, gaining practical experience in creating impactful digital solutions.
        </p>
        <div className="w-full mb-8">
          {experiences.map((experience, index) => (
            <div key={index} className="relative flex flex-col sm:flex-row text-left mb-8 sm:mb-0">
              <div className="w-full sm:w-[30%] pr-0 sm:pr-6 text-left mb-2 sm:mb-0">
                <h3 className="font-semibold text-base">
                  {experience.company}
                </h3>
                <p className="text-zinc-400">{experience.period}</p>
              </div>

              <div className="hidden sm:flex flex-col items-center">
                <div className="w-6 h-6 z-20 bg-zinc-400 bg-opacity-20 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#d67f92] rounded-full"></div>
                </div>
                {index < experiences.length - 1 && (
                  <div className="w-px h-full bg-gray-500 bg-opacity-20 absolute"></div>
                )}
              </div>

              <div className="w-full sm:w-[60%] mb-6 sm:mb-12 pl-0 sm:pl-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-100 mb-2 sm:mb-3">
                  {experience.position}
                </h3>
                <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
                  {experience.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 sm:mb-8">
          My{" "}
          <span className="font-bold text-[#d67f92]">Education</span>
        </h1>
        <p className="w-full sm:w-[90%] mt-2 text-base sm:text-lg leading-relaxed text-zinc-400 mb-6 sm:mb-10">
          My studies have built a strong foundation in computer science, combining theory with hands-on experience in engineering and problem-solving.
        </p>

        <div className="w-full">
          {education.map((experience, index) => (
            <div key={index} className="relative flex flex-col sm:flex-row text-left mb-8 sm:mb-0">
              <div className="w-full sm:w-[30%] pr-0 sm:pr-6 text-left mb-2 sm:mb-0">
                <h3 className="font-semibold text-base">
                  {experience.company}
                </h3>
                <p className="text-zinc-400">{experience.period}</p>
              </div>

              <div className="hidden sm:flex flex-col items-center">
                <div className="w-6 h-6 z-20 bg-zinc-400 bg-opacity-20 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-[#d67f92] rounded-full"></div>
                </div>
                {index < education.length - 1 && (
                  <div className="w-px h-full bg-gray-500 bg-opacity-20 absolute"></div>
                )}
              </div>

              <div className="w-full sm:w-[60%] mb-6 sm:mb-12 pl-0 sm:pl-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-100 mb-2 sm:mb-3">
                  {experience.position}
                </h3>
                <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
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
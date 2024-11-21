import { LuBriefcase, LuRadioTower, LuAppWindow, LuPalette, LuCode } from "react-icons/lu";

const ServicesSection = () => {
  const services = [
    {
      number: "01",
      title: "Web Development",
      description: "I build responsive websites that deliver seamless user experiences and meet your business goals.",
      icon: LuAppWindow,
    },
    {
      number: "02",
      title: "Mobile Development",
      description: "I create intuitive mobile applications for iOS and Android, ensuring engaging and user-friendly experiences.",
      icon: LuCode,
    },
    {
      number: "03",
      title: "UI/UX Design",
      description: "I design user-centered interfaces that are visually appealing and easy to navigate, enhancing user satisfaction.",
      icon: LuPalette,
    },
    {
      number: "04",
      title: "IoT",
      description: "I develop IoT solutions that combine functionality and aesthetics, creating products that connect the digital and physical worlds.",
      icon: LuRadioTower,
    },
  ];
  
  return (
    <section className="mb-8 p-4 sm:p-6 md:p-[6%] bg-[#272231] rounded-2xl text-left" id="services">
      <div className="h-full flex flex-col justify-between">
        <div className="w-fit h-min rounded-full flex space-x-2 justify-between items-center py-2 px-5 border border-[#3d3049bb] text-[#d67f92] mb-6 sm:mb-10">
          <LuBriefcase className="w-4 h-4" />
          <h3 className="text-xs font-medium text-gray-100">SERVICES</h3>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 sm:mb-8">
          My <span className="font-bold text-[#d67f92]">Services</span>
        </h1>
        <p className="w-full sm:w-[90%] mt-2 text-base sm:text-lg leading-relaxed text-zinc-400 mb-6 sm:mb-10">
          Each of these services is thoughtfully crafted to reflect my passion for technology and design, aiming to not only meet your unique requirements but also enhance your digital presence and drive meaningful results.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
          {services.map((service) => (
            <div
              key={service.number}
              className="relative px-6 sm:px-8 py-6 rounded-2xl border border-[#3d3049bb] overflow-hidden group hover:border-[#d67f92] transition-colors"
            >
              <div 
                className="absolute top-6 sm:top-8 left-6 sm:left-10 text-5xl sm:text-7xl font-bold leading-none text-transparent"
                style={{
                  WebkitTextStroke: '2px #A1A1AA',
                  textStroke: '2px #D1D5DB'
                }}
              >
                {service.number}
              </div>
              <div className="relative z-10">
                <div className="flex justify-end">
                  <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#d67f92]" />
                </div>
                <div className="mt-10 sm:mt-14">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
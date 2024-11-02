import { HiOutlineBriefcase } from "react-icons/hi";
import { Rocket, Megaphone, Palette, Code } from "lucide-react"
const ServicesSection = () => {
  const services = [
    {
      number: "01",
      title: "UI/UX Design",
      description: "I design products that are more than pretty. I make them shippable.",
      icon: Palette,
    },
    {
      number: "02",
      title: "Web Development",
      description: "I design products that are more than pretty. I make them shippable.",
      icon: Code,
    },
    {
      number: "03",
      title: "SEO / Marketing",
      description: "I design products that are more than pretty. I make them shippable.",
      icon: Rocket,
    },
    {
      number: "04",
      title: "Branding & Strategy",
      description: "I design products that are more than pretty. I make them shippable.",
      icon: Megaphone,
    },
  ]

  return (
    <section className="mb-8 p-[6%] bg-[#272231] rounded-2xl text-left">
      <div className="h-full flex flex-col justify-between ">
        <div className="w-fit h-min rounded-full flex space-x-2 justify-between place-items-center py-2 px-5 border-[1px] border-[#3d3049bb] text-[#d67f92] mb-10">
          <HiOutlineBriefcase className="size-4" />
          <h3 className="text-xs font-medium text-gray-100"> SERVICES</h3>
        </div>
        <h1 className="text-5xl font-light mb-8">
          My <span className="text-5xl font-bold text-[#d67f92]">Services</span>
        </h1>
        <p className=" w-[90%] mt-2 text-lg leading-relaxed text-gray-300 mb-10">
          I design products that are more than pretty. I make them shippable and
          usable, tempor non mollit dolor et do auter.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {services.map((service) => (
          <div
            key={service.number}
            className="relative p-6 rounded-lg  border border-[#3d3049bb] overflow-hidden group hover:border-[#d67f92] transition-colors"
          >
            <div 
              className="absolute top-4 left-6 text-7xl font-bold leading-none text-transparent"
              style={{
                WebkitTextStroke: '2px #A1A1AA',
                textStroke: '2px #D1D5DB.'
              }}
            >
              {service.number}
            </div>
            <div className="relative z-10">
              <div className="flex justify-end">
                <service.icon className="w-6 h-6 text-[#d67f92]" />
              </div>
              <div className="mt-16">
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed">{service.description}</p>
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

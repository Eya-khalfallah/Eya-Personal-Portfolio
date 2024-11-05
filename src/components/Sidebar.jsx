import { useEffect, useState } from "react";
import { LuHome,  LuUser2, LuGraduationCap, LuFileText,LuMail, LuMessageSquare,LuLayoutDashboard,LuBriefcase,} from "react-icons/lu";
import Logo from "../assets/EyaKlogo.png";
const sections = ["home", "about", "services", "skills", "resume", "projects", "testimonials", "contact"];

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const options = { threshold: 0.5 }; // Trigger when 50% of section is visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const isActive = (section) => activeSection === section ? "text-[#d67f92]" : "";

  return (
    <div
      className="fixed right-[6vw] h-screen transform  flex flex-col items-center justify-center "
      style={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
    >
      <div className="border-[1px]  absolute flex flex-col items-center justify-between p-4 rounded-full" style={{ borderColor: "rgba(255, 255, 255, 0.2)" }}>
        {/* Main Icon at the Top */}
      <div
        className="flex items-center justify-center w-14 h-14 p-1 rounded-full border-[1px] border-zinc-600"
      >
        <img src={Logo} alt="Logo" className=" w-24 h-24 object-contain" />
      </div>

      {/* Navigation Icons */}
      <nav className="flex flex-col items-center justify-between my-[3vh] space-y-[3vh] text-gray-100">
        <a href="#home" style={{ textDecoration: "none", color: "inherit" }}>
          <LuHome className={`hover:text-[#d67f92] size-6 cursor-pointer ${isActive("home")}`} />
        </a>
        <a href="#about" style={{ textDecoration: "none", color: "inherit" }}>
          <LuUser2 className={`hover:text-[#d67f92] size-6 cursor-pointer ${isActive("about")}`} />
        </a>
        <a href="#services" style={{ textDecoration: "none", color: "inherit" }}>
          <LuBriefcase className={`hover:text-[#d67f92] size-6 cursor-pointer ${isActive("services")}`} />
        </a>
        <a href="#skills" style={{ textDecoration: "none", color: "inherit" }}>
          <LuGraduationCap className={`hover:text-[#d67f92] size-6 cursor-pointer ${isActive("skills")}`} />
        </a>
        <a href="#resume" style={{ textDecoration: "none", color: "inherit" }}>
          <LuFileText className={`hover:text-[#d67f92] size-6 cursor-pointer ${isActive("resume")}`} />
        </a>
        <a href="#projects" style={{ textDecoration: "none", color: "inherit" }}>
          <LuLayoutDashboard className={`hover:text-[#d67f92] size-6 cursor-pointer ${isActive("projects")}`} />
        </a>
        <a href="#testimonials" style={{ textDecoration: "none", color: "inherit" }}>
          <LuMessageSquare className={`hover:text-[#d67f92] size-6 cursor-pointer ${isActive("testimonials")}`} />
        </a>
        <a href="#contact" style={{ textDecoration: "none", color: "inherit" }}>
          <LuMail className={`hover:text-[#d67f92] size-6 cursor-pointer ${isActive("contact")}`} />
        </a>
      </nav>

     
      </div>
    </div>
  );
};

export default Sidebar;

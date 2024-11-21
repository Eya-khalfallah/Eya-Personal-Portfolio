import { useEffect, useState } from "react";
import {
  HomeIcon,
  User2Icon,
  GraduationCapIcon,
  FileTextIcon,
  MailIcon,
  MessageSquareIcon,
  LayoutDashboardIcon,
  BriefcaseIcon,
  MenuIcon,
} from "lucide-react";
import Logo from "../assets/EyaKlogo.png";
const sections = [
  "home",
  "about",
  "services",
  "skills",
  "resume",
  "projects",
  "testimonials",
  "contact",
];

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const options = { threshold: 0.5 };
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

  const isActive = (section) =>
    activeSection === section ? "text-[#d67f92] bg-[#3d3049]" : "text-gray-100";

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const NavItem = ({ href, icon: Icon, isActive }) => (
    <a
      href={href}
      className={`flex items-center justify-center rounded-full w-10 h-10 hover:bg-[#3d3049] transition-colors duration-300 ${isActive(
        href.slice(1)
      )}`}
      onClick={() => setIsMobileMenuOpen(false)}>
      <Icon className={`w-6 h-6 ${isActive(href.slice(1))}`} />
    </a>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="w-full flex justify-between top-0 right-0 left-0 fixed z-50 p-2 bg-[#3d3049e8] xl:hidden">
        <div className="flex justify-center items-center gap-x-2 p-1 ">
        <div className="flex items-center justify-center w-12 h-12 rounded-full ">
          <img src={Logo} alt="Logo" className="w-20 h-20 object-contain" />
        </div>
        <h2 className="text-2xl lg:text-[2vw] font-bold">
          
          <span className="text-gray-100">Eya</span>
          
        </h2>
        </div>
        
        <div className="flex items-center justify-center p-1 ">
          <MenuIcon className="w-8 h-8 text-gray-100" onClick={toggleMobileMenu} />
        
        </div>
        
      </div>

      {/* Sidebar for larger screens */}
      <div className="hidden xl:flex fixed right-[4vw] h-screen transform items-center justify-center">
        <div className="border border-[rgba(255,255,255,0.2)] flex flex-col items-center justify-between p-4 py-7 rounded-full ">
          {/* Main Icon at the Top */}
          <div className="flex items-center justify-center w-14 h-14 p-1 rounded-full border border-zinc-600 mb-6">
            <img src={Logo} alt="Logo" className="w-24 h-24 object-contain" />
          </div>

          {/* Navigation Icons */}
          <nav className="flex flex-col items-center justify-between space-y-3 text-gray-100">
            <NavItem href="#home" icon={HomeIcon} isActive={isActive} />
            <NavItem href="#about" icon={User2Icon} isActive={isActive} />
            <NavItem
              href="#services"
              icon={BriefcaseIcon}
              isActive={isActive}
            />
            <NavItem
              href="#skills"
              icon={GraduationCapIcon}
              isActive={isActive}
            />
            <NavItem href="#resume" icon={FileTextIcon} isActive={isActive} />
            <NavItem
              href="#projects"
              icon={LayoutDashboardIcon}
              isActive={isActive}
            />
            <NavItem
              href="#testimonials"
              icon={MessageSquareIcon}
              isActive={isActive}
            />
            <NavItem href="#contact" icon={MailIcon} isActive={isActive} />
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-[#272231] z-40 flex items-center justify-center transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}>
        <nav className="flex flex-col items-center justify-center space-y-6 text-gray-100">
          <NavItem href="#home" icon={HomeIcon} isActive={isActive} />
          <NavItem href="#about" icon={User2Icon} isActive={isActive} />
          <NavItem href="#services" icon={BriefcaseIcon} isActive={isActive} />
          <NavItem
            href="#skills"
            icon={GraduationCapIcon}
            isActive={isActive}
          />
          <NavItem href="#resume" icon={FileTextIcon} isActive={isActive} />
          <NavItem
            href="#projects"
            icon={LayoutDashboardIcon}
            isActive={isActive}
          />
          <NavItem
            href="#testimonials"
            icon={MessageSquareIcon}
            isActive={isActive}
          />
          <NavItem href="#contact" icon={MailIcon} isActive={isActive} />
        </nav>
      </div>
    </>
  );
};

export default Sidebar;

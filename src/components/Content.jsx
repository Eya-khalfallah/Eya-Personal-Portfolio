import IntroduceSection from "./sections/IntroduceSection";
import AboutmeSection from "./sections/AboutmeSection";
import ServicesSection from "./sections/ServicesSection";
import SkillsSection from "./sections/SkillsSection";
import ResumeSection from "./sections/ResumeSection";
import ProjectsSection from "./sections/ProjectsSection";
import TestominialSection from "./sections/TestimonialSection";
import ContactSection from "./sections/ContactSection";

const Content = () => {
  return (
    <div className="w-[53%] h-full p-4 top-10 right-[17%] absolute z-10">
      {/* Introduce Section */}

      <IntroduceSection />

      {/* About me Section */}

      <AboutmeSection />

      {/* Services Sections */}

      <ServicesSection />

      {/* SKILLS  Sections */}

      <SkillsSection />

      {/* RESUME  Sections */}

      <ResumeSection />

      {/* PROJECTS Sections */}
      <ProjectsSection />

      {/* TESTIMONIAL  Sections */}
      <TestominialSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default Content;

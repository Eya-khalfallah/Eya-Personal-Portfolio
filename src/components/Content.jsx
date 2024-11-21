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
    <div className="sm:w-screen xl:w-[60vw] w-screen h-full sm:p-2 xl:p-4 xl:top-10 xl:right-[13vw] relative xl:absolute  mb-8">
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

      <div className="pt-8 xl:py-8">
        <h2 className="text-base text-zinc-400 text-center ">
          Eya Khalfallah © {new Date().getFullYear()}
        </h2>
      </div>
    </div>
  );
};

export default Content;

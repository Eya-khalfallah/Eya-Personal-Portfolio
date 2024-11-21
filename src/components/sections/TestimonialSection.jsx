import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, MessageSquare } from 'lucide-react';

const testimonials = [
  {
    name: "Alex Johnson",
    position: "Developer",
    text: "Working with Eya is a game-changer. Their coding expertise and commitment to quality make every project a success.",
  },
  {
    name: "Mily Martin",
    position: "CEO-itTheme",
    text: "Eya exceeds expectations with top-tier coding skills. Reliable, collaborative, and a true asset to any project. Highly recommended",
  },
  {
    name: "Sarah Wilson",
    position: "Project Manager",
    text: "The team at Eya delivers exceptional results. Their attention to detail and technical prowess is unmatched.",
  },
  {
    name: "James Brown",
    position: "Tech Lead",
    text: "Eya brings innovation and reliability to every project. Their solutions are always scalable and future-proof.",
  },
  {
    name: "Emily Davis",
    position: "UX Designer",
    text: "Partnering with Eya has elevated our development process. Their expertise in modern technologies is impressive.",
  },
  {
    name: "Michael Chen",
    position: "Product Owner",
    text: "Eya consistently delivers high-quality solutions. Their team's technical knowledge and professionalism are outstanding.",
  },
];

export default function Component() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleTestimonials, setVisibleTestimonials] = useState(1);
  const carouselRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + visibleTestimonials) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      (prev - visibleTestimonials + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setVisibleTestimonials(3);
      } else if (window.innerWidth >= 768) {
        setVisibleTestimonials(2);
      } else {
        setVisibleTestimonials(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="mb-8 p-4 sm:p-6 md:p-[6%] bg-[#272231] rounded-2xl text-left" id="testimonials">
      <div className="h-full flex flex-col justify-between">
        <div className="w-fit h-min rounded-full flex space-x-2 justify-between items-center py-2 px-5 border border-[#3d3049bb] text-[#d67f92] mb-6 sm:mb-10">
          <MessageSquare className="w-4 h-4" />
          <h3 className="text-xs font-medium text-gray-100">TESTIMONIAL</h3>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 sm:mb-8">
          What <span className="font-bold text-[#d67f92]">People Say</span>
        </h1>
        <p className="w-full sm:w-[90%] mt-2 text-base sm:text-lg leading-relaxed text-zinc-400 mb-6 sm:mb-10">
          Here's what clients and colleagues say about working with me. Their feedback reflects my commitment to quality, collaboration, and delivering results.
        </p>

        <div className="w-full max-w-6xl mt-4 text-gray-100 overflow-hidden">
          <motion.div 
            ref={carouselRef}
            className="flex"
            animate={{
              x: `${Math.floor(currentIndex / visibleTestimonials) * -100}%`
            }}
            transition={{
              type: "tween", 
              ease: "easeInOut",
              duration: 0.6,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full md:w-1/2 xl:w-1/3 px-4"
              >
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gray-400"></div>
                  <p className="text-zinc-400 text-sm sm:text-lg">
                    {testimonial.text.split("Eya").map((part, i, arr) => (
                      <React.Fragment key={i}>
                        {part}
                        {i < arr.length - 1 && (
                          <span className="text-[#d67f92]">Eya</span>
                        )}
                      </React.Fragment>
                    ))}
                  </p>
                  <div>
                    <h3 className="font-semibold text-lg sm:text-xl">
                      {testimonial.name}
                    </h3>
                    <p className="text-zinc-400 text-sm sm:text-base">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
          <div className="flex justify-center items-center space-x-4 mt-8 sm:mt-12">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full border hover:bg-[#3d3049bb] bg-[#272231] border-zinc-700 transition-colors"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-5 h-5 text-zinc-400" />
            </button>
            <span className="text-[#d67f92] font-medium">
              {Math.floor(currentIndex / visibleTestimonials) + 1}/
              {Math.ceil(testimonials.length / visibleTestimonials)}
            </span>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full border border-zinc-700 bg-[#272231] hover:border-zinc-500 transition-colors"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-5 h-5 text-zinc-400" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
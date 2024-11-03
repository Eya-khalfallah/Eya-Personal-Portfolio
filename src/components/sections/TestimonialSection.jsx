"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { HiOutlineChat } from "react-icons/hi";
const TestominialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="mb-8 p-[6%] bg-[#272231] rounded-2xl text-left">
      <div className="h-full flex flex-col justify-between ">
        <div className="w-fit h-min rounded-full flex space-x-2 justify-between place-items-center py-2 px-5 border-[1px] border-[#3d3049bb] text-[#d67f92] mb-10">
          <HiOutlineChat className="size-4" />
          <h3 className="text-xs font-medium text-gray-100"> TESTIMONIAL</h3>
        </div>
        <h1 className="text-5xl font-light mb-8">
          What{" "}
          <span className="text-5xl font-bold text-[#d67f92]">People Say</span>
        </h1>
        <p className=" w-[90%] mt-2 text-lg leading-relaxed text-zinc-400 mb-10">
          I design products that are more than pretty. I make them shippable and
          usable, tempor non mollit dolor et do auter.
        </p>

        <div className="w-full max-w-6xl mt-4  text-gray-100 overflow-hidden">
          <div className="relative">
          <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 50}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-1/2 px-4"
                >
                  <div className="flex flex-col items-center text-center space-y-6">
                    <div className="w-20 h-20 rounded-full bg-gray-400"></div>
                    <p className="text-zinc-400 text-lg">
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
                      <h3 className="font-semibold text-xl">
                        {testimonial.name}
                      </h3>
                      <p className="text-zinc-400">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center items-center space-x-4 mt-12">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full border hover:bg-[#3d3049bb] bg-[#272231] border-zinc-700 transition-colors"
              aria-label="Previous testimonials">
              <ChevronLeft className="w-5 h-5 text-zinc-400" />
            </button>
            <span className="text-[#d67f92] font-medium">
            {currentIndex + 1}/{testimonials.length}
            </span>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full border border-zinc-700 bg-[#272231] hover:border-zinc-500 transition-colors"
              aria-label="Next testimonials">
              <ChevronRight className="w-5 h-5 text-zinc-400" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestominialSection;

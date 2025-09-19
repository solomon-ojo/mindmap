"use client";
import { useRef, useEffect } from "react";
import TestimonialCards from "./TestimonialCards";

const TestimonialSlider = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftPos = useRef(0);
  let animationFrameId: number;

  // Arrow scroll handlers
  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -520, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 520, behavior: "smooth" });
  };

  // Drag-to-scroll logic
  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    const handleMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      startX.current = e.pageX - slider.offsetLeft;
      scrollLeftPos.current = slider.scrollLeft;
      slider.classList.add("cursor-grabbing");
    };

    const handleMouseLeave = () => {
      isDragging.current = false;
      slider.classList.remove("cursor-grabbing");
      cancelAnimationFrame(animationFrameId);
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      slider.classList.remove("cursor-grabbing");
      cancelAnimationFrame(animationFrameId);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current || !scrollRef.current) return;
      e.preventDefault();
      const x = e.pageX - scrollRef.current.offsetLeft;
      const walk = (x - startX.current) * 1.5;

      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      animationFrameId = requestAnimationFrame(() => {
        scrollRef.current!.scrollLeft = scrollLeftPos.current - walk;
      });
    };

    slider.addEventListener("mousedown", handleMouseDown);
    slider.addEventListener("mouseleave", handleMouseLeave);
    slider.addEventListener("mouseup", handleMouseUp);
    slider.addEventListener("mousemove", handleMouseMove);

    return () => {
      slider.removeEventListener("mousedown", handleMouseDown);
      slider.removeEventListener("mouseleave", handleMouseLeave);
      slider.removeEventListener("mouseup", handleMouseUp);
      slider.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="w-full ">
      {/* Scrollable Cards */}
      <div
        ref={scrollRef}
        className="w-full overflow-x-hidden scroll-smooth cursor-grab"
      >
        <div className=" w-full  flex gap-5 flex-nowrap">
          <div className=" min-w-full lg:min-w-[515px]">
            <TestimonialCards
              className=" w-full  lg:w-[515px] h-[203px] lg:h-[321px] flex justify-center items-center bg-[#E6DEF6] border border-[#8359D8] rounded-3xl"
              name=" Billy Harry"
              content="Billy has been an incredible asset to our team. His dedication,
          creativity, and ability to solve complex problems make him a standout
          contributor. We’re lucky to have him on board!"
              src="/icons/billy.png"
            />
          </div>
          <div className="min-w-full lg:min-w-[515px]">
            <TestimonialCards
              className=" w-full  lg:w-[515px] h-[203px] lg:h-[321px] flex justify-center items-center bg-[#FBF7D4] border border-[#EBD624] rounded-3xl"
              name="Belinda Walsh"
              content="Finding the perfect therapist through MindMap was a breeze! My sessions have reshaped my perspective, and I now feel empowered to manage my emotions like never before!"
              src="/icons/belinda.svg"
            />
          </div>
          <div className="min-w-full lg:min-w-[515px]">
            <TestimonialCards
              className=" w-full  lg:w-[515px] h-[203px] lg:h-[321px] flex justify-center items-center bg-[#EAFAEF] border border-[#53A06E] rounded-3xl"
              name="Belinda Walsh"
              content="Finding the perfect therapist through MindMap was a breeze! My sessions have reshaped my perspective, and I now feel empowered to manage my emotions like never before!"
              src="/icons/belinda.svg"
            />
          </div>
        </div>
      </div>

      {/* Arrow Controls */}
      <div className="w-full flex justify-center items-center mt-4">
        <div className="flex gap-4">
          <button
            onClick={scrollLeft}
            className=" flex items-center justify-center  w-[30px] h-[30px] lg:w-[54px] lg:h-[54px] bg-white text-primary-100 rounded-full cursor-pointer"
          >
            ←
          </button>
          <button
            onClick={scrollRight}
            className=" flex items-center justify-center w-[30px] h-[30px] lg:w-[54px] lg:h-[54px] bg-primary-100 text-white   rounded-full cursor-pointer"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;

import React, { useEffect, useState, useRef } from "react";
import Prograss from "@/components/Prograss";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";
import Page1 from "@/components/Page1";
import Page2 from "@/components/Page2";
import Page3 from "@/components/Page3";
import Page4 from "@/components/Page4";
import Page5 from "@/components/Page5";
import Page6 from "@/components/Page6";

import chat from "@/public/chatpng.png";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
const index = () => {
  const [scrollLength, setScrollLength] = useState(0);
  const maxScrollLength = 7000; // Set the total length of scroll in pixels

  const [count, setCount] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      // Update scrollLength based on the window scroll position
      const calculatedScrollLength = window.scrollY;

      // Set scrollLength to the smaller of calculatedScrollLength and maxScrollLength
      setScrollLength(Math.min(calculatedScrollLength, maxScrollLength));
    };

    // Attach the event listener to the scroll event
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollLength]);

  //data container

  const [head1, setHead1] = useState("Redefining");
  const [head2, setHead2] = useState("UX Strategy");
  const [head3, setHead3] = useState("and UI design");
  const [address1, setAddress1] = useState("ABC 456");
  const [address2, setAddress2] = useState(
    "We are the best web development company in the world"
  );
  const [address3, setAddress3] = useState("View Case Study");

  return (
    <>
      <div
        className={`w-full h-[700vh] relative sm:block hidden ${
          (scrollLength < 700 && " bg-[rgb(27,38,54)]") ||
          (scrollLength > 700 &&
            scrollLength < 1400 &&
            "bg-[rgb(25,39,148)]") ||
          (scrollLength > 1400 &&
            scrollLength < 2100 &&
            "bg-[rgb(46,24,153)]") ||
          (scrollLength > 2100 &&
            scrollLength < 2800 &&
            "bg-[rgb(156,101,219)]") ||
          (scrollLength > 2800 &&
            scrollLength < 3500 &&
            "bg-[rgb(16,107,181)]") ||
          (scrollLength > 3500 && "bg-[rgb(189,89,127)]")
        } duration-300`}
      >
        {scrollLength < 700 && <Page1 />}
        {scrollLength > 700 && scrollLength < 1400 && <Page2 />}
        {scrollLength > 1400 && scrollLength < 2100 && <Page3 />}
        {scrollLength > 2100 && scrollLength < 2800 && <Page4 />}
        {scrollLength > 2800 && scrollLength < 3500 && <Page5 />}
        {scrollLength > 3500 && <Page6 />}

        <Image
          src={chat}
          width={0}
          height={0}
          className="sm:fixed hidden sm:block  w-[60px] right-10 top-[80%] z-[4]"
        />
      </div>
      <div className="p-0 m-0 w-full h-screen sm:hidden">
        <Swiper
          pagination={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="w-full h-full"
        >
          <SwiperSlide className="bg-[rgb(27,38,54)]">
            <Page1 />
          </SwiperSlide>
          <SwiperSlide className="bg-[rgb(25,39,148)]">
            <Page2 />
          </SwiperSlide>
          <SwiperSlide className="bg-[rgb(46,24,153)]">
            <Page3 />
          </SwiperSlide>
          <SwiperSlide className="bg-[rgb(156,101,219)]">
            <Page4 />
          </SwiperSlide>
          <SwiperSlide className="bg-[rgb(16,107,181)]">
            <Page5 />
          </SwiperSlide>
          <SwiperSlide className="bg-[rgb(189,89,127)]">
            <Page6 />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default index;

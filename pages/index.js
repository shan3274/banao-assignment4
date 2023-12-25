import React, { useEffect, useState } from "react";
import Prograss from "@/components/Prograss";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";
import Page1 from "@/components/Page1";
import Page2 from "@/components/Page2";
import Page3 from "@/components/Page3";
import Page4 from "@/components/Page4";
import Page5 from "@/components/Page5";
import Page6 from "@/components/Page6";
const index = () => {
  const [bgcolor, setBgcolor] = useState("#294366");
  const [bgcolor2, setBgcolor2] = useState("27,38,54");

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
    if (scrollLength < 700) {
      setBgcolor("#294366");
      setBgcolor2("27,38,54");
    }
    if (scrollLength > 700 && scrollLength < 1400) {
      setBgcolor("#071169");
      setBgcolor2("25,39,148");
    }
    if (scrollLength > 1400 && scrollLength < 2100) {
      setBgcolor("#6245f5");
      setBgcolor2("46,24,153");
    }
    if (scrollLength > 2100 && scrollLength < 2800) {
      setBgcolor("#541899");
      setBgcolor2("156,101,219");
    }
    if (scrollLength > 2800 && scrollLength < 3500) {
      setBgcolor("#022745");
      setBgcolor2("16,107,181");
    }
    if (scrollLength > 3500 && scrollLength < 4200) {
      setBgcolor("#a10e46");
      setBgcolor2("189,89,127");
    }

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollLength, count]);

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
    <div
      className={`w-full h-[700vh] ${
        (scrollLength < 700 && " bg-[rgb(27,38,54)]") ||
        (scrollLength > 700 && scrollLength < 1400 && "bg-[rgb(25,39,148)]") ||
        (scrollLength > 1400 && scrollLength < 2100 && "bg-[rgb(46,24,153)]") ||
        (scrollLength > 2100 && scrollLength < 2800 && "bg-[rgb(156,101,219)]") ||
        (scrollLength > 2800 && scrollLength < 3500 && "bg-[rgb(16,107,181)]") ||
        (scrollLength > 3500 && "bg-[rgb(189,89,127)]")
      } duration-300`}
      onScroll={() => {
        setCount(count + 1);
      }}
    >
      {scrollLength < 700 && <Page1 bgcolor={bgcolor} />}
      {scrollLength > 700 && scrollLength < 1400 && <Page2 bgcolor={bgcolor} />}
      {scrollLength > 1400 && scrollLength < 2100 && (
        <Page3 bgcolor={bgcolor} />
      )}
      {scrollLength > 2100 && scrollLength < 2800 && (
        <Page4 bgcolor={bgcolor} />
      )}
      {scrollLength > 2800 && scrollLength < 3500 && (
        <Page5 bgcolor={bgcolor} />
      )}
      {scrollLength > 3500 && <Page6 bgcolor={bgcolor} />}
    </div>
  );
};

export default index;

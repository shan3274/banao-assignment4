import React from "react";
import { motion } from "framer-motion";

import img1 from "@/public/measure-total-body-weight-through-fitness-app.png";
import img2 from "@/public/nasa-fitness-tracking-mobile-app.png";
import Image from "next/image";

const Page2Right = () => {
  return (
    <div className="w-full h-full flex items-center justify-center z-[0]">
      <div className="sm:w-[90%] h-full flex items-center justify-center z-[1] relative top-[50px]">
        <motion.div
          animate={{ y: 50 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="flex items-end relative  top-[-50px]"
        >
          <Image
            src={img2}
            width={0}
            height={0}
            className="relative left-[0px] sm:left-[70px] w-[300px] top-[40px] "
          />
        </motion.div>
        <motion.div
          animate={{ y: -50 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="flex items-end relative"
        >
          <Image
            src={img1}
            width={0}
            height={0}
            className=" relative w-[220px] sm:bottom-[270px] sm:left-[120px] bottom-[150px] left-[0px]"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Page2Right;

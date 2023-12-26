import React from "react";
import { motion } from "framer-motion";

import img1 from "@/public/nexgtv-entertainment-mobile-app-development.png";
import img2 from "@/public/nexgtv-mobile-app-ui-design.png";
import Image from "next/image";

const Page1Right = () => {
  return (
    <div className="w-full h-full flex items-center justify-center z-[1]">
      <div className="sm:w-[90%] h-full flex items-center justify-center z-[1] relative top-[50px]">
        <motion.div
          animate={{ y: 50 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="sm:flex sm:items-end sm:relative absolute sm:left-0 sm:w-[450px] w-[300px] left-[100px] sm:top-[-50px] top-[-50px] "
        >
          <Image
            src={img2}
            width={0}
            height={0}
            className="sm:relative sm:left-[100px] sm:w-full   left-[100px]"
          />
        </motion.div>
        <motion.div
          animate={{ y: 100 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="flex items-end relative sm:top-[-100px] top-[-200px] sm:left-0 left-[-20%]"
        >
          <Image
            src={img1}
            width={0}
            height={0}
            className=" relative sm:w-full w-[270px] sm:left-0  left-[-60px]"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Page1Right;

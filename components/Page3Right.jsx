import React from "react";
import { motion } from "framer-motion";

import img1 from "@/public/veme-app-ui-design.png";
import img2 from "@/public/veme-blockchain-app-developed.png";
import Image from "next/image";

const Page1Right = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-[100%] h-full flex items-center justify-center z-[2] relative top-[50px]">
        <motion.div
          animate={{ y: 50 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="flex items-end sm:relative sm:left-0  sm:top-[-50px] absolute w-[90%] left-[-80%] top-0"
        >
          <Image
            src={img2}
            width={0}
            height={0}
            className="sm:relative  right-[100px] sm:left-[70px] sm:w-[300px] sm:top-[140px] "
          />
        </motion.div>
        <motion.div
          animate={{ y: -50 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="flex items-end sm:relative w-[90%] absolute sm:top-0 sm:right-0 right-[40%]"
        >
          <Image
            src={img1}
            width={0}
            height={0}
            className=" relative w-[300px] bottom-[250px] left-[120px]"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Page1Right;

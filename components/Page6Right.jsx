import React from "react";
import { motion } from "framer-motion";

import img1 from "@/public/melltoo-img1.png";
import img2 from "@/public/melltoo-img2.png";
import Image from "next/image";

const Page6Right = () => {
  return (
    <div className="w-full h-full flex items-center justify-center z-[2]">
      <div className="w-[100%] h-full flex items-end justify-center z-[2] relative">
        <motion.div
          animate={{ y: 50 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="flex items-end absolute sm:relative sm:left-[15%] top-[-10%] left-0 z-[2] sm:top-[-50px]"
        >
          <Image
            src={img2}
            width={0}
            height={0}
            className="w-[380px] relative top-[100px]"
          />
        </motion.div>
        <motion.div
          animate={{ y: 100 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="flex items-end absolute top-0 right-[-15%] z-[1] sm:relative sm:left-[15%] sm:top-[-100px]"
        >
          <Image
            src={img1}
            width={0}
            height={0}
            className="w-[280px] relative right-[100px] top-[50px] "
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Page6Right;

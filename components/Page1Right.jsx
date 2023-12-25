import React from "react";
import { motion } from "framer-motion";

import img1 from "@/public/nexgtv-entertainment-mobile-app-development.png";
import img2 from "@/public/nexgtv-mobile-app-ui-design.png";
import Image from "next/image";

const Page1Right = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-[90%] h-full flex items-center justify-center z-[2] relative top-[50px]">
        <motion.div
          animate={{ y: 50 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="flex items-end relative  top-[-50px]"
        >
          <Image
            src={img2}
            width={0}
            height={0}
            className="relative left-[100px] "
          />
        </motion.div>
        <motion.div
          animate={{ y: 100 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="flex items-end relative top-[-100px]"
        >
          <Image
            src={img1}
            width={0}
            height={0}
            className=" relative  "
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Page1Right;

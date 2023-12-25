import React from "react";
import { motion } from "framer-motion";

import img1 from "@/public/ux-strategy-for-mobile-app-devlopment.png";
import img2 from "@/public/domi-img1.png";
import bread1 from "@/public/dominos-bread.png";
import bread2 from "@/public/dominos-bread1.png";
import pizza from "@/public/pizza_box.png";

import Image from "next/image";

const Page4Right = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-[100%] h-full flex items-center justify-center z-[2] relative top-[50px]">
        
      <motion.div
          animate={{ y: 50 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="flex items-end absolute top-[-23%] left-0 z-0"
        >
          <Image
            src={pizza}
            width={0}
            height={0}
            className=" "
          />
        </motion.div>

        <motion.div
          animate={{ y: 50 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="flex items-end absolute top-[-30%] right-10 z-0"
        >
          <Image
            src={bread1}
            width={0}
            height={0}
            className=" "
          />
        </motion.div>

        <motion.div
          animate={{ y: -50 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="flex items-end absolute bottom-[-50px] right-0 z-0"
        >
          <Image
            src={bread2}
            width={0}
            height={0}
            className=" "
          />
        </motion.div>

      <motion.div
          animate={{ y: 50 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="flex items-end relative  top-[-50px]"
        >
          <Image
            src={img2}
            width={0}
            height={0}
            className="relative left-[-50px] w-[250px] top-[160px] "
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
            className=" relative w-[250px] bottom-[10px] left-[80px]"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Page4Right;

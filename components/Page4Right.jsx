import React from "react";
import { motion } from "framer-motion";

import img1 from "@/public/ux-strategy-for-mobile-app-devlopment.png";
import img2 from "@/public/domi-img1.png";
import img3 from "@/public/ux-strategy-for-mobile-app-devlopment.png";
import bread1 from "@/public/dominos-bread.png";
import bread2 from "@/public/dominos-bread1.png";
import pizza from "@/public/pizza_box.png";

import flower from "@/public/dominos-masala.png";

import Image from "next/image";

const Page4Right = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-[100%] h-full flex items-center justify-center z-[2] relative top-[50px]">
        
      <motion.div
          animate={{ y: 50 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="flex items-end absolute sm:top-[-23%] top-[-18%] left-0 z-0"
        >
          <Image
            src={pizza}
            width={0}
            height={0}
            className=" sm:w-full sm:h-full w-[50%]"
          />
        </motion.div>

        <motion.div
          animate={{ y: 50 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="flex items-end absolute ] top-[10%] right-[-20%] z-0 sm:hidden"
        >
          <Image
            src={flower}
            width={0}
            height={0}
            className="w-[60%] "
          />
        </motion.div>

        <motion.div
          animate={{ y: 50 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="flex items-end absolute top-[-30%] sm:right-10 right-[-20%] z-0"
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
          className="flex items-end absolute sm:bottom-[-50px] right-0 z-0"
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
          className="flex items-end relative  top-[-50px] "
        >
        <Image
            src={img3}
            width={0}
            height={0}
            className="absolute sm:hidden   w-[250px] left-[200px] bottom-[340px] "
          />
          <Image
            src={img2}
            width={0}
            height={0}
            className="relative  sm:left-[-50px] w-[250px] sm:top-[160px] left-[200px] "
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
            className=" relative w-[250px] bottom-[10px] left-[-180px] sm:left-[80px]"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Page4Right;

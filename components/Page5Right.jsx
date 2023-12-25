import React from "react";
import { motion } from "framer-motion";

import img1 from "@/public/erp-app-development-service.png";
import img2 from "@/public/interior.jpg";
import Image from "next/image";

const Page5Right = () => {
  return (
    <div className="w-full h-full flex items-center justify-center ">
      <div className="w-[100%] h-full flex items-center justify-center  relative top-[50px]">
      <Image src={img2} width={0} height={0} className="z-0 w-[100%] h-full top-[-6.5%] absolute"/> 
      
    
        <motion.div
          animate={{ y: -50 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="flex items-end relative"
        >
          <Image
            src={img1}
            width={0}
            height={0}
            className=" relative"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Page5Right;

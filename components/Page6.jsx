import React, { useState } from "react";
import Prograss from "@/components/Prograss";
import logo from "@/public/mobile-app-of-the-year-by-entrepreneur.png";

import { motion } from "framer-motion";
import Image from "next/image";
import Page1Right from "./Page6Right";
import img1 from "@/public/melltoo-img1.png";
import img2 from "@/public/melltoo-img2.png";

const Page6 = ({ bgcolor }) => {
  const [head1, setHead1] = useState("Biggest Classifieds");
  const [head2, setHead2] = useState("East Asia");
  const [head3, setHead3] = useState("Countries");
  const [address1, setAddress1] = useState("ABC 23478");
  const [address2, setAddress2] = useState(
    "We are the best web development company in the world"
  );
  const [address3, setAddress3] = useState("Coming soon");
  console.log(bgcolor);
  return (
    <div className="w-full h-full flex items-end justify-center">
      <div
        className={` w-[45%] h-[100vh] fixed top-0 left-0 bg-[${bgcolor}] z-[3]`}
      >
        <div className="relative w-full h-full flex flex-col justify-end">
          <div className="w-[400px] absolute right-[-200px] top-[10%] z-[1]">
            <Prograss />
          </div>
          <div className="w-[400px] h-[400px] absolute right-[-200px] top-[10%] z-[2] flex flex-col justify-center gap-1 ">
            <motion.h2
              animate={{ y: 50 }}
              className=" text-[white] text-[25px] font-[300] relative top-[-50px] "
            >
              {head1}
            </motion.h2>
            <motion.h1
              animate={{ x: 50 }}
              transition={{ type: "spring", stiffness: 100 }}
              className=" text-[white] text-[45px] font-[700] relative left-[-50px]"
            >
              {head2}
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: -50 }}
              transition={{ duration: 0.3 }}
              className=" text-[white] text-[25px] font-[300] ml-[30%] relative top-[50px]"
            >
              {head3}
            </motion.h2>
          </div>
          <div className="w-full h-[50%] flex flex-col justify-center items-start gap-3 pl-10">
            <motion.div
              className="z-[110]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Image src={logo} width={0} height={0} />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: 50 }}
              transition={{ duration: 0.3 }}
              className="text-white text-[45px] font-[700] relative top-[-50px]"
            >
              {address1}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: 50 }}
              transition={{ duration: 0.3 }}
              className="text-white text-[15px] w-[30%] relative left-[-50px]"
            >
              {address2}
            </motion.p>

            <motion.button
              animate={{ x: 50 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="text-white text-[15px] flex  gap-2 items-center justify-center relative left-[-50px]"
            >
              {address3}
            </motion.button>
          </div>
          <div className="absolute text-[20px] right-10 bottom-12 font-[200] text-white">
            S K I P
          </div>
        </div>
      </div>
      <div className={` w-[55%] h-[100vh] fixed top-0 right-0  z-[2] flex`}>
        <Page1Right />
      </div>
    </div>
  );
};

export default Page6;
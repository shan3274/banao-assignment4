import React, { useState } from "react";
import Prograss from "@/components/Prograss";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";
import Page5Right from "./Page5Right";
const Page5 = ({ bgcolor }) => {
  const [head1, setHead1] = useState("Developing ERP Solution for");
  const [head2, setHead2] = useState("Text Headline");
  const [head3, setHead3] = useState("in furniture industry");
  const [address1, setAddress1] = useState("ABC 678");
  const [address2, setAddress2] = useState(
    "Best since 2017 We offer wide range of web development and app development"
  );
  const [address3, setAddress3] = useState("View Case Study");
  console.log(bgcolor);
  return (
    <div className="w-full h-full flex items-end justify-center">
      <div className={` w-[45%] h-[100vh] fixed left-0 top-0 bg-[#022745] z-[3]`}>
        <div className="relative w-full h-full flex flex-col justify-end">
          <div className="w-[400px] absolute right-[-200px] top-[10%] z-[1]">
            <Prograss />
          </div>
          <div className="w-[400px] h-[400px] absolute right-[-200px] top-[10%] z-[2] flex flex-col justify-center gap-1 ">
            <motion.h2
              animate={{ y: 50 }}
              className=" text-[white] text-[25px] font-[300] relative top-[-50px] right-5 "
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
              className=" text-[white] text-[25px] font-[300] ml-[30%] relative top-[50px] right-14"
            >
              {head3}
            </motion.h2>
          </div>
          <div className="w-full h-[40%] flex flex-col justify-center items-start gap-3 pl-10">
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
              {address3} <IoIosArrowRoundForward size={40} />
            </motion.button>
          </div>
          <div className="absolute text-[20px] right-10 bottom-12 font-[200] text-white">
            S K I P
          </div>
        </div>
      </div>
      <div className={` w-[55%] h-[100vh] fixed top-0 right-0  z-[2] flex`}>
        <Page5Right />
      </div>
    </div>
  );
};

export default Page5;

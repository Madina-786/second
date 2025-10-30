import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/logogo1.svg";
import img2 from "../assets/logogo2.svg";
import img3 from "../assets/logogo3.svg";
import img4 from "../assets/logogo4.svg";
import img5 from "../assets/logogo2.svg";
import img6 from "../assets/logogo5.svg";
import img7 from "../assets/logogo6.svg";
import img8 from "../assets/logogo1.svg";

export default function ScrollingImages() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];

  return (
    <div className="w-full overflow-hidden relative py-10 bg-[#eff6f8] flex flex-col justify-center">
      <p className="text-center text-xs mb-5">
        Learn from 350+ leading universities and companies with us
      </p>
      <div className=" w-[650px]">
        <motion.div
          className="flex flex-row justify-center  gap-10 px-16"
          animate={{ x: ["80%", "-30%"] }} // move left by 50% of total width
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 15,
              ease: "linear",
            },
          }}
        >
          {images.concat(images).map((img, i) => (
            <motion.img
              key={i}
              src={img}
              alt=""
              className="w-11 object-cover "
              style={{
                filter: "blur(0px)",
              }}
              animate={{
                filter: [
                  "blur(0px)",
                  "blur(0px)", // blur when reaching center
                  "blur(0px)",
                ],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

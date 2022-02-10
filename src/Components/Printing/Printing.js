import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Printing = () => {
  useEffect(() => console.log("wews"), []);
  return (
    <div className="flex justify-center items-center h-screen max-w-full overflow-x-hidden w-screen">
      <motion.div
        whileHover={{ scaleX: 1.1, backgroundColor: "red" }}
        whileTap={{ scaleX: 0.9 }}
        className="bg-gray-600 h-full flex w-full hover:text-white hover:bg-Resin-Printing bg-cover bg-center bg-no-repeat justify-center items-center"
      >
        <div>
          <h1 className="text-8xl">FDM</h1>
        </div>
      </motion.div>
      <motion.div
        whileHover={{ scaleX: 1.1 }}
        whileTap={{ scaleX: 0.9 }}
        className="bg-pink-600 h-full w-full  flex justify-center items-center"
      >
        <div>
          <h1 className="text-8xl">Resin</h1>
        </div>
      </motion.div>
    </div>
  );
};

export default Printing;

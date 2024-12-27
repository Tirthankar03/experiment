"use client";
import Menu from "@/components/motion/Menu";
import Menu2 from "@/components/motion/Menu2";
import { Drag, EnterAnimation, ExitAnimation } from "@/components/motion/motion";
import { cn } from "@/lib/utils";
import { useScroll, useSpring } from "motion/react";
import * as motion from "motion/react-client";
import { useRef, useState } from "react";

const page = () => {
  const constraintsRef = useRef<HTMLDivElement>(null);

  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  const { scrollYProgress } = useScroll()

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
})


  return (
    <div className="flex min-h-screen w-full bg-muted/40">
      <div className="max-w-7xl w-full mx-auto flex flex-col sm:gap-4 sm:py-4">
      <motion.div
                id="scroll-indicator"
                className="fixed top-[85px] left-0 right-0 h-[10px] origin-left bg-[#ff0088] z-[100]"
                style={{
                    scaleX
                }}
            />
        <h1>Hello!</h1>

        <motion.div initial={{translateX:-100}} animate={{translateX: 50}} transition={{duration: 3}} className="bg-purple-800 w-[100px] h-[100px]"></motion.div>
        <motion.div initial={{translateX:-100}} animate={{translateX: 50}} transition={{duration: 0.2, scale: {type: "spring", visualDuration: 0.5, bounce: 0.2}}} className="bg-purple-800 w-[100px] h-[100px]"></motion.div>
        
        <motion.ul
          animate={{ rotate: 360, scale: 0.2 }}
          transition={{ duration: 5 }}
          className="w-[100px] h-[100px] bg-yellow-300 rounded-2xl flex flex-col justify-center items-center"
        />
        <Drag />
        <motion.div
          ref={constraintsRef}
          className="w-[300px] h-[300px] bg-pink-200"
        >
          <motion.div
            className="w-[100px] h-[100px] bg-pink-400 rounded-2xl"
            drag
            dragConstraints={constraintsRef}
            dragElastic={0.2}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 3,
            scale: { type: "spring", visualDuration: 0.2, bounce: 5 },
          }}
          className="rounded-full flex flex-col justify-center items-center bg-blue-500 w-[100px] h-[100px]"
        >
          enter
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0, translateX: -100 }}
          animate={{ opacity: 1, scale: 1, translateX: 0 }}
          transition={{
            duration: 0.5,
            scale: { type: "spring", visualDuration: 0.7, bounce: 0.5 },
          }}
          className="rounded-full flex flex-col justify-center items-center bg-blue-500 w-[100px] h-[100px]"
        >
          enter
        </motion.div>
        <ExitAnimation />
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => console.log("hover started!")}
          className="rounded-full flex flex-col justify-center items-center bg-red-500 w-[100px] h-[100px]"
        >
          Hover me!
        </motion.button>
        <motion.div
          className="w-[100px] h-[100px] bg-purple-500"
          initial={{ translateX: 500, translateY: -500 }}
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />
        {/* there are different types of easing functions, play around */}
        <motion.div
          className="w-[100px] h-[100px] bg-purple-300 border-t-2 border-purple-500"
          initial={{ translateX: 500, translateY: -400 }}
          animate={{
            scale: [1],
            rotate: [0, 45, 90, 135, 180],
            borderRadius: ["0%", "5%", "10%", "20%", "30%"],
            backgroundColor: ["#000", "#F87", "#F67", "#EAD", "#FFF"],
          }}
          transition={{
            duration: 10,
            ease: "linear",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1,
          }}
        />
        {/* if there is layout change, mention the layout change */}
        <button
          className={cn(
            "w-[100px] h-[50px] bg-purple-300 rounded-3xl cursor-pointer flex",
            isOn ? "justify-start" : "justify-end"
          )}
          onClick={toggleSwitch}
        >
          <motion.div
            className="w-[50px] h-[50px] bg-purple-500 rounded-full"
            layout
            transition={{
              type: "spring",
              visualDuration: 0.2,
              bounce: 0.2,
            }}
          />
        </button>

        <div className="grid grid-cols-3 h-[500px] w-[500px] bg-red-200">
          <motion.div
            layout
            className={cn("bg-red-500", isOn ? "col-span-2" : "col-span-1")}
          >
            1
          </motion.div>
          <motion.div layout className="bg-blue-500 ">
            2
          </motion.div>
          <motion.div layout className="bg-green-500">
            3
          </motion.div>
        </div>

        <div className="grid grid-cols-3 h-[500px] w-[500px] bg-red-200">
          <motion.div
            layout
            className="bg-red-500"
            animate={{
              gridColumn: [2, 1, 3, 1]
            }}
            transition={{
              duration: 1,
              ease: "linear",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            1
          </motion.div>
          <motion.div
            layout
            className="bg-blue-500"
            transition={{
              duration: 10,
              ease: "linear",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            2
          </motion.div>
          <motion.div
            layout
            className="bg-green-500"
            transition={{
              duration: 10,
              ease: "linear",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            3
          </motion.div>
        </div>


        <div className="grid grid-cols-3 h-[500px] w-[500px] bg-red-200">
          <motion.div
            layout
            className="bg-red-500"
            animate={{
              gridColumn: ["1 / span 1", "2 / span 2", "1 / span 3", "2 / span 1"],
              gridRow: ["1 / span 1", "1 / span 2", "2 / span 1", "1 / span 1"]
            }}
            transition={{
              duration: 5,
              ease: "linear",
              times: [0, 0.3, 0.6, 1],
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            1
          </motion.div>
          <motion.div
            layout
            className="bg-blue-500"
            animate={{
              gridColumn: ["2 / span 1", "1 / span 2", "3 / span 1", "1 / span 1"],
              gridRow: ["1 / span 1", "2 / span 1", "1 / span 2", "1 / span 1"]
            }}
            transition={{
              duration: 5,
              ease: "linear",
              times: [0, 0.3, 0.6, 1],
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            2
          </motion.div>
          <motion.div
            layout
            className="bg-green-500"
            animate={{
              gridColumn: ["3 / span 1", "1 / span 1", "2 / span 2", "3 / span 1"],
              gridRow: ["1 / span 1", "2 / span 1", "1 / span 1", "2 / span 1"]
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              times: [0, 0.3, 0.6, 1],
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            3
          </motion.div>
        </div>

        <motion.div
        className="w-10 h-10"
  initial={{ backgroundColor: "rgb(0, 255, 0)", opacity: 0}}
  whileInView={{ backgroundColor: "rgb(255, 0, 0)", opacity: 1, scale: 2, translateX: 100}}
/>

<Menu/>

<Menu2/>


      </div>
    </div>
  );
};

export default page;

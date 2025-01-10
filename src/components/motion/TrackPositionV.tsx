import { useRef } from "react";
import * as motion from "motion/react-client";
import { useScroll, useSpring } from "motion/react";

const TrackPositionItem = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  return (
    <section className="h-screen flex justify-center items-center bg-green-300">
      <div
        ref={ref}
        className="w-[200px] h-[300px] border-dashed border-2 border-red-500 relative "
      >
        <figure className="sticky top-0 w-20 h-20 m-0 p-0">
          <svg
            id="progress"
            width="75"
            height="75"
            viewBox="0 -10 140 150"
            className="translate-x-[-100px] -rotate-90"
          >
            <circle
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              className="fill-none opacity-20 stroke-red-500 "
              style={{ strokeDashoffset: 0, strokeWidth: "5%" }}
            />
            <motion.circle
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              className="stroke-red-500 fill-none"
              //   style={{ transform: `pathLength(${scrollYProgress})` }}
              style={{
                pathLength: scrollYProgress,
                strokeDashoffset: 0,
                strokeWidth: "5%",
              }}
            />
          </svg>
        </figure>
      </div>
    </section>
  );
};

export default TrackPositionItem;

'use client'
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id }: { id: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className="bg-red-300 h-screen flex justify-center items-center relative snap-center" style={{ perspective: "500px" }}>
      <div ref={ref} className="w-[300px] h-[400px] relative max-h-[90vh] mx-5 bg-white overflow-hidden">
        <img src={`parallex/${id}.png`} alt="A London skyscraper" className="absolute inset-0 w-full h-full" />
      </div>
      <motion.h2 
        style={{ y }}
        className="m-0 text-white absolute left-[calc(50%+130px)] text-[56px] font-bold tracking-[-3px] leading-tight"
      >{`#00${id}`}</motion.h2>
    </section>
  );
}

export default function Parallax() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-[#fe0222] text-white min-h-screen">
      <div className="snap-y snap-mandatory h-screen overflow-auto">
        {[1, 2, 3, 4, 5].map((image) => (
          <Image key={image} id={image} />
        ))}
      </div>
      <motion.div 
        className="fixed left-0 right-0 h-[5px] bg-white bottom-[100px]" 
        style={{ scaleX }} 
      />
    </div>
  );
}
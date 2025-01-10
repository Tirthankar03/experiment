'use client'

import { useEffect, useRef } from "react";

import Image from "next/image";
import { motion, useScroll, useTransform } from 'framer-motion';
import Lenis from "lenis";

const word = "with framer-motion";

export default function Index() {

  useEffect( () => {
    const lenis = new Lenis()
    
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
}, [])
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    })
    const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const md = useTransform(scrollYProgress, [0, 1], [-350, 0]);
    const lg = useTransform(scrollYProgress, [0, 1], [0, -550]);

    const images = [
        {
            src: '/parallex/1.png',
            y: 0
        },
        {
          src: '/parallex/2.png',
            y: lg
        },
        {
          src: '/parallex/3.png',
            y: md
        }
    ];

    return (
        <div ref={container} className="mt-[100vh] h-[500vh]">
            <div className="ml-[10vw]">
                <motion.h1 
                    style={{y: sm}}
                    className="m-0 mt-2.5 text-[5vw] leading-[5vw] uppercase"
                >
                    Parallax
                </motion.h1>
                <h1 className="m-0 mt-2.5 text-[5vw] leading-[5vw] uppercase">
                    Scroll
                </h1>
                <div>
                    <p className="text-red-400 m-0 mt-2.5 text-[3vw] uppercase">
                        {word.split("").map((letter, i) => {
                            const y = useTransform(scrollYProgress, [0, 1], [0, Math.floor(Math.random() * -75) - 25])
                            return (
                                <motion.span 
                                    style={{top: y}} 
                                    key={`l_${i}`}
                                    className="relative"
                                >
                                    {letter}
                                </motion.span>
                            )
                        })}
                    </p>
                </div>
            </div>
            <div className="flex w-full justify-center relative mt-[5vh]">
                {images.map(({src, y}, i) => (
                    <motion.div 
                        style={{y}} 
                        key={`i_${i}`} 
                        className={`absolute ${
                            i === 0 ? 'h-[60vh] w-[50vh] z-[1]' :
                            i === 1 ? 'left-[55vw] top-[15vh] h-[40vh] w-[30vh] z-[2]' :
                            'left-[27.5vw] top-[40vh] h-[25vh] w-[20vh] z-[3]'
                        }`}
                    >
                        <img 
                            src={src}
                            placeholder="blur"
                            alt="image"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
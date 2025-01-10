"use client";

interface ProjectProps {
  title: string;
  description: string;
  src: string;
  link: string;
  color: string;
}

interface CardProps extends ProjectProps {
  i: number;
  range: number[];  
  targetScale: number;
  parentProgress: MotionValue<number>
}

import Image from "next/image";
import { useTransform, motion, useScroll, MotionValue } from "framer-motion";
import { div } from "motion/react-client";
import { useEffect, useRef } from "react";
import Lenis from "lenis";

export default function ScrollCardParallex() {



  const projects: ProjectProps[] = [
    {
      title: "Matthias Leidinger",
      description:
        "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
      src: "rock.png",
      link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
      color: "#BBACAF",
    },
    {
      title: "Clément Chapillon",
      description:
        "This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French photographer Clément Chapillon describes his latest highly captivating project Les rochers fauves (French for ‘The tawny rocks’).",
      src: "tree.jpg",
      link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
      color: "#977F6D",
    },
    {
      title: "Zissou",
      description:
        "Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal, they’re encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.",
      src: "water.jpg",
      link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
      color: "#C2491D",
    },
    {
      title: "Mathias Svold and Ulrik Hasemann",
      description:
        "The coastlines of Denmark are documented in tonal colors in a pensive new series by Danish photographers Ulrik Hasemann and Mathias Svold; an ongoing project investigating how humans interact with and disrupt the Danish coast.",
      src: "house.png",
      link: "https://www.ignant.com/2019/03/13/a-photographic-series-depicting-the-uncertain-future-of-denmarks-treasured-coastlines/",
      color: "#B62429",
    },
    {
      title: "Mark Rammers",
      description:
        "Dutch photographer Mark Rammers has shared with IGNANT the first chapter of his latest photographic project, ‘all over again’—captured while in residency at Hektor, an old farm in Los Valles, Lanzarote. Titled ‘Beginnings’, the mesmerizing collection of images is a visual and meditative journey into the origins of regrets and the uncertainty of stepping into new unknowns.",
      src: "cactus.png",
      link: "https://www.ignant.com/2023/04/12/mark-rammers-all-over-again-is-a-study-of-regret-and-the-willingness-to-move-forward/",
      color: "#88A28D",
    },
  ];

  //stack effect usage: need to take into account the overall parent container
  const parentContainer = useRef(null);
  
  const {scrollYProgress} = useScroll({
    target: parentContainer,
    offset: ['start start','end end']
  });
  useEffect(() => {
    scrollYProgress.on("change", e => console.log(scrollYProgress.current))
  },[])


  



  return (
    // <div>
      <div ref={parentContainer} className='relative mt-[50vh] mb-[100vh]'>
      {projects.map((project, i) => {
        const targetScale = 1 - ((projects.length - i)*0.05)
        return <CardMainStack key={i} i={i} {...project} range={[i*0.25,1]} targetScale={targetScale} parentProgress={scrollYProgress}/>;
        // 1st card => 0.25 - 1
        // 2nd card => 0.5 - 1 ... scale more as the cards increases
      })}
    </div>
  );
};




const CardMainStack = ({i, color, description, link, src, title , parentProgress, range, targetScale}: CardProps) => {
  //zoom image on scroll
  const container = useRef(null)

  const { scrollYProgress} = useScroll({
    target: container, //100vh of the a single container used to track scroll
    offset: ['start end', 'start start'] //animate start: when the top of the container enters from the bottom of the vp
                                          //end: when the top of C comes to the top of the VP
  })

  const imageScale = useTransform(scrollYProgress,[0,1], [2,1])
  const cardScale = useTransform(parentProgress,range, [1,targetScale])


return (
  <div ref={container} className="h-screen flex items-center justify-center sticky top-0  ">
    <motion.div style={{scale: cardScale ,backgroundColor: color, top: `calc(-10% + ${i*25}px)` }} className="w-[1000px] h-[600px] rounded-2xl relative  ">
      <h2 className="text-center m-0 text-2xl">{title}</h2>
      <div className="flex  mt-12 gap-12 p-20">
        <div className="w-2/5 relative top-[10%]">
          <p className="text-base">
            <span className="text-xl font-title first-letter:text-2xl first-letter:font-title">
              {description}
            </span>
          </p>
          <span className="flex items-center gap-2">
            <a href={link} target="_blank" className="text-xs underline cursor-pointer">See more</a>
            <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z" fill="black"/>
            </svg>
          </span>
        </div>
        <div className="relative w-3/5 h-[400px]  rounded-[25px] overflow-hidden">
          <motion.div
            className="w-full h-full"
            style={{scale: imageScale}}

          >
            <Image
              fill
              src={`/${src}`}
              
              alt="image"
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  </div>
);
};


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



const page = () => {


  useEffect( () => {
    const lenis = new Lenis()

    function raf(time:any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])


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

  const parentContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parentContainer,
  });


  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);
  //best way to remove the extra background that comes at 100%

  return (
    <section ref={parentContainer} about="parentContainer" className="relative mt-[40vh] mb-[100vh] h-[500vh] m-2 bg-neutral-900">
        <div about="stickyContainer" className="h-[90vh] sticky top-0 flex items-center bg-red-600 overflow-hidden">

<motion.div className="flex" style={{x}}>
            <div className="relative bg-green-400  h-screen w-screen">1</div>
            <div className="relative bg-blue-400  h-screen w-screen">2</div>
            <div className="relative bg-red-400  h-screen w-screen">3</div>
            <div className="relative bg-purple-400  h-screen w-screen">4</div>
            <div className="relative bg-orange-400  h-screen w-screen">5</div>

</motion.div>

        </div>    
 
    </section>
  )
}

export default page
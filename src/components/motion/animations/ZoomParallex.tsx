'use client'
import styles from './styles.module.scss';
import Image from 'next/image';
import { useScroll, useTransform, motion} from 'framer-motion';
import { useRef } from 'react';

import Picture1 from '../../../../public/zoom/1.png';
import Picture2 from '../../../../public/zoom/2.png';
import Picture3 from '../../../../public/zoom/3.png';
import Picture4 from '../../../../public/zoom/4.png';
import Picture5 from '../../../../public/zoom/5.png';
import Picture6 from '../../../../public/zoom/6.png';
import Picture7 from '../../../../public/zoom/7.png';


export default function ZoomParallex() {
    
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })


        
    const containerTest = useRef(null);
    const { scrollYProgress: yTest } = useScroll({
        target: containerTest,
        offset: ['start start', 'end end']
    })


    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale4Test = useTransform(yTest, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    const pictures = [
      {
          src: Picture1,
          scale: scale4
      },
      {
          src: Picture2,
          scale: scale5
      },
      {
          src: Picture3,
          scale: scale6
      },
      {
          src: Picture4,
          scale: scale5
      },
      {
          src: Picture5,
          scale: scale6
      },
      {
          src: Picture6,
          scale: scale8
      },
      {
          src: Picture7,
          scale: scale9
      }
  ]



    return (
        // <div ref={container} className="relative h-[300vh] mt-[50vh] mb-[50vh] bg-orange-400">
        //     <div className="sticky top-0 h-screen overflow-hidden">
        //         {
        //             pictures.map(({src, scale}, index) => {
        //                 return <motion.div 
        //                     key={index} 
        //                     style={{scale}}  
        //                     className={`absolute w-full h-full top-0 flex items-center justify-center
        //                     ${index === 0 ? 'first-image' : ''}
        //                     ${index === 1 ? '-top-[30vh] left-[5vw]' : ''}
        //                     ${index === 2 ? '-top-[10vh] -left-[25vw]' : ''}
        //                     ${index === 3 ? 'left-[27.5vw]' : ''}
        //                     ${index === 4 ? 'top-[27.5vh] left-[5vw]' : ''}
        //                     ${index === 5 ? 'top-[27.5vh] -left-[22.5vw]' : ''}
        //                     ${index === 6 ? 'top-[22.5vh] left-[25vw]' : ''}`}
        //                 >
        //                     <div className={`relative 
        //                         ${index === 0 ? 'w-[25vw] h-[25vh]' : ''}
        //                         ${index === 1 ? 'w-[35vw] h-[30vh]' : ''}
        //                         ${index === 2 ? 'w-[20vw] h-[45vh]' : ''}
        //                         ${index === 3 ? 'w-[25vw] h-[25vh]' : ''}
        //                         ${index === 4 ? 'w-[20vw] h-[25vh]' : ''}
        //                         ${index === 5 ? 'w-[30vw] h-[25vh]' : ''}
        //                         ${index === 6 ? 'w-[15vw] h-[15vh]' : ''}`}
        //                     >
        //                         <Image
        //                             src={src}
        //                             fill
        //                             alt="image"

        //                             className="object-cover"
        //                         />
        //                     </div>
        //                 </motion.div>
        //             })
        //         }
        //     </div>
        // </div>
<div>

<div ref={containerTest} className="relative h-[300vh] mt-[50vh] mb-[50vh] bg-black">
<div className="sticky top-0 h-screen overflow-hidden bg-orange-400">
      <div about='el' className='w-full h-full absolute top-0 flex items-center justify-center'>
        <motion.div style={{scale: scale4Test}} about='imageContainer' className='w-[25vw] h-[25vh] relative '>
          <Image src={Picture1} fill alt='image' placeholder='blur' className='cover'/>
        </motion.div>
      </div>
</div>


</div>

<div ref={container} className="relative h-[300vh] mt-[50vh] mb-[50vh] bg-black">
<div className="sticky top-0 h-screen overflow-hidden bg-orange-400">
      {pictures.map(({src, scale}, index) => {
        return <motion.div style={{scale: scale}} about='el' key={index} className={`w-full h-full absolute top-0 flex items-center justify-center
        `}>
        <div  about='imageContainer' className={`relative 
                                        ${index === 0 ? 'w-[25vw] h-[25vh]' : ''}
                           ${index === 1 ? 'w-[35vw] h-[30vh] -top-[30vh] left-[5vw]' : ''}
                               ${index === 2 ? 'w-[20vw] h-[45vh] -top-[10vh] -left-[25vw]' : ''}
                            ${index === 3 ? 'w-[25vw] h-[25vh] left-[27.5vw]' : ''}
                            ${index === 4 ? 'w-[20vw] h-[25vh] top-[27.5vh] left-[5vw]' : ''}
                                 ${index === 5 ? 'w-[30vw] h-[25vh] top-[27.5vh] -left-[22.5vw]' : ''}
                                 ${index === 6 ? 'w-[15vw] h-[15vh] top-[22.5vh] left-[25vw]' : ''}
          `}>
          <Image src={src} fill alt='image' placeholder='blur' className='object-cover'/>
        </div>
      </motion.div>
      })}

</div>
</div>





</div>
    )
}

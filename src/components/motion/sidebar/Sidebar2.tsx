import { motion, stagger } from 'framer-motion';
import { useAnimate } from 'motion/react';
import React, { useEffect, useState } from 'react'

const Sidebar2 = () => {

    const [isOpen, setIsOpen] = useState(false)


    
    const scope = useMenuAnimation(isOpen)




  return (
    <div ref={scope}>
        <Menu/>
        <MenuToggle toggle={() => setIsOpen(!isOpen)} />
    </div>
  )
}

export default Sidebar2


function useMenuAnimation(isOpen: boolean) {
    const [scope, animate] = useAnimate();


    const pathAnimations = [ [
        "path.top",
        { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
        { at: "<" }
      ],
      ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
      [
        "path.bottom",
        { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
        { at: "<" }
      ],]



    const menuAnimations = isOpen ? 
    [
            [
            "nav",
            { transform: "translateX(0%)" },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 }
            ],
            [
            "li",
            { transform: "scale(1) ", opacity: 1, filter: "blur(0px)" },
            { delay: stagger(0.05), at: "-0.1" }
            ]
        ]
        : 
    [
            [
            "li",
            { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
            { delay: stagger(0.05, { from: "last" }), at: "<" }
            ],
            ["nav", { transform: "translateX(-100%)" }, { at: "-0.1" }]
    ];


      useEffect(() => {
        animate([...menuAnimations, ...pathAnimations])
      },[isOpen])

    return scope;
}


function Menu() {
    return (
      <nav className="w-[400px] bg-pink-500  pt-[100px] top-0 fixed min-h-screen translate-x-[-100%]">
        <ul>
          <li className="text-white block origin-left  font-bold text-[48px] p-[10px]">Portfolio</li>
          <li className="text-white block origin-[20px_50%] font-bold text-[48px] p-[10px]">About</li>
          <li className="text-white block origin-left font-bold text-[48px] p-[10px]">Contact</li>
          <li className="text-white block origin-left font-bold text-[48px] p-[10px]">Search</li>
        </ul>
      </nav>
    );
  }



  const Path = (props: any) => (
    <path
      fill="transparent"
      strokeWidth="3"
      stroke="white"
      strokeLinecap="round"
      {...props}
    />
  );
  
  export const MenuToggle = ({ toggle }: any) => (
    <button 
      onClick={toggle}
      className="fixed top-[100px] left-[15px] w-[50px] h-[50px] rounded-full bg-pink-500 p-[10px] cursor-pointer select-none outline-none border-none"
    >
      <svg width="30" height="18" viewBox="0 0 23 18">
        <Path
          d="M 2 2.5 L 20 2.5"
          className="top"
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" }
          }}
        />
        <Path d="M 2 9.423 L 20 9.423" opacity="1" className="middle" />
        <Path
          d="M 2 16.346 L 20 16.346"
          className="bottom"
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" }
          }}
        />
      </svg>
    </button>
  );
  



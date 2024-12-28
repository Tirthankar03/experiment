'use client'
import React, { useState } from 'react'

import * as motion from "motion/react-client";

const items: string[] = ["Home", "About", "Contact", "Services"];

const SideBar1 = () => {

    const [isOpen, setIsOpen] = useState(false)

    const menuVariants = {
        open: { x: 0 },
        closed: { x: "-100%" },
      };
      
      const liVariants = {
        open: { scale: 1, opacity: 1, filter: "blur(0px)", transition: { staggerChildren: 0.1 } },
        closed: { scale: 0.5, opacity: 0, filter: "blur(10px)", transition: { staggerChildren: 0.1, staggerDirection: -1 } },
      };
  return (
    <motion.nav initial="closed" animate={isOpen ? "open" : "closed"} variants={menuVariants}>
    <motion.ul>
      {items.map((item: string) => <motion.li key={item} variants={liVariants}>{item}</motion.li>)}
    </motion.ul>
  </motion.nav>
  )
}

export default SideBar1
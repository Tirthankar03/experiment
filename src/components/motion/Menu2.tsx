import { useState } from "react";
import { motion, Variants } from "framer-motion";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

export default function Menu2() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="relative w-[300px] m-4"
    >
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-2 rounded-md bg-white border border-gray-200 cursor-pointer text-left select-none"
      >
        Menu
        <motion.div
          variants={{
            open: { rotate: 180 },
            closed: { rotate: 0 }
          }}
          transition={{ duration: 0.2 }}
          className="origin-[50%_55%]"
        >
          <svg width="15" height="15" viewBox="0 0 20 20" className="stroke-current fill-none stroke-[2]">
            <path d="M0 7 L 20 7 L 10 16" />
          </svg>
        </motion.div>
      </motion.button>

      <motion.ul
        variants={{
          open: {
            scaleY: 1,
            height: "auto",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05
            }
          },
          closed: {
            scaleY: 0,
            height: 0,
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3
            }
          }
        }}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        style={{
          transformOrigin: "top",
          overflow: "hidden",
          pointerEvents: isOpen ? "auto" : "none"
        }}
        className="flex flex-col gap-2 mt-2 p-2 bg-white rounded-md border border-gray-200"
      >
        {["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"].map((item, i) => (
          <motion.li
            key={i}
            variants={itemVariants}
            className="p-2 hover:bg-gray-50 cursor-pointer rounded-md"
          >
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
}

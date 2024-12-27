import * as motion from "motion/react-client"
import { useState } from "react"
import { AnimatePresence } from "motion/react"

export function EnterAnimation() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            className="rounded-full flex flex-col justify-center items-center bg-blue-500 w-[100px] h-[100px]"
        >
            enter
        </motion.div>
    )
}


export function Drag() {
    return <motion.div drag className="w-[100px] h-[100px] bg-green-400 rounded-2xl flex flex-col justify-center items-center">
      Drag me!
    </motion.div>
  }
  
export function ExitAnimation() {
    const [isVisible, setIsVisible] = useState(true)

    return (
        <div className="flex flex-col w-[100px] h-[160px] relative">
            <AnimatePresence initial={false}>
                {isVisible ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        className="w-[100px] h-[100px] bg-cyan-400 rounded-lg"
                        key="box"
                    />
                ) : null}
            </AnimatePresence>
            <motion.button
                className="bg-cyan-400 rounded-lg py-2 px-5 text-gray-900 absolute bottom-0 left-0 right-0"
                onClick={() => setIsVisible(!isVisible)}
                whileTap={{ y: 1 }}
            >
                {isVisible ? "Hide" : "Show"}
            </motion.button>
        </div>
    )
}
  
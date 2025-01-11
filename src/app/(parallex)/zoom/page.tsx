'use client'
import ZoomParallex from "@/components/motion/animations/ZoomParallex"
import Lenis from "lenis"
import { useEffect } from "react"

export default function Home() {

    useEffect( () => {
        const lenis = new Lenis()
       
        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    },[])

    return (
        <main className="mt-[50v] mb-[100vh]">
            <ZoomParallex />
        </main>
    )
}
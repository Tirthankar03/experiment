'use client'
import Parallex1 from '@/components/motion/animations/Parallex1'
import Parallex2 from '@/components/motion/animations/Parallex2'
import ScrollCardParallex from '@/components/motion/animations/ScrollCardParallex'
import Lenis from 'lenis'
import React, { useEffect } from 'react'

const page = () => {


  useEffect( () => {
    const lenis = new Lenis()
    
    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
}, [])


  return (
    <div>
        <Parallex1/>
        <Parallex2/>
        <ScrollCardParallex/>
    </div>
  )
}

export default page
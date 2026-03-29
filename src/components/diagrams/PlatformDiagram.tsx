"use client"

import { motion } from "framer-motion"

export default function PlatformDiagram() {
  return (
    <div className="relative w-[220px] h-[180px] perspective-[1000px]">
      <motion.div 
        style={{ rotateX: 45, rotateZ: -45 }}
        className="relative w-32 h-32 border border-white/10 bg-white/[0.02]"
      >
        {/* Isometric Grid */}
        <div className="absolute inset-0 grid grid-cols-4 grid-rows-4">
           {[...Array(16)].map((_, i) => (
             <motion.div 
               key={i}
               animate={{ opacity: [0.1, 0.3, 0.1] }}
               transition={{ duration: 4, repeat: Infinity, delay: i * 0.1 }}
               className="border-[0.5px] border-white/5"
             />
           ))}
        </div>

        {/* Abstract "core" monolith */}
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-white/5 backdrop-blur-md border border-white/20 transform translate-z-10 shadow-2xl">
           <motion.div 
             animate={{ height: ["0%", "100%", "0%"] }}
             transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
             className="absolute bottom-0 left-0 w-full bg-blue-500/20"
           />
        </div>

        {/* Floating orbiters */}
        <motion.div 
          animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-4 -right-4 w-4 h-4 bg-white/10 border border-white/20"
        />
      </motion.div>
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] uppercase font-bold tracking-[0.4em] text-zinc-600 opacity-50">
        Infrastructure
      </div>
    </div>
  )
}

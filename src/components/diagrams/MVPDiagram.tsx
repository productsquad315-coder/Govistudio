"use client"

import { motion } from "framer-motion"

export default function MVPDiagram() {
  const shards = [1, 2, 3]

  return (
    <div className="relative w-[220px] h-[100px] flex items-center justify-center gap-6">
      {shards.map((_, i) => (
        <div key={i} className="relative group">
          <motion.div 
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              delay: i * 0.8 
            }}
            className="w-12 h-20 bg-white/5 border border-white/10 rounded-lg flex flex-col justify-end p-2 overflow-hidden"
          >
             <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-blue-500/10 to-transparent" />
             <div className="h-1 w-full bg-white/10 rounded-full mb-1" />
             <div className="h-1 w-2/3 bg-white/5 rounded-full" />
          </motion.div>
          
          {/* Connection thread */}
          {i < shards.length - 1 && (
            <div className="absolute top-1/2 -right-6 w-6 h-[1px] bg-white/5" />
          )}
        </div>
      ))}
      
      {/* Overlay data pulse */}
      <motion.div 
        animate={{ x: [-100, 200] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-0 h-[2px] w-20 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent blur-sm pointer-events-none"
      />
    </div>
  )
}

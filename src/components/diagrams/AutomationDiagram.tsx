"use client"

import { motion } from "framer-motion"

export default function AutomationDiagram() {
  return (
    <div className="relative w-[220px] h-[180px] flex items-center justify-center">
      {/* Abstract geometric shards representing modules */}
      <motion.div 
        animate={{ 
          y: [0, -4, 0],
          rotate: [0, 2, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10"
      >
        <div className="w-16 h-16 bg-white/5 border border-white/20 backdrop-blur-sm rounded-sm rotate-45 flex items-center justify-center overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent" />
           <div className="w-full h-[1px] bg-white/10 rotate-45" />
        </div>
      </motion.div>

      {/* Floating accent elements */}
      <motion.div 
        animate={{ x: [0, 10, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-4 left-10 w-2 h-2 rounded-full bg-blue-400"
      />
      <motion.div 
        animate={{ x: [0, -10, 0], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-8 right-12 w-3 h-3 rounded-full bg-purple-400"
      />

      {/* Abstract flow lines */}
      <svg className="absolute inset-0 w-full h-full -z-0">
        <motion.path 
          d="M40 90 L180 90" 
          stroke="rgba(255,255,255,0.05)" 
          strokeWidth="0.5" 
          strokeDasharray="10 20"
          animate={{ strokeDashoffset: [0, -30] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
        <motion.path 
          d="M110 40 L110 140" 
          stroke="rgba(255,255,255,0.05)" 
          strokeWidth="0.5" 
          strokeDasharray="10 20"
          animate={{ strokeDashoffset: [0, 30] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Intersection markers */}
        <circle cx="110" cy="90" r="1.5" fill="rgba(56,189,248,0.4)" />
        <motion.circle 
          cx="110" cy="90" r="10" 
          fill="none" 
          stroke="rgba(56,189,248,0.1)" 
          strokeWidth="1"
          animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0, 0.2] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </svg>
    </div>
  )
}

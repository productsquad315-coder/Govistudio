export default function GradientMesh() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Blue — upper left */}
      <div className="animate-mesh-1 absolute w-[500px] h-[500px] bg-blue-400/[0.08] blur-[80px] left-[5%] top-[0%] rounded-full will-change-transform" />

      {/* Purple — upper right */}
      <div className="animate-mesh-2 absolute w-[500px] h-[500px] bg-purple-500/[0.07] blur-[80px] right-[5%] top-[30%] rounded-full will-change-transform" />

      {/* Orange — bottom left */}
      <div className="animate-mesh-1 absolute w-[400px] h-[400px] bg-orange-400/[0.07] blur-[80px] left-[10%] bottom-[0%] rounded-full will-change-transform" />
    </div>
  )
}

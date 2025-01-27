import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function LearningFlower({ onPetalClick }) {
  const [hoveredPetal, setHoveredPetal] = useState(null)
  const [focusedPetal, setFocusedPetal] = useState(null)

  const petalStyles = {
    physical: "fill-[#DC2626]",
    literacy: "fill-[#EA580C]",
    communication: "fill-[#F59E0B]",
    expressiveArts: "fill-[#059669]",
    personalSocial: "fill-[#2563EB]",
    understanding: "fill-[#7C3AED]",
    numeracy: "fill-[#EC4899]",
  }

  const petalInfo = {
    physical: "Develops motor skills and body awareness",
    literacy: "Builds reading, writing, and language skills",
    communication: "Enhances verbal and non-verbal expression",
    expressiveArts: "Fosters creativity and self-expression",
    personalSocial: "Promotes emotional growth and social skills",
    understanding: "Explores the world and how it works",
    numeracy: "Develops mathematical thinking and problem-solving",
  }

  const radius = 180

  const petalPath = (startAngle) => {
    const endAngle = startAngle + 51.43
    const startX = 200 + radius * Math.cos((Math.PI / 180) * startAngle)
    const startY = 200 + radius * Math.sin((Math.PI / 180) * startAngle)
    const endX = 200 + radius * Math.cos((Math.PI / 180) * endAngle)
    const endY = 200 + radius * Math.sin((Math.PI / 180) * endAngle)

    return `M200,200 L${startX},${startY} A${radius},${radius} 0 0,1 ${endX},${endY} Z`
  }

  const getTextPosition = (startAngle) => {
    const angle = (Math.PI / 180) * startAngle
    const x = 200 + (radius - 40) * Math.cos(angle)
    const y = 200 + (radius - 40) * Math.sin(angle)
    return { x, y }
  }

  const handlePetalClick = (key) => {
    setFocusedPetal(focusedPetal === key ? null : key)
    onPetalClick(key)
  }

  return (
    <div className="w-full max-w-[600px] aspect-square relative">
      <svg viewBox="0 0 400 400" className="w-full h-full">
        <motion.circle
          cx="200"
          cy="200"
          r="5"
          fill="white"
          animate={{
            r: [5, 7, 5],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {Object.entries(petalStyles).map(([key, style], index) => (
          <motion.g
            key={key}
            className={`transition-transform duration-300 ease-in-out ${
              hoveredPetal === key && !focusedPetal ? "scale-110" : ""
            }`}
            onMouseEnter={() => setHoveredPetal(key)}
            onMouseLeave={() => setHoveredPetal(null)}
            onClick={() => handlePetalClick(key)}
            animate={
              focusedPetal
                ? {
                    scale: focusedPetal === key ? 1.2 : 0.8,
                    opacity: focusedPetal === key ? 1 : 0.5,
                  }
                : { scale: 1, opacity: 1 }
            }
            transition={{ duration: 0.3 }}
          >
            <path d={petalPath(245 + 51.43 * index)} className={`${style} hover:brightness-110 cursor-pointer`} />
            <text
              x={
                key === "communication"
                  ? getTextPosition(270 + 51.43 * index).x - 37.8 // Shift by 1 cm (37.8px)
                  : getTextPosition(270 + 51.43 * index).x
              }
              y={getTextPosition(270 + 51.43 * index).y}
              textAnchor="middle"
              fill="white"
              className="text-sm pointer-events-none"
            >
              {key === "understanding" ? (
                <>
                  <tspan x={getTextPosition(239 + 51.43 * 5).x} dy="0">
                    Understanding
                  </tspan>
                  <tspan x={getTextPosition(239 + 51.43 * 5).x} dy="12">
                    the world
                  </tspan>
                </>
              ) : (
                key.charAt(0).toUpperCase() + key.slice(1)
              )}
            </text>
          </motion.g>
        ))}
      </svg>
      <AnimatePresence>
        {focusedPetal && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[rgba(255,255,255,0.3)] text-black p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold mb-2">{focusedPetal.charAt(0).toUpperCase() + focusedPetal.slice(1)}</h3>
            <p>{petalInfo[focusedPetal]}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

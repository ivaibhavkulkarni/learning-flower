"use client"

import React, { useState } from "react"

export default function LearningFlower({ onPetalClick }) {
  const [hoveredPetal, setHoveredPetal] = useState(null)

  const petalStyles = {
    physical: "fill-[#DC2626]",
    literacy: "fill-[#EA580C]",
    communication: "fill-[#F59E0B]",
    expressiveArts: "fill-[#059669]",
    personalSocial: "fill-[#2563EB]",
    understanding: "fill-[#7C3AED]",
    numeracy: "fill-[#EC4899]",
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

  return (
    <div className="w-full max-w-[600px] aspect-square">
      <svg viewBox="0 0 400 400" className="w-full h-full">
        <circle cx="200" cy="200" r="5" fill="white" />

        {Object.entries(petalStyles).map(([key, style], index) => (
          <g
            key={key}
            className={`transition-transform duration-300 ease-in-out ${hoveredPetal === key ? "scale-110" : ""}`}
            onMouseEnter={() => setHoveredPetal(key)}
            onMouseLeave={() => setHoveredPetal(null)}
            onClick={() => onPetalClick(key)}
          >
            <path d={petalPath(245 + 51.43 * index)} className={`${style} hover:brightness-110 cursor-pointer`} />
          </g>
        ))}

        <text
          x={getTextPosition(270).x}
          y={getTextPosition(260).y}
          textAnchor="middle"
          fill="white"
          className="text-sm pointer-events-none"
        >
          Physical
        </text>
        <text
          x={getTextPosition(270 + 51.43).x}
          y={getTextPosition(270 + 51.43).y}
          textAnchor="middle"
          fill="white"
          className="text-sm pointer-events-none"
        >
          Literacy
        </text>
        <text
          x={getTextPosition(220 + 51.43 * 2).x}
          y={getTextPosition(265 + 51.43 * 2).y}
          textAnchor="middle"
          fill="white"
          className="text-sm pointer-events-none"
        >
          Communication
        </text>
        <text
          x={getTextPosition(270 + 51.43 * 3).x}
          y={getTextPosition(260 + 51.43 * 3).y}
          textAnchor="middle"
          fill="white"
          className="text-sm pointer-events-none"
        >
          Expressive Arts
        </text>
        <text
          x={getTextPosition(270 + 51.43 * 4).x}
          y={getTextPosition(210 + 51.43 * 4).y}
          textAnchor="middle"
          fill="white"
          className="text-sm pointer-events-none"
        >
          Personal & Social
        </text>
        <text
          x={getTextPosition(239 + 51.43 * 5).x}
          y={getTextPosition(275 + 51.43 * 5).y}
          textAnchor="middle"
          fill="white"
          className="text-sm pointer-events-none"
        >
          <tspan x={getTextPosition(239 + 51.43 * 5).x} dy="0">
            Understanding
          </tspan>
          <tspan x={getTextPosition(239 + 51.43 * 5).x} dy="12">
            the world
          </tspan>
        </text>
        <text
          x={getTextPosition(270 + 51.43 * 6).x}
          y={getTextPosition(270 + 51.43 * 6).y}
          textAnchor="middle"
          fill="white"
          className="text-sm pointer-events-none"
        >
          Numeracy
        </text>
      </svg>
    </div>
  )
}


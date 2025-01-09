"use client"

import LearningFlower from '../components/LearningFlower.jsx'
import ContentDisplay from '../components/ContentDisplay.jsx'
import { learningAreasData } from '../data/learningAreas.js'
import { useState } from 'react'

export default function Home() {
  const [selectedArea, setSelectedArea] = useState(null)

  return (
    <main className="flex min-h-screen">
      <div className="w-1/2 flex items-center justify-center p-8">
        <LearningFlower onPetalClick={setSelectedArea} />
      </div>
      <div className="w-1/2 bg-gray-50 p-8">
        <ContentDisplay area={selectedArea ? learningAreasData[selectedArea] : null} />
      </div>
    </main>
  )
}


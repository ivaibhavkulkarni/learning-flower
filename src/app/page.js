"use client";

import LearningFlower from '../components/LearningFlower.jsx';
import ContentDisplay from '../components/ContentDisplay.jsx';
import { learningAreasData } from '../data/learningAreas.js';
import { useState } from 'react';

export default function Home() {
  const [selectedArea, setSelectedArea] = useState('physical');

  return (
    <main className="flex flex-col lg:flex-row min-h-screen">
      {/* Flower section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 lg:p-8">
        <LearningFlower onPetalClick={setSelectedArea} />
      </div>

      {/* Content section */}
      <div className="w-full lg:w-1/2 bg-gray-50 p-4 lg:p-8">
        <ContentDisplay area={learningAreasData[selectedArea]} />
      </div>
    </main>
  );
}

"use client";

import { useState } from 'react';
import LearningFlower from '../components/LearningFlower.jsx';
import ContentDisplay from '../components/ContentDisplay.jsx';
import { learningAreasData } from '../data/learningAreas.js';
import CirclesDiagram from '../components/CirclesDiagram';
import ContentSection from '../components/ContentSection';

// Code 1
export default function Home() {
  const [selectedArea, setSelectedArea] = useState('physical');
  const [selectedCircle, setSelectedCircle] = useState('social');

  const handleSelectCircle = (id) => {
    setSelectedCircle(id);
  };

  const getContent = (id) => {
    switch (id) {
      case 'social':
        return {
          title: 'Social Well-being',
          description: 'Learn about the importance of social connections.',
          videoId: 'dQw4w9WgXcQ', // Example video ID
        };
      case 'physical':
        return {
          title: 'Physical Health',
          description: 'Discover ways to improve your physical health.',
          videoId: 'kJQP7kiw5Fk',
        };
      case 'intellectual':
        return {
          title: 'Intellectual Growth',
          description: 'Stimulate your mind with new challenges and learning.',
          videoId: 'e6UdM4kN8tM',
        };
      case 'creative':
        return {
          title: 'Creative Expression',
          description: 'Unleash your creative potential.',
          videoId: 'f9zgAkM9Jqk',
        };
      case 'emotional':
        return {
          title: 'Emotional Health',
          description: 'Understand and manage your emotions.',
          videoId: '0xXfw-HybEo',
        };
      default:
        return null;
    }
  };

  const content = selectedCircle ? getContent(selectedCircle) : null;

  return (
    <div>
      {/* Top Section: Code 1 */}
      <main className="flex flex-col lg:flex-row min-h-screen">
        {/* Flower section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-4 lg:p-8">
          <LearningFlower onPetalClick={setSelectedArea} />
        </div>

        {/* Content section */}
        <div className="w-full lg:w-1/2 p-4 lg:p-8">
          <ContentDisplay area={learningAreasData[selectedArea]} />
        </div>
      </main>

      {/* Bottom Section: Code 2 */}
      <div className="min-h-screen py-10 flex justify-center items-center">
        <div className="flex flex-col md:flex-row items-center md:items-start w-full max-w-7xl px-4">
          {/* Left Side: Content Section */}
          <div className="mb-6 md:mb-0 md:w-1/2">
            {content && (
              <div className="text-center md:text-left">
                <ContentSection
                  title={content.title}
                  description={content.description}
                  videoId={content.videoId}
                />
              </div>
            )}
          </div>

          {/* Right Side: Circles Diagram */}
          <div className="md:w-1/2 mt-10">
            <CirclesDiagram onSelect={handleSelectCircle} selected={selectedCircle} />
          </div>
        </div>
      </div>
    </div>
  );
}

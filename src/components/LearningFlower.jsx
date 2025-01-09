export default function LearningFlower({ onPetalClick }) {
  const petalStyles = {
    physical: "fill-[#DC2626] hover:brightness-110 cursor-pointer",
    literacy: "fill-[#EA580C] hover:brightness-110 cursor-pointer",
    communication: "fill-[#F59E0B] hover:brightness-110 cursor-pointer",
    expressiveArts: "fill-[#059669] hover:brightness-110 cursor-pointer",
    personalSocial: "fill-[#2563EB] hover:brightness-110 cursor-pointer",
    understanding: "fill-[#7C3AED] hover:brightness-110 cursor-pointer",
    numeracy: "fill-[#EC4899] hover:brightness-110 cursor-pointer",
  };

  // Define the radius for the flower petals
  const radius = 180;

  // Function to calculate petal path based on start angle
  const petalPath = (startAngle) => {
    const endAngle = startAngle + 51.43; // Each petal occupies 51.43 degrees
    const startX = 200 + radius * Math.cos((Math.PI / 180) * startAngle);
    const startY = 200 + radius * Math.sin((Math.PI / 180) * startAngle);
    const endX = 200 + radius * Math.cos((Math.PI / 180) * endAngle);
    const endY = 200 + radius * Math.sin((Math.PI / 180) * endAngle);
    
    return `M200,200 L${startX},${startY} A${radius},${radius} 0 0,1 ${endX},${endY} Z`;
  };

  // Function to calculate text position inside the petals based on the start angle
  const getTextPosition = (startAngle) => {
    const angle = (Math.PI / 180) * startAngle;
    const x = 200 + (radius - 40) * Math.cos(angle); // Offset text position inside the petal
    const y = 200 + (radius - 40) * Math.sin(angle);
    return { x, y };
  };

  return (
    <svg viewBox="0 0 400 400" className="w-full max-w-[600px]">
      {/* Center point */}
      <circle cx="200" cy="200" r="5" fill="white" />

      {/* Petals with adjusted angles */}
      <path
        d={petalPath(245)} // Petal 1 starts at 270 degrees
        className={petalStyles.physical}
        onClick={() => onPetalClick('physical')}
      />
      <path
        d={petalPath(245 + 51.43)} // Petal 2 starts at 321.43 degrees
        className={petalStyles.literacy}
        onClick={() => onPetalClick('literacy')}
      />
      <path
        d={petalPath(245 + 51.43 * 2)} // Petal 3 starts at 372.86 degrees
        className={petalStyles.communication}
        onClick={() => onPetalClick('communication')}
      />
      <path
        d={petalPath(245 + 51.43 * 3)} // Petal 4 starts at 64.29 degrees
        className={petalStyles.expressiveArts}
        onClick={() => onPetalClick('expressiveArts')}
      />
      <path
        d={petalPath(245 + 51.43 * 4)} // Petal 5 starts at 115.72 degrees
        className={petalStyles.personalSocial}
        onClick={() => onPetalClick('personalSocial')}
      />
      <path
        d={petalPath(245 + 51.43 * 5)} // Petal 6 starts at 167.15 degrees
        className={petalStyles.understanding}
        onClick={() => onPetalClick('understanding')}
      />
      <path
        d={petalPath(245 + 51.43 * 6)} // Petal 7 starts at 218.58 degrees
        className={petalStyles.numeracy}
        onClick={() => onPetalClick('numeracy')}
      />

      {/* Text inside the petals */}
      <text x={getTextPosition(270).x} y={getTextPosition(260).y} textAnchor="middle" fill="white" className="text-sm">Physical</text>
      <text x={getTextPosition(270 + 51.43).x} y={getTextPosition(270 + 51.43).y} textAnchor="middle" fill="white" className="text-sm">Literacy</text>
      <text x={getTextPosition(220 + 51.43 * 2).x} y={getTextPosition(265 + 51.43 * 2).y} textAnchor="middle" fill="white" className="text-sm">Communication</text>
      <text x={getTextPosition(270 + 51.43 * 3).x} y={getTextPosition(260 + 51.43 * 3).y} textAnchor="middle" fill="white" className="text-sm">Expressive Arts</text>
      <text x={getTextPosition(270 + 51.43 * 4).x} y={getTextPosition(210 + 51.43 * 4).y} textAnchor="middle" fill="white" className="text-sm">Personal & Social</text>
      <text x={getTextPosition(239 + 51.43 * 5).x} y={getTextPosition(275 + 51.43 * 5).y} textAnchor="middle" fill="white" className="text-sm"><tspan x={getTextPosition(239 + 51.43 * 5).x} dy="0">Understanding</tspan>
      <tspan x={getTextPosition(239 + 51.43 * 5).x} dy="12">the world</tspan></text>
      <text x={getTextPosition(270 + 51.43 * 6).x} y={getTextPosition(270 + 51.43 * 6).y} textAnchor="middle" fill="white" className="text-sm">Numeracy</text>
    </svg>
  );
}

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

  return (
    <svg viewBox="0 0 400 400" className="w-full max-w-[600px]">
      {/* Center point */}
      <circle cx="200" cy="200" r="5" fill="white" />

      {/* Petals with adjusted angles */}
      <path
        d={petalPath(0)} // Petal 1 starts at 0 degrees
        className={petalStyles.physical}
        onClick={() => onPetalClick('physical')}
      />
      <path
        d={petalPath(51.43)} // Petal 2 starts at 51.43 degrees
        className={petalStyles.literacy}
        onClick={() => onPetalClick('literacy')}
      />
      <path
        d={petalPath(102.86)} // Petal 3 starts at 102.86 degrees
        className={petalStyles.communication}
        onClick={() => onPetalClick('communication')}
      />
      <path
        d={petalPath(154.29)} // Petal 4 starts at 154.29 degrees
        className={petalStyles.expressiveArts}
        onClick={() => onPetalClick('expressiveArts')}
      />
      <path
        d={petalPath(205.72)} // Petal 5 starts at 205.72 degrees
        className={petalStyles.personalSocial}
        onClick={() => onPetalClick('personalSocial')}
      />
      <path
        d={petalPath(257.15)} // Petal 6 starts at 257.15 degrees
        className={petalStyles.understanding}
        onClick={() => onPetalClick('understanding')}
      />
      <path
        d={petalPath(308.58)} // Petal 7 starts at 308.58 degrees
        className={petalStyles.numeracy}
        onClick={() => onPetalClick('numeracy')}
      />

      {/* Text Labels */}
      <text x="200" y="120" textAnchor="middle" fill="white" className="text-sm">Understanding the world</text>
      <text x="290" y="150" textAnchor="middle" fill="white" className="text-sm">Numeracy</text>
      <text x="290" y="220" textAnchor="middle" fill="white" className="text-sm">Physical</text>
      <text x="250" y="270" textAnchor="middle" fill="white" className="text-sm">Literacy</text>
      <text x="200" y="290" textAnchor="middle" fill="white" className="text-sm">Communication</text>
      <text x="110" y="270" textAnchor="middle" fill="white" className="text-sm">Expressive Arts</text>
      <text x="110" y="150" textAnchor="middle" fill="white" className="text-sm">Personal & Social</text>
    </svg>
  );
}

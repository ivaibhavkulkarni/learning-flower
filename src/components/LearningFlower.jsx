export default function LearningFlower({ onPetalClick }) {
    const petalStyles = {
      physical: "fill-[#DC2626] hover:brightness-110 cursor-pointer",
      literacy: "fill-[#EA580C] hover:brightness-110 cursor-pointer",
      communication: "fill-[#F59E0B] hover:brightness-110 cursor-pointer",
      expressiveArts: "fill-[#059669] hover:brightness-110 cursor-pointer",
      personalSocial: "fill-[#2563EB] hover:brightness-110 cursor-pointer",
      understanding: "fill-[#7C3AED] hover:brightness-110 cursor-pointer",
      numeracy: "fill-[#EC4899] hover:brightness-110 cursor-pointer",
    }
  
    return (
      <svg viewBox="0 0 400 400" className="w-full max-w-[600px]">
        {/* Center point */}
        <circle cx="200" cy="200" r="5" fill="white" />
        
        {/* Petals */}
        <path 
          d="M200,200 L150,100 A100,100 0 0,1 250,100 Z" 
          className={petalStyles.physical}
          onClick={() => onPetalClick('physical')}
        />
        <path 
          d="M200,200 L250,100 A100,100 0 0,1 330,170 Z" 
          className={petalStyles.literacy}
          onClick={() => onPetalClick('literacy')}
        />
        <path 
          d="M200,200 L330,170 A100,100 0 0,1 330,230 Z" 
          className={petalStyles.communication}
          onClick={() => onPetalClick('communication')}
        />
        <path 
          d="M200,200 L330,230 A100,100 0 0,1 250,300 Z" 
          className={petalStyles.expressiveArts}
          onClick={() => onPetalClick('expressiveArts')}
        />
        <path 
          d="M200,200 L250,300 A100,100 0 0,1 150,300 Z" 
          className={petalStyles.personalSocial}
          onClick={() => onPetalClick('personalSocial')}
        />
        <path 
          d="M200,200 L150,300 A100,100 0 0,1 70,230 Z" 
          className={petalStyles.understanding}
          onClick={() => onPetalClick('understanding')}
        />
        <path 
          d="M200,200 L70,230 A100,100 0 0,1 70,170 L150,100 Z" 
          className={petalStyles.numeracy}
          onClick={() => onPetalClick('numeracy')}
        />
  
        {/* Text Labels */}
        <text x="200" y="120" textAnchor="middle" fill="white" className="text-sm">Physical</text>
        <text x="290" y="150" textAnchor="middle" fill="white" className="text-sm">Literacy</text>
        <text x="290" y="220" textAnchor="middle" fill="white" className="text-sm">Communication</text>
        <text x="250" y="270" textAnchor="middle" fill="white" className="text-sm">Expressive Arts</text>
        <text x="200" y="290" textAnchor="middle" fill="white" className="text-sm">Personal & Social</text>
        <text x="110" y="270" textAnchor="middle" fill="white" className="text-sm">Understanding</text>
        <text x="110" y="150" textAnchor="middle" fill="white" className="text-sm">Numeracy</text>
      </svg>
    )
  }
  
  
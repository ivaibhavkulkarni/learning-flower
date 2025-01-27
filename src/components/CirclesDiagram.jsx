export default function CirclesDiagram({ onSelect, selected }) {
    const circles = [
      {
        id: "social",
        color: "bg-blue-500",
        rotation: 0, // Top position
      },
      {
        id: "physical",
        color: "bg-purple-500",
        rotation: 72, // 72 degrees clockwise
      },
      {
        id: "intellectual",
        color: "bg-green-500",
        rotation: 144, // 144 degrees clockwise
      },
      {
        id: "creative",
        color: "bg-orange-500",
        rotation: 216, // 216 degrees clockwise
      },
      {
        id: "emotional",
        color: "bg-pink-500",
        rotation: 288, // 288 degrees clockwise
      },
    ]
  
    // Radius of the circular arrangement (in pixels)
    const radius = 100
  
    return (
      <div className="relative w-[400px] h-[400px] mx-auto">
        {circles.map(({ id, color, rotation }) => {
          // Calculate position using trigonometry
          const angle = (rotation * Math.PI) / 180
          const left = radius * Math.sin(angle) + 200 // 200 is half of container width
          const top = -radius * Math.cos(angle) + 200 // 200 is half of container height
  
          return (
            <button
              key={id}
              onClick={() => onSelect(id)}
              className={`
                absolute w-32 h-32 rounded-full 
                ${color} 
                transform -translate-x-1/2 -translate-y-1/2
                transition-all duration-300 hover:scale-110
                flex items-center justify-center
                ${selected === id ? "ring-4 ring-white ring-offset-4 ring-offset-gray-800 z-10" : ""}
              `}
              style={{
                left: `${left}px`,
                top: `${top}px`,
              }}
            >
              <span className="text-white text-xl capitalize">{id}</span>
            </button>
          )
        })}
      </div>
    )
  }
  
  
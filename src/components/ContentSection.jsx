export default function ContentSection({ title, description, videoId }) {
    return (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-lg text-gray-600">{description}</p>
        <div className="aspect-video">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    )
  }
  
  
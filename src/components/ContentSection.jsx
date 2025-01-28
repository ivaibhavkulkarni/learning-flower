export default function ContentSection({ title, description, videoId }) {
  return (
    <div className="h-full flex flex-col gap-6">
      <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <div className="aspect-video rounded-lg overflow-hidden bg-black">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

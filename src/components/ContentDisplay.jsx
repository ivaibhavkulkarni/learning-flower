export default function ContentDisplay({ area }) {
    if (!area) {
      return (
        <div className="h-full flex items-center justify-center">
          <p className="text-gray-500 text-lg">
            Select a learning area to view content
          </p>
        </div>
      );
    }
  
    return (
      <div className="h-full flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-gray-800">{area.title}</h1>
        <p className="text-gray-600">{area.description}</p>
        {area.videoUrl && (
          <div className="aspect-video rounded-lg overflow-hidden bg-black">
            {/* Embed YouTube video using an iframe */}
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${getYouTubeVideoId(
                area.videoUrl
              )}`}
              title={area.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    );
  }
  
  // Helper function to extract the video ID from a YouTube URL
  function getYouTubeVideoId(url) {
    const urlObj = new URL(url);
    if (urlObj.hostname === "youtu.be") {
      return urlObj.pathname.slice(1);
    } else if (urlObj.hostname.includes("youtube.com")) {
      return urlObj.searchParams.get("v");
    }
    return null; // Handle cases where the URL is invalid or not a YouTube URL
  }
  
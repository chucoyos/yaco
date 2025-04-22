// components/Video.jsx
export default function Video({
  videoId,
  title,
  description,
  className = ""
}) {
  return (
    <div className={`bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden border border-white/20 ${className}`}>
      <div className="aspect-w-16 aspect-h-9">
        <iframe 
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-white/80 text-sm">{description}</p>
      </div>
    </div>
  );
}
const LivePreview = ({ url }: { url: string }) => (
  <div className="relative rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-100 h-[260px] hover:scale-[1.048] transition-all duration-300">
    <iframe
      src={url}
      title={url}
      className="absolute top-0 left-0 w-full h-full scale-[1] origin-top-left pointer-events-none"
      sandbox="allow-same-origin allow-scripts"
      loading="lazy"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute inset-0"
      aria-label="Open live site"
    />
  </div>
);

export default LivePreview;

interface LivePreviewProps {
  url: string;
  /** Accessible, descriptive title for the iframe (e.g. "Preview of Makio Tours"). */
  title?: string;
}

/**
 * LivePreview — lazy-loaded iframe for showing a live site preview.
 *
 * Performance note: on the homepage (WorkSection) each project renders this
 * component when no `thumbnail` is provided. On mobile, iframes are a
 * significant LCP contributor. Prefer supplying a `thumbnail` screenshot
 * on Project entries; this component is the graceful fallback.
 */
const LivePreview = ({ url, title }: LivePreviewProps) => (
  <div className="relative rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-100 h-[260px] hover:scale-[1.048] transition-all duration-300">
    <iframe
      src={url}
      title={title ?? `Live preview of ${url}`}
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
      aria-label={title ? `Open ${title} in a new tab` : 'Open live site in a new tab'}
    />
  </div>
);

export default LivePreview;

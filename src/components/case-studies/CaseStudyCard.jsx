import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function CaseStudyCard({ project }) {
  return (
    <div
      className="
        relative group
        rounded-3xl
        border border-white/10
        bg-white/[0.05]
        backdrop-blur-xl
        transition-all duration-500
        hover:border-lime-400/40
        hover:shadow-[0_0_40px_rgba(217,255,47,0.12)]
        overflow-hidden
      "
    >
      {/* TOP GLOW */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-lime-400/60 to-transparent opacity-80" />

      {/* IMAGE */}
      <div className="relative cursor-zoom-in">
        <Zoom zoomMargin={40} overlayBgColorEnd="rgba(0,0,0,0.9)">
          <img
            src={project.image}
            alt={project.title}
            className="
              w-full
              h-52 sm:h-56 md:h-60
              object-cover
            "
          />
        </Zoom>

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* CONTENT */}
      <div className="p-4 sm:p-5 md:p-6 space-y-5">

        {/* TITLE */}
        <div className="space-y-1">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-snug">
            {project.title}
          </h2>

          <p className="text-lime-400 text-xs sm:text-sm font-medium">
            {project.subtitle}
          </p>
        </div>

        {/* DESCRIPTION */}
        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
          {project.description}
        </p>

        {/* INCLUDED SYSTEMS */}
        {project.highlights?.length > 0 && (
          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-white mb-2">
              Included Systems
            </h3>

            <div className="flex flex-wrap gap-2">
              {project.highlights.map((item, index) => (
                <span
                  key={index}
                  className="
                    text-[10px] sm:text-xs
                    px-2 sm:px-3 py-1
                    rounded-full
                    bg-white/5
                    border border-white/10
                    text-gray-200
                    break-words
                  "
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* BUSINESS BENEFITS */}
        {project.benefits?.length > 0 && (
          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-white mb-2">
              Business Benefits
            </h3>

            <div className="space-y-2">
              {project.benefits.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 text-gray-300 text-xs sm:text-sm"
                >
                  <span className="w-2 h-2 mt-1 rounded-full bg-lime-400 shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* RESULTS */}
        {project.results?.length > 0 && (
          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-white mb-2">
              Business Impact
            </h3>

            <div className="space-y-2">
              {project.results.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-2 text-lime-400 text-xs sm:text-sm"
                >
                  <span className="w-2 h-2 mt-1 rounded-full bg-lime-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
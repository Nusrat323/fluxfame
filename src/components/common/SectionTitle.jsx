export default function SectionTitle({
    badge,
    title,
    subtitle
  }) {
    return (
      <div className="text-center max-w-3xl mx-auto">
  
        {badge && (
          <div
            className="
            inline-flex
            glass
            px-4
            py-2
            rounded-full
            text-lime-400
            text-sm
            mb-6
          "
          >
            {badge}
          </div>
        )}
  
        <h2
          className="
          text-4xl
          md:text-5xl
          font-bold
        "
        >
          {title}
        </h2>
  
        {subtitle && (
          <p
            className="
            text-gray-400
            mt-5
            text-lg
          "
          >
            {subtitle}
          </p>
        )}
      </div>
    );
  }
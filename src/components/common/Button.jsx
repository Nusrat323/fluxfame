export default function Button({
    children,
    variant = "primary"
  }) {
  
    if (variant === "secondary") {
      return (
        <button
          className="
          glass
          px-6
          py-3
          rounded-full
          font-medium
          hover:scale-105
          duration-300
        "
        >
          {children}
        </button>
      );
    }
  
    return (
      <button
        className="
        bg-lime-400
        text-black
        px-6
        py-3
        rounded-full
        font-semibold
        lime-glow
        hover:scale-105
        duration-300
      "
      >
        {children}
      </button>
    );
  }
import { Link } from "react-router-dom";
import { FaHome, FaArrowLeft } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black text-white">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-lime-400/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-20 right-20 w-[300px] h-[300px] bg-lime-400/10 blur-[150px] rounded-full" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 text-center px-6 max-w-xl">

        {/* 404 BIG TEXT */}
        <h1 className="text-[90px] sm:text-[120px] font-black leading-none text-lime-400 drop-shadow-[0_0_25px_rgba(217,255,47,0.35)]">
          404
        </h1>

        {/* TITLE */}
        <h2 className="text-2xl sm:text-3xl font-bold mt-2">
          Page Not Found
        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-400 mt-4 text-sm sm:text-base leading-relaxed">
          The page you're looking for doesn’t exist or has been moved.
          Please check the URL or go back to the homepage.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">

          <Link
            to="/"
            className="
              flex items-center gap-2

              bg-lime-400
              text-black
              font-semibold

              px-6 py-3
              rounded-2xl

              hover:scale-105
              transition-all
              shadow-lg shadow-lime-400/20
            "
          >
            <FaHome />
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="
              flex items-center gap-2

              bg-white/5
              border border-white/10
              text-white

              px-6 py-3
              rounded-2xl

              hover:border-lime-400/30
              hover:scale-105
              transition-all
            "
          >
            <FaArrowLeft />
            Go Back
          </button>

        </div>

        
        <p className="text-xs text-gray-600 mt-10">
          FluxFame • AI Automation Systems
        </p>

      </div>
    </div>
  );
}
"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface NavigationProps {
  onPrevious: () => void;
  onNext: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
}

export default function Navigation({
  onPrevious,
  onNext,
  hasPrevious,
  hasNext,
}: NavigationProps) {
  return (
    <>
      {/* Left Arrow */}
      <button
        onClick={onPrevious}
        disabled={!hasPrevious}
        className="
          fixed
          left-8
          top-1/2
          -translate-y-1/2
          z-50

          w-14
          h-14

          flex
          items-center
          justify-center

          rounded-full

          bg-white/90
          backdrop-blur-xl

          border
          border-gray-200

          shadow-lg

          transition-all
          duration-200
          ease-out

          hover:bg-white
          hover:scale-110
          hover:shadow-xl

          active:scale-95

          disabled:opacity-25
          disabled:hover:scale-100
          disabled:hover:shadow-lg

          cursor-pointer
        "
      >
        <ChevronLeft
          size={28}
          strokeWidth={2.25}
          className="text-gray-900"
        />
      </button>

      {/* Right Arrow */}
      <button
        onClick={onNext}
        disabled={!hasNext}
        className="
          fixed
          right-8
          top-1/2
          -translate-y-1/2
          z-50

          w-14
          h-14

          flex
          items-center
          justify-center

          rounded-full

          bg-white/90
          backdrop-blur-xl

          border
          border-gray-200

          shadow-lg

          transition-all
          duration-200
          ease-out

          hover:bg-white
          hover:scale-110
          hover:shadow-xl

          active:scale-95

          disabled:opacity-25
          disabled:hover:scale-100
          disabled:hover:shadow-lg

          cursor-pointer
        "
      >
        <ChevronRight
          size={28}
          strokeWidth={2.25}
          className="text-gray-900"
        />
      </button>
    </>
  );
}
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
      <button
        onClick={onPrevious}
        disabled={!hasPrevious}
        className="fixed cursor-pointer  left-8 top-1/2 -translate-y-1/2 text-5xl hover:scale-110 disabled:opacity-20 "
      >
        ←
      </button>

      <button
        onClick={onNext}
        disabled={!hasNext}
        className="fixed cursor-pointer right-8 top-1/2 -translate-y-1/2 text-5xl hover:scale-110  disabled:opacity-20"
      >
        →
      </button>
    </>
  );
}
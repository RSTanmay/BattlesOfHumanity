"use client";

type HeaderProps = {
  onOpenMenu: () => void;
};

export default function Header({ onOpenMenu }: HeaderProps) {
  return (
    <header className="h-20 bg-white border-b border-gray-300 flex items-center justify-between px-6 shadow-sm">
      {/* Left */}
      <button
        onClick={onOpenMenu}
        className="text-3xl cursor-pointer font-bold hover:text-gray-600 transition"
      >
        ☰
      </button>

      {/* Center */}
      <h1 className="text-3xl font-bold tracking-wide">
        BIGGEST BATTLES OF HUMANITY🩸
      </h1>

      {/* Right (reserved for future features) */}
      <div className="w-8"></div>
    </header>
  );
}
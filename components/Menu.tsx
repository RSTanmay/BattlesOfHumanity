"use client";
import { eras } from "@/components/eras";
type Era = {
  name: string;
  start: number;
  end: number;
};

type EraMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  eras: Era[];
  onSelectEra: (era: Era) => void;
};

export default function EraMenu({
  isOpen,
  onClose,
  eras,
  onSelectEra,
}: EraMenuProps) {
  return (
    <>
      {/* Dark overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="h-16 flex items-center justify-between px-6 border-b">
          <h2 className="text-xl font-bold">Battle Eras</h2>

          <button
            onClick={onClose}
            className="text-2xl cursor-pointer hover:scale-130 font-bold hover:text-red-500 transition"
          >
            ×
          </button>
        </div>

        {/* Era List */}
        <div className="py-1 ">
          {eras.map((era) => (
            <button 
              key={era.name}
              onClick={() => {
                onSelectEra(era);
                onClose();
              }}
              className=" cursor-pointer w-full text-left px-6 py-2 hover:bg-gray-100 transition border-b"
            >
              <p className="font-xl text-lg">{era.name}</p>

              <p className="text-sm text-gray-500">
                {era.start} – {era.end}
              </p>
            </button>
          ))}
        </div>
      </aside>
    </>
  );
}
"use client";

import { useState } from "react";

import BattleImage from "@/components/image";
import BattleInfo from "@/components/info";
import Timeline from "@/components/timeline";
import Navigation from "@/components/navigation";

import { battles } from "@/lib/battles";

export default function Home() {
  const [currentBattle, setCurrentBattle] = useState(0);

  const battle = battles[currentBattle];

 const nextBattle = () => {
    setCurrentBattle((prev) =>
        Math.min(prev + 1, battles.length - 1)
    );
};

const previousBattle = () => {
    setCurrentBattle((prev) =>
        Math.max(prev - 1, 0)
    );
};

  return (
    <main className="h-screen bg-white flex flex-col ">
      <section className="flex-1 flex pl-50">
        <BattleImage battle={battle} />
        <BattleInfo battle={battle} />
      </section>

      <section className="border-t border-gray-300">
       <Timeline
  battles={battles}
  currentBattle={currentBattle}
/>

        <Navigation
  onPrevious={previousBattle}
  onNext={nextBattle}
  hasPrevious={currentBattle > 0}
  hasNext={currentBattle < battles.length - 1}
/>
      </section>
    </main>
  );
}
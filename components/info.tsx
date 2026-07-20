"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Battle } from "@/lib/types";

interface BattleInfoProps {
  battle: Battle;
}

export default function BattleInfo({ battle }: BattleInfoProps) {
  return (
    <div className="w-3/5 flex items-center px-10">
      <AnimatePresence mode="wait">
        <motion.div
          key={battle.id}
          initial={{
            opacity: 0,
            x: 40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          exit={{
            opacity: 0,
            x: -40,
          }}
          transition={{
            duration: 0.35,
          }}
          className="max-w-xl"
        >
          <h1 className="text-5xl font-bold mb-5">
            {battle.name}
          </h1>

          <p className="text-2xl text-gray-500 mb-4">
            {battle.displayYear}
          </p>

        <div className="space-y-2">

  <p>
    <span className="font-semibold">Armies⚔️: </span>
    {battle.armies.sideA}
  </p>

  <p className="text-center font-bold">🛡️vs🛡️</p>

  <p>{battle.armies.sideB}</p>

  <p>
    <span className="font-semibold">Winner 👑: </span>
    {battle.winner}
  </p>

  <p>
    <span className="font-semibold">Deaths ☠️: </span>
    {battle.deaths}
  </p>

  <div>
    <span className="font-semibold">History: </span>
    <p className="mt-1 leading-7 text-gray-700">
      {battle.history}
    </p>
  </div>

</div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
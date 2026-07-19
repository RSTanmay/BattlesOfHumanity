"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Battle } from "@/lib/types";

interface BattleImageProps {
  battle: Battle;
}

export default function BattleImage({ battle }: BattleImageProps) {
  return (
    <div className="w-2/5 flex items-center justify-center p-10">
      <AnimatePresence mode="wait">
        <motion.img
          key={battle.id}
          src={battle.image}
          alt={battle.name}
          className="w-full h-[60vh] object-cover rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        />
      </AnimatePresence>
    </div>
  );
}
"use client";

import { motion } from "framer-motion";
import { Battle } from "@/lib/types";
interface TimelineProps {
  battles: Battle[];
  currentBattle: number;
}

const ITEM_WIDTH = 160;

export default function Timeline({
  battles,
  currentBattle,
}: TimelineProps) {
  const offset = currentBattle * ITEM_WIDTH;

  return (
    <div className="relative overflow-hidden border-t border-gray-300 py-8">

      {/* Fixed Indicator */}
      <div className="absolute left-1/2 top-2 -translate-x-1/2 z-20 text-xl">
        ▲
      </div>

      {/* Sliding Timeline */}
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(calc(50% - ${offset}px - ${
            ITEM_WIDTH / 2
          }px))`,
        }}
      >
        {battles.map((battle) => (
          <div
            key={battle.id}
            className="w-[160px] flex-shrink-0 text-center"
          >
            <h3 className="font-semibold">
              {battle.year}
            </h3>

           
          </div>
        ))}
      </div>
    </div>
  );
}
"use client";

import { motion } from "framer-motion";

interface SkillBadgeProps {
  name: string;
  level: number;
  index: number;
}

export default function SkillBadge({ name, level, index }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="group relative p-4 rounded-xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-indigo-300 dark:hover:border-indigo-500/40 transition-all duration-200 cursor-default shadow-sm hover:shadow-md hover:shadow-indigo-500/10"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-semibold text-gray-800 dark:text-gray-100">{name}</span>
        <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity">
          {level}%
        </span>
      </div>
      <div className="h-1.5 bg-gray-100 dark:bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: level + "%" }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 + 0.3, duration: 0.8, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
        />
      </div>
    </motion.div>
  );
}

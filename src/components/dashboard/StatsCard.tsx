'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface StatsCardProps {
  label: string;
  value: string;
  change: string;
  isUp: boolean;
  color?: string;
}

export default function StatsCard({ label, value, change, isUp, color = 'nexus-purple' }: StatsCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      className="glass p-6 group cursor-pointer"
    >
      <div className="flex justify-between items-start mb-4">
        <p className="text-sm text-white/40">{label}</p>
        <div className={`p-2 rounded-lg bg-${color}/10`}>
          {isUp ? <TrendingUp size={16} className={`text-${color}`} /> : <TrendingDown size={16} className="text-red-400" />}
        </div>
      </div>
      <div className="flex items-end gap-3">
        <h3 className="text-3xl font-bold">{value}</h3>
        <span className={`text-xs mb-1.5 ${isUp ? 'text-green-400' : 'text-red-400'}`}>
          {isUp ? '+' : ''}{change}
        </span>
      </div>
      <div className="mt-4 h-1 w-full bg-white/5 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: isUp ? '70%' : '40%' }}
          transition={{ duration: 1, delay: 0.5 }}
          className={`h-full bg-${color}`}
        />
      </div>
    </motion.div>
  );
}

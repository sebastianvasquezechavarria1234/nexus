'use client';

import React from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import { ArrowUpRight } from 'lucide-react';

interface AssetCardProps {
  name: string;
  symbol: string;
  rewardRate: string;
  change: string;
  isUp: boolean;
  chartData: { value: number }[];
  color: string;
}

export default function AssetCard({ name, symbol, rewardRate, change, isUp, chartData, color }: AssetCardProps) {
  return (
    <div className="glass p-5 flex flex-col justify-between h-[180px] relative overflow-hidden group cursor-pointer border-white/5 hover:border-white/10 transition-all">
      <div className="flex justify-between items-start z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center p-2">
            <div className="w-full h-full rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold">
              {symbol}
            </div>
          </div>
          <div>
            <p className="text-[10px] text-white/40 uppercase font-bold tracking-wider">Proof of Stake</p>
            <h4 className="text-[13px] font-bold">{name} ({symbol})</h4>
          </div>
        </div>
        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/40 group-hover:bg-white/10 group-hover:text-white transition-all">
          <ArrowUpRight size={16} />
        </div>
      </div>

      <div className="z-10 mt-2">
        <p className="text-[10px] text-white/40 mb-1">Reward Rate</p>
        <div className="flex items-end gap-2">
          <h3 className="text-2xl font-bold">{rewardRate}</h3>
          <span className={`text-[10px] font-bold mb-1.5 flex items-center gap-1 ${isUp ? 'text-green-400' : 'text-red-400'}`}>
            <div className={`w-1.5 h-1.5 rounded-full ${isUp ? 'bg-green-400' : 'bg-red-400'}`}></div>
            {change}
          </span>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-16 w-full opacity-50 group-hover:opacity-100 transition-opacity">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id={`gradient-${symbol}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.2}/>
                <stop offset="95%" stopColor={color} stopOpacity={0}/>
              </linearGradient>
            </defs>
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke={color} 
              strokeWidth={2} 
              fillOpacity={1} 
              fill={`url(#gradient-${symbol})`} 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

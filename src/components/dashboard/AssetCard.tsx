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
    <div className="glass p-6 flex flex-col justify-between h-[190px] relative overflow-hidden group cursor-pointer">
      <div className="flex justify-between items-start z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center p-2 group-hover:bg-white/[0.08] transition-all">
             <div className="w-full h-full rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold">
               {symbol.slice(0, 2)}
             </div>
          </div>
          <div>
            <p className="text-[10px] text-white/30 uppercase font-black tracking-widest mb-0.5">Proof of Stake</p>
            <h4 className="text-[14px] font-bold text-white/90">{name} ({symbol})</h4>
          </div>
        </div>
        <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-white/20 group-hover:text-white group-hover:bg-white/10 transition-all border border-white/5">
          <ArrowUpRight size={14} strokeWidth={3} />
        </div>
      </div>

      <div className="z-10">
        <p className="text-[11px] text-white/30 font-medium mb-1">Reward Rate</p>
        <div className="flex items-end gap-2.5">
          <h3 className="text-3xl font-bold tracking-tight">{rewardRate}</h3>
          <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/[0.03] border border-white/[0.05]`}>
            <div className={`w-1.5 h-1.5 rounded-full ${isUp ? 'bg-[#22c55e]' : 'bg-[#ef4444]'}`}></div>
            <span className={`text-[10px] font-bold ${isUp ? 'text-[#22c55e]' : 'text-[#ef4444]'}`}>{change}</span>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-[-1px] h-20 w-full opacity-40 group-hover:opacity-70 transition-all">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id={`gradient-${symbol}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={color} stopOpacity={0.4}/>
                <stop offset="100%" stopColor={color} stopOpacity={0}/>
              </linearGradient>
            </defs>
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke={color} 
              strokeWidth={2.5} 
              fillOpacity={1} 
              fill={`url(#gradient-${symbol})`}
              animationDuration={1500}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

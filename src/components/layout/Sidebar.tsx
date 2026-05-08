'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  Box, 
  Share2, 
  Calculator, 
  Database, 
  Zap,
  Layers,
  ChevronRight,
  Circle
} from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: Box, label: 'Assets', active: false },
  { icon: Share2, label: 'Staking Providers', active: false },
  { icon: Calculator, label: 'Staking Calculator', active: false },
  { icon: Database, label: 'Data API', active: false, badge: '↗' },
  { icon: Zap, label: 'Liquid Staking', active: false, badge: 'Beta' },
];

const activeStakings = [
  { name: 'Asset Ethereum', amount: '$7,699.00', color: '#627EEA', symbol: 'ETH' },
  { name: 'Asset Avalanche', amount: '$1,340.00', color: '#E84142', symbol: 'AVAX' },
  { name: 'Asset Polygon (Matic)', amount: '$540.00', color: '#8247E5', symbol: 'MATIC' },
  { name: 'Asset Solana', amount: '$980.00', color: '#14F195', symbol: 'SOL' },
];

export default function Sidebar() {
  return (
    <aside className="w-[280px] bg-[#0a0a0c] flex flex-col h-screen fixed left-0 top-0 z-[50] overflow-y-auto border-r border-white/5">
      <div className="p-8">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-black font-semibold text-lg shadow-lg">N</div>
          <div>
            <div className="text-xl font-semibold leading-none">Nexus<span className="text-[10px] align-top text-white/40 ml-0.5">®</span></div>
            <div className="text-[10px] text-white/30 font-medium tracking-tight mt-1">Top Staking Assets</div>
          </div>
        </div>

        <div className="flex bg-[#16161a] p-1 rounded-[14px] mb-8">
          <button className="flex-1 py-2 text-[11px] font-medium bg-[#27272a] text-white rounded-[10px] shadow-sm transition-all">Staking</button>
          <button className="flex-1 py-2 text-[11px] font-medium text-white/30 hover:text-white/50 transition-colors">Stablecoin</button>
        </div>

        <nav className="space-y-1 mb-10">
          {menuItems.map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-[13px] font-medium transition-all ${
                item.active 
                ? 'bg-white/[0.04] text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]' 
                : 'text-white/40 hover:text-white/60 hover:bg-white/[0.02]'
              }`}
            >
              <item.icon size={18} className={item.active ? 'text-white' : 'text-white/30'} />
              <span className="flex-1 text-left">{item.label}</span>
              {item.badge && (
                <span className={`text-[9px] px-1.5 py-0.5 rounded font-bold uppercase ${
                  item.badge === 'Beta' ? 'bg-[#8b5cf6]/20 text-[#a78bfa]' : 'text-white/30'
                }`}>
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        <div className="space-y-5">
          <div className="flex items-center justify-between px-3">
            <div className="flex items-center gap-2 text-[11px] font-medium text-white/30 uppercase tracking-widest">
              <Layers size={14} />
              Active Staking
              <span className="bg-[#8b5cf6] text-white w-4 h-4 flex items-center justify-center rounded-full text-[9px] font-semibold">6</span>
            </div>
            <ChevronRight size={14} className="text-white/10" />
          </div>

          <div className="space-y-4 px-1">
            {activeStakings.map((stake) => (
              <div key={stake.name} className="flex items-center gap-3 cursor-pointer group px-2 py-1 hover:bg-white/[0.02] rounded-xl transition-all">
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold text-white shadow-inner relative"
                  style={{ backgroundColor: `${stake.color}20` }}
                >
                  <Circle size={14} style={{ color: stake.color, fill: stake.color }} className="opacity-80" />
                  <span className="absolute text-[8px] font-black">{stake.symbol[0]}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-semibold truncate text-white/50">{stake.name}</p>
                  <p className="text-[11px] font-bold text-white mt-0.5">Amount {stake.amount}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-auto p-6">
        <button className="w-full bg-[#16161a] border border-white/5 p-4 rounded-[20px] text-left group hover:border-white/10 transition-all relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <Zap size={14} className="text-[#a78bfa]" />
              <span className="text-[11px] font-bold text-white/90">Activate Super</span>
            </div>
            <p className="text-[10px] text-white/30">Unlock all features on Nexus</p>
          </div>
          <div className="absolute top-[-20px] right-[-20px] w-16 h-16 bg-[#8b5cf6]/10 rounded-full blur-xl"></div>
        </button>
      </div>
    </aside>
  );
}

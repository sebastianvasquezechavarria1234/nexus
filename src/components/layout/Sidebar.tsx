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
  User
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
  { name: 'Asset Ethereum', amount: '$7,699.00', icon: 'ETH' },
  { name: 'Asset Avalanche', amount: '$1,340.00', icon: 'AVAX' },
  { name: 'Asset Polygon (Matic)', amount: '$540.00', icon: 'MATIC' },
];

export default function Sidebar() {
  return (
    <aside className="w-64 border-r border-white/5 bg-[#0a0a0c] flex flex-col h-screen fixed left-0 top-0 z-[50] overflow-y-auto">
      <div className="p-6">
        <div className="text-xl font-bold flex items-center gap-2 mb-8">
          <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-black font-black text-xs">S</div>
          Stakent<span className="text-[10px] align-top text-white/40">®</span>
        </div>

        <div className="flex bg-white/5 p-1 rounded-xl mb-8">
          <button className="flex-1 py-2 text-xs font-bold bg-white/10 rounded-lg">Staking</button>
          <button className="flex-1 py-2 text-xs font-bold text-white/40">Stablecoin</button>
        </div>

        <nav className="space-y-1 mb-8">
          {menuItems.map((item) => (
            <motion.button
              key={item.label}
              whileHover={{ x: 2 }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] transition-all duration-200 ${
                item.active 
                ? 'bg-white/5 text-white' 
                : 'text-white/40 hover:text-white hover:bg-white/[0.02]'
              }`}
            >
              <item.icon size={16} className={item.active ? 'text-white' : 'text-white/40'} />
              <span className="flex-1 text-left">{item.label}</span>
              {item.badge && <span className="text-[9px] bg-indigo-500/20 text-indigo-400 px-1.5 py-0.5 rounded uppercase font-bold">{item.badge}</span>}
            </motion.button>
          ))}
        </nav>

        <div className="space-y-4">
          <div className="flex items-center justify-between px-3">
            <div className="flex items-center gap-2 text-[11px] font-bold text-white/40 uppercase tracking-widest">
              <Layers size={12} />
              Active Staking
              <span className="bg-indigo-500 text-white w-4 h-4 flex items-center justify-center rounded-full text-[9px]">6</span>
            </div>
            <ChevronRight size={14} className="text-white/20" />
          </div>

          <div className="space-y-3 px-3">
            {activeStakings.map((stake) => (
              <div key={stake.name} className="flex items-center gap-3 cursor-pointer group">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[10px] font-bold group-hover:bg-white/10 transition-colors">
                  {stake.icon[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] font-medium truncate text-white/70">{stake.name}</p>
                  <p className="text-[11px] font-bold text-white">Amount {stake.amount}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-auto p-6">
        <button className="w-full glass p-4 text-left group hover:border-white/20 transition-all">
          <div className="flex items-center gap-3 mb-2">
            <Zap size={14} className="text-white/60" />
            <span className="text-[11px] font-bold">Activate Super</span>
          </div>
          <p className="text-[10px] text-white/30">Unlock all features on Stakent</p>
        </button>
      </div>
    </aside>
  );
}

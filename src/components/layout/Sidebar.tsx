'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  Wallet, 
  ArrowUpRight, 
  Calculator, 
  Database, 
  Settings, 
  LogOut,
  User
} from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: Wallet, label: 'Assets', active: false },
  { icon: ArrowUpRight, label: 'Providers', active: false },
  { icon: Calculator, label: 'Calculator', active: false },
  { icon: Database, label: 'Data API', active: false },
  { icon: Settings, label: 'Settings', active: false },
];

export default function Sidebar() {
  return (
    <aside className="w-64 border-r border-white/5 bg-[#050505] flex flex-col h-screen fixed left-0 top-0 z-[50]">
      <div className="p-8">
        <div className="gradient-text text-2xl tracking-tighter flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-nexus-purple flex items-center justify-center text-white text-sm font-bold">N</div>
          NEXUS
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {menuItems.map((item) => (
          <motion.button
            key={item.label}
            whileHover={{ x: 4 }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all duration-300 ${
              item.active 
              ? 'bg-white/5 text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]' 
              : 'text-white/40 hover:text-white hover:bg-white/[0.02]'
            }`}
          >
            <item.icon size={18} className={item.active ? 'text-nexus-purple' : ''} />
            {item.label}
            {item.active && (
              <motion.div 
                layoutId="active-indicator"
                className="ml-auto w-1.5 h-1.5 rounded-full bg-nexus-purple" 
              />
            )}
          </motion.button>
        ))}
      </nav>

      <div className="p-6 border-t border-white/5">
        <div className="glass p-4 mb-4">
          <div className="text-xs text-white/40 uppercase mb-2">Account</div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-nexus-cyan/20 flex items-center justify-center text-nexus-cyan">
              <User size={16} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">Sebastian V.</p>
              <p className="text-[10px] text-white/30 truncate">PRO Member</p>
            </div>
          </div>
        </div>
        <button className="w-full flex items-center gap-3 px-4 py-3 text-sm text-white/40 hover:text-red-400 transition-colors">
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}

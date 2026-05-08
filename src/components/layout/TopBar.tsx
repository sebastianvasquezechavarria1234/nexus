'use client';

import React from 'react';
import { Search, Bell, Settings, ChevronDown } from 'lucide-react';

export default function TopBar() {
  return (
    <header className="h-20 border-b border-white/5 flex items-center justify-between px-8 sticky top-0 bg-[#050505]/80 backdrop-blur-md z-[40]">
      <div className="flex items-center gap-4 flex-1 max-w-xl">
        <div className="relative w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
          <input 
            type="text" 
            placeholder="Search assets, providers, or transactions..."
            className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-2.5 pl-12 pr-4 text-sm focus:outline-none focus:border-nexus-purple/50 transition-colors"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="relative p-2 text-white/40 hover:text-white transition-colors">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-nexus-purple rounded-full border-2 border-[#050505]"></span>
        </button>
        <button className="p-2 text-white/40 hover:text-white transition-colors">
          <Settings size={20} />
        </button>
        <div className="h-8 w-[1px] bg-white/10 mx-2"></div>
        <button className="flex items-center gap-3 hover:bg-white/5 p-1.5 rounded-xl transition-colors">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-nexus-purple to-nexus-cyan"></div>
          <div className="text-left hidden sm:block">
            <p className="text-sm font-medium">Ryan Crawford</p>
            <p className="text-[10px] text-white/40">ryan@nexus.io</p>
          </div>
          <ChevronDown size={14} className="text-white/40" />
        </button>
      </div>
    </header>
  );
}

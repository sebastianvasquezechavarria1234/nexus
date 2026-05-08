'use client';

import React from 'react';
import { Search, Bell, Settings, ChevronDown, Plus } from 'lucide-react';

export default function TopBar() {
  return (
    <header className="h-20 flex items-center justify-between px-8 sticky top-0 bg-[#0a0a0c]/80 backdrop-blur-md z-[40]">
      <div className="flex items-center gap-6 flex-1">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 p-0.5">
            <div className="w-full h-full rounded-full bg-[#0a0a0c] flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-white/10 overflow-hidden">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-white/40">Bryan997</span>
              <span className="text-[9px] bg-white/10 px-1 rounded font-bold">PRO</span>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-[13px] font-bold">Ryan Crawford</p>
              <ChevronDown size={14} className="text-white/40" />
            </div>
          </div>
        </div>

        <button className="flex items-center gap-2 bg-[#8b5cf6]/20 text-[#a78bfa] px-4 py-1.5 rounded-full text-xs font-bold border border-[#8b5cf6]/30 ml-4">
          Deposit
          <div className="bg-[#a78bfa] text-[#8b5cf6] rounded-md p-0.5">
            <Plus size={12} />
          </div>
        </button>
      </div>

      <div className="flex items-center gap-3">
        <button className="relative p-2 text-white/40 hover:text-white transition-colors">
          <Bell size={18} />
          <span className="absolute top-2 right-2 w-4 h-4 bg-indigo-500 rounded-full border-2 border-[#0a0a0c] text-[8px] text-white flex items-center justify-center font-bold">2</span>
        </button>
        
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-white/40" size={16} />
          <input 
            type="text" 
            placeholder="Search..."
            className="bg-white/5 border border-white/5 rounded-full py-1.5 pl-9 pr-4 text-xs focus:outline-none focus:border-white/20 transition-all w-32 focus:w-48"
          />
        </div>

        <button className="flex items-center gap-2 bg-white/5 border border-white/5 px-3 py-1.5 rounded-full text-[11px] font-bold text-white/60 hover:bg-white/10 transition-colors">
          Settings
          <Settings size={14} />
        </button>
      </div>
    </header>
  );
}

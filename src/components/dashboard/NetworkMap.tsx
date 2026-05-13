'use client';

import React from 'react';

export default function NetworkMap() {
  return (
    <div className="glass p-8 relative overflow-hidden h-[400px] flex flex-col group">
      <div className="flex justify-between items-center mb-8 relative z-10">
        <div>
          <h3 className="text-[15px] font-medium tracking-tight">Global Traffic Distribution</h3>
          <p className="text-[10px] text-white/20 font-medium uppercase tracking-widest mt-1">Live Node Activity</p>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
            <span className="text-[10px] text-white/40 font-medium uppercase tracking-widest">Active</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-white/10"></div>
            <span className="text-[10px] text-white/40 font-medium uppercase tracking-widest">Idle</span>
          </div>
        </div>
      </div>

      <div className="flex-1 relative">
        {/* Simplified Map SVG */}
        <svg viewBox="0 0 800 400" className="w-full h-full opacity-20 transition-opacity group-hover:opacity-30 duration-700">
          <path 
            d="M150,100 Q200,50 250,100 T350,100 M450,150 Q500,100 550,150 T650,150 M100,250 Q150,200 200,250 T300,250 M400,300 Q450,250 500,300 T600,300" 
            stroke="white" 
            fill="none" 
            strokeWidth="0.5" 
            strokeDasharray="4 4"
          />
          {/* Nodes */}
          <circle cx="200" cy="150" r="3" fill="#8b5cf6" className="animate-pulse">
             <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="450" cy="120" r="3" fill="#8b5cf6" className="animate-pulse" />
          <circle cx="600" cy="250" r="3" fill="#8b5cf6" className="animate-pulse" />
          <circle cx="150" cy="300" r="3" fill="#8b5cf6" className="animate-pulse" />
          
          {/* Connecting Lines */}
          <line x1="200" y1="150" x2="450" y2="120" stroke="#8b5cf6" strokeWidth="0.5" strokeOpacity="0.3" className="animate-pulse" />
          <line x1="450" y1="120" x2="600" y2="250" stroke="#8b5cf6" strokeWidth="0.5" strokeOpacity="0.3" />
          <line x1="600" y1="250" x2="150" y2="300" stroke="#8b5cf6" strokeWidth="0.5" strokeOpacity="0.3" />
        </svg>

        {/* Floating Stat Tooltips */}
        <div className="absolute top-[20%] left-[30%] bg-white/5 border border-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg animate-bounce duration-3000">
          <span className="text-[10px] font-bold text-white/80">North America: 12.4TB/s</span>
        </div>
        <div className="absolute bottom-[30%] right-[20%] bg-white/5 border border-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg animate-bounce-slow">
          <span className="text-[10px] font-bold text-white/80">Asia Pacific: 8.9TB/s</span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full p-8 flex justify-between items-end">
        <div className="space-y-1">
          <p className="text-[10px] text-white/20 font-bold uppercase tracking-widest">Total Active Nodes</p>
          <h4 className="text-2xl font-medium tracking-tight">4,129</h4>
        </div>
        <button className="text-[11px] font-medium text-[#a78bfa] hover:text-white transition-colors flex items-center gap-1 group/btn">
          View Detailed Map
          <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
        </button>
      </div>

      {/* Decorative Blobs */}
      <div className="absolute -top-[50%] -right-[20%] w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[80px]"></div>
    </div>
  );
}

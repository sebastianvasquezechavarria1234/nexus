'use client';

import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import AssetCard from '@/components/dashboard/AssetCard';
import { 
  AreaChart, 
  Area, 
  ResponsiveContainer,
} from 'recharts';
import { motion } from 'framer-motion';
import { 
  Clock, 
  Wallet, 
  RotateCcw, 
  Maximize2, 
  Filter, 
  ChevronDown, 
  PlayCircle, 
  ArrowUpRight, 
  Share2,
  Lock,
  Pause,
  ExternalLink
} from 'lucide-react';

const chartData = [
  { value: 400 }, { value: 300 }, { value: 600 }, { value: 800 }, { value: 500 }, { value: 900 }, { value: 700 }
];

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="max-w-[1600px] mx-auto space-y-10 animate-fade-in px-4 pb-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          <div className="xl:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <h3 className="text-[12px] font-bold text-white/30 uppercase tracking-widest">Recommended coins for 24 hours</h3>
                <Clock size={14} className="text-white/20" />
                <span className="bg-white/5 border border-white/5 px-2.5 py-1 rounded-lg text-[10px] font-black">3 Assets</span>
              </div>
              <div className="flex items-center gap-2">
                {['24H', 'Proof of Stake', 'Desc'].map((filter) => (
                  <button key={filter} className="bg-white/[0.03] border border-white/5 px-4 py-1.5 rounded-[12px] text-[10px] font-bold text-white/40 hover:text-white flex items-center gap-2 transition-all">
                    {filter}
                    <ChevronDown size={14} className="opacity-50" />
                  </button>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <AssetCard name="Ethereum" symbol="ETH" rewardRate="13.62%" change="6.25%" isUp={true} color="#8b5cf6" chartData={chartData} />
              <AssetCard name="BNB Chain" symbol="BNB" rewardRate="12.72%" change="5.67%" isUp={true} color="#fbbf24" chartData={chartData.map(d => ({ value: d.value * 0.8 }))} />
              <AssetCard name="Polygon" symbol="Matic" rewardRate="6.29%" change="1.89%" isUp={false} color="#06b6d4" chartData={chartData.map(d => ({ value: d.value * 1.2 }))} />
            </div>
          </div>

          <div className="glass p-8 bg-gradient-to-br from-[#4f46e5]/20 via-[#7c3aed]/5 to-transparent relative overflow-hidden flex flex-col justify-between group">
             <div className="flex justify-between items-center z-10">
               <div className="flex items-center gap-2">
                 <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-lg">
                   <div className="w-4 h-4 rounded-full border-2 border-black"></div>
                 </div>
                 <span className="text-[14px] font-bold tracking-tight">Nexus<span className="text-[9px] text-white/40 ml-0.5">®</span></span>
               </div>
               <span className="text-[9px] bg-white text-black px-2 py-0.5 rounded-full font-black uppercase shadow-xl">New</span>
             </div>

             <div className="z-10 py-8">
               <h3 className="text-2xl font-bold mb-3 tracking-tight">Liquid Staking Portfolio</h3>
               <p className="text-[12px] text-white/50 leading-relaxed max-w-[220px]">
                 An all-in-one portfolio that helps you make smarter investments into Ethereum Liquid Staking.
               </p>
             </div>

             <div className="space-y-3 z-10">
               <button className="w-full bg-[#8b5cf6] hover:bg-[#7c3aed] text-white py-3.5 rounded-[18px] text-[13px] font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-purple-500/20 active:scale-[0.98]">
                 Connect with Wallet
                 <Wallet size={16} />
               </button>
               <button className="w-full bg-white/[0.05] border border-white/[0.05] hover:bg-white/[0.08] text-white/80 py-3.5 rounded-[18px] text-[13px] font-bold transition-all flex items-center justify-center gap-2 active:scale-[0.98]">
                 Enter a Wallet Address
                 <Lock size={14} className="opacity-40" />
               </button>
             </div>
             
             {/* Abstract background effect */}
             <div className="absolute top-1/2 right-[-40px] w-56 h-56 bg-indigo-500/10 rounded-full blur-[80px]"></div>
          </div>
        </div>

        {/* Active Staking Detail Section */}
        <div className="glass p-10 relative overflow-hidden">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-[12px] font-black text-white/20 uppercase tracking-[0.2em]">Your active stakings</h3>
            <div className="flex items-center gap-6 text-white/20">
              <RotateCcw size={18} className="cursor-pointer hover:text-white transition-colors" />
              <Maximize2 size={18} className="cursor-pointer hover:text-white transition-colors" />
              <Filter size={18} className="cursor-pointer hover:text-white transition-colors" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
            <div className="lg:col-span-3 space-y-10">
              <div className="flex items-center gap-3">
                <span className="text-[11px] text-white/40 font-bold">Last Update — 45 minutes ago</span>
                <Clock size={14} className="text-white/20" />
              </div>
              
              <div className="flex items-center gap-6">
                <h2 className="text-4xl font-bold tracking-tight">Stake Avalanche (AVAX)</h2>
                <div className="w-10 h-10 rounded-xl bg-[#e84142] flex items-center justify-center text-white font-black text-lg shadow-lg shadow-red-500/20">A</div>
                <div className="flex items-center gap-3 ml-2">
                  <div className="p-2 bg-white/[0.03] border border-white/[0.05] rounded-xl text-white/40 hover:text-white transition-colors cursor-pointer"><ArrowUpRight size={18} /></div>
                  <div className="p-2 bg-white/[0.03] border border-white/[0.05] rounded-xl text-white/40 hover:text-white transition-colors cursor-pointer"><Share2 size={18} className="rotate-90" /></div>
                  <div className="p-2 bg-white/[0.03] border border-white/[0.05] rounded-xl text-white/40 hover:text-white transition-colors cursor-pointer"><ExternalLink size={18} /></div>
                </div>
                <button className="ml-auto bg-white/[0.03] border border-white/[0.05] px-6 py-2.5 rounded-[16px] text-[12px] font-bold hover:bg-white/[0.08] transition-all flex items-center gap-2">
                  View Profile <ArrowUpRight size={14} />
                </button>
              </div>

              <div className="relative py-4">
                <p className="text-[11px] text-white/20 font-bold uppercase tracking-widest absolute top-[-10px] left-0">Current Reward Balance, AVAX</p>
                <div className="flex items-center gap-10 mt-6">
                  <h1 className="text-[96px] font-black tracking-[-0.05em] leading-none">31.39686</h1>
                  <div className="flex gap-3">
                    <button className="bg-[#8b5cf6] hover:bg-[#7c3aed] px-8 py-3.5 rounded-full text-[13px] font-bold transition-all shadow-[0_10px_30px_rgba(139,92,246,0.4)] active:scale-[0.98]">Upgrade</button>
                    <button className="bg-white/[0.05] hover:bg-white/[0.08] border border-white/[0.05] px-8 py-3.5 rounded-full text-[13px] font-bold transition-all active:scale-[0.98]">Unstake</button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-8 pt-12 border-t border-white/[0.05]">
                {[
                  { label: 'Momentum', sub: 'Growth dynamics' },
                  { label: 'General', sub: 'Overview' },
                  { label: 'Risk', sub: 'Risk assessment' },
                  { label: 'Reward', sub: 'Expected profit' },
                ].map((item) => (
                  <div key={item.label} className="cursor-pointer group">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[14px] font-bold group-hover:text-white transition-colors">{item.label}</span>
                      <ChevronDown size={16} className="text-white/10 group-hover:text-white/40 transition-colors" />
                    </div>
                    <p className="text-[11px] text-white/20 font-medium">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative lg:col-span-1">
              <div className="glass p-8 bg-white/[0.01] border-white/[0.05] h-full flex flex-col rounded-[32px]">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-[15px] font-bold">Investment Period</h3>
                  <span className="text-[10px] bg-white/[0.05] border border-white/5 px-2.5 py-1 rounded-full text-white/50 font-bold">6 Month</span>
                </div>
                <p className="text-[11px] text-white/20 mb-12 font-bold uppercase tracking-[0.1em]">Contribution Period (Month)</p>
                
                <div className="relative flex-1 flex flex-col justify-center px-4">
                  <div className="h-[3px] w-full bg-white/[0.05] rounded-full relative">
                    {/* Slider Line */}
                    <div className="absolute left-0 top-0 h-full bg-indigo-500 w-[40%] rounded-full shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
                    {/* Handle */}
                    <div className="absolute left-[40%] top-1/2 -translate-y-1/2 w-5 h-5 bg-[#8b5cf6] rounded-full border-[4px] border-[#111114] shadow-xl z-20"></div>
                    {/* Value Bubble */}
                    <div className="absolute left-[40%] bottom-8 -translate-x-1/2 text-[12px] font-black bg-white/[0.08] backdrop-blur-md border border-white/[0.05] px-4 py-1.5 rounded-full shadow-2xl animate-float">4 Month</div>
                  </div>
                  
                  <div className="mt-20 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center group cursor-pointer hover:bg-white/[0.08] transition-all">
                      <Pause size={24} className="text-white/20 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </div>

                <div className="absolute right-[5px] top-1/2 -translate-y-1/2 text-[10px] text-white/10 font-bold uppercase tracking-widest rotate-90 origin-center whitespace-nowrap">Contribution Period</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Staked Tokens Trend', value: '-0.82%', sub: '24H', color: 'text-red-400' },
            { label: 'Price', value: '$41.99', sub: '24H', change: '-1.09%', changeColor: 'text-red-400' },
            { label: 'Staking Ratio', value: '60.6%', sub: '24H' },
            { label: 'Reward Rate', value: '8.4%', sub: '24H', isChart: true },
          ].map((metric) => (
            <div key={metric.label} className="glass p-7 group hover:bg-white/[0.03] transition-all cursor-pointer">
              <div className="flex justify-between items-center mb-6">
                <p className="text-[11px] text-white/20 font-black uppercase tracking-widest">{metric.label}</p>
                <div className="bg-white/[0.05] border border-white/[0.05] px-2 py-0.5 rounded-md text-[9px] font-bold text-white/30 uppercase tracking-tighter">{metric.sub}</div>
              </div>
              <div className="flex items-baseline gap-2">
                <h3 className={`text-3xl font-bold tracking-tight ${metric.color || 'text-white'}`}>{metric.value}</h3>
                {metric.change && <span className={`text-[11px] font-bold ${metric.changeColor}`}>{metric.change}</span>}
              </div>
              {metric.isChart && (
                <div className="mt-6 flex flex-col gap-2">
                   <div className="flex justify-between text-[10px] font-bold text-white/30">
                     <span>Min</span>
                     <span>Max</span>
                   </div>
                   <div className="h-1.5 w-full bg-white/[0.05] rounded-full overflow-hidden">
                     <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 w-[70%] rounded-full"></div>
                   </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

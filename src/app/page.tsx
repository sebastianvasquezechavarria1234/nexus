'use client';

import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import AssetCard from '@/components/dashboard/AssetCard';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
} from 'recharts';
import { motion } from 'framer-motion';
import { Clock, Wallet, LayoutGrid, RotateCcw, Maximize2, Filter, ChevronDown, PlayCircle, ArrowUpRight, Share2 } from 'lucide-react';

const chartData = [
  { value: 400 }, { value: 300 }, { value: 600 }, { value: 800 }, { value: 500 }, { value: 900 }, { value: 700 }
];

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="max-w-[1600px] mx-auto space-y-8 animate-fade-in">
        {/* Top Section */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          <div className="xl:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <h3 className="text-[13px] font-bold text-white/40">Recommended coins for 24 hours</h3>
                <Clock size={14} className="text-white/20" />
                <span className="bg-white/10 px-2 py-0.5 rounded text-[10px] font-bold">3 Assets</span>
              </div>
              <div className="flex items-center gap-2">
                {['24H', 'Proof of Stake', 'Desc'].map((filter) => (
                  <button key={filter} className="bg-white/5 border border-white/5 px-3 py-1 rounded-lg text-[10px] font-bold text-white/40 hover:text-white flex items-center gap-2">
                    {filter}
                    <ChevronDown size={12} />
                  </button>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <AssetCard name="Ethereum" symbol="ETH" rewardRate="13.62%" change="6.25%" isUp={true} color="#8b5cf6" chartData={chartData} />
              <AssetCard name="BNB Chain" symbol="BNB" rewardRate="12.72%" change="5.67%" isUp={true} color="#fbbf24" chartData={chartData.map(d => ({ value: d.value * 0.8 }))} />
              <AssetCard name="Polygon" symbol="Matic" rewardRate="6.29%" change="1.89%" isUp={false} color="#06b6d4" chartData={chartData.map(d => ({ value: d.value * 1.2 }))} />
            </div>
          </div>

          <div className="glass p-6 bg-gradient-to-br from-indigo-500/20 via-purple-600/10 to-transparent relative overflow-hidden flex flex-col justify-between">
             <div className="flex justify-between items-center z-10">
               <div className="flex items-center gap-2">
                 <div className="w-6 h-6 rounded-md bg-white flex items-center justify-center">
                   <div className="w-4 h-4 rounded-full border-2 border-black"></div>
                 </div>
                 <span className="text-[12px] font-bold">Stakent<span className="text-[9px] text-white/40">®</span></span>
               </div>
               <span className="text-[9px] bg-indigo-500 px-1.5 py-0.5 rounded font-bold uppercase">New</span>
             </div>

             <div className="z-10 py-6">
               <h3 className="text-xl font-bold mb-2">Liquid Staking Portfolio</h3>
               <p className="text-[11px] text-white/50 leading-relaxed max-w-[200px]">
                 An all-in-one portfolio that helps you make smarter investments into Ethereum Liquid Staking.
               </p>
             </div>

             <div className="space-y-2 z-10">
               <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2">
                 Connect with Wallet
                 <Wallet size={14} />
               </button>
               <button className="w-full bg-white/5 hover:bg-white/10 text-white/70 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2">
                 Enter a Wallet Address
                 <div className="bg-white/10 p-0.5 rounded">🔒</div>
               </button>
             </div>
             
             {/* Abstract background decorations */}
             <div className="absolute top-1/2 right-[-20px] w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl"></div>
          </div>
        </div>

        {/* Active Staking Detail Section */}
        <div className="glass p-8 relative">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-[13px] font-bold text-white/40 uppercase tracking-widest">Your active stakings</h3>
            <div className="flex items-center gap-4 text-white/30">
              <RotateCcw size={16} className="cursor-pointer hover:text-white" />
              <Maximize2 size={16} className="cursor-pointer hover:text-white" />
              <Filter size={16} className="cursor-pointer hover:text-white" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-[11px] text-white/40 font-bold">Last Update — 45 minutes ago</span>
                <Clock size={12} className="text-white/40" />
              </div>
              
              <div className="flex items-center gap-4">
                <h2 className="text-3xl font-bold">Stake Avalanche (AVAX)</h2>
                <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center text-red-500">A</div>
                <div className="flex items-center gap-2 ml-4">
                  <div className="p-1.5 bg-white/5 rounded-lg text-white/40"><ArrowUpRight size={14} /></div>
                  <div className="p-1.5 bg-white/5 rounded-lg text-white/40"><Share2 size={14} className="rotate-90" /></div>
                </div>
                <button className="ml-auto bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-[11px] font-bold hover:bg-white/10 transition-all flex items-center gap-2">
                  View Profile <ArrowUpRight size={14} />
                </button>
              </div>

              <div className="flex items-baseline gap-4 py-4">
                <p className="text-[11px] text-white/40 absolute top-[145px]">Current Reward Balance, AVAX</p>
                <h1 className="text-[72px] font-bold tracking-tighter leading-none mt-4">31.39686</h1>
                <div className="flex gap-2">
                  <button className="bg-indigo-500 hover:bg-indigo-600 px-6 py-2.5 rounded-xl text-xs font-bold transition-all shadow-[0_0_20px_rgba(99,102,241,0.3)]">Upgrade</button>
                  <button className="bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-2.5 rounded-xl text-xs font-bold transition-all">Unstake</button>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/5">
                {[
                  { label: 'Momentum', sub: 'Growth dynamics' },
                  { label: 'General', sub: 'Overview' },
                  { label: 'Risk', sub: 'Risk assessment' },
                  { label: 'Reward', sub: 'Expected profit' },
                ].map((item) => (
                  <div key={item.label} className="cursor-pointer group">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[12px] font-bold group-hover:text-white transition-colors">{item.label}</span>
                      <ChevronDown size={14} className="text-white/20" />
                    </div>
                    <p className="text-[10px] text-white/30">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="glass p-6 bg-white/[0.02] border-white/10 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-[14px] font-bold">Investment Period</h3>
                  <span className="text-[9px] bg-white/5 px-2 py-0.5 rounded text-white/40">6 Month</span>
                </div>
                <p className="text-[10px] text-white/30 mb-8 uppercase tracking-widest">Contribution Period (Month)</p>
                
                <div className="relative flex-1 flex flex-col justify-center">
                  <div className="h-[2px] w-full bg-white/10 relative">
                    <div className="absolute left-[40%] top-1/2 -translate-y-1/2 w-4 h-4 bg-indigo-500 rounded-full border-4 border-[#0a0a0c] shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
                    <div className="absolute left-[40%] bottom-6 -translate-x-1/2 text-[11px] font-bold bg-white/10 px-3 py-1 rounded-full">4 Month</div>
                  </div>
                  
                  <div className="mt-12 flex justify-center">
                    <PlayCircle size={32} className="text-white/20 hover:text-white transition-all cursor-pointer" />
                  </div>
                </div>

                <div className="absolute right-[-10px] top-4 text-[9px] text-white/20 rotate-90 origin-right">6 Month</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Staked Tokens Trend', value: '-0.82%', sub: '24H' },
            { label: 'Price', value: '$41.99', sub: '24H', change: '-1.09%' },
            { label: 'Staking Ratio', value: '60.6%', sub: '24H' },
            { label: 'Reward Rate', value: '8.4%', sub: '24H', isChart: true },
          ].map((metric) => (
            <div key={metric.label} className="glass p-6 group hover:bg-white/[0.04] transition-all">
              <div className="flex justify-between items-center mb-4">
                <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest">{metric.label}</p>
                <span className="text-[9px] bg-white/5 px-2 py-0.5 rounded text-white/40">{metric.sub}</span>
              </div>
              <div className="flex items-baseline gap-2">
                <h3 className="text-2xl font-bold">{metric.value}</h3>
                {metric.change && <span className="text-[10px] font-bold text-red-400">{metric.change}</span>}
              </div>
              {metric.isChart && (
                <div className="mt-4 h-4 flex items-center gap-1">
                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-500 w-[70%]"></div>
                  </div>
                  <span className="text-[9px] text-white/30 whitespace-nowrap">8.4% APY</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}



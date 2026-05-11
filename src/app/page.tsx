'use client';

import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import AssetCard from '@/components/dashboard/AssetCard';
import { 
  AreaChart, 
  Area, 
  ResponsiveContainer,
} from 'recharts';
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
  ExternalLink,
  Cpu,
  Activity,
  Globe,
  Zap
} from 'lucide-react';

const chartData = [
  { value: 400 }, { value: 300 }, { value: 600 }, { value: 800 }, { value: 500 }, { value: 900 }, { value: 700 }
];

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="max-w-[1600px] mx-auto space-y-10 animate-fade-in px-4 pb-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-3">
          <div className="xl:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <h3 className="text-[12px] font-medium text-white/30 uppercase tracking-widest">Optimized Network Pathways (24H)</h3>
                <Clock size={14} className="text-white/20" />
                <span className="bg-white/5 border border-white/5 px-2.5 py-1 rounded-lg text-[10px] font-semibold">3 Active</span>
              </div>
              <div className="flex items-center gap-2">
                {['Live', 'High Capacity', 'Throughput'].map((filter) => (
                  <button key={filter} className="bg-white/[0.03] border border-white/5 px-4 py-2.5 rounded-[14px] text-[11px] font-light text-white/40 hover:text-white flex items-center gap-2 transition-all">
                    {filter}
                    <ChevronDown size={14} className="opacity-50" />
                  </button>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <AssetCard name="Primary Gateway" symbol="GW-1" rewardRate="99.98%" change="0.05%" isUp={true} color="#8b5cf6" chartData={chartData} />
              <AssetCard name="Neural Relay" symbol="NR-X" rewardRate="94.22%" change="2.14%" isUp={true} color="#fbbf24" chartData={chartData.map(d => ({ value: d.value * 0.8 }))} />
              <AssetCard name="Edge Link" symbol="EL-4" rewardRate="86.29%" change="1.89%" isUp={false} color="#06b6d4" chartData={chartData.map(d => ({ value: d.value * 1.2 }))} />
            </div>
          </div>

          <div className="glass p-8 bg-gradient-to-br from-[#4f46e5]/20 via-[#7c3aed]/5 to-transparent relative overflow-hidden flex flex-col justify-between group">
             <div className="flex justify-between items-center z-10">
               <div className="flex items-center gap-2">
                 <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-lg">
                   <div className="w-4 h-4 rounded-full border-2 border-black"></div>
                 </div>
                 <span className="text-[14px] font-medium tracking-tight">Nexus<span className="text-[9px] text-white/40 ml-0.5">®</span></span>
               </div>
               <span className="text-[9px] bg-white text-black px-2 py-0.5 rounded-full font-semibold uppercase shadow-xl">V2.0</span>
             </div>

             <div className="z-10 py-8">
               <h3 className="text-2xl font-medium mb-3 tracking-tight">Unified Network Intelligence</h3>
               <p className="text-[12px] text-white/50 leading-relaxed max-w-[220px]">
                 Automate your digital presence with high-speed neural links and edge computing infrastructure.
               </p>
             </div>

             <div className="space-y-3 z-10">
               <button className="w-full bg-[#8b5cf6] hover:bg-[#7c3aed] text-white py-2.5 rounded-[14px] text-[13px] font-light transition-all flex items-center justify-center gap-2 shadow-lg shadow-purple-500/20 active:scale-[0.98]">
                 Sync with Network
                 <Globe size={16} />
               </button>
               <button className="w-full bg-white/[0.05] border border-white/[0.05] hover:bg-white/[0.08] text-white/80 py-2.5 rounded-[14px] text-[13px] font-light transition-all flex items-center justify-center gap-2 active:scale-[0.98]">
                 Manual Node Integration
                 <Lock size={14} className="opacity-40" />
               </button>
             </div>
             
             {/* Abstract background effect */}
             <div className="absolute top-1/2 right-[-40px] w-56 h-56 bg-indigo-500/10 rounded-full blur-[80px]"></div>
          </div>
        </div>

        {/* Active Staking Detail Section */}
        <div className="glass p-10 relative overflow-hidden -mt-6">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-[12px] font-medium text-white/20 uppercase tracking-[0.2em]">Active Core Infrastructure</h3>
            <div className="flex items-center gap-6 text-white/20">
              <RotateCcw size={18} className="cursor-pointer hover:text-white transition-colors" />
              <Maximize2 size={18} className="cursor-pointer hover:text-white transition-colors" />
              <Filter size={18} className="cursor-pointer hover:text-white transition-colors" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
            <div className="lg:col-span-3 space-y-12">
              {/* Header Section: Identity & Global Actions */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-3xl bg-gradient-to-br from-[#8b5cf6] to-[#6d28d9] p-[1px] shadow-xl shadow-purple-500/20">
                    <div className="w-full h-full rounded-[23px] bg-[#0a0a0c] flex items-center justify-center text-[#a78bfa] font-bold text-2xl">
                      N
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <h2 className="text-3xl font-medium tracking-tight">Mainframe Cluster <span className="text-white/20 font-light">X-7</span></h2>
                      <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-green-500/10 border border-green-500/20 text-[9px] text-green-400 font-bold uppercase tracking-wider">
                        <div className="w-1 h-1 rounded-full bg-green-400 animate-pulse"></div>
                        Operational
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <p className="text-[11px] text-white/30 font-medium tracking-widest uppercase">Nexus Core Infrastructure — v2.0.4</p>
                      <div className="w-1 h-1 rounded-full bg-white/10"></div>
                      <span className="text-[11px] text-white/40 font-medium">Synced 45m ago</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 bg-white/[0.02] border border-white/[0.05] p-1.5 rounded-2xl">
                  <div className="flex items-center">
                    <button className="p-2.5 hover:bg-white/5 rounded-xl text-white/30 hover:text-white transition-all"><ArrowUpRight size={18} /></button>
                    <button className="p-2.5 hover:bg-white/5 rounded-xl text-white/30 hover:text-white transition-all"><Share2 size={18} className="rotate-90" /></button>
                    <button className="p-2.5 hover:bg-white/5 rounded-xl text-white/30 hover:text-white transition-all"><ExternalLink size={18} /></button>
                  </div>
                  <div className="w-px h-6 bg-white/10 mx-1"></div>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-[11px] font-semibold transition-all">
                    <Activity size={14} className="text-[#a78bfa]" />
                    Profile
                  </button>
                </div>
              </div>

              {/* Main Stats Row */}
              <div className="grid grid-cols-12 gap-12 items-center">
                <div className="col-span-7 space-y-8">
                   <div className="space-y-2">
                     <p className="text-[11px] text-white/20 font-medium uppercase tracking-[0.2em]">Real-time Throughput</p>
                     <div className="flex items-baseline gap-4">
                       <h1 className="text-[92px] font-medium tracking-[-0.06em] leading-none text-white">31.39686</h1>
                       <span className="text-lg font-medium text-white/10 tracking-widest uppercase">Petabytes / s</span>
                     </div>
                   </div>
                   <div className="flex gap-4">
                     <button className="bg-[#8b5cf6] hover:bg-[#7c3aed] px-8 py-2.5 rounded-[14px] text-[13px] font-light transition-all shadow-[0_10px_30px_rgba(139,92,246,0.2)] active:scale-[0.98]">Optimize Network</button>
                     <button className="bg-white/[0.03] hover:bg-white/[0.05] border border-white/[0.05] px-8 py-2.5 rounded-[14px] text-[13px] font-light transition-all active:scale-[0.98]">Offline Mode</button>
                   </div>
                </div>
                
                <div className="col-span-5 grid grid-cols-1 gap-4">
                   {[
                     { label: 'Architecture', value: '128-bit Quad', icon: <Cpu size={14} />, color: 'text-indigo-400' },
                     { label: 'Compute Load', value: '14.2%', icon: <Activity size={14} />, color: 'text-emerald-400' },
                     { label: 'Energy Draw', value: '0.82 kW/h', icon: <Zap size={14} />, color: 'text-amber-400' },
                   ].map((stat) => (
                     <div key={stat.label} className="glass p-5 flex items-center justify-between border-white/[0.03] bg-white/[0.01]">
                       <div className="flex items-center gap-4">
                         <div className={`p-2.5 rounded-xl bg-white/[0.03] ${stat.color} border border-white/[0.05]`}>{stat.icon}</div>
                         <span className="text-[11px] font-medium text-white/30 uppercase tracking-wider">{stat.label}</span>
                       </div>
                       <span className="text-[14px] font-bold text-white/90 font-mono tracking-tight">{stat.value}</span>
                     </div>
                   ))}
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-4 gap-10 pt-10 border-t border-white/[0.05]">
                {[
                  { label: 'Neural Flow', sub: 'Signal dynamics', value: 'Optimized', status: 'bg-indigo-500' },
                  { label: 'Topology', sub: 'Network layout', value: 'Distributed', status: 'bg-emerald-500' },
                  { label: 'Latency', sub: 'Response time', value: '12ms avg', status: 'bg-amber-500' },
                  { label: 'Reliability', sub: 'Uptime score', value: '99.99%', status: 'bg-blue-500' },
                ].map((item) => (
                  <div key={item.label} className="cursor-pointer group">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[14px] font-medium group-hover:text-white transition-colors">{item.label}</span>
                      <div className={`w-1.5 h-1.5 rounded-full ${item.status} shadow-[0_0_12px_rgba(255,255,255,0.1)]`}></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-[11px] text-white/20 font-medium">{item.sub}</p>
                      <span className="text-[10px] text-white/40 font-mono">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative lg:col-span-1">
              <div className="glass p-8 bg-white/[0.01] border-white/[0.05] h-full flex flex-col rounded-[32px] min-h-[450px]">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-[15px] font-medium tracking-tight">System Monitor</h3>
                    <p className="text-[10px] text-white/20 font-medium uppercase tracking-widest">Real-time Stream</p>
                  </div>
                  <span className="text-[9px] bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-1 rounded-full text-indigo-400 font-bold animate-pulse">LIVE</span>
                </div>
                
                <div className="flex-1 space-y-6 overflow-hidden relative">
                  {[
                    { time: '09:42:11', event: 'Packet routing optimized via Neural Relay NR-X', detail: 'Latency reduced by 4ms', color: 'bg-indigo-500' },
                    { time: '09:41:04', event: 'New node connection established: Edge Link EL-4', detail: 'Bandwidth: 1.2 GB/s', color: 'bg-emerald-500' },
                    { time: '09:38:55', event: 'Security handshake completed: RSA-4096', detail: 'Identity verified', color: 'bg-blue-500' },
                    { time: '09:35:12', event: 'Mainframe Cluster (X-7) auto-scaling triggered', detail: 'Added 2 virtual nodes', color: 'bg-purple-500' },
                    { time: '09:30:00', event: 'Backup synchronization successful', detail: 'All clusters synced', color: 'bg-white/20' },
                  ].map((log, i) => (
                    <div key={i} className="relative pl-6 pb-2 border-l border-white/5 group last:pb-0">
                      <div className={`absolute left-[-3.5px] top-0 w-1.5 h-1.5 rounded-full ${log.color} shadow-[0_0_8px_rgba(255,255,255,0.1)] group-hover:scale-125 transition-transform`}></div>
                      <div className="flex flex-col gap-1.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] text-white/20 font-mono">{log.time}</span>
                          <ArrowUpRight size={10} className="text-white/10 group-hover:text-white/40 transition-all" />
                        </div>
                        <p className="text-[11px] text-white/60 leading-relaxed font-medium group-hover:text-white transition-colors">{log.event}</p>
                        <p className="text-[9px] text-white/20 font-medium italic">{log.detail}</p>
                      </div>
                    </div>
                  ))}
                  
                  {/* Fading effect at bottom */}
                  <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#0a0a0c] to-transparent pointer-events-none"></div>
                </div>

                <button className="mt-8 w-full py-2.5 rounded-[14px] bg-white/[0.03] border border-white/5 text-[13px] font-light text-white/40 hover:bg-white/[0.05] hover:text-white transition-all flex items-center justify-center gap-2">
                  View Full History
                  <ExternalLink size={12} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { key: 'Latency Trend', label: 'Latency Trend', value: '-0.82ms', sub: '24H', color: 'text-green-400' },
            { key: 'Bandwidth Cost', label: 'Bandwidth Cost', value: '$0.041', sub: 'MB', change: '-1.09%', changeColor: 'text-green-400' },
            { key: 'Saturation', label: 'Network Saturation', value: '42.6%', sub: 'Global' },
            { key: 'Uptime', label: 'Uptime Efficiency', value: '99.9%', sub: 'SLA', isChart: true },
          ].map((metric) => (
            <div key={metric.label} className="glass p-7 group hover:bg-white/[0.03] transition-all cursor-pointer">
              <div className="flex justify-between items-center mb-6">
                <p className="text-[11px] text-white/20 font-medium uppercase tracking-widest">{metric.label}</p>
                <div className="bg-white/[0.05] border border-white/[0.05] px-2 py-0.5 rounded-md text-[9px] font-medium text-white/30 uppercase tracking-tighter">{metric.sub}</div>
              </div>
              <div className="flex items-baseline gap-2">
                <h3 className={`text-3xl font-medium tracking-tight ${metric.color || 'text-white'}`}>{metric.value}</h3>
                {metric.change && <span className={`text-[10px] font-medium ${metric.changeColor}`}>{metric.change}</span>}
              </div>
              {metric.isChart && (
                <div className="mt-6 flex flex-col gap-2">
                   <div className="flex justify-between text-[10px] font-medium text-white/30">
                     <span>Min</span>
                     <span>Max</span>
                   </div>
                   <div className="h-1.5 w-full bg-white/[0.05] rounded-full overflow-hidden">
                     <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 w-[99%] rounded-full"></div>
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

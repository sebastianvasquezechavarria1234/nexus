'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import DashboardLayout from '@/components/layout/DashboardLayout';
import AssetCard from '@/components/dashboard/AssetCard';
import NetworkMap from '@/components/dashboard/NetworkMap';
import { 
  AreaChart, 
  Area, 
  ResponsiveContainer,
} from 'recharts';
import { 
  Clock, 
  RotateCcw, 
  Maximize2, 
  Filter, 
  ChevronDown, 
  ArrowUpRight, 
  Share2,
  Lock,
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
  const [throughput, setThroughput] = useState(31.39686);
  const [logs] = useState([
    { time: '09:42:11', event: 'Packet routing optimized via Neural Relay NR-X', detail: 'Latency reduced by 4ms', color: 'bg-indigo-500' },
    { time: '09:41:04', event: 'New node connection established: Edge Link EL-4', detail: 'Bandwidth: 1.2 GB/s', color: 'bg-emerald-500' },
    { time: '09:38:55', event: 'Security handshake completed: RSA-4096', detail: 'Identity verified', color: 'bg-blue-500' },
    { time: '09:35:12', event: 'Mainframe Cluster (X-7) auto-scaling triggered', detail: 'Added 2 virtual nodes', color: 'bg-purple-500' },
    { time: '09:30:00', event: 'Backup synchronization successful', detail: 'All clusters synced', color: 'bg-white/20' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setThroughput(prev => {
        const change = (Math.random() - 0.5) * 0.001;
        return prev + change;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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

          <div className="glass p-8 bg-[#111114] relative overflow-hidden flex flex-col justify-between group transition-all duration-500 hover:shadow-[0_0_50px_rgba(139,92,246,0.15)]">
             {/* Dynamic Mesh Gradient Background */}
             <div className="absolute inset-0 bg-gradient-to-br from-[#4f46e5]/20 via-transparent to-transparent opacity-100 transition-opacity duration-500 group-hover:opacity-80"></div>
             
             {/* Intense Blobs from the start */}
             <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] bg-[#8b5cf6]/25 rounded-full blur-[80px] transition-all duration-700"></div>
             <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-[#d946ef]/20 rounded-full blur-[60px] transition-all duration-700 animate-pulse"></div>
             <div className="absolute top-1/4 -right-10 w-48 h-48 bg-[#8b5cf6]/20 rounded-full blur-[60px] transition-all duration-700"></div>

             <div className="flex justify-between items-center z-10">
               <div className="flex items-center gap-2">
                 <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white/[0.15] to-transparent border border-white/10 flex items-center justify-center backdrop-blur-md shadow-lg group-hover:scale-110 transition-transform duration-500">
                   <span className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-white/40">N</span>
                 </div>
                 <span className="text-[14px] font-medium tracking-tight">Nexus<span className="text-[9px] text-white/40 ml-0.5">®</span></span>
               </div>
               <span className="text-[9px] bg-white text-black px-2 py-0.5 rounded-full font-semibold uppercase shadow-xl group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-500">V2.0</span>
             </div>

             <div className="z-10 py-8">
               <h3 className="text-2xl font-medium mb-3 tracking-tight group-hover:translate-x-1 transition-transform duration-500">Unified Network Intelligence</h3>
               <p className="text-[12px] text-white/50 leading-relaxed max-w-[220px] font-light">
                 Automate your digital presence with high-speed neural links and edge computing infrastructure.
               </p>
             </div>

             <div className="space-y-3 z-10">
               <button className="w-full bg-[#8b5cf6] hover:bg-[#7c3aed] text-white py-2.5 rounded-[14px] text-[13px] font-light transition-all flex items-center justify-center gap-2 shadow-lg shadow-purple-500/20 active:scale-[0.98]">
                 Sync with Network
                 <Globe size={16} className="group-hover:rotate-12 transition-transform" />
               </button>
               <button className="w-full bg-white/[0.05] border border-white/[0.05] hover:bg-white/[0.08] text-white/80 py-2.5 rounded-[14px] text-[13px] font-light transition-all flex items-center justify-center gap-2 active:scale-[0.98]">
                 Manual Node Integration
                 <Lock size={14} className="opacity-40" />
               </button>
             </div>
          </div>
        </div>

        {/* Active Staking Detail Section */}
        <div className="glass p-10 relative overflow-hidden -mt-6">
          {/* Subtle background effects */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none"></div>
          
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
                <div className="flex items-start gap-6">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-white/[0.08] to-transparent border border-white/10 flex items-center justify-center backdrop-blur-md shadow-2xl">
                      <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-white/40">N</span>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#0a0a0c] border-[3px] border-[#0a0a0c] flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-4">
                      <h2 className="text-4xl font-extralight tracking-tight text-white">Mainframe Cluster <span className="text-white/20 font-extralight tracking-tighter">#X-7</span></h2>
                      <div className="px-3 py-1 rounded-full bg-green-500/5 border border-green-500/10 flex items-center gap-2">
                        <span className="text-[10px] font-bold text-green-400 uppercase tracking-widest">Operational</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-5 text-[11px] font-medium text-white/60">
                      <div className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-indigo-500/50"></div>
                        <span>Nexus Infrastructure v2.0.4</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-purple-500/50"></div>
                        <span>Last Sync: 45m ago</span>
                      </div>
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

              {/* Main Stats Area */}
              <div className="space-y-12">
                <div className="flex items-end justify-between">
                  <div className="space-y-2">
                    <p className="text-[11px] text-white/60 font-medium uppercase tracking-widest">Real-time Throughput</p>
                    <div className="flex items-baseline gap-4">
                      <DigitSlider value={throughput} />
                      <span className="text-lg font-medium text-white/40">Petabytes / s</span>
                    </div>
                  </div>
                  <div className="flex gap-4 pb-2">
                    <button className="bg-[#8b5cf6] hover:bg-[#7c3aed] px-10 py-2.5 rounded-[14px] text-[13px] font-light transition-all shadow-[0_10px_30px_rgba(139,92,246,0.2)] active:scale-[0.98]">Optimize Network</button>
                    <button className="bg-white/[0.03] hover:bg-white/[0.05] border border-white/[0.05] px-10 py-2.5 rounded-[14px] text-[13px] font-light transition-all active:scale-[0.98]">Offline Mode</button>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-3">
                   {[
                     { 
                       label: 'Architecture', 
                       value: '128-bit Quad', 
                       sub: 'Neural Core V3', 
                       icon: <Cpu size={18} />, 
                       color: 'text-indigo-400', 
                       bg: 'bg-indigo-500', 
                       glow: 'hover:shadow-[0_0_20px_rgba(99,102,241,0.05)]',
                       details: [{ l: 'Units', v: '512' }, { l: 'Set', v: 'RISC-V' }, { l: 'Cache', v: '64KB' }, { l: 'Bus', v: '512GB/s' }]
                     },
                     { 
                       label: 'Compute Load', 
                       value: '14.2%', 
                       sub: 'Peak: 24.5%', 
                       icon: <Activity size={18} />, 
                       color: 'text-emerald-400', 
                       bg: 'bg-emerald-500', 
                       glow: 'hover:shadow-[0_0_20px_rgba(16,185,129,0.05)]',
                       details: [{ l: 'RAM', v: '4.2GB' }, { l: 'Threads', v: '1k+' }, { l: 'Wait', v: '0.2%' }, { l: 'Queue', v: '0' }]
                     },
                     { 
                       label: 'Energy Draw', 
                       value: '0.82 kW/h', 
                       sub: 'Efficiency: 98%', 
                       icon: <Zap size={18} />, 
                       color: 'text-amber-400', 
                       bg: 'bg-amber-500', 
                       glow: 'hover:shadow-[0_0_20px_rgba(245,158,11,0.05)]',
                       details: [{ l: 'Volt', v: '1.2V' }, { l: 'Temp', v: '32°C' }, { l: 'Fan', v: '1.2k' }, { l: 'Peak', v: '1.1kW' }]
                     },
                   ].map((stat) => (
                     <div key={stat.label} className={`glass p-5 flex flex-col gap-4 border-white/10 bg-white/[0.04] hover:bg-white/[0.06] transition-all group ${stat.glow}`}>
                       <div className="flex items-center justify-between">
                         <div className={`p-2.5 rounded-xl bg-white/5 ${stat.color} border border-white/10 group-hover:scale-110 transition-transform`}>{stat.icon}</div>
                         <div className="text-right">
                           <span className="text-[15px] font-bold text-white font-mono tracking-tight block">{stat.value}</span>
                           <span className="text-[9px] text-white/40 font-medium uppercase tracking-widest">{stat.sub}</span>
                         </div>
                       </div>
                       
                       <div className="space-y-2">
                         <div className="flex justify-between items-center">
                           <p className="text-[10px] font-medium text-white/60 uppercase tracking-widest">{stat.label}</p>
                           <span className="text-[8px] bg-white/10 px-1.5 py-0.5 rounded text-white/60 font-bold tracking-tighter">STABLE</span>
                         </div>
                         <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                           <div className={`h-full ${stat.bg} opacity-50 group-hover:opacity-100 transition-all w-2/3`}></div>
                         </div>
                       </div>

                       <div className="grid grid-cols-2 gap-x-4 gap-y-3 pt-3 border-t border-white/10">
                         {stat.details.map((d, i) => (
                           <div key={i} className="flex flex-col gap-0.5">
                             <span className="text-[7px] text-white/30 font-bold uppercase tracking-wider">{d.l}</span>
                             <span className="text-[10px] text-white/70 font-mono group-hover:text-white transition-colors">{d.v}</span>
                           </div>
                         ))}
                       </div>

                       <div className="flex items-center justify-between mt-1 pt-3 border-t border-white/10">
                         <span className="text-[7px] text-white/30 font-bold uppercase tracking-widest">Region: EU-WEST-1</span>
                         <div className="flex items-center gap-1.5">
                           <div className={`w-1 h-1 rounded-full ${stat.bg} animate-pulse shadow-[0_0_8px_${stat.bg.replace('bg-', '')}]`}></div>
                           <span className="text-[7px] text-white/40 font-bold uppercase tracking-widest">Live Feed</span>
                         </div>
                       </div>
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
              <div className="p-8 border-l border-white/[0.05] h-full flex flex-col min-h-[450px]">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-[15px] font-medium tracking-tight">System Monitor</h3>
                    <p className="text-[10px] text-white/20 font-medium uppercase tracking-widest">Real-time Stream</p>
                  </div>
                  <span className="text-[9px] bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-1 rounded-full text-indigo-400 font-bold animate-pulse">LIVE</span>
                </div>
                
                <div className="flex-1 space-y-6 overflow-visible relative">
                  {logs.map((log, i) => (
                    <div key={i} className="relative pl-6 pb-2 border-l border-white/5 group last:pb-0 animate-slide-in">
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
        
        {/* Network Map Section */}
        <NetworkMap />

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

function DigitSlider({ value }: { value: number }) {
  const str = value.toFixed(5);
  const prevStr = useRef(str);

  useEffect(() => {
    prevStr.current = str;
  });

  return (
    <h1 className="text-[92px] font-medium tracking-[-0.06em] leading-none text-white tabular-nums">
      {str.split('').map((char, i) => {
        const changed = prevStr.current[i] !== char;
        return (
          <motion.span
            key={`${i}-${char}`}
            initial={changed ? { y: -8, opacity: 0 } : {}}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.1, ease: "easeOut" }}
            className="inline-block text-center"
            style={{ width: char === '.' ? '0.3em' : '0.55em' }}
          >
            {char}
          </motion.span>
        );
      })}
    </h1>
  );
}

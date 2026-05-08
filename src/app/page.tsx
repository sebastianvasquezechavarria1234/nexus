'use client';

import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { Activity, Shield, Cpu, Zap, Globe, BarChart3 } from 'lucide-react';

const data = [
  { name: '00:00', value: 400, load: 240 },
  { name: '04:00', value: 300, load: 139 },
  { name: '08:00', value: 900, load: 980 },
  { name: '12:00', value: 700, load: 390 },
  { name: '16:00', value: 500, load: 480 },
  { name: '20:00', value: 800, load: 380 },
  { name: '23:59', value: 600, load: 430 },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="glass fixed top-5 left-1/2 -translate-x-1/2 w-[calc(100%-40px)] max-w-[1200px] h-16 flex items-center justify-between px-8 z-[100]">
        <div className="gradient-text text-2xl tracking-tighter">NEXUS</div>
        <div className="hidden md:flex gap-6 text-sm font-medium text-white/70">
          <a href="#" className="transition-colors hover:text-white">Product</a>
          <a href="#" className="transition-colors hover:text-white">Network</a>
          <a href="#" className="transition-colors hover:text-white">Security</a>
        </div>
        <button className="btn-primary py-2 px-5 text-[0.85rem]">Launch App</button>
      </nav>

      {/* Hero Section */}
      <main className="container mx-auto px-6 pt-[180px] text-center flex-1">
        <div className="animate-fade-in max-w-[800px] mx-auto">
          <span className="inline-block px-3 py-1.5 rounded-full bg-nexus-purple/10 text-nexus-purple text-[0.75rem] font-semibold mb-6 border border-nexus-purple/20">
            V2.0 IS NOW LIVE
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-6">
            Connect everything with <span className="gradient-text">Nexus</span>
          </h1>
          <p className="text-xl text-white/60 mb-10 leading-relaxed max-w-2xl mx-auto">
            The decentralized infrastructure for the next generation of web applications. 
            Speed, security, and seamless integration in one platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary text-base px-8 py-3.5">Get Started Free</button>
            <button className="glass px-8 py-3.5 bg-transparent text-white font-semibold cursor-pointer text-base hover:bg-white/5 transition-colors">
              View Documentation
            </button>
          </div>
        </div>

        {/* Analytics Section (NEW) */}
        <section className="mt-[120px] max-w-[1200px] mx-auto">
          <div className="flex items-center gap-2 mb-8 justify-center md:justify-start">
            <BarChart3 className="text-nexus-cyan w-6 h-6" />
            <h2 className="text-2xl font-bold">Network Intelligence</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 glass p-8 min-h-[400px]">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="text-lg font-semibold">Global Traffic Distribution</h3>
                  <p className="text-sm text-white/40">Real-time node performance monitoring</p>
                </div>
                <div className="flex gap-4 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-nexus-purple"></span>
                    <span>ACTIVE NODES</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-nexus-cyan"></span>
                    <span>THROUGHPUT</span>
                  </div>
                </div>
              </div>
              
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorLoad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{fill: 'rgba(255,255,255,0.3)', fontSize: 12}} 
                      dy={10}
                    />
                    <YAxis hide />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(10, 10, 10, 0.9)', 
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '12px',
                        backdropFilter: 'blur(10px)'
                      }}
                      itemStyle={{ color: '#fff' }}
                    />
                    <Area type="monotone" dataKey="value" stroke="#8b5cf6" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                    <Area type="monotone" dataKey="load" stroke="#06b6d4" strokeWidth={3} fillOpacity={1} fill="url(#colorLoad)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="glass p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-6">Live Metrics</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-nexus-purple/10">
                        <Zap size={18} className="text-nexus-purple" />
                      </div>
                      <span className="text-sm text-white/70">Efficiency</span>
                    </div>
                    <span className="font-mono text-nexus-purple">99.9%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-nexus-cyan/10">
                        <Shield size={18} className="text-nexus-cyan" />
                      </div>
                      <span className="text-sm text-white/70">Uptime</span>
                    </div>
                    <span className="font-mono text-nexus-cyan">427d 12h</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-nexus-pink/10">
                        <Globe size={18} className="text-nexus-pink" />
                      </div>
                      <span className="text-sm text-white/70">Nodes</span>
                    </div>
                    <span className="font-mono text-nexus-pink">12,482</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/5">
                <div className="text-3xl font-bold mb-1">1.2 TB/s</div>
                <div className="text-xs text-white/30 uppercase tracking-widest">Aggregate Bandwidth</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="mt-[120px] pb-[100px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="glass p-8 transition-transform hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-nexus-cyan/10 flex items-center justify-center mb-6">
                <Activity className="text-nexus-cyan" />
              </div>
              <h3 className="text-xl mb-3">Ultra-Low Latency</h3>
              <p className="text-white/50 leading-relaxed">
                Optimized for real-time applications with our edge-first global network distribution.
              </p>
            </div>

            <div className="glass p-8 transition-transform hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-nexus-purple/10 flex items-center justify-center mb-6">
                <Shield className="text-nexus-purple" />
              </div>
              <h3 className="text-xl mb-3">Quantum-Safe Security</h3>
              <p className="text-white/50 leading-relaxed">
                Advanced encryption protocols designed to protect your data against future threats.
              </p>
            </div>

            <div className="glass p-8 transition-transform hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-nexus-pink/10 flex items-center justify-center mb-6">
                <Cpu className="text-nexus-pink" />
              </div>
              <h3 className="text-xl mb-3">Infinite Scalability</h3>
              <p className="text-white/50 leading-relaxed">
                Scale from zero to millions of users without touching a single server configuration.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-10 border-t border-white/5 text-center text-[0.85rem] text-white/40">
        © 2026 NEXUS PROTOCOL. All rights reserved.
      </footer>
    </div>
  );
}

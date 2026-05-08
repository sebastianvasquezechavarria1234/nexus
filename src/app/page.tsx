'use client';

import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import StatsCard from '@/components/dashboard/StatsCard';
import AssetTable from '@/components/dashboard/AssetTable';
import Modal from '@/components/dashboard/Modal';
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
import { Wallet, History, CreditCard, ArrowRight, ShieldCheck } from 'lucide-react';

const chartData = [
  { name: 'Mon', value: 400 },
  { name: 'Tue', value: 300 },
  { name: 'Wed', value: 900 },
  { name: 'Thu', value: 700 },
  { name: 'Fri', value: 500 },
  { name: 'Sat', value: 800 },
  { name: 'Sun', value: 600 },
];

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <DashboardLayout>
      <div className="max-w-[1400px] mx-auto space-y-8 animate-fade-in">
        {/* Welcome Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-1">Hello, Sebastian</h1>
            <p className="text-white/40 text-sm">Here is what&apos;s happening with your network today.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="glass px-4 py-2 text-sm font-medium flex items-center gap-2 hover:bg-white/10 transition-colors">
              <History size={16} />
              History
            </button>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="btn-primary px-5 py-2 text-sm flex items-center gap-2"
            >
              <Wallet size={16} />
              Deposit
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard label="Total Portfolio" value="$42,450" change="12.5%" isUp={true} color="nexus-purple" />
          <StatsCard label="Daily Earnings" value="$124.50" change="2.4%" isUp={true} color="nexus-cyan" />
          <StatsCard label="Active Nodes" value="12" change="1" isUp={true} color="nexus-pink" />
          <StatsCard label="Network Uptime" value="99.9%" change="0.2%" isUp={true} color="green-400" />
        </div>

        {/* Charts & Portfolio Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Main Chart Section */}
          <div className="xl:col-span-2 space-y-8">
            <div className="glass p-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-lg font-semibold">Yield Performance</h3>
                  <p className="text-sm text-white/40">Weekly statistics for all active nodes</p>
                </div>
                <div className="flex gap-2">
                  {['1D', '1W', '1M', '1Y'].map((range) => (
                    <button key={range} className={`px-3 py-1 rounded-lg text-[10px] font-bold ${range === '1W' ? 'bg-nexus-purple text-white' : 'bg-white/5 text-white/30 hover:bg-white/10 transition-colors'}`}>
                      {range}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{fill: 'rgba(255,255,255,0.3)', fontSize: 10}} 
                    />
                    <YAxis hide />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(10, 10, 10, 0.9)', 
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '12px',
                        backdropFilter: 'blur(10px)'
                      }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#8b5cf6" 
                      strokeWidth={3} 
                      fillOpacity={1} 
                      fill="url(#chartGradient)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Asset Table Module */}
            <AssetTable />
          </div>

          {/* Sidebar Modules */}
          <div className="space-y-8">
            {/* Quick Deposit Widget */}
            <div className="glass p-8 bg-gradient-to-br from-nexus-purple/10 to-transparent">
              <h3 className="text-lg font-semibold mb-2">Grow your assets</h3>
              <p className="text-sm text-white/40 mb-6">Deposit funds and start earning up to 12% APY instantly.</p>
              <div className="space-y-4">
                <div className="bg-white/5 rounded-2xl p-4 border border-white/5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] text-white/30 uppercase font-bold tracking-wider">Estimated APY</span>
                    <span className="text-nexus-cyan font-bold">12.4%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={14} className="text-green-400" />
                    <span className="text-[10px] text-green-400/80">Insured by Nexus Protocol</span>
                  </div>
                </div>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full py-4 bg-white text-black font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-white/90 transition-all"
                >
                  Get Started
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

            {/* Security Module */}
            <div className="glass p-8">
              <h3 className="text-lg font-semibold mb-6">Security Center</h3>
              <div className="space-y-4">
                {[
                  { label: '2FA Authentication', status: 'Enabled', color: 'text-green-400' },
                  { label: 'Recovery Seed', status: 'Backed Up', color: 'text-green-400' },
                  { label: 'Withdrawal Lock', status: 'Disabled', color: 'text-red-400' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="text-xs text-white/60">{item.label}</span>
                    <span className={`text-[10px] font-bold ${item.color}`}>{item.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Deposit Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Deposit Funds"
      >
        <div className="space-y-6">
          <p className="text-sm text-white/50">Select your preferred payment method to add funds to your Nexus wallet.</p>
          
          <div className="grid grid-cols-2 gap-4">
            <button className="glass p-4 text-left hover:bg-white/10 transition-all group">
              <div className="w-10 h-10 rounded-xl bg-nexus-purple/20 flex items-center justify-center mb-4 text-nexus-purple group-hover:scale-110 transition-transform">
                <CreditCard size={20} />
              </div>
              <p className="text-sm font-semibold">Credit Card</p>
              <p className="text-[10px] text-white/30">Instant deposit</p>
            </button>
            <button className="glass p-4 text-left hover:bg-white/10 transition-all group">
              <div className="w-10 h-10 rounded-xl bg-nexus-cyan/20 flex items-center justify-center mb-4 text-nexus-cyan group-hover:scale-110 transition-transform">
                <Wallet size={20} />
              </div>
              <p className="text-sm font-semibold">Crypto Wallet</p>
              <p className="text-[10px] text-white/30">BTC, ETH, MATIC</p>
            </button>
          </div>

          <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-white/60">Amount</span>
              <span className="text-xs text-nexus-purple font-bold">Max</span>
            </div>
            <div className="flex items-center gap-3">
              <input 
                type="number" 
                placeholder="0.00" 
                className="bg-transparent text-2xl font-bold w-full focus:outline-none"
              />
              <span className="text-lg font-bold text-white/30">USD</span>
            </div>
          </div>

          <button className="btn-primary w-full py-4 text-base">
            Confirm Transaction
          </button>
        </div>
      </Modal>
    </DashboardLayout>
  );
}

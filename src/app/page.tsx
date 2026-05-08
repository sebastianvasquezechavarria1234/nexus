'use client';

import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import StatsCard from '@/components/dashboard/StatsCard';
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
import { ArrowUpRight, Wallet, History, LayoutGrid } from 'lucide-react';

const data = [
  { name: 'Mon', value: 400 },
  { name: 'Tue', value: 300 },
  { name: 'Wed', value: 900 },
  { name: 'Thu', value: 700 },
  { name: 'Fri', value: 500 },
  { name: 'Sat', value: 800 },
  { name: 'Sun', value: 600 },
];

const assets = [
  { name: 'Ethereum', symbol: 'ETH', balance: '1.24', value: '$2,450.20', change: '+2.4%', color: '#8b5cf6' },
  { name: 'Bitcoin', symbol: 'BTC', balance: '0.045', value: '$43,120.00', change: '+1.2%', color: '#f59e0b' },
  { name: 'Polygon', symbol: 'MATIC', balance: '1,240', value: '$0.85', change: '-0.5%', color: '#06b6d4' },
];

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="max-w-[1400px] mx-auto space-y-8">
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
            <button className="btn-primary px-5 py-2 text-sm flex items-center gap-2">
              <Wallet size={16} />
              Deposit
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard label="Total Staking" value="$42,450" change="12.5%" isUp={true} color="nexus-purple" />
          <StatsCard label="Daily Earnings" value="$124.50" change="2.4%" isUp={true} color="nexus-cyan" />
          <StatsCard label="Active Nodes" value="12" change="1" isUp={true} color="nexus-pink" />
          <StatsCard label="Risk Factor" value="Low" change="0.2%" isUp={false} color="green-400" />
        </div>

        {/* Charts & Assets Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Chart */}
          <div className="lg:col-span-2 glass p-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-lg font-semibold">Yield Performance</h3>
                <p className="text-sm text-white/40">Weekly statistics for all active nodes</p>
              </div>
              <select className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-white/60 focus:outline-none">
                <option>Last 7 Days</option>
                <option>Last 30 Days</option>
              </select>
            </div>
            
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
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
                    tick={{fill: 'rgba(255,255,255,0.3)', fontSize: 12}} 
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

          {/* Asset List */}
          <div className="glass p-8 flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-lg font-semibold">My Assets</h3>
              <LayoutGrid size={18} className="text-white/40" />
            </div>
            
            <div className="space-y-6 flex-1">
              {assets.map((asset) => (
                <motion.div 
                  key={asset.symbol}
                  whileHover={{ x: 4 }}
                  className="flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold"
                      style={{ backgroundColor: `${asset.color}20`, color: asset.color }}
                    >
                      {asset.symbol[0]}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{asset.name}</p>
                      <p className="text-xs text-white/40">{asset.balance} {asset.symbol}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{asset.value}</p>
                    <p className={`text-xs ${asset.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                      {asset.change}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <button className="w-full mt-8 py-3 border border-dashed border-white/10 rounded-xl text-xs text-white/30 hover:text-white hover:border-white/30 transition-all flex items-center justify-center gap-2">
              <ArrowUpRight size={14} />
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

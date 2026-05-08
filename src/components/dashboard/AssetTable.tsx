'use client';

import React from 'react';
import { MoreHorizontal, ArrowUpRight, ArrowDownLeft } from 'lucide-react';

const assets = [
  { id: 1, name: 'Ethereum', symbol: 'ETH', balance: '1.24', price: '$2,450.20', value: '$3,038.24', change: '+2.4%', status: 'active' },
  { id: 2, name: 'Bitcoin', symbol: 'BTC', balance: '0.045', price: '$43,120.00', value: '$1,940.40', change: '+1.2%', status: 'active' },
  { id: 3, name: 'Polygon', symbol: 'MATIC', balance: '1,240', price: '$0.85', value: '$1,054.00', change: '-0.5%', status: 'active' },
  { id: 4, name: 'Solana', symbol: 'SOL', balance: '12.5', price: '$98.00', value: '$1,225.00', change: '+8.4%', status: 'active' },
  { id: 5, name: 'Cardano', symbol: 'ADA', balance: '2,500', price: '$0.45', value: '$1,125.00', change: '-1.2%', status: 'inactive' },
];

export default function AssetTable() {
  return (
    <div className="glass overflow-hidden">
      <div className="p-6 border-b border-white/5 flex items-center justify-between">
        <h3 className="text-lg font-semibold">Asset Portfolio</h3>
        <button className="text-xs text-nexus-purple font-medium hover:underline">View All</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/5 text-[11px] text-white/30 uppercase tracking-widest">
              <th className="px-6 py-4 font-medium">Asset</th>
              <th className="px-6 py-4 font-medium">Balance</th>
              <th className="px-6 py-4 font-medium">Price</th>
              <th className="px-6 py-4 font-medium">Value</th>
              <th className="px-6 py-4 font-medium">24h Change</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium"></th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {assets.map((asset) => (
              <tr key={asset.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center font-bold text-[10px]">
                      {asset.symbol}
                    </div>
                    <div>
                      <p className="font-medium">{asset.name}</p>
                      <p className="text-[10px] text-white/30">{asset.symbol}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 font-mono text-white/70">{asset.balance}</td>
                <td className="px-6 py-4 font-mono text-white/70">{asset.price}</td>
                <td className="px-6 py-4 font-medium">{asset.value}</td>
                <td className="px-6 py-4">
                  <div className={`flex items-center gap-1 ${asset.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                    {asset.change.startsWith('+') ? <ArrowUpRight size={12} /> : <ArrowDownLeft size={12} />}
                    <span className="font-mono">{asset.change}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium capitalize ${
                    asset.status === 'active' ? 'bg-green-400/10 text-green-400' : 'bg-white/5 text-white/30'
                  }`}>
                    {asset.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-1.5 hover:bg-white/5 rounded-lg text-white/20 hover:text-white transition-colors">
                    <MoreHorizontal size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

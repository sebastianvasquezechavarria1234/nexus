'use client';

import React from 'react';

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

        {/* Features Grid */}
        <section className="mt-[120px] pb-[100px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="glass p-8 transition-transform hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-nexus-cyan/10 flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
              </div>
              <h3 className="text-xl mb-3">Ultra-Low Latency</h3>
              <p className="text-white/50 leading-relaxed">
                Optimized for real-time applications with our edge-first global network distribution.
              </p>
            </div>

            <div className="glass p-8 transition-transform hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-nexus-purple/10 flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              </div>
              <h3 className="text-xl mb-3">Quantum-Safe Security</h3>
              <p className="text-white/50 leading-relaxed">
                Advanced encryption protocols designed to protect your data against future threats.
              </p>
            </div>

            <div className="glass p-8 transition-transform hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-nexus-pink/10 flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
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

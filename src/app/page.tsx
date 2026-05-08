'use client';

import React from 'react';

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation */}
      <nav className="glass" style={{ 
        position: 'fixed', 
        top: '20px', 
        left: '50%', 
        transform: 'translateX(-50%)', 
        width: 'calc(100% - 40px)', 
        maxWidth: '1200px', 
        height: '64px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        padding: '0 32px', 
        zIndex: 100 
      }}>
        <div className="gradient-text" style={{ fontSize: '1.5rem', letterSpacing: '-1px' }}>NEXUS</div>
        <div style={{ display: 'flex', gap: '24px', fontSize: '0.9rem', fontWeight: 500, color: 'rgba(255,255,255,0.7)' }}>
          <a href="#" style={{ transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}>Product</a>
          <a href="#" style={{ transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}>Network</a>
          <a href="#" style={{ transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}>Security</a>
        </div>
        <button className="btn-primary" style={{ padding: '8px 20px', fontSize: '0.85rem' }}>Launch App</button>
      </nav>

      {/* Hero Section */}
      <main className="container" style={{ paddingTop: '180px', textAlign: 'center', flex: 1 }}>
        <div className="animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span style={{ 
            display: 'inline-block', 
            padding: '6px 12px', 
            borderRadius: '20px', 
            background: 'rgba(139, 92, 246, 0.1)', 
            color: '#a78bfa', 
            fontSize: '0.75rem', 
            fontWeight: 600, 
            marginBottom: '24px',
            border: '1px solid rgba(139, 92, 246, 0.2)'
          }}>
            V2.0 IS NOW LIVE
          </span>
          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', lineHeight: 1.1, marginBottom: '24px' }}>
            Connect everything with <span className="gradient-text">Nexus</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.6)', marginBottom: '40px', lineHeight: 1.6 }}>
            The decentralized infrastructure for the next generation of web applications. 
            Speed, security, and seamless integration in one platform.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <button className="btn-primary" style={{ fontSize: '1rem', padding: '14px 32px' }}>Get Started Free</button>
            <button className="glass" style={{ 
              padding: '14px 32px', 
              background: 'transparent', 
              color: 'white', 
              fontWeight: 600, 
              cursor: 'pointer',
              fontSize: '1rem'
            }}>
              View Documentation
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <section style={{ marginTop: '120px', paddingBottom: '100px' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '24px',
            textAlign: 'left'
          }}>
            <div className="glass" style={{ padding: '32px', transition: 'transform 0.3s' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(6, 182, 212, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Ultra-Low Latency</h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>
                Optimized for real-time applications with our edge-first global network distribution.
              </p>
            </div>

            <div className="glass" style={{ padding: '32px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(139, 92, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Quantum-Safe Security</h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>
                Advanced encryption protocols designed to protect your data against future threats.
              </p>
            </div>

            <div className="glass" style={{ padding: '32px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(236, 72, 153, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Infinite Scalability</h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>
                Scale from zero to millions of users without touching a single server configuration.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer style={{ padding: '40px 0', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)' }}>
        © 2026 NEXUS PROTOCOL. All rights reserved.
      </footer>
    </div>
  );
}

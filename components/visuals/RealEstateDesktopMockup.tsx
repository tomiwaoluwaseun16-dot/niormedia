'use client';

import React, { useState } from 'react';

export default function RealEstateDesktopMockup() {
  const [selectedMarket, setSelectedMarket] = useState('all');

  const properties = [
    {
      title: "The Luminary Penthouse",
      location: "Victoria Island, Lagos",
      country: "Nigeria",
      marketKey: "nigeria",
      currency: "₦",
      price: "850,000,000",
      specs: "4 Bed • 5 Bath • 480 m²",
      tag: "Featured Listing"
    },
    {
      title: "Mitte Glass Loft",
      location: "Mitte, Berlin",
      country: "Germany",
      marketKey: "germany",
      currency: "€",
      price: "1,850,000",
      specs: "3 Bed • 2 Bath • 210 m²",
      tag: "Design Showcase"
    },
    {
      title: "Kensington Heritage Residence",
      location: "Kensington, London",
      country: "United Kingdom",
      marketKey: "uk",
      currency: "£",
      price: "4,200,000",
      specs: "4 Bed • 4 Bath • 340 m²",
      tag: "Exclusive"
    },
    {
      title: "Yorkville Sky Suite",
      location: "Yorkville, Toronto",
      country: "Canada",
      marketKey: "canada",
      currency: "C$",
      price: "3,100,000",
      specs: "3 Bed • 3 Bath • 270 m²",
      tag: "New Launch"
    },
    {
      title: "Brickell Waterfront Estate",
      location: "Miami, United States",
      country: "USA",
      marketKey: "usa",
      currency: "$",
      price: "5,400,000",
      specs: "5 Bed • 6 Bath • 590 m²",
      tag: "Prime Acquisition"
    }
  ];

  const filteredProperties = selectedMarket === 'all' 
    ? properties 
    : properties.filter(p => p.marketKey === selectedMarket);

  return (
    <div className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
      <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
        </div>
        <div className="bg-slate-950 px-4 py-1 rounded-md border border-slate-800 text-xs font-mono text-slate-400 max-w-xs truncate">
          https://vanguardestates.luxury
        </div>
        <div className="text-xs font-mono text-sky-400 bg-sky-500/10 px-2.5 py-1 rounded border border-sky-500/20">
          Multi-Market System
        </div>
      </div>

      <div className="bg-slate-950 text-slate-100 p-6 sm:p-8 space-y-8 font-sans">
        <div className="flex items-center justify-between border-b border-slate-800/60 pb-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded bg-sky-500 flex items-center justify-center font-bold text-slate-950 text-sm">
              VE
            </div>
            <span className="font-serif tracking-wide text-lg text-white font-semibold">VANGUARD ESTATES</span>
          </div>
          <div className="hidden sm:flex items-center space-x-6 text-xs text-slate-400 font-medium">
            <span className="text-sky-400">Properties</span>
            <span>Global Portfolio</span>
            <span>Advisory</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="bg-sky-500 text-slate-950 text-xs font-semibold px-3.5 py-1.5 rounded-lg">
              WhatsApp Concierge
            </span>
          </div>
        </div>

        <div className="relative rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 p-8 sm:p-12 border border-slate-800 overflow-hidden">
          <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="max-w-xl space-y-4 relative z-10">
            <span className="text-xs font-mono text-sky-400 uppercase tracking-widest bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
              International Multi-Market Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-white leading-tight">
              Curated Global Residences for Discerning Collectors.
            </h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Seamless localized property discovery, dynamic currency handling, and automated cross-border lead routing.
            </p>
            
            <div className="pt-2 space-y-2">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">Select Target Market View:</span>
              <div className="flex flex-wrap gap-2">
                {[
                  { key: 'all', label: 'All Markets' },
                  { key: 'usa', label: '🇺🇸 USA ($)' },
                  { key: 'uk', label: '🇬🇧 UK (£)' },
                  { key: 'canada', label: '🇨🇦 Canada (C$)' },
                  { key: 'germany', label: '🇩🇪 Germany (€)' },
                  { key: 'nigeria', label: '🇳🇬 Nigeria (₦)' }
                ].map((market) => (
                  <button
                    key={market.key}
                    onClick={() => setSelectedMarket(market.key)}
                    className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-colors border ${
                      selectedMarket === market.key
                        ? 'bg-sky-500 text-slate-950 border-sky-400 font-semibold'
                        : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {market.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">
              {selectedMarket === 'all' ? 'Global Inventory' : `${selectedMarket.toUpperCase()} Inventory`}
            </h3>
            <span className="text-xs text-slate-500 font-mono">Showing {filteredProperties.length} locations</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {filteredProperties.map((prop, idx) => (
              <div key={idx} className="bg-slate-900/80 border border-slate-800 rounded-xl overflow-hidden group hover:border-slate-700 transition-colors flex flex-col justify-between">
                <div>
                  <div className="h-36 bg-gradient-to-tr from-slate-950 via-slate-900 to-slate-800 relative flex items-center justify-center border-b border-slate-800/80">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.05)_0,transparent_100%)]"></div>
                    <span className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-md border border-slate-800 text-[10px] text-sky-400 px-2.5 py-1 rounded-full font-mono">
                      {prop.country}
                    </span>
                    <div className="text-slate-600 font-serif tracking-widest text-xs uppercase">
                      {prop.tag}
                    </div>
                  </div>

                  <div className="p-4 space-y-2">
                    <span className="text-xs text-sky-400 font-medium">{prop.location}</span>
                    <h4 className="text-base font-semibold text-white font-serif">{prop.title}</h4>
                    <p className="text-xs text-slate-400 font-mono">{prop.specs}</p>
                    <div className="text-sm font-bold text-slate-100 pt-1">
                      {prop.currency} {prop.price}
                    </div>
                  </div>
                </div>

                <div className="p-4 pt-0 grid grid-cols-2 gap-2">
                  <div className="bg-slate-950 hover:bg-slate-800 text-slate-300 text-center py-2 rounded-lg text-xs font-medium border border-slate-800 transition-colors cursor-pointer">
                    Inquiry
                  </div>
                  <div className="bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 text-center py-2 rounded-lg text-xs font-medium border border-sky-500/20 transition-colors cursor-pointer">
                    WhatsApp
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

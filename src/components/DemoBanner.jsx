import React from 'react';
import { AlertCircle, Sparkles } from 'lucide-react';

export default function DemoBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-800 text-white text-xs sm:text-sm py-2 px-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <span className="bg-amber-400 text-slate-900 font-bold px-2 py-0.5 rounded text-xs tracking-wider uppercase shadow-xs">
            Demo Data
          </span>
          <span className="text-purple-100 font-medium">
            Store prices and retailer availability are simulated for comparison demonstration.
          </span>
        </div>
        <div className="hidden md:flex items-center gap-1.5 text-purple-200 text-xs">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>Compare Amazon, Flipkart, Croma, Reliance Digital & more</span>
        </div>
      </div>
    </div>
  );
}

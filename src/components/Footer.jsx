import React from 'react';
import { ShoppingBag, Heart, ShieldCheck, Zap, TrendingDown, ArrowUpRight } from 'lucide-react';

export default function Footer({ onCategoryClick }) {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-purple-500/20">
                <ShoppingBag className="w-5 h-5 stroke-[2.2]" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                Price<span className="text-purple-400">Wise</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              India's smart shopping price comparison platform. We monitor prices across Amazon, Flipkart, Croma, Reliance Digital, and more to guarantee you never overpay.
            </p>
            <div className="flex items-center gap-2 text-xs text-purple-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Independent & Unbiased Comparisons</span>
            </div>
          </div>

          {/* Col 2: Categories */}
          <div>
            <h4 className="text-sm font-bold text-white tracking-wider uppercase mb-4">
              Categories
            </h4>
            <ul className="space-y-2 text-xs">
              {['Smartphones', 'Laptops', 'Headphones', 'Smartwatches', 'Televisions'].map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => {
                      onCategoryClick(cat);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-purple-400 transition-colors cursor-pointer"
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Key Features */}
          <div>
            <h4 className="text-sm font-bold text-white tracking-wider uppercase mb-4">
              Features
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-purple-400" />
                <span>Multi-retailer price aggregator</span>
              </li>
              <li className="flex items-center gap-2">
                <TrendingDown className="w-3.5 h-3.5 text-emerald-400" />
                <span>Lowest-price detection algorithm</span>
              </li>
              <li className="flex items-center gap-2">
                <Heart className="w-3.5 h-3.5 text-pink-400" />
                <span>Local storage persistent Wishlist</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                <span>Direct retailer store navigation</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Demo Disclaimer */}
          <div className="bg-slate-800/60 p-5 rounded-2xl border border-slate-700/60 space-y-3">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
              <span>Notice: Sample Data</span>
            </h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              PriceWise is currently running in demonstration mode. Product specs, pricing comparisons, and retailer deals are curated sample data for evaluation.
            </p>
            <div className="pt-2 border-t border-slate-700/80 text-[11px] text-slate-500">
              Built with React, Vite & Tailwind. Fast, responsive, and database-free.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} PriceWise — Online Shopping Price Comparison. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-purple-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-purple-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-purple-400 cursor-pointer">Retailer Partners</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

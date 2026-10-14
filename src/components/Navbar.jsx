import React from 'react';
import { Search, Heart, ShoppingBag, X, Sparkles } from 'lucide-react';

export default function Navbar({
  searchTerm,
  setSearchTerm,
  wishlistCount,
  onOpenWishlist,
  onResetSearch
}) {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-purple-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer shrink-0" onClick={onResetSearch}>
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-purple-700 via-purple-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-purple-500/20">
            <ShoppingBag className="w-6 h-6 stroke-[2.2]" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-2xl font-black tracking-tight text-slate-900">
                Price<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Wise</span>
              </span>
              <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-purple-100 text-purple-700 tracking-wide">
                INDIA
              </span>
            </div>
            <p className="text-[11px] font-semibold text-purple-600 hidden sm:block tracking-wide">
              Smart Shopping Price Comparison
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl relative">
          <div className="relative flex items-center">
            <div className="absolute left-3.5 text-purple-600 pointer-events-none">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              placeholder="Search smartphones, laptops, headphones, TVs, brands..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-10 py-2.5 sm:py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm sm:text-base text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent focus:bg-white transition-all shadow-inner"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                title="Clear search"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Action Buttons: Wishlist */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={onOpenWishlist}
            className="relative flex items-center gap-2 px-3 sm:px-4 py-2.5 rounded-xl border border-purple-200 bg-purple-50 hover:bg-purple-100 text-purple-900 font-semibold text-sm transition-all hover:scale-102 active:scale-98 shadow-xs"
            aria-label="View Wishlist"
          >
            <Heart className={`w-5 h-5 ${wishlistCount > 0 ? 'fill-purple-600 text-purple-600' : 'text-purple-600'}`} />
            <span className="hidden md:inline">Wishlist</span>
            {wishlistCount > 0 && (
              <span className="bg-purple-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                {wishlistCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

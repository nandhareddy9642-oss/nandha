import React from 'react';
import { ArrowDownUp, Filter, Heart, RotateCcw } from 'lucide-react';

export default function FilterSortBar({
  sortBy,
  setSortBy,
  brands,
  selectedBrand,
  setSelectedBrand,
  showWishlistOnly,
  setShowWishlistOnly,
  totalResults,
  onResetFilters,
  hasActiveFilters
}) {
  return (
    <div className="bg-white border border-purple-100 rounded-2xl p-4 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
      {/* Left: Result count & quick filters */}
      <div className="flex items-center flex-wrap gap-3">
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
          <span className="w-2.5 h-2.5 rounded-full bg-purple-600"></span>
          <span>{totalResults} {totalResults === 1 ? 'Product' : 'Products'} found</span>
        </div>

        {/* Brand Dropdown */}
        <div className="flex items-center gap-1.5 text-xs text-slate-600 bg-slate-50 border border-slate-200 rounded-xl px-2.5 py-1.5">
          <Filter className="w-3.5 h-3.5 text-purple-600" />
          <span className="font-medium">Brand:</span>
          <select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            className="bg-transparent font-semibold text-slate-800 focus:outline-none cursor-pointer"
          >
            <option value="All">All Brands</option>
            {brands.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>

        {/* Wishlist only toggle */}
        <button
          onClick={() => setShowWishlistOnly(!showWishlistOnly)}
          className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-xl border transition-all ${
            showWishlistOnly
              ? 'bg-purple-100 text-purple-800 border-purple-300 font-semibold'
              : 'bg-white text-slate-600 border-slate-200 hover:border-purple-200'
          }`}
        >
          <Heart className={`w-3.5 h-3.5 ${showWishlistOnly ? 'fill-purple-600 text-purple-600' : 'text-slate-400'}`} />
          <span>Wishlist Only</span>
        </button>

        {/* Reset button if filters active */}
        {hasActiveFilters && (
          <button
            onClick={onResetFilters}
            className="flex items-center gap-1 text-xs text-purple-600 hover:text-purple-800 font-medium hover:underline ml-1"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset filters</span>
          </button>
        )}
      </div>

      {/* Right: Sort Dropdown */}
      <div className="flex items-center gap-2">
        <label htmlFor="sort-select" className="text-xs sm:text-sm font-medium text-slate-600 flex items-center gap-1">
          <ArrowDownUp className="w-4 h-4 text-purple-600" />
          <span>Sort by:</span>
        </label>
        <select
          id="sort-select"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-purple-50/50 border border-purple-200 hover:border-purple-300 text-slate-800 font-semibold text-xs sm:text-sm rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600 cursor-pointer transition-colors"
        >
          <option value="price-asc">Lowest Price First</option>
          <option value="price-desc">Highest Price First</option>
          <option value="rating">Highest Rated</option>
          <option value="savings">Biggest Potential Savings</option>
          <option value="name">Name (A to Z)</option>
        </select>
      </div>
    </div>
  );
}

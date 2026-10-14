import React from 'react';
import { Star, Heart, ArrowRight, ShieldCheck, Tag, ExternalLink } from 'lucide-react';
import { getLowestPriceRetailer, getHighestPriceRetailer, formatINR } from '../data/products';

export default function ProductCard({
  product,
  isWishlisted,
  onToggleWishlist,
  onOpenCompare,
  onRetailerClick
}) {
  const lowestRetailer = getLowestPriceRetailer(product.retailers);
  const highestRetailer = getHighestPriceRetailer(product.retailers);
  const storeCount = product.retailers ? product.retailers.length : 0;
  
  // Calculate price difference between highest and lowest retailer
  const priceDifference = highestRetailer && lowestRetailer 
    ? highestRetailer.price - lowestRetailer.price 
    : 0;

  return (
    <div className="bg-white rounded-3xl border border-purple-100/80 hover:border-purple-300 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden group">
      {/* Top Media Area */}
      <div className="relative pt-[65%] w-full bg-slate-50 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          onError={(e) => {
            // Fallback image if unsplash link has any transient network issue
            e.target.src = 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=800&q=80';
          }}
        />

        {/* Brand & Category badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          <span className="bg-white/90 backdrop-blur-md text-purple-700 text-xs font-bold px-2.5 py-1 rounded-lg border border-purple-100 shadow-xs">
            {product.brand}
          </span>
          <span className="bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-semibold px-2 py-1 rounded-lg">
            {product.category}
          </span>
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product.id);
          }}
          className={`absolute top-3 right-3 p-2.5 rounded-full backdrop-blur-md transition-all duration-200 z-10 ${
            isWishlisted
              ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30 scale-110'
              : 'bg-white/85 text-slate-500 hover:text-purple-600 hover:bg-white hover:scale-105'
          }`}
          title={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
          aria-label={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-white stroke-white' : ''}`} />
        </button>

        {/* Potential Savings Flag */}
        {priceDifference > 0 && (
          <div className="absolute bottom-3 left-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-sm flex items-center gap-1">
            <Tag className="w-3 h-3" />
            <span>Save up to {formatINR(priceDifference)}</span>
          </div>
        )}
      </div>

      {/* Body Area */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Rating */}
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center gap-1 bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold px-2 py-0.5 rounded-md">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{product.rating}</span>
            </div>
            <span className="text-xs text-slate-400">
              ({product.reviewCount?.toLocaleString()} reviews)
            </span>
          </div>

          {/* Product Name */}
          <h3 
            onClick={() => onOpenCompare(product)}
            className="text-base font-bold text-slate-900 group-hover:text-purple-700 transition-colors line-clamp-2 cursor-pointer leading-snug mb-2"
            title={product.name}
          >
            {product.name}
          </h3>

          {/* Key Specs snippet */}
          {product.specs && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {product.specs.slice(0, 2).map((spec, i) => (
                <span
                  key={i}
                  className="text-[11px] bg-slate-50 text-slate-600 px-2 py-0.5 rounded border border-slate-200/80 truncate max-w-full"
                >
                  {spec}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Pricing & Comparison Section */}
        <div className="mt-2 pt-3 border-t border-slate-100">
          {lowestRetailer ? (
            <div className="mb-4">
              <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                <span className="font-semibold text-purple-700 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-purple-600" />
                  Lowest on {lowestRetailer.name}
                </span>
                <span className="text-slate-400">
                  {storeCount} stores compared
                </span>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-slate-900 tracking-tight">
                  {formatINR(lowestRetailer.price)}
                </span>
                {lowestRetailer.originalPrice > lowestRetailer.price && (
                  <span className="text-xs text-slate-400 line-through">
                    {formatINR(lowestRetailer.originalPrice)}
                  </span>
                )}
                {lowestRetailer.originalPrice > lowestRetailer.price && (
                  <span className="text-xs font-bold text-emerald-600">
                    {Math.round(((lowestRetailer.originalPrice - lowestRetailer.price) / lowestRetailer.originalPrice) * 100)}% OFF
                  </span>
                )}
              </div>
            </div>
          ) : (
            <div className="text-xs text-slate-400 mb-4">No price available</div>
          )}

          {/* Store Pills preview */}
          <div className="flex items-center gap-1.5 mb-4 overflow-hidden">
            <span className="text-[11px] font-medium text-slate-400">Stores:</span>
            <div className="flex items-center gap-1 flex-wrap">
              {product.retailers.map((ret) => (
                <span
                  key={ret.id}
                  className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${
                    ret.id === lowestRetailer?.id
                      ? 'bg-purple-100 text-purple-800 font-bold border border-purple-200'
                      : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {ret.name}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onOpenCompare(product)}
              className="w-full flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 active:bg-purple-800 text-white font-semibold text-xs transition-all shadow-sm shadow-purple-600/20 hover:shadow-md"
            >
              <span>Compare</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {lowestRetailer && (
              <button
                onClick={() => onRetailerClick(lowestRetailer, product.name)}
                className="w-full flex items-center justify-center gap-1 px-3 py-2.5 rounded-xl bg-slate-50 hover:bg-purple-50 text-slate-800 hover:text-purple-700 border border-slate-200 hover:border-purple-200 font-semibold text-xs transition-all"
                title={`Visit ${lowestRetailer.name}`}
              >
                <span className="truncate">Buy @ {lowestRetailer.name}</span>
                <ExternalLink className="w-3 h-3 shrink-0" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  Award, 
  CheckCircle2, 
  Truck, 
  Star, 
  Heart, 
  AlertCircle, 
  Share2, 
  TrendingDown, 
  Store,
  Clock,
  ShieldCheck
} from 'lucide-react';
import { getLowestPriceRetailer, getHighestPriceRetailer, formatINR } from '../data/products';

export default function PriceComparisonModal({
  product,
  onClose,
  isWishlisted,
  onToggleWishlist,
  onRetailerClick
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!product) return null;

  const sortedRetailers = [...(product.retailers || [])].sort((a, b) => a.price - b.price);
  const lowestRetailer = sortedRetailers[0];
  const highestRetailer = sortedRetailers[sortedRetailers.length - 1];
  const maxSavings = highestRetailer && lowestRetailer ? highestRetailer.price - lowestRetailer.price : 0;
  const avgPrice = sortedRetailers.length > 0 
    ? Math.round(sortedRetailers.reduce((acc, r) => acc + r.price, 0) / sortedRetailers.length)
    : 0;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6 animate-fade-in">
      <div 
        className="relative bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-purple-100 overflow-hidden flex flex-col max-h-[92vh] animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/70">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-100 px-2.5 py-1 rounded-md">
              Price Comparison Analysis
            </span>
            <span className="hidden sm:inline-flex items-center text-xs text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
              Demo Price Data
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
            title="Close (Esc)"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {/* Header Product Info */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-full md:w-56 h-48 sm:h-56 bg-slate-50 rounded-2xl overflow-hidden shrink-0 border border-slate-100 relative group">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=800&q=80';
                }}
              />
              <span className="absolute top-2 left-2 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-bold px-2 py-0.5 rounded">
                {product.brand}
              </span>
            </div>

            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                    {product.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-amber-700 font-bold bg-amber-50 px-2 py-0.5 rounded">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{product.rating}</span>
                    <span className="text-slate-400 font-normal">({product.reviewCount?.toLocaleString()} reviews)</span>
                  </div>
                </div>

                <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug mb-3">
                  {product.name}
                </h2>

                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Action buttons on header */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => onToggleWishlist(product.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                    isWishlisted
                      ? 'bg-purple-600 text-white border-purple-600'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-purple-300'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-white' : 'text-purple-600'}`} />
                  <span>{isWishlisted ? 'Saved in Wishlist' : 'Add to Wishlist'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Savings Metric Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="bg-purple-50/70 border border-purple-100 p-4 rounded-2xl">
              <span className="text-xs font-semibold text-purple-600 flex items-center gap-1 mb-1">
                <Award className="w-4 h-4 text-purple-600" />
                Guaranteed Lowest Price
              </span>
              <div className="text-2xl font-black text-purple-900">
                {lowestRetailer ? formatINR(lowestRetailer.price) : 'N/A'}
              </div>
              <span className="text-xs text-slate-500">
                Available at <strong className="text-purple-700">{lowestRetailer?.name}</strong>
              </span>
            </div>

            <div className="bg-emerald-50/70 border border-emerald-100 p-4 rounded-2xl">
              <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1 mb-1">
                <TrendingDown className="w-4 h-4 text-emerald-600" />
                Max Price Difference
              </span>
              <div className="text-2xl font-black text-emerald-800">
                {formatINR(maxSavings)}
              </div>
              <span className="text-xs text-slate-500">
                Between lowest & highest store
              </span>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl">
              <span className="text-xs font-semibold text-slate-600 flex items-center gap-1 mb-1">
                <Store className="w-4 h-4 text-slate-600" />
                Retailers Compared
              </span>
              <div className="text-2xl font-black text-slate-800">
                {sortedRetailers.length} Stores
              </div>
              <span className="text-xs text-slate-500">
                Average price: {formatINR(avgPrice)}
              </span>
            </div>
          </div>

          {/* Store Comparison Ranked List */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <span>All Retailer Offers</span>
                <span className="text-xs font-normal text-slate-500">(Ranked lowest to highest price)</span>
              </h3>
            </div>

            <div className="space-y-3">
              {sortedRetailers.map((retailer, index) => {
                const isLowest = index === 0;
                const priceDiff = retailer.price - lowestRetailer.price;

                return (
                  <div
                    key={retailer.id}
                    className={`p-4 rounded-2xl border transition-all ${
                      isLowest
                        ? 'bg-gradient-to-r from-purple-50/90 via-white to-purple-50/50 border-purple-300 ring-2 ring-purple-600/20 shadow-md'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      {/* Left Store Info */}
                      <div className="flex items-start sm:items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-base shrink-0 ${
                          isLowest
                            ? 'bg-purple-600 text-white shadow-sm shadow-purple-600/30'
                            : 'bg-slate-100 text-slate-700'
                        }`}>
                          {index + 1}
                        </div>

                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-bold text-slate-900 text-base">
                              {retailer.name}
                            </span>
                            {isLowest && (
                              <span className="bg-purple-600 text-white text-[11px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-xs">
                                <Award className="w-3 h-3" />
                                Lowest Price
                              </span>
                            )}
                            {retailer.badge && !isLowest && (
                              <span className="bg-amber-100 text-amber-800 text-[11px] font-semibold px-2 py-0.5 rounded-full">
                                {retailer.badge}
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-3 text-xs text-slate-500 mt-1 flex-wrap">
                            <span className="flex items-center gap-1">
                              <Truck className="w-3.5 h-3.5 text-purple-500" />
                              {retailer.delivery}
                            </span>
                            <span className="flex items-center gap-1 text-slate-600">
                              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                              Seller {retailer.sellerRating}/5
                            </span>
                            {retailer.inStock ? (
                              <span className="flex items-center gap-1 text-emerald-600 font-medium">
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                In Stock
                              </span>
                            ) : (
                              <span className="text-red-500 font-medium">
                                Out of Stock
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Right Price & CTA */}
                      <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                        <div className="text-left sm:text-right">
                          <div className="text-xl sm:text-2xl font-black text-slate-900">
                            {formatINR(retailer.price)}
                          </div>
                          {isLowest ? (
                            <span className="text-xs font-bold text-purple-700">
                              Best Available Price
                            </span>
                          ) : (
                            <span className="text-xs font-semibold text-slate-500">
                              +{formatINR(priceDiff)} more
                            </span>
                          )}
                        </div>

                        <button
                          onClick={() => onRetailerClick(retailer, product.name)}
                          disabled={!retailer.inStock}
                          className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-sm ${
                            !retailer.inStock
                              ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                              : isLowest
                              ? 'bg-purple-600 hover:bg-purple-700 text-white shadow-purple-600/30 hover:scale-102 active:scale-98'
                              : 'bg-slate-900 hover:bg-purple-900 text-white hover:scale-102 active:scale-98'
                          }`}
                        >
                          <span>{retailer.inStock ? `Buy on ${retailer.name}` : 'Out of Stock'}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Product Specifications Section */}
          {product.specs && product.specs.length > 0 && (
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
              <h4 className="text-sm font-bold text-slate-900 mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-purple-600" />
                Key Specifications
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                {product.specs.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-600 shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between flex-wrap gap-2 text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <AlertCircle className="w-4 h-4 text-purple-600 shrink-0" />
            <span>Retailer links safely redirect to official store search or product listings.</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 font-semibold transition-colors"
          >
            Close Comparison
          </button>
        </div>
      </div>
    </div>
  );
}

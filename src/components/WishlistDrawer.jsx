import React, { useEffect } from 'react';
import { X, Trash2, ArrowRight, Heart, ShoppingBag, ExternalLink } from 'lucide-react';
import { getLowestPriceRetailer, formatINR } from '../data/products';

export default function WishlistDrawer({
  isOpen,
  onClose,
  wishlistProducts,
  onRemoveFromWishlist,
  onOpenCompare,
  onClearWishlist
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/50 backdrop-blur-xs flex justify-end animate-fade-in">
      <div 
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-slide-left border-l border-purple-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-purple-50/50">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-purple-600 text-white flex items-center justify-center">
              <Heart className="w-4 h-4 fill-white" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">Your Saved Wishlist</h3>
              <p className="text-xs text-purple-700 font-medium">
                {wishlistProducts.length} {wishlistProducts.length === 1 ? 'item' : 'items'} saved in browser
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200/50 transition-colors"
            title="Close Drawer"
            aria-label="Close Wishlist"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {wishlistProducts.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-slate-400">
              <div className="w-16 h-16 rounded-full bg-purple-50 text-purple-400 flex items-center justify-center mb-4 border border-purple-100">
                <Heart className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-slate-800 text-base mb-1">Your wishlist is empty</h4>
              <p className="text-xs text-slate-500 max-w-xs mb-4">
                Click the heart icon on any product card to track its prices across Amazon, Flipkart, and other stores.
              </p>
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-purple-600 text-white text-xs font-semibold hover:bg-purple-700 transition-colors shadow-xs"
              >
                Browse Products
              </button>
            </div>
          ) : (
            wishlistProducts.map((product) => {
              const lowestRetailer = getLowestPriceRetailer(product.retailers);

              return (
                <div
                  key={product.id}
                  className="p-3 bg-white border border-slate-200 rounded-2xl flex gap-3 hover:border-purple-200 hover:shadow-xs transition-all group"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-20 h-20 object-cover rounded-xl bg-slate-50 shrink-0"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=800&q=80';
                    }}
                  />

                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-1.5 py-0.5 rounded">
                          {product.brand}
                        </span>
                        <button
                          onClick={() => onRemoveFromWishlist(product.id)}
                          className="text-slate-400 hover:text-red-500 p-1 transition-colors"
                          title="Remove from Wishlist"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <h4 
                        onClick={() => {
                          onClose();
                          onOpenCompare(product);
                        }}
                        className="text-xs font-bold text-slate-800 line-clamp-2 cursor-pointer hover:text-purple-600 transition-colors mt-1"
                      >
                        {product.name}
                      </h4>
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-100">
                      <div>
                        <span className="text-xs text-slate-400 block text-[10px]">
                          Lowest: {lowestRetailer?.name}
                        </span>
                        <span className="text-sm font-black text-slate-900">
                          {lowestRetailer ? formatINR(lowestRetailer.price) : 'N/A'}
                        </span>
                      </div>

                      <button
                        onClick={() => {
                          onClose();
                          onOpenCompare(product);
                        }}
                        className="flex items-center gap-1 text-[11px] font-bold text-purple-600 hover:text-purple-800 hover:underline"
                      >
                        <span>Compare</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Drawer Footer */}
        {wishlistProducts.length > 0 && (
          <div className="p-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
            <button
              onClick={onClearWishlist}
              className="text-xs text-red-500 hover:text-red-700 font-semibold flex items-center gap-1"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Clear Wishlist</span>
            </button>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold transition-colors shadow-xs"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

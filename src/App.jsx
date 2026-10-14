import React, { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar';
import DemoBanner from './components/DemoBanner';
import CategoryFilter from './components/CategoryFilter';
import FilterSortBar from './components/FilterSortBar';
import ProductCard from './components/ProductCard';
import PriceComparisonModal from './components/PriceComparisonModal';
import WishlistDrawer from './components/WishlistDrawer';
import Toast from './components/Toast';
import Footer from './components/Footer';
import { sampleProducts, categories, getLowestPriceRetailer, getHighestPriceRetailer, formatINR } from './data/products';
import { Sparkles, ShoppingBag, Search, RotateCcw, TrendingDown, ShieldCheck, Check } from 'lucide-react';

export default function App() {
  // Search and Filter States
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [sortBy, setSortBy] = useState('price-asc');
  const [showWishlistOnly, setShowWishlistOnly] = useState(false);

  // Modal and Drawer States
  const [compareProduct, setCompareProduct] = useState(null);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  // Toast Notification State
  const [toast, setToast] = useState(null);

  // LocalStorage Wishlist State
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('pricewise_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error('Error loading wishlist from localStorage:', e);
      return [];
    }
  });

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('pricewise_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error('Error saving wishlist to localStorage:', e);
    }
  }, [wishlist]);

  // Toast helper
  const showToast = (message, type = 'info') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast((prev) => (prev?.message === message ? null : prev));
    }, 3500);
  };

  // Toggle Wishlist
  const handleToggleWishlist = (productId) => {
    const product = sampleProducts.find((p) => p.id === productId);
    if (wishlist.includes(productId)) {
      setWishlist((prev) => prev.filter((id) => id !== productId));
      showToast(`Removed "${product ? product.name.slice(0, 24) + '...' : 'Product'}" from wishlist`, 'warning');
    } else {
      setWishlist((prev) => [...prev, productId]);
      showToast(`Added "${product ? product.name.slice(0, 24) + '...' : 'Product'}" to wishlist`, 'success');
    }
  };

  const handleClearWishlist = () => {
    setWishlist([]);
    showToast('Wishlist cleared', 'info');
  };

  // Handle Retailer Click (Safe verification link + user feedback)
  const handleRetailerClick = (retailer, productName) => {
    showToast(`Redirecting to ${retailer.name} for ${productName.slice(0, 22)}...`, 'info');
    if (retailer.url) {
      window.open(retailer.url, '_blank', 'noopener,noreferrer');
    }
  };

  // Extract all distinct brands
  const allBrands = useMemo(() => {
    const brandsSet = new Set(sampleProducts.map((p) => p.brand));
    return Array.from(brandsSet).sort();
  }, []);

  // Compute category product counts
  const categoryCounts = useMemo(() => {
    const counts = { All: sampleProducts.length };
    sampleProducts.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filter and Sort Products
  const filteredProducts = useMemo(() => {
    return sampleProducts.filter((product) => {
      // Search filter
      if (searchTerm.trim() !== '') {
        const query = searchTerm.toLowerCase().trim();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesBrand = product.brand.toLowerCase().includes(query);
        const matchesCategory = product.category.toLowerCase().includes(query);
        const matchesDesc = product.description.toLowerCase().includes(query);
        const matchesSpecs = product.specs?.some((s) => s.toLowerCase().includes(query));

        if (!matchesName && !matchesBrand && !matchesCategory && !matchesDesc && !matchesSpecs) {
          return false;
        }
      }

      // Category filter
      if (selectedCategory !== 'All' && product.category !== selectedCategory) {
        return false;
      }

      // Brand filter
      if (selectedBrand !== 'All' && product.brand !== selectedBrand) {
        return false;
      }

      // Wishlist Only filter
      if (showWishlistOnly && !wishlist.includes(product.id)) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      const aLowest = getLowestPriceRetailer(a.retailers)?.price || 0;
      const bLowest = getLowestPriceRetailer(b.retailers)?.price || 0;
      const aHighest = getHighestPriceRetailer(a.retailers)?.price || 0;
      const bHighest = getHighestPriceRetailer(b.retailers)?.price || 0;

      if (sortBy === 'price-asc') return aLowest - bLowest;
      if (sortBy === 'price-desc') return bLowest - aLowest;
      if (sortBy === 'rating') return (b.rating || 0) - (a.rating || 0);
      if (sortBy === 'savings') return (bHighest - bLowest) - (aHighest - aLowest);
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return 0;
    });
  }, [searchTerm, selectedCategory, selectedBrand, showWishlistOnly, wishlist, sortBy]);

  // Wishlist products
  const wishlistProducts = useMemo(() => {
    return sampleProducts.filter((p) => wishlist.includes(p.id));
  }, [wishlist]);

  // Reset all filters
  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setSelectedBrand('All');
    setShowWishlistOnly(false);
    setSortBy('price-asc');
  };

  const hasActiveFilters = 
    searchTerm.trim() !== '' || 
    selectedCategory !== 'All' || 
    selectedBrand !== 'All' || 
    showWishlistOnly || 
    sortBy !== 'price-asc';

  return (
    <div className="min-h-screen bg-slate-50/60 flex flex-col text-slate-800 antialiased font-sans selection:bg-purple-100 selection:text-purple-900">
      {/* 1. Demo Data Alert Banner */}
      <DemoBanner />

      {/* 2. Top Navigation */}
      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        wishlistCount={wishlist.length}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onResetSearch={handleResetFilters}
      />

      {/* 3. Hero Introduction Banner */}
      <div className="relative bg-gradient-to-b from-purple-100/70 via-purple-50/40 to-slate-50/60 border-b border-purple-100/80 pt-8 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-800 text-xs font-bold mb-3 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              <span>Never Overpay Online Again</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
              Compare prices across <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-600">top Indian retailers</span>.
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              PriceWise tracks live deals across Amazon, Flipkart, Croma, Reliance Digital, and brand stores. Find the lowest price, check retailer stocks, and maximize your savings in seconds.
            </p>

            {/* Quick Feature Pills */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs font-semibold text-slate-700">
              <span className="flex items-center gap-1.5 bg-white/80 border border-purple-100 px-3 py-1.5 rounded-lg shadow-2xs">
                <Check className="w-4 h-4 text-emerald-500 stroke-[3]" />
                Lowest Price Highlighted
              </span>
              <span className="flex items-center gap-1.5 bg-white/80 border border-purple-100 px-3 py-1.5 rounded-lg shadow-2xs">
                <Check className="w-4 h-4 text-emerald-500 stroke-[3]" />
                Save up to ₹15,000+
              </span>
              <span className="flex items-center gap-1.5 bg-white/80 border border-purple-100 px-3 py-1.5 rounded-lg shadow-2xs">
                <Check className="w-4 h-4 text-emerald-500 stroke-[3]" />
                Zero Fees & No Login Required
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Main Catalog Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full space-y-6">
        {/* Category Horizontal Filter */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-bold uppercase tracking-wider text-purple-700">
              Browse by Category
            </h2>
          </div>
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={(cat) => {
              setSelectedCategory(cat);
              // Clear search if selecting specific category to avoid accidental conflict
              if (cat !== 'All' && searchTerm) setSearchTerm('');
            }}
            productCounts={categoryCounts}
          />
        </div>

        {/* Filter and Sort Toolbar */}
        <FilterSortBar
          sortBy={sortBy}
          setSortBy={setSortBy}
          brands={allBrands}
          selectedBrand={selectedBrand}
          setSelectedBrand={setSelectedBrand}
          showWishlistOnly={showWishlistOnly}
          setShowWishlistOnly={setShowWishlistOnly}
          totalResults={filteredProducts.length}
          onResetFilters={handleResetFilters}
          hasActiveFilters={hasActiveFilters}
        />

        {/* Search Query Feedback */}
        {searchTerm.trim() && (
          <div className="flex items-center justify-between bg-purple-50/70 border border-purple-200 px-4 py-2.5 rounded-xl text-xs sm:text-sm text-purple-900">
            <span>
              Showing results for: <strong className="text-purple-700">"{searchTerm}"</strong>
            </span>
            <button
              onClick={() => setSearchTerm('')}
              className="text-purple-600 hover:text-purple-800 font-semibold underline text-xs"
            >
              Clear Search
            </button>
          </div>
        )}

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isWishlisted={wishlist.includes(product.id)}
                onToggleWishlist={handleToggleWishlist}
                onOpenCompare={(prod) => setCompareProduct(prod)}
                onRetailerClick={handleRetailerClick}
              />
            ))}
          </div>
        ) : (
          /* Empty Results State */
          <div className="bg-white rounded-3xl border border-dashed border-purple-200 p-12 text-center max-w-lg mx-auto shadow-xs my-8">
            <div className="w-16 h-16 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mx-auto mb-4 border border-purple-100 shadow-inner">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-1">No matching products found</h3>
            <p className="text-xs text-slate-500 mb-6 leading-relaxed">
              We couldn't find any products matching your current filters or search term{' '}
              {searchTerm && <strong className="text-purple-700">"{searchTerm}"</strong>}.
            </p>
            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs shadow-md shadow-purple-600/20 transition-all hover:scale-102 active:scale-98"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset All Filters</span>
            </button>
          </div>
        )}
      </main>

      {/* 5. Price Comparison Modal */}
      {compareProduct && (
        <PriceComparisonModal
          product={compareProduct}
          onClose={() => setCompareProduct(null)}
          isWishlisted={wishlist.includes(compareProduct.id)}
          onToggleWishlist={handleToggleWishlist}
          onRetailerClick={handleRetailerClick}
        />
      )}

      {/* 6. Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistProducts={wishlistProducts}
        onRemoveFromWishlist={handleToggleWishlist}
        onOpenCompare={(prod) => setCompareProduct(prod)}
        onClearWishlist={handleClearWishlist}
      />

      {/* 7. Floating Toast Alerts */}
      <Toast toast={toast} onClose={() => setToast(null)} />

      {/* 8. Footer */}
      <Footer onCategoryClick={(cat) => setSelectedCategory(cat)} />
    </div>
  );
}

import React from 'react';
import { Smartphone, Laptop, Headphones, Watch, Tv, LayoutGrid } from 'lucide-react';

const categoryIcons = {
  All: LayoutGrid,
  Smartphones: Smartphone,
  Laptops: Laptop,
  Headphones: Headphones,
  Smartwatches: Watch,
  Televisions: Tv
};

export default function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
  productCounts
}) {
  return (
    <div className="w-full overflow-x-auto pb-2 scrollbar-none">
      <div className="flex items-center gap-2 sm:gap-3 min-w-max">
        {categories.map((cat) => {
          const Icon = categoryIcons[cat] || LayoutGrid;
          const isSelected = selectedCategory === cat;
          const count = productCounts[cat] || 0;

          return (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 border ${
                isSelected
                  ? 'bg-purple-600 text-white border-purple-600 shadow-md shadow-purple-600/25 scale-102 font-semibold'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-purple-300 hover:bg-purple-50/50'
              }`}
            >
              <Icon className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-purple-600'}`} />
              <span>{cat}</span>
              <span
                className={`text-xs px-1.5 py-0.5 rounded-full font-bold ${
                  isSelected
                    ? 'bg-purple-800/50 text-purple-100'
                    : 'bg-slate-100 text-slate-600'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

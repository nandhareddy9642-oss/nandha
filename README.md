# PriceWise — Online Shopping Price Comparison 🛍️

PriceWise is a fast, modern, and responsive online shopping price comparison web application built for Indian shoppers. It allows users to search, filter, and compare prices for electronics (Smartphones, Laptops, Headphones, Smartwatches, Televisions) across top Indian retailers such as **Amazon**, **Flipkart**, **Croma**, **Reliance Digital**, and **Vijay Sales**.

---

## ⚡ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite 5](https://vitejs.dev/)
- **Language**: JavaScript (ES Modules)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with modern purple accent palette
- **Icons**: [Lucide React](https://lucide.dev/)
- **Data Persistence**: Browser `localStorage` (for Wishlist persistence)
- **Zero API Keys / Zero Paid Services Required**: Completely self-contained with rich sample data

---

## 🚀 Key Features

1. **Multi-Retailer Comparison**:
   - Compares prices across Amazon, Flipkart, Croma, Reliance Digital, and Vijay Sales in Indian Rupees (₹).
   - Instant calculation of lowest listed price and potential savings across stores.
2. **Deep Comparison Modal**:
   - Opens an interactive modal ranking all store offers from lowest to highest.
   - Highlights the best price with a badge and indicates the price difference (e.g., `+₹2,000 more`).
   - Displays delivery estimates, seller ratings, and stock status.
3. **Live Instant Search**:
   - Search across product titles, brand names, specifications, descriptions, and categories.
   - Includes quick-clear search button and polite empty-state handling with a one-click reset.
4. **Category & Brand Filtering**:
   - Category chips with live item counters: *All*, *Smartphones*, *Laptops*, *Headphones*, *Smartwatches*, *Televisions*.
   - Filter by brand (*Apple, Samsung, OnePlus, Dell, ASUS, Sony, Bose, Garmin, LG*).
5. **Smart Sorting**:
   - Lowest Price First (Default)
   - Highest Price First
   - Highest Rated First
   - Biggest Potential Savings
   - Name (A to Z)
6. **Persistent Wishlist**:
   - Add/remove items with a single click.
   - Automatically saved to and restored from `localStorage`.
   - Slide-out Wishlist Drawer to manage saved items and jump directly to price comparisons.
   - "Wishlist Only" toggle filter on the main product catalog.
7. **Safe Retailer Redirection**:
   - Verified search URLs to official Indian retailer portals.
   - Toast notification feedback and disabled buttons for out-of-stock items.
8. **Demo Data Transparency**:
   - Prominent top alert banner and labels identifying simulated demo prices.

---

## 💻 How to Run Locally

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (v9 or higher)

### 1. Installation
In the project directory, run:
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
The server will start at: `http://localhost:3000` (or `http://localhost:5173`).

### 3. Build for Production
To build the optimized static assets:
```bash
npm run build
```
The production bundle will be generated in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🧪 Verified Working Features

| Feature | Status | Description |
| :--- | :---: | :--- |
| **Instant Search** | ✅ Verified | Filters products in real-time as you type |
| **Category Filter** | ✅ Verified | Filter by Smartphones, Laptops, Headphones, Smartwatches, TVs |
| **Brand Filter** | ✅ Verified | Filter by manufacturer (Apple, Samsung, Sony, etc.) |
| **Price Sorting** | ✅ Verified | Sort by lowest/highest price, rating, savings, and alphabetical |
| **Lowest Price Highlighting** | ✅ Verified | Green/purple badges, best deal calculation |
| **Price Comparison Modal** | ✅ Verified | Detailed breakdown of all retailers with ranked prices |
| **Wishlist with localStorage** | ✅ Verified | Persists saved products across browser refreshes |
| **Wishlist Drawer** | ✅ Verified | Slide-over drawer to inspect and clear saved items |
| **Retailer Action Links** | ✅ Verified | Direct links with toast notifications |
| **Empty Search State** | ✅ Verified | Clean fallback with one-click filter reset |
| **Responsive Design** | ✅ Verified | Optimized for mobile phones, tablets, and desktops |

---

## 📊 Sample Data vs. Live Data Notice

- **What is Sample Data**:
  - Store prices, stock availability, and promotional badges are curated sample data simulating live market prices.
  - This allows the application to run without needing commercial e-commerce API keys or web scraping proxies.
- **What is Live**:
  - Product search, filtering, price sorting, mathematical savings calculations, localStorage wishlist management, and links to verified retailer search queries.

---

## 📦 How to Push Code to GitHub

Initialize the repository and push to GitHub using the commands below:

```bash
# 1. Initialize git repository
git init

# 2. Add all files
git add .

# 3. Create initial commit
git commit -m "Initial commit: PriceWise price comparison web application"

# 4. Rename main branch
git branch -M main

# 5. Add your GitHub remote repository (replace with your repo URL)
git remote add origin https://github.com/<YOUR_USERNAME>/pricewise.git

# 6. Push to GitHub
git push -u origin main
```

---

## 🌐 How to Deploy Online (Free Options)

### Option 1: Vercel (Recommended — 2 minutes)
1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your `pricewise` repository.
4. Framework Preset will automatically detect **Vite**.
5. Click **Deploy**. Vercel will build and give you a live HTTPS URL.

### Option 2: Netlify
1. Sign in to [Netlify](https://www.netlify.com/).
2. Click **"Add new site"** > **"Import an existing project"** > **GitHub**.
3. Select your repository.
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Click **Deploy Site**.

### Option 3: GitHub Pages
1. Install `gh-pages`:
   ```bash
   npm install -D gh-pages
   ```
2. In `vite.config.js`, set `base: '/<repository-name>/'`.
3. In `package.json`, add `"deploy": "vite build && gh-pages -d dist"`.
4. Run:
   ```bash
   npm run deploy
   ```

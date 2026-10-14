export const sampleProducts = [
  {
    id: 'prod-1',
    name: 'Apple iPhone 15 Pro (128 GB) - Natural Titanium',
    brand: 'Apple',
    category: 'Smartphones',
    rating: 4.7,
    reviewCount: 3842,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80',
    description: 'Forged in titanium and featuring the groundbreaking A17 Pro chip, customizable Action button, and 48MP main camera system with 3x Telephoto.',
    specs: ['A17 Pro chip with 6-core GPU', '6.1-inch Super Retina XDR display with ProMotion', 'Titanium design with textured matte glass', 'USB-C with USB 3 speeds'],
    retailers: [
      {
        id: 'ret-1-1',
        name: 'Amazon',
        price: 127990,
        originalPrice: 134900,
        inStock: true,
        delivery: 'Prime Free One-Day Delivery',
        sellerRating: 4.8,
        url: 'https://www.amazon.in/s?k=iPhone+15+Pro+128GB',
        badge: 'Best Deal'
      },
      {
        id: 'ret-1-2',
        name: 'Flipkart',
        price: 129900,
        originalPrice: 134900,
        inStock: true,
        delivery: 'Free Delivery by Tomorrow',
        sellerRating: 4.6,
        url: 'https://www.flipkart.com/search?q=iPhone+15+Pro+128GB'
      },
      {
        id: 'ret-1-3',
        name: 'Croma',
        price: 132400,
        originalPrice: 134900,
        inStock: true,
        delivery: 'Express Store Pickup / 2-Day Delivery',
        sellerRating: 4.5,
        url: 'https://www.croma.com/search/?text=iPhone+15+Pro'
      },
      {
        id: 'ret-1-4',
        name: 'Reliance Digital',
        price: 134900,
        originalPrice: 134900,
        inStock: true,
        delivery: 'Standard Delivery (2-3 Days)',
        sellerRating: 4.4,
        url: 'https://www.reliancedigital.in/search?q=iPhone+15+Pro'
      }
    ]
  },
  {
    id: 'prod-2',
    name: 'Samsung Galaxy S24 Ultra 5G (256 GB, Titanium Gray)',
    brand: 'Samsung',
    category: 'Smartphones',
    rating: 4.8,
    reviewCount: 2910,
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=800&q=80',
    description: 'Galaxy AI is here. 200MP camera with Quad Telephoto zoom, built-in S Pen, and Snapdragon 8 Gen 3 for Galaxy.',
    specs: ['Snapdragon 8 Gen 3 for Galaxy', '6.8-inch Dynamic AMOLED 2X 120Hz', '200MP Quad Telephoto Camera', '5000 mAh All-Day Battery'],
    retailers: [
      {
        id: 'ret-2-1',
        name: 'Flipkart',
        price: 119999,
        originalPrice: 134999,
        inStock: true,
        delivery: 'Free Delivery by Tomorrow',
        sellerRating: 4.7,
        url: 'https://www.flipkart.com/search?q=Samsung+Galaxy+S24+Ultra',
        badge: 'Lowest Price'
      },
      {
        id: 'ret-2-2',
        name: 'Amazon',
        price: 124999,
        originalPrice: 134999,
        inStock: true,
        delivery: 'Prime Fast Delivery',
        sellerRating: 4.8,
        url: 'https://www.amazon.in/s?k=Samsung+Galaxy+S24+Ultra'
      },
      {
        id: 'ret-2-3',
        name: 'Samsung Store Online',
        price: 129999,
        originalPrice: 134999,
        inStock: true,
        delivery: 'Direct Brand Dispatch',
        sellerRating: 4.9,
        url: 'https://www.samsung.com/in/smartphones/galaxy-s24-ultra/'
      },
      {
        id: 'ret-2-4',
        name: 'Croma',
        price: 128990,
        originalPrice: 134999,
        inStock: false,
        delivery: 'Currently Out of Stock',
        sellerRating: 4.5,
        url: 'https://www.croma.com/search/?text=Galaxy+S24+Ultra'
      }
    ]
  },
  {
    id: 'prod-3',
    name: 'OnePlus 12 5G (16GB RAM, 512GB Storage, Silky Black)',
    brand: 'OnePlus',
    category: 'Smartphones',
    rating: 4.6,
    reviewCount: 1850,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80',
    description: 'Flagship 4th Gen Hasselblad Camera system, 2K 120 Hz ProXDR Display, and blazing 100W SUPERVOOC fast charging.',
    specs: ['Snapdragon 8 Gen 3 Mobile Platform', '16GB LPDDR5X RAM + 512GB UFS 4.0', '5400 mAh Battery + 100W Charging', '50MP Sony LYT-808 Camera'],
    retailers: [
      {
        id: 'ret-3-1',
        name: 'Amazon',
        price: 64999,
        originalPrice: 69999,
        inStock: true,
        delivery: 'Free 1-Day Prime Delivery',
        sellerRating: 4.8,
        url: 'https://www.amazon.in/s?k=OnePlus+12+5G',
        badge: 'Best Value'
      },
      {
        id: 'ret-3-2',
        name: 'OnePlus Store',
        price: 67999,
        originalPrice: 69999,
        inStock: true,
        delivery: 'Official Courier (2 Days)',
        sellerRating: 4.7,
        url: 'https://www.oneplus.in/12'
      },
      {
        id: 'ret-3-3',
        name: 'Reliance Digital',
        price: 68999,
        originalPrice: 69999,
        inStock: true,
        delivery: 'Express Home Delivery',
        sellerRating: 4.4,
        url: 'https://www.reliancedigital.in/search?q=OnePlus+12'
      }
    ]
  },
  {
    id: 'prod-4',
    name: 'Apple MacBook Air M3 (13.6-inch, 16GB Unified Memory, 512GB SSD)',
    brand: 'Apple',
    category: 'Laptops',
    rating: 4.9,
    reviewCount: 1640,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
    description: 'Lean, mean M3 machine. Incredibly thin design, up to 18 hours of battery life, and vivid Liquid Retina display.',
    specs: ['Apple M3 chip with 8-core CPU & 10-core GPU', '16GB Unified Memory', '512GB Superfast SSD Storage', '13.6-inch Liquid Retina Display with True Tone'],
    retailers: [
      {
        id: 'ret-4-1',
        name: 'Amazon',
        price: 124900,
        originalPrice: 134900,
        inStock: true,
        delivery: 'Free Guaranteed Delivery',
        sellerRating: 4.9,
        url: 'https://www.amazon.in/s?k=MacBook+Air+M3+16GB',
        badge: 'Lowest Price'
      },
      {
        id: 'ret-4-2',
        name: 'Flipkart',
        price: 128990,
        originalPrice: 134900,
        inStock: true,
        delivery: 'Delivery in 2 Days',
        sellerRating: 4.6,
        url: 'https://www.flipkart.com/search?q=MacBook+Air+M3+16GB'
      },
      {
        id: 'ret-4-3',
        name: 'Croma',
        price: 131900,
        originalPrice: 134900,
        inStock: true,
        delivery: 'Store Pickup Available',
        sellerRating: 4.5,
        url: 'https://www.croma.com/search/?text=MacBook+Air+M3'
      },
      {
        id: 'ret-4-4',
        name: 'Apple Store India',
        price: 134900,
        originalPrice: 134900,
        inStock: true,
        delivery: 'Free Engraving & Standard Delivery',
        sellerRating: 5.0,
        url: 'https://www.apple.com/in/shop/buy-mac/macbook-air'
      }
    ]
  },
  {
    id: 'prod-5',
    name: 'Dell XPS 13 OLED (Intel Core Ultra 7, 16GB, 1TB SSD)',
    brand: 'Dell',
    category: 'Laptops',
    rating: 4.5,
    reviewCount: 820,
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=800&q=80',
    description: 'Iconic minimalist craftmanship in machined aluminum with 3K+ OLED InfinityEdge touch display and Intel AI Boost.',
    specs: ['Intel Core Ultra 7 155H', '16GB LPDDR5x 7467MHz', '1TB PCIe NVMe SSD', '13.4-inch 3K+ (2880 x 1800) OLED Touch'],
    retailers: [
      {
        id: 'ret-5-1',
        name: 'Croma',
        price: 154990,
        originalPrice: 169990,
        inStock: true,
        delivery: 'Next Day Store Pickup',
        sellerRating: 4.6,
        url: 'https://www.croma.com/search/?text=Dell+XPS+13+OLED',
        badge: 'Best Deal'
      },
      {
        id: 'ret-5-2',
        name: 'Amazon',
        price: 158990,
        originalPrice: 169990,
        inStock: true,
        delivery: 'Free Scheduled Delivery',
        sellerRating: 4.7,
        url: 'https://www.amazon.in/s?k=Dell+XPS+13+Core+Ultra+7'
      },
      {
        id: 'ret-5-3',
        name: 'Dell Official India',
        price: 164990,
        originalPrice: 169990,
        inStock: true,
        delivery: 'Standard Shipping (3-5 Days)',
        sellerRating: 4.8,
        url: 'https://www.dell.com/en-in/shop/laptops-2-in-1-pcs/xps-13-laptop'
      }
    ]
  },
  {
    id: 'prod-6',
    name: 'ASUS ROG Zephyrus G14 (AMD Ryzen 9, RTX 4060, 16GB, 1TB SSD)',
    brand: 'ASUS',
    category: 'Laptops',
    rating: 4.8,
    reviewCount: 940,
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
    description: 'Ultraportable gaming mastery with 3K 120Hz OLED ROG Nebula display, CNC aluminum chassis, and slash lighting.',
    specs: ['AMD Ryzen 9 8945HS Processor', 'NVIDIA GeForce RTX 4060 8GB GDDR6', '14.0-inch 3K OLED 120Hz 0.2ms', '1.50 kg Ultraportable Weight'],
    retailers: [
      {
        id: 'ret-6-1',
        name: 'Flipkart',
        price: 162990,
        originalPrice: 179990,
        inStock: true,
        delivery: 'Free Delivery in 2 Days',
        sellerRating: 4.6,
        url: 'https://www.flipkart.com/search?q=ASUS+ROG+Zephyrus+G14',
        badge: 'Lowest Price'
      },
      {
        id: 'ret-6-2',
        name: 'Amazon',
        price: 166990,
        originalPrice: 179990,
        inStock: true,
        delivery: 'Prime Guaranteed Delivery',
        sellerRating: 4.8,
        url: 'https://www.amazon.in/s?k=ASUS+ROG+Zephyrus+G14'
      },
      {
        id: 'ret-6-3',
        name: 'Reliance Digital',
        price: 174990,
        originalPrice: 179990,
        inStock: true,
        delivery: 'Standard Delivery',
        sellerRating: 4.4,
        url: 'https://www.reliancedigital.in/search?q=Zephyrus+G14'
      }
    ]
  },
  {
    id: 'prod-7',
    name: 'Sony WH-1000XM5 Wireless Noise Cancelling Headphones',
    brand: 'Sony',
    category: 'Headphones',
    rating: 4.7,
    reviewCount: 6310,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    description: 'Industry-leading noise cancellation powered by two processors and eight microphones. Exceptional sound quality and 30-hour battery.',
    specs: ['Dual Processor Active Noise Cancellation', '30-Hour Battery Life with Quick Charge', 'Speak-to-Chat & Multipoint Connection', 'Ultra-comfortable Lightweight Design'],
    retailers: [
      {
        id: 'ret-7-1',
        name: 'Amazon',
        price: 26990,
        originalPrice: 34990,
        inStock: true,
        delivery: 'Free 1-Day Prime Delivery',
        sellerRating: 4.8,
        url: 'https://www.amazon.in/s?k=Sony+WH-1000XM5',
        badge: 'Best Deal'
      },
      {
        id: 'ret-7-2',
        name: 'Flipkart',
        price: 28490,
        originalPrice: 34990,
        inStock: true,
        delivery: 'Free Delivery in 2 Days',
        sellerRating: 4.6,
        url: 'https://www.flipkart.com/search?q=Sony+WH-1000XM5'
      },
      {
        id: 'ret-7-3',
        name: 'Croma',
        price: 29990,
        originalPrice: 34990,
        inStock: true,
        delivery: 'Store Pickup or Home Delivery',
        sellerRating: 4.7,
        url: 'https://www.croma.com/search/?text=Sony+WH-1000XM5'
      },
      {
        id: 'ret-7-4',
        name: 'Vijay Sales',
        price: 31990,
        originalPrice: 34990,
        inStock: true,
        delivery: 'Standard Delivery',
        sellerRating: 4.3,
        url: 'https://www.vijaysales.com/search/Sony%20WH-1000XM5'
      }
    ]
  },
  {
    id: 'prod-8',
    name: 'Bose QuietComfort Ultra Wireless Noise Cancelling Headphones',
    brand: 'Bose',
    category: 'Headphones',
    rating: 4.6,
    reviewCount: 2180,
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80',
    description: 'Groundbreaking spatialized audio for more immersive listening with world-class noise cancellation and CustomTune technology.',
    specs: ['Bose Immersive Audio Spatial Experience', 'World-Class CustomTune Active Noise Cancellation', 'Up to 24 Hours of Playtime', 'Plush Cushions for All-Day Comfort'],
    retailers: [
      {
        id: 'ret-8-1',
        name: 'Reliance Digital',
        price: 33990,
        originalPrice: 37900,
        inStock: true,
        delivery: 'Express Delivery by Tomorrow',
        sellerRating: 4.5,
        url: 'https://www.reliancedigital.in/search?q=Bose+QuietComfort+Ultra',
        badge: 'Lowest Price'
      },
      {
        id: 'ret-8-2',
        name: 'Amazon',
        price: 35900,
        originalPrice: 37900,
        inStock: true,
        delivery: 'Prime Free Delivery',
        sellerRating: 4.8,
        url: 'https://www.amazon.in/s?k=Bose+QuietComfort+Ultra'
      },
      {
        id: 'ret-8-3',
        name: 'Croma',
        price: 36490,
        originalPrice: 37900,
        inStock: true,
        delivery: 'Pickup from Nearby Store',
        sellerRating: 4.6,
        url: 'https://www.croma.com/search/?text=Bose+QC+Ultra'
      }
    ]
  },
  {
    id: 'prod-9',
    name: 'Apple AirPods Pro (2nd Generation) with USB-C MagSafe Case',
    brand: 'Apple',
    category: 'Headphones',
    rating: 4.8,
    reviewCount: 8450,
    image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=800&q=80',
    description: 'Up to 2x more active noise cancellation, Adaptive Audio, Transparency mode, and Personalized Spatial Audio with dynamic head tracking.',
    specs: ['Apple H2 Headphone Chip', 'Active Noise Cancellation with Transparency', 'USB-C MagSafe Charging Case with Speaker & Lanyard', 'Up to 30 Hours Total Battery Life'],
    retailers: [
      {
        id: 'ret-9-1',
        name: 'Amazon',
        price: 20999,
        originalPrice: 24900,
        inStock: true,
        delivery: 'Free One-Day Delivery',
        sellerRating: 4.9,
        url: 'https://www.amazon.in/s?k=AirPods+Pro+2nd+Gen+USB+C',
        badge: 'Best Seller'
      },
      {
        id: 'ret-9-2',
        name: 'Flipkart',
        price: 21990,
        originalPrice: 24900,
        inStock: true,
        delivery: 'Free Delivery in 2 Days',
        sellerRating: 4.6,
        url: 'https://www.flipkart.com/search?q=AirPods+Pro+2'
      },
      {
        id: 'ret-9-3',
        name: 'Vijay Sales',
        price: 22990,
        originalPrice: 24900,
        inStock: true,
        delivery: 'Express 24-Hour Dispatch',
        sellerRating: 4.4,
        url: 'https://www.vijaysales.com/search/AirPods%20Pro'
      },
      {
        id: 'ret-9-4',
        name: 'Apple Store India',
        price: 24900,
        originalPrice: 24900,
        inStock: true,
        delivery: 'Free Delivery & Engraving',
        sellerRating: 5.0,
        url: 'https://www.apple.com/in/shop/product/MTJV3HN/A/airpods-pro'
      }
    ]
  },
  {
    id: 'prod-10',
    name: 'Apple Watch Series 9 GPS 45mm (Midnight Aluminum Case)',
    brand: 'Apple',
    category: 'Smartwatches',
    rating: 4.8,
    reviewCount: 3120,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80',
    description: 'Smarter, brighter, mightier. Features S9 SiP chip, double tap gesture, brightest display ever, and comprehensive health monitoring.',
    specs: ['S9 SiP with 64-bit dual-core processor', 'Double tap gesture interaction', '2000 nits Always-On Retina Display', 'ECG, Blood Oxygen & Temperature Sensing'],
    retailers: [
      {
        id: 'ret-10-1',
        name: 'Flipkart',
        price: 38999,
        originalPrice: 44900,
        inStock: true,
        delivery: 'Free Next-Day Delivery',
        sellerRating: 4.7,
        url: 'https://www.flipkart.com/search?q=Apple+Watch+Series+9+45mm',
        badge: 'Lowest Price'
      },
      {
        id: 'ret-10-2',
        name: 'Amazon',
        price: 41490,
        originalPrice: 44900,
        inStock: true,
        delivery: 'Prime Guaranteed Free Delivery',
        sellerRating: 4.8,
        url: 'https://www.amazon.in/s?k=Apple+Watch+Series+9+45mm'
      },
      {
        id: 'ret-10-3',
        name: 'Croma',
        price: 42900,
        originalPrice: 44900,
        inStock: true,
        delivery: 'Same-day Store Pickup',
        sellerRating: 4.5,
        url: 'https://www.croma.com/search/?text=Apple+Watch+Series+9'
      }
    ]
  },
  {
    id: 'prod-11',
    name: 'Samsung Galaxy Watch 6 Classic 47mm Bluetooth',
    brand: 'Samsung',
    category: 'Smartwatches',
    rating: 4.5,
    reviewCount: 1470,
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=800&q=80',
    description: 'Timeless rotating bezel meets advanced health tracking, sleep coaching, personalized heart rate zones, and Sapphire Crystal glass.',
    specs: ['Rotating physical navigation bezel', 'Sapphire Crystal 1.5-inch Super AMOLED', 'BioActive Sensor (ECG, BIA, Optical Heart Rate)', 'IP68 + 5ATM Water & Dust Resistance'],
    retailers: [
      {
        id: 'ret-11-1',
        name: 'Amazon',
        price: 27999,
        originalPrice: 39999,
        inStock: true,
        delivery: 'Free Fast Delivery',
        sellerRating: 4.7,
        url: 'https://www.amazon.in/s?k=Samsung+Galaxy+Watch+6+Classic',
        badge: 'Top Discount'
      },
      {
        id: 'ret-11-2',
        name: 'Samsung Shop India',
        price: 29999,
        originalPrice: 39999,
        inStock: true,
        delivery: 'Brand Direct Delivery',
        sellerRating: 4.8,
        url: 'https://www.samsung.com/in/watches/galaxy-watch/galaxy-watch6-classic-47mm-black-bluetooth-sm-r960nzkainu/'
      },
      {
        id: 'ret-11-3',
        name: 'Reliance Digital',
        price: 31999,
        originalPrice: 39999,
        inStock: true,
        delivery: '2 Days Delivery',
        sellerRating: 4.4,
        url: 'https://www.reliancedigital.in/search?q=Galaxy+Watch+6+Classic'
      }
    ]
  },
  {
    id: 'prod-12',
    name: 'Garmin Forerunner 265 Running GPS Smartwatch',
    brand: 'Garmin',
    category: 'Smartwatches',
    rating: 4.7,
    reviewCount: 910,
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80',
    description: 'Brilliant AMOLED touchscreen, training readiness score, multi-band GNSS GPS, and battery life up to 13 days in smartwatch mode.',
    specs: ['1.3-inch Colorful AMOLED Touchscreen', 'Advanced Running Dynamics & Race Widget', 'Multi-Band GPS Satellite Accuracy', 'Up to 13 Days Battery Life'],
    retailers: [
      {
        id: 'ret-12-1',
        name: 'Amazon',
        price: 47990,
        originalPrice: 50490,
        inStock: true,
        delivery: 'Prime Fast Free Delivery',
        sellerRating: 4.8,
        url: 'https://www.amazon.in/s?k=Garmin+Forerunner+265',
        badge: 'Lowest Price'
      },
      {
        id: 'ret-12-2',
        name: 'Croma',
        price: 49490,
        originalPrice: 50490,
        inStock: true,
        delivery: 'Express Courier Delivery',
        sellerRating: 4.5,
        url: 'https://www.croma.com/search/?text=Garmin+Forerunner+265'
      },
      {
        id: 'ret-12-3',
        name: 'Garmin Brand Store',
        price: 50490,
        originalPrice: 50490,
        inStock: true,
        delivery: 'Manufacturer Direct Shipping',
        sellerRating: 4.9,
        url: 'https://www.garmin.co.in/products/wearables/forerunner-265-whitestone/'
      }
    ]
  },
  {
    id: 'prod-13',
    name: 'LG C3 55-inch 4K Smart OLED evo TV (OLED55C3PSA)',
    brand: 'LG',
    category: 'Televisions',
    rating: 4.8,
    reviewCount: 2240,
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80',
    description: 'Self-lit OLED pixels deliver infinite contrast and 100% color fidelity. Powered by the α9 AI Processor Gen6 with 0.1ms response time and 4 HDMI 2.1 ports.',
    specs: ['α9 AI Processor Gen6 4K with Brightness Booster', '0.1ms Response Time, 120Hz Refresh Rate, G-Sync & FreeSync', 'Dolby Vision & Dolby Atmos Cinematic Sound', 'webOS 23 with ThinQ AI and Hands-Free Voice Control'],
    retailers: [
      {
        id: 'ret-13-1',
        name: 'Flipkart',
        price: 114990,
        originalPrice: 159990,
        inStock: true,
        delivery: 'Free Professional Delivery & Installation',
        sellerRating: 4.7,
        url: 'https://www.flipkart.com/search?q=LG+C3+55+inch+OLED',
        badge: 'Mega Deal'
      },
      {
        id: 'ret-13-2',
        name: 'Amazon',
        price: 119990,
        originalPrice: 159990,
        inStock: true,
        delivery: 'Scheduled Free Delivery & Demo',
        sellerRating: 4.8,
        url: 'https://www.amazon.in/s?k=LG+55+inch+C3+OLED+TV'
      },
      {
        id: 'ret-13-3',
        name: 'Croma',
        price: 124990,
        originalPrice: 159990,
        inStock: true,
        delivery: 'Free Delivery + 2-Year Extended Plan Option',
        sellerRating: 4.6,
        url: 'https://www.croma.com/search/?text=LG+C3+55+inch+OLED'
      },
      {
        id: 'ret-13-4',
        name: 'Reliance Digital',
        price: 129990,
        originalPrice: 159990,
        inStock: true,
        delivery: 'Standard Delivery & Installation',
        sellerRating: 4.4,
        url: 'https://www.reliancedigital.in/search?q=LG+C3+55+OLED'
      }
    ]
  },
  {
    id: 'prod-14',
    name: 'Sony Bravia 55-inch 4K Ultra HD Smart LED Google TV (KD-55X74L)',
    brand: 'Sony',
    category: 'Televisions',
    rating: 4.7,
    reviewCount: 4890,
    image: 'https://images.unsplash.com/photo-1577979749830-f1d742b96791?auto=format&fit=crop&w=800&q=80',
    description: 'X1 4K Processor creates vibrant lifelike colors with Live Color technology. Open Baffle Speaker with Dolby Audio gives crystal clear sound.',
    specs: ['4K Processor X1 with 4K X-Reality PRO', 'Google TV with Google Assistant & Apple AirPlay', '20 Watts Open Baffle Speaker with Dolby Audio', 'Motionflow XR 100 for Smooth Action'],
    retailers: [
      {
        id: 'ret-14-1',
        name: 'Amazon',
        price: 54990,
        originalPrice: 79900,
        inStock: true,
        delivery: 'Free Scheduled Delivery with Brand Installation',
        sellerRating: 4.8,
        url: 'https://www.amazon.in/s?k=Sony+Bravia+55+inch+KD-55X74L',
        badge: 'Lowest Price'
      },
      {
        id: 'ret-14-2',
        name: 'Vijay Sales',
        price: 56990,
        originalPrice: 79900,
        inStock: true,
        delivery: 'Free Shipping in 24 Hours',
        sellerRating: 4.4,
        url: 'https://www.vijaysales.com/search/Sony%2055%20inch%20Google%20TV'
      },
      {
        id: 'ret-14-3',
        name: 'Flipkart',
        price: 57990,
        originalPrice: 79900,
        inStock: true,
        delivery: 'Delivery by Thursday',
        sellerRating: 4.6,
        url: 'https://www.flipkart.com/search?q=Sony+Bravia+55+inch'
      },
      {
        id: 'ret-14-4',
        name: 'Reliance Digital',
        price: 59990,
        originalPrice: 79900,
        inStock: true,
        delivery: 'Store Delivery & Mounting',
        sellerRating: 4.5,
        url: 'https://www.reliancedigital.in/search?q=Sony+55X74L'
      }
    ]
  }
];

export const categories = [
  'All',
  'Smartphones',
  'Laptops',
  'Headphones',
  'Smartwatches',
  'Televisions'
];

export function getLowestPriceRetailer(retailers) {
  if (!retailers || retailers.length === 0) return null;
  return [...retailers].sort((a, b) => a.price - b.price)[0];
}

export function getHighestPriceRetailer(retailers) {
  if (!retailers || retailers.length === 0) return null;
  return [...retailers].sort((a, b) => b.price - a.price)[0];
}

export function formatINR(amount) {
  if (amount === undefined || amount === null) return '₹0';
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
}

// ShopPulse 330 Verified Diverse Products Catalog (110 Electronics, 110 Fashion, 110 Accessories)
const products = [
  {
    "id": 1,
    "name": "Apple iPhone 16 Pro Max 256GB Desert Titanium",
    "brand": "Apple",
    "category": "Electronics",
    "subcategory": "Smartphones",
    "price": 1199.99,
    "mrp": 1538.45,
    "rating": 4.5,
    "reviewCount": 193,
    "inStock": true,
    "stockCount": 3,
    "images": [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Apple International Warranty",
      "Engineered with authentic Apple materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Apple. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 2,
    "name": "Samsung Galaxy S24 Ultra 5G AI 512GB Titanium Gray",
    "brand": "Samsung",
    "category": "Electronics",
    "subcategory": "Smartphones",
    "price": 1299.99,
    "mrp": 1830.97,
    "rating": 4.8,
    "reviewCount": 306,
    "inStock": true,
    "stockCount": 4,
    "images": [
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Samsung International Warranty",
      "Engineered with authentic Samsung materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Samsung. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 3,
    "name": "Google Pixel 9 Pro XL 128GB Obsidian",
    "brand": "Google",
    "category": "Electronics",
    "subcategory": "Smartphones",
    "price": 999,
    "mrp": 1560.94,
    "rating": 4.3,
    "reviewCount": 419,
    "inStock": true,
    "stockCount": 5,
    "images": [
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Google International Warranty",
      "Engineered with authentic Google materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Google. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 4,
    "name": "OnePlus 12 5G 16GB RAM 512GB Silky Black",
    "brand": "OnePlus",
    "category": "Electronics",
    "subcategory": "Smartphones",
    "price": 799.99,
    "mrp": 1403.49,
    "rating": 4.6,
    "reviewCount": 532,
    "inStock": true,
    "stockCount": 6,
    "images": [
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year OnePlus International Warranty",
      "Engineered with authentic OnePlus materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from OnePlus. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 5,
    "name": "Nothing Phone (2) 5G 256GB Dark Grey",
    "brand": "Nothing",
    "category": "Electronics",
    "subcategory": "Smartphones",
    "price": 549.99,
    "mrp": 687.49,
    "rating": 4.9,
    "reviewCount": 645,
    "inStock": true,
    "stockCount": 7,
    "images": [
      "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Nothing International Warranty",
      "Engineered with authentic Nothing materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Nothing. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 6,
    "name": "Xiaomi 14 Ultra 5G Leica Summilux Optics 512GB",
    "brand": "Xiaomi",
    "category": "Electronics",
    "subcategory": "Smartphones",
    "price": 1149,
    "mrp": 1573.97,
    "rating": 4.4,
    "reviewCount": 758,
    "inStock": true,
    "stockCount": 8,
    "images": [
      "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Xiaomi International Warranty",
      "Engineered with authentic Xiaomi materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Xiaomi. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 7,
    "name": "Asus ROG Phone 8 Pro 512GB Ultimate Gaming Mobile",
    "brand": "Asus",
    "category": "Electronics",
    "subcategory": "Smartphones",
    "price": 1099.99,
    "mrp": 1666.65,
    "rating": 4.7,
    "reviewCount": 871,
    "inStock": true,
    "stockCount": 9,
    "images": [
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Asus International Warranty",
      "Engineered with authentic Asus materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Asus. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 8,
    "name": "Motorola Razr 50 Ultra 512GB Spring Green Foldable",
    "brand": "Motorola",
    "category": "Electronics",
    "subcategory": "Smartphones",
    "price": 899.99,
    "mrp": 1525.41,
    "rating": 4.2,
    "reviewCount": 984,
    "inStock": true,
    "stockCount": 10,
    "images": [
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Motorola International Warranty",
      "Engineered with authentic Motorola materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Motorola. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 9,
    "name": "Vivo X100 Pro 5G ZEISS APO Telephoto 512GB",
    "brand": "Vivo",
    "category": "Electronics",
    "subcategory": "Smartphones",
    "price": 999,
    "mrp": 1218.29,
    "rating": 4.5,
    "reviewCount": 1097,
    "inStock": true,
    "stockCount": 11,
    "images": [
      "https://images.unsplash.com/photo-1567581935884-3349723552ca?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1567581935884-3349723552ca?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1567581935884-3349723552ca?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Vivo International Warranty",
      "Engineered with authentic Vivo materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Vivo. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 10,
    "name": "Sony Xperia 1 VI 5G 4K OLED Zeiss T* Optics",
    "brand": "Sony",
    "category": "Electronics",
    "subcategory": "Smartphones",
    "price": 1299,
    "mrp": 1732,
    "rating": 4.8,
    "reviewCount": 1210,
    "inStock": true,
    "stockCount": 12,
    "images": [
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Sony International Warranty",
      "Engineered with authentic Sony materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Sony. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 11,
    "name": "Apple iPhone 16 128GB Ultramarine Blue with Dynamic Island",
    "brand": "Apple",
    "category": "Electronics",
    "subcategory": "Smartphones",
    "price": 799,
    "mrp": 1175,
    "rating": 4.3,
    "reviewCount": 1323,
    "inStock": true,
    "stockCount": 13,
    "images": [
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Apple International Warranty",
      "Engineered with authentic Apple materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Apple. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 12,
    "name": "Samsung Galaxy Z Flip 6 5G 256GB Mint Foldable",
    "brand": "Samsung",
    "category": "Electronics",
    "subcategory": "Smartphones",
    "price": 949.99,
    "mrp": 1557.36,
    "rating": 4.6,
    "reviewCount": 1436,
    "inStock": true,
    "stockCount": 14,
    "images": [
      "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Samsung International Warranty",
      "Engineered with authentic Samsung materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Samsung. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 13,
    "name": "Apple iPad Pro 13-inch M4 Ultra Retina Tandem OLED",
    "brand": "Apple",
    "category": "Electronics",
    "subcategory": "Tablets",
    "price": 1299,
    "mrp": 1546.43,
    "rating": 4.9,
    "reviewCount": 1549,
    "inStock": true,
    "stockCount": 15,
    "images": [
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Apple International Warranty",
      "Engineered with authentic Apple materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Apple. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 14,
    "name": "Samsung Galaxy Tab S9 Ultra 14.6-inch Dynamic AMOLED",
    "brand": "Samsung",
    "category": "Electronics",
    "subcategory": "Tablets",
    "price": 999.99,
    "mrp": 1298.69,
    "rating": 4.4,
    "reviewCount": 1662,
    "inStock": true,
    "stockCount": 16,
    "images": [
      "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Samsung International Warranty",
      "Engineered with authentic Samsung materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Samsung. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 15,
    "name": "Apple iPad Air 11-inch M2 Chip 128GB Space Gray",
    "brand": "Apple",
    "category": "Electronics",
    "subcategory": "Tablets",
    "price": 569,
    "mrp": 812.86,
    "rating": 4.7,
    "reviewCount": 1775,
    "inStock": true,
    "stockCount": 2,
    "images": [
      "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Apple International Warranty",
      "Engineered with authentic Apple materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Apple. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 16,
    "name": "Amazon Kindle Paperwhite Signature Edition 32GB",
    "brand": "Amazon",
    "category": "Electronics",
    "subcategory": "Tablets",
    "price": 189.99,
    "mrp": 301.57,
    "rating": 4.2,
    "reviewCount": 1888,
    "inStock": true,
    "stockCount": 3,
    "images": [
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Amazon International Warranty",
      "Engineered with authentic Amazon materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Amazon. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 17,
    "name": "Kobo Clara Colour 6-inch E-Ink Kaleido 3 E-Reader",
    "brand": "Kobo",
    "category": "Electronics",
    "subcategory": "Tablets",
    "price": 149.99,
    "mrp": 267.84,
    "rating": 4.5,
    "reviewCount": 2001,
    "inStock": true,
    "stockCount": 4,
    "images": [
      "https://images.unsplash.com/photo-1527698266440-12104e498b76?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1527698266440-12104e498b76?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1527698266440-12104e498b76?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Kobo International Warranty",
      "Engineered with authentic Kobo materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Kobo. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 18,
    "name": "Apple iPad mini 6th Gen 64GB Starlight",
    "brand": "Apple",
    "category": "Electronics",
    "subcategory": "Tablets",
    "price": 449,
    "mrp": 568.35,
    "rating": 4.8,
    "reviewCount": 2114,
    "inStock": true,
    "stockCount": 5,
    "images": [
      "https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Apple International Warranty",
      "Engineered with authentic Apple materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Apple. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 19,
    "name": "OnePlus Pad 2 12.1-inch 3K 144Hz Snapdragon 8 Gen 3",
    "brand": "OnePlus",
    "category": "Electronics",
    "subcategory": "Tablets",
    "price": 499.99,
    "mrp": 694.43,
    "rating": 4.3,
    "reviewCount": 2227,
    "inStock": false,
    "stockCount": 0,
    "images": [
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year OnePlus International Warranty",
      "Engineered with authentic OnePlus materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from OnePlus. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 20,
    "name": "Microsoft Surface Pro 11 Copilot+ Snapdragon X Elite",
    "brand": "Microsoft",
    "category": "Electronics",
    "subcategory": "Tablets",
    "price": 1199.99,
    "mrp": 1846.14,
    "rating": 4.6,
    "reviewCount": 2340,
    "inStock": true,
    "stockCount": 7,
    "images": [
      "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Microsoft International Warranty",
      "Engineered with authentic Microsoft materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Microsoft. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 21,
    "name": "Apple MacBook Pro 16-inch M3 Max (36GB RAM, 1TB SSD)",
    "brand": "Apple",
    "category": "Electronics",
    "subcategory": "Laptops",
    "price": 3499,
    "mrp": 6032.76,
    "rating": 4.9,
    "reviewCount": 2453,
    "inStock": true,
    "stockCount": 8,
    "images": [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Apple International Warranty",
      "Engineered with authentic Apple materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Apple. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 22,
    "name": "Apple MacBook Air 15-inch M3 Chip 16GB RAM 512GB",
    "brand": "Apple",
    "category": "Electronics",
    "subcategory": "Laptops",
    "price": 1499,
    "mrp": 1850.62,
    "rating": 4.4,
    "reviewCount": 2566,
    "inStock": true,
    "stockCount": 9,
    "images": [
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Apple International Warranty",
      "Engineered with authentic Apple materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Apple. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 23,
    "name": "Dell XPS 16 Laptop Intel Core Ultra 9 32GB RTX 4070",
    "brand": "Dell",
    "category": "Electronics",
    "subcategory": "Laptops",
    "price": 2599.99,
    "mrp": 3513.5,
    "rating": 4.7,
    "reviewCount": 2679,
    "inStock": true,
    "stockCount": 10,
    "images": [
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Dell International Warranty",
      "Engineered with authentic Dell materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Dell. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 24,
    "name": "Lenovo ThinkPad X1 Carbon Gen 12 Ultrabook",
    "brand": "Lenovo",
    "category": "Electronics",
    "subcategory": "Laptops",
    "price": 1899,
    "mrp": 2834.33,
    "rating": 4.2,
    "reviewCount": 2792,
    "inStock": true,
    "stockCount": 11,
    "images": [
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Lenovo International Warranty",
      "Engineered with authentic Lenovo materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Lenovo. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 25,
    "name": "Asus ROG Zephyrus G16 OLED Gaming Laptop RTX 4080",
    "brand": "Asus",
    "category": "Electronics",
    "subcategory": "Laptops",
    "price": 2299.99,
    "mrp": 3833.32,
    "rating": 4.5,
    "reviewCount": 2905,
    "inStock": true,
    "stockCount": 12,
    "images": [
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Asus International Warranty",
      "Engineered with authentic Asus materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Asus. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 26,
    "name": "Apple Mac Studio M2 Max (32GB RAM, 512GB SSD)",
    "brand": "Apple",
    "category": "Electronics",
    "subcategory": "Laptops",
    "price": 1999,
    "mrp": 2408.43,
    "rating": 4.8,
    "reviewCount": 3018,
    "inStock": true,
    "stockCount": 13,
    "images": [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Apple International Warranty",
      "Engineered with authentic Apple materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Apple. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 27,
    "name": "Apple Mac Mini M2 Pro 16GB RAM 512GB Desktop",
    "brand": "Apple",
    "category": "Electronics",
    "subcategory": "Laptops",
    "price": 1249,
    "mrp": 1643.42,
    "rating": 4.3,
    "reviewCount": 3131,
    "inStock": true,
    "stockCount": 14,
    "images": [
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Apple International Warranty",
      "Engineered with authentic Apple materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Apple. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 28,
    "name": "HP Spectre x360 2-in-1 14-inch OLED Touchscreen",
    "brand": "HP",
    "category": "Electronics",
    "subcategory": "Laptops",
    "price": 1449.99,
    "mrp": 2101.43,
    "rating": 4.6,
    "reviewCount": 3244,
    "inStock": true,
    "stockCount": 15,
    "images": [
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year HP International Warranty",
      "Engineered with authentic HP materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from HP. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 29,
    "name": "Razer Blade 16 Dual-Mode Mini-LED Gaming Laptop",
    "brand": "Razer",
    "category": "Electronics",
    "subcategory": "Laptops",
    "price": 2899.99,
    "mrp": 4677.4,
    "rating": 4.9,
    "reviewCount": 3357,
    "inStock": true,
    "stockCount": 16,
    "images": [
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Razer International Warranty",
      "Engineered with authentic Razer materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Razer. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 30,
    "name": "Framework Laptop 16 Fully Modular & Upgradable",
    "brand": "Framework",
    "category": "Electronics",
    "subcategory": "Laptops",
    "price": 1599,
    "mrp": 1881.18,
    "rating": 4.4,
    "reviewCount": 3470,
    "inStock": true,
    "stockCount": 2,
    "images": [
      "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Framework International Warranty",
      "Engineered with authentic Framework materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Framework. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 31,
    "name": "Alienware x16 R2 Ultra-Thin Gaming Laptop",
    "brand": "Alienware",
    "category": "Electronics",
    "subcategory": "Laptops",
    "price": 2199.99,
    "mrp": 2820.5,
    "rating": 4.7,
    "reviewCount": 3583,
    "inStock": true,
    "stockCount": 3,
    "images": [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Alienware International Warranty",
      "Engineered with authentic Alienware materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Alienware. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 32,
    "name": "Microsoft Surface Laptop 7 Snapdragon X Elite Copilot+",
    "brand": "Microsoft",
    "category": "Electronics",
    "subcategory": "Laptops",
    "price": 1199.99,
    "mrp": 1690.13,
    "rating": 4.2,
    "reviewCount": 3696,
    "inStock": true,
    "stockCount": 4,
    "images": [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Microsoft International Warranty",
      "Engineered with authentic Microsoft materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Microsoft. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 33,
    "name": "LG C3 Series 65-inch 4K OLED Smart TV with α9 AI",
    "brand": "LG",
    "category": "Electronics",
    "subcategory": "TVs",
    "price": 1496.99,
    "mrp": 2339.05,
    "rating": 4.5,
    "reviewCount": 3809,
    "inStock": true,
    "stockCount": 5,
    "images": [
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year LG International Warranty",
      "Engineered with authentic LG materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from LG. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 34,
    "name": "Samsung 55-inch The Frame QLED 4K Art Mode TV",
    "brand": "Samsung",
    "category": "Electronics",
    "subcategory": "TVs",
    "price": 1397.99,
    "mrp": 2452.61,
    "rating": 4.8,
    "reviewCount": 3922,
    "inStock": true,
    "stockCount": 6,
    "images": [
      "https://images.unsplash.com/photo-1552975084-6e027cd345c2?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1552975084-6e027cd345c2?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1552975084-6e027cd345c2?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Samsung International Warranty",
      "Engineered with authentic Samsung materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Samsung. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 35,
    "name": "Sony BRAVIA XR A80L 65-inch 4K HDR OLED Google TV",
    "brand": "Sony",
    "category": "Electronics",
    "subcategory": "TVs",
    "price": 1698,
    "mrp": 2122.5,
    "rating": 4.3,
    "reviewCount": 135,
    "inStock": true,
    "stockCount": 7,
    "images": [
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Sony International Warranty",
      "Engineered with authentic Sony materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Sony. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 36,
    "name": "Samsung 49-inch Odyssey OLED G9 Curved Gaming Monitor 240Hz",
    "brand": "Samsung",
    "category": "Electronics",
    "subcategory": "Monitors",
    "price": 1199.99,
    "mrp": 1643.82,
    "rating": 4.6,
    "reviewCount": 248,
    "inStock": true,
    "stockCount": 8,
    "images": [
      "https://images.unsplash.com/photo-1585792180666-f7347c490ee2?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1585792180666-f7347c490ee2?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1585792180666-f7347c490ee2?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Samsung International Warranty",
      "Engineered with authentic Samsung materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Samsung. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 37,
    "name": "Dell UltraSharp 32-inch 4K IPS Black USB-C Hub Monitor",
    "brand": "Dell",
    "category": "Electronics",
    "subcategory": "Monitors",
    "price": 849.99,
    "mrp": 1287.86,
    "rating": 4.9,
    "reviewCount": 361,
    "inStock": true,
    "stockCount": 9,
    "images": [
      "https://images.unsplash.com/photo-1545665277-5937489579f2?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1545665277-5937489579f2?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1545665277-5937489579f2?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Dell International Warranty",
      "Engineered with authentic Dell materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Dell. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 38,
    "name": "Asus ROG Swift 32-inch 4K 240Hz OLED Gaming Monitor",
    "brand": "Asus",
    "category": "Electronics",
    "subcategory": "Monitors",
    "price": 1299,
    "mrp": 2201.69,
    "rating": 4.4,
    "reviewCount": 474,
    "inStock": false,
    "stockCount": 0,
    "images": [
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Asus International Warranty",
      "Engineered with authentic Asus materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Asus. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 39,
    "name": "Samsung The Freestyle 2nd Gen Portable Projector",
    "brand": "Samsung",
    "category": "Electronics",
    "subcategory": "TVs",
    "price": 597.99,
    "mrp": 729.26,
    "rating": 4.7,
    "reviewCount": 587,
    "inStock": true,
    "stockCount": 11,
    "images": [
      "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Samsung International Warranty",
      "Engineered with authentic Samsung materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Samsung. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 40,
    "name": "XGIMI Horizon Ultra 4K Dolby Vision Home Projector",
    "brand": "XGIMI",
    "category": "Electronics",
    "subcategory": "TVs",
    "price": 1599,
    "mrp": 2132,
    "rating": 4.2,
    "reviewCount": 700,
    "inStock": true,
    "stockCount": 12,
    "images": [
      "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year XGIMI International Warranty",
      "Engineered with authentic XGIMI materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from XGIMI. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 41,
    "name": "LG DualUp 28-inch 16:18 SDQHD Ergonomic Monitor",
    "brand": "LG",
    "category": "Electronics",
    "subcategory": "Monitors",
    "price": 599.99,
    "mrp": 882.34,
    "rating": 4.5,
    "reviewCount": 813,
    "inStock": true,
    "stockCount": 13,
    "images": [
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year LG International Warranty",
      "Engineered with authentic LG materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from LG. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 42,
    "name": "BenQ PD3220U 32-inch 4K Designer Color-Accurate Monitor",
    "brand": "BenQ",
    "category": "Electronics",
    "subcategory": "Monitors",
    "price": 1099.99,
    "mrp": 1803.26,
    "rating": 4.8,
    "reviewCount": 926,
    "inStock": true,
    "stockCount": 14,
    "images": [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year BenQ International Warranty",
      "Engineered with authentic BenQ materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from BenQ. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 43,
    "name": "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
    "brand": "Sony",
    "category": "Electronics",
    "subcategory": "Headphones",
    "price": 329.99,
    "mrp": 392.85,
    "rating": 4.3,
    "reviewCount": 1039,
    "inStock": true,
    "stockCount": 15,
    "images": [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Sony International Warranty",
      "Engineered with authentic Sony materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Sony. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 44,
    "name": "Bose QuietComfort Ultra Wireless Headphones with Spatial Audio",
    "brand": "Bose",
    "category": "Electronics",
    "subcategory": "Headphones",
    "price": 379,
    "mrp": 492.21,
    "rating": 4.6,
    "reviewCount": 1152,
    "inStock": true,
    "stockCount": 16,
    "images": [
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Bose International Warranty",
      "Engineered with authentic Bose materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Bose. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 45,
    "name": "Apple AirPods Max Over-Ear Headphones Space Gray",
    "brand": "Apple",
    "category": "Electronics",
    "subcategory": "Headphones",
    "price": 499,
    "mrp": 712.86,
    "rating": 4.9,
    "reviewCount": 1265,
    "inStock": true,
    "stockCount": 2,
    "images": [
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Apple International Warranty",
      "Engineered with authentic Apple materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Apple. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 46,
    "name": "Sennheiser Momentum 4 Wireless (60-Hour Battery Life)",
    "brand": "Sennheiser",
    "category": "Electronics",
    "subcategory": "Headphones",
    "price": 279.99,
    "mrp": 444.43,
    "rating": 4.4,
    "reviewCount": 1378,
    "inStock": true,
    "stockCount": 3,
    "images": [
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Sennheiser International Warranty",
      "Engineered with authentic Sennheiser materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Sennheiser. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 47,
    "name": "Bowers & Wilkins Px8 Luxury Wireless ANC Headphones",
    "brand": "Bowers & Wilkins",
    "category": "Electronics",
    "subcategory": "Headphones",
    "price": 599,
    "mrp": 1069.64,
    "rating": 4.7,
    "reviewCount": 1491,
    "inStock": true,
    "stockCount": 4,
    "images": [
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Bowers & Wilkins International Warranty",
      "Engineered with authentic Bowers & Wilkins materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Bowers & Wilkins. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 48,
    "name": "Apple AirPods Pro 2 USB-C with Adaptive Audio & ANC",
    "brand": "Apple",
    "category": "Electronics",
    "subcategory": "Earbuds",
    "price": 199.99,
    "mrp": 253.15,
    "rating": 4.2,
    "reviewCount": 1604,
    "inStock": true,
    "stockCount": 5,
    "images": [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Apple International Warranty",
      "Engineered with authentic Apple materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Apple. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 49,
    "name": "Sony WF-1000XM5 True Wireless Noise Cancelling Earbuds",
    "brand": "Sony",
    "category": "Electronics",
    "subcategory": "Earbuds",
    "price": 249.99,
    "mrp": 347.21,
    "rating": 4.5,
    "reviewCount": 1717,
    "inStock": true,
    "stockCount": 6,
    "images": [
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Sony International Warranty",
      "Engineered with authentic Sony materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Sony. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 50,
    "name": "Bose QuietComfort Ultra Noise Cancelling Earbuds",
    "brand": "Bose",
    "category": "Electronics",
    "subcategory": "Earbuds",
    "price": 249,
    "mrp": 383.08,
    "rating": 4.8,
    "reviewCount": 1830,
    "inStock": true,
    "stockCount": 7,
    "images": [
      "https://images.unsplash.com/photo-1598331668826-20cecc596b8b?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1598331668826-20cecc596b8b?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1598331668826-20cecc596b8b?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Bose International Warranty",
      "Engineered with authentic Bose materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Bose. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 51,
    "name": "Beats Studio Pro Wireless Over-Ear Headphones Lossless",
    "brand": "Beats",
    "category": "Electronics",
    "subcategory": "Headphones",
    "price": 249.99,
    "mrp": 431.02,
    "rating": 4.3,
    "reviewCount": 1943,
    "inStock": true,
    "stockCount": 8,
    "images": [
      "https://images.unsplash.com/photo-1599669454699-248893623440?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1599669454699-248893623440?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1599669454699-248893623440?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Beats International Warranty",
      "Engineered with authentic Beats materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Beats. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 52,
    "name": "Marshall Major IV Wireless On-Ear Headphones (80h Battery)",
    "brand": "Marshall",
    "category": "Electronics",
    "subcategory": "Headphones",
    "price": 129.99,
    "mrp": 160.48,
    "rating": 4.6,
    "reviewCount": 2056,
    "inStock": true,
    "stockCount": 9,
    "images": [
      "https://images.unsplash.com/photo-1578319439574-30ec13d7bb2f?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1578319439574-30ec13d7bb2f?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1578319439574-30ec13d7bb2f?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Marshall International Warranty",
      "Engineered with authentic Marshall materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Marshall. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 53,
    "name": "Audio-Technica ATH-M50x Professional Studio Monitor",
    "brand": "Audio-Technica",
    "category": "Electronics",
    "subcategory": "Headphones",
    "price": 149,
    "mrp": 201.35,
    "rating": 4.9,
    "reviewCount": 2169,
    "inStock": true,
    "stockCount": 10,
    "images": [
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Audio-Technica International Warranty",
      "Engineered with authentic Audio-Technica materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Audio-Technica. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 54,
    "name": "Sennheiser HD 660S2 Open-Back Audiophile Headphones",
    "brand": "Sennheiser",
    "category": "Electronics",
    "subcategory": "Headphones",
    "price": 499.95,
    "mrp": 746.19,
    "rating": 4.4,
    "reviewCount": 2282,
    "inStock": true,
    "stockCount": 11,
    "images": [
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Sennheiser International Warranty",
      "Engineered with authentic Sennheiser materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Sennheiser. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 55,
    "name": "Shure AONIC 50 Gen 2 Wireless Studio Headphones",
    "brand": "Shure",
    "category": "Electronics",
    "subcategory": "Headphones",
    "price": 349,
    "mrp": 581.67,
    "rating": 4.7,
    "reviewCount": 2395,
    "inStock": true,
    "stockCount": 12,
    "images": [
      "https://images.unsplash.com/photo-1543512214-318c7553f230?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1543512214-318c7553f230?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1543512214-318c7553f230?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Shure International Warranty",
      "Engineered with authentic Shure materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Shure. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 56,
    "name": "Nothing Ear (2024) Hi-Res Transparent Earbuds",
    "brand": "Nothing",
    "category": "Electronics",
    "subcategory": "Earbuds",
    "price": 149,
    "mrp": 179.52,
    "rating": 4.2,
    "reviewCount": 2508,
    "inStock": true,
    "stockCount": 13,
    "images": [
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Nothing International Warranty",
      "Engineered with authentic Nothing materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Nothing. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 57,
    "name": "Marshall Stanmore III Bluetooth Home Speaker Vintage Black",
    "brand": "Marshall",
    "category": "Electronics",
    "subcategory": "Speakers",
    "price": 349.99,
    "mrp": 460.51,
    "rating": 4.5,
    "reviewCount": 2621,
    "inStock": false,
    "stockCount": 0,
    "images": [
      "https://images.unsplash.com/photo-1558089687-f282ff1b2b97?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1558089687-f282ff1b2b97?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1558089687-f282ff1b2b97?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Marshall International Warranty",
      "Engineered with authentic Marshall materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Marshall. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 58,
    "name": "Sonos Era 300 Spatial Audio Smart Speaker with Dolby Atmos",
    "brand": "Sonos",
    "category": "Electronics",
    "subcategory": "Speakers",
    "price": 449,
    "mrp": 650.72,
    "rating": 4.8,
    "reviewCount": 2734,
    "inStock": true,
    "stockCount": 15,
    "images": [
      "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Sonos International Warranty",
      "Engineered with authentic Sonos materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Sonos. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 59,
    "name": "JBL Flip 6 Portable Waterproof Bluetooth Speaker",
    "brand": "JBL",
    "category": "Electronics",
    "subcategory": "Speakers",
    "price": 109.95,
    "mrp": 177.34,
    "rating": 4.3,
    "reviewCount": 2847,
    "inStock": true,
    "stockCount": 16,
    "images": [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year JBL International Warranty",
      "Engineered with authentic JBL materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from JBL. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 60,
    "name": "JBL PartyBox Stage 320 Portable Party Speaker with Wheels",
    "brand": "JBL",
    "category": "Electronics",
    "subcategory": "Speakers",
    "price": 599.95,
    "mrp": 705.82,
    "rating": 4.6,
    "reviewCount": 2960,
    "inStock": true,
    "stockCount": 2,
    "images": [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year JBL International Warranty",
      "Engineered with authentic JBL materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from JBL. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 61,
    "name": "Bose Smart Soundbar 900 with Dolby Atmos & Voice",
    "brand": "Bose",
    "category": "Electronics",
    "subcategory": "Speakers",
    "price": 699,
    "mrp": 896.15,
    "rating": 4.9,
    "reviewCount": 3073,
    "inStock": true,
    "stockCount": 3,
    "images": [
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Bose International Warranty",
      "Engineered with authentic Bose materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Bose. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 62,
    "name": "Sonos Arc Premium Smart Soundbar with Dolby Atmos",
    "brand": "Sonos",
    "category": "Electronics",
    "subcategory": "Speakers",
    "price": 799,
    "mrp": 1125.35,
    "rating": 4.4,
    "reviewCount": 3186,
    "inStock": true,
    "stockCount": 4,
    "images": [
      "https://images.unsplash.com/photo-1529359744902-7239972b62b1?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1529359744902-7239972b62b1?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1529359744902-7239972b62b1?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Sonos International Warranty",
      "Engineered with authentic Sonos materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Sonos. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 63,
    "name": "Harman Kardon Aura Studio 4 Iconic Dome Bluetooth Speaker",
    "brand": "Harman Kardon",
    "category": "Electronics",
    "subcategory": "Speakers",
    "price": 299.99,
    "mrp": 468.73,
    "rating": 4.7,
    "reviewCount": 3299,
    "inStock": true,
    "stockCount": 5,
    "images": [
      "https://images.unsplash.com/photo-1507646227500-4d389b0012be?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1507646227500-4d389b0012be?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1507646227500-4d389b0012be?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Harman Kardon International Warranty",
      "Engineered with authentic Harman Kardon materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Harman Kardon. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 64,
    "name": "Ultimate Ears MEGABOOM 3 360-Degree Rugged Speaker",
    "brand": "Ultimate Ears",
    "category": "Electronics",
    "subcategory": "Speakers",
    "price": 169.99,
    "mrp": 298.23,
    "rating": 4.2,
    "reviewCount": 3412,
    "inStock": true,
    "stockCount": 6,
    "images": [
      "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Ultimate Ears International Warranty",
      "Engineered with authentic Ultimate Ears materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Ultimate Ears. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 65,
    "name": "Apple HomePod 2nd Generation Midnight Smart Speaker",
    "brand": "Apple",
    "category": "Electronics",
    "subcategory": "Speakers",
    "price": 299,
    "mrp": 373.75,
    "rating": 4.5,
    "reviewCount": 3525,
    "inStock": true,
    "stockCount": 7,
    "images": [
      "https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Apple International Warranty",
      "Engineered with authentic Apple materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Apple. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 66,
    "name": "Marshall Emberton II Compact Portable Bluetooth Speaker",
    "brand": "Marshall",
    "category": "Electronics",
    "subcategory": "Speakers",
    "price": 169.99,
    "mrp": 232.86,
    "rating": 4.8,
    "reviewCount": 3638,
    "inStock": true,
    "stockCount": 8,
    "images": [
      "https://images.unsplash.com/photo-1558089687-f282ff1b2b97?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1558089687-f282ff1b2b97?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1558089687-f282ff1b2b97?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Marshall International Warranty",
      "Engineered with authentic Marshall materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Marshall. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 67,
    "name": "Sony Alpha A7 IV Full-Frame Mirrorless Camera Body",
    "brand": "Sony",
    "category": "Electronics",
    "subcategory": "Cameras",
    "price": 2498,
    "mrp": 3784.85,
    "rating": 4.3,
    "reviewCount": 3751,
    "inStock": true,
    "stockCount": 9,
    "images": [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Sony International Warranty",
      "Engineered with authentic Sony materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Sony. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 68,
    "name": "Canon EOS R6 Mark II 24.2MP 4K60p Full-Frame Camera",
    "brand": "Canon",
    "category": "Electronics",
    "subcategory": "Cameras",
    "price": 2299,
    "mrp": 3896.61,
    "rating": 4.6,
    "reviewCount": 3864,
    "inStock": true,
    "stockCount": 10,
    "images": [
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Canon International Warranty",
      "Engineered with authentic Canon materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Canon. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 69,
    "name": "Fujifilm X-T5 40.2MP Mirrorless Camera Classic Black",
    "brand": "Fujifilm",
    "category": "Electronics",
    "subcategory": "Cameras",
    "price": 1699,
    "mrp": 2071.95,
    "rating": 4.9,
    "reviewCount": 3977,
    "inStock": true,
    "stockCount": 11,
    "images": [
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Fujifilm International Warranty",
      "Engineered with authentic Fujifilm materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Fujifilm. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 70,
    "name": "DJI Mini 4 Pro Drone with RC 2 Screen Controller",
    "brand": "DJI",
    "category": "Electronics",
    "subcategory": "Cameras",
    "price": 959,
    "mrp": 1278.67,
    "rating": 4.4,
    "reviewCount": 190,
    "inStock": true,
    "stockCount": 12,
    "images": [
      "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year DJI International Warranty",
      "Engineered with authentic DJI materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from DJI. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 71,
    "name": "GoPro HERO12 Black Action Camera with HyperSmooth 6.0",
    "brand": "GoPro",
    "category": "Electronics",
    "subcategory": "Cameras",
    "price": 349.99,
    "mrp": 514.69,
    "rating": 4.7,
    "reviewCount": 303,
    "inStock": true,
    "stockCount": 13,
    "images": [
      "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year GoPro International Warranty",
      "Engineered with authentic GoPro materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from GoPro. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 72,
    "name": "DJI Osmo Pocket 3 Gimbal Camera with 1-inch CMOS Sensor",
    "brand": "DJI",
    "category": "Electronics",
    "subcategory": "Cameras",
    "price": 519,
    "mrp": 850.82,
    "rating": 4.2,
    "reviewCount": 416,
    "inStock": true,
    "stockCount": 14,
    "images": [
      "https://images.unsplash.com/photo-1495707902640-850443991915?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1495707902640-850443991915?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1495707902640-850443991915?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year DJI International Warranty",
      "Engineered with authentic DJI materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from DJI. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 73,
    "name": "Insta360 X4 8K 360-Degree Waterproof Action Camera",
    "brand": "Insta360",
    "category": "Electronics",
    "subcategory": "Cameras",
    "price": 499.99,
    "mrp": 595.23,
    "rating": 4.5,
    "reviewCount": 529,
    "inStock": true,
    "stockCount": 15,
    "images": [
      "https://images.unsplash.com/photo-1472393365320-adc775949704?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1472393365320-adc775949704?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1472393365320-adc775949704?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Insta360 International Warranty",
      "Engineered with authentic Insta360 materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Insta360. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 74,
    "name": "Nikon Z8 Flagship Hybrid Full-Frame Mirrorless Camera",
    "brand": "Nikon",
    "category": "Electronics",
    "subcategory": "Cameras",
    "price": 3696.95,
    "mrp": 4801.23,
    "rating": 4.8,
    "reviewCount": 642,
    "inStock": true,
    "stockCount": 16,
    "images": [
      "https://images.unsplash.com/photo-1564466800418-491d556c3145?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1564466800418-491d556c3145?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1564466800418-491d556c3145?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Nikon International Warranty",
      "Engineered with authentic Nikon materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Nikon. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 75,
    "name": "Blackmagic Design Cinema Camera 6K Full Frame L-Mount",
    "brand": "Blackmagic",
    "category": "Electronics",
    "subcategory": "Cameras",
    "price": 2595,
    "mrp": 3707.14,
    "rating": 4.3,
    "reviewCount": 755,
    "inStock": true,
    "stockCount": 2,
    "images": [
      "https://images.unsplash.com/photo-1533158307587-828f0a76ef96?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1533158307587-828f0a76ef96?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1533158307587-828f0a76ef96?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Blackmagic International Warranty",
      "Engineered with authentic Blackmagic materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Blackmagic. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 76,
    "name": "Fujifilm Instax Mini 12 Instant Film Camera Pastel Blue",
    "brand": "Fujifilm",
    "category": "Electronics",
    "subcategory": "Cameras",
    "price": 79.95,
    "mrp": 126.9,
    "rating": 4.6,
    "reviewCount": 868,
    "inStock": false,
    "stockCount": 0,
    "images": [
      "https://images.unsplash.com/photo-1587840171670-8b852847d73f?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1587840171670-8b852847d73f?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1587840171670-8b852847d73f?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Fujifilm International Warranty",
      "Engineered with authentic Fujifilm materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Fujifilm. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 77,
    "name": "DJI Mavic 3 Pro Cine Drone with Triple Hasselblad Camera",
    "brand": "DJI",
    "category": "Electronics",
    "subcategory": "Cameras",
    "price": 4799,
    "mrp": 8569.64,
    "rating": 4.9,
    "reviewCount": 981,
    "inStock": true,
    "stockCount": 4,
    "images": [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year DJI International Warranty",
      "Engineered with authentic DJI materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from DJI. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 78,
    "name": "Sony ZV-E10 II Mirrorless Vlogging Camera with 16-50mm Lens",
    "brand": "Sony",
    "category": "Electronics",
    "subcategory": "Cameras",
    "price": 998,
    "mrp": 1263.29,
    "rating": 4.4,
    "reviewCount": 1094,
    "inStock": true,
    "stockCount": 5,
    "images": [
      "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Sony International Warranty",
      "Engineered with authentic Sony materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Sony. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 79,
    "name": "Sony PlayStation 5 Slim Console 1TB SSD Disc Edition",
    "brand": "Sony",
    "category": "Electronics",
    "subcategory": "Gaming",
    "price": 499.99,
    "mrp": 694.43,
    "rating": 4.7,
    "reviewCount": 1207,
    "inStock": true,
    "stockCount": 6,
    "images": [
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Sony International Warranty",
      "Engineered with authentic Sony materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Sony. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 80,
    "name": "Microsoft Xbox Series X 1TB Gaming Console Carbon Black",
    "brand": "Microsoft",
    "category": "Electronics",
    "subcategory": "Gaming",
    "price": 479.99,
    "mrp": 738.45,
    "rating": 4.2,
    "reviewCount": 1320,
    "inStock": true,
    "stockCount": 7,
    "images": [
      "https://images.unsplash.com/photo-1612287232258-29471131c26b?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1612287232258-29471131c26b?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1612287232258-29471131c26b?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Microsoft International Warranty",
      "Engineered with authentic Microsoft materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Microsoft. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 81,
    "name": "Valve Steam Deck OLED 512GB Handheld Gaming Console",
    "brand": "Valve",
    "category": "Electronics",
    "subcategory": "Gaming",
    "price": 549,
    "mrp": 946.55,
    "rating": 4.5,
    "reviewCount": 1433,
    "inStock": true,
    "stockCount": 8,
    "images": [
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Valve International Warranty",
      "Engineered with authentic Valve materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Valve. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 82,
    "name": "Nintendo Switch OLED Model with White Joy-Con Controllers",
    "brand": "Nintendo",
    "category": "Electronics",
    "subcategory": "Gaming",
    "price": 349.99,
    "mrp": 432.09,
    "rating": 4.8,
    "reviewCount": 1546,
    "inStock": true,
    "stockCount": 9,
    "images": [
      "https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1622979135225-d2ba269bc1df?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Nintendo International Warranty",
      "Engineered with authentic Nintendo materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Nintendo. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 83,
    "name": "Meta Quest 3 128GB Breakthrough Mixed Reality Headset",
    "brand": "Meta",
    "category": "Electronics",
    "subcategory": "Gaming",
    "price": 499.99,
    "mrp": 675.66,
    "rating": 4.3,
    "reviewCount": 1659,
    "inStock": true,
    "stockCount": 10,
    "images": [
      "https://images.unsplash.com/photo-1592840496537-26d665b0f5b5?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1592840496537-26d665b0f5b5?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1592840496537-26d665b0f5b5?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Meta International Warranty",
      "Engineered with authentic Meta materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Meta. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 84,
    "name": "Asus ROG Ally Z1 Extreme Handheld PC 512GB White",
    "brand": "Asus",
    "category": "Electronics",
    "subcategory": "Gaming",
    "price": 599.99,
    "mrp": 895.51,
    "rating": 4.6,
    "reviewCount": 1772,
    "inStock": true,
    "stockCount": 11,
    "images": [
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Asus International Warranty",
      "Engineered with authentic Asus materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Asus. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 85,
    "name": "Sony DualSense Edge Wireless Pro Controller for PS5",
    "brand": "Sony",
    "category": "Electronics",
    "subcategory": "Gaming",
    "price": 199.99,
    "mrp": 333.32,
    "rating": 4.9,
    "reviewCount": 1885,
    "inStock": true,
    "stockCount": 12,
    "images": [
      "https://images.unsplash.com/photo-1586182987320-4f376154568c?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586182987320-4f376154568c?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1586182987320-4f376154568c?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Sony International Warranty",
      "Engineered with authentic Sony materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Sony. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 86,
    "name": "Logitech G923 TrueForce Racing Wheel and Floor Pedals",
    "brand": "Logitech",
    "category": "Electronics",
    "subcategory": "Gaming",
    "price": 349.99,
    "mrp": 421.67,
    "rating": 4.4,
    "reviewCount": 1998,
    "inStock": true,
    "stockCount": 13,
    "images": [
      "https://images.unsplash.com/photo-1618193139073-4ea317c80088?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1618193139073-4ea317c80088?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1618193139073-4ea317c80088?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Logitech International Warranty",
      "Engineered with authentic Logitech materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Logitech. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 87,
    "name": "SteelSeries Arctis Nova Pro Wireless Multi-System Headset",
    "brand": "SteelSeries",
    "category": "Electronics",
    "subcategory": "Gaming",
    "price": 349.99,
    "mrp": 460.51,
    "rating": 4.7,
    "reviewCount": 2111,
    "inStock": true,
    "stockCount": 14,
    "images": [
      "https://images.unsplash.com/photo-1629429408209-1f6a8e452a8b?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1629429408209-1f6a8e452a8b?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1629429408209-1f6a8e452a8b?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year SteelSeries International Warranty",
      "Engineered with authentic SteelSeries materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from SteelSeries. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 88,
    "name": "Elgato Stream Deck MK.2 15 Customizable LCD Keys",
    "brand": "Elgato",
    "category": "Electronics",
    "subcategory": "Gaming",
    "price": 149.99,
    "mrp": 217.38,
    "rating": 4.2,
    "reviewCount": 2224,
    "inStock": true,
    "stockCount": 15,
    "images": [
      "https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Elgato International Warranty",
      "Engineered with authentic Elgato materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Elgato. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 89,
    "name": "Logitech MX Master 3S Wireless Performance Mouse Dark Gray",
    "brand": "Logitech",
    "category": "Electronics",
    "subcategory": "Peripherals",
    "price": 99.99,
    "mrp": 161.27,
    "rating": 4.5,
    "reviewCount": 2337,
    "inStock": true,
    "stockCount": 16,
    "images": [
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Logitech International Warranty",
      "Engineered with authentic Logitech materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Logitech. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 90,
    "name": "Keychron Q1 Pro Custom Wireless Mechanical Keyboard CNC",
    "brand": "Keychron",
    "category": "Electronics",
    "subcategory": "Peripherals",
    "price": 199.99,
    "mrp": 235.28,
    "rating": 4.8,
    "reviewCount": 2450,
    "inStock": true,
    "stockCount": 2,
    "images": [
      "https://images.unsplash.com/photo-1587829741304-a669a84d4b11?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1587829741304-a669a84d4b11?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1587829741304-a669a84d4b11?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Keychron International Warranty",
      "Engineered with authentic Keychron materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Keychron. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 91,
    "name": "Apple Magic Trackpad Wireless Multi-Touch Surface Black",
    "brand": "Apple",
    "category": "Electronics",
    "subcategory": "Peripherals",
    "price": 149,
    "mrp": 191.03,
    "rating": 4.3,
    "reviewCount": 2563,
    "inStock": true,
    "stockCount": 3,
    "images": [
      "https://images.unsplash.com/photo-1595225476474-87563907a212?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1595225476474-87563907a212?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1595225476474-87563907a212?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Apple International Warranty",
      "Engineered with authentic Apple materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Apple. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 92,
    "name": "Shure SM7B Cardioid Studio Vocal Dynamic Microphone",
    "brand": "Shure",
    "category": "Electronics",
    "subcategory": "Peripherals",
    "price": 399,
    "mrp": 561.97,
    "rating": 4.6,
    "reviewCount": 2676,
    "inStock": true,
    "stockCount": 4,
    "images": [
      "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Shure International Warranty",
      "Engineered with authentic Shure materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Shure. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 93,
    "name": "Blue Yeti USB Studio Microphone for Podcasting Blackout",
    "brand": "Logitech",
    "category": "Electronics",
    "subcategory": "Peripherals",
    "price": 99.99,
    "mrp": 156.23,
    "rating": 4.9,
    "reviewCount": 2789,
    "inStock": true,
    "stockCount": 5,
    "images": [
      "https://images.unsplash.com/photo-1541140532154-b024d705b909?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1541140532154-b024d705b909?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1541140532154-b024d705b909?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Logitech International Warranty",
      "Engineered with authentic Logitech materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Logitech. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 94,
    "name": "Samsung T7 Shield 2TB Portable SSD Rugged USB 3.2",
    "brand": "Samsung",
    "category": "Electronics",
    "subcategory": "Peripherals",
    "price": 189.99,
    "mrp": 333.32,
    "rating": 4.4,
    "reviewCount": 2902,
    "inStock": true,
    "stockCount": 6,
    "images": [
      "https://images.unsplash.com/photo-1544652478-6653e09f18a2?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544652478-6653e09f18a2?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1544652478-6653e09f18a2?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Samsung International Warranty",
      "Engineered with authentic Samsung materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Samsung. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 95,
    "name": "SanDisk Extreme PRO 2TB Portable NVMe External SSD",
    "brand": "SanDisk",
    "category": "Electronics",
    "subcategory": "Peripherals",
    "price": 219.99,
    "mrp": 274.99,
    "rating": 4.7,
    "reviewCount": 3015,
    "inStock": false,
    "stockCount": 0,
    "images": [
      "https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year SanDisk International Warranty",
      "Engineered with authentic SanDisk materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from SanDisk. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 96,
    "name": "Logitech Brio 4K Ultra HD Pro Webcam with HDR & Windows Hello",
    "brand": "Logitech",
    "category": "Electronics",
    "subcategory": "Peripherals",
    "price": 149.99,
    "mrp": 205.47,
    "rating": 4.2,
    "reviewCount": 3128,
    "inStock": true,
    "stockCount": 8,
    "images": [
      "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Logitech International Warranty",
      "Engineered with authentic Logitech materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Logitech. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 97,
    "name": "Anker 737 Power Bank (PowerCore 24K) 140W Two-Way Fast Charge",
    "brand": "Anker",
    "category": "Electronics",
    "subcategory": "Peripherals",
    "price": 109.99,
    "mrp": 166.65,
    "rating": 4.5,
    "reviewCount": 3241,
    "inStock": true,
    "stockCount": 9,
    "images": [
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Anker International Warranty",
      "Engineered with authentic Anker materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Anker. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 98,
    "name": "Belkin BoostCharge Pro 3-in-1 Wireless MagSafe Charging Stand",
    "brand": "Belkin",
    "category": "Electronics",
    "subcategory": "Peripherals",
    "price": 139.99,
    "mrp": 237.27,
    "rating": 4.8,
    "reviewCount": 3354,
    "inStock": true,
    "stockCount": 10,
    "images": [
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Belkin International Warranty",
      "Engineered with authentic Belkin materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Belkin. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 99,
    "name": "BenQ ScreenBar Halo Wireless Monitor Light Bar with Backlight",
    "brand": "BenQ",
    "category": "Electronics",
    "subcategory": "Peripherals",
    "price": 179,
    "mrp": 218.29,
    "rating": 4.3,
    "reviewCount": 3467,
    "inStock": true,
    "stockCount": 11,
    "images": [
      "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year BenQ International Warranty",
      "Engineered with authentic BenQ materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from BenQ. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 100,
    "name": "CalDigit TS4 Thunderbolt 4 18-Port Station 98W Charging",
    "brand": "CalDigit",
    "category": "Electronics",
    "subcategory": "Peripherals",
    "price": 399.95,
    "mrp": 533.27,
    "rating": 4.6,
    "reviewCount": 3580,
    "inStock": true,
    "stockCount": 12,
    "images": [
      "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year CalDigit International Warranty",
      "Engineered with authentic CalDigit materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from CalDigit. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 101,
    "name": "Roborock S8 Pro Ultra Robot Vacuum and Sonic Mop",
    "brand": "Roborock",
    "category": "Electronics",
    "subcategory": "Appliances",
    "price": 1199.99,
    "mrp": 1764.69,
    "rating": 4.9,
    "reviewCount": 3693,
    "inStock": true,
    "stockCount": 13,
    "images": [
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Roborock International Warranty",
      "Engineered with authentic Roborock materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Roborock. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 102,
    "name": "Dyson Purifier Hot+Cool HP07 Air Purifier Heater & Fan",
    "brand": "Dyson",
    "category": "Electronics",
    "subcategory": "Appliances",
    "price": 649.99,
    "mrp": 1065.56,
    "rating": 4.4,
    "reviewCount": 3806,
    "inStock": true,
    "stockCount": 14,
    "images": [
      "https://images.unsplash.com/photo-1584285418504-0051edae9e54?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1584285418504-0051edae9e54?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1584285418504-0051edae9e54?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Dyson International Warranty",
      "Engineered with authentic Dyson materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Dyson. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 103,
    "name": "De'Longhi Dedica Deluxe Espresso & Cappuccino Machine Steel",
    "brand": "De'Longhi",
    "category": "Electronics",
    "subcategory": "Appliances",
    "price": 249.95,
    "mrp": 297.56,
    "rating": 4.7,
    "reviewCount": 3919,
    "inStock": true,
    "stockCount": 15,
    "images": [
      "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year De'Longhi International Warranty",
      "Engineered with authentic De'Longhi materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from De'Longhi. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 104,
    "name": "Ninja Air Fryer Max XL 5.5-Quart Digital Cooker 450F",
    "brand": "Ninja",
    "category": "Electronics",
    "subcategory": "Appliances",
    "price": 129.99,
    "mrp": 168.82,
    "rating": 4.2,
    "reviewCount": 132,
    "inStock": true,
    "stockCount": 16,
    "images": [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Ninja International Warranty",
      "Engineered with authentic Ninja materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Ninja. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 105,
    "name": "Fellow Stagg EKG Electric Gooseneck Pour-Over Kettle",
    "brand": "Fellow",
    "category": "Electronics",
    "subcategory": "Appliances",
    "price": 165,
    "mrp": 235.71,
    "rating": 4.5,
    "reviewCount": 245,
    "inStock": true,
    "stockCount": 2,
    "images": [
      "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Fellow International Warranty",
      "Engineered with authentic Fellow materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Fellow. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 106,
    "name": "Oral-B iO Series 9 Electric Toothbrush with AI Pressure",
    "brand": "Oral-B",
    "category": "Electronics",
    "subcategory": "Appliances",
    "price": 249.99,
    "mrp": 396.81,
    "rating": 4.8,
    "reviewCount": 358,
    "inStock": true,
    "stockCount": 3,
    "images": [
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Oral-B International Warranty",
      "Engineered with authentic Oral-B materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Oral-B. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 107,
    "name": "Philips Hue White & Color Ambiance Smart LED Starter Kit",
    "brand": "Philips",
    "category": "Electronics",
    "subcategory": "Appliances",
    "price": 159.99,
    "mrp": 285.7,
    "rating": 4.3,
    "reviewCount": 471,
    "inStock": true,
    "stockCount": 4,
    "images": [
      "https://images.unsplash.com/photo-1570222094114-8054a817e56b?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1570222094114-8054a817e56b?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1570222094114-8054a817e56b?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Philips International Warranty",
      "Engineered with authentic Philips materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Philips. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 108,
    "name": "Google Nest Learning Thermostat 4th Gen Polished Brass",
    "brand": "Google",
    "category": "Electronics",
    "subcategory": "Appliances",
    "price": 279.99,
    "mrp": 354.42,
    "rating": 4.6,
    "reviewCount": 584,
    "inStock": true,
    "stockCount": 5,
    "images": [
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Google International Warranty",
      "Engineered with authentic Google materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Google. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 109,
    "name": "Ring Battery Doorbell Pro with Head-to-Toe 1536p HD Video",
    "brand": "Ring",
    "category": "Electronics",
    "subcategory": "Appliances",
    "price": 229.99,
    "mrp": 319.43,
    "rating": 4.9,
    "reviewCount": 697,
    "inStock": true,
    "stockCount": 6,
    "images": [
      "https://images.unsplash.com/photo-1558002038-1055907df827?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1558002038-1055907df827?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1558002038-1055907df827?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Ring International Warranty",
      "Engineered with authentic Ring materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Ring. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 110,
    "name": "Nanoleaf Lines Smarter Kit Modular Backlit Smart LED Bars",
    "brand": "Nanoleaf",
    "category": "Electronics",
    "subcategory": "Appliances",
    "price": 199.99,
    "mrp": 307.68,
    "rating": 4.4,
    "reviewCount": 810,
    "inStock": true,
    "stockCount": 7,
    "images": [
      "https://images.unsplash.com/photo-1585338107746-861f6c4571f8?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1585338107746-861f6c4571f8?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1585338107746-861f6c4571f8?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Nanoleaf International Warranty",
      "Engineered with authentic Nanoleaf materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Nanoleaf. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 111,
    "name": "Men's Vintage Genuine Lambskin Leather Biker Jacket",
    "brand": "Zara",
    "category": "Fashion",
    "subcategory": "Jackets",
    "price": 169.99,
    "mrp": 293.09,
    "rating": 4.7,
    "reviewCount": 923,
    "inStock": true,
    "stockCount": 8,
    "images": [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Zara International Warranty",
      "Engineered with authentic Zara materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Zara. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 112,
    "name": "The North Face 1996 Retro Nuptse 700-Fill Down Puffer Jacket",
    "brand": "The North Face",
    "category": "Fashion",
    "subcategory": "Jackets",
    "price": 329.99,
    "mrp": 407.4,
    "rating": 4.2,
    "reviewCount": 1036,
    "inStock": true,
    "stockCount": 9,
    "images": [
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year The North Face International Warranty",
      "Engineered with authentic The North Face materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from The North Face. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 113,
    "name": "Carhartt WIP Detroit Heavyweight Blanket-Lined Canvas Jacket",
    "brand": "Carhartt",
    "category": "Fashion",
    "subcategory": "Jackets",
    "price": 189,
    "mrp": 255.41,
    "rating": 4.5,
    "reviewCount": 1149,
    "inStock": true,
    "stockCount": 10,
    "images": [
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Carhartt International Warranty",
      "Engineered with authentic Carhartt materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Carhartt. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 114,
    "name": "Levi's Vintage Sherpa Trucker Denim Jacket Light Stonewash",
    "brand": "Levi's",
    "category": "Fashion",
    "subcategory": "Jackets",
    "price": 118,
    "mrp": 176.12,
    "rating": 4.8,
    "reviewCount": 1262,
    "inStock": false,
    "stockCount": 0,
    "images": [
      "https://images.unsplash.com/photo-1544441893-675973e31985?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544441893-675973e31985?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1544441893-675973e31985?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Levi's International Warranty",
      "Engineered with authentic Levi's materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Levi's. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 115,
    "name": "Barbour Classic Beaufort Waxed Cotton Outdoor Country Coat",
    "brand": "Barbour",
    "category": "Fashion",
    "subcategory": "Jackets",
    "price": 415,
    "mrp": 691.67,
    "rating": 4.3,
    "reviewCount": 1375,
    "inStock": true,
    "stockCount": 12,
    "images": [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Barbour International Warranty",
      "Engineered with authentic Barbour materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Barbour. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 116,
    "name": "Alpha Industries MA-1 Flight Bomber Reversible Jacket",
    "brand": "Alpha Industries",
    "category": "Fashion",
    "subcategory": "Jackets",
    "price": 190,
    "mrp": 228.92,
    "rating": 4.6,
    "reviewCount": 1488,
    "inStock": true,
    "stockCount": 13,
    "images": [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Alpha Industries International Warranty",
      "Engineered with authentic Alpha Industries materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Alpha Industries. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 117,
    "name": "Arc'teryx Beta LT Waterproof Breathable GORE-TEX Shell Jacket",
    "brand": "Arc'teryx",
    "category": "Fashion",
    "subcategory": "Jackets",
    "price": 450,
    "mrp": 592.11,
    "rating": 4.9,
    "reviewCount": 1601,
    "inStock": true,
    "stockCount": 14,
    "images": [
      "https://images.unsplash.com/photo-1525450824786-227cbef70703?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1525450824786-227cbef70703?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1525450824786-227cbef70703?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Arc'teryx International Warranty",
      "Engineered with authentic Arc'teryx materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Arc'teryx. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 118,
    "name": "Patagonia Classic Retro-X Windproof Sherpa Fleece Jacket",
    "brand": "Patagonia",
    "category": "Fashion",
    "subcategory": "Jackets",
    "price": 229,
    "mrp": 331.88,
    "rating": 4.4,
    "reviewCount": 1714,
    "inStock": true,
    "stockCount": 15,
    "images": [
      "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Patagonia International Warranty",
      "Engineered with authentic Patagonia materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Patagonia. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 119,
    "name": "Zara Tailored Double-Breasted Wool Blend Overcoat Camel",
    "brand": "Zara",
    "category": "Fashion",
    "subcategory": "Jackets",
    "price": 189.99,
    "mrp": 306.44,
    "rating": 4.7,
    "reviewCount": 1827,
    "inStock": true,
    "stockCount": 16,
    "images": [
      "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Zara International Warranty",
      "Engineered with authentic Zara materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Zara. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 120,
    "name": "Canada Goose Wyndham Down Parka with Coyote Fur Trim",
    "brand": "Canada Goose",
    "category": "Fashion",
    "subcategory": "Jackets",
    "price": 1275,
    "mrp": 1500,
    "rating": 4.2,
    "reviewCount": 1940,
    "inStock": true,
    "stockCount": 2,
    "images": [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Canada Goose International Warranty",
      "Engineered with authentic Canada Goose materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Canada Goose. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 121,
    "name": "AllSaints Milo Slim-Fit Leather Biker Jacket Washed Black",
    "brand": "AllSaints",
    "category": "Fashion",
    "subcategory": "Jackets",
    "price": 529,
    "mrp": 678.21,
    "rating": 4.5,
    "reviewCount": 2053,
    "inStock": true,
    "stockCount": 3,
    "images": [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year AllSaints International Warranty",
      "Engineered with authentic AllSaints materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from AllSaints. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 122,
    "name": "Tommy Hilfiger Yachting Water-Resistant Hooded Windbreaker",
    "brand": "Tommy Hilfiger",
    "category": "Fashion",
    "subcategory": "Jackets",
    "price": 129.5,
    "mrp": 182.39,
    "rating": 4.8,
    "reviewCount": 2166,
    "inStock": true,
    "stockCount": 4,
    "images": [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Tommy Hilfiger International Warranty",
      "Engineered with authentic Tommy Hilfiger materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Tommy Hilfiger. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 123,
    "name": "Moncler Maya Lacquered Glossy Down Puffer Jacket",
    "brand": "Moncler",
    "category": "Fashion",
    "subcategory": "Jackets",
    "price": 1690,
    "mrp": 2640.63,
    "rating": 4.3,
    "reviewCount": 2279,
    "inStock": true,
    "stockCount": 5,
    "images": [
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Moncler International Warranty",
      "Engineered with authentic Moncler materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Moncler. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 124,
    "name": "Stone Island Soft Shell-R Water Resistant Hooded Jacket",
    "brand": "Stone Island",
    "category": "Fashion",
    "subcategory": "Jackets",
    "price": 695,
    "mrp": 1219.3,
    "rating": 4.6,
    "reviewCount": 2392,
    "inStock": true,
    "stockCount": 6,
    "images": [
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Stone Island International Warranty",
      "Engineered with authentic Stone Island materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Stone Island. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 125,
    "name": "Columbia Steens Mountain 2.0 Full Zip Warm Fleece Jacket",
    "brand": "Columbia",
    "category": "Fashion",
    "subcategory": "Jackets",
    "price": 45,
    "mrp": 56.25,
    "rating": 4.9,
    "reviewCount": 2505,
    "inStock": true,
    "stockCount": 7,
    "images": [
      "https://images.unsplash.com/photo-1520975661595-6453be3f7070?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1520975661595-6453be3f7070?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1520975661595-6453be3f7070?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Columbia International Warranty",
      "Engineered with authentic Columbia materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Columbia. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 126,
    "name": "Superdry Vintage Everest Faux Fur Trim Parka Coat",
    "brand": "Superdry",
    "category": "Fashion",
    "subcategory": "Jackets",
    "price": 179.95,
    "mrp": 246.51,
    "rating": 4.4,
    "reviewCount": 2618,
    "inStock": true,
    "stockCount": 8,
    "images": [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Superdry International Warranty",
      "Engineered with authentic Superdry materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Superdry. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 127,
    "name": "Fear of God Essentials Heavyweight Fleece Oversized Hoodie",
    "brand": "Essentials",
    "category": "Fashion",
    "subcategory": "Hoodies",
    "price": 125,
    "mrp": 189.39,
    "rating": 4.7,
    "reviewCount": 2731,
    "inStock": true,
    "stockCount": 9,
    "images": [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Essentials International Warranty",
      "Engineered with authentic Essentials materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Essentials. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 128,
    "name": "Champion Reverse Weave Heavyweight Pullover Hoodie Oxford Gray",
    "brand": "Champion",
    "category": "Fashion",
    "subcategory": "Hoodies",
    "price": 65,
    "mrp": 110.17,
    "rating": 4.2,
    "reviewCount": 2844,
    "inStock": true,
    "stockCount": 10,
    "images": [
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Champion International Warranty",
      "Engineered with authentic Champion materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Champion. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 129,
    "name": "Ralph Lauren Cable-Knit Premium Cashmere Crewneck Sweater",
    "brand": "Ralph Lauren",
    "category": "Fashion",
    "subcategory": "Sweaters",
    "price": 398,
    "mrp": 485.37,
    "rating": 4.5,
    "reviewCount": 2957,
    "inStock": true,
    "stockCount": 11,
    "images": [
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Ralph Lauren International Warranty",
      "Engineered with authentic Ralph Lauren materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Ralph Lauren. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 130,
    "name": "Stussy Basic Stussy Pigment Dyed Heavy Fleece Hoodie",
    "brand": "Stussy",
    "category": "Fashion",
    "subcategory": "Hoodies",
    "price": 145,
    "mrp": 193.33,
    "rating": 4.8,
    "reviewCount": 3070,
    "inStock": true,
    "stockCount": 12,
    "images": [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Stussy International Warranty",
      "Engineered with authentic Stussy materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Stussy. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 131,
    "name": "Acne Studios Fairview Face Patch Organic Cotton Sweatshirt",
    "brand": "Acne Studios",
    "category": "Fashion",
    "subcategory": "Sweaters",
    "price": 280,
    "mrp": 411.76,
    "rating": 4.3,
    "reviewCount": 3183,
    "inStock": true,
    "stockCount": 13,
    "images": [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Acne Studios International Warranty",
      "Engineered with authentic Acne Studios materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Acne Studios. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 132,
    "name": "Ami Paris Coeur Embroidered Cardigan Knit Wool Sweater",
    "brand": "Ami Paris",
    "category": "Fashion",
    "subcategory": "Sweaters",
    "price": 495,
    "mrp": 811.48,
    "rating": 4.6,
    "reviewCount": 3296,
    "inStock": true,
    "stockCount": 14,
    "images": [
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Ami Paris International Warranty",
      "Engineered with authentic Ami Paris materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Ami Paris. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 133,
    "name": "Represent Owners Club Vintage Wash Heavyweight Boxy Hoodie",
    "brand": "Represent",
    "category": "Fashion",
    "subcategory": "Hoodies",
    "price": 185,
    "mrp": 220.24,
    "rating": 4.9,
    "reviewCount": 3409,
    "inStock": false,
    "stockCount": 0,
    "images": [
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Represent International Warranty",
      "Engineered with authentic Represent materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Represent. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 134,
    "name": "Nike Sportswear Club Fleece Pullover Hoodie Black/White",
    "brand": "Nike",
    "category": "Fashion",
    "subcategory": "Hoodies",
    "price": 65,
    "mrp": 84.42,
    "rating": 4.4,
    "reviewCount": 3522,
    "inStock": true,
    "stockCount": 16,
    "images": [
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Nike International Warranty",
      "Engineered with authentic Nike materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Nike. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 135,
    "name": "Kith Williams III Heavyweight French Terry Pullover Hoodie",
    "brand": "Kith",
    "category": "Fashion",
    "subcategory": "Hoodies",
    "price": 165,
    "mrp": 235.71,
    "rating": 4.7,
    "reviewCount": 3635,
    "inStock": true,
    "stockCount": 2,
    "images": [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Kith International Warranty",
      "Engineered with authentic Kith materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Kith. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 136,
    "name": "Bape ABC Camo Shark Full Zip Double Hooded Sweatshirt",
    "brand": "Bape",
    "category": "Fashion",
    "subcategory": "Hoodies",
    "price": 475,
    "mrp": 753.97,
    "rating": 4.2,
    "reviewCount": 3748,
    "inStock": true,
    "stockCount": 3,
    "images": [
      "https://images.unsplash.com/photo-1562157879-11ba1a0ad3be?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1562157879-11ba1a0ad3be?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1562157879-11ba1a0ad3be?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Bape International Warranty",
      "Engineered with authentic Bape materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Bape. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 137,
    "name": "H&M Premium Selection Extra Fine Merino Wool Turtleneck Sweater",
    "brand": "H&M",
    "category": "Fashion",
    "subcategory": "Sweaters",
    "price": 59.99,
    "mrp": 107.13,
    "rating": 4.5,
    "reviewCount": 3861,
    "inStock": true,
    "stockCount": 4,
    "images": [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year H&M International Warranty",
      "Engineered with authentic H&M materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from H&M. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 138,
    "name": "Abercrombie & Fitch Essential Popover Heavyweight Hoodie",
    "brand": "Abercrombie",
    "category": "Fashion",
    "subcategory": "Hoodies",
    "price": 70,
    "mrp": 88.61,
    "rating": 4.8,
    "reviewCount": 3974,
    "inStock": true,
    "stockCount": 5,
    "images": [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Abercrombie International Warranty",
      "Engineered with authentic Abercrombie materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Abercrombie. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 139,
    "name": "Fred Perry Classic V-Neck Knit Merino Wool Sweater",
    "brand": "Fred Perry",
    "category": "Fashion",
    "subcategory": "Sweaters",
    "price": 140,
    "mrp": 194.44,
    "rating": 4.3,
    "reviewCount": 187,
    "inStock": true,
    "stockCount": 6,
    "images": [
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Fred Perry International Warranty",
      "Engineered with authentic Fred Perry materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Fred Perry. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 140,
    "name": "Uniqlo Souffle Yarn Half-Zip Relaxed Knitted Sweater",
    "brand": "Uniqlo",
    "category": "Fashion",
    "subcategory": "Sweaters",
    "price": 49.9,
    "mrp": 76.77,
    "rating": 4.6,
    "reviewCount": 300,
    "inStock": true,
    "stockCount": 7,
    "images": [
      "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Uniqlo International Warranty",
      "Engineered with authentic Uniqlo materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Uniqlo. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 141,
    "name": "Ralph Lauren Classic Fit Cotton Oxford Button-Down Dress Shirt",
    "brand": "Ralph Lauren",
    "category": "Fashion",
    "subcategory": "Tops",
    "price": 125,
    "mrp": 215.52,
    "rating": 4.9,
    "reviewCount": 413,
    "inStock": true,
    "stockCount": 8,
    "images": [
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Ralph Lauren International Warranty",
      "Engineered with authentic Ralph Lauren materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Ralph Lauren. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 142,
    "name": "Lacoste Classic Fit L.12.12 Original Pique Polo Shirt",
    "brand": "Lacoste",
    "category": "Fashion",
    "subcategory": "Tops",
    "price": 110,
    "mrp": 135.8,
    "rating": 4.4,
    "reviewCount": 526,
    "inStock": true,
    "stockCount": 9,
    "images": [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Lacoste International Warranty",
      "Engineered with authentic Lacoste materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Lacoste. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 143,
    "name": "Uniqlo Supima Cotton Crewneck Short Sleeve T-Shirt (3-Pack)",
    "brand": "Uniqlo",
    "category": "Fashion",
    "subcategory": "Tops",
    "price": 39.9,
    "mrp": 53.92,
    "rating": 4.7,
    "reviewCount": 639,
    "inStock": true,
    "stockCount": 10,
    "images": [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Uniqlo International Warranty",
      "Engineered with authentic Uniqlo materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Uniqlo. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 144,
    "name": "Carhartt K87 Heavyweight Workwear Pocket Short-Sleeve Tee",
    "brand": "Carhartt",
    "category": "Fashion",
    "subcategory": "Tops",
    "price": 24.99,
    "mrp": 37.3,
    "rating": 4.2,
    "reviewCount": 752,
    "inStock": true,
    "stockCount": 11,
    "images": [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Carhartt International Warranty",
      "Engineered with authentic Carhartt materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Carhartt. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 145,
    "name": "Fred Perry Twin Tipped Pique Cotton Polo Shirt",
    "brand": "Fred Perry",
    "category": "Fashion",
    "subcategory": "Tops",
    "price": 100,
    "mrp": 166.67,
    "rating": 4.5,
    "reviewCount": 865,
    "inStock": true,
    "stockCount": 12,
    "images": [
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Fred Perry International Warranty",
      "Engineered with authentic Fred Perry materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Fred Perry. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 146,
    "name": "Zara Textured Knit Waffle Cuban Collar Short Sleeve Shirt",
    "brand": "Zara",
    "category": "Fashion",
    "subcategory": "Tops",
    "price": 49.9,
    "mrp": 60.12,
    "rating": 4.8,
    "reviewCount": 978,
    "inStock": true,
    "stockCount": 13,
    "images": [
      "https://images.unsplash.com/photo-1603252109303-a1514670380d?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1603252109303-a1514670380d?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1603252109303-a1514670380d?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Zara International Warranty",
      "Engineered with authentic Zara materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Zara. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 147,
    "name": "Brooks Brothers Non-Iron Supima Cotton Pinpoint Dress Shirt",
    "brand": "Brooks Brothers",
    "category": "Fashion",
    "subcategory": "Tops",
    "price": 118,
    "mrp": 155.26,
    "rating": 4.3,
    "reviewCount": 1091,
    "inStock": true,
    "stockCount": 14,
    "images": [
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Brooks Brothers International Warranty",
      "Engineered with authentic Brooks Brothers materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Brooks Brothers. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 148,
    "name": "Levi's Classic Western Denim Long Sleeve Snap Shirt",
    "brand": "Levi's",
    "category": "Fashion",
    "subcategory": "Tops",
    "price": 69.5,
    "mrp": 100.72,
    "rating": 4.6,
    "reviewCount": 1204,
    "inStock": true,
    "stockCount": 15,
    "images": [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Levi's International Warranty",
      "Engineered with authentic Levi's materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Levi's. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 149,
    "name": "Lululemon Metal Vent Tech Anti-Stink Running Shirt",
    "brand": "Lululemon",
    "category": "Fashion",
    "subcategory": "Tops",
    "price": 78,
    "mrp": 125.81,
    "rating": 4.9,
    "reviewCount": 1317,
    "inStock": true,
    "stockCount": 16,
    "images": [
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Lululemon International Warranty",
      "Engineered with authentic Lululemon materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Lululemon. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 150,
    "name": "CDG Play Heart Logo Embroidered Cotton Jersey Long Sleeve",
    "brand": "Comme des Garcons",
    "category": "Fashion",
    "subcategory": "Tops",
    "price": 145,
    "mrp": 170.59,
    "rating": 4.4,
    "reviewCount": 1430,
    "inStock": true,
    "stockCount": 2,
    "images": [
      "https://images.unsplash.com/photo-1562157879-11ba1a0ad3be?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1562157879-11ba1a0ad3be?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1562157879-11ba1a0ad3be?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Comme des Garcons International Warranty",
      "Engineered with authentic Comme des Garcons materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Comme des Garcons. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 151,
    "name": "Everlane The Premium Weight Heavy Cotton Crew T-Shirt",
    "brand": "Everlane",
    "category": "Fashion",
    "subcategory": "Tops",
    "price": 40,
    "mrp": 51.28,
    "rating": 4.7,
    "reviewCount": 1543,
    "inStock": true,
    "stockCount": 3,
    "images": [
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Everlane International Warranty",
      "Engineered with authentic Everlane materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Everlane. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 152,
    "name": "Hugo Boss Regular Fit Mercerized Cotton Graphic Logo T-Shirt",
    "brand": "Hugo Boss",
    "category": "Fashion",
    "subcategory": "Tops",
    "price": 88,
    "mrp": 123.94,
    "rating": 4.2,
    "reviewCount": 1656,
    "inStock": false,
    "stockCount": 0,
    "images": [
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Hugo Boss International Warranty",
      "Engineered with authentic Hugo Boss materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Hugo Boss. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 153,
    "name": "Patagonia Lightweight Fjord Organic Cotton Flannel Shirt",
    "brand": "Patagonia",
    "category": "Fashion",
    "subcategory": "Tops",
    "price": 99,
    "mrp": 154.69,
    "rating": 4.5,
    "reviewCount": 1769,
    "inStock": true,
    "stockCount": 5,
    "images": [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Patagonia International Warranty",
      "Engineered with authentic Patagonia materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Patagonia. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 154,
    "name": "Pendleton Classic Board 100% Virgin Wool Plaid Shirt",
    "brand": "Pendleton",
    "category": "Fashion",
    "subcategory": "Tops",
    "price": 169,
    "mrp": 296.49,
    "rating": 4.8,
    "reviewCount": 1882,
    "inStock": true,
    "stockCount": 6,
    "images": [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Pendleton International Warranty",
      "Engineered with authentic Pendleton materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Pendleton. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 155,
    "name": "Tommy Hilfiger Custom Fit Striped Poplin Button-Down",
    "brand": "Tommy Hilfiger",
    "category": "Fashion",
    "subcategory": "Tops",
    "price": 79.5,
    "mrp": 99.38,
    "rating": 4.3,
    "reviewCount": 1995,
    "inStock": true,
    "stockCount": 7,
    "images": [
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Tommy Hilfiger International Warranty",
      "Engineered with authentic Tommy Hilfiger materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Tommy Hilfiger. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 156,
    "name": "Mango 100% Sustainable Linen Slim-Fit Casual Shirt",
    "brand": "Mango",
    "category": "Fashion",
    "subcategory": "Tops",
    "price": 59.99,
    "mrp": 82.18,
    "rating": 4.6,
    "reviewCount": 2108,
    "inStock": true,
    "stockCount": 8,
    "images": [
      "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Mango International Warranty",
      "Engineered with authentic Mango materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Mango. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 157,
    "name": "Levi's 501 Original Fit Straight Leg Selvedge Denim Jeans",
    "brand": "Levi's",
    "category": "Fashion",
    "subcategory": "Pants",
    "price": 89.5,
    "mrp": 135.61,
    "rating": 4.9,
    "reviewCount": 2221,
    "inStock": true,
    "stockCount": 9,
    "images": [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Levi's International Warranty",
      "Engineered with authentic Levi's materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Levi's. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 158,
    "name": "Carhartt WIP Aviation Slim Cargo Pants with Adjustable Waist",
    "brand": "Carhartt",
    "category": "Fashion",
    "subcategory": "Pants",
    "price": 138,
    "mrp": 233.9,
    "rating": 4.4,
    "reviewCount": 2334,
    "inStock": true,
    "stockCount": 10,
    "images": [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Carhartt International Warranty",
      "Engineered with authentic Carhartt materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Carhartt. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 159,
    "name": "Lululemon ABC Classic-Fit Trouser with Warpstreme Fabric",
    "brand": "Lululemon",
    "category": "Fashion",
    "subcategory": "Pants",
    "price": 128,
    "mrp": 156.1,
    "rating": 4.7,
    "reviewCount": 2447,
    "inStock": true,
    "stockCount": 11,
    "images": [
      "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Lululemon International Warranty",
      "Engineered with authentic Lululemon materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Lululemon. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 160,
    "name": "Zara Pleated Relaxed Fit Wide Leg Tailored Trousers",
    "brand": "Zara",
    "category": "Fashion",
    "subcategory": "Pants",
    "price": 69.9,
    "mrp": 93.2,
    "rating": 4.2,
    "reviewCount": 2560,
    "inStock": true,
    "stockCount": 12,
    "images": [
      "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Zara International Warranty",
      "Engineered with authentic Zara materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Zara. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 161,
    "name": "Dickies 874 Original Heavyweight Twill Work Pants Black",
    "brand": "Dickies",
    "category": "Fashion",
    "subcategory": "Pants",
    "price": 34.99,
    "mrp": 51.46,
    "rating": 4.5,
    "reviewCount": 2673,
    "inStock": true,
    "stockCount": 13,
    "images": [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Dickies International Warranty",
      "Engineered with authentic Dickies materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Dickies. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 162,
    "name": "Diesel D-Amny Skinny Fit Stretch Indigo Denim Jeans",
    "brand": "Diesel",
    "category": "Fashion",
    "subcategory": "Pants",
    "price": 195,
    "mrp": 319.67,
    "rating": 4.8,
    "reviewCount": 2786,
    "inStock": true,
    "stockCount": 14,
    "images": [
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Diesel International Warranty",
      "Engineered with authentic Diesel materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Diesel. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 163,
    "name": "Nudie Jeans Co Lean Dean Slim Tapered Dry Japanese Denim",
    "brand": "Nudie Jeans",
    "category": "Fashion",
    "subcategory": "Pants",
    "price": 185,
    "mrp": 220.24,
    "rating": 4.3,
    "reviewCount": 2899,
    "inStock": true,
    "stockCount": 15,
    "images": [
      "https://images.unsplash.com/photo-1582552938384-a09510724038?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1582552938384-a09510724038?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1582552938384-a09510724038?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Nudie Jeans International Warranty",
      "Engineered with authentic Nudie Jeans materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Nudie Jeans. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 164,
    "name": "Ami Paris Alexandre Mattiussi Relaxed Fit Pleated Chinos",
    "brand": "Ami Paris",
    "category": "Fashion",
    "subcategory": "Pants",
    "price": 340,
    "mrp": 441.56,
    "rating": 4.6,
    "reviewCount": 3012,
    "inStock": true,
    "stockCount": 16,
    "images": [
      "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Ami Paris International Warranty",
      "Engineered with authentic Ami Paris materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Ami Paris. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 165,
    "name": "Fear of God Essentials Core Relaxed Fit Sweatpants",
    "brand": "Essentials",
    "category": "Fashion",
    "subcategory": "Pants",
    "price": 110,
    "mrp": 157.14,
    "rating": 4.9,
    "reviewCount": 3125,
    "inStock": true,
    "stockCount": 2,
    "images": [
      "https://images.unsplash.com/photo-1475180098004-ca77a66827be?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1475180098004-ca77a66827be?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1475180098004-ca77a66827be?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Essentials International Warranty",
      "Engineered with authentic Essentials materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Essentials. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 166,
    "name": "Nike Sportswear Club Fleece Tapered Cuff Joggers",
    "brand": "Nike",
    "category": "Fashion",
    "subcategory": "Pants",
    "price": 60,
    "mrp": 95.24,
    "rating": 4.4,
    "reviewCount": 3238,
    "inStock": true,
    "stockCount": 3,
    "images": [
      "https://images.unsplash.com/photo-1475178626623-a4d6e4e892c5?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1475178626623-a4d6e4e892c5?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1475178626623-a4d6e4e892c5?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Nike International Warranty",
      "Engineered with authentic Nike materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Nike. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 167,
    "name": "G-Star RAW 3301 Straight Fit Dark Aged Selvedge Jeans",
    "brand": "G-Star RAW",
    "category": "Fashion",
    "subcategory": "Pants",
    "price": 140,
    "mrp": 250,
    "rating": 4.7,
    "reviewCount": 3351,
    "inStock": true,
    "stockCount": 4,
    "images": [
      "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year G-Star RAW International Warranty",
      "Engineered with authentic G-Star RAW materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from G-Star RAW. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 168,
    "name": "Stone Island Cargo Pants with Iconic Compass Badge",
    "brand": "Stone Island",
    "category": "Fashion",
    "subcategory": "Pants",
    "price": 420,
    "mrp": 531.65,
    "rating": 4.2,
    "reviewCount": 3464,
    "inStock": true,
    "stockCount": 5,
    "images": [
      "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Stone Island International Warranty",
      "Engineered with authentic Stone Island materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Stone Island. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 169,
    "name": "Represent 247 Everyday Technical Water-Resistant Pant",
    "brand": "Represent",
    "category": "Fashion",
    "subcategory": "Pants",
    "price": 160,
    "mrp": 222.22,
    "rating": 4.5,
    "reviewCount": 3577,
    "inStock": true,
    "stockCount": 6,
    "images": [
      "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Represent International Warranty",
      "Engineered with authentic Represent materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Represent. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 170,
    "name": "Rhone Commuter Pant Wrinkle Resistant Stretch Trouser",
    "brand": "Rhone",
    "category": "Fashion",
    "subcategory": "Pants",
    "price": 138,
    "mrp": 212.31,
    "rating": 4.8,
    "reviewCount": 3690,
    "inStock": true,
    "stockCount": 7,
    "images": [
      "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Rhone International Warranty",
      "Engineered with authentic Rhone materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Rhone. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 171,
    "name": "Wrangler Authentics Classic 5-Pocket Relaxed Fit Flex Jeans",
    "brand": "Wrangler",
    "category": "Fashion",
    "subcategory": "Pants",
    "price": 32.99,
    "mrp": 56.88,
    "rating": 4.3,
    "reviewCount": 3803,
    "inStock": false,
    "stockCount": 0,
    "images": [
      "https://images.unsplash.com/photo-1560243563-33503f152d7f?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1560243563-33503f152d7f?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1560243563-33503f152d7f?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Wrangler International Warranty",
      "Engineered with authentic Wrangler materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Wrangler. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 172,
    "name": "Uniqlo Smart Ankle Pants 2-Way Stretch Trousers",
    "brand": "Uniqlo",
    "category": "Fashion",
    "subcategory": "Pants",
    "price": 49.9,
    "mrp": 61.6,
    "rating": 4.6,
    "reviewCount": 3916,
    "inStock": true,
    "stockCount": 9,
    "images": [
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Uniqlo International Warranty",
      "Engineered with authentic Uniqlo materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Uniqlo. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 173,
    "name": "Nike Air Jordan 1 Retro High OG 'Lost & Found' Chicago",
    "brand": "Nike",
    "category": "Fashion",
    "subcategory": "Footwear",
    "price": 180,
    "mrp": 243.24,
    "rating": 4.9,
    "reviewCount": 129,
    "inStock": true,
    "stockCount": 10,
    "images": [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Nike International Warranty",
      "Engineered with authentic Nike materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Nike. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 174,
    "name": "Nike Dunk Low Retro White Black 'Panda' Classic Sneakers",
    "brand": "Nike",
    "category": "Fashion",
    "subcategory": "Footwear",
    "price": 115,
    "mrp": 171.64,
    "rating": 4.4,
    "reviewCount": 242,
    "inStock": true,
    "stockCount": 11,
    "images": [
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Nike International Warranty",
      "Engineered with authentic Nike materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Nike. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 175,
    "name": "Adidas Originals Samba OG Leather Gum Sole Sneakers White",
    "brand": "Adidas",
    "category": "Fashion",
    "subcategory": "Footwear",
    "price": 100,
    "mrp": 166.67,
    "rating": 4.7,
    "reviewCount": 355,
    "inStock": true,
    "stockCount": 12,
    "images": [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Adidas International Warranty",
      "Engineered with authentic Adidas materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Adidas. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 176,
    "name": "New Balance 550 White Grey Retro Basketball Lifestyle Shoes",
    "brand": "New Balance",
    "category": "Fashion",
    "subcategory": "Footwear",
    "price": 110,
    "mrp": 132.53,
    "rating": 4.2,
    "reviewCount": 468,
    "inStock": true,
    "stockCount": 13,
    "images": [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year New Balance International Warranty",
      "Engineered with authentic New Balance materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from New Balance. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 177,
    "name": "Adidas Originals Gazelle Indoor Suede Low Top Sneakers",
    "brand": "Adidas",
    "category": "Fashion",
    "subcategory": "Footwear",
    "price": 120,
    "mrp": 157.89,
    "rating": 4.5,
    "reviewCount": 581,
    "inStock": true,
    "stockCount": 14,
    "images": [
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Adidas International Warranty",
      "Engineered with authentic Adidas materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Adidas. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 178,
    "name": "New Balance 9060 Chunky Futuristic Cushioning Sneakers",
    "brand": "New Balance",
    "category": "Fashion",
    "subcategory": "Footwear",
    "price": 150,
    "mrp": 217.39,
    "rating": 4.8,
    "reviewCount": 694,
    "inStock": true,
    "stockCount": 15,
    "images": [
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year New Balance International Warranty",
      "Engineered with authentic New Balance materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from New Balance. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 179,
    "name": "On Running Cloudmonster Maximum Cushioning Road Shoes",
    "brand": "On",
    "category": "Fashion",
    "subcategory": "Footwear",
    "price": 169.99,
    "mrp": 274.18,
    "rating": 4.3,
    "reviewCount": 807,
    "inStock": true,
    "stockCount": 16,
    "images": [
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year On International Warranty",
      "Engineered with authentic On materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from On. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 180,
    "name": "Salomon XT-6 GORE-TEX Trail Outdoor Running Sneaker",
    "brand": "Salomon",
    "category": "Fashion",
    "subcategory": "Footwear",
    "price": 220,
    "mrp": 258.82,
    "rating": 4.6,
    "reviewCount": 920,
    "inStock": true,
    "stockCount": 2,
    "images": [
      "https://images.unsplash.com/photo-1539185441755-769473a23570?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1539185441755-769473a23570?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1539185441755-769473a23570?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Salomon International Warranty",
      "Engineered with authentic Salomon materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Salomon. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 181,
    "name": "Timberland 6-Inch Premium Waterproof Nubuck Wheat Boot",
    "brand": "Timberland",
    "category": "Fashion",
    "subcategory": "Footwear",
    "price": 198,
    "mrp": 253.85,
    "rating": 4.9,
    "reviewCount": 1033,
    "inStock": true,
    "stockCount": 3,
    "images": [
      "https://images.unsplash.com/photo-1514989940748-028bb46c7f99?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1514989940748-028bb46c7f99?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1514989940748-028bb46c7f99?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Timberland International Warranty",
      "Engineered with authentic Timberland materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Timberland. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 182,
    "name": "Dr. Martens 1460 Smooth Leather 8-Eyelet Ankle Boot",
    "brand": "Dr. Martens",
    "category": "Fashion",
    "subcategory": "Footwear",
    "price": 170,
    "mrp": 239.44,
    "rating": 4.4,
    "reviewCount": 1146,
    "inStock": true,
    "stockCount": 4,
    "images": [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Dr. Martens International Warranty",
      "Engineered with authentic Dr. Martens materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Dr. Martens. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 183,
    "name": "Birkenstock Boston Oiled Leather Slip-On Clogs Habana",
    "brand": "Birkenstock",
    "category": "Fashion",
    "subcategory": "Footwear",
    "price": 158,
    "mrp": 246.88,
    "rating": 4.7,
    "reviewCount": 1259,
    "inStock": true,
    "stockCount": 5,
    "images": [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Birkenstock International Warranty",
      "Engineered with authentic Birkenstock materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Birkenstock. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 184,
    "name": "Clarks Originals Wallabee Suede Crepe Sole Moccasin Maple",
    "brand": "Clarks",
    "category": "Fashion",
    "subcategory": "Footwear",
    "price": 160,
    "mrp": 280.7,
    "rating": 4.2,
    "reviewCount": 1372,
    "inStock": true,
    "stockCount": 6,
    "images": [
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Clarks International Warranty",
      "Engineered with authentic Clarks materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Clarks. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 185,
    "name": "Thursday Boot Company Captain Handcrafted Rugged Boot",
    "brand": "Thursday Boot",
    "category": "Fashion",
    "subcategory": "Footwear",
    "price": 199,
    "mrp": 248.75,
    "rating": 4.5,
    "reviewCount": 1485,
    "inStock": true,
    "stockCount": 7,
    "images": [
      "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Thursday Boot International Warranty",
      "Engineered with authentic Thursday Boot materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Thursday Boot. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 186,
    "name": "Converse Chuck Taylor All Star 70 Vintage Canvas High Top",
    "brand": "Converse",
    "category": "Fashion",
    "subcategory": "Footwear",
    "price": 85,
    "mrp": 116.44,
    "rating": 4.8,
    "reviewCount": 1598,
    "inStock": true,
    "stockCount": 8,
    "images": [
      "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd115?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd115?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd115?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Converse International Warranty",
      "Engineered with authentic Converse materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Converse. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 187,
    "name": "Vans Old Skool Classic Skate Shoes Black/White Suede",
    "brand": "Vans",
    "category": "Fashion",
    "subcategory": "Footwear",
    "price": 70,
    "mrp": 106.06,
    "rating": 4.3,
    "reviewCount": 1711,
    "inStock": true,
    "stockCount": 9,
    "images": [
      "https://images.unsplash.com/photo-1460353581640-c78a3023e717?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1460353581640-c78a3023e717?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1460353581640-c78a3023e717?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Vans International Warranty",
      "Engineered with authentic Vans materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Vans. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 188,
    "name": "Asics GEL-Kayano 14 Metallic Silver Running Sneaker",
    "brand": "Asics",
    "category": "Fashion",
    "subcategory": "Footwear",
    "price": 150,
    "mrp": 254.24,
    "rating": 4.6,
    "reviewCount": 1824,
    "inStock": true,
    "stockCount": 10,
    "images": [
      "https://images.unsplash.com/photo-1512374382149-233c47d6a00c?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1512374382149-233c47d6a00c?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1512374382149-233c47d6a00c?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Asics International Warranty",
      "Engineered with authentic Asics materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Asics. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 189,
    "name": "Nike Air Force 1 '07 All-White Leather Icon Sneakers",
    "brand": "Nike",
    "category": "Fashion",
    "subcategory": "Footwear",
    "price": 115,
    "mrp": 140.24,
    "rating": 4.9,
    "reviewCount": 1937,
    "inStock": true,
    "stockCount": 11,
    "images": [
      "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd115?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd115?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd115?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Nike International Warranty",
      "Engineered with authentic Nike materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Nike. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 190,
    "name": "Hoka Clifton 9 Lightweight Daily Distance Running Shoes",
    "brand": "Hoka",
    "category": "Fashion",
    "subcategory": "Footwear",
    "price": 145,
    "mrp": 193.33,
    "rating": 4.4,
    "reviewCount": 2050,
    "inStock": false,
    "stockCount": 0,
    "images": [
      "https://images.unsplash.com/photo-1575537305961-077a949798b1?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1575537305961-077a949798b1?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1575537305961-077a949798b1?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Hoka International Warranty",
      "Engineered with authentic Hoka materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Hoka. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 191,
    "name": "Common Projects Original Achilles Leather Low Sneaker White",
    "brand": "Common Projects",
    "category": "Fashion",
    "subcategory": "Footwear",
    "price": 440,
    "mrp": 647.06,
    "rating": 4.7,
    "reviewCount": 2163,
    "inStock": true,
    "stockCount": 13,
    "images": [
      "https://images.unsplash.com/photo-1582588678413-dbf45f4823e8?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1582588678413-dbf45f4823e8?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1582588678413-dbf45f4823e8?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Common Projects International Warranty",
      "Engineered with authentic Common Projects materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Common Projects. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 192,
    "name": "Golden Goose Super-Star Distressed Leather Low-Top Sneaker",
    "brand": "Golden Goose",
    "category": "Fashion",
    "subcategory": "Footwear",
    "price": 565,
    "mrp": 926.23,
    "rating": 4.2,
    "reviewCount": 2276,
    "inStock": true,
    "stockCount": 14,
    "images": [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Golden Goose International Warranty",
      "Engineered with authentic Golden Goose materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Golden Goose. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 193,
    "name": "Red Wing Heritage Iron Ranger 6-Inch Amber Harness Boot",
    "brand": "Red Wing",
    "category": "Fashion",
    "subcategory": "Footwear",
    "price": 349.99,
    "mrp": 416.65,
    "rating": 4.5,
    "reviewCount": 2389,
    "inStock": true,
    "stockCount": 15,
    "images": [
      "https://images.unsplash.com/photo-1520639888713-7851133b1e0b?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1520639888713-7851133b1e0b?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1520639888713-7851133b1e0b?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Red Wing International Warranty",
      "Engineered with authentic Red Wing materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Red Wing. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 194,
    "name": "Maison Margiela Replica Leather & Suede Army Low Sneaker",
    "brand": "Maison Margiela",
    "category": "Fashion",
    "subcategory": "Footwear",
    "price": 540,
    "mrp": 701.3,
    "rating": 4.8,
    "reviewCount": 2502,
    "inStock": true,
    "stockCount": 16,
    "images": [
      "https://images.unsplash.com/photo-1533681904393-9ab6eee7e252?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1533681904393-9ab6eee7e252?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1533681904393-9ab6eee7e252?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Maison Margiela International Warranty",
      "Engineered with authentic Maison Margiela materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Maison Margiela. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 195,
    "name": "Crocs Classic Clog Lightweight Water-Friendly Slip-On",
    "brand": "Crocs",
    "category": "Fashion",
    "subcategory": "Footwear",
    "price": 49.99,
    "mrp": 71.41,
    "rating": 4.3,
    "reviewCount": 2615,
    "inStock": true,
    "stockCount": 2,
    "images": [
      "https://images.unsplash.com/photo-1587563871166-adcde4c8462e?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1587563871166-adcde4c8462e?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1587563871166-adcde4c8462e?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Crocs International Warranty",
      "Engineered with authentic Crocs materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Crocs. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 196,
    "name": "Chelsea Handcrafted Suede Leather Ankle Boot with Elastic Gusset",
    "brand": "Astorflex",
    "category": "Fashion",
    "subcategory": "Footwear",
    "price": 185,
    "mrp": 293.65,
    "rating": 4.6,
    "reviewCount": 2728,
    "inStock": true,
    "stockCount": 3,
    "images": [
      "https://images.unsplash.com/photo-1579338559194-a162d19bf842?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1579338559194-a162d19bf842?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1579338559194-a162d19bf842?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Astorflex International Warranty",
      "Engineered with authentic Astorflex materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Astorflex. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 197,
    "name": "Skims Soft Lounge Long Slip Ribbed Maxi Dress Heather Grey",
    "brand": "Skims",
    "category": "Fashion",
    "subcategory": "Dresses",
    "price": 88,
    "mrp": 157.14,
    "rating": 4.9,
    "reviewCount": 2841,
    "inStock": true,
    "stockCount": 4,
    "images": [
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Skims International Warranty",
      "Engineered with authentic Skims materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Skims. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 198,
    "name": "Reformation Juliette High Slit Sweetheart Floral Midi Dress",
    "brand": "Reformation",
    "category": "Fashion",
    "subcategory": "Dresses",
    "price": 248,
    "mrp": 313.92,
    "rating": 4.4,
    "reviewCount": 2954,
    "inStock": true,
    "stockCount": 5,
    "images": [
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Reformation International Warranty",
      "Engineered with authentic Reformation materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Reformation. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 199,
    "name": "Zara Satin Effect Bias Cut Evening Midi Dress Black",
    "brand": "Zara",
    "category": "Fashion",
    "subcategory": "Dresses",
    "price": 59.9,
    "mrp": 83.19,
    "rating": 4.7,
    "reviewCount": 3067,
    "inStock": true,
    "stockCount": 6,
    "images": [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Zara International Warranty",
      "Engineered with authentic Zara materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Zara. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 200,
    "name": "Aritzia Wilfred The Effortless High-Waisted Wide-Leg Pant",
    "brand": "Aritzia",
    "category": "Fashion",
    "subcategory": "Pants",
    "price": 148,
    "mrp": 227.69,
    "rating": 4.2,
    "reviewCount": 3180,
    "inStock": true,
    "stockCount": 7,
    "images": [
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Aritzia International Warranty",
      "Engineered with authentic Aritzia materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Aritzia. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 201,
    "name": "Realisation Par The Naomi Wild Things Silk Midi Slip Skirt",
    "brand": "Realisation Par",
    "category": "Fashion",
    "subcategory": "Dresses",
    "price": 190,
    "mrp": 327.59,
    "rating": 4.5,
    "reviewCount": 3293,
    "inStock": true,
    "stockCount": 8,
    "images": [
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Realisation Par International Warranty",
      "Engineered with authentic Realisation Par materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Realisation Par. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 202,
    "name": "House of CB Corset Draped Satin Boned Cocktail Party Dress",
    "brand": "House of CB",
    "category": "Fashion",
    "subcategory": "Dresses",
    "price": 285,
    "mrp": 351.85,
    "rating": 4.8,
    "reviewCount": 3406,
    "inStock": true,
    "stockCount": 9,
    "images": [
      "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year House of CB International Warranty",
      "Engineered with authentic House of CB materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from House of CB. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 203,
    "name": "Free People FP One Adella Slip Boho Floral Lace Dress",
    "brand": "Free People",
    "category": "Fashion",
    "subcategory": "Dresses",
    "price": 88,
    "mrp": 118.92,
    "rating": 4.3,
    "reviewCount": 3519,
    "inStock": true,
    "stockCount": 10,
    "images": [
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Free People International Warranty",
      "Engineered with authentic Free People materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Free People. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 204,
    "name": "Zara Oversized Structured Double-Breasted Tailored Blazer",
    "brand": "Zara",
    "category": "Fashion",
    "subcategory": "Dresses",
    "price": 99.9,
    "mrp": 149.1,
    "rating": 4.6,
    "reviewCount": 3632,
    "inStock": true,
    "stockCount": 11,
    "images": [
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Zara International Warranty",
      "Engineered with authentic Zara materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Zara. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 205,
    "name": "Mango Tweed Pocket Button-Front Vintage Cropped Jacket",
    "brand": "Mango",
    "category": "Fashion",
    "subcategory": "Dresses",
    "price": 119.99,
    "mrp": 199.98,
    "rating": 4.9,
    "reviewCount": 3745,
    "inStock": true,
    "stockCount": 12,
    "images": [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Mango International Warranty",
      "Engineered with authentic Mango materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Mango. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 206,
    "name": "Abercrombie Linen-Blend Halter Neck Tiered Midi Dress",
    "brand": "Abercrombie",
    "category": "Fashion",
    "subcategory": "Dresses",
    "price": 110,
    "mrp": 132.53,
    "rating": 4.4,
    "reviewCount": 3858,
    "inStock": true,
    "stockCount": 13,
    "images": [
      "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Abercrombie International Warranty",
      "Engineered with authentic Abercrombie materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Abercrombie. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 207,
    "name": "H&M Rib-Knit Bodycon Knee-Length Long Sleeve Dress",
    "brand": "H&M",
    "category": "Fashion",
    "subcategory": "Dresses",
    "price": 39.99,
    "mrp": 52.62,
    "rating": 4.7,
    "reviewCount": 3971,
    "inStock": true,
    "stockCount": 14,
    "images": [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year H&M International Warranty",
      "Engineered with authentic H&M materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from H&M. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 208,
    "name": "Lulus Heavenly Hues Chiffon Sleeveless Maxi Evening Gown",
    "brand": "Lulus",
    "category": "Fashion",
    "subcategory": "Dresses",
    "price": 89,
    "mrp": 128.99,
    "rating": 4.2,
    "reviewCount": 184,
    "inStock": true,
    "stockCount": 15,
    "images": [
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Lulus International Warranty",
      "Engineered with authentic Lulus materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Lulus. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 209,
    "name": "COS Pleated Georgette Elasticated A-Line Midi Skirt",
    "brand": "COS",
    "category": "Fashion",
    "subcategory": "Dresses",
    "price": 135,
    "mrp": 217.74,
    "rating": 4.5,
    "reviewCount": 297,
    "inStock": false,
    "stockCount": 0,
    "images": [
      "https://images.unsplash.com/photo-1508427953056-b00b7d785786?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1508427953056-b00b7d785786?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1508427953056-b00b7d785786?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year COS International Warranty",
      "Engineered with authentic COS materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from COS. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 210,
    "name": "Anthropologie Somerset Cotton Maxi Shirtdress with Pockets",
    "brand": "Anthropologie",
    "category": "Fashion",
    "subcategory": "Dresses",
    "price": 168,
    "mrp": 197.65,
    "rating": 4.8,
    "reviewCount": 410,
    "inStock": true,
    "stockCount": 2,
    "images": [
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Anthropologie International Warranty",
      "Engineered with authentic Anthropologie materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Anthropologie. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 211,
    "name": "Lululemon Align High-Rise Yoga Pant 25-inch Nulu Fabric",
    "brand": "Lululemon",
    "category": "Fashion",
    "subcategory": "Activewear",
    "price": 98,
    "mrp": 125.64,
    "rating": 4.3,
    "reviewCount": 523,
    "inStock": true,
    "stockCount": 3,
    "images": [
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Lululemon International Warranty",
      "Engineered with authentic Lululemon materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Lululemon. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 212,
    "name": "Gymshark Vital Seamless 2.0 Squat-Proof Leggings",
    "brand": "Gymshark",
    "category": "Fashion",
    "subcategory": "Activewear",
    "price": 54,
    "mrp": 76.06,
    "rating": 4.6,
    "reviewCount": 636,
    "inStock": true,
    "stockCount": 4,
    "images": [
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Gymshark International Warranty",
      "Engineered with authentic Gymshark materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Gymshark. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 213,
    "name": "Alo Yoga Airlift High-Waist Performance Sheen Leggings",
    "brand": "Alo Yoga",
    "category": "Fashion",
    "subcategory": "Activewear",
    "price": 128,
    "mrp": 200,
    "rating": 4.9,
    "reviewCount": 749,
    "inStock": true,
    "stockCount": 5,
    "images": [
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Alo Yoga International Warranty",
      "Engineered with authentic Alo Yoga materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Alo Yoga. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 214,
    "name": "Vuori Kore Athletic Moisture-Wicking Lined Training Shorts",
    "brand": "Vuori",
    "category": "Fashion",
    "subcategory": "Activewear",
    "price": 68,
    "mrp": 119.3,
    "rating": 4.4,
    "reviewCount": 862,
    "inStock": true,
    "stockCount": 6,
    "images": [
      "https://images.unsplash.com/photo-1518310383442-7d0778c4142d?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1518310383442-7d0778c4142d?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1518310383442-7d0778c4142d?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Vuori International Warranty",
      "Engineered with authentic Vuori materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Vuori. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 215,
    "name": "Nike Pro Dri-FIT 3-Inch Compression Training Shorts",
    "brand": "Nike",
    "category": "Fashion",
    "subcategory": "Activewear",
    "price": 35,
    "mrp": 43.75,
    "rating": 4.7,
    "reviewCount": 975,
    "inStock": true,
    "stockCount": 7,
    "images": [
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Nike International Warranty",
      "Engineered with authentic Nike materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Nike. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 216,
    "name": "Under Armour HeatGear Compression Long-Sleeve Shirt",
    "brand": "Under Armour",
    "category": "Fashion",
    "subcategory": "Activewear",
    "price": 38,
    "mrp": 52.05,
    "rating": 4.2,
    "reviewCount": 1088,
    "inStock": true,
    "stockCount": 8,
    "images": [
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Under Armour International Warranty",
      "Engineered with authentic Under Armour materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Under Armour. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 217,
    "name": "Alo Yoga Accolade Sweatshirt French Terry Relaxed Crew",
    "brand": "Alo Yoga",
    "category": "Fashion",
    "subcategory": "Activewear",
    "price": 118,
    "mrp": 178.79,
    "rating": 4.5,
    "reviewCount": 1201,
    "inStock": true,
    "stockCount": 9,
    "images": [
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Alo Yoga International Warranty",
      "Engineered with authentic Alo Yoga materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Alo Yoga. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 218,
    "name": "Gymshark Crest Slim Fit Cotton Drawstring Training Joggers",
    "brand": "Gymshark",
    "category": "Fashion",
    "subcategory": "Activewear",
    "price": 45,
    "mrp": 76.27,
    "rating": 4.8,
    "reviewCount": 1314,
    "inStock": true,
    "stockCount": 10,
    "images": [
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Gymshark International Warranty",
      "Engineered with authentic Gymshark materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Gymshark. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 219,
    "name": "Calvin Klein Modern Cotton Bralette and Bikini Set (3-Pack)",
    "brand": "Calvin Klein",
    "category": "Fashion",
    "subcategory": "Activewear",
    "price": 59,
    "mrp": 71.95,
    "rating": 4.3,
    "reviewCount": 1427,
    "inStock": true,
    "stockCount": 11,
    "images": [
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Calvin Klein International Warranty",
      "Engineered with authentic Calvin Klein materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Calvin Klein. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 220,
    "name": "Spanx Faux Leather High-Waisted Tummy Shaping Leggings",
    "brand": "Spanx",
    "category": "Fashion",
    "subcategory": "Activewear",
    "price": 98,
    "mrp": 130.67,
    "rating": 4.6,
    "reviewCount": 1540,
    "inStock": true,
    "stockCount": 12,
    "images": [
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Spanx International Warranty",
      "Engineered with authentic Spanx materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Spanx. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 221,
    "name": "Tissot PRX Powermatic 80 Automatic Integrated Steel Blue Dial",
    "brand": "Tissot",
    "category": "Accessories",
    "subcategory": "Watches",
    "price": 725,
    "mrp": 1066.18,
    "rating": 4.9,
    "reviewCount": 1653,
    "inStock": true,
    "stockCount": 13,
    "images": [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Tissot International Warranty",
      "Engineered with authentic Tissot materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Tissot. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 222,
    "name": "Seiko 5 Sports Automatic 24-Jewel Day-Date Dive Watch SRPD55",
    "brand": "Seiko",
    "category": "Accessories",
    "subcategory": "Watches",
    "price": 295,
    "mrp": 483.61,
    "rating": 4.4,
    "reviewCount": 1766,
    "inStock": true,
    "stockCount": 14,
    "images": [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Seiko International Warranty",
      "Engineered with authentic Seiko materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Seiko. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 223,
    "name": "Hamilton Khaki Field Mechanical Hand-Winding Sapphire Watch",
    "brand": "Hamilton",
    "category": "Accessories",
    "subcategory": "Watches",
    "price": 575,
    "mrp": 684.52,
    "rating": 4.7,
    "reviewCount": 1879,
    "inStock": true,
    "stockCount": 15,
    "images": [
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1533139502658-0198f920d8e8?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Hamilton International Warranty",
      "Engineered with authentic Hamilton materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Hamilton. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 224,
    "name": "Casio G-Shock GA-2100-1A1 'CasiOak' All-Black Octagonal Resin",
    "brand": "Casio",
    "category": "Accessories",
    "subcategory": "Watches",
    "price": 99,
    "mrp": 128.57,
    "rating": 4.2,
    "reviewCount": 1992,
    "inStock": true,
    "stockCount": 16,
    "images": [
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Casio International Warranty",
      "Engineered with authentic Casio materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Casio. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 225,
    "name": "Citizen Promaster Dive Eco-Drive Solar Powered ISO Watch",
    "brand": "Citizen",
    "category": "Accessories",
    "subcategory": "Watches",
    "price": 316,
    "mrp": 451.43,
    "rating": 4.5,
    "reviewCount": 2105,
    "inStock": true,
    "stockCount": 2,
    "images": [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Citizen International Warranty",
      "Engineered with authentic Citizen materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Citizen. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 226,
    "name": "Orient Bambino Version 4 Vintage Automatic Leather Dress Watch",
    "brand": "Orient",
    "category": "Accessories",
    "subcategory": "Watches",
    "price": 175,
    "mrp": 277.78,
    "rating": 4.8,
    "reviewCount": 2218,
    "inStock": true,
    "stockCount": 3,
    "images": [
      "https://images.unsplash.com/photo-1542496658-22f36c56225a?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542496658-22f36c56225a?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1542496658-22f36c56225a?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Orient International Warranty",
      "Engineered with authentic Orient materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Orient. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 227,
    "name": "Bulova Lunar Pilot High Precision Apollo 15 Chronograph",
    "brand": "Bulova",
    "category": "Accessories",
    "subcategory": "Watches",
    "price": 595,
    "mrp": 1062.5,
    "rating": 4.3,
    "reviewCount": 2331,
    "inStock": true,
    "stockCount": 4,
    "images": [
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Bulova International Warranty",
      "Engineered with authentic Bulova materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Bulova. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 228,
    "name": "Timex Marlin Automatic 40mm California Dial Exhibition Watch",
    "brand": "Timex",
    "category": "Accessories",
    "subcategory": "Watches",
    "price": 259,
    "mrp": 327.85,
    "rating": 4.6,
    "reviewCount": 2444,
    "inStock": false,
    "stockCount": 0,
    "images": [
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Timex International Warranty",
      "Engineered with authentic Timex materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Timex. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 229,
    "name": "Fossil Neutra Chronograph Stainless Steel Mesh Bracelet Watch",
    "brand": "Fossil",
    "category": "Accessories",
    "subcategory": "Watches",
    "price": 160,
    "mrp": 222.22,
    "rating": 4.9,
    "reviewCount": 2557,
    "inStock": true,
    "stockCount": 6,
    "images": [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Fossil International Warranty",
      "Engineered with authentic Fossil materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Fossil. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 230,
    "name": "Casio Vintage A168WG-9 Gold Digital Illuminator Alarm Watch",
    "brand": "Casio",
    "category": "Accessories",
    "subcategory": "Watches",
    "price": 65,
    "mrp": 100,
    "rating": 4.4,
    "reviewCount": 2670,
    "inStock": true,
    "stockCount": 7,
    "images": [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Casio International Warranty",
      "Engineered with authentic Casio materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Casio. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 231,
    "name": "Seiko Prospex Speedtimer Solar Chronograph 'Seitona' SSC813",
    "brand": "Seiko",
    "category": "Accessories",
    "subcategory": "Watches",
    "price": 675,
    "mrp": 1163.79,
    "rating": 4.7,
    "reviewCount": 2783,
    "inStock": true,
    "stockCount": 8,
    "images": [
      "https://images.unsplash.com/photo-1539185441755-769473a23570?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1539185441755-769473a23570?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1539185441755-769473a23570?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Seiko International Warranty",
      "Engineered with authentic Seiko materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Seiko. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 232,
    "name": "Tag Heuer Formula 1 Quartz 43mm Racing Chronograph Watch",
    "brand": "Tag Heuer",
    "category": "Accessories",
    "subcategory": "Watches",
    "price": 1550,
    "mrp": 1913.58,
    "rating": 4.2,
    "reviewCount": 2896,
    "inStock": true,
    "stockCount": 9,
    "images": [
      "https://images.unsplash.com/photo-1518131672624-96469a4736f8?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1518131672624-96469a4736f8?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1518131672624-96469a4736f8?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Tag Heuer International Warranty",
      "Engineered with authentic Tag Heuer materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Tag Heuer. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 233,
    "name": "Longines HydroConquest Ceramic Bezel Automatic Dive Watch",
    "brand": "Longines",
    "category": "Accessories",
    "subcategory": "Watches",
    "price": 1775,
    "mrp": 2398.65,
    "rating": 4.5,
    "reviewCount": 3009,
    "inStock": true,
    "stockCount": 10,
    "images": [
      "https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Longines International Warranty",
      "Engineered with authentic Longines materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Longines. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 234,
    "name": "Tissot Gentleman Powermatic 80 Silicium Green Sunray Dial",
    "brand": "Tissot",
    "category": "Accessories",
    "subcategory": "Watches",
    "price": 795,
    "mrp": 1186.57,
    "rating": 4.8,
    "reviewCount": 3122,
    "inStock": true,
    "stockCount": 11,
    "images": [
      "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Tissot International Warranty",
      "Engineered with authentic Tissot materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Tissot. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 235,
    "name": "Citizen Tsuyosa Automatic Integrated Bracelet Yellow Dial",
    "brand": "Citizen",
    "category": "Accessories",
    "subcategory": "Watches",
    "price": 360,
    "mrp": 600,
    "rating": 4.3,
    "reviewCount": 3235,
    "inStock": true,
    "stockCount": 12,
    "images": [
      "https://images.unsplash.com/photo-1548171915-20b263308a38?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1548171915-20b263308a38?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1548171915-20b263308a38?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Citizen International Warranty",
      "Engineered with authentic Citizen materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Citizen. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 236,
    "name": "Swatch x Omega Bioceramic Moonswatch Mission to Mercury",
    "brand": "Swatch",
    "category": "Accessories",
    "subcategory": "Watches",
    "price": 270,
    "mrp": 325.3,
    "rating": 4.6,
    "reviewCount": 3348,
    "inStock": true,
    "stockCount": 13,
    "images": [
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Swatch International Warranty",
      "Engineered with authentic Swatch materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Swatch. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 237,
    "name": "Seiko Presage Cocktail Time 'Blue Moon' Open Heart Automatic",
    "brand": "Seiko",
    "category": "Accessories",
    "subcategory": "Watches",
    "price": 450,
    "mrp": 592.11,
    "rating": 4.9,
    "reviewCount": 3461,
    "inStock": true,
    "stockCount": 14,
    "images": [
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Seiko International Warranty",
      "Engineered with authentic Seiko materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Seiko. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 238,
    "name": "Victorinox Swiss Army I.N.O.X. Extreme Durability Rubber Watch",
    "brand": "Victorinox",
    "category": "Accessories",
    "subcategory": "Watches",
    "price": 550,
    "mrp": 797.1,
    "rating": 4.4,
    "reviewCount": 3574,
    "inStock": true,
    "stockCount": 15,
    "images": [
      "https://images.unsplash.com/photo-1539874754764-1a9cfa593123?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1539874754764-1a9cfa593123?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1539874754764-1a9cfa593123?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Victorinox International Warranty",
      "Engineered with authentic Victorinox materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Victorinox. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 239,
    "name": "Baltic Aquascaphe Classic Black Cream Vintage Diver Watch",
    "brand": "Baltic",
    "category": "Accessories",
    "subcategory": "Watches",
    "price": 680,
    "mrp": 1096.77,
    "rating": 4.7,
    "reviewCount": 3687,
    "inStock": true,
    "stockCount": 16,
    "images": [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Baltic International Warranty",
      "Engineered with authentic Baltic materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Baltic. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 240,
    "name": "Nixon Regulus Rugged Shockproof Military Digital Watch",
    "brand": "Nixon",
    "category": "Accessories",
    "subcategory": "Watches",
    "price": 175,
    "mrp": 205.88,
    "rating": 4.2,
    "reviewCount": 3800,
    "inStock": true,
    "stockCount": 2,
    "images": [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Nixon International Warranty",
      "Engineered with authentic Nixon materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Nixon. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 241,
    "name": "Laco Augsburg 42 Pilot Flieger Type A Automatic German Watch",
    "brand": "Laco",
    "category": "Accessories",
    "subcategory": "Watches",
    "price": 410,
    "mrp": 525.64,
    "rating": 4.5,
    "reviewCount": 3913,
    "inStock": true,
    "stockCount": 3,
    "images": [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Laco International Warranty",
      "Engineered with authentic Laco materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Laco. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 242,
    "name": "Certina DS Action Diver 38mm Powermatic 80 Titanium Watch",
    "brand": "Certina",
    "category": "Accessories",
    "subcategory": "Watches",
    "price": 880,
    "mrp": 1239.44,
    "rating": 4.8,
    "reviewCount": 126,
    "inStock": true,
    "stockCount": 4,
    "images": [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Certina International Warranty",
      "Engineered with authentic Certina materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Certina. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 243,
    "name": "Ray-Ban Meta Smart Glasses Wayfarer with AI & Ultra-Wide Camera",
    "brand": "Ray-Ban",
    "category": "Accessories",
    "subcategory": "Eyewear",
    "price": 299,
    "mrp": 467.19,
    "rating": 4.3,
    "reviewCount": 239,
    "inStock": true,
    "stockCount": 5,
    "images": [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Ray-Ban International Warranty",
      "Engineered with authentic Ray-Ban materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Ray-Ban. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 244,
    "name": "Ray-Ban Classic Aviator Polarized G-15 Green Gold Metal Frame",
    "brand": "Ray-Ban",
    "category": "Accessories",
    "subcategory": "Eyewear",
    "price": 185,
    "mrp": 324.56,
    "rating": 4.6,
    "reviewCount": 352,
    "inStock": true,
    "stockCount": 6,
    "images": [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Ray-Ban International Warranty",
      "Engineered with authentic Ray-Ban materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Ray-Ban. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 245,
    "name": "Ray-Ban Clubmaster Classic Browline Tortoise Shell Sunglasses",
    "brand": "Ray-Ban",
    "category": "Accessories",
    "subcategory": "Eyewear",
    "price": 163,
    "mrp": 203.75,
    "rating": 4.9,
    "reviewCount": 465,
    "inStock": true,
    "stockCount": 7,
    "images": [
      "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Ray-Ban International Warranty",
      "Engineered with authentic Ray-Ban materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Ray-Ban. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 246,
    "name": "Tom Ford Snowdon Polarized Wayfarer Sunglasses Shiny Black",
    "brand": "Tom Ford",
    "category": "Accessories",
    "subcategory": "Eyewear",
    "price": 445,
    "mrp": 609.59,
    "rating": 4.4,
    "reviewCount": 578,
    "inStock": true,
    "stockCount": 8,
    "images": [
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Tom Ford International Warranty",
      "Engineered with authentic Tom Ford materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Tom Ford. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 247,
    "name": "Oakley Radar EV Path Prizm Road Athletic Sports Sunglasses",
    "brand": "Oakley",
    "category": "Accessories",
    "subcategory": "Eyewear",
    "price": 215,
    "mrp": 325.76,
    "rating": 4.7,
    "reviewCount": 691,
    "inStock": false,
    "stockCount": 0,
    "images": [
      "https://images.unsplash.com/photo-1509695507044-107bfce42329?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1509695507044-107bfce42329?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1509695507044-107bfce42329?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Oakley International Warranty",
      "Engineered with authentic Oakley materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Oakley. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 248,
    "name": "Oakley Holbrook Polarized Prizm Sapphire Matte Black Frame",
    "brand": "Oakley",
    "category": "Accessories",
    "subcategory": "Eyewear",
    "price": 172,
    "mrp": 291.53,
    "rating": 4.2,
    "reviewCount": 804,
    "inStock": true,
    "stockCount": 10,
    "images": [
      "https://images.unsplash.com/photo-1577803645326-1a0463ae4b04?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1577803645326-1a0463ae4b04?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1577803645326-1a0463ae4b04?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Oakley International Warranty",
      "Engineered with authentic Oakley materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Oakley. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 249,
    "name": "Persol 714 Steve McQueen Folding Polarized Aviator Sunglasses",
    "brand": "Persol",
    "category": "Accessories",
    "subcategory": "Eyewear",
    "price": 395,
    "mrp": 481.71,
    "rating": 4.5,
    "reviewCount": 917,
    "inStock": true,
    "stockCount": 11,
    "images": [
      "https://images.unsplash.com/photo-1589782188379-340b430a7018?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1589782188379-340b430a7018?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1589782188379-340b430a7018?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Persol International Warranty",
      "Engineered with authentic Persol materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Persol. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 250,
    "name": "Gentle Monster Her 01 Oversized Square Bold Acetate Frames",
    "brand": "Gentle Monster",
    "category": "Accessories",
    "subcategory": "Eyewear",
    "price": 280,
    "mrp": 373.33,
    "rating": 4.8,
    "reviewCount": 1030,
    "inStock": true,
    "stockCount": 12,
    "images": [
      "https://images.unsplash.com/photo-1582142839970-2b1e427d143c?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1582142839970-2b1e427d143c?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1582142839970-2b1e427d143c?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Gentle Monster International Warranty",
      "Engineered with authentic Gentle Monster materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Gentle Monster. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 251,
    "name": "Oliver Peoples Gregory Peck Round Phantos Acetate Eyeglasses",
    "brand": "Oliver Peoples",
    "category": "Accessories",
    "subcategory": "Eyewear",
    "price": 410,
    "mrp": 602.94,
    "rating": 4.3,
    "reviewCount": 1143,
    "inStock": true,
    "stockCount": 13,
    "images": [
      "https://images.unsplash.com/photo-1516575334481-88fd17427494?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1516575334481-88fd17427494?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1516575334481-88fd17427494?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Oliver Peoples International Warranty",
      "Engineered with authentic Oliver Peoples materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Oliver Peoples. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 252,
    "name": "Prada Linea Rossa Lifestyle Wrap Polarized Sports Sunglasses",
    "brand": "Prada",
    "category": "Accessories",
    "subcategory": "Eyewear",
    "price": 340,
    "mrp": 557.38,
    "rating": 4.6,
    "reviewCount": 1256,
    "inStock": true,
    "stockCount": 14,
    "images": [
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Prada International Warranty",
      "Engineered with authentic Prada materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Prada. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 253,
    "name": "Maui Jim Ho'okipa PolarizedPlus2 Rimless Sunglasses Tortoise",
    "brand": "Maui Jim",
    "category": "Accessories",
    "subcategory": "Eyewear",
    "price": 199,
    "mrp": 236.9,
    "rating": 4.9,
    "reviewCount": 1369,
    "inStock": true,
    "stockCount": 15,
    "images": [
      "https://images.unsplash.com/photo-1504198453319-5ce911bafc46?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1504198453319-5ce911bafc46?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1504198453319-5ce911bafc46?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Maui Jim International Warranty",
      "Engineered with authentic Maui Jim materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Maui Jim. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 254,
    "name": "Carrera Champion Pilot Aviator Acetate Sunglasses Black/Red",
    "brand": "Carrera",
    "category": "Accessories",
    "subcategory": "Eyewear",
    "price": 149,
    "mrp": 193.51,
    "rating": 4.4,
    "reviewCount": 1482,
    "inStock": true,
    "stockCount": 16,
    "images": [
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Carrera International Warranty",
      "Engineered with authentic Carrera materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Carrera. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 255,
    "name": "Gucci Web Stripe Rectangular Sunglasses Havana Acetate",
    "brand": "Gucci",
    "category": "Accessories",
    "subcategory": "Eyewear",
    "price": 420,
    "mrp": 600,
    "rating": 4.7,
    "reviewCount": 1595,
    "inStock": true,
    "stockCount": 2,
    "images": [
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Gucci International Warranty",
      "Engineered with authentic Gucci materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Gucci. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 256,
    "name": "Saint Laurent SL 276 Mica Cat-Eye Statement Sunglasses",
    "brand": "Saint Laurent",
    "category": "Accessories",
    "subcategory": "Eyewear",
    "price": 420,
    "mrp": 666.67,
    "rating": 4.2,
    "reviewCount": 1708,
    "inStock": true,
    "stockCount": 3,
    "images": [
      "https://images.unsplash.com/photo-1570222094114-8054a817e56b?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1570222094114-8054a817e56b?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1570222094114-8054a817e56b?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Saint Laurent International Warranty",
      "Engineered with authentic Saint Laurent materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Saint Laurent. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 257,
    "name": "Ray-Ban Round Metal Classic Gold/Crystal Green RB3447",
    "brand": "Ray-Ban",
    "category": "Accessories",
    "subcategory": "Eyewear",
    "price": 163,
    "mrp": 291.07,
    "rating": 4.5,
    "reviewCount": 1821,
    "inStock": true,
    "stockCount": 4,
    "images": [
      "https://images.unsplash.com/photo-1584043720399-4655ba610738?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1584043720399-4655ba610738?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1584043720399-4655ba610738?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Ray-Ban International Warranty",
      "Engineered with authentic Ray-Ban materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Ray-Ban. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 258,
    "name": "Moscot Lemtosh Iconic Round Acetate Frames Blonde",
    "brand": "Moscot",
    "category": "Accessories",
    "subcategory": "Eyewear",
    "price": 340,
    "mrp": 430.38,
    "rating": 4.8,
    "reviewCount": 1934,
    "inStock": true,
    "stockCount": 5,
    "images": [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Moscot International Warranty",
      "Engineered with authentic Moscot materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Moscot. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 259,
    "name": "Smith Optics Lowdown 2 ChromaPop Polarized Sunglasses",
    "brand": "Smith",
    "category": "Accessories",
    "subcategory": "Eyewear",
    "price": 189,
    "mrp": 262.5,
    "rating": 4.3,
    "reviewCount": 2047,
    "inStock": true,
    "stockCount": 6,
    "images": [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Smith International Warranty",
      "Engineered with authentic Smith materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Smith. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 260,
    "name": "Goodr OGs Non-Slip Polarized Running Sunglasses (No Bounce)",
    "brand": "Goodr",
    "category": "Accessories",
    "subcategory": "Eyewear",
    "price": 25,
    "mrp": 38.46,
    "rating": 4.6,
    "reviewCount": 2160,
    "inStock": true,
    "stockCount": 7,
    "images": [
      "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Goodr International Warranty",
      "Engineered with authentic Goodr materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Goodr. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 261,
    "name": "Dita Flight.006 Titanium Aviator Luxury Japanese Sunglasses",
    "brand": "Dita",
    "category": "Accessories",
    "subcategory": "Eyewear",
    "price": 675,
    "mrp": 1163.79,
    "rating": 4.9,
    "reviewCount": 2273,
    "inStock": true,
    "stockCount": 8,
    "images": [
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Dita International Warranty",
      "Engineered with authentic Dita materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Dita. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 262,
    "name": "Costa Del Mar Fantail 580G Polarized Angler Sunglasses Glass",
    "brand": "Costa Del Mar",
    "category": "Accessories",
    "subcategory": "Eyewear",
    "price": 274,
    "mrp": 338.27,
    "rating": 4.4,
    "reviewCount": 2386,
    "inStock": true,
    "stockCount": 9,
    "images": [
      "https://images.unsplash.com/photo-1509695507044-107bfce42329?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1509695507044-107bfce42329?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1509695507044-107bfce42329?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Costa Del Mar International Warranty",
      "Engineered with authentic Costa Del Mar materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Costa Del Mar. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 263,
    "name": "Bellroy Slim Sleeve Premium Eco-Tanned Leather Card Wallet",
    "brand": "Bellroy",
    "category": "Accessories",
    "subcategory": "Wallets",
    "price": 79,
    "mrp": 106.76,
    "rating": 4.7,
    "reviewCount": 2499,
    "inStock": true,
    "stockCount": 10,
    "images": [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Bellroy International Warranty",
      "Engineered with authentic Bellroy materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Bellroy. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 264,
    "name": "The Ridge Titanium RFID Blocking Minimalist Front Pocket Wallet",
    "brand": "The Ridge",
    "category": "Accessories",
    "subcategory": "Wallets",
    "price": 110,
    "mrp": 164.18,
    "rating": 4.2,
    "reviewCount": 2612,
    "inStock": true,
    "stockCount": 11,
    "images": [
      "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year The Ridge International Warranty",
      "Engineered with authentic The Ridge materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from The Ridge. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 265,
    "name": "Secrid Slimwallet Matte Black RFID Protected Cardprotector",
    "brand": "Secrid",
    "category": "Accessories",
    "subcategory": "Wallets",
    "price": 85,
    "mrp": 141.67,
    "rating": 4.5,
    "reviewCount": 2725,
    "inStock": true,
    "stockCount": 12,
    "images": [
      "https://images.unsplash.com/photo-1517254456580-89ac15881aa1?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517254456580-89ac15881aa1?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1517254456580-89ac15881aa1?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Secrid International Warranty",
      "Engineered with authentic Secrid materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Secrid. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 266,
    "name": "Montblanc Sartorial Full-Grain Leather 6-Card Pocket Wallet",
    "brand": "Montblanc",
    "category": "Accessories",
    "subcategory": "Wallets",
    "price": 385,
    "mrp": 463.86,
    "rating": 4.8,
    "reviewCount": 2838,
    "inStock": false,
    "stockCount": 0,
    "images": [
      "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Montblanc International Warranty",
      "Engineered with authentic Montblanc materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Montblanc. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 267,
    "name": "Apple Leather Wallet with MagSafe & Find My Support Saddle",
    "brand": "Apple",
    "category": "Accessories",
    "subcategory": "Wallets",
    "price": 59,
    "mrp": 77.63,
    "rating": 4.3,
    "reviewCount": 2951,
    "inStock": true,
    "stockCount": 14,
    "images": [
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Apple International Warranty",
      "Engineered with authentic Apple materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Apple. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 268,
    "name": "Ekster Parliament Smart Bi-Fold Wallet with Quick Card Trigger",
    "brand": "Ekster",
    "category": "Accessories",
    "subcategory": "Wallets",
    "price": 89,
    "mrp": 128.99,
    "rating": 4.6,
    "reviewCount": 3064,
    "inStock": true,
    "stockCount": 15,
    "images": [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Ekster International Warranty",
      "Engineered with authentic Ekster materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Ekster. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 269,
    "name": "Tanner Goods Journeyman Natural Tooling Leather Card Holder",
    "brand": "Tanner Goods",
    "category": "Accessories",
    "subcategory": "Wallets",
    "price": 75,
    "mrp": 120.97,
    "rating": 4.9,
    "reviewCount": 3177,
    "inStock": true,
    "stockCount": 16,
    "images": [
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Tanner Goods International Warranty",
      "Engineered with authentic Tanner Goods materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Tanner Goods. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 270,
    "name": "Bottega Veneta Intrecciato Weave Bi-Fold Calfskin Wallet",
    "brand": "Bottega Veneta",
    "category": "Accessories",
    "subcategory": "Wallets",
    "price": 590,
    "mrp": 694.12,
    "rating": 4.4,
    "reviewCount": 3290,
    "inStock": true,
    "stockCount": 2,
    "images": [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Bottega Veneta International Warranty",
      "Engineered with authentic Bottega Veneta materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Bottega Veneta. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 271,
    "name": "Trayvax Armored Summit Minimalist Tactical Front Wallet",
    "brand": "Trayvax",
    "category": "Accessories",
    "subcategory": "Wallets",
    "price": 45,
    "mrp": 57.69,
    "rating": 4.7,
    "reviewCount": 3403,
    "inStock": true,
    "stockCount": 3,
    "images": [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Trayvax International Warranty",
      "Engineered with authentic Trayvax materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Trayvax. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 272,
    "name": "Herschel Charlie RFID Classic Fabric Slim Cardholder",
    "brand": "Herschel",
    "category": "Accessories",
    "subcategory": "Wallets",
    "price": 25,
    "mrp": 35.21,
    "rating": 4.2,
    "reviewCount": 3516,
    "inStock": true,
    "stockCount": 4,
    "images": [
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Herschel International Warranty",
      "Engineered with authentic Herschel materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Herschel. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 273,
    "name": "Fossil Derrick RFID Leather Bifold Wallet with Flip ID",
    "brand": "Fossil",
    "category": "Accessories",
    "subcategory": "Wallets",
    "price": 55,
    "mrp": 85.94,
    "rating": 4.5,
    "reviewCount": 3629,
    "inStock": true,
    "stockCount": 5,
    "images": [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Fossil International Warranty",
      "Engineered with authentic Fossil materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Fossil. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 274,
    "name": "Dango M1 Maverick Tactical Billet Aluminum Rail Wallet",
    "brand": "Dango",
    "category": "Accessories",
    "subcategory": "Wallets",
    "price": 109,
    "mrp": 191.23,
    "rating": 4.8,
    "reviewCount": 3742,
    "inStock": true,
    "stockCount": 6,
    "images": [
      "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Dango International Warranty",
      "Engineered with authentic Dango materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Dango. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 275,
    "name": "Anson Calder Solid Brass Titanium Coated Money Clip",
    "brand": "Anson Calder",
    "category": "Accessories",
    "subcategory": "Wallets",
    "price": 65,
    "mrp": 81.25,
    "rating": 4.3,
    "reviewCount": 3855,
    "inStock": true,
    "stockCount": 7,
    "images": [
      "https://images.unsplash.com/photo-1517254456580-89ac15881aa1?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517254456580-89ac15881aa1?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1517254456580-89ac15881aa1?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Anson Calder International Warranty",
      "Engineered with authentic Anson Calder materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Anson Calder. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 276,
    "name": "Coach Signature Canvas Compact ID Wallet with Bill Compartment",
    "brand": "Coach",
    "category": "Accessories",
    "subcategory": "Wallets",
    "price": 150,
    "mrp": 205.48,
    "rating": 4.6,
    "reviewCount": 3968,
    "inStock": true,
    "stockCount": 8,
    "images": [
      "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Coach International Warranty",
      "Engineered with authentic Coach materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Coach. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 277,
    "name": "Bellroy Card Pocket Zippered Leather Coin & Card Travel Pouch",
    "brand": "Bellroy",
    "category": "Accessories",
    "subcategory": "Wallets",
    "price": 59,
    "mrp": 89.39,
    "rating": 4.9,
    "reviewCount": 181,
    "inStock": true,
    "stockCount": 9,
    "images": [
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Bellroy International Warranty",
      "Engineered with authentic Bellroy materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Bellroy. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 278,
    "name": "Goyard Saint Sulpice Classic Chevron Printed Cardholder",
    "brand": "Goyard",
    "category": "Accessories",
    "subcategory": "Wallets",
    "price": 480,
    "mrp": 813.56,
    "rating": 4.4,
    "reviewCount": 294,
    "inStock": true,
    "stockCount": 10,
    "images": [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Goyard International Warranty",
      "Engineered with authentic Goyard materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Goyard. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 279,
    "name": "Peak Design Everyday Backpack 20L Weatherproof Laptop Bag",
    "brand": "Peak Design",
    "category": "Accessories",
    "subcategory": "Bags",
    "price": 279.95,
    "mrp": 341.4,
    "rating": 4.7,
    "reviewCount": 407,
    "inStock": true,
    "stockCount": 11,
    "images": [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Peak Design International Warranty",
      "Engineered with authentic Peak Design materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Peak Design. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 280,
    "name": "Tumi Alpha 3 Continental Dual Access 4-Wheel Carry-On Suitcase",
    "brand": "Tumi",
    "category": "Accessories",
    "subcategory": "Bags",
    "price": 895,
    "mrp": 1193.33,
    "rating": 4.2,
    "reviewCount": 520,
    "inStock": true,
    "stockCount": 12,
    "images": [
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Tumi International Warranty",
      "Engineered with authentic Tumi materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Tumi. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 281,
    "name": "Herschel Little America Classic Mountaineering Flap Backpack",
    "brand": "Herschel",
    "category": "Accessories",
    "subcategory": "Bags",
    "price": 120,
    "mrp": 176.47,
    "rating": 4.5,
    "reviewCount": 633,
    "inStock": true,
    "stockCount": 13,
    "images": [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Herschel International Warranty",
      "Engineered with authentic Herschel materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Herschel. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 282,
    "name": "Aer Day Pack 2 Minimalist Tech Work Backpack Cordura Ballistic",
    "brand": "Aer",
    "category": "Accessories",
    "subcategory": "Bags",
    "price": 149,
    "mrp": 244.26,
    "rating": 4.8,
    "reviewCount": 746,
    "inStock": true,
    "stockCount": 14,
    "images": [
      "https://images.unsplash.com/photo-1547949003-a4e99f43ae55?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1547949003-a4e99f43ae55?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1547949003-a4e99f43ae55?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Aer International Warranty",
      "Engineered with authentic Aer materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Aer. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 283,
    "name": "Filson Rugged Twill Medium Duffle Bag Water-Repellent Tan",
    "brand": "Filson",
    "category": "Accessories",
    "subcategory": "Bags",
    "price": 495,
    "mrp": 589.29,
    "rating": 4.3,
    "reviewCount": 859,
    "inStock": true,
    "stockCount": 15,
    "images": [
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Filson International Warranty",
      "Engineered with authentic Filson materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Filson. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 284,
    "name": "Bellroy Transit Workpack 20L Recycled Woven Commuter Bag",
    "brand": "Bellroy",
    "category": "Accessories",
    "subcategory": "Bags",
    "price": 199,
    "mrp": 258.44,
    "rating": 4.6,
    "reviewCount": 972,
    "inStock": true,
    "stockCount": 16,
    "images": [
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Bellroy International Warranty",
      "Engineered with authentic Bellroy materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Bellroy. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 285,
    "name": "Coach Sullivan Smooth Leather Crossbody Messenger Flight Bag",
    "brand": "Coach",
    "category": "Accessories",
    "subcategory": "Bags",
    "price": 275,
    "mrp": 392.86,
    "rating": 4.9,
    "reviewCount": 1085,
    "inStock": false,
    "stockCount": 0,
    "images": [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Coach International Warranty",
      "Engineered with authentic Coach materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Coach. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 286,
    "name": "Nomatic Travel Pack 20L Expandable 30L Water Resistant Bag",
    "brand": "Nomatic",
    "category": "Accessories",
    "subcategory": "Bags",
    "price": 279.99,
    "mrp": 444.43,
    "rating": 4.4,
    "reviewCount": 1198,
    "inStock": true,
    "stockCount": 3,
    "images": [
      "https://images.unsplash.com/photo-1577733966973-d680bffd2e80?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1577733966973-d680bffd2e80?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1577733966973-d680bffd2e80?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Nomatic International Warranty",
      "Engineered with authentic Nomatic materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Nomatic. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 287,
    "name": "Patagonia Black Hole 25L Durable Weatherproof Daypack",
    "brand": "Patagonia",
    "category": "Accessories",
    "subcategory": "Bags",
    "price": 149,
    "mrp": 266.07,
    "rating": 4.7,
    "reviewCount": 1311,
    "inStock": true,
    "stockCount": 4,
    "images": [
      "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Patagonia International Warranty",
      "Engineered with authentic Patagonia materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Patagonia. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 288,
    "name": "Rimowa Essential Cabin Lightweight Polycarbonate Suitcase Gloss",
    "brand": "Rimowa",
    "category": "Accessories",
    "subcategory": "Bags",
    "price": 875,
    "mrp": 1107.59,
    "rating": 4.2,
    "reviewCount": 1424,
    "inStock": true,
    "stockCount": 5,
    "images": [
      "https://images.unsplash.com/photo-1546938576-65b7aa0d7182?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1546938576-65b7aa0d7182?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1546938576-65b7aa0d7182?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Rimowa International Warranty",
      "Engineered with authentic Rimowa materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Rimowa. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 289,
    "name": "Fjallraven Kanken Classic Durable Vinylon-F School Daypack",
    "brand": "Fjallraven",
    "category": "Accessories",
    "subcategory": "Bags",
    "price": 90,
    "mrp": 125,
    "rating": 4.5,
    "reviewCount": 1537,
    "inStock": true,
    "stockCount": 6,
    "images": [
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Fjallraven International Warranty",
      "Engineered with authentic Fjallraven materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Fjallraven. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 290,
    "name": "Osprey Farpoint 40 Men's Travel Pack Carry-On Harness Bag",
    "brand": "Osprey",
    "category": "Accessories",
    "subcategory": "Bags",
    "price": 185,
    "mrp": 284.62,
    "rating": 4.8,
    "reviewCount": 1650,
    "inStock": true,
    "stockCount": 7,
    "images": [
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Osprey International Warranty",
      "Engineered with authentic Osprey materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Osprey. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 291,
    "name": "Longchamp Le Pliage Original Nylon Large Shoulder Tote Bag",
    "brand": "Longchamp",
    "category": "Accessories",
    "subcategory": "Bags",
    "price": 155,
    "mrp": 267.24,
    "rating": 4.3,
    "reviewCount": 1763,
    "inStock": true,
    "stockCount": 8,
    "images": [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Longchamp International Warranty",
      "Engineered with authentic Longchamp materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Longchamp. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 292,
    "name": "Dagne Dover Landon Neoprene Medium Gym & Weekend Duffle Bag",
    "brand": "Dagne Dover",
    "category": "Accessories",
    "subcategory": "Bags",
    "price": 185,
    "mrp": 228.4,
    "rating": 4.6,
    "reviewCount": 1876,
    "inStock": true,
    "stockCount": 9,
    "images": [
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Dagne Dover International Warranty",
      "Engineered with authentic Dagne Dover materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Dagne Dover. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 293,
    "name": "Samsonite Freeform Hardside Expandable 28-inch Checked Luggage",
    "brand": "Samsonite",
    "category": "Accessories",
    "subcategory": "Bags",
    "price": 199.99,
    "mrp": 270.26,
    "rating": 4.9,
    "reviewCount": 1989,
    "inStock": true,
    "stockCount": 10,
    "images": [
      "https://images.unsplash.com/photo-1544816155-12df9643f363?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1544816155-12df9643f363?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Samsonite International Warranty",
      "Engineered with authentic Samsonite materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Samsonite. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 294,
    "name": "Carhartt Legacy Standard Work Backpack with Padded Sleeve",
    "brand": "Carhartt",
    "category": "Accessories",
    "subcategory": "Bags",
    "price": 79.99,
    "mrp": 119.39,
    "rating": 4.4,
    "reviewCount": 2102,
    "inStock": true,
    "stockCount": 11,
    "images": [
      "https://images.unsplash.com/photo-1547949003-a4e99f43ae55?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1547949003-a4e99f43ae55?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1547949003-a4e99f43ae55?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Carhartt International Warranty",
      "Engineered with authentic Carhartt materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Carhartt. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 295,
    "name": "Lululemon Everywhere 1L Water-Resistant Crossbody Belt Bag",
    "brand": "Lululemon",
    "category": "Accessories",
    "subcategory": "Bags",
    "price": 38,
    "mrp": 63.33,
    "rating": 4.7,
    "reviewCount": 2215,
    "inStock": true,
    "stockCount": 12,
    "images": [
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Lululemon International Warranty",
      "Engineered with authentic Lululemon materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Lululemon. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 296,
    "name": "Bellroy Tokyo Tote 15L Padded Laptop Water-Resistant Shoulder",
    "brand": "Bellroy",
    "category": "Accessories",
    "subcategory": "Bags",
    "price": 145,
    "mrp": 174.7,
    "rating": 4.2,
    "reviewCount": 2328,
    "inStock": true,
    "stockCount": 13,
    "images": [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Bellroy International Warranty",
      "Engineered with authentic Bellroy materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Bellroy. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 297,
    "name": "Miansai Orson Anchor Nautical Rope Wrap Bracelet Silver",
    "brand": "Miansai",
    "category": "Accessories",
    "subcategory": "Jewelry",
    "price": 95,
    "mrp": 125,
    "rating": 4.5,
    "reviewCount": 2441,
    "inStock": true,
    "stockCount": 14,
    "images": [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Miansai International Warranty",
      "Engineered with authentic Miansai materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Miansai. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 298,
    "name": "Vitaly Riot Heavyweight Stainless Steel Industrial Cuban Chain",
    "brand": "Vitaly",
    "category": "Accessories",
    "subcategory": "Jewelry",
    "price": 110,
    "mrp": 159.42,
    "rating": 4.8,
    "reviewCount": 2554,
    "inStock": true,
    "stockCount": 15,
    "images": [
      "https://images.unsplash.com/photo-1611591475816-1f6920d2d312?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1611591475816-1f6920d2d312?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1611591475816-1f6920d2d312?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Vitaly International Warranty",
      "Engineered with authentic Vitaly materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Vitaly. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 299,
    "name": "Mejuri 14k Solid Yellow Gold Thin Stacking Band Ring",
    "brand": "Mejuri",
    "category": "Accessories",
    "subcategory": "Jewelry",
    "price": 128,
    "mrp": 206.45,
    "rating": 4.3,
    "reviewCount": 2667,
    "inStock": true,
    "stockCount": 16,
    "images": [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Mejuri International Warranty",
      "Engineered with authentic Mejuri materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Mejuri. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 300,
    "name": "Craighill Wilson Brushed Solid Brass Minimalist Ring",
    "brand": "Craighill",
    "category": "Accessories",
    "subcategory": "Jewelry",
    "price": 48,
    "mrp": 56.47,
    "rating": 4.6,
    "reviewCount": 2780,
    "inStock": true,
    "stockCount": 2,
    "images": [
      "https://images.unsplash.com/photo-1602751584552-b9e30a59929d?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1602751584552-b9e30a59929d?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1602751584552-b9e30a59929d?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Craighill International Warranty",
      "Engineered with authentic Craighill materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Craighill. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 301,
    "name": "David Yurman Streamline Titanium Cuff Bracelet in Silver",
    "brand": "David Yurman",
    "category": "Accessories",
    "subcategory": "Jewelry",
    "price": 450,
    "mrp": 576.92,
    "rating": 4.9,
    "reviewCount": 2893,
    "inStock": true,
    "stockCount": 3,
    "images": [
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year David Yurman International Warranty",
      "Engineered with authentic David Yurman materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from David Yurman. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 302,
    "name": "Clocks and Colours Stainless Steel Heavy Skull Signet Ring",
    "brand": "Clocks and Colours",
    "category": "Accessories",
    "subcategory": "Jewelry",
    "price": 130,
    "mrp": 183.1,
    "rating": 4.4,
    "reviewCount": 3006,
    "inStock": true,
    "stockCount": 4,
    "images": [
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Clocks and Colours International Warranty",
      "Engineered with authentic Clocks and Colours materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Clocks and Colours. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 303,
    "name": "Thomas Sabo Rebel at Heart Sterling Silver Cross Pendant",
    "brand": "Thomas Sabo",
    "category": "Accessories",
    "subcategory": "Jewelry",
    "price": 198,
    "mrp": 309.38,
    "rating": 4.7,
    "reviewCount": 3119,
    "inStock": true,
    "stockCount": 5,
    "images": [
      "https://images.unsplash.com/photo-1600003014791-c58288880633?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600003014791-c58288880633?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1600003014791-c58288880633?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Thomas Sabo International Warranty",
      "Engineered with authentic Thomas Sabo materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Thomas Sabo. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 304,
    "name": "King Baby Studio Black Lava Bead & Silver Crown Bracelet",
    "brand": "King Baby",
    "category": "Accessories",
    "subcategory": "Jewelry",
    "price": 210,
    "mrp": 368.42,
    "rating": 4.2,
    "reviewCount": 3232,
    "inStock": false,
    "stockCount": 0,
    "images": [
      "https://images.unsplash.com/photo-1611591475816-1f6920d2d312?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1611591475816-1f6920d2d312?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1611591475816-1f6920d2d312?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year King Baby International Warranty",
      "Engineered with authentic King Baby materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from King Baby. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 305,
    "name": "Vitaly Safeguard Heavy Industrial Padlock Chain Necklace",
    "brand": "Vitaly",
    "category": "Accessories",
    "subcategory": "Jewelry",
    "price": 115,
    "mrp": 143.75,
    "rating": 4.5,
    "reviewCount": 3345,
    "inStock": true,
    "stockCount": 7,
    "images": [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Vitaly International Warranty",
      "Engineered with authentic Vitaly materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Vitaly. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 306,
    "name": "Mejuri Round Topaz Floating Necklace in 14k Solid Gold",
    "brand": "Mejuri",
    "category": "Accessories",
    "subcategory": "Jewelry",
    "price": 298,
    "mrp": 408.22,
    "rating": 4.8,
    "reviewCount": 3458,
    "inStock": true,
    "stockCount": 8,
    "images": [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Mejuri International Warranty",
      "Engineered with authentic Mejuri materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Mejuri. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 307,
    "name": "Tateossian London Mechanical Gear Functional Rotating Cufflinks",
    "brand": "Tateossian",
    "category": "Accessories",
    "subcategory": "Jewelry",
    "price": 245,
    "mrp": 371.21,
    "rating": 4.3,
    "reviewCount": 3571,
    "inStock": true,
    "stockCount": 9,
    "images": [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Tateossian International Warranty",
      "Engineered with authentic Tateossian materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Tateossian. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 308,
    "name": "Montblanc Meisterstück Round Stainless Steel Black Onyx Cufflinks",
    "brand": "Montblanc",
    "category": "Accessories",
    "subcategory": "Jewelry",
    "price": 345,
    "mrp": 584.75,
    "rating": 4.6,
    "reviewCount": 3684,
    "inStock": true,
    "stockCount": 10,
    "images": [
      "https://images.unsplash.com/photo-1589782188379-340b430a7018?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1589782188379-340b430a7018?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1589782188379-340b430a7018?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Montblanc International Warranty",
      "Engineered with authentic Montblanc materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Montblanc. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 309,
    "name": "Barton Quick Release Top Grain Leather Watch Strap Tan",
    "brand": "Barton",
    "category": "Accessories",
    "subcategory": "Jewelry",
    "price": 32,
    "mrp": 39.02,
    "rating": 4.9,
    "reviewCount": 3797,
    "inStock": true,
    "stockCount": 11,
    "images": [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Barton International Warranty",
      "Engineered with authentic Barton materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Barton. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 310,
    "name": "Nomad Rugged Horween Leather Apple Watch Band Titanium Hardware",
    "brand": "Nomad",
    "category": "Accessories",
    "subcategory": "Jewelry",
    "price": 79.95,
    "mrp": 106.6,
    "rating": 4.4,
    "reviewCount": 3910,
    "inStock": true,
    "stockCount": 12,
    "images": [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Nomad International Warranty",
      "Engineered with authentic Nomad materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Nomad. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 311,
    "name": "Montblanc Reversible Horseshoe Buckle Black/Brown Leather Belt",
    "brand": "Montblanc",
    "category": "Accessories",
    "subcategory": "Belts",
    "price": 335,
    "mrp": 492.65,
    "rating": 4.7,
    "reviewCount": 123,
    "inStock": true,
    "stockCount": 13,
    "images": [
      "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Montblanc International Warranty",
      "Engineered with authentic Montblanc materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Montblanc. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 312,
    "name": "Gucci Interlocking G Leather Casual Jeans Belt Smooth Black",
    "brand": "Gucci",
    "category": "Accessories",
    "subcategory": "Belts",
    "price": 490,
    "mrp": 803.28,
    "rating": 4.2,
    "reviewCount": 236,
    "inStock": true,
    "stockCount": 14,
    "images": [
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Gucci International Warranty",
      "Engineered with authentic Gucci materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Gucci. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 313,
    "name": "Ferragamo Gancini Reversible & Adjustable Italian Calfskin Belt",
    "brand": "Ferragamo",
    "category": "Accessories",
    "subcategory": "Belts",
    "price": 530,
    "mrp": 630.95,
    "rating": 4.5,
    "reviewCount": 349,
    "inStock": true,
    "stockCount": 15,
    "images": [
      "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Ferragamo International Warranty",
      "Engineered with authentic Ferragamo materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Ferragamo. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 314,
    "name": "New Era 59FIFTY New York Yankees Official MLB Fitted Cap",
    "brand": "New Era",
    "category": "Accessories",
    "subcategory": "Caps",
    "price": 43.99,
    "mrp": 57.13,
    "rating": 4.8,
    "reviewCount": 462,
    "inStock": true,
    "stockCount": 16,
    "images": [
      "https://images.unsplash.com/photo-1534215754734-18e53d13c670?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1534215754734-18e53d13c670?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1534215754734-18e53d13c670?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year New Era International Warranty",
      "Engineered with authentic New Era materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from New Era. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 315,
    "name": "Carhartt Acrylic Knit Ribbed Watch Cuffed Beanie Heather Grey",
    "brand": "Carhartt",
    "category": "Accessories",
    "subcategory": "Caps",
    "price": 19.99,
    "mrp": 28.56,
    "rating": 4.3,
    "reviewCount": 575,
    "inStock": true,
    "stockCount": 2,
    "images": [
      "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Carhartt International Warranty",
      "Engineered with authentic Carhartt materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Carhartt. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 316,
    "name": "Polo Ralph Lauren Classic Chino Cotton Baseball Cap Pony",
    "brand": "Ralph Lauren",
    "category": "Accessories",
    "subcategory": "Caps",
    "price": 49.5,
    "mrp": 78.57,
    "rating": 4.6,
    "reviewCount": 688,
    "inStock": true,
    "stockCount": 3,
    "images": [
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Ralph Lauren International Warranty",
      "Engineered with authentic Ralph Lauren materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Ralph Lauren. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 317,
    "name": "Filson Tin Cloth Waxed Water-Repellent Low Profile Packing Cap",
    "brand": "Filson",
    "category": "Accessories",
    "subcategory": "Caps",
    "price": 45,
    "mrp": 80.36,
    "rating": 4.9,
    "reviewCount": 801,
    "inStock": true,
    "stockCount": 4,
    "images": [
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Filson International Warranty",
      "Engineered with authentic Filson materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Filson. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 318,
    "name": "Stussy Stock Low Pro Unstructured Twill Strapback Dad Cap",
    "brand": "Stussy",
    "category": "Accessories",
    "subcategory": "Caps",
    "price": 45,
    "mrp": 56.96,
    "rating": 4.4,
    "reviewCount": 914,
    "inStock": true,
    "stockCount": 5,
    "images": [
      "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Stussy International Warranty",
      "Engineered with authentic Stussy materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Stussy. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 319,
    "name": "Arc'teryx Bird Word Toque Warm Breathable Ski Beanie Hat",
    "brand": "Arc'teryx",
    "category": "Accessories",
    "subcategory": "Caps",
    "price": 45,
    "mrp": 62.5,
    "rating": 4.7,
    "reviewCount": 1027,
    "inStock": true,
    "stockCount": 6,
    "images": [
      "https://images.unsplash.com/photo-1534215754734-18e53d13c670?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1534215754734-18e53d13c670?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1534215754734-18e53d13c670?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Arc'teryx International Warranty",
      "Engineered with authentic Arc'teryx materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Arc'teryx. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 320,
    "name": "Alo Yoga Off-Duty Embroidered Cotton Canvas Baseball Cap",
    "brand": "Alo Yoga",
    "category": "Accessories",
    "subcategory": "Caps",
    "price": 38,
    "mrp": 58.46,
    "rating": 4.2,
    "reviewCount": 1140,
    "inStock": true,
    "stockCount": 7,
    "images": [
      "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Alo Yoga International Warranty",
      "Engineered with authentic Alo Yoga materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Alo Yoga. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 321,
    "name": "Stetson Open Road Royal Deluxe Fur Felt Western Fedora Hat",
    "brand": "Stetson",
    "category": "Accessories",
    "subcategory": "Caps",
    "price": 265,
    "mrp": 456.9,
    "rating": 4.5,
    "reviewCount": 1253,
    "inStock": true,
    "stockCount": 8,
    "images": [
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Stetson International Warranty",
      "Engineered with authentic Stetson materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Stetson. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 322,
    "name": "Patagonia Fitz Roy Icon Trad Cotton Twill Ball Cap Low Crown",
    "brand": "Patagonia",
    "category": "Accessories",
    "subcategory": "Caps",
    "price": 39,
    "mrp": 48.15,
    "rating": 4.8,
    "reviewCount": 1366,
    "inStock": true,
    "stockCount": 9,
    "images": [
      "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1624222247344-550fb60583dc?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Patagonia International Warranty",
      "Engineered with authentic Patagonia materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Patagonia. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 323,
    "name": "Meisterstück Classique Platinum-Coated Ballpoint Luxury Pen",
    "brand": "Montblanc",
    "category": "Accessories",
    "subcategory": "EDC",
    "price": 495,
    "mrp": 668.92,
    "rating": 4.3,
    "reviewCount": 1479,
    "inStock": false,
    "stockCount": 0,
    "images": [
      "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Montblanc International Warranty",
      "Engineered with authentic Montblanc materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Montblanc. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 324,
    "name": "Lamy 2000 Fiberglass Makrolon Piston Fountain Pen 14K Gold",
    "brand": "Lamy",
    "category": "Accessories",
    "subcategory": "EDC",
    "price": 219,
    "mrp": 326.87,
    "rating": 4.6,
    "reviewCount": 1592,
    "inStock": true,
    "stockCount": 11,
    "images": [
      "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Lamy International Warranty",
      "Engineered with authentic Lamy materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Lamy. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 325,
    "name": "Victorinox Swiss Army CyberTool M Multi-Tool Pocket Knife",
    "brand": "Victorinox",
    "category": "Accessories",
    "subcategory": "EDC",
    "price": 135,
    "mrp": 225,
    "rating": 4.9,
    "reviewCount": 1705,
    "inStock": true,
    "stockCount": 12,
    "images": [
      "https://images.unsplash.com/photo-1514989940748-028bb46c7f99?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1514989940748-028bb46c7f99?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1514989940748-028bb46c7f99?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Victorinox International Warranty",
      "Engineered with authentic Victorinox materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Victorinox. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 326,
    "name": "Leatherman Wave Plus Multi-Tool with Replaceable Wire Cutters",
    "brand": "Leatherman",
    "category": "Accessories",
    "subcategory": "EDC",
    "price": 119.95,
    "mrp": 144.52,
    "rating": 4.4,
    "reviewCount": 1818,
    "inStock": true,
    "stockCount": 13,
    "images": [
      "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Leatherman International Warranty",
      "Engineered with authentic Leatherman materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Leatherman. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 327,
    "name": "Stanley Quencher H2.0 FlowState Stainless Steel Tumbler 40oz",
    "brand": "Stanley",
    "category": "Accessories",
    "subcategory": "EDC",
    "price": 45,
    "mrp": 59.21,
    "rating": 4.7,
    "reviewCount": 1931,
    "inStock": true,
    "stockCount": 14,
    "images": [
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Stanley International Warranty",
      "Engineered with authentic Stanley materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Stanley. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 328,
    "name": "Yeti Rambler 26 oz Straw Cup Vacuum Bottle with Chug Cap",
    "brand": "Yeti",
    "category": "Accessories",
    "subcategory": "EDC",
    "price": 40,
    "mrp": 57.97,
    "rating": 4.2,
    "reviewCount": 2044,
    "inStock": true,
    "stockCount": 15,
    "images": [
      "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Yeti International Warranty",
      "Engineered with authentic Yeti materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Yeti. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 329,
    "name": "Orbitkey Leather Key Organizer Multi-Tool Keychain Holder",
    "brand": "Orbitkey",
    "category": "Accessories",
    "subcategory": "EDC",
    "price": 43.5,
    "mrp": 70.16,
    "rating": 4.5,
    "reviewCount": 2157,
    "inStock": true,
    "stockCount": 16,
    "images": [
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year Orbitkey International Warranty",
      "Engineered with authentic Orbitkey materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from Orbitkey. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  },
  {
    "id": 330,
    "name": "S.T. Dupont Ligne 2 Cling Brushed Yellow Gold Luxury Lighter",
    "brand": "S.T. Dupont",
    "category": "Accessories",
    "subcategory": "EDC",
    "price": 1150,
    "mrp": 1352.94,
    "rating": 4.8,
    "reviewCount": 2270,
    "inStock": true,
    "stockCount": 2,
    "images": [
      "https://images.unsplash.com/photo-1570222094114-8054a817e56b?w=700&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1570222094114-8054a817e56b?w=700&auto=format&fit=crop&q=80&crop=entropy",
      "https://images.unsplash.com/photo-1570222094114-8054a817e56b?w=700&auto=format&fit=crop&q=80&flip=h"
    ],
    "highlights": [
      "Official genuine product backed by 1-Year S.T. Dupont International Warranty",
      "Engineered with authentic S.T. Dupont materials for maximum durability & luxury feel",
      "Certified eco-friendly packaging and energy-efficient design",
      "Eligible for Express Free Delivery within 24-48 hours across all pin codes"
    ],
    "reviews": [
      {
        "name": "Rahul Verma",
        "rating": 5,
        "comment": "Phenomenal quality from S.T. Dupont. Looks and performs even better in person!",
        "date": "2 days ago"
      },
      {
        "name": "Ananya Sen",
        "rating": 4,
        "comment": "Fast shipping, 100% genuine sealed packaging. Worth every penny.",
        "date": "1 week ago"
      }
    ]
  }
];

if (typeof module !== 'undefined') module.exports = products;

export const RESTAURANT_INFO = {
  name: "AURA",
  subtitle: "Ristorante & Enoteca Contemporanea",
  location: "Dorsoduro 1045, Fondamenta Zattere, Venezia",
  coordinates: "45.4297° N, 12.3274° E",
  waterTaxi: "Private Pontoon on Rio de San Trovaso (Call VHF Ch. 74)",
  phone: "+39 041 528 9920",
  email: "reservations@aura-venezia.it",
  pressEmail: "concierge@aura-venezia.it",
  hours: [
    { days: "Wednesday – Sunday", service: "Dinner", time: "18:30 – 23:30" },
    { days: "Saturday – Sunday", service: "Luncheon", time: "12:30 – 15:30" },
    { days: "Monday & Tuesday", service: "Closed", time: "Private Cellar Tastings upon request" }
  ],
  accolades: [
    { title: "Three Michelin Stars", subtitle: "Guide Michelin 2024–2026", icon: "michelin" },
    { title: "World's 50 Best #7", subtitle: "The World's 50 Best Restaurants", icon: "globe" },
    { title: "Grand Award", subtitle: "Wine Spectator since 2018", icon: "wine" },
    { title: "Best Interior Design", subtitle: "Architectural Digest Hospitality", icon: "arch" }
  ]
};

export const TASTING_COURSES = [
  {
    id: 1,
    courseNumber: "COURSE 01",
    italianTitle: "Ostrica di San Pietro & Nebbia Marina",
    englishTitle: "Gillardeau Oyster & Marine Fog",
    description: "Cold-smoked Venetian lagoon oyster served in seawater vapor, winter citrus gel, smoked bergamot oil, and sea fennel essence.",
    category: "Inizio / Sea",
    prepTime: "Tableside Smoke Infusion",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
    sommelierPairing: {
      wine: "Ferrari Giulio Riserva del Fondatore 2012",
      origin: "Trento DOC, Italy",
      notes: "Crisp minerality, toasted brioche, fine sustained perlage slicing through the rich salinity."
    },
    allergens: ["Molluscs", "Citrus"],
    priceSolo: "€38",
    accent: "Smoked Seawater Vapor"
  },
  {
    id: 2,
    courseNumber: "COURSE 02",
    italianTitle: "Crudo di Scampi di Chioggia & Caviale Reale",
    englishTitle: "Chioggia Langoustine Carpaccio & Royal Caviar",
    description: "Sweet Adriatic langoustine pounded wafer-thin, layered with Siberian Royal Caviar, white peach reduction, and sea water pearls.",
    category: "Mare / Shellfish",
    prepTime: "Plated at 4°C",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=1200&auto=format&fit=crop",
    sommelierPairing: {
      wine: "Domaine Leflaive Puligny-Montrachet 2020",
      origin: "Burgundy, France",
      notes: "Vibrant yellow orchard fruit, flinty limestone core, silk-like textural complement."
    },
    allergens: ["Crustaceans", "Fish"],
    priceSolo: "€54",
    accent: "Siberian Royal Caviar"
  },
  {
    id: 3,
    courseNumber: "COURSE 03",
    italianTitle: "Risotto Acquerello Riserva al Tartufo Bianco d'Alba",
    englishTitle: "7-Year Aged Acquerello Carnaroli & Alba White Truffle",
    description: "Slow-stirred Carnaroli rice, mountain cultured butter churned in Trentino, 36-month Vacche Rosse Parmigiano, shaved fresh Alba white truffle.",
    category: "Primo / Earth",
    prepTime: "Mantecatura al Tavolo",
    image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?q=80&w=1200&auto=format&fit=crop",
    sommelierPairing: {
      wine: "Giacomo Conterno Barolo Cascina Francia 2017",
      origin: "Piedmont, Italy",
      notes: "Dried rose petals, underbrush, tar, and ethereal tannins that mirror the shaved truffle."
    },
    allergens: ["Dairy"],
    priceSolo: "€68",
    accent: "Shaved Tableside"
  },
  {
    id: 4,
    courseNumber: "COURSE 04",
    italianTitle: "Rombo Chiodato alla Brace con Guazzetto di Vongole",
    englishTitle: "Wild Turbot Roasted over Olive Wood with Clam Broth",
    description: "Adriatic wild turbot charred on almond-wood coals, smoked clam emulsified broth, braised sea beet, and sea aster crisps.",
    category: "Pesce / Hearth",
    prepTime: "Olive Wood Embers",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=1200&auto=format&fit=crop",
    sommelierPairing: {
      wine: "Valentini Trebbiano d'Abruzzo 2018",
      origin: "Abruzzo, Italy",
      notes: "Golden wax, chamomile, savory saline tension that matches the smoke of the woodfire hearth."
    },
    allergens: ["Fish", "Molluscs"],
    priceSolo: "€62",
    accent: "Woodfire Embers"
  },
  {
    id: 5,
    courseNumber: "COURSE 05",
    italianTitle: "Piccione di Mirano in Tre Cotture & Ciliegia Selvatica",
    englishTitle: "Mirano Squab in Three Textures & Wild Fermented Cherries",
    description: "Breast pan-roasted pink on the bone, confit leg in duck fat, liver parfait tartelette, fermented wild cherry jus, and juniper essence.",
    category: "Carne / Game",
    prepTime: "Charcoal Rested",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",
    sommelierPairing: {
      wine: "Biondi-Santi Brunello di Montalcino Riserva 2013",
      origin: "Tuscany, Italy",
      notes: "Intense iron, leather, wild strawberries, and aristocratic structure of peerless depth."
    },
    allergens: ["Gluten"],
    priceSolo: "€72",
    accent: "Venetian Game Heritage"
  },
  {
    id: 6,
    courseNumber: "COURSE 06",
    italianTitle: "Sfera d'Oro al Cioccolato Valrhona & Grappa Invecchiata",
    englishTitle: "24k Gold Smoked Valrhona Sphere & 20-Year Grappa Crema",
    description: "Fragile sphere dusted in genuine 24-karat gold leaf, molten dark single-estate chocolate ganache, smoked hazelnut praline, and aged Nardini grappa gelato.",
    category: "Dolce / Final Act",
    prepTime: "Warm Ganache Pour",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1200&auto=format&fit=crop",
    sommelierPairing: {
      wine: "Quintarelli Giuseppe Recioto della Valpolicella 2011",
      origin: "Veneto, Italy",
      notes: "Dried black figs, chocolate liquor, velvety sweet spices, unctuous finish."
    },
    allergens: ["Dairy", "Nuts"],
    priceSolo: "€32",
    accent: "24-Karat Gold Leaf"
  }
];

export const ARCHITECTURAL_SPACES = [
  {
    id: "sala-nobile",
    title: "Sala Nobile dei Dogi",
    subtitle: "The Main Dining Salon",
    period: "Circa 1742 Frescoes & Murano Chandeliers",
    capacity: "32 Guests Maximum",
    atmosphere: "Low candlelit banquettes, restored 18th-century walnut paneling, and sweeping views across the Dorsoduro canal through floor-to-ceiling arched glass.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop",
    features: ["Murano Glass Chandeliers", "Acoustically Tuned Velvet", "Original Tiepolo School Stucco"]
  },
  {
    id: "banco-chef",
    title: "Il Banco dello Chef",
    subtitle: "The 8-Seat Hearth Counter",
    period: "Solid Slavonian Walnut & Basalt Stone",
    capacity: "8 Guests Exclusively",
    atmosphere: "An intimate front-row theatre where Executive Chef Matteo Moretti guides each guest personally through unlisted courses cooked over live embers.",
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1600&auto=format&fit=crop",
    features: ["Live Woodfire Hearth", "Custom Japanese Knives", "Tableside Chef Commentary"]
  },
  {
    id: "cantina-segreta",
    title: "La Cantina Segreta",
    subtitle: "Subterranean 14th-Century Wine Vault",
    period: "Byzantine Brick Vaulting",
    capacity: "Private Tasting up to 12 Guests",
    atmosphere: "Cool, subterranean humidity harboring 14,200 bottles of historic vintages, rare verticals of Romanée-Conti and Sassicaia dating to 1968.",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1600&auto=format&fit=crop",
    features: ["14,200 Rare Bottles", "Temperature Controlled 13°C", "Sommelier Private Reserve"]
  },
  {
    id: "terrazza-canale",
    title: "Terrazza Privata sul Canale",
    subtitle: "Waterfront Private Pontoon Dining",
    period: "Direct Grand Canal Waterway Access",
    capacity: "Weather Permitting / 16 Guests",
    atmosphere: "Dine as historic Venetians did: gentle lagoon ripples lapping against stone steps, private water taxi arrival, illuminated by antique brass lanterns.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1600&auto=format&fit=crop",
    features: ["Private Boat Mooring", "Open Air Lagoon Breeze", "Starlight Candlelight Dining"]
  }
];

export const GALLERY_ITEMS = [
  {
    id: "g1",
    title: "Alba Truffle Mantecatura",
    category: "Gastronomy",
    image: "https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?q=80&w=1200&auto=format&fit=crop",
    caption: "Shaving fresh white Alba truffle over 7-year aged Carnaroli rice at tableside."
  },
  {
    id: "g2",
    title: "The Evening Candlelight at Sala Nobile",
    category: "Atmosphere",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    caption: "Warm amber glow reflecting off polished walnut floors and Murano crystal."
  },
  {
    id: "g3",
    title: "Vintage Decanting in the Vault",
    category: "The Cellar",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1200&auto=format&fit=crop",
    caption: "Head Sommelier Elena Rossi decanting a 1985 Barolo Monfortino."
  },
  {
    id: "g4",
    title: "Chioggia Langoustine with Siberian Caviar",
    category: "Gastronomy",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=1200&auto=format&fit=crop",
    caption: "Pounded Adriatic langoustine with fresh lime zest and gold spoon caviar."
  },
  {
    id: "g5",
    title: "The Live Hearth at the Chef's Counter",
    category: "The Kitchen",
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop",
    caption: "Charcoal embers infusing wild turbot with delicate almond-wood aroma."
  },
  {
    id: "g6",
    title: "Canal Water Pontoon at Twilight",
    category: "Atmosphere",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200&auto=format&fit=crop",
    caption: "Guests arriving by vintage Riva mahogany water taxi directly to the private dock."
  },
  {
    id: "g7",
    title: "Handmade Sfera d'Oro Finish",
    category: "Gastronomy",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1200&auto=format&fit=crop",
    caption: "Warm single-origin chocolate ganache melting the delicate gold-dusted dome."
  },
  {
    id: "g8",
    title: "Cellar Master Vertical Selection",
    category: "The Cellar",
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=1200&auto=format&fit=crop",
    caption: "Ancient reserve bottles cradled in climate-controlled cellars."
  }
];

export const TASTING_MENUS = [
  {
    id: "grand-tasting",
    name: "The Grand Autumn Tasting",
    subtitle: "8 Iconic Courses celebrating Venetian Terroir & Foraged Heritage",
    price: "€285",
    pairingPrice: "€160 (Classic Reserve) / €260 (Grand Cru Prestige)",
    duration: "Approx. 3.5 Hours",
    highlights: ["Chioggia Scampi & Caviar", "Risotto al Tartufo d'Alba", "Wild Turbot on Hearth", "Mirano Squab in 3 Textures", "Sfera d'Oro"],
    recommendedFor: "First-time visitors seeking the complete AURA culinary universe."
  },
  {
    id: "chef-counter",
    name: "The Chef's Omakase Hearth",
    subtitle: "10 Exclusive Unscripted Courses cooked live over Olive Wood",
    price: "€340",
    pairingPrice: "€210 (Sommelier Rare Vintage Selection)",
    duration: "Approx. 4 Hours",
    highlights: ["Tableside Interaction with Chef Moretti", "Direct Ember-Roasted Seafood", "Experimental Fermentations", "Private Reserve Cellar Pour"],
    recommendedFor: "Connoisseurs seeking rare seasonal ingredients and intimacy."
  },
  {
    id: "terroir-degustation",
    name: "Terroir & Laguna",
    subtitle: "6 Plant-Forward & Lagoon Botanical Courses",
    price: "€225",
    pairingPrice: "€140 (Biodynamic & Non-Alcoholic Botanical Pairing)",
    duration: "Approx. 2.5 Hours",
    highlights: ["Sant'Erasmo Heirloom Artichokes", "Smoked Seawater Foam", "Acquerello Riserva with Mountain Herbs", "Alpine Honey & Quince"],
    recommendedFor: "Guests seeking an organic, sustainable ode to the Venetian lagoon ecosystem."
  }
];

export const REVIEWS = [
  {
    quote: "AURA transcends mere dining. It is a theatrical meditation on Venetian gastronomy, where fire, smoke, and lagoon salinity are turned into pure poetry.",
    author: "François-Régis Gaudry",
    publication: "Le Figaro Gastronomie",
    rating: "★★★★★"
  },
  {
    quote: "The White Truffle Risotto alone justifies a journey from Tokyo. Chef Moretti's reverence for historical recipes combined with avant-garde restraint is astonishing.",
    author: "Ruth Reichl",
    publication: "The New York Times",
    rating: "★★★★★"
  },
  {
    quote: "Arriving by wooden Riva water taxi into AURA's candlelit courtyard is the closest one gets to Venetian royalty. An unrepeatable masterpiece.",
    author: "Condé Nast Traveler",
    publication: "Gold List Award 2025",
    rating: "Top 10 Global"
  }
];

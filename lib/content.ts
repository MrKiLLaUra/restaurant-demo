// Static, fictional content for the Limen Restaurant demo.

const U = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`

export const IMAGES = {
  heroInterior: U('photo-1414235077428-338989a2e8c0', 2400),
  storyTable: U('photo-1528712306091-ed0763094c98', 1400),
  ctaSpread: U('photo-1504674900247-0877df9cc836', 2000),
  aboutHero: U('photo-1517248135467-4c7edcad34c4', 2000),
}

// Gallery — food + interiors, no identifiable people.
export const GALLERY: string[] = [
  U('photo-1504674900247-0877df9cc836'),
  U('photo-1414235077428-338989a2e8c0'),
  U('photo-1476224203421-9ac39bcb3327'),
  U('photo-1540189549336-e6e99c3679fe'),
  U('photo-1467003909585-2f8a72700288'),
  U('photo-1528712306091-ed0763094c98'),
  U('photo-1559339352-11d035aa65de'),
  U('photo-1551183053-bf91a1d81141'),
  U('photo-1424847651672-bf20a4b0982b'),
]

export interface Dish {
  name: string
  desc: string
  price: number
}
export interface MenuSection {
  name: string
  note?: string
  items: Dish[]
}

export const MENU: MenuSection[] = [
  {
    name: 'Mezze & Starters',
    items: [
      { name: 'Grilled Halloumi', desc: 'Charred Cypriot halloumi, honey, oregano, toasted sesame', price: 8.5 },
      { name: 'Smoked Aubergine', desc: 'Slow-smoked aubergine dip, olive oil, warm pita', price: 7 },
      { name: 'Octopus Carpaccio', desc: 'Thinly sliced octopus, lemon, capers, chilli', price: 14 },
      { name: 'Village Salad', desc: 'Tomato, cucumber, olives, red onion, feta, vinaigrette', price: 9 },
      { name: 'Dolmades', desc: 'Vine leaves stuffed with herbed rice, yoghurt', price: 8 },
    ],
  },
  {
    name: 'From the Sea',
    note: 'Landed daily on the Limassol coast',
    items: [
      { name: 'Whole Sea Bream', desc: 'Charcoal-grilled, lemon, capers, sea herbs', price: 24 },
      { name: 'Grilled Prawns', desc: 'Tiger prawns, garlic, parsley, ouzo butter', price: 22 },
      { name: 'Calamari', desc: 'Lightly floured, fried, smoked paprika aioli', price: 16 },
      { name: 'Seafood Linguine', desc: 'Prawns, mussels, clams, tomato, white wine', price: 21 },
    ],
  },
  {
    name: 'From the Grill',
    items: [
      { name: 'Lamb Chops', desc: 'Marinated chops, rosemary, lemon, sea salt', price: 26 },
      { name: 'Beef Souvla', desc: 'Slow-grilled beef skewers, flatbread, tzatziki', price: 23 },
      { name: 'Chicken Souvlaki', desc: 'Citrus-marinated chicken, pita, pickles', price: 16 },
      { name: 'Pork Belly', desc: 'Crisp pork belly, honey-mustard glaze', price: 19 },
    ],
  },
  {
    name: 'Sides',
    items: [
      { name: 'Lemon Potatoes', desc: 'Oven-roasted, oregano, olive oil', price: 5 },
      { name: 'Grilled Vegetables', desc: 'Seasonal vegetables, balsamic', price: 6 },
      { name: 'Pita & Dips', desc: 'Warm pita, tzatziki, taramasalata', price: 5 },
    ],
  },
  {
    name: 'Desserts',
    items: [
      { name: 'Baklava', desc: 'Filo, walnuts, honey syrup, pistachio', price: 7 },
      { name: 'Loukoumades', desc: 'Honey doughnuts, cinnamon, ice cream', price: 6 },
      { name: 'Orange & Almond Cake', desc: 'Flourless, citrus syrup, mascarpone', price: 7 },
      { name: 'Affogato', desc: 'Vanilla gelato, hot espresso', price: 6 },
    ],
  },
]

export interface Review {
  name: string
  detail: string
  quote: string
}
export const REVIEWS: Review[] = [
  { name: 'Diner · Limassol', detail: 'Illustrative review', quote: 'The grilled sea bream was faultless and the terrace at sunset is something else. Easily our favourite spot on the coast.' },
  { name: 'Diner · Nicosia', detail: 'Illustrative review', quote: 'Came for a birthday — the mezze kept coming and every plate was beautiful. Service was warm without being fussy.' },
  { name: 'Visitor · UK', detail: 'Illustrative review', quote: 'Found it on our last night in Cyprus and wished we’d come sooner. Proper Mediterranean cooking, generous and unhurried.' },
]

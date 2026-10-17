export const SHOP = {
  name: 'Motown Tattoo Company',
  address: '639 Beaubien, Detroit, MI 48226',
  plusCode: '8XM5+4C Detroit, Michigan, USA',
  phoneDisplay: '+1 313-828-2855',
  phoneHref: 'tel:+13138282855',
  rating: 4.7,
  reviewCount: 152,
  // WhatsApp number: +1 (315) 696-0147, digits only for wa.me
  whatsappNumber: '13156960147',
  instagram: 'https://www.instagram.com/motowntattoocompany/?hl=en',
  facebook: 'https://www.facebook.com/p/Motown-Tattoo-Company-61578343910817/',
  mapsLink: 'https://www.google.com/maps/search/?api=1&query=639+Beaubien+Detroit+MI+48226',
  mapsEmbed: 'https://www.google.com/maps?q=639+Beaubien+Detroit+MI+48226&output=embed',
};

export const HOURS = [
  { day: 'Monday', time: '12 pm – 8 pm' },
  { day: 'Tuesday', time: '12 pm – 8 pm' },
  { day: 'Wednesday', time: '12 pm – 8 pm' },
  { day: 'Thursday', time: '12 pm – 8 pm' },
  { day: 'Friday', time: '12 pm – 8 pm' },
  { day: 'Saturday', time: '12 pm – 8 pm' },
  { day: 'Sunday', time: 'Closed' },
];

// The ready-made message sent when someone taps any WhatsApp button.
export const DEFAULT_MESSAGE =
  "Hi Motown Tattoo Company! 👋 I found your website and I'd like to book a tattoo.\n\n" +
  'My idea: \nPlacement: \nApproximate size: \nPreferred day: \n\n' +
  'Can you let me know what\'s available?';

export const waLink = (text = DEFAULT_MESSAGE) =>
  `https://wa.me/${SHOP.whatsappNumber}?text=${encodeURIComponent(text)}`;

export const WORK = [
  { id: 'eye', src: '/images/tattoo-eye.png', group: 'tattoos', title: 'Realistic eye', style: 'black and grey realism', alt: 'Black and grey realistic eye tattooed on a forearm' },
  { id: 'portrait', src: '/images/tattoo-portrait.png', group: 'tattoos', title: 'Portrait', style: 'black and grey portrait', alt: 'Black and grey portrait tattoo of a smiling baby wearing a pearl necklace' },
  { id: 'moto', src: '/images/tattoo-moto.png', group: 'tattoos', title: 'Racing motorcycle', style: 'color realism', alt: 'Color tattoo of a racing motorcycle and rider next to the reference photo' },
  { id: 'skull', src: '/images/tattoo-skull.png', group: 'tattoos', title: 'Skull with headdress', style: 'black and grey', alt: 'Black and grey skull wearing a feathered headdress on a shoulder' },
  { id: 'lobby', src: '/images/lobby.png', group: 'shop', title: 'The lobby', style: '', alt: 'Shop lobby with brick wall, wood floor, red MOTOWN sign and leather sofa' },
  { id: 'lounge', src: '/images/lounge.png', group: 'shop', title: 'Lounge', style: '', alt: 'Lounge with a hand-lettered Motown Tattoo wall and a neon sign' },
  { id: 'neon', src: '/images/neon-window.png', group: 'shop', title: 'Neon corner', style: '', alt: 'Neon Motown Tattoo & Company sign above a display of fresh flowers' },
];

export const REVIEWS = [
  {
    name: 'Alexus Long',
    text: "Bree is absolutely wonderful. She has done all 6 of my tattoos, and every experience with her has been a vibe. She is incredibly talented and really helps guide you in the right direction, especially if you’re unsure about your design.",
  },
  {
    name: 'Gracie Ingalls',
    text: "Naelah is the best!! I have two tattoos done by them and they have killed it both times. The cat tattoo has healed PERFECTLY (the lines are so clean!). Will be going back again and again!",
  },
  {
    name: 'Alyssa Irvin',
    text: "Came in town to visit some friends and decided to get a tattoo last minute! Found Motown Tattoo Company and talked to Corey. He came in on his day off (on a holiday) to do the tattoo.",
  },
];

export const REVIEW_TOPICS = [
  { label: 'First tattoo experience', count: 14 },
  { label: 'Piercing', count: 8 },
  { label: 'Clean space', count: 5 },
  { label: 'Memorial tattoo', count: 2 },
];

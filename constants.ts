import { Product, Artist } from './types';

// STORAGE CONFIGURATION
// ------------------------------------------------------------------
// To use S3: Change this to your bucket URL (e.g., "https://my-brand-assets.s3.amazonaws.com")
// To use Local: Keep as "" to load from the public folder
const STORAGE_URL = ""; 

// Using consistent, high-quality audio sources for demos
const AUDIO_LOFI = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
const AUDIO_SYNTH = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"; 
const AUDIO_BREAKS = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3"; 
const AUDIO_TRAP = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3";

export const CASSETTES: Product[] = [
  {
    id: 'pack-purple',
    name: 'PURPLE-ACKT',
    price: 19.99,
    image: 'https://public-files.gumroad.com/1wqxiqvan1bl0e9wjzzgvtfshea3',
    category: 'cassette',
    tags: ['Chopped', 'Phonk', 'Screwed'],
    specs: '20 high-quality hip hop & trap instrumentals • Modern production style • Industry-ready sound • Clean arrangements for vocals • WAV format for best quality • Individual Track Stems Included',
    audioPreview: AUDIO_TRAP,
    scarcity: 14,
    badges: ['BEST SELLER', 'ALMOST GONE'],
    description: '20 Exclusive Instrumentals: Original compositions, no recycled loops. Multi-Genre: West Coast, Trap, Dark Cinematic. Studio-Ready: Mixed/mastered with industry headroom. Full Flexibility: High-quality WAVs with structured arrangements.',
    quote: '"In a market flooded with amateur \'type beats,\' these stand out by providing the \'Industry Standard\' polish your fans expect."',
    benefits: [
      '100% Royalty-Free: Keep 100% of your earnings. No hidden fees, no split-sheets.',
      'Performance-Ready: Structured for easy songwriting—no guessing where the hook starts.',
      'Content Creator Friendly: Perfect for high-impact YouTube intros, TikTok backgrounds, and Twitch streams.'
    ],
    license: {
      yes: ['Monetize on Spotify/Apple Music', 'Perform live', 'Use in commercial videos'],
      no: ['You cannot resell the raw beats', 'Repackage them as your own production kit']
    }
  },
  {
    id: 'pack-gold',
    name: 'GOLD-TUSS',
    price: 34.99,
    image: 'https://public-files.gumroad.com/8hh0hx7iu2bqg957akjiicshkqij',
    category: 'cassette',
    tags: ['Luxury Trap', 'Soul', 'Analog'],
    specs: '15 Kits • Stem Data',
    audioPreview: AUDIO_SYNTH,
    scarcity: 42,
    badges: ['NEW ARRIVAL'],
    isLocked: true,
    description: 'Opulence in audio form. Warm, golden-era saturation meets crisp, modern trap drums. Perfect for Drake/Rick Ross type production.'
  },
  {
    id: 'pack-green',
    name: 'GREEN-QUALI',
    price: 29.99,
    image: 'https://public-files.gumroad.com/yfkd8apelcy3u2x10oo8r1q49xl5',
    category: 'cassette',
    tags: ['Slime', 'Hyperpop', 'Experimental'],
    specs: '500+ One Shots',
    audioPreview: AUDIO_BREAKS,
    scarcity: 89,
    badges: ['TRENDING'],
    isLocked: true,
    description: 'Toxic melodies and radioactive 808s. This pack breaks the rules of traditional theory to create something purely visceral and slime-soaked.'
  },
  {
    id: 'pack-red',
    name: 'RED-WOCK',
    price: 29.99,
    image: 'https://public-files.gumroad.com/jn28w6tyh1r8ozg3hhqaiummerbg',
    category: 'cassette',
    tags: ['Drill', 'Aggressive', 'Horror'],
    specs: '12 Construction Kits',
    audioPreview: AUDIO_LOFI,
    scarcity: 7,
    badges: ['LOW STOCK', 'VINTAGE'],
    isLocked: true,
    description: 'Blood-soaked drill textures and aggressive slide notes. Not for the faint of heart. Contains heavy distortion and grime elements.'
  }
];

export const TOOLS: Product[] = [
  {
    id: 't1',
    name: 'StemSplit',
    price: 49.00,
    image: 'https://public-files.gumroad.com/0f3ekg7ge0pt55gc6e5vo20tu6v0',
    category: 'tool',
    description: 'Instant AI separation.',
    features: ['4-Stem Model', 'Zero Latency', 'Offline Mode']
  },
  {
    id: 't2',
    name: 'ScrewAI',
    price: 35.00,
    image: 'https://public-files.gumroad.com/5vh1akesi2e40ipp9jbpux30ytqi',
    category: 'tool',
    description: 'Chopped & screwed engine.',
    features: ['Tempo Sync', 'Tape Saturation', 'Artifact Gen']
  },
  {
    id: 't5',
    name: 'Reverb (DE)Gloss',
    price: 39.00,
    image: 'https://public-files.gumroad.com/dy6hwxp99qr3ooo7rvdjn3avisp8',
    category: 'tool',
    description: 'Spectral tail suppression.',
    features: ['AI De-reverb', 'Real-time Preview', 'WAV Export'],
    demo: true
  },
  {
    id: 't6',
    name: 'HalfScrew',
    price: 25.00,
    image: 'https://public-files.gumroad.com/tuvwwzbldlnhzxjns6ayfkkfs53d',
    category: 'tool',
    description: 'The ultimate half-speed & screw plugin.',
    features: ['Instant Half-Speed', 'Tape Stop FX', 'Pitch Shifting'],
    demo: true
  },
];

export const APPAREL: Product[] = [
  {
    id: 'a1',
    name: 'Double Cup Hoodie',
    price: 65.00,
    image: 'https://images.printify.com/mockup/68c2bdb468b1823ce7049e34/68053/99231/19bd6068858.jpg?s=608',
    category: 'apparel'
  },
  {
    id: 'a2',
    name: 'Double Cup Tee',
    price: 35.00,
    image: 'https://images.printify.com/mockup/68b18e2f0caba9d4a50c304d/103520/100285/19d1ee0df78.jpg?s=608',
    category: 'apparel'
  },
  {
    id: 'a3',
    name: 'HiTecc Hoodie',
    price: 70.00,
    image: 'https://images.printify.com/mockup/68c3a96fedd049241203d925/66168/272/1993e1b8900.jpg?s=608',
    category: 'apparel'
  },
  {
    id: 'a4',
    name: 'Lean Wave Shorts',
    price: 45.00,
    image: 'https://images.printify.com/mockup/68b3b0918840475f50019724/78574/44655/199364a6020.jpg?s=608',
    category: 'apparel'
  },
  {
    id: 'a5',
    name: 'The Beat Mob Logo Tee',
    price: 30.00,
    image: 'https://images.printify.com/mockup/68b18b658934addd900ce694/38192/97992/199364a6bd8.jpg?s=608',
    category: 'apparel'
  },
  {
    id: 'a6',
    name: 'ScrewAI Tee',
    price: 35.00,
    image: 'https://images.printify.com/mockup/68c21d1be15debd51d062b27/12100/102003/199364a44c8.jpg?s=608',
    category: 'apparel'
  },
  {
    id: 'a7',
    name: 'No Smoke Hoodie',
    price: 65.00,
    image: 'https://images.printify.com/mockup/69c243b42cba662fc405f999/68869/109444/19d1ed98890.jpg?s=608',
    category: 'apparel'
  }
];

export const ARTISTS: Artist[] = [
  {
    id: 'art1',
    name: 'Beat Mob Collective',
    tagline: 'Limited merch and drops',
    image: 'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000d72cad0345a4bdd6f0be486399bf'
  },
  {
    id: 'art2',
    name: 'bTHIRTYthreezy',
    tagline: 'Experimental Bass',
    image: 'https://i.scdn.co/image/ab6761670000ecd41a11aac4ca4883c0580b9b52'
  },
  {
    id: 'art3',
    name: 'Ceasa Matic',
    tagline: 'Modular Synthesis',
    image: 'https://image-cdn-fa.spotifycdn.com/image/ab676186000001942b36c44415667cbdd6ea0099'
  }
];

export const GEAR: Product[] = [
  {
    id: 'g1',
    name: 'Iso-Pads Pro',
    price: 25.00,
    image: 'https://picsum.photos/200/200',
    category: 'gear',
    description: 'Decouple your monitors.'
  },
  {
    id: 'g2',
    name: 'TRS Gold Cables',
    price: 18.00,
    image: 'https://picsum.photos/201/201',
    category: 'gear',
    description: 'Low noise floor.'
  },
  {
    id: 'g3',
    name: 'Field Recorder Case',
    price: 45.00,
    image: 'https://picsum.photos/202/202',
    category: 'gear',
    description: 'Waterproof hard shell.'
  },
  {
    id: 'g4',
    name: 'TBM Sticker Pack',
    price: 10.00,
    image: 'https://images.printify.com/mockup/696e18ac7bb6b5f39609371b/45750/2176/19bd610b1e8.jpg?s=608',
    category: 'gear',
    description: 'High-quality vinyl decals.'
  }
];

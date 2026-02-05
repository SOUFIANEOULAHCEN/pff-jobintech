export interface Product {
  id: number;
  title: string;
  vendor: string;
  price: number;
  rating: number;
  reviewCount: number;
  thumbnail: string;
  category: string;
  tags: string[];
  description: string;
  coverImage: string;
  images: string[];
  discount: number | null;
  isFree?: boolean;
  isBestseller?: boolean;
}

export interface Review {
  id: string;
  reviewerName: string;
  rating: number;
  text: string;
  date: string;
}

export const products: Product[] = [
  {
    id: 1,
    title: "Modern React ebooks",
    vendor: "TechBooks Inc.",
    price: 29.99,
    rating: 4.8,
    reviewCount: 124,
    thumbnail: "https://m.media-amazon.com/images/I/71KS6hvZ9JL._UF1000,1000_QL80_.jpg",
    category: "ebooks",
    tags: ["react", "javascript", "frontend"],
    description: "A complete guide to building modern React applications with hooks and best practices.",
    coverImage: "https://m.media-amazon.com/images/I/71KS6hvZ9JL._UF1000,1000_QL80_.jpg",
    images: ["https://m.media-amazon.com/images/I/3193j2dIYVL._SL500_.jpg", "https://m.media-amazon.com/images/I/81x8Qt-q1ZL._UF350,350_QL50_.jpg", "https://m.media-amazon.com/images/I/51MUOr0owCL._UF1000,1000_QL80_.jpg"],
    discount: 20,
    isBestseller: true
  },
  {
    id: 2,
    title: "Next.js Starter Course",
    vendor: "NextJS Academy",
    price: 49.99,
    rating: 4.9,
    reviewCount: 89,
    thumbnail: "https://i.ytimg.com/vi/843nec-IvW0/maxresdefault.jpg",
    category: "courses",
    tags: ["nextjs", "fullstack", "typescript"],
    description: "Learn Next.js App Router, Server Components, and data fetching step by step.",
    coverImage: "https://i.ytimg.com/vi/k7o9R6eaSes/maxresdefault.jpg",
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiBOaWO3Z12dHWBqV3jHxVgM90CkZ8y7F2CQ&s", "https://i.ytimg.com/vi/1WmNXEVia8I/maxresdefault.jpg"],
    discount: null,
    isBestseller: true
  },
  {
    id: 3,
    title: "UI Kit for Dashboards",
    vendor: "DesignPro Tools",
    price: 24.99,
    rating: 4.7,
    reviewCount: 203,
    thumbnail: "https://s3-alpha.figma.com/hub/file/2315639078036325323/c6fc4bab-59f5-4f59-bccf-521eb1658901-cover.png",
    category: "ui-kit",
    tags: ["ui", "tailwind", "dashboard"],
    description: "A premium Tailwind CSS UI kit with reusable dashboard components.",
    coverImage: "/placeholder.svg",
    images: ["https://s3-alpha.figma.com/hub/file/3672672768/d62f2f87-8aa6-4add-95c4-b0f0c949717d-cover.png", "https://s3-alpha.figma.com/hub/file/3904057647/26232073-fe88-4c95-abfb-f76cd9bc598a-cover.png", "https://s3-alpha.figma.com/hub/file/3413032872/ca40c498-beaf-4496-919f-7753de44617f-cover.png"],
    discount: 10,
    isBestseller: true
  },
  {
    id: 4,
    title: "JavaScript Interview Questions PDF",
    vendor: "CareerPrep Co.",
    price: 14.99,
    rating: 4.5,
    reviewCount: 67,
    thumbnail: "https://codewithcurious.com/wp-content/uploads/2023/07/IMG_0808-768x1120.jpg.webp",
    category: "ebooks",
    tags: ["javascript", "interview", "career"],
    description: "100+ JavaScript interview questions with clear explanations and examples.",
    coverImage: "https://img.yumpu.com/62229352/1/500x640/advanced-javascript-interview-questions.jpg",
    images: ["https://website-assets.studocu.com/img/document_thumbnails/83a7b235e2590ef5a63a23e7e5a504cf/thumb_1200_1698.png"],
    discount: null,
    isBestseller: false
  },
  {
    id: 5,
    title: "Gaming Community Access",
    vendor: "GameHub Entertainment",
    price: 14.99,
    rating: 4.6,
    reviewCount: 312,
    thumbnail: "https://arionisgames.com/media/images/game-development-blog-img_32.original.png",
    category: "play-game",
    tags: ["game", "fun", "entertainment"],
    description: "Join a global community of passionate gamers!",
    coverImage: "https://eu.aimcontrollers.com/wp-content/uploads/2023/06/The-Social-Gamer.jpg",
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJBzFb4MKHjFCnIjGDBW5JGlshwsEN-nkwIQ&s"],
    discount: null,
    isBestseller: true
  },
  {
    id: 6,
    title: "Mobile App Suite",
    vendor: "AppSecure Solutions",
    price: 0,
    rating: 4.4,
    reviewCount: 45,
    thumbnail: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_300,h_224/https://www.palladium.co.za/wp-content/uploads/2022/07/phone-x-mockup-triple-screen_165789-24-300x224.png",
    category: "app",
    tags: ["mobile"],
    description: "Finding the safest and most trusted mobile apps USA can feel overwhelming with so many options available on the market.",
    coverImage: "https://enreach-innovation.com/wp-content/uploads/2025/08/enreach-contact-teams-integration.webp",
    images: ["https://itchannelpro.nl/wp-content/uploads/2024/02/hero_image_app_suite_1-600.webp"],
    discount: null,
    isFree: true,
    isBestseller: false
  },
  {
    id: 7,
    title: "Web Templates Bundle",
    vendor: "WebCraft Studios",
    price: 14.99,
    rating: 4.7,
    reviewCount: 156,
    thumbnail: "https://www.bypeople.com/wp-content/uploads/2018/06/bootstrap-4-themes-bundle.png",
    category: "ui-kit",
    tags: ["website", "business", "design"],
    description: "We build websites that build your business.",
    coverImage: "https://themewagon.com/wp-content/uploads/2017/06/featured.jpg",
    images: ["https://templatebundle.net/public/user-theme/assets/images/my-images/share-preview.jpg", "https://w3layouts.b-cdn.net//wp-content/uploads/2024/12/ultimate-bundle.jpg"],
    discount: null,
    isBestseller: true
  },
  {
    id: 8,
    title: "Software Toolkit",
    vendor: "CodeMaster Pro",
    price: 0,
    rating: 4.3,
    reviewCount: 78,
    thumbnail: "https://actisense.com/wp-content/uploads/2022/08/Toolkit-software-full.png",
    category: "software",
    tags: ["software", "computer", "program"],
    description: "Software is a set of instructions or programs that tell a computer how to perform specific tasks.",
    coverImage: "https://saigontechnology.com/wp-content/uploads/top-software-development-tools.webp",
    images: ["https://ncgroup.fr/wp-content/uploads/2019/08/2301E_1.webp"],
    discount: null,
    isFree: true,
    isBestseller: false
  },
  {
    id: 9,
    title: "Digital Art Collection",
    vendor: "ArtDigital Creations",
    price: 14.99,
    rating: 4.8,
    reviewCount: 231,
    thumbnail: "https://images.stockcake.com/public/e/3/6/e36fe4b1-4d5f-4e29-98ae-7a507d684cf4_large/stunning-digital-portraits-stockcake.jpg",
    category: "art",
    tags: ["digital", "art", "design"],
    description: "Digital art is an artistic work or practice that uses digital technology as part of the creative or presentation process.",
    coverImage: "https://www.theparisreview.org/blog/wp-content/uploads/2018/01/44e.00creeps_weirdoscollection.jpg",
    images: ["https://cdn.prod.website-files.com/5ead65b4cd1146b85071bfdf/5fcf58c45baef45977f9204d_Matthias%20Dorfelt.jpg"],
    discount: null,
    isBestseller: true
  },
  {
    id: 10,
    title: "Premium Podcast Series",
    vendor: "AudioVerse Media",
    price: 0,
    rating: 4.5,
    reviewCount: 89,
    thumbnail: "https://i.podnews.network/r/a/2048/bbc-premium-podcasts.jpeg",
    category: "podcast",
    tags: ["audio", "entertainment", "music"],
    description: "A podcast is a digital audio file made available on the internet for downloading to a computer or mobile device, typically available as a service.",
    coverImage: "https://cdn.prod.website-files.com/634e7aa49f5b025e1fd9e87b/67e6e0bf7802ce0f6ff24994_Best_practices_for_offering_a_premium_podcast_feed.webp",
    images: ["https://cdn.prod.website-files.com/634e7aa49f5b025e1fd9e87b/67e6e0c07802ce0f6ff249a9_7k6cnzglaj.webp"],
    discount: null,
    isFree: true,
    isBestseller: false
  },
  {
    id: 11,
    title: "Audiobook Library",
    vendor: "ReadListen Inc.",
    price: 14.99,
    rating: 4.6,
    reviewCount: 167,
    thumbnail: "https://www.groovypost.com/wp-content/uploads/2019/02/audiobooks-featured.jpg",
    category: "audiobook",
    tags: ["audio", "book", "entertainment"],
    description: "An audiobook is a recorded version of a book that can be listened to on various devices.",
    coverImage: "https://thumbs.dreamstime.com/b/audio-books-equipment-sound-music-library-audiobook-e-learning-60932440.jpg",
    images: ["https://thumbs.dreamstime.com/b/group-books-headphones-related-to-audiobooks-isolate-e-digitally-listening-conversations-storytelling-written-73510589.jpg", "https://images.squarespace-cdn.com/content/v1/5bf59bef266c07d9a2f3086d/1552589192579-949Q87VB8L422KZQM8HR/audiobook+1-min.jpg"],
    discount: null,
    isBestseller: true
  },
  {
    id: 12,
    title: "Typography Packs Bundle",
    vendor: "FontFoundry",
    price: 14.99,
    rating: 4.7,
    reviewCount: 98,
    thumbnail: "https://public-files.gumroad.com/bbvb19tmafcqwhu7e7dmnahqlag8",
    category: "typography",
    tags: ["font", "design", "text"],
    description: "Typography packs are collections of fonts and typefaces that can be used for various design projects.",
    coverImage: "https://public-files.gumroad.com/m4r73n38kfo6cqyidqvausjg0pvo",
    images: ["https://public-files.gumroad.com/js4agfmoeprxw3dl7pztikcos8kw", "https://public-files.gumroad.com/y1oqxinvp8xpz9z2bmnc9gjg8ram"],
    discount: null,
    isBestseller: false
  },
  {
    id: 13,
    title: "Virtual Event Tickets",
    vendor: "EventSphere",
    price: 0,
    rating: 4.4,
    reviewCount: 56,
    thumbnail: "https://public-files.gumroad.com/1h5gw8egivkbdy4ghhh9gs8vk6kr",
    category: "event",
    tags: ["virtual", "event", "tickets"],
    description: "Virtual event tickets provide access to online events, webinars, or conferences that can be attended remotely.",
    coverImage: "https://public-files.gumroad.com/9es247t92nkl78lcjlfz6os372ar",
    images: ["https://public-files.gumroad.com/atbtbr9s8luwt434d2j278hpx76q"],
    discount: null,
    isFree: true,
    isBestseller: false
  },
  {
    id: 14,
    title: "3D Models Collection",
    vendor: "3DDesign Pro",
    price: 14.99,
    rating: 4.8,
    reviewCount: 189,
    thumbnail: "https://public-files.gumroad.com/evrqw3boy7s34syumwxc5bi97rpa",
    category: "3d models",
    tags: ["3d", "models", "design"],
    description: "3D models are digital representations of physical objects or environments.",
    coverImage: "https://public-files.gumroad.com/7ze35sur0ud72y430wvmgt59kv4s",
    images: ["https://public-files.gumroad.com/zn5c7z2mvrtz8vxmzy9upsqsy4v4", "https://public-files.gumroad.com/kolcs3el6rojqifo50kh4860vpde", "https://public-files.gumroad.com/ne9o1h2se18uypbv9732ran6jmsm"],
    discount: null,
    isBestseller: true
  },
  {
    id: 15,
    title: "Digital Invitation Suite",
    vendor: "InviteMaster",
    price: 0,
    rating: 4.3,
    reviewCount: 42,
    thumbnail: "/https://public-files.gumroad.com/7mp4qbfa0ofioycc4c8smpn1crti",
    category: "invitation",
    tags: ["digital", "invitation", "event"],
    description: "Digital invitations are electronic versions of traditional paper invitations.",
    coverImage: "https://public-files.gumroad.com/zfswlk62hcrzo6xq0xp5qpw1n0xg",
    images: ["https://public-files.gumroad.com/f6s4eavq1rr3yumnm8q0o2yj7q09"],
    discount: null,
    isFree: true,
    isBestseller: false
  },
  {
    id: 16,
    title: "Interactive Quizzes Pack",
    vendor: "QuizCraft",
    price: 14.99,
    rating: 4.6,
    reviewCount: 78,
    thumbnail: "https://public-files.gumroad.com/c6lts1rm9w90y7309ne0mf1yje31",
    category: "quiz",
    tags: ["interactive", "quiz", "learning"],
    description: "Interactive quizzes are engaging educational tools that test knowledge and understanding.",
    coverImage: "https://public-files.gumroad.com/5km0wwth36i4n5tzu0z1bdlmkute",
    images: ["https://public-files.gumroad.com/5km0wwth36i4n5tzu0z1bdlmkute"],
    discount: null,
    isBestseller: false
  },
  {
    id: 17,
    title: "Chatbot Scripts Library",
    vendor: "BotBuilders Inc.",
    price: 0,
    rating: 4.5,
    reviewCount: 65,
    thumbnail: "https://public-files.gumroad.com/ibl15h5zm4liv3zcpufnzcocft4o",
    category: "chatbot",
    tags: ["chatbot", "scripts", "automation"],
    description: "Chatbot scripts are pre-written dialogues that guide interactions with automated chat systems.",
    coverImage: "https://public-files.gumroad.com/wsq9fhx0lqi1xcswbtckeyeawn02",
    images: ["https://public-files.gumroad.com/5fr66mi6otnrqcgrvx0u7apn6o3m", "https://public-files.gumroad.com/umqz7ubhk2yo7wnuo1xu10796u54"],
    discount: null,
    isFree: true,
    isBestseller: false
  },
  {
    id: 18,
    title: "Webinar Recordings Bundle",
    vendor: "LearnHub Academy",
    price: 14.99,
    rating: 4.7,
    reviewCount: 134,
    thumbnail: "https://public-files.gumroad.com/b4w7fl9y7mruni0i0goygdzfwl1m",
    category: "webinar",
    tags: ["webinar", "recordings", "learning"],
    description: "Webinar recordings are video or audio recordings of live online events.",
    coverImage: "https://public-files.gumroad.com/uqxlfa6a6putg0q694ud9jpex6qd",
    images: ["https://public-files.gumroad.com/6sknuh9iulb001axi7mhphcx2sth"],
    discount: null,
    isBestseller: true
  },
  {
    id: 19,
    title: "Zoom Backgrounds Pack",
    vendor: "VirtualBackdrops",
    price: 0,
    rating: 4.2,
    reviewCount: 89,
    thumbnail: "https://public-files.gumroad.com/ws99pj6aj7298a7f0vmcrelvpn2l",
    category: "backgrounds",
    tags: ["zoom", "backgrounds", "video"],
    description: "Zoom backgrounds are customizable background images for video calls.",
    coverImage: "https://public-files.gumroad.com/c2iol3y9y7pvmy2lkf5b6ssef7i9",
    images: ["https://public-files.gumroad.com/e1c2h56s2tfnnl3tmhu84o53cqh0", "https://public-files.gumroad.com/jmyf7jf16xe750vcwrnym6t3i7c2", "https://public-files.gumroad.com/ywfqko5vwcpxk9ge1nlhj81pdtss"],
    discount: null,
    isFree: true,
    isBestseller: false
  },
  {
    id: 20,
    title: "Language Learning App",
    vendor: "LinguaLearn",
    price: 14.99,
    rating: 4.8,
    reviewCount: 278,
    thumbnail: "https://public-files.gumroad.com/ulrlcmad65wk2rylwwop0ztnfg7f",
    category: "app",
    tags: ["language", "learning", "apps"],
    description: "Language learning apps are software applications designed to help users acquire new languages.",
    coverImage: "https://public-files.gumroad.com/pa251fx8lw29artof80fa2y1bgj7",
    images: ["https://public-files.gumroad.com/pntytcwtgrsi8535vdq10gxxy7ni", "https://public-files.gumroad.com/ja78ogo12p8r7gimx8np75nfx1ek"],
    discount: null,
    isBestseller: true
  },
  {
    id: 21,
    title: "Online Calculators Suite",
    vendor: "CalcPro Tools",
    price: 0,
    rating: 4.4,
    reviewCount: 56,
    thumbnail: "https://public-files.gumroad.com/r675ue6nc136pdhjsoqoum91lfro",
    category: "calculator",
    tags: ["calculator", "online", "math"],
    description: "Online calculators are web-based tools for performing mathematical calculations.",
    coverImage: "https://public-files.gumroad.com/r675ue6nc136pdhjsoqoum91lfro",
    images: ["https://public-files.gumroad.com/r675ue6nc136pdhjsoqoum91lfro"],
    discount: null,
    isFree: true,
    isBestseller: false
  },
  {
    id: 22,
    title: "Email Marketing Templates",
    vendor: "EmailCraft Studio",
    price: 14.99,
    rating: 4.7,
    reviewCount: 189,
    thumbnail: "https://public-files.gumroad.com/e12g0f5vff7wg1o6j3gl0rb6lrt9",
    category: "email templates",
    tags: ["email", "marketing", "templates"],
    description: "Email marketing templates are pre-designed layouts for creating email campaigns.",
    coverImage: "https://public-files.gumroad.com/dgq2hme2zal3hgn7bkngxtiinzjy",
    images: ["https://public-files.gumroad.com/kc4pux5l7fuf67ck6i1q8032fbmn", "https://public-files.gumroad.com/rdoaz7snunk6l37jd8twjs376uvu"],
    discount: null,
    isBestseller: true
  },
  {
    id: 23,
    title: "Custom WordPress Themes",
    vendor: "WPDesign Masters",
    price: 14.99,
    rating: 4.9,
    reviewCount: 312,
    thumbnail: "https://public-files.gumroad.com/klsw51q0h0rruujvtge8af4wad1x",
    category: "wordpress themes",
    tags: ["wordpress", "themes", "custom"],
    description: "Custom WordPress themes are pre-designed layouts for creating WordPress websites.",
    coverImage: "https://public-files.gumroad.com/1ydh8nnht1xwo9bd47v2tea0q08s",
    images: ["https://public-files.gumroad.com/e91iz6sufwamakxzq0mlq8823hah"],
    discount: null,
    isBestseller: true
  },
  {
    id: 24,
    title: "Virtual Workout Classes",
    vendor: "FitStream",
    price: 14.99,
    rating: 4.6,
    reviewCount: 167,
    thumbnail: "https://public-files.gumroad.com/ippow32yq3js9zze49p091pwwyj2",
    category: "virtual workout",
    tags: ["virtual", "workout", "classes"],
    description: "Virtual workout classes are online fitness sessions that can be attended from home.",
    coverImage: "https://public-files.gumroad.com/uze0fpq8znbhpyew9v3blrzglj7x",
    images: ["https://public-files.gumroad.com/jrw5yose8uvk57o055j5buhpd96e"],
    discount: null,
    isBestseller: true
  },
  {
    id: 25,
    title: "Custom Emoji Packs",
    vendor: "EmojiFactory",
    price: 0,
    rating: 4.5,
    reviewCount: 78,
    thumbnail: "https://public-files.gumroad.com/lwpkbr3l8a87xdgymo4czno2tfvy",
    category: "emoji packs",
    tags: ["emoji", "custom", "packs"],
    description: "Custom emoji packs are collections of personalized emojis for messaging platforms.",
    coverImage: "https://public-files.gumroad.com/q6kdhi5d7pg3dv4kueyj2bcentac",
    images: ["https://public-files.gumroad.com/y6xxqrfe5dy94dp87fnq9w7dmgm3", "https://public-files.gumroad.com/fdf7hrr2pk2bj0qg58lvjhq7z0nq"],
    discount: null,
    isFree: true,
    isBestseller: false
  },
  {
    id: 26,
    title: "Virtual Tour Experience",
    vendor: "Tour360",
    price: 14.99,
    rating: 4.8,
    reviewCount: 145,
    thumbnail: "/placeholder.svg?height=100&width=100",
    category: "virtual tour",
    tags: ["virtual", "tour", "360"],
    description: "Virtual tours are immersive experiences that allow users to explore locations remotely.",
    coverImage: "https://public-files.gumroad.com/fdf7hrr2pk2bj0qg58lvjhq7z0nq",
    images: ["https://public-files.gumroad.com/0qyphps803zlcympil8j5o5c65yu", "https://public-files.gumroad.com/6j4chciauezqwye1se9et2mksx9q"],
    discount: null,
    isBestseller: true
  },
  {
    id: 27,
    title: "Digital Journal Templates",
    vendor: "JournalCraft",
    price: 0,
    rating: 4.4,
    reviewCount: 67,
    thumbnail: "https://public-files.gumroad.com/maabqc1l16swrblgr3sd69bbbgmr",
    category: "digital journal templates",
    tags: ["digital", "journal", "templates"],
    description: "Digital journal templates are pre-designed layouts for creating digital journals.",
    coverImage: "https://public-files.gumroad.com/hlqu9b7la0swq25s57w7434qw66v",
    images: ["https://public-files.gumroad.com/eevxsqxnpeudg6bg9kc8tjby9kxd", "https://public-files.gumroad.com/m0g4k8vlje3lzosgnqc0vgkyicg0"],
    discount: null,
    isFree: true,
    isBestseller: false
  },
  {
    id: 28,
    title: "Online Form Builders",
    vendor: "FormMaster Pro",
    price: 14.99,
    rating: 4.7,
    reviewCount: 112,
    thumbnail: "https://public-files.gumroad.com/uz6s2ehdlferpbbap0s6no1uvjq9",
    category: "form builders",
    tags: ["form", "builder", "online"],
    description: "Online form builders are web-based tools for creating and managing digital forms.",
    coverImage: "https://public-files.gumroad.com/idr9rr4b1gc41vr51889kmnp53r2",
    images: ["https://public-files.gumroad.com/mbpizgsy22nv3oia8wbjfgnnj260", "https://public-files.gumroad.com/pd9bkhya8bordh7adw881y12hby4"],
    discount: null,
    isBestseller: false
  },
  {
    id: 29,
    title: "Custom Voiceovers Service",
    vendor: "VoiceCraft Studio",
    price: 14.99,
    rating: 4.9,
    reviewCount: 189,
    thumbnail: "https://public-files.gumroad.com/wmpttxrfwjpb1h7pv67e8fee2xgy",
    category: "voiceovers",
    tags: ["voiceover", "custom", "audio"],
    description: "Custom voiceovers are personalized audio recordings for various media projects.",
    coverImage: "https://public-files.gumroad.com/jjn6hvx624gx6onvd5ndvgjmhyt2",
    images: ["https://public-files.gumroad.com/jjn6hvx624gx6onvd5ndvgjmhyt2"],
    discount: null,
    isBestseller: true
  },
  {
    id: 30,
    title: "Stock Music Tracks",
    vendor: "AudioStock Library",
    price: 14.99,
    rating: 4.6,
    reviewCount: 156,
    thumbnail: "https://blog-frontend.envato.com/cdn-cgi/image/width=2400,quality=75,format=auto/uploads/sites/2/2019/10/Best-Royalty-Free-Music-Tracks.jpg",
    category: "music tracks",
    tags: ["music", "tracks", "stock"],
    description: "Stock music tracks are pre-recorded audio files available for licensing and use in various media projects.",
    coverImage: "https://c8.alamy.com/comp/FT5HFP/sound-studio-and-audio-tracks-FT5HFP.jpg",
    images: ["https://blog-frontend.envato.com/cdn-cgi/image/width=2400,quality=75,format=auto/uploads/sites/2/2019/10/Best-Royalty-Free-Music-Tracks.jpg", "https://s.studiobinder.com/wp-content/uploads/2019/06/Best-Stock-Music-Sites-for-Video-Creators-Pond5-StudioBinder-1024x481-min.jpg.webp"],
    discount: null,
    isBestseller: true
  }
];

export const reviews: Review[] = [
  {
    id: "1",
    reviewerName: "Sarah Chen",
    rating: 5,
    text: "Absolutely love this! The quality is excellent. Saved me weeks of work.",
    date: "2024-01-15"
  },
  {
    id: "2",
    reviewerName: "Marcus Johnson",
    rating: 5,
    text: "Best purchase I've made. The attention to detail is impressive.",
    date: "2024-01-10"
  },
  {
    id: "3",
    reviewerName: "Emily Rodriguez",
    rating: 4,
    text: "Great value for money. Would love to see more variations in future updates.",
    date: "2024-01-05"
  },
  {
    id: "4",
    reviewerName: "James Wilson",
    rating: 5,
    text: "Everything works perfectly. Very satisfied with my purchase.",
    date: "2023-12-28"
  }
];

export function getProductById(id: number): Product | undefined {
  return products.find(p => p.id === id);
}

export function getRelatedProducts(currentId: number, category: string): Product[] {
  return products
    .filter(p => p.id !== currentId && p.category === category)
    .slice(0, 4);
}

export function getTopRatedProducts(limit: number = 10): Product[] {
  return [...products]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, limit);
}

export function getProductsByRating(minRating: number, maxRating: number = 5): Product[] {
  return products.filter(p => p.rating >= minRating && p.rating <= maxRating);
}

// New functions for additional filtering
export function getBestsellerProducts(): Product[] {
  return products.filter(p => p.isBestseller);
}

export function getFreeProducts(): Product[] {
  return products.filter(p => p.isFree);
}

export function getProductsByVendor(vendor: string): Product[] {
  return products.filter(p => p.vendor.toLowerCase().includes(vendor.toLowerCase()));
}

export function getProductsByReviewCount(minReviews: number): Product[] {
  return products.filter(p => p.reviewCount >= minReviews);
}

// New function to get discounted products
export function getDiscountedProducts(): Product[] {
  return products.filter(p => p.discount !== null);
}

// New function to get products with highest review count
export function getMostReviewedProducts(limit: number = 10): Product[] {
  return [...products]
    .sort((a, b) => b.reviewCount - a.reviewCount)
    .slice(0, limit);
}
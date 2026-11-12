export interface SevaItem {
  id: string;
  category: 'general' | 'construction' | 'temple' | 'bhagwat' | 'community' | 'membership';
  categoryHindi: string;
  hindiName: string;
  englishName: string;
  description: string;
  amount?: number;
  amountDisplay?: string;
  unit?: string;
  purpose: string;
  featured?: boolean;
  imageAlt?: string;
}

export interface TreeTier {
  count: number;
  amount: number;
  label: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'temple' | 'plan' | 'satellite' | 'nature' | 'seva' | 'plantation';
  categoryHindi: string;
  description: string;
  assetKey: string;
  assetUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  hindiName: string;
  role: string;
  city: string;
  state: string;
  date: string;
  category: 'donor' | 'visitor' | 'volunteer';
  categoryHindi: string;
  quote: string;
  highlight: string;
  sevaContributed?: string;
  verifiedDonor?: boolean;
}

export const siteConfig = {
  name: "सत्य सनातन धाम",
  englishName: "Satya Sanatan Dham",
  tagline: "सेवा • संस्कार • सनातन",
  englishTagline: "Sewa • Sanskar • Sanatan",
  logo: "/ssd-logo-new.png",
  logoUrl: "https://plain-apac-prod-public.komododecks.com/202610/24/DcMNjyETiSwyzv6bkik0/image.png",
  heroHeadline: "सेवा से संस्कार,\nसंस्कार से सनातन",
  heroSupporting: "सत्य सनातन धाम एक ऐसा आध्यात्मिक और सेवा-आधारित प्रयास है, जहाँ सेवा, संस्कार और सनातन मूल्यों के माध्यम से समाज, प्रकृति और आने वाली पीढ़ियों के लिए सार्थक प्रयास किया जा रहा है।",
  
  address: {
    hindiFull: "सत्य सनातन धाम, ग्राम – पासुन, मौदहा, जनपद – हमीरपुर, उत्तर प्रदेश – 210507, भारत",
    englishFull: "Satya Sanatan Dham, Gram - Pasun, Maudaha, District - Hamirpur, Uttar Pradesh - 210507, India",
    village: "ग्राम – पासुन",
    town: "मौदहा",
    district: "जनपद – हमीरपुर",
    state: "उत्तर प्रदेश",
    pincode: "210507",
    country: "भारत"
  },

  contact: {
    phones: ["+91 94525 45662", "+91 94531 60074", "+91 93354 18041"],
    primaryPhone: "+91 94525 45662",
    whatsappNumber: "919453160074",
    email: "sewa@satyasanatandham.org",
    mainWebsite: "https://www.satyasanatandham.org/",
    campaignWebsite: "https://abhiyan.satyasanatandham.org/"
  },

  payment: {
    accountHolder: "Satya Sanatan Dham",
    role: "आध्यात्मिक एवं सेवा संस्थान (Spiritual & Seva Trust)",
    bank: "State Bank of India",
    accountNumber: "45657691676",
    accountType: "Current / Trust Account",
    branch: "PURANA BUS STAND, MAUDAHA MARATHIPUR 210507",
    ifsc: "SBIN0001136",
    upiId: "45657691676@sbi",
    qrCodeUrl: "/Astha Singh UPI QR.png",
    qrNotice: "नया आधिकारिक UPI QR कोड शीघ्र उपलब्ध कराया जाएगा। कृपया सीधे बैंक खाता संख्या व IFSC द्वारा NEFT / RTGS / IMPS / NetBanking से सेवा राशि समर्पित करें।",
    disclaimer: "यह अधिकृत बैंक खाता 'सत्य सनातन धाम' के नाम पर State Bank of India में संचालित है।",
    web3formsAccessKey: "400e28fe-032b-42ee-993a-2ebbd4d17640",
    web3formsEndpoint: "https://api.web3forms.com/submit"
  },

  social: {
    facebook: "https://www.facebook.com/satyasanatandham",
    instagram: "https://www.instagram.com/satyasanatan.dham",
    youtube: "https://www.youtube.com/@satyasanatandhamorg",
    telegram: "https://t.me/satyasanatandhamorg",
    whatsapp: "https://wa.me/919452545662"
  },

  leadership: [
    {
      role: "संस्थापक / अध्यक्ष",
      name: "चन्द्रेश दास",
      description: "सत्य सनातन धाम न्यास के संस्थापक एवं मुख्य आध्यात्मिक मार्गदर्शक।",
      image: "/assets/leadership/chandresh_das.png",
      remoteImage: "https://plain-apac-prod-public.komododecks.com/202611/06/Tmr2OPR7ddvyszug6bFL/image.png"
    },
    {
      role: "अध्यक्ष",
      name: "राम श्री माताजी",
      description: "सत्य सनातन धाम न्यास की पावन अध्यक्ष एवं मातृवत आध्यात्मिक संरक्षण व मार्गदर्शन।",
      image: "/assets/leadership/ram_shri_mataji.png",
      remoteImage: "https://plain-apac-prod-public.komododecks.com/202611/06/WGEQqLHpHvvOiwhpNMU3/image.png"
    },
    {
      role: "सचिव एवं कोषाध्यक्ष",
      name: "आस्था देवी दासी",
      description: "संस्था के प्रशासनिक, वित्तीय एवं सेवा प्रबंधन का निष्ठापूर्वक दायित्व।",
      image: "/assets/leadership/astha_devi_dasi.png",
      remoteImage: "https://plain-apac-prod-public.komododecks.com/202611/06/XZbZU3JzRxB7MEPxo4tq/image.png"
    }
  ],

  treeCampaign: {
    id: "vriksharopan-maha-abhiyan",
    title: "वृक्षारोपण महाअभियान",
    englishTitle: "Mega Tree Plantation Campaign",
    date: "11 अक्टूबर 2026",
    englishDate: "11 October 2026",
    occasion: "11 अक्टूबर 2026 (शारदीय नवरात्रि) के पावन अवसर पर, राधा-कृष्ण एवं भक्त युवराज दास जी के जन्मदिवस के उपलक्ष्य में",
    overallTarget: 11000,
    firstPhaseTarget: 1100,
    currentPlanted: 0,
    location: "सत्य सनातन धाम, ग्राम – पासुन, मौदहा, जनपद – हमीरपुर, उत्तर प्रदेश – 210507",
    costBreakdownPerTree: {
      treeCost: 501,
      maintenanceYears: 5,
      maintenanceCost: 500,
      totalPerTree: 1001
    },
    baseRatePerTree: 1001,
    tiers: [
      { count: 1, amount: 1001, label: "१ वृक्ष", badge: "प्रारंभिक सेवा", treeCost: 501, maintenanceCost: 500, description: "१ पावन वृक्ष का रोपण एवं 5 वर्षों तक संपूर्ण संरक्षण" },
      { count: 2, amount: 2001, label: "२ वृक्ष", badge: "शुभ संकल्प", treeCost: 1002, maintenanceCost: 999, description: "२ वृक्षों का रोपण एवं 5 वर्षों तक नियमित देखभाल" },
      { count: 3, amount: 3001, label: "३ वृक्ष", badge: "सद्भावना सेवा", treeCost: 1503, maintenanceCost: 1498, description: "३ वृक्षों का रोपण व 5 वर्ष का संपूर्ण पोषण" },
      { count: 4, amount: 4001, label: "४ वृक्ष", badge: "समृद्धि सेवा", treeCost: 2004, maintenanceCost: 1997, description: "४ वृक्षों का पावन योगदान व 5 वर्ष संरक्षण" },
      { count: 5, amount: 5001, label: "५ वृक्ष", badge: "सर्वाधिक लोकप्रिय", treeCost: 2505, maintenanceCost: 2496, description: "५ फलदार/छायादार वृक्ष एवं 5 वर्ष तक पूर्ण संरक्षण", popular: true }
    ],
    dedicationOccasions: [
      { id: "parents", icon: "❤️", label: "माता-पिता के नाम" },
      { id: "family", icon: "👨‍👩‍👧", label: "परिवार के नाम" },
      { id: "birthday", icon: "🎂", label: "जन्मदिन के पावन अवसर पर" },
      { id: "anniversary", icon: "💍", label: "विवाह / वर्षगांठ पर" },
      { id: "children", icon: "👶", label: "बच्चों के उज्ज्वल भविष्य हेतु" },
      { id: "memorial", icon: "🙏", label: "प्रियजन की पावन स्मृति में" },
      { id: "nature", icon: "🌱", label: "प्रकृति एवं धरा के प्रति समर्पण" }
    ],
    realDonors: [
      {
        name: "पीयूष सिंह (Piyush Singh)",
        city: "लखनऊ (Lucknow)",
        trees: 1,
        amount: 1001,
        dedication: "बच्चों के उज्ज्वल भविष्य हेतु",
        avatarText: "PS",
        avatarBg: "#5B2A1B"
      },
      {
        name: "सुनीता वर्मा (Sunita Verma)",
        city: "कानपुर (Kanpur)",
        trees: 2,
        amount: 2001,
        dedication: "पूज्य माता-पिता के नाम",
        avatarText: "SV",
        avatarBg: "#D9531E"
      },
      {
        name: "राजेश कुमार शर्मा (Rajesh Sharma)",
        city: "हमीरपुर (Hamirpur)",
        trees: 5,
        amount: 5001,
        dedication: "परिवार के सुख-समृद्धि एवं शांति हेतु",
        avatarText: "RS",
        avatarBg: "#2E7D32"
      },
      {
        name: "डॉ. अरविन्द पटेल (Dr. Arvind Patel)",
        city: "प्रयागराज (Prayagraj)",
        trees: 3,
        amount: 3001,
        dedication: "पूर्वजों की पावन पुण्यस्मृति में",
        avatarText: "AP",
        avatarBg: "#C59B27"
      },
      {
        name: "मीनाक्षी एवं आलोक गुप्ता (M. & A. Gupta)",
        city: "नोएडा (Noida)",
        trees: 2,
        amount: 2001,
        dedication: "विवाह की 10वीं वर्षगांठ के पावन अवसर पर",
        avatarText: "AG",
        avatarBg: "#7A3B27"
      }
    ],
    web3formsAccessKey: "400e28fe-032b-42ee-993a-2ebbd4d17640",
    externalUrl: "https://abhiyan.satyasanatandham.org/"
  },

  temple: {
    name: "श्री श्री राधा कृष्ण बिहारी जी मंदिर",
    englishName: "श्री श्री राधा कृष्ण बिहारी जी मंदिर",
    plotDimensions: "100' x 250'",
    totalPlotArea: "25,000 sq.ft",
    mainStructureArea: "2,500 sq.ft",
    existingBuildingsArea: "1,200 sq.ft (Offices & Service Block)",
    landscapingArea: "Approx. 15,000 sq.ft",
    forecourtArea: "Approx. 5,000 sq.ft",
    features: [
      "परंपरागत नागर शैली का भव्य शिखर",
      "राजस्थान लाल बलुआ पत्थर (Dholpur/Bansi Pahadpur Sandstone)",
      "केंद्रीय अष्टकोणीय नक्षत्र जल फव्वारा एवं दीप स्तंभ",
      "सघन वृक्ष वाटिका — आम, गुलमोहर, गुलाब, अनार",
      "सटीक वैदिक परिक्रमा पथ एवं प्रशस्त आंगन"
    ]
  }
};

// Verified Seva Data (Never invent prices; show "योगदान राशि के लिए संपर्क करें" where unpriced)
export const sevasData: SevaItem[] = [
  // --- FEATURED & GENERAL MAIN SEVAS ---
  {
    id: "vriksharopan-seva",
    category: "general",
    categoryHindi: "मुख्य सेवा",
    hindiName: "वृक्षारोपण अभियान",
    englishName: "Tree Plantation Campaign",
    description: "11,000 वृक्षों का पावन महासंकल्प (प्रथम चरण: 1,100 वृक्ष - 11 अक्टूबर 2026, शारदीय नवरात्रि)। प्रति वृक्ष ₹501 पौधा मूल्य + ₹500 5-वर्षीय पोषण, संरक्षण एवं जल प्रबंधन।",
    amount: 1001,
    amountDisplay: "₹1,001 (प्रति वृक्ष, 5 वर्ष संरक्षण सहित)",
    purpose: "पौधा खरीद, सुरक्षा घेरा (Tree Guard), 5 वर्षों तक नियमित जल सिंचन, जैविक खाद एवं सर्वांगीण पोषण।",
    featured: true
  },
  {
    id: "gau-mata-seva",
    category: "general",
    categoryHindi: "मुख्य सेवा",
    hindiName: "गौ माता सेवा",
    englishName: "Cow Seva (Gau Seva)",
    description: "धाम में निराश्रित एवं सुरभित देशी गोवंश का पालन-पोषण, हरा चारा, दलिया एवं औषधीय देखरेख।",
    amount: 2100,
    amountDisplay: "₹2,100",
    purpose: "गोवंश का नित्य आहार, स्वच्छता और सुव्यवस्थित गोशाला संचालन।",
    featured: true
  },
  {
    id: "mandir-nirman-seva",
    category: "general",
    categoryHindi: "मुख्य सेवा",
    hindiName: "मंदिर निर्माण सेवा",
    englishName: "Temple Construction Seva",
    description: "श्री श्री राधा कृष्ण बिहारी जी के भव्य मंदिर के निर्माण में पावन शिला एवं स्तंभों हेतु सहयोग।",
    amount: 5100,
    amountDisplay: "₹5,100 (प्रति वर्ग फिट)",
    purpose: "सैंडस्टोन नक्काशी, आधार सुदृढ़ीकरण एवं गर्भगृह निर्माण सामग्री।",
    featured: true
  },
  {
    id: "gurukul-expansion-seva",
    category: "general",
    categoryHindi: "मुख्य सेवा",
    hindiName: "गुरुकुल विस्तार की सेवा",
    englishName: "Gurukul Expansion Seva",
    description: "भारतीय संस्कृति, वेद-वेदांग, चरित्र निर्माण और संस्कार-युक्त शिक्षा के प्रसार हेतु गुरुकुल का निर्माण व विस्तार।",
    purpose: "विद्यार्थियों के अध्ययन कक्ष, ग्रंथ, शिक्षा सामग्री एवं आवासीय व्यवस्था।",
    featured: true
  },
  {
    id: "anna-daan-seva",
    category: "general",
    categoryHindi: "मुख्य सेवा",
    hindiName: "अन्न दान सेवा (प्रसादम)",
    englishName: "Food for Life / Anna Daan",
    description: "मंदिर एवं धाम में आने वाले साधु-संतों, भक्तों और जरूरतमंदों के लिए नित्य एवं साप्ताहिक भंडारा प्रसाद।",
    amount: 11000,
    amountDisplay: "₹11,000",
    purpose: "महाप्रसादम वितरण एवं अन्नक्षेत्र की निर्बाध सेवा।",
    featured: true
  },
  {
    id: "sadhu-bhojan-seva",
    category: "general",
    categoryHindi: "मुख्य सेवा",
    hindiName: "साधु सेवा (एक दिन का साधु भोजन)",
    englishName: "Sadhu Seva (Full Day Meal)",
    description: "धाम में पधारने वाले तपस्वी साधु-संतों एवं सन्यासियों के लिए आदरपूर्वक सात्विक भोजन व सत्कार।",
    amount: 21000,
    amountDisplay: "₹21,000",
    purpose: "साधु-संतों की सेवा, आतिथ्य एवं आहार व्यवस्था।",
    featured: true
  },
  {
    id: "bhagwan-vastra-seva",
    category: "general",
    categoryHindi: "मुख्य सेवा",
    hindiName: "भगवान वस्त्र सेवा",
    englishName: "Deity Clothing Seva",
    description: "श्री श्री राधा कृष्ण बिहारी जी के दैनिक एवं विशेष उत्सवों के सुंदर वस्त्रों व पीतांबरी का अर्पण।",
    amount: 11000,
    amountDisplay: "₹11,000",
    purpose: "ठाकुर जी के शयन एवं दिवस पोशाक का निर्माण व श्रृंगार।",
    featured: true
  },
  {
    id: "geeta-daan-seva",
    category: "general",
    categoryHindi: "मुख्य सेवा",
    hindiName: "गीता दान (108 पुस्तकें)",
    englishName: "Geeta Donation (108 Books)",
    description: "श्रीमद्भगवद्गीता के ज्ञान को जन-जन तक पहुँचाने हेतु 108 पावन प्रतियों का निःशुल्क वितरण।",
    amount: 5100,
    amountDisplay: "₹5,100",
    purpose: "सनातन धर्म के मूलभूत ज्ञान का प्रचार एवं विद्यार्थियों में वितरण।",
    featured: true
  },
  {
    id: "bhumi-daan-seva",
    category: "general",
    categoryHindi: "मुख्य सेवा",
    hindiName: "भूमिदान सेवा",
    englishName: "Land Donation Seva",
    description: "धाम के सेवा प्रकल्पों, गोशाला, गुरुकुल एवं मंदिर परिसर के भू-विस्तार हेतु भूमिदान सहयोग।",
    purpose: "सतत विस्तार एवं सेवा कार्यों के लिए स्थायी भूमि का संवर्धन।"
  },
  {
    id: "radha-krishna-murti-seva",
    category: "general",
    categoryHindi: "मुख्य सेवा",
    hindiName: "राधा-कृष्ण मूर्ति निर्माण सेवा",
    englishName: "Radha-Krishna Deity Construction Seva",
    description: "परम पावन श्री श्री राधा कृष्ण बिहारी जी के विग्रह निर्माण एवं प्राण-प्रतिष्ठा का महापुण्य।",
    purpose: "दिव्य विग्रह की नक्काशी, आभूषण एवं प्रतिष्ठा पूजन।"
  },
  {
    id: "nasha-mukt-samaj-seva",
    category: "general",
    categoryHindi: "मुख्य सेवा",
    hindiName: "नशा मुक्ति समाज की सेवा",
    englishName: "Addiction-Free Society Seva",
    description: "ग्रामीण एवं युवा वर्ग को व्यसनों से मुक्त कर संस्कारवान और कर्मठ जीवन की ओर प्रेरित करने का अभियान।",
    purpose: "जन-जागरूकता शिविर, परामर्श एवं स्वास्थ्य सत्र।"
  },
  {
    id: "yoga-nirog-seva",
    category: "general",
    categoryHindi: "मुख्य सेवा",
    hindiName: "योग-निरोग की सेवा",
    englishName: "Yoga & Wellness Seva",
    description: "प्राचीन भारतीय योग, प्राणायाम एवं प्राकृतिक चिकित्सा के माध्यम से स्वस्थ समाज का निर्माण।",
    purpose: "योग शिविर, प्रशिक्षण और आरोग्य परामर्श।"
  },
  {
    id: "kanya-vivah-seva",
    category: "general",
    categoryHindi: "मुख्य सेवा",
    hindiName: "कन्या विवाह की सेवा",
    englishName: "Girl's Marriage Seva",
    description: "आर्थिक रूप से असमर्थ परिवारों की कन्याओं के ससम्मान वैवाहिक संस्कार में आवश्यक सहयोग।",
    purpose: "विवाह सामग्री, संस्कार आयोजन एवं आशीर्वाद।"
  },
  {
    id: "kirtan-seva",
    category: "general",
    categoryHindi: "मुख्य सेवा",
    hindiName: "कीर्तन सेवा",
    englishName: "Kirtan Seva",
    description: "भगवान नाम संकीर्तन, वाद्य यंत्र एवं नित्य हरिनाम गान की व्यवस्था।",
    purpose: "हरिनाम संकीर्तन मंडली एवं आध्यात्मिक अनुष्ठान।"
  },
  {
    id: "kirtan-prasadam-seva",
    category: "general",
    categoryHindi: "मुख्य सेवा",
    hindiName: "कीर्तन प्रसादम सेवा",
    englishName: "Kirtan Prasadam Seva",
    description: "हर संकीर्तन सभा के उपरांत सभी उपस्थित भक्तों में मिष्ठान एवं प्रसाद वितरण।",
    purpose: "संकीर्तन भक्तों में प्रसाद सेवा।"
  },
  {
    id: "vriddhashram-seva",
    category: "general",
    categoryHindi: "मुख्य सेवा",
    hindiName: "वृद्धाश्रम सेवा",
    englishName: "Old Age Care Seva",
    description: "बुजुर्गों के ससम्मान जीवन, आश्रय, स्वास्थ्य देखभाल और आध्यात्मिक शांति का संकल्प।",
    purpose: "वरिष्ठजनों के आवास, भोजन और चिकित्सीय देखरेख।"
  },
  {
    id: "mewa-mithai-seva",
    category: "general",
    categoryHindi: "मुख्य सेवा",
    hindiName: "मेवा एवं मिठाई की सेवा",
    englishName: "Dry Fruits & Sweets Seva",
    description: "ठाकुर जी के दैनिक भोग एवं उत्सवों में शुद्ध सूखे मेवे व पारंपरिक मिठाइयों का भोग।",
    purpose: "पवित्र राजभोग एवं पंचामृत में मेवा सामग्री।"
  },
  {
    id: "fal-phool-seva",
    category: "general",
    categoryHindi: "मुख्य सेवा",
    hindiName: "फल एवं फूल की सेवा",
    englishName: "Fruits & Flowers Seva",
    description: "दैनिक आरती, पुष्प माला और ताजे फलों के नैवेद्य का ठाकुर जी को अर्पण।",
    amount: 5100,
    amountDisplay: "₹5,100 (पुष्प सज्जा)",
    purpose: "पुष्प माला, श्रृंगार एवं मौसम के ताजे फल भोग।"
  },
  {
    id: "tulsi-mata-seva",
    category: "general",
    categoryHindi: "मुख्य सेवा",
    hindiName: "तुलसी माता सेवा",
    englishName: "Tulsi Mata Seva",
    description: "पवित्र तुलसी वन का रोपण, नित्य जल अर्पण और भगवान के चरणों में मंजरी-पत्र अर्पण।",
    purpose: "तुलसी वाटिका संवर्धन एवं नित्य पूजन।"
  },
  {
    id: "chhappan-bhog-mandir",
    category: "general",
    categoryHindi: "मुख्य सेवा",
    hindiName: "56 भोग मंदिर सेवा",
    englishName: "56 Bhog Temple Seva",
    description: "भगवान श्री श्री राधा कृष्ण बिहारी जी को 56 प्रकार के दिव्य व्यंजनों का विशेष भोग अर्पण।",
    amount: 25000,
    amountDisplay: "₹25,000",
    purpose: "उत्सवों पर 56 भोग की शुद्ध तैयारी व प्रसाद वितरण।"
  },
  {
    id: "rasoi-bartan-seva",
    category: "general",
    categoryHindi: "मुख्य सेवा",
    hindiName: "रसोई बर्तन की सेवा",
    englishName: "Kitchen Utensils Seva",
    description: "अन्नक्षेत्र एवं विशाल भंडारे हेतु पारंपरिक पीतल, तांबा व स्टील के विशाल बर्तनों की सेवा।",
    purpose: "सामूहिक भंडारे के लिए बर्तन व उपकरण।"
  },

  // --- TEMPLE DAILY SERVICES (VERIFIED PRICING) ---
  {
    id: "ajeevan-sadasyata-51000",
    category: "temple",
    categoryHindi: "मंदिर दैनिक सेवा",
    hindiName: "आजीवन सदस्यता (मंदिर सेवा)",
    englishName: "Life Membership (Temple Services)",
    description: "सत्य सनातन धाम के मंदिर सेवा परिवार से जीवनपर्यंत संबद्धता एवं विशेष आध्यात्मिक सान्निध्य।",
    amount: 51000,
    amountDisplay: "₹51,000",
    purpose: "मंदिर के स्थायी सेवा कोष एवं निरंतर धार्मिक अनुष्ठान।"
  },
  {
    id: "pure-din-aarti-seva",
    category: "temple",
    categoryHindi: "मंदिर दैनिक सेवा",
    hindiName: "पूरे दिन आरती सेवा",
    englishName: "Whole-Day Aarti Seva",
    description: "मंगला, राजभोग, संध्या और शयन — पूरे दिन की सभी आरतियों का पुण्य यजमानत्व।",
    amount: 5100,
    amountDisplay: "₹5,100",
    purpose: "सभी आरतियों की धूप, दीप, कपूर, पुष्प एवं दक्षिणा।"
  },
  {
    id: "rajbhog-seva",
    category: "temple",
    categoryHindi: "मंदिर दैनिक सेवा",
    hindiName: "राजभोग सेवा",
    englishName: "Rajbhog Seva",
    description: "दोपहर में श्री ठाकुर जी को अर्पित किए जाने वाले मुख्य दिव्य राजभोग की पूर्ण सेवा।",
    amount: 11000,
    amountDisplay: "₹11,000",
    purpose: "शुद्ध घी, मेवे, अनाज व सात्विक व्यंजनों से तैयार राजभोग।"
  },
  {
    id: "vishesh-prasad-seva",
    category: "temple",
    categoryHindi: "मंदिर दैनिक सेवा",
    hindiName: "विशेष प्रसाद सेवा",
    englishName: "Special Prasadam Seva",
    description: "पर्व-त्योहारों पर भक्तों में वितरण हेतु विशेष भोग एवं पंचामृत प्रसाद सेवा।",
    amount: 21000,
    amountDisplay: "₹21,000",
    purpose: "व्यापक भक्त समाज हेतु विशेष प्रसाद वितरण।"
  },
  {
    id: "vigrah-bhog-seva",
    category: "temple",
    categoryHindi: "मंदिर दैनिक सेवा",
    hindiName: "विग्रह भोग सेवा (पूरे दिन)",
    englishName: "Whole Day Deity Bhoga",
    description: "प्रातः बालभोग से लेकर रात्रि शयनभोग तक सभी प्रहरों के भोग का संकल्प।",
    amount: 21000,
    amountDisplay: "₹21,000",
    purpose: "दिनभर के सभी 5 प्रहर भोग की पूर्ण व्यवस्था।"
  },
  {
    id: "pure-din-mandir-seva",
    category: "temple",
    categoryHindi: "मंदिर दैनिक सेवा",
    hindiName: "पूरे दिन मंदिर सेवा",
    englishName: "Whole Day Temple Seva",
    description: "एक पूरे दिन का संपूर्ण मंदिर संचालन, पूजन, भोग, दीप, स्वच्छता व सेवा यजमानत्व।",
    amount: 51000,
    amountDisplay: "₹51,000",
    purpose: "एक दिन की संपूर्ण मंदिर व्यवस्था का निर्वहन।"
  },
  {
    id: "ratri-vastra-seva",
    category: "temple",
    categoryHindi: "मंदिर दैनिक सेवा",
    hindiName: "रात्रि वस्त्र सेवा",
    englishName: "Night Dress for the Lord",
    description: "शयन आरती के समय ठाकुर जी को अर्पित होने वाली कोमल रात्रि पोशाक की सेवा।",
    amount: 11000,
    amountDisplay: "₹11,000",
    purpose: "रात्रि शयन वस्त्र एवं शैया सेवा।"
  },
  {
    id: "shringar-aabhushan-seva",
    category: "temple",
    categoryHindi: "मंदिर दैनिक सेवा",
    hindiName: "शृंगार / आभूषण सेवा",
    englishName: "Jewellery & Shringar Donation",
    description: "ठाकुर जी के मुकुट, कुंडल, हार, बाजूबंद व चरण पादुका के निर्माण व अर्पण का सौभाग्य।",
    amount: 51000,
    amountDisplay: "₹51,000",
    purpose: "दिव्य आभूषण एवं शृंगार सामग्री का संवर्धन।"
  },
  {
    id: "divas-vastra-seva",
    category: "temple",
    categoryHindi: "मंदिर दैनिक सेवा",
    hindiName: "दिवस वस्त्र सेवा",
    englishName: "Day Dress for the Lord",
    description: "प्रातः शृंगार के समय ठाकुर जी की मुख्य दिवस पोशाक का पावन अर्पण।",
    amount: 11000,
    amountDisplay: "₹11,000",
    purpose: "राजसी दिवस पोशाक निर्माण एवं अर्पण।"
  },
  {
    id: "kaksh-daan-seva",
    category: "temple",
    categoryHindi: "मंदिर दैनिक सेवा",
    hindiName: "कक्ष दान सेवा",
    englishName: "Room Donation (Dham Kaksh)",
    description: "धाम परिसर में साधु-संतों एवं भक्तों के विश्राम हेतु एक संपूर्ण सेवा कक्ष का निर्माण सहयोग।",
    amount: 100000,
    amountDisplay: "₹1,00,000",
    purpose: "एक संपूर्ण सेवा कक्ष का स्थायी निर्माण।"
  },

  // --- BHAGWAT SEVA (VERIFIED PRICING) ---
  {
    id: "bhagwat-purn-ek-divasiya",
    category: "bhagwat",
    categoryHindi: "भागवत सेवा",
    hindiName: "पूर्ण एक दिवसीय भागवत सेवा",
    englishName: "Full One-Day Bhagwat Seva",
    description: "श्रीमद्भागवत कथा के दौरान एक संपूर्ण दिन का मुख्य यजमानत्व एवं कथा व्यवस्थापन।",
    amount: 51000,
    amountDisplay: "₹51,000",
    purpose: "कथा व्यासपीठ पूजन, दिवस भर का भोग व प्रसाद।"
  },
  {
    id: "ravivar-utsav-bhandara",
    category: "bhagwat",
    categoryHindi: "भागवत सेवा",
    hindiName: "रविवार उत्सव भण्डारा",
    englishName: "Sunday Festival Bhandara",
    description: "साप्ताहिक रविवार को होने वाले वृहद भंडारे में हजारों भक्तों के महाप्रसाद की सेवा।",
    amount: 41000,
    amountDisplay: "₹41,000",
    purpose: "रविवार महाभंडारा अन्न क्षेत्र।"
  },
  {
    id: "mangal-bhog-aarti",
    category: "bhagwat",
    categoryHindi: "भागवत सेवा",
    hindiName: "मंगल भोग एवं आरती",
    englishName: "Mangal Bhog & Aarti",
    description: "ब्राह्ममुहूर्त में होने वाली मंगला आरती एवं बाल रूप भोग का यजमानत्व।",
    amount: 31000,
    amountDisplay: "₹31,000",
    purpose: "मंगला भोग, दुग्ध, माखन एवं प्रातः आरती।"
  },
  {
    id: "bhagwat-raj-bhog",
    category: "bhagwat",
    categoryHindi: "भागवत सेवा",
    hindiName: "राज भोग एवं आरती (भागवत सेवा)",
    englishName: "Raj Bhog & Aarti",
    description: "कथा प्रसंग के मध्य ठाकुर जी के राजभोग एवं आरती का पावन समर्पण।",
    amount: 5100,
    amountDisplay: "₹5,100",
    purpose: "राजभोग एवं मध्यान आरती सेवा।"
  },
  {
    id: "bal-bhog-aarti",
    category: "bhagwat",
    categoryHindi: "भागवत सेवा",
    hindiName: "बाल भोग एवं आरती",
    englishName: "Bal Bhog & Aarti",
    description: "प्रातःकालीन बाल भोग, फल, मिश्री व माखन अर्पण।",
    amount: 3100,
    amountDisplay: "₹3,100",
    purpose: "बाल भोग एवं आरती सामग्री।"
  },
  {
    id: "utthapan-bhog-aarti",
    category: "bhagwat",
    categoryHindi: "भागवत सेवा",
    hindiName: "उत्थापन भोग एवं आरती",
    englishName: "Utthapan Bhog & Aarti",
    description: "अपराह्न विश्रामोपरांत जागरण आरती एवं उत्थापन भोग सेवा।",
    amount: 3100,
    amountDisplay: "₹3,100",
    purpose: "अपराह्न जागरण भोग व आरती।"
  },
  {
    id: "sandhya-bhog-aarti",
    category: "bhagwat",
    categoryHindi: "भागवत सेवा",
    hindiName: "संध्या भोग एवं आरती",
    englishName: "Sandhya Bhog & Aarti",
    description: "सायंकालीन गोधूलि वेला की दिव्य महाआरती एवं नैवेद्य।",
    amount: 3100,
    amountDisplay: "₹3,100",
    purpose: "संध्या दीपदान एवं भोग।"
  },
  {
    id: "shayan-bhog-aarti",
    category: "bhagwat",
    categoryHindi: "भागवत सेवा",
    hindiName: "शयन भोग एवं आरती",
    englishName: "Shayan Bhog & Aarti",
    description: "रात्रि में ठाकुर जी के शयन पूर्व भोग, सुगंधित जल एवं शयन आरती।",
    amount: 3100,
    amountDisplay: "₹3,100",
    purpose: "शयन नैवेद्य व आरती।"
  },
  {
    id: "sampurna-panchamrit-pushpa",
    category: "bhagwat",
    categoryHindi: "भागवत सेवा",
    hindiName: "सम्पूर्ण दिन का पंचामृत, पुष्पादि",
    englishName: "Full Day Panchamrit & Flowers",
    description: "दिनभर के सभी पंचामृत अभिषेक, पुष्प शृंगार, अष्टगंध एवं तुलसी दल।",
    amount: 15000,
    amountDisplay: "₹15,000",
    purpose: "अभिषेक सामग्री, पुष्प व सुगंधित द्रव्य।"
  },
  {
    id: "bhagwan-shayan-poshak",
    category: "bhagwat",
    categoryHindi: "भागवत सेवा",
    hindiName: "श्री भगवान का शयन पोषाक",
    englishName: "Lord's Shayan Poshak",
    description: "भागवत कथा महोत्सव में विशेष रूप से निर्मित शयन पोशाक।",
    amount: 51000,
    amountDisplay: "₹51,000",
    purpose: "उत्सव शयन पोशाक निर्माण।"
  },
  {
    id: "bhagwan-shringar-poshak",
    category: "bhagwat",
    categoryHindi: "भागवत सेवा",
    hindiName: "श्री भगवान का श्रृंगार पोषाक",
    englishName: "Lord's Grand Shringar Poshak",
    description: "जरी, रेशम एवं हस्तकला से सुसज्जित राजसी भव्य श्रृंगार पोशाक।",
    amount: 100000,
    amountDisplay: "₹1,00,000",
    purpose: "परम पावन राजसी श्रृंगार पोशाक समर्पण।"
  },

  // --- SADHU, GAU & ANNA DAAN (VERIFIED PRICING) ---
  {
    id: "gau-hara-chara-1day",
    category: "community",
    categoryHindi: "गौमाता सेवा",
    hindiName: "गोमाता का हरा चारा (1 दिन)",
    englishName: "Green Fodder for Cows (1 Day)",
    description: "गोशाला के सभी गोवंश के लिए एक पूरे दिन के ताजे पौष्टिक हरे चारे की व्यवस्था।",
    amount: 3100,
    amountDisplay: "₹3,100",
    purpose: "गोशाला में ताजे हरे चारे की आपूर्ति।"
  },
  {
    id: "gau-bhojan-1day",
    category: "community",
    categoryHindi: "गौमाता सेवा",
    hindiName: "गोमाता का एक दिन का भोजन",
    englishName: "Complete Meal for Cows (1 Day)",
    description: "गोमाता के लिए दलिया, चोकर, गुड़, खली एवं संपूर्ण पौष्टिक आहार की एक दिवसीय सेवा।",
    amount: 5100,
    amountDisplay: "₹5,100",
    purpose: "दलिया, खली, गुड़ और संपूर्ण गो-आहार।"
  },
  {
    id: "gau-aushadhi-upchar",
    category: "community",
    categoryHindi: "गौमाता सेवा",
    hindiName: "गोमाता का औषधि उपचार (1 माह)",
    englishName: "Cows Medical Care & Treatment (1 Month)",
    description: "बीमार, वृद्ध एवं चोटिल गोवंश के एक महीने का चिकित्सीय उपचार, दवाएं व डॉक्टर परामर्श।",
    amount: 11000,
    amountDisplay: "₹11,000",
    purpose: "गो-चिकित्सा, प्राथमिक उपचार व आवश्यक औषधियां।"
  },
  {
    id: "mangalvar-prasadam",
    category: "community",
    categoryHindi: "अन्न दान",
    hindiName: "मंगलवार प्रसादम् वितरण",
    englishName: "Tuesday Prasadam Distribution",
    description: "प्रत्येक मंगलवार को धाम में आने वाले श्रद्धालुओं में विशेष सात्विक हलवा-चना प्रसाद वितरण।",
    amount: 11000,
    amountDisplay: "₹11,000",
    purpose: "मंगलवार विशेष प्रसाद वितरण।"
  },
  {
    id: "ravivar-prasadam",
    category: "community",
    categoryHindi: "अन्न दान",
    hindiName: "रविवार प्रसादम् वितरण",
    englishName: "Sunday Prasadam Distribution",
    description: "रविवार को सत्संग व दर्शनार्थियों के लिए विशाल पैमाने पर भंडारा प्रसादम वितरण।",
    amount: 31000,
    amountDisplay: "₹31,000",
    purpose: "रविवार भंडारा अन्नक्षेत्र।"
  },
  {
    id: "mandir-nirman-1sqft",
    category: "community",
    categoryHindi: "मंदिर निर्माण सहयोग",
    hindiName: "प्रति वर्ग फिट मंदिर निर्माण खर्च",
    englishName: "Temple Construction Cost (1 sq.ft)",
    description: "मंदिर के 1 वर्ग फीट क्षेत्रफल के निर्माण, नक्काशी एवं सैंडस्टोन चिनाई का यजमानत्व।",
    amount: 5100,
    amountDisplay: "₹5,100",
    purpose: "1 वर्ग फीट सैंडस्टोन मंदिर निर्माण।"
  },
  {
    id: "mandir-nirman-half-sqft",
    category: "community",
    categoryHindi: "मंदिर निर्माण सहयोग",
    hindiName: "आधा वर्ग फिट मंदिर निर्माण खर्च",
    englishName: "Temple Construction Cost (0.5 sq.ft)",
    description: "आधा वर्ग फीट मंदिर निर्माण में पावन योगदान देकर पुण्य के भागीदार बनें।",
    amount: 2600,
    amountDisplay: "₹2,600",
    purpose: "0.5 वर्ग फीट सैंडस्टोन मंदिर निर्माण।"
  },
  {
    id: "ajeevan-sadasyata-55555",
    category: "membership",
    categoryHindi: "आजीवन सदस्यता (अन्न दान / न्यास)",
    hindiName: "आजीवन सदस्यता — ₹55,555",
    englishName: "Life Membership (Trust / Anna Daan Context)",
    description: "सत्य सनातन धाम के अन्नक्षेत्र एवं सेवा प्रकल्पों से जीवनपर्यंत संरक्षक के रूप में जुड़ने का पावन संकल्प।",
    amount: 55555,
    amountDisplay: "₹55,555",
    purpose: "अन्नक्षेत्र एवं दीर्घकालिक सेवा योजनाओं का स्थायी संबल।"
  },

  // --- CONSTRUCTION SEVA CATALOGUE (36 ITEMS) ---
  // All verified items with "योगदान राशि के लिए संपर्क करें" where exact amount is not fixed
  {
    id: "gaushala-nirman",
    category: "construction",
    categoryHindi: "निर्माण कार्य सेवा",
    hindiName: "गौशाला निर्माण सेवा",
    englishName: "Gaushala Construction Seva",
    description: "सुरभित देशी गोवंश के लिए हवादार शेड, चरागाह, जलकुंड एवं भंडारण का निर्माण।",
    purpose: "आधुनिक एवं पारंपरिक गोशाला परिसर का निर्माण।"
  },
  {
    id: "granth-pustakalay-nirman",
    category: "construction",
    categoryHindi: "निर्माण कार्य सेवा",
    hindiName: "ग्रंथ एवं पुस्तकालय घर निर्माण सेवा",
    englishName: "Scripture & Library Building Construction Seva",
    description: "वेद, उपनिषद, पुराण एवं सनातन साहित्य के संरक्षण व अध्ययन हेतु भव्य पुस्तकालय का निर्माण।",
    purpose: "धार्मिक साहित्य पुस्तकालय कक्ष।"
  },
  {
    id: "kirtan-ghar-nirman",
    category: "construction",
    categoryHindi: "निर्माण कार्य सेवा",
    hindiName: "कीर्तन घर निर्माण सेवा",
    englishName: "Kirtan Hall Construction Seva",
    description: "निरंतर संकीर्तन, सत्संग और नाम जप के लिए ध्वनिक-अनुकूल कीर्तन भवन।",
    purpose: "संकीर्तन एवं ध्यान सभागार।"
  },
  {
    id: "bhagwan-ghar-seva",
    category: "construction",
    categoryHindi: "निर्माण कार्य सेवा",
    hindiName: "भगवान घर सेवा",
    englishName: "Deity Room Seva",
    description: "ठाकुर जी के दैनिक पूजन, शयन व विश्राम हेतु पावन कक्ष का निर्माण।",
    purpose: "ठाकुर जी का सेवा कक्ष।"
  },
  {
    id: "bhakt-ghar-seva",
    category: "construction",
    categoryHindi: "निर्माण कार्य सेवा",
    hindiName: "भक्त घर सेवा",
    englishName: "Devotee Room Seva",
    description: "दूर-दराज से आने वाले समर्पित भक्तों के रहने के लिए कक्ष निर्माण।",
    purpose: "भक्त निवास कक्ष।"
  },
  {
    id: "snan-ghar-seva",
    category: "construction",
    categoryHindi: "निर्माण कार्य सेवा",
    hindiName: "स्नान घर सेवा",
    englishName: "Bathing Room Facility Seva",
    description: "भक्तों एवं तीर्थयात्रियों की शुचिता हेतु स्वच्छ स्नानगृह व्यवस्था।",
    purpose: "स्नानघर कॉम्प्लेक्स।"
  },
  {
    id: "shauch-ghar-seva",
    category: "construction",
    categoryHindi: "निर्माण कार्य सेवा",
    hindiName: "शौच घर सेवा",
    englishName: "Sanitation Facility Seva",
    description: "परिसर की स्वच्छता और पर्यावरणीय पवित्रता हेतु आधुनिक शौचालय निर्माण।",
    purpose: "स्वच्छता शौचालय निर्माण।"
  },
  {
    id: "prasad-ghar-seva",
    category: "construction",
    categoryHindi: "निर्माण कार्य सेवा",
    hindiName: "प्रसाद घर सेवा",
    englishName: "Prasadam Room Seva",
    description: "भोग अर्पण के उपरांत महाप्रसाद को व्यवस्थित रखने व वितरण हेतु पावन कक्ष।",
    purpose: "प्रसाद भंडारण व वितरण कक्ष।"
  },
  {
    id: "bhojan-ghar-nirman",
    category: "construction",
    categoryHindi: "निर्माण कार्य सेवा",
    hindiName: "भोजन घर निर्माण सेवा",
    englishName: "Dining Hall Construction Seva",
    description: "पंगत में बैठकर भक्तों को ससम्मान प्रसादम ग्रहण कराने हेतु प्रशस्त भोजनशाला।",
    purpose: "सामूहिक प्रसादम हॉल।"
  },
  {
    id: "dharamshala-ghar-nirman",
    category: "construction",
    categoryHindi: "निर्माण कार्य सेवा",
    hindiName: "धर्मशाला घर निर्माण सेवा",
    englishName: "Dharamshala Construction Seva",
    description: "यात्रियों, साधकों एवं सेवाभावी परिवारों के रात्रि विश्राम हेतु निःशुल्क धर्मशाला।",
    purpose: "धर्मशाला भवन निर्माण।"
  },
  {
    id: "bijli-ghar-nirman",
    category: "construction",
    categoryHindi: "निर्माण कार्य सेवा",
    hindiName: "बिजली घर निर्माण सेवा",
    englishName: "Electrical & Solar Control Room Seva",
    description: "धाम में निर्बाध प्रकाश, सौर ऊर्जा एवं विद्युत नियंत्रण कक्ष की स्थापना।",
    purpose: "विद्युत एवं सौर ऊर्जा अवसंरचना।"
  },
  {
    id: "bhandar-ghar-nirman",
    category: "construction",
    categoryHindi: "निर्माण कार्य सेवा",
    hindiName: "भंडार घर निर्माण सेवा",
    englishName: "Store Room Construction Seva",
    description: "अन्नक्षेत्र, गोशाला एवं मंदिर सामग्री के सुरक्षित भंडारण हेतु सुदृढ़ भंडारगृह।",
    purpose: "सामग्री भंडार कक्ष।"
  },
  {
    id: "kuda-ghar-nirman",
    category: "construction",
    categoryHindi: "निर्माण कार्य सेवा",
    hindiName: "कूड़ा घर निर्माण सेवा",
    englishName: "Waste Management & Composting Seva",
    description: "पर्यावरण की रक्षा हेतु जैविक खाद निर्माण व कचरा प्रबंधन इकाई।",
    purpose: "स्वच्छता व जैविक कंपोस्टिंग।"
  },
  {
    id: "vadya-yantra-ghar-nirman",
    category: "construction",
    categoryHindi: "निर्माण कार्य सेवा",
    hindiName: "वाद्य यंत्र घर निर्माण सेवा",
    englishName: "Musical Instruments Room Seva",
    description: "मृदंग, हारमोनियम, करताल एवं पारंपरिक वाद्य यंत्रों के संरक्षण व रियाज कक्ष।",
    purpose: "संकीर्तन वाद्य कक्ष।"
  },
  {
    id: "pravachan-ghar-nirman",
    category: "construction",
    categoryHindi: "निर्माण कार्य सेवा",
    hindiName: "प्रवचन घर निर्माण सेवा",
    englishName: "Discourse Hall Construction Seva",
    description: "संतों के प्रवचन, कथा एवं नैतिक शिक्षा सत्रों के लिए विशाल सभागार।",
    purpose: "प्रवचन सभागार।"
  },
  {
    id: "krida-grih-nirman",
    category: "construction",
    categoryHindi: "निर्माण कार्य सेवा",
    hindiName: "क्रीड़ा गृह निर्माण सेवा",
    englishName: "Traditional Sports & Recreation Hall",
    description: "गुरुकुल के विद्यार्थियों हेतु पारंपरिक भारतीय खेल एवं शारीरिक व्यायाम स्थल।",
    purpose: "शारीरिक शिक्षा एवं क्रीड़ा केंद्र।"
  },
  {
    id: "swasthya-grih-nirman",
    category: "construction",
    categoryHindi: "निर्माण कार्य सेवा",
    hindiName: "स्वास्थ्य गृह निर्माण सेवा",
    englishName: "Health & Ayurveda Dispensary Seva",
    description: "ग्रामीण समुदाय एवं साधकों हेतु निःशुल्क प्राथमिक उपचार व आयुर्वेद औषधालय।",
    purpose: "स्वास्थ्य व प्राथमिक चिकित्सालय।"
  },
  {
    id: "vahan-parking-nirman",
    category: "construction",
    categoryHindi: "निर्माण कार्य सेवा",
    hindiName: "वाहन पार्किंग निर्माण सेवा",
    englishName: "Vehicle Parking Construction Seva",
    description: "उत्सवों में आने वाले दर्शनार्थियों के वाहनों के लिए सुरक्षित व व्यवस्थित पार्किंग क्षेत्र।",
    purpose: "व्यवस्थित वाहन पार्किंग स्थल।"
  },
  {
    id: "jal-ghar-nirman",
    category: "construction",
    categoryHindi: "निर्माण कार्य सेवा",
    hindiName: "जल घर निर्माण सेवा",
    englishName: "Water Filtration & Distribution Seva",
    description: "शीतल, शुद्ध एवं स्वच्छ पेयजल की अविरल व्यवस्था हेतु जल घर का निर्माण।",
    purpose: "शुद्ध पेयजल प्लांट व वितरण।"
  },
  {
    id: "pujan-ghar-nirman",
    category: "construction",
    categoryHindi: "निर्माण कार्य सेवा",
    hindiName: "पूजन घर निर्माण सेवा",
    englishName: "Puja Room Construction Seva",
    description: "नित्य हवन, अनुष्ठान, रुद्राभिषेक एवं विशेष वैदिक पूजा हेतु समर्पित भवन।",
    purpose: "वैदिक अनुष्ठान शाला।"
  },
  {
    id: "leela-grih-nirman",
    category: "construction",
    categoryHindi: "निर्माण कार्य सेवा",
    hindiName: "लीला गृह निर्माण सेवा",
    englishName: "Leela & Cultural Drama Hall Seva",
    description: "श्री कृष्ण लीला, रामलीला एवं सांस्कृतिक नाटकों के मंचन हेतु रंगमंच।",
    purpose: "सांस्कृतिक लीला मंच।"
  },
  {
    id: "daan-ghar-nirman",
    category: "construction",
    categoryHindi: "निर्माण कार्य सेवा",
    hindiName: "दान गृह निर्माण सेवा",
    englishName: "Donation & Contribution Office Seva",
    description: "भक्तों के सेवा समर्पण, रसीद निर्गमन एवं पारदर्शिता हेतु कार्यालय।",
    purpose: "सेवा पंजीकरण कक्ष।"
  },
  {
    id: "daan-patra-nirman",
    category: "construction",
    categoryHindi: "निर्माण कार्य सेवा",
    hindiName: "दान पात्र निर्माण सेवा",
    englishName: "Donation Box Construction Seva",
    description: "मंदिर परिसर में सुरक्षित एवं कलात्मक दान पेटियों का निर्माण व स्थापना।",
    purpose: "सुरक्षित दान पात्र स्थापना।"
  },
  {
    id: "vishram-grih-nirman",
    category: "construction",
    categoryHindi: "निर्माण कार्य सेवा",
    hindiName: "विश्राम गृह निर्माण सेवा",
    englishName: "Rest House Construction Seva",
    description: "दर्शनार्थियों के अल्पकालिक विश्राम हेतु छायादार व सुसज्जित कक्ष।",
    purpose: "विश्राम गृह।"
  },
  {
    id: "dugdh-grih-nirman",
    category: "construction",
    categoryHindi: "निर्माण कार्य सेवा",
    hindiName: "दुग्ध गृह निर्माण सेवा",
    englishName: "Dairy & Panchagavya Processing Room",
    description: "गोमाता के अमृत तुल्य दुग्ध, घी, छाछ एवं पंचगव्य उत्पादों के निर्माण हेतु शुद्ध कक्ष।",
    purpose: "पंचगव्य व दुग्ध शाला।"
  },
  {
    id: "atithi-grih-seva",
    category: "construction",
    categoryHindi: "निर्माण कार्य सेवा",
    hindiName: "अतिथि गृह सेवा",
    englishName: "Guest House Seva",
    description: "दूर-दराज से आने वाले विशिष्ट संतों, विद्वानों व अतिथियों हेतु अतिथि भवन।",
    purpose: "अतिथि सत्कार भवन।"
  },
  {
    id: "lekha-grih-nirman",
    category: "construction",
    categoryHindi: "निर्माण कार्य सेवा",
    hindiName: "लेखा गृह निर्माण सेवा",
    englishName: "Accounts & Administration Office",
    description: "संस्था के वित्तीय लेखा-जोखा, ऑडिट एवं पारदर्शी प्रबंधन हेतु प्रशासनिक कार्यालय।",
    purpose: "प्रशासनिक लेखा कार्यालय।"
  },
  {
    id: "machine-yantra-grih",
    category: "construction",
    categoryHindi: "निर्माण कार्य सेवा",
    hindiName: "मशीन यंत्र गृह सेवा",
    englishName: "Agricultural & Mechanical Equipment Room",
    description: "कृषि, वृक्षारोपण, चारा काटने वाली मशीनरी एवं जनरेटर कक्ष।",
    purpose: "उपकरण एवं मशीनरी घर।"
  },
  {
    id: "karmachari-grih-nirman",
    category: "construction",
    categoryHindi: "निर्माण कार्य सेवा",
    hindiName: "कर्मचारी गृह निर्माण सेवा",
    englishName: "Staff Quarters Construction Seva",
    description: "धाम की दिन-रात सेवा करने वाले सेवाभावी कर्मियों के आवासीय क्वार्टर।",
    purpose: "सेवक आवास क्वार्टर।"
  },
  {
    id: "suraksha-karmachari-grih",
    category: "construction",
    categoryHindi: "निर्माण कार्य सेवा",
    hindiName: "सुरक्षा कर्मचारी गृह निर्माण सेवा",
    englishName: "Security Personnel Quarters Seva",
    description: "धाम एवं गोशाला की सुरक्षा में तैनात प्रहरियों के विश्राम व निगरानी कक्ष।",
    purpose: "सुरक्षा नियंत्रण कक्ष।"
  },
  {
    id: "vyavasthapak-grih-nirman",
    category: "construction",
    categoryHindi: "निर्माण कार्य सेवा",
    hindiName: "व्यवस्थापक गृह निर्माण सेवा",
    englishName: "Manager & Coordinator's Room Seva",
    description: "धाम के नित्य संचालन एवं व्यवस्थापकों के कार्य संचालन का केंद्र।",
    purpose: "व्यवस्थापक कक्ष।"
  },
  {
    id: "shadi-ghar-nirman",
    category: "construction",
    categoryHindi: "निर्माण कार्य सेवा",
    hindiName: "शादी घर निर्माण सेवा",
    englishName: "Community Marriage Hall Seva",
    description: "सामूहिक एवं निर्धन परिवारों के विवाह संस्कारों हेतु सुसज्जित विवाह भवन।",
    purpose: "विवाह संस्कार भवन।"
  },
  {
    id: "samvidhan-grih-nirman",
    category: "construction",
    categoryHindi: "निर्माण कार्य सेवा",
    hindiName: "संविधान गृह निर्माण सेवा",
    englishName: "Governance & Council Hall Seva",
    description: "न्यास समिति, नियमावली एवं संस्था के विधिक व नीतिगत निर्णयों का सभा भवन।",
    purpose: "न्यास परिषद सभागार।"
  },
  {
    id: "pathshala-grih-nirman",
    category: "construction",
    categoryHindi: "निर्माण कार्य सेवा",
    hindiName: "पाठशाला गृह निर्माण सेवा",
    englishName: "School & Classroom Construction Seva",
    description: "गुरुकुल के विद्यार्थियों के लिए कक्षा-कक्ष, श्यामपट्ट एवं आधुनिक-पारंपरिक अध्ययन स्थल।",
    purpose: "गुरुकुल कक्षा-कक्ष निर्माण।"
  },
  {
    id: "rasoi-grih-nirman",
    category: "construction",
    categoryHindi: "निर्माण कार्य सेवा",
    hindiName: "रसोई गृह निर्माण सेवा",
    englishName: "Main Kitchen Building Construction Seva",
    description: "विशाल यज्ञ, भंडारे एवं नित्य भोग तैयार करने हेतु पारंपरिक वैदिक रसोई भवन।",
    purpose: "मुख्य रसोईशाला भवन।"
  },
  {
    id: "furniture-nirman",
    category: "construction",
    categoryHindi: "निर्माण कार्य सेवा",
    hindiName: "फर्नीचर निर्माण सेवा",
    englishName: "Furniture Construction Seva",
    description: "गुरुकुल, पुस्तकालय, धर्मशाला एवं कार्यालय हेतु काष्ठ एवं लोहे के फर्नीचर।",
    purpose: "फर्नीचर एवं बैठक व्यवस्था।"
  },
  {
    id: "garbh-grih-nirman",
    category: "construction",
    categoryHindi: "निर्माण कार्य सेवा",
    hindiName: "गर्भ गृह निर्माण सेवा",
    englishName: "Garbh Griha (Sanctum Sanctorum) Construction",
    description: "श्री श्री राधा कृष्ण बिहारी जी के मुख्य सिंहासन एवं गर्भगृह की पावन शिला व नक्काशी सेवा।",
    purpose: "मंदिर का मुख्य गर्भगृह निर्माण।"
  },
  {
    id: "bhagwat-seva-nirman",
    category: "construction",
    categoryHindi: "निर्माण कार्य सेवा",
    hindiName: "भगवत सेवा कक्ष निर्माण",
    englishName: "Bhagwat Katha Complex Construction",
    description: "नियमित भागवत कथा, गीता पाठ एवं संकीर्तन महोत्सवों के आयोजन हेतु भव्य मंडप।",
    purpose: "भागवत कथा मंडप अवसंरचना।"
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: "img-temple-view-1",
    title: "श्री श्री राधा कृष्ण बिहारी जी मंदिर — मुख्य स्थापत्य दृश्य १",
    category: "temple",
    categoryHindi: "मंदिर स्थापत्य",
    description: "नागर शैली में निर्मित मुख्य शिखर, भव्य प्रवेश मेहराब एवं अष्टकोणीय नक्षत्र फव्वारा — अधिकृत वास्तविक छायाचित्र।",
    assetKey: "images/temple/temple-main-1.png",
    assetUrl: "/images/temple/temple-main-1.png"
  },
  {
    id: "img-temple-view-2",
    title: "श्री श्री राधा कृष्ण बिहारी जी मंदिर — विहंगम वास्तु दृष्टिकोण २",
    category: "temple",
    categoryHindi: "मंदिर स्थापत्य",
    description: "२५,००० वर्ग फीट के सम्पूर्ण भूखंड पर परिक्रमा पथ, कलात्मक छतरियां एवं उद्यान विन्यास — अधिकृत छायाचित्र।",
    assetKey: "images/temple/temple-main-2.png",
    assetUrl: "/images/temple/temple-main-2.png"
  },
  {
    id: "img-temple-view-3",
    title: "श्री श्री राधा कृष्ण बिहारी जी मंदिर — परिक्रमा एवं वाटिका दृश्य ३",
    category: "temple",
    categoryHindi: "मंदिर स्थापत्य",
    description: "मंदिर पथ, हरियाली युक्त वाटिका, दीप स्तंभ एवं पत्थर से जड़ा हुआ चौड़ा परिक्रमा मार्ग।",
    assetKey: "images/temple/temple-main-3.png",
    assetUrl: "/images/temple/temple-main-3.png"
  },
  {
    id: "img-temple-view-4",
    title: "श्री श्री राधा कृष्ण बिहारी जी मंदिर — नक्काशीदार जाली व स्तंभ दृश्य ४",
    category: "temple",
    categoryHindi: "मंदिर स्थापत्य",
    description: "भारतीय कारीगरी का उत्कृष्ट उदाहरण — लाल पत्थर पर जालीदार वातायन, नक्काशीदार मेहराब व अलंकृत स्तंभ।",
    assetKey: "images/temple/temple-main-4.png",
    assetUrl: "/images/temple/temple-main-4.png"
  },
  {
    id: "img-temple-view-5",
    title: "श्री श्री राधा कृष्ण बिहारी जी मंदिर — प्रांगण एवं जलकुंड दृश्य ५",
    category: "temple",
    categoryHindi: "मंदिर स्थापत्य",
    description: "भक्तों के विश्राम हेतु पत्थर की बेंचें, निरंतर प्रवाहित जल स्रोत एवं शांतिपूर्ण वातावरण।",
    assetKey: "images/temple/temple-main-5.png",
    assetUrl: "/images/temple/temple-main-5.png"
  },
  {
    id: "img-masterplan",
    title: "आधिकारिक वास्तु मास्टरप्लान (Temple Masterplan)",
    category: "plan",
    categoryHindi: "मास्टरप्लान",
    description: "१००' x २५०' (२५,००० वर्ग फीट) का अधिकृत साइट प्लान — मंदिर संरचना, उद्यान, फव्वारा, प्रवेश द्वार एवं मार्ग।",
    assetKey: "images/temple/temple-masterplan.png",
    assetUrl: "/images/temple/temple-masterplan.png"
  },
  {
    id: "img-satellite",
    title: "सत्य सनातन धाम — उपग्रह मानचित्र (Tree Plantation & Temple Chhetra)",
    category: "satellite",
    categoryHindi: "उपग्रह क्षेत्र",
    description: "ग्राम पासुन (मौदहा, हमीरपुर) में ११,००० वृक्षारोपण महाअभियान क्षेत्र एवं मंदिर निर्माण क्षेत्र का अधिकृत उपग्रह सीमांकन।",
    assetKey: "images/temple/temple-satellite-chhetra.png",
    assetUrl: "/images/temple/temple-satellite-chhetra.png"
  },
  {
    id: "img-logo-crest",
    title: "सत्य सनातन धाम — आधिकारिक प्रतीक चिह्न (Official Crest)",
    category: "seva",
    categoryHindi: "पहचान",
    description: "उर्ध्व पुण्ड्र तिलक, चरण कमल, त्रि-स्तरीय पीठिका एवं सूर्य मंडल का पावन प्रतीक।",
    assetKey: "SSD Logo.png",
    assetUrl: "/SSD Logo.png"
  },
  {
    id: "img-plantation-1",
    title: "वृक्षारोपण महाअभियान — पावन पौधारोपण एवं धरा सेवा १",
    category: "plantation",
    categoryHindi: "वृक्षारोपण अभियान",
    description: "ग्राम पासुन धाम परिसर में श्रद्धालुओं एवं कार्यकर्ताओं द्वारा फलदार व छायादार पौधे का रोपण — अधिकृत छायाचित्र।",
    assetKey: "images/plantation/plantation-1.jpg",
    assetUrl: "/images/plantation/plantation-1.jpg"
  },
  {
    id: "img-plantation-2",
    title: "वृक्षारोपण महाअभियान — समर्पित कार्यकर्ता व पर्यावरण प्रेमी २",
    category: "plantation",
    categoryHindi: "वृक्षारोपण अभियान",
    description: "११,००० वृक्षों के पावन महासंकल्प के अंतर्गत युवा स्वयंसेवकों का उत्साह एवं पौधरोपण — अधिकृत छायाचित्र।",
    assetKey: "images/plantation/plantation-2.jpg",
    assetUrl: "/images/plantation/plantation-2.jpg"
  },
  {
    id: "img-plantation-3",
    title: "वृक्षारोपण महाअभियान — सामूहिक श्रमदान व पौधरोपण ३",
    category: "plantation",
    categoryHindi: "वृक्षारोपण अभियान",
    description: "धरा को हरा-भरा बनाने हेतु संकल्पबद्ध सेवाभावी भक्तों द्वारा गड्ढे तैयार कर पौधे लगाने का दृश्य — अधिकृत छायाचित्र।",
    assetKey: "images/plantation/plantation-3.jpg",
    assetUrl: "/images/plantation/plantation-3.jpg"
  },
  {
    id: "img-plantation-4",
    title: "वृक्षारोपण महाअभियान — नव अंकुरित पौधे एवं संरक्षण ४",
    category: "plantation",
    categoryHindi: "वृक्षारोपण अभियान",
    description: "लगाए गए पौधों को सुरक्षित रखने हेतु ट्री-गार्ड व प्रारंभिक जल सिंचन व्यवस्था — अधिकृत छायाचित्र।",
    assetKey: "images/plantation/plantation-4.jpg",
    assetUrl: "/images/plantation/plantation-4.jpg"
  },
  {
    id: "img-plantation-5",
    title: "वृक्षारोपण महाअभियान — भूमि पूजन व सेवा संकल्प ५",
    category: "plantation",
    categoryHindi: "वृक्षारोपण अभियान",
    description: "परिसर में वृक्षारोपण स्थल पर वैदिक मंगलाचरण एवं पौधरोपण की पावन शुरुआत — अधिकृत छायाचित्र।",
    assetKey: "images/plantation/plantation-5.jpg",
    assetUrl: "/images/plantation/plantation-5.jpg"
  },
  {
    id: "img-plantation-6",
    title: "वृक्षारोपण महाअभियान — जल सिंचन एवं पोषण सेवा ६",
    category: "plantation",
    categoryHindi: "वृक्षारोपण अभियान",
    description: "प्रत्येक पौधे की ५ वर्षों तक अनवरत देखभाल व जल प्रबंधन का सजीव दृश्य — अधिकृत छायाचित्र।",
    assetKey: "images/plantation/plantation-6.jpg",
    assetUrl: "/images/plantation/plantation-6.jpg"
  },
  {
    id: "img-plantation-7",
    title: "वृक्षारोपण महाअभियान — मातृशक्ति व परिवारों का योगदान ७",
    category: "plantation",
    categoryHindi: "वृक्षारोपण अभियान",
    description: "मातृशक्ति द्वारा अपने परिजनों व पूर्वजों की स्मृति में पावन वृक्षारोपण — अधिकृत छायाचित्र।",
    assetKey: "images/plantation/plantation-7.jpg",
    assetUrl: "/images/plantation/plantation-7.jpg"
  },
  {
    id: "img-plantation-8",
    title: "वृक्षारोपण महाअभियान — सघन हरित पट्टी विस्तार ८",
    category: "plantation",
    categoryHindi: "वृक्षारोपण अभियान",
    description: "धाम परिसर के चारों ओर हरितिमा विस्तार एवं प्राकृतिक संतुलन हेतु पौधरोपण — अधिकृत छायाचित्र।",
    assetKey: "images/plantation/plantation-8.jpg",
    assetUrl: "/images/plantation/plantation-8.jpg"
  },
  {
    id: "img-plantation-9",
    title: "वृक्षारोपण महाअभियान — छायादार एवं फलदार वृक्ष रोपण ९",
    category: "plantation",
    categoryHindi: "वृक्षारोपण अभियान",
    description: "नीम, पीपल, बरगद, आम, जामुन व आंवला के औषधीय एवं फलदार पौधों का संरक्षण — अधिकृत छायाचित्र।",
    assetKey: "images/plantation/plantation-9.jpg",
    assetUrl: "/images/plantation/plantation-9.jpg"
  },
  {
    id: "img-plantation-10",
    title: "वृक्षारोपण महाअभियान — ग्रामीण सहभागिता एवं उत्साह १०",
    category: "plantation",
    categoryHindi: "वृक्षारोपण अभियान",
    description: "स्थानीय ग्रामवासियों एवं संतों की प्रेरक उपस्थिति में पौधरोपण महायज्ञ — अधिकृत छायाचित्र।",
    assetKey: "images/plantation/plantation-10.jpg",
    assetUrl: "/images/plantation/plantation-10.jpg"
  },
  {
    id: "img-plantation-11",
    title: "वृक्षारोपण महाअभियान — प्राकृतिक वाटिका का निर्माण ११",
    category: "plantation",
    categoryHindi: "वृक्षारोपण अभियान",
    description: "सत्य सनातन धाम के हरित क्षेत्र में पंक्तिबद्ध पौधों का रोपण व परिक्रमा पथ — अधिकृत छायाचित्र।",
    assetKey: "images/plantation/plantation-11.jpg",
    assetUrl: "/images/plantation/plantation-11.jpg"
  },
  {
    id: "img-plantation-12",
    title: "वृक्षारोपण महाअभियान — हरित संकल्प एवं समर्पण १२",
    category: "plantation",
    categoryHindi: "वृक्षारोपण अभियान",
    description: "धरा, पर्यावरण एवं गोमाता के संरक्षण का एक साथ पावन संकल्प — अधिकृत छायाचित्र।",
    assetKey: "images/plantation/plantation-12.jpg",
    assetUrl: "/images/plantation/plantation-12.jpg"
  }
];

export const faqList = [
  {
    q: "सत्य सनातन धाम का मुख्य उद्देश्य क्या है?",
    a: "सत्य सनातन धाम का संकल्प 'सेवा, संस्कार और सनातन' के तीन पावन स्तंभों पर आधारित है। यहाँ समाज कल्याण, पर्यावरण हेतु वृक्षारोपण, गोमाता का संरक्षण, भारतीय संस्कृति व गुरुकुल शिक्षा का संवर्धन, और श्री श्री राधा कृष्ण बिहारी जी के दिव्य मंदिर का निर्माण मुख्य लक्ष्य हैं।"
  },
  {
    q: "वृक्षारोपण महाअभियान क्या है और इसमें कैसे जुड़ें?",
    a: "11 अक्टूबर 2026 (शरद नवरात्रि) को 11,000 वृक्षों के रोपण का महासंकल्प लिया गया है, जिसका प्रथम चरण 1,100 वृक्षों का है। आप 1 वृक्ष (₹1,001), 2 वृक्ष (₹2,001), 5 वृक्ष (₹5,001) या अपनी इच्छानुसार वृक्ष सेवा समर्पित कर सकते हैं। आप अपने माता-पिता, जन्मदिन या पूर्वजों की स्मृति में भी वृक्ष समर्पित कर सकते हैं।"
  },
  {
    q: "क्या मैं सीधे बैंक खाते या अधिकृत माध्यम से सेवा राशि भेज सकता/सकती हूँ?",
    a: "हाँ, संस्था के अधिकृत खाते (सत्य सनातन धाम, भारतीय स्टेट बैंक, खाता संख्या: 45657691676, IFSC: SBIN0001136) में सीधे NEFT, RTGS, IMPS या नेट बैंकिंग द्वारा सहयोग भेजा जा सकता है। कृपया भुगतान के बाद वेबसाइट पर 'भुगतान पुष्टि फॉर्म' अवश्य भरें।"
  },
  {
    q: "क्या मंदिर निर्माण में वर्ग फीट के अनुसार सहयोग किया जा सकता है?",
    a: "हाँ, मंदिर निर्माण सेवा में प्रति वर्ग फीट निर्माण खर्च ₹5,100 एवं आधा वर्ग फीट निर्माण खर्च ₹2,600 निर्धारित है। इसके अतिरिक्त आप पाषाण शिला, स्तंभ या अन्य निर्माण सामग्री में भी सहयोग कर सकते हैं।"
  },
  {
    q: "धाम कहाँ स्थित है और दर्शन हेतु कैसे पहुंचा जा सकता है?",
    a: "धाम उत्तर प्रदेश के जनपद हमीरपुर अंतर्गत मौदहा तहसील के ग्राम पासुन (पिनकोड: 210507) में स्थित है। यह सड़क मार्ग द्वारा कानपुर, बांदा और हमीरपुर से सुगमतापूर्वक जुड़ा हुआ है।"
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: "test-01",
    name: "Smt. Vimla Devi Bajpai",
    hindiName: "श्रीमती विमला देवी बाजपेयी",
    role: "समर्पित दानदाता",
    city: "कानपुर नगर",
    state: "उत्तर प्रदेश",
    date: "अगस्त २०२६",
    category: "donor",
    categoryHindi: "दानदाता",
    highlight: "मंदिर निर्माण में १०० वर्ग फीट का योगदान देकर अलौकिक आत्मसंतोष प्राप्त हुआ।",
    quote: "जब हमने ग्राम पासुन आकर श्री श्री राधा कृष्ण बिहारी जी मंदिर के २५,००० वर्ग फीट परिसर और लाल बलुआ पत्थर के शिल्प का दर्शन किया, तो मन श्रद्धा से भर गया। यहाँ दान की एक-एक पाई का पूरा हिसाब और पारदर्शिता है। बिहारी जी की कृपा से बुंदेलखंड में यह पावन धाम आने वाली पीढ़ियों के लिए आध्यात्मिक प्रकाश स्तंभ बनेगा।",
    sevaContributed: "मंदिर निर्माण सेवा — १०० वर्ग फीट",
    verifiedDonor: true
  },
  {
    id: "test-02",
    name: "Shri Rajesh Kumar Sharma",
    hindiName: "श्री राजेश कुमार शर्मा",
    role: "दर्शनार्थी एवं पर्यावरण प्रेमी",
    city: "लखनऊ",
    state: "उत्तर प्रदेश",
    date: "सितंबर २०२६",
    category: "visitor",
    categoryHindi: "दर्शनार्थी",
    highlight: "बुंदेलखंड की धरती पर ११,००० वृक्षों का यह महासंकल्प केवल हरियाली नहीं, जीवंत तपस्या है।",
    quote: "धाम में आकर शांत व सात्त्विक वातावरण ने अंतःकरण को छू लिया। हमने स्वयं वृक्षारोपण क्षेत्र देखा कि किस प्रकार प्रत्येक पौधे की ५ वर्षों तक जल व खाद संरक्षण की ठोस योजना बनाई गई है। हर श्रद्धालु को एक बार यहाँ आकर इस दिव्य ऊर्जा को महसूस करना चाहिए।",
    sevaContributed: "वृक्षारोपण महाअभियान — ११ वृक्ष",
    verifiedDonor: true
  },
  {
    id: "test-03",
    name: "Dr. Aniruddh Pratap Singh",
    hindiName: "डॉ. अनिरुद्ध प्रताप सिंह",
    role: "आजीवन सेवा सहयोगी",
    city: "प्रयागराज",
    state: "उत्तर प्रदेश",
    date: "जुलाई २०२६",
    category: "donor",
    categoryHindi: "दानदाता",
    highlight: "सेवा, संस्कार और सनातन का ऐसा व्यावहारिक समन्वय मैंने कहीं अन्यत्र नहीं देखा।",
    quote: "सत्य सनातन धाम की सबसे बड़ी विशेषता है - निस्वार्थ भाव से समाज व प्रकृति की चिंता। गोशाला में गोमाताओं की नित्य परिचर्या, सुपाच्य पौष्टिक आहार और गुरुकुल का सुनियोजित विजन देखकर मैंने नित्य गोमाता सेवा का संकल्प लिया। न्यास का प्रत्येक कार्य सत्य व निष्ठा पर आधारित है।",
    sevaContributed: "नित्य गोमाता आहार व औषधि सेवा",
    verifiedDonor: true
  },
  {
    id: "test-04",
    name: "Smt. Meenakshi Gupta",
    hindiName: "श्रीमती मीनाक्षी गुप्ता",
    role: "वृक्ष मित्र व दानदाता",
    city: "नोएडा",
    state: "दिल्ली एनसीआर",
    date: "सितंबर २०२६",
    category: "donor",
    categoryHindi: "दानदाता",
    highlight: "अपनी पुत्री के जन्मदिवस पर ५१ वृक्षों का रोपण प्रायोजित किया, धाम की पावती व सूचना अत्यंत संतोषजनक रही।",
    quote: "हम जन्मदिन या विशेष अवसरों पर फिजूलखर्ची के स्थान पर प्रकृति सेवा करना चाहते थे। सत्य सनातन धाम के 'वृक्षारोपण महाअभियान' ने हमें सही मंच दिया। पारदर्शी बैंक खाता, अधिकृत पावती और लगातार प्रगति विवरण से संस्था के प्रति हमारा विश्वास दृढ़ हो गया।",
    sevaContributed: "वृक्षारोपण महाअभियान — ५१ वृक्ष",
    verifiedDonor: true
  },
  {
    id: "test-05",
    name: "Shri Mahendra Nath Tiwari",
    hindiName: "श्री महेंद्र नाथ तिवारी",
    role: "स्थानीय दर्शनार्थी व सत्संगी",
    city: "मौदहा / बांदा",
    state: "उत्तर प्रदेश",
    date: "अक्टूबर २०२६",
    category: "visitor",
    categoryHindi: "दर्शनार्थी",
    highlight: "मौदहा तहसील के पासुन गाँव में ऐसा नागर शिखर मंदिर बनना पूरे बुंदेलखंड का गौरव है।",
    quote: "हम अपने परिवार सहित धाम में श्री राधा-कृष्ण बिहारी जी के चरण वंदन हेतु आए थे। मंदिर का वास्तु, अष्टकोणीय नक्षत्र फव्वारा और परिक्रमा पथ का विन्यास देखकर प्राचीन तीर्थों की स्मृति ताज़ा हो जाती है। यह स्थल भविष्य में प्रमुख तीर्थ के रूप में विख्यात होगा।",
    sevaContributed: "नियमित दर्शन व साप्ताहिक श्रम सेवा",
    verifiedDonor: false
  },
  {
    id: "test-06",
    name: "Shri Alok Chaturvedi",
    hindiName: "श्री आलोक चतुर्वेदी",
    role: "सेवाभावी स्वयंसेवक",
    city: "वाराणसी",
    state: "उत्तर प्रदेश",
    date: "अगस्त २०२६",
    category: "volunteer",
    categoryHindi: "स्वयंसेवक",
    highlight: "अन्नक्षेत्र और भंडारे में जो आत्मीयता व प्रेम भाव है, वही सनातन संस्कृति का मूल सार है।",
    quote: "धाम में आने वाले प्रत्येक आगंतुक, साधु-संत व ग्रामीण बंधु का जो सत्कार यहाँ होता है, वह हृदय को गद्गद कर देता है। अध्यक्ष चंद्रेश दास जी और सचिव श्रीमती आस्था सिंह जी का समर्पण निःस्वार्थ सेवा का प्रत्यक्ष प्रमाण है। मुझे यहाँ स्वयंसेवक के रूप में जुड़ने का गर्व है।",
    sevaContributed: "साधु सेवा एवं अन्नक्षेत्र भंडारा सहयोग",
    verifiedDonor: true
  }
];


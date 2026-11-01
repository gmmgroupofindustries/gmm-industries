export type Language = 'en' | 'bn';

export interface SisterConcern {
  id: string;
  category: { en: string; bn: string };
  name: { en: string; bn: string };
  description: { en: string; bn: string };
  metrics: { en: string; bn: string };
  location: { en: string; bn: string };
  linkText: { en: string; bn: string };
}

export interface SiteContent {
  meta: {
    title: { en: string; bn: string };
    description: { en: string; bn: string };
  };
  nav: {
    parentTag: { en: string; bn: string };
    links: {
      concerns: { en: string; bn: string };
      pillars: { en: string; bn: string };
      leadership: { en: string; bn: string };
      about: { en: string; bn: string };
    };
    cta: { en: string; bn: string };
    langToggle: { en: string; bn: string };
    menu: { en: string; bn: string };
    close: { en: string; bn: string };
  };
  hero: {
    badge: {
      tag: { en: string; bn: string };
      edition: { en: string; bn: string };
      sub: { en: string; bn: string };
    };
    titleLine1: { en: string; bn: string };
    titleLine2Italic: { en: string; bn: string };
    cta: { en: string; bn: string };
    secondaryCta: { en: string; bn: string };
    taglineRight: {
      line1: { en: string; bn: string };
      line2: { en: string; bn: string };
    };
    baseline: {
      left1: { en: string; bn: string };
      left2: { en: string; bn: string };
      centerText: { en: string; bn: string };
      right1: { en: string; bn: string };
      right2: { en: string; bn: string };
    };
  };
  pillars: {
    kicker: { en: string; bn: string };
    headingRegular: { en: string; bn: string };
    headingItalic: { en: string; bn: string };
    steps: Array<{
      stepNumber: string;
      title: { en: string; bn: string };
      description: { en: string; bn: string };
      tag: { en: string; bn: string };
    }>;
    takeAction: { en: string; bn: string };
  };
  concernsSection: {
    kicker: { en: string; bn: string };
    headingRegular: { en: string; bn: string };
    headingItalic: { en: string; bn: string };
    intro: { en: string; bn: string };
    stickyRosette: {
      line1: { en: string; bn: string };
      line2Italic: { en: string; bn: string };
    };
    items: SisterConcern[];
  };
  marquee: {
    kicker: { en: string; bn: string };
    pauseBtn: { en: string; bn: string };
    playBtn: { en: string; bn: string };
    items: Array<{ en: string; bn: string; ticker: string }>;
  };
  highlightBanner: {
    headingRegular: { en: string; bn: string };
    headingItalic: { en: string; bn: string };
    organization: { en: string; bn: string };
    location: { en: string; bn: string };
  };
  closingCta: {
    headingRegular: { en: string; bn: string };
    headingItalic: { en: string; bn: string };
    paragraph: { en: string; bn: string };
    cta: { en: string; bn: string };
  };
  contactModal: {
    title: { en: string; bn: string };
    subtitle: { en: string; bn: string };
    nameLabel: { en: string; bn: string };
    emailLabel: { en: string; bn: string };
    concernLabel: { en: string; bn: string };
    messageLabel: { en: string; bn: string };
    submitBtn: { en: string; bn: string };
    submittedMsg: { en: string; bn: string };
    closeBtn: { en: string; bn: string };
  };
  footer: {
    legalName: { en: string; bn: string };
    description: { en: string; bn: string };
    addressTitle: { en: string; bn: string };
    address: { en: string; bn: string };
    phone: { en: string; bn: string };
    email: { en: string; bn: string };
    backToTop: { en: string; bn: string };
    rights: { en: string; bn: string };
  };
}

export const siteContent: SiteContent = {
  meta: {
    title: {
      en: "GMM Group of Industries | Sovereign Conglomerate & Industrial Ecosystem",
      bn: "জিএমএম গ্রুপ অব ইন্ডাস্ট্রিজ | শীর্ষস্থানীয় শিল্পগোষ্ঠী ও জাতীয় শিল্প পরিকাঠামো",
    },
    description: {
      en: "The official apex portal of GMM Group of Industries. Anchoring manufacturing excellence, heavy engineering, global logistics, and sustainable industrial growth.",
      bn: "জিএমএম গ্রুপ অব ইন্ডাস্ট্রিজের অফিসিয়াল কর্পোরেট পোর্টাল। ভারী শিল্প, টেক্সটাইল, কৃষিপ্রযুক্তি এবং সমন্বিত লজিস্টিক্সে বাংলাদেশের শীর্ষস্থানীয় কনগ্লোমারেট।",
    },
  },
  nav: {
    parentTag: {
      en: "Group of Industries",
      bn: "গ্রুপ অব ইন্ডাস্ট্রিজ",
    },
    links: {
      concerns: { en: "Sister Concerns", bn: "প্রতিষ্ঠানসমূহ" },
      pillars: { en: "Operating Model", bn: "কর্মপদ্ধতি" },
      leadership: { en: "Leadership", bn: "নেতৃত্ব" },
      about: { en: "The Group", bn: "আমাদের পরিচয়" },
    },
    cta: { en: "CONTACT US", bn: "যোগাযোগ" },
    langToggle: { en: "বাংলা", bn: "ENGLISH" },
    menu: { en: "Menu", bn: "মেনু" },
    close: { en: "Close", bn: "বন্ধ" },
  },
  hero: {
    badge: {
      tag: { en: "GMM CONGLOMERATE", bn: "জিএমএম কনগ্লোমারেট" },
      edition: { en: "20+", bn: "২০+" },
      sub: { en: "YEARS OF INDUSTRIAL EXCELLENCE", bn: "বছরের শিল্প ঐতিহ্য" },
    },
    titleLine1: {
      en: "Orchestrating Industrial",
      bn: "শিল্প রূপান্তরের অঙ্গীকারে",
    },
    titleLine2Italic: {
      en: "Generational Excellence.",
      bn: "প্রজন্ম পরম্পরায় শ্রেষ্ঠত্ব।",
    },
    cta: {
      en: "EXPLORE THE GROUP",
      bn: "আমাদের শিল্পগোষ্ঠী জানুন",
    },
    secondaryCta: {
      en: "EXECUTIVE INQUIRY",
      bn: "কর্পোরেট যোগাযোগ",
    },
    taglineRight: {
      line1: {
        en: "Integrated enterprises.",
        bn: "সমন্বিত শিল্প উদ্যোগ।",
      },
      line2: {
        en: "Enduring sovereign impact.",
        bn: "জাতীয় অগ্রযাত্রায় অবিচল অংশীদার।",
      },
    },
    baseline: {
      left1: {
        en: "Forged with integrity.",
        bn: "সততা ও নিষ্ঠায় প্রতিষ্ঠিত।",
      },
      left2: {
        en: "Built by visionary leadership.",
        bn: "দূরদর্শী নেতৃত্বে সমৃদ্ধ ভবিষ্যৎ।",
      },
      centerText: {
        en: "Discover our sectors ↓",
        bn: "আমাদের খাতসমূহ দেখুন ↓",
      },
      right1: {
        en: "GMM Group of Industries",
        bn: "জিএমএম গ্রুপ অব ইন্ডাস্ট্রিজ",
      },
      right2: {
        en: "Apex Corporate Headquarters, Dhaka",
        bn: "প্রধান কার্যালয়, গুলশান, ঢাকা",
      },
    },
  },
  pillars: {
    kicker: {
      en: "OUR OPERATIONAL MODEL",
      bn: "আমাদের কর্মপরিকল্পনা ও পদ্ধতি",
    },
    headingRegular: {
      en: "Industrial Synergy.",
      bn: "সমন্বিত কর্মপ্রবাহ।",
    },
    headingItalic: {
      en: "Three core pillars.",
      bn: "তিনটি মূল ভিত্তিস্তম্ভ।",
    },
    steps: [
      {
        stepNumber: "01",
        title: {
          en: "Direct Manufacturing",
          bn: "সরাসরি উৎপাদন ও কারখানা পরিকাঠামো",
        },
        description: {
          en: "Operating state-of-the-art heavy engineering, textiles, automated packaging, and agro-processing plants compliant with global ISO and ESG benchmarks.",
          bn: "বিশ্বমানের ভারি প্রকৌশল, টেক্সটাইল, স্বয়ংক্রিয় প্যাকেজিং ও আধুনিক কৃষিপণ্য প্রক্রিয়াজাতকরণ কারখানা পরিচালনা—যা আন্তর্জাতিক পরিবেশ ও নিরাপত্তা মানদণ্ডে স্বীকৃত।",
        },
        tag: {
          en: "FOUNDATIONAL INFRASTRUCTURE",
          bn: "মৌলিক পরিকাঠামো",
        },
      },
      {
        stepNumber: "02",
        title: {
          en: "Integrated Logistics & Trade",
          bn: "সমন্বিত সরবরাহ ব্যবস্থা ও বৈশ্বিক বাণিজ্য",
        },
        description: {
          en: "Bridging global trade corridors through autonomous coastal vessels, bulk commodity terminals, and seamless multi-modal domestic distribution.",
          bn: "নিজস্ব বাণিজ্যিক নৌবহর, আধুনিক সমুদ্রবন্দর টার্মিনাল ও সমন্বিত অভ্যন্তরীণ সরবরাহ ব্যবস্থার মাধ্যমে বৈশ্বিক বাণিজ্যের মেলবন্ধন সৃষ্টি।",
        },
        tag: {
          en: "TAKE THE LEAP",
          bn: "অগ্রগতির অঙ্গীকার",
        },
      },
      {
        stepNumber: "03",
        title: {
          en: "Sustainable Reinvestment",
          bn: "টেকসই বিনিয়োগ ও ভবিষ্যৎ শক্তি",
        },
        description: {
          en: "Directing industrial value into captive solar arrays, environmental stewardship, workforce health, and regional community empowerment.",
          bn: "শিল্পায়নের সুফলকে নবায়নযোগ্য সৌরশক্তি, পরিবেশবান্ধব প্রযুক্তি এবং দক্ষ মানবসম্পদ ও সামাজিক উন্নয়নে নিয়োজিত করার টেকসই দূরদর্শিতা।",
        },
        tag: {
          en: "ENDURING STEWARDSHIP",
          bn: "চিরস্থায়ী রূপকল্প",
        },
      },
    ],
    takeAction: {
      en: "PRECISION AT SCALE.",
      bn: "নির্ভুল ও বৃহৎ পরিসরে উৎপাদন।",
    },
  },
  concernsSection: {
    kicker: {
      en: "SIX AUTONOMOUS CONCERNS",
      bn: "আমাদের ৬টি প্রধান শিল্পপ্রতিষ্ঠান",
    },
    headingRegular: {
      en: "Scale with purpose.",
      bn: "উদ্দেশ্যমুখী সম্প্রসারণ।",
    },
    headingItalic: {
      en: "Built to endure.",
      bn: "স্থায়িত্বের দৃঢ় ভিত্তি।",
    },
    intro: {
      en: "From heavy infrastructure and renewable energy to precision agro-commodities, GMM Group builds sovereign capacity across vital economic engines.",
      bn: "ভারী শিল্প ও নবায়নযোগ্য জ্বালানি থেকে শুরু করে টেক্সটাইল ও আধুনিক কৃষিপ্রযুক্তি—জিএমএম গ্রুপ দেশের প্রতিটি গুরুত্বপূর্ণ খাতে স্বনির্ভরতা নিশ্চিত করছে।",
    },
    stickyRosette: {
      line1: {
        en: "Our enterprises",
        bn: "আমাদের প্রতিটি প্রতিষ্ঠান",
      },
      line2Italic: {
        en: "lead the market.",
        bn: "স্ব স্ব খাতে শীর্ষস্থানে।",
      },
    },
    items: [
      {
        id: "textiles",
        category: { en: "Textiles & Apparel", bn: "টেক্সটাইল ও তৈরি পোশাক" },
        name: { en: "GMM Textiles Limited", bn: "জিএমএম টেক্সটাইলস লিমিটেড" },
        description: {
          en: "Vertically integrated spinning, precision circular weaving, and sustainable garment export manufacturing supplying premier global retail networks across Europe and North America.",
          bn: "আধুনিক স্পিনিং, উইভিং এবং পরিবেশবান্ধব ও আন্তর্জাতিক মানসম্মত তৈরি পোশাক প্রস্তুতকারী প্রতিষ্ঠান, যা ইউরোপ ও আমেরিকার শীর্ষ ব্র্যান্ডগুলোতে পণ্য রপ্তানি করে।",
        },
        metrics: { en: "Export Volume: 24M+ Units/Year", bn: "বার্ষিক রপ্তানি: ২ কোটি ৪০ লাখ+ ইউনিট" },
        location: { en: "Operational Hub: Gazipur Industrial Park", bn: "কারখানা কমপ্লেক্স: গাজীপুর শিল্পাঞ্চল" },
        linkText: { en: "Explore Division", bn: "বিস্তারিত তথ্য" },
      },
      {
        id: "steel",
        category: { en: "Steel & Engineering", bn: "ইস্পাত ও ভারী প্রকৌশল" },
        name: { en: "GMM Heavy Engineering Ltd", bn: "জিএমএম হেভি ইঞ্জিনিয়ারিং লিমিটেড" },
        description: {
          en: "High-tolerance structural steel, pre-engineered building (PEB) systems, and specialized industrial fabrication powering national mega-infrastructure projects.",
          bn: "উচ্চক্ষমতাসম্পন্ন স্ট্রাকচারাল স্টিল, প্রি-ইঞ্জিনিয়ার্ড স্টিল বিল্ডিং এবং ভারী শিল্প পরিকাঠামো নির্মাণে জাতীয় মেগা প্রকল্পসমূহের বিশ্বস্ত প্রকৌশল অংশীদার।",
        },
        metrics: { en: "Annual Capacity: 120,000 Metric Tons", bn: "বার্ষিক সক্ষমতা: ১,২০,০০০ মেট্রিক টন" },
        location: { en: "Plant: Narayanganj Heavy Zone", bn: "কারখানা: নারায়ণগঞ্জ শিল্প এলাকা" },
        linkText: { en: "Explore Division", bn: "বিস্তারিত তথ্য" },
      },
      {
        id: "agro",
        category: { en: "Agro & Food Processing", bn: "কৃষি ও খাদ্য প্রক্রিয়াজাতকরণ" },
        name: { en: "GMM Agro-Tech Industries", bn: "জিএমএম অ্যাগ্রো-টেক ইন্ডাস্ট্রিজ" },
        description: {
          en: "Precision agronomy, automated grain silos, and cold-chain distribution networks ensuring national food security and high-value agricultural exports.",
          bn: "বিজ্ঞানসম্মত কৃষিপ্রযুক্তি, স্বয়ংক্রিয় শস্য সাইলো এবং অত্যাধুনিক কোল্ড-চেইন সাপ্লাই নেটওয়ার্কের মাধ্যমে খাদ্য নিরাপত্তা ও উন্নত মানের প্রক্রিয়াজাত খাদ্য সরবরাহ।",
        },
        metrics: { en: "Silo Storage: 85,000 MT Capacity", bn: "সাইলো ধারণক্ষমতা: ৮৫,০০০ মেট্রিক টন" },
        location: { en: "Processing Base: Bogura Agronomic Valley", bn: "প্রক্রিয়াজাত কেন্দ্র: বগুড়া কৃষি জোন" },
        linkText: { en: "Explore Division", bn: "বিস্তারিত তথ্য" },
      },
      {
        id: "packaging",
        category: { en: "Packaging & Polymers", bn: "প্যাকেজিং ও পরিবেশবান্ধব পলিমার" },
        name: { en: "GMM Modern Packaging Ltd", bn: "জিএমএম মডার্ন প্যাকেজিং লিমিটেড" },
        description: {
          en: "Heavy-duty corrugated fiberboard cartons, multi-layer co-extruded films, and biodegradable packaging solutions engineered for industrial and retail exporters.",
          bn: "শিল্প ও রপ্তানিমুখী পণ্যের জন্য ভারী ঢেউতোলা শক্ত কার্টুন, মাল্টি-লেয়ার ফিল্ম এবং শতভাগ পুনর্ব্যবহারযোগ্য পরিবেশবান্ধব প্যাকেজিং সমাধান।",
        },
        metrics: { en: "Production: 450,000 Cartons/Day", bn: "দৈনিক উৎপাদন: ৪,৫০,০০০ কার্টুন" },
        location: { en: "Facility: Savar Industrial Area", bn: "উৎপাদন কেন্দ্র: সাভার শিল্প অঞ্চল" },
        linkText: { en: "Explore Division", bn: "বিস্তারিত তথ্য" },
      },
      {
        id: "energy",
        category: { en: "Energy & Clean Power", bn: "নবায়নযোগ্য শক্তি ও বিদ্যুৎ" },
        name: { en: "GMM Renewable Energy", bn: "জিএমএম রিনিউয়েবল এনার্জি" },
        description: {
          en: "Large-scale industrial rooftop solar systems, captive microgrid operations, and battery energy storage installations decarbonizing industrial manufacturing.",
          bn: "শিল্পকারখানার ছাদে স্থাপিত সৌরবিদ্যুৎ পরিকাঠামো, ক্যাপটিভ মাইক্রোগ্রিড ও পরিবেশবান্ধব বিদ্যুৎ সঞ্চয় প্রযুক্তির মাধ্যমে কার্বন নিঃসরণ হ্রাসে অগ্রণী ভূমিকা।",
        },
        metrics: { en: "Installed Solar: 48 MWp Capacity", bn: "স্থাপিত সৌর বিদ্যুৎ: ৪৮ মেগাওয়াট পিক" },
        location: { en: "Grid Interconnects: Nationwide Assets", bn: "প্রকল্প সংযোগ: দেশব্যাপী শিল্প পার্ক" },
        linkText: { en: "Explore Division", bn: "বিস্তারিত তথ্য" },
      },
      {
        id: "maritime",
        category: { en: "Maritime Logistics", bn: "নৌবাণিজ্য ও বন্দর লজিস্টিকস" },
        name: { en: "GMM Maritime Logistics", bn: "জিএমএম মেরিটাইম লজিস্টিকস" },
        description: {
          en: "Dedicated coastal bulk-carriers, container logistics, and bonded port terminal management connecting Chittagong, Mongla, and Payra ports with inland waterways.",
          bn: "উপকূলীয় বাল্ক কার্গো জাহাজ, কন্টেইনার পরিবহন এবং চট্টগ্রাম, মোংলা ও পায়রা বন্দরের সাথে অভ্যন্তরীণ নৌপথের নিরাপদ ও নিরবচ্ছিন্ন সংযোগ স্থাপন।",
        },
        metrics: { en: "Active Fleet: 18 Coastal Vessels", bn: "সক্রিয় নৌবহর: ১৮টি আধুনিক জাহাজ" },
        location: { en: "Terminal: Chattogram Port Zone", bn: "টার্মিনাল সদর: চট্টগ্রাম বন্দর অঞ্চল" },
        linkText: { en: "Explore Division", bn: "বিস্তারিত তথ্য" },
      },
    ],
  },
  marquee: {
    kicker: {
      en: "OUR CONCERNS. OUR CAPACITY.",
      bn: "আমাদের প্রতিষ্ঠানসমূহ ও সক্ষমতা",
    },
    pauseBtn: { en: "Pause ticker", bn: "টিকিং থামান" },
    playBtn: { en: "Resume ticker", bn: "চালু করুন" },
    items: [
      { en: "GMM TEXTILES", bn: "জিএমএম টেক্সটাইলস", ticker: "GMM-TEX" },
      { en: "GMM HEAVY ENGINEERING", bn: "জিএমএম হেভি ইঞ্জিনিয়ারিং", ticker: "GMM-ENG" },
      { en: "GMM AGRO-TECH", bn: "জিএমএম অ্যাগ্রো-টেক", ticker: "GMM-AGRO" },
      { en: "GMM PACKAGING", bn: "জিএমএম প্যাকেজিং", ticker: "GMM-PACK" },
      { en: "GMM RENEWABLE ENERGY", bn: "জিএমএম রিনিউয়েবল এনার্জি", ticker: "GMM-ENRG" },
      { en: "GMM MARITIME LOGISTICS", bn: "জিএমএম মেরিটাইম লজিস্টিকস", ticker: "GMM-MAR" },
    ],
  },
  highlightBanner: {
    headingRegular: {
      en: "Building Sovereign",
      bn: "সার্বভৌম শিল্প স্বনির্ভরতা",
    },
    headingItalic: {
      en: "Industrial Strength.",
      bn: "নির্মাণে অবিচল অঙ্গীকার।",
    },
    organization: {
      en: "GMM Group of Industries",
      bn: "জিএমএম গ্রুপ অব ইন্ডাস্ট্রিজ",
    },
    location: {
      en: "GOVERNING HOLDING CONGLOMERATE · DHAKA, BANGLADESH",
      bn: "শীর্ষ অভিভাবক শিল্প প্রতিষ্ঠান · ঢাকা, বাংলাদেশ",
    },
  },
  closingCta: {
    headingRegular: {
      en: "Anchoring Generational",
      bn: "প্রজন্ম পরম্পরায় শিল্প",
    },
    headingItalic: {
      en: "Excellence.",
      bn: "শ্রেষ্ঠত্বের মেলবন্ধন।",
    },
    paragraph: {
      en: "Partner with GMM Group of Industries. Explore institutional joint ventures, export partnerships, and high-yield industrial supply alliances.",
      bn: "জিএমএম গ্রুপ অব ইন্ডাস্ট্রিজের সাথে যৌথ উদ্যোগ, বৃহৎ শিল্প বাণিজ্য এবং টেকসই বিনিয়োগের সম্ভাবনাময় দিগন্তে যুক্ত হোন।",
    },
    cta: {
      en: "CONNECT WITH EXECUTIVE OFFICE",
      bn: "এক্সিকিউটিভ অফিসের সাথে যোগাযোগ",
    },
  },
  contactModal: {
    title: {
      en: "Executive Inquiries & Partnerships",
      bn: "কর্পোরেট অনুসন্ধান ও অংশীদারিত্ব",
    },
    subtitle: {
      en: "Direct communications with the Executive Office of GMM Group of Industries.",
      bn: "জিএমএম গ্রুপ অব ইন্ডাস্ট্রিজের নির্বাহী পরিচালনা পর্ষদের সাথে সরাসরি যোগাযোগ।",
    },
    nameLabel: { en: "Your Full Name", bn: "আপনার পূর্ণ নাম" },
    emailLabel: { en: "Official Email Address", bn: "অফিসিয়াল ইমেইল ঠিকানা" },
    concernLabel: { en: "Area of Interest / Sister Concern", bn: "আগ্রহী খাত / সংশ্লিষ্ট প্রতিষ্ঠান" },
    messageLabel: { en: "Proposed Collaboration / Message", bn: "সহযোগিতার প্রস্তাব বা বার্তা" },
    submitBtn: { en: "TRANSMIT INQUIRY", bn: "বার্তা পাঠান" },
    submittedMsg: {
      en: "Thank you. Your inquiry has been transmitted to GMM Corporate Secretariat.",
      bn: "ধন্যবাদ। আপনার বার্তাটি জিএমএম কর্পোরেট সচিবালয়ে গৃহীত হয়েছে।",
    },
    closeBtn: { en: "Close Window", bn: "উইন্ডো বন্ধ করুন" },
  },
  footer: {
    legalName: {
      en: "GMM Group of Industries Ltd.",
      bn: "জিএমএম গ্রুপ অব ইন্ডাস্ট্রিজ লিঃ",
    },
    description: {
      en: "The sovereign apex enterprise governing six specialized industrial market leaders across Bangladesh and South Asia.",
      bn: "বাংলাদেশ ও দক্ষিণ এশিয়ায় ছয়টি বিশেষায়িত শিল্প খাতের শীর্ষস্থানীয় অভিভাবক কনগ্লোমারেট।",
    },
    addressTitle: {
      en: "Corporate Headquarters",
      bn: "প্রধান করপোরেট কার্যালয়",
    },
    address: {
      en: "GMM Tower, Level 18-21, Gulshan Avenue, Gulshan-2, Dhaka 1212, Bangladesh",
      bn: "জিএমএম টাওয়ার, লেভেল ১৮-২১, গুলশান এভিনিউ, গুলশান-২, ঢাকা ১২১২, বাংলাদেশ",
    },
    phone: {
      en: "+880 2 988 5601-04",
      bn: "+৮৮০ ২ ৯৮৮ ৫৬০১-০৪",
    },
    email: {
      en: "secretariat@gmmgroupofindustries.com",
      bn: "secretariat@gmmgroupofindustries.com",
    },
    backToTop: {
      en: "Back to top ↑",
      bn: "উপরে ফিরে যান ↑",
    },
    rights: {
      en: "© 2026 GMM Group of Industries Ltd. All rights reserved. Registered under the Companies Act of Bangladesh.",
      bn: "© ২০২৬ জিএমএম গ্রুপ অব ইন্ডাস্ট্রিজ লিঃ। সর্বস্বত্ব সংরক্ষিত। কোম্পানি আইন অনুযায়ী নিবন্ধিত।",
    },
  },
};


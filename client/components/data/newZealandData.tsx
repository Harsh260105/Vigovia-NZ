import React from "react";

// Data for New Zealand components

export const visaOptions = [
  "Visitor Visa",
  "Work Visa",
  "Student Visa",
  "Resident Visa",
];

export const featureCards = [
  {
    title: "Food and Wine Tours",
    description: "Embark on a culinary journey through New Zealand's renowned wine regions like Marlborough and Hawke's Bay. Indulge in farm-to-table dining experiences amidst stunning vineyards and rolling hills",
    icon: (
      <svg
        className="w-6 h-6 text-purple-700"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        ></path>
      </svg>
    ),
  },
  {
    title: "Adventure Activities",
    description: "Feel the rush in the adventure capital of the world! Go bungee jumping in Queenstown, hike the rugged trails of Tongariro, or try white-water rafting in the untamed rivers.",
    icon: (
      <svg
        className="w-6 h-6 text-purple-700"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        ></path>
      </svg>
    ),
  },
  {
    title: "Nature Escapades",
    description: "Discover nature at its finest. Visit Fiordland National Park's magical Milford Sound, hike through the lush greenery of Abel Tasman, or explore Rotorua's geothermal wonders and serene lakes",
    icon: (
      <svg
        className="w-6 h-6 text-purple-700"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        ></path>
      </svg>
    ),
  },
];

export const tours = [
  {
    name: "Milford Sound Day Trip",
    duration: "Full Day",
    price: "$285",
    rating: 4.8,
    type: "nature",
  },
  {
    name: "Queenstown Skyline Gondola",
    duration: "2 Hours",
    price: "$45",
    rating: 4.7,
    type: "adventure",
  },
  {
    name: "Rotorua Geothermal Tour",
    duration: "Half Day",
    price: "$120",
    rating: 4.6,
    type: "nature",
  },
  {
    name: "Bay of Islands Sailing",
    duration: "Full Day",
    price: "$195",
    rating: 4.9,
    type: "adventure",
  },
  {
    name: "Franz Josef Glacier Hike",
    duration: "Full Day",
    price: "$250",
    rating: 4.8,
    type: "adventure",
  },
  {
    name: "Marlborough Wine Tour",
    duration: "Full Day",
    price: "$180",
    rating: 4.7,
    type: "food",
  },
];

export const activities = [
  {
    name: "Bungee Jumping",
    image:
      "https://images.unsplash.com/photo-1559677624-3c956f10d431?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Experience the ultimate adrenaline rush with a bungee jump from iconic locations like Kawarau Gorge Bridge or The Ledge.",
    locations: ["Queenstown", "Auckland", "Taupo"],
    price: "From $195",
    duration: "2-3 hours",
  },
  {
    name: "Skydiving",
    image:
      "https://images.unsplash.com/photo-1675645294783-8ae8e106a03a?q=80&w=1881&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Freefall over stunning landscapes with tandem skydiving experiences that offer breathtaking aerial views.",
    locations: ["Queenstown", "Lake Wanaka", "Bay of Islands"],
    price: "From $299",
    duration: "Half day",
  },
  {
    name: "White Water Rafting",
    image:
      "https://plus.unsplash.com/premium_photo-1661891887710-0528c1d76b92?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Navigate thrilling rapids through pristine wilderness areas with experienced guides.",
    locations: ["Rotorua", "Queenstown", "West Coast"],
    price: "From $120",
    duration: "3-4 hours",
  },
  {
    name: "Hiking & Trekking",
    image:
      "https://plus.unsplash.com/premium_photo-1683796885543-1184acc66f51?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Explore world-famous tracks like Milford, Routeburn, and Tongariro Alpine Crossing.",
    locations: ["Fiordland", "Canterbury", "Tongariro"],
    price: "From $50",
    duration: "1-9 days",
  },
  {
    name: "Whale Watching",
    image:
      "https://images.unsplash.com/photo-1568430462989-44163eb1752f?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Encounter magnificent marine life including sperm whales, dolphins, and seals in their natural habitat.",
    locations: ["Kaikoura", "Bay of Islands", "Auckland"],
    price: "From $150",
    duration: "2-3 hours",
  },
  {
    name: "Hot Air Ballooning",
    image:
      "https://images.unsplash.com/photo-1642514386612-bf75c9900b1c?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Float peacefully over Canterbury Plains or Waikato region for spectacular sunrise views.",
    locations: ["Canterbury", "Waikato", "Central Otago"],
    price: "From $350",
    duration: "3-4 hours",
  },
];

export const seasons = [
  {
    name: "Spring",
    months: "Sep - Nov",
    description:
      "Mild weather, blooming flowers, perfect for outdoor activities",
    color: "bg-green-100 border-green-300",
    icon: (
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M85.2 40.1C40.3 50.1 29.7 81.1 19.3 107L28.8 110.1L33.5 98.7C35.9 99.5 38.5 100 40.3 100C95.4 100 110.1 15.1 110.1 15.1C105.1 25.1 70.3 26.4 45.2 31.4C20.2 36.4 10.2 57.7 10.2 67.7C10.2 77.7 19 86.5 19 86.5C35.2 40.1 85.2 40.1 85.2 40.1Z"
          fill="white"
        />
      </svg>
    ),
    details: {
      visaInfo: {
        validity:
          "How long the visa is valid from the date of issue. The difference between single-entry, double-entry, and multiple-entry visas.",
        duration:
          "Maximum length of stay per visit (e.g., 90 days within a 180-day period for some visas). Rules for short stays, long stays, and temporary residence visas.",
        activities:
          "What activities are allowed under the visa (e.g., work, study, tourism). Restrictions on working on tourist or student visas.",
        restrictions:
          "Certain nationalities or individuals may face restrictions, including travel bans or limited stay periods. Conditions for transit visas and whether they allow temporary entry into the country.",
      },
    },
  },
  {
    name: "Summer",
    months: "Dec - Feb",
    description: "Warm weather, long days, peak tourist season",
    color: "bg-yellow-100 border-yellow-300",
    icon: (
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="60" cy="60" r="20" fill="white" />
        <g fill="white">
          <rect x="58" y="10" width="4" height="15" rx="2" />
          <rect x="58" y="95" width="4" height="15" rx="2" />
          <rect x="10" y="58" width="15" height="4" rx="2" />
          <rect x="95" y="58" width="15" height="4" rx="2" />
          <rect
            x="21.2"
            y="21.2"
            width="4"
            height="15"
            rx="2"
            transform="rotate(45 23.2 28.7)"
          />
          <rect
            x="94.8"
            y="94.8"
            width="4"
            height="15"
            rx="2"
            transform="rotate(45 96.8 102.3)"
          />
          <rect
            x="21.2"
            y="94.8"
            width="15"
            height="4"
            rx="2"
            transform="rotate(-45 28.7 96.8)"
          />
          <rect
            x="94.8"
            y="21.2"
            width="15"
            height="4"
            rx="2"
            transform="rotate(-45 102.3 23.2)"
          />
        </g>
      </svg>
    ),
    details: {
      visaInfo: {
        validity:
          "Summer visas typically valid for 6 months from date of issue. Multiple-entry options available for frequent travelers during peak season.",
        duration:
          "Standard 90-day stay per visit. Extended stays up to 180 days available for certain visa types during summer months.",
        activities:
          "All tourist activities permitted including festivals, outdoor events, water sports. Work restrictions apply to tourist visas.",
        restrictions:
          "Higher demand during peak season may result in longer processing times. Some nationalities require advance booking.",
      },
    },
  },
  {
    name: "Autumn",
    months: "Mar - May",
    description: "Cooler temperatures, beautiful fall colors, wine harvest",
    color: "bg-orange-100 border-orange-300",
    icon: (
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M60 20C45 25 35 35 35 50C35 65 45 75 60 80C75 75 85 65 85 50C85 35 75 25 60 20ZM60 30C70 30 75 40 75 50C75 60 70 70 60 70C50 70 45 60 45 50C45 40 50 30 60 30Z"
          fill="white"
        />
        <path
          d="M60 80L55 85L50 90L45 100L55 95L60 85L65 95L75 100L70 90L65 85L60 80Z"
          fill="white"
        />
      </svg>
    ),
    details: {
      visaInfo: {
        validity:
          "Autumn visas valid for full season duration. Wine harvest visitor permits available for agricultural activities.",
        duration:
          "Standard 90-day tourist stays. Extended harvest worker permits available for 6 months with proper work authorization.",
        activities:
          "Wine tasting, harvest participation (with work permit), photography tours, cultural festivals. Tourist visa restrictions apply.",
        restrictions:
          "Seasonal work requires specific permits. Some rural areas may have limited access during harvest season.",
      },
    },
  },
  {
    name: "Winter",
    months: "Jun - Aug",
    description: "Snow activities, fewer crowds, aurora viewing",
    color: "bg-blue-100 border-blue-300",
    icon: (
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="white">
          <circle cx="60" cy="30" r="8" />
          <circle cx="30" cy="60" r="6" />
          <circle cx="90" cy="60" r="6" />
          <circle cx="45" cy="45" r="4" />
          <circle cx="75" cy="45" r="4" />
          <circle cx="60" cy="75" r="7" />
          <circle cx="40" cy="85" r="5" />
          <circle cx="80" cy="85" r="5" />
          <path d="M60 15L65 20L60 25L55 20L60 15Z" />
          <path d="M15 60L20 55L25 60L20 65L15 60Z" />
          <path d="M95 60L100 55L105 60L100 65L95 60Z" />
        </g>
      </svg>
    ),
    details: {
      visaInfo: {
        validity:
          "Winter visas include special provisions for ski season activities. Aurora viewing permits valid for extended periods.",
        duration:
          "Standard 90-day stays. Ski season passes available for 4-month periods with appropriate visa documentation.",
        activities:
          "Skiing, snowboarding, aurora hunting, winter sports. Specialized equipment rental requires tourist or sport visas.",
        restrictions:
          "Weather-dependent travel advisories. Some remote areas inaccessible. Emergency evacuation insurance recommended.",
      },
    },
  },
];

export const faqs = [
  {
    question: "Do I need a visa to visit New Zealand?",
    answer:
      "Most visitors need a visa or NZeTA (New Zealand Electronic Travel Authority). Check the official immigration website for your specific requirements.",
  },
  {
    question: "What's the best time to visit New Zealand?",
    answer:
      "New Zealand is beautiful year-round. Summer (Dec-Feb) is warmest, while winter (Jun-Aug) offers snow activities. Spring and autumn have mild weather and fewer crowds.",
  },
  {
    question: "How long should I stay in New Zealand?",
    answer:
      "We recommend at least 2 weeks to see both North and South Islands. 3-4 weeks allows for a more relaxed pace and deeper exploration.",
  },
  {
    question: "Is New Zealand expensive to visit?",
    answer:
      "New Zealand can be moderately expensive, but there are budget options available. Accommodation ranges from hostels to luxury lodges, and many outdoor activities are free.",
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "Activities Of Discovery Connecting culture with historical places and all ages",
    excerpt: "Discover breathtaking locations with our comprehensive guide to New Zealand's most amazing destinations and cultural experiences.",
    date: "March 15, 2024",
    image: "https://theconqueroradventures.com/wp-content/uploads/2024/11/Marae.jpg"
  },
  {
    id: 2,
    title: "Coaching Of Discovery Connecting culture with historical places and all ages",
    excerpt: "Discover breathtaking locations with our comprehensive guide to New Zealand's most amazing destinations and cultural experiences.",
    date: "March 15, 2024",
    image: "https://www.doc.govt.nz/thumbs/hero/contentassets/65035ecfa92945f9aab3fac1ac879e3a/gold-relics-karangahake-1920.jpg"
  },
  {
    id: 3,
    title: "Activities Of Discovery Connecting culture with historical places and all ages",
    excerpt: "Discover breathtaking locations with our comprehensive guide to New Zealand's most amazing destinations and cultural experiences.",
    date: "March 15, 2024",
    image: "https://www.kiwiselfdrivetours.co.nz/wp-content/uploads/2023/04/callum-parker-Y4O7iBMAtU-unsplash.jpg"
  }
];

export const exploreDestinations = [
  {
    name: "MALAYSIA",
    image: "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?w=300&h=300&fit=crop&crop=center",
  },
  {
    name: "SRILANKA",
    image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=300&h=300&fit=crop&crop=center",
  },
  {
    name: "PARIS",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=300&h=300&fit=crop&crop=center",
  },
  {
    name: "BARCELONA",
    image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=300&h=300&fit=crop&crop=center",
  },
  {
    name: "ROME",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=300&h=300&fit=crop&crop=center",
  }
];
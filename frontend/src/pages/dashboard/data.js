export const droneSpecs = [
  ["Serial Number", "7741-WA-T50"],
  ["Purchase Date", "14 January 2025"],
  ["Warranty Expires", "14 January 2027"],
  ["Tank Capacity", "40L Spray"],
  ["Effective Spray Width", "4-11m"],
  ["Max Coverage", "18 ha/hr"],
];

export const dashboardStats = [
  ["Warranty Status", "Active", "Expires 14 Jan 2027", "text-green-600"],
  ["Firmware Version", "V10.01.03", "Up to date", "text-slate-900"],
  ["Next Service Due", "Sep 2025", "Recommended", "text-slate-900"],
  ["Last Serviced", "3 Mar 2025", "Annual Check", "text-slate-900"],
];

export const checklistItems = [
  ["Flush spray system with clean water", "Done", "bg-green-100 text-green-700"],
  ["Calibrate RTK antenna alignment", "Overdue", "bg-red-100 text-red-700"],
  ["Inspect nozzle wear patterns", "This Week", "bg-orange-100 text-orange-700"],
  ["Battery storage charge", "Upcoming", "bg-blue-100 text-blue-700"],
];

export const tutorialCategories = [
  "All Videos",
  "Getting Started",
  "Operations",
  "Maintenance",
  "Advanced",
  "Troubleshooting",
];

export const tutorialVideos = [
  {
    id: 1,
    category: "Getting Started",
    title: "First flight setup",
    description:
      "Unboxing, pre-flight checks and your first autonomous mission",
    duration: "4:32",
    thumbnail: "",
  },
  {
    id: 2,
    category: "Getting Started",
    title: "Connecting to DJI Agras app",
    description:
      "Pairing your RC Plus 2 and setting up your field map",
    duration: "5:14",
    thumbnail: "",
  },
  {
    id: 3,
    category: "Operations",
    title: "Spray rate calibration",
    description:
      "Dialling in your nozzle output for accurate coverage",
    duration: "3:47",
    thumbnail: "",
  },
  {
    id: 4,
    category: "Operations",
    title: "RTK setup & signal lock",
    description:
      "Positioning your base station and achieving RTK fixed mode",
    duration: "7:02",
    thumbnail: "",
  },
  {
    id: 5,
    category: "Maintenance",
    title: "Post-spray system flush",
    description:
      "Flushing the tank, pipes and nozzles after each use",
    duration: "6:30",
    thumbnail: "",
  },
  {
    id: 6,
    category: "Maintenance",
    title: "End of season storage",
    description:
      "Full winterisation — batteries, spray system and propellers",
    duration: "8:05",
    thumbnail: "",
  },
];

export const componentHealth = [
  ["Motors", 92],
  ["Spray Pump", 78],
  ["Battery Pack 1", 85],
  ["Battery Pack 2", 62],
  ["Propellers", 44],
];

export const droneCards = [
  ["Model", "DJI Agras T50", "Agricultural spray drone"],
  ["Registration", "WA-AGT-5021", "Registered in Perth, WA"],
  ["Flight Hours", "128.4 hrs", "Last synced 2 hours ago"],
  ["Battery Sets", "4 packs", "2 currently in field rotation"],
];

export const guideItems = [
  ["Pre-season setup", "Prepare batteries, tanks, nozzles, and route maps."],
  ["Spray safety", "Wind checks, PPE reminders, and chemical handling notes."],
  ["Storage guide", "Clean down and battery storage steps for long breaks."],
];

export const dronePartSections = [
  {
    id: 1,
    title: "Propeller Parts",
    position: {
      top: "35%",
      left: "12%",
    },
    parts: [
      {
        id: 101,
        name: "Front Left Propeller",
        price: 89,
        stock: true,
      },
      {
        id: 102,
        name: "Propeller Mount",
        price: 25,
        stock: true,
      },
    ],
  },

  {
    id: 2,
    title: "Motor Assembly",
    position: {
      top: "33%",
      left: "28%",
    },
    parts: [
      {
        id: 201,
        name: "Brushless Motor",
        price: 295,
        stock: true,
      },
      {
        id: 202,
        name: "Motor Housing",
        price: 95,
        stock: true,
      },
    ],
  },

  {
    id: 3,
    title: "RTK Module",
    position: {
      top: "18%",
      left: "50%",
    },
    parts: [
      {
        id: 301,
        name: "RTK Antenna",
        price: 120,
        stock: true,
      },
    ],
  },

  {
    id: 4,
    title: "Spray System",
    position: {
      top: "58%",
      left: "48%",
    },
    parts: [
      {
        id: 401,
        name: "Spray Pump",
        price: 295,
        stock: true,
      },
      {
        id: 402,
        name: "Nozzle Kit",
        price: 64,
        stock: true,
      },
      {
        id: 403,
        name: "Inline Filter",
        price: 38,
        stock: true,
      },
    ],
  },
];
// export const supportTickets = [
//   ["RTK connection drops", "Open", "Technician reviewing logs"],
//   ["Warranty document request", "Resolved", "PDF sent to account email"],
//   ["Pump calibration question", "Waiting", "Reply requested from client"],
// ];

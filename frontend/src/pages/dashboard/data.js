export const defaultDroneId = "t50";

export const portalUsers = [
  {
    username: "t50user",
    password: "t50pass",
    droneId: "t50",
  },
  {
    username: "t40user",
    password: "t40pass",
    droneId: "t40",
  },
];

export const tutorialCategories = [
  "All Videos",
  "Getting Started",
  "Operations",
  "Maintenance",
  "Advanced",
  "Troubleshooting",
];

const t50TutorialVideos = [
  {
    id: 1,
    category: "Getting Started",
    title: "DJI Agras T50 First Flight Setup",
    description: "Unboxing, calibration and first mission",
    duration: "4:32",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "/tutorials/t50-1.jpg",
  },
  {
    id: 2,
    category: "Getting Started",
    title: "Connecting to DJI Agras App",
    description: "Pair controller and configure the aircraft",
    duration: "5:14",
    videoUrl: "https://www.youtube.com/embed/M7lc1UVf-VE",
    thumbnail: "/tutorials/t50-2.jpg",
  },
  {
    id: 3,
    category: "Operations",
    title: "T50 Spray Rate Calibration",
    description: "Configure flow rate and nozzle settings",
    duration: "3:47",
    videoUrl: "https://www.youtube.com/embed/ysz5S6PUM-U",
    thumbnail: "/tutorials/t50-3.jpg",
  },
  {
    id: 4,
    category: "Maintenance",
    title: "T50 Pump Maintenance",
    description: "Inspect and maintain spray pump system",
    duration: "6:10",
    videoUrl: "https://www.youtube.com/embed/jNQXAC9IVRw",
    thumbnail: "/tutorials/t50-4.jpg",
  },
];

const t40TutorialVideos = [
  {
    id: 1,
    category: "Getting Started",
    title: "DJI Agras T40 Setup Guide",
    description: "Controller pairing and startup",
    duration: "3:58",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "/tutorials/t40-1.jpg",
  },
  {
    id: 2,
    category: "Operations",
    title: "T40 Flight Planning",
    description: "Create efficient routes for spraying",
    duration: "5:40",
    videoUrl: "https://www.youtube.com/embed/M7lc1UVf-VE",
    thumbnail: "/tutorials/t40-2.jpg",
  },
  {
    id: 3,
    category: "Maintenance",
    title: "T40 Nozzle Maintenance",
    description: "Cleaning and replacing nozzles",
    duration: "6:20",
    videoUrl: "https://www.youtube.com/embed/ysz5S6PUM-U",
    thumbnail: "/tutorials/t40-3.jpg",
  },
  {
    id: 4,
    category: "Troubleshooting",
    title: "Firmware Update Issues",
    description: "Fix common firmware update problems",
    duration: "7:15",
    videoUrl: "https://www.youtube.com/embed/jNQXAC9IVRw",
    thumbnail: "/tutorials/t40-4.jpg",
  },
];

export const guideItems = [
  ["Pre-season setup", "Prepare batteries, tanks, nozzles, and route maps."],
  ["Spray safety", "Wind checks, PPE reminders, and chemical handling notes."],
  ["Storage guide", "Clean down and battery storage steps for long breaks."],
];

export const supportCards = [
  {
    title: "Call us",
    subtitle: "0456 902 327",
    helper: "Mon-Fri, 7am-6pm AWST - Perth, WA",
    type: "phone",
    bg: "bg-green-700",
  },
  {
    title: "Email support",
    subtitle: "enquiries@aagri-tech.com.au",
    helper: "We respond within 24 hours",
    type: "mail",
    bg: "bg-blue-600",
  },
  {
    title: "WhatsApp",
    subtitle: "Chat with us",
    helper: "Tap to open a WhatsApp conversation",
    type: "message",
    bg: "bg-green-500",
  },
  {
    title: "Book a service",
    subtitle: "Schedule now",
    helper: "Annual service, diagnostics, or repair",
    type: "calendar",
    bg: "bg-orange-500",
  },
];

const commonSupportCategories = [
  {
    id: 1,
    title: "Firmware Updates",
    description: "Step-by-step instructions using the DJI Agras mobile app",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 2,
    title: "Chemical Compatibility",
    description: "Approved chemical types and tank compatibility guidelines",
    video: "https://www.youtube.com/embed/M7lc1UVf-VE",
  },
  {
    id: 3,
    title: "Warranty Claims",
    description: "What's covered and how to submit a warranty request",
    video: "https://www.youtube.com/embed/ysz5S6PUM-U",
  },
  {
    id: 4,
    title: "Propeller Maintenance",
    description: "Inspection checklist and replacement recommendations",
    video: "https://www.youtube.com/embed/jNQXAC9IVRw",
  },
];

const t50PartSections = [
  {
    id: 1,
    title: "Propeller Parts",
    position: { top: "35%", left: "12%" },
    parts: [
      { id: 101, name: "Front Left Propeller", price: 89, stock: true },
      { id: 102, name: "Propeller Mount", price: 25, stock: true },
    ],
  },
  {
    id: 2,
    title: "Motor Assembly",
    position: { top: "33%", left: "28%" },
    parts: [
      { id: 201, name: "Brushless Motor", price: 295, stock: true },
      { id: 202, name: "Motor Housing", price: 95, stock: true },
    ],
  },
  {
    id: 3,
    title: "RTK Module",
    position: { top: "18%", left: "50%" },
    parts: [{ id: 301, name: "RTK Antenna", price: 120, stock: true }],
  },
  {
    id: 4,
    title: "Spray System",
    position: { top: "58%", left: "48%" },
    parts: [
      { id: 401, name: "Spray Pump", price: 295, stock: true },
      { id: 402, name: "Nozzle Kit", price: 64, stock: true },
      { id: 403, name: "Inline Filter", price: 38, stock: true },
    ],
  },
];

const t40PartSections = [
  {
    id: 1,
    title: "Propeller Parts",
    position: { top: "35%", left: "12%" },
    parts: [
      { id: 1101, name: "T40 Propeller Pair", price: 78, stock: true },
      { id: 1102, name: "Propeller Clamp", price: 22, stock: true },
    ],
  },
  {
    id: 2,
    title: "Motor Assembly",
    position: { top: "33%", left: "28%" },
    parts: [
      { id: 1201, name: "T40 Brushless Motor", price: 260, stock: true },
      { id: 1202, name: "Motor Arm Cover", price: 74, stock: false },
    ],
  },
  {
    id: 3,
    title: "RTK Module",
    position: { top: "18%", left: "50%" },
    parts: [{ id: 1301, name: "D-RTK Antenna", price: 118, stock: true }],
  },
  {
    id: 4,
    title: "Spray System",
    position: { top: "58%", left: "48%" },
    parts: [
      { id: 1401, name: "T40 Spray Pump", price: 245, stock: true },
      { id: 1402, name: "Dual Atomised Nozzle Kit", price: 58, stock: true },
      { id: 1403, name: "Inline Filter", price: 34, stock: true },
    ],
  },
];

export const droneProfiles = {
  t50: {
    id: "t50",
    user: {
      name: "Judy Zhu",
      initials: "JZ",
      company: "Australian Agritech",
      location: "Perth, WA",
    },
    drone: {
      model: "DJI Agras T50",
      shortModel: "T50",
      serialNumber: "7741-WA-T50",
      registration: "WA-AGT-5021",
      purchaseDate: "14 January 2025",
      purchasedFrom: "Australia Agritech, Perth WA",
      warrantyExpires: "14 January 2027",
      warrantyStatus: "Active",
      warrantyRemaining: "622 days remaining",
      firmwareVersion: "v10.01.0300",
      firmwareStatus: "Up to date",
      nextServiceDue: "Sep 2025",
      lastServiced: "3 Mar 2025",
      flightHours: "128.4 hrs",
      batterySets: "4 packs",
      image: "/drone.png",
    },
    specs: [
      ["Serial Number", "7741-WA-T50"],
      ["Purchase Date", "14 January 2025"],
      ["Warranty Expires", "14 January 2027"],
      ["Tank Capacity", "40L Spray"],
      ["Effective Spray Width", "4-11m"],
      ["Max Coverage", "18 ha/hr"],
    ],
    dashboardStats: [
      ["Warranty Status", "Active", "Expires 14 Jan 2027", "text-green-600"],
      ["Firmware Version", "V10.01.03", "Up to date", "text-slate-900"],
      ["Next Service Due", "Sep 2025", "Recommended", "text-slate-900"],
      ["Last Serviced", "3 Mar 2025", "Annual Check", "text-slate-900"],
    ],
    checklistItems: [
      ["Flush spray system with clean water", "Done", "bg-green-100 text-green-700"],
      ["Calibrate RTK antenna alignment", "Overdue", "bg-red-100 text-red-700"],
      ["Inspect nozzle wear patterns", "This Week", "bg-orange-100 text-orange-700"],
      ["Battery storage charge", "Upcoming", "bg-blue-100 text-blue-700"],
    ],
    componentHealth: [
      ["Motors", 92],
      ["Spray Pump", 78],
      ["Battery Pack 1", 85],
      ["Battery Pack 2", 62],
      ["Propellers", 44],
    ],
    maintenanceAlert: "Propellers due for replacement - visit Parts to order",
    warrantyPeriod: "14 Jan 2025 - 14 Jan 2027",
    serviceHistory: [
      ["Annual service completed", "3 March 2025"],
      ["Book next service", "Recommended by Sep 2025"],
      ["T50 User Manual", "PDF - 18.4 MB"],
      ["Warranty Terms & Conditions", "Full policy document"],
    ],
    accessories: [
      ["Remote controller", "DJI RC Plus 2"],
      ["Batteries", "2 x DB2160"],
      ["Charger", "C12000 Charging Hub"],
      ["Nozzles", "8 x standard + 2 spare"],
      ["RTK antenna", "D-RTK 2 mobile station"],
    ],
    technicalSpecifications: [
      ["Max takeoff weight", "79.8 kg"],
      ["Tank capacity", "40 L spray + 50 L spreading"],
      ["Max spray flow rate", "16 L/min"],
      ["Effective spray width", "4-11 m adjustable"],
      ["Max operating speed", "10 m/s spray mode"],
      ["Max coverage", "18 ha/hr"],
      ["IP rating", "IP67"],
      ["Operating temperature", "-10C to 50C"],
    ],
    documents: [
      { name: "T50 User Manual", type: "PDF - 18.4 MB" },
      { name: "Quick start guide", type: "PDF - 2.1 MB" },
      { name: "Warranty certificate", type: "PDF - 0.4 MB" },
      { name: "Parts diagram (T50)", type: "PDF - 5.8 MB" },
    ],
    partSections: t50PartSections,
    supportCategories: commonSupportCategories,
  },
  t40: {
    id: "t40",
    user: {
      name: "Rahim Ahmed",
      initials: "RA",
      company: "Green Field Farms",
      location: "Khulna, Bangladesh",
    },
    drone: {
      model: "DJI Agras T40",
      shortModel: "T40",
      serialNumber: "BD-2219-T40",
      registration: "BD-AGR-4018",
      purchaseDate: "10 March 2024",
      purchasedFrom: "Aagri Tech Bangladesh",
      warrantyExpires: "10 March 2026",
      warrantyStatus: "Active",
      warrantyRemaining: "265 days remaining",
      firmwareVersion: "v09.04.1200",
      firmwareStatus: "Update available",
      nextServiceDue: "Jul 2026",
      lastServiced: "12 Feb 2026",
      flightHours: "246.8 hrs",
      batterySets: "3 packs",
      image: "/drone.png",
    },
    specs: [
      ["Serial Number", "BD-2219-T40"],
      ["Purchase Date", "10 March 2024"],
      ["Warranty Expires", "10 March 2026"],
      ["Tank Capacity", "40L Spray"],
      ["Effective Spray Width", "4-10m"],
      ["Max Coverage", "16 ha/hr"],
    ],
    dashboardStats: [
      ["Warranty Status", "Active", "Expires 10 Mar 2026", "text-green-600"],
      ["Firmware Version", "V09.04.12", "Update available", "text-orange-600"],
      ["Next Service Due", "Jul 2026", "Recommended", "text-slate-900"],
      ["Last Serviced", "12 Feb 2026", "Pump check", "text-slate-900"],
    ],
    checklistItems: [
      ["Flush spray system with clean water", "Done", "bg-green-100 text-green-700"],
      ["Replace worn nozzle set", "This Week", "bg-orange-100 text-orange-700"],
      ["Check battery cycle count", "Upcoming", "bg-blue-100 text-blue-700"],
      ["Install firmware update", "Overdue", "bg-red-100 text-red-700"],
    ],
    componentHealth: [
      ["Motors", 88],
      ["Spray Pump", 73],
      ["Battery Pack 1", 76],
      ["Battery Pack 2", 69],
      ["Nozzles", 52],
    ],
    maintenanceAlert: "Firmware update and nozzle check recommended",
    warrantyPeriod: "10 Mar 2024 - 10 Mar 2026",
    serviceHistory: [
      ["Pump inspection completed", "12 February 2026"],
      ["Book next service", "Recommended by Jul 2026"],
      ["T40 User Manual", "PDF - 16.9 MB"],
      ["Warranty Terms & Conditions", "Full policy document"],
    ],
    accessories: [
      ["Remote controller", "DJI RC Plus"],
      ["Batteries", "2 x DB1560"],
      ["Charger", "T40 Intelligent Charger"],
      ["Nozzles", "8 x atomised + 2 spare"],
      ["RTK antenna", "D-RTK 2 mobile station"],
    ],
    technicalSpecifications: [
      ["Max takeoff weight", "50 kg"],
      ["Tank capacity", "40 L spray + 50 L spreading"],
      ["Max spray flow rate", "12 L/min"],
      ["Effective spray width", "4-10 m adjustable"],
      ["Max operating speed", "10 m/s spray mode"],
      ["Max coverage", "16 ha/hr"],
      ["IP rating", "IPX6K"],
      ["Operating temperature", "0C to 45C"],
    ],
    documents: [
      { name: "T40 User Manual", type: "PDF - 16.9 MB" },
      { name: "Quick start guide", type: "PDF - 1.9 MB" },
      { name: "Warranty certificate", type: "PDF - 0.4 MB" },
      { name: "Parts diagram (T40)", type: "PDF - 5.2 MB" },
    ],
    partSections: t40PartSections,
    supportCategories: commonSupportCategories,
  },
};

export const getDashboardData = (droneId = defaultDroneId) => {
  return droneProfiles[droneId] ?? droneProfiles[defaultDroneId];
};

export const normalizeApiDrone = (apiDrone) => {
  return {
    id: apiDrone.id,
    user: {
      name: apiDrone.customer_name,
      initials: apiDrone.customer_initials,
      company: apiDrone.company_name,
      location: apiDrone.location,
    },
    drone: {
      model: apiDrone.model_name,
      shortModel: apiDrone.model_code,
      serialNumber: apiDrone.serial_number,
      registration: apiDrone.registration_number,
      purchaseDate: apiDrone.purchase_date,
      purchasedFrom: apiDrone.purchased_from,
      warrantyExpires: apiDrone.warranty_expires,
      warrantyStatus: apiDrone.warranty_status,
      warrantyRemaining: apiDrone.warranty_remaining,
      firmwareVersion: apiDrone.firmware_version,
      firmwareStatus: apiDrone.firmware_status,
      nextServiceDue: apiDrone.next_service_due,
      lastServiced: apiDrone.last_serviced,
      flightHours: apiDrone.flight_hours,
      batterySets: apiDrone.battery_sets,
      image: apiDrone.image_url || "/drone.png",
    },
    specs: apiDrone.specs,
    dashboardStats: apiDrone.dashboard_stats,
    checklistItems: apiDrone.checklist_items,
    componentHealth: apiDrone.component_health,
    maintenanceAlert: apiDrone.maintenance_alert,
    warrantyPeriod: apiDrone.warranty_period,
    serviceHistory: apiDrone.service_history,
    accessories: apiDrone.accessories,
    technicalSpecifications: apiDrone.technical_specifications,
    documents: apiDrone.documents,
    partSections: apiDrone.part_sections,
    supportCategories: apiDrone.support_categories || commonSupportCategories,
  };
};

const defaultData = getDashboardData();

export const droneSpecs = defaultData.specs;
export const dashboardStats = defaultData.dashboardStats;
export const checklistItems = defaultData.checklistItems;
export const componentHealth = defaultData.componentHealth;
export const dronePartSections = defaultData.partSections;

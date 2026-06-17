const droneInfo = {
  model: "DJI Agras T50",
  serialNumber: "7741-WA-T50",
  purchaseDate: "14 January 2025",
  purchasedFrom: "Australia Agritech, Perth WA",
  warrantyExpires: "14 January 2027",
  firmwareVersion: "v10.01.0300",
};

const includedAccessories = [
  ["Remote controller", "DJI RC Plus 2"],
  ["Batteries", "2 × DB2160"],
  ["Charger", "C12000 Charging Hub"],
  ["Nozzles", "8 × standard + 2 spare"],
  ["RTK antenna", "D-RTK 2 mobile station"],
];

const technicalSpecifications = [
  ["Max takeoff weight", "79.8 kg"],
  ["Tank capacity", "40 L spray + 50 L spreading"],
  ["Max spray flow rate", "16 L/min"],
  ["Effective spray width", "4 – 11 m (adjustable)"],
  ["Max operating speed", "10 m/s (spray mode)"],
  ["Max coverage", "18 ha/hr"],
  ["IP rating", "IP67"],
  ["Operating temperature", "-10°C to 50°C"],
];

const documents = [
  {
    name: "T50 User Manual",
    type: "PDF · 18.4 MB",
  },
  {
    name: "Quick start guide",
    type: "PDF · 2.1 MB",
  },
  {
    name: "Warranty certificate",
    type: "PDF · 0.4 MB",
  },
  {
    name: "Parts diagram (T50)",
    type: "PDF · 5.8 MB",
  },
];

const InfoRow = ({ label, value, green }) => (
  <div className="flex items-center justify-between py-4 border-b border-gray-200 last:border-0">
    <span className="text-[15px] text-[#9ca3af]">{label}</span>
    <span
      className={`text-[15px] font-semibold ${
        green ? "text-[#2f8b57]" : "text-[#111827]"
      }`}
    >
      {value}
    </span>
  </div>
);

const Card = ({ title, children }) => (
  <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
    <div className="px-8 py-6">
      <h3 className="text-[18px] font-bold tracking-wide text-[#334155] uppercase mb-6">
        {title}
      </h3>

      {children}
    </div>
  </div>
);

const MyDrone = () => {
  return (
    <div className="bg-[#f3f4f6] min-h-screen p-8">
      <div className="mb-8">
        <p className="text-sm text-gray-400">Registered equipment</p>
        <h1 className="text-4xl font-bold text-[#111827] mt-1">
          My Drone
        </h1>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* LEFT */}
        <div className="xl:col-span-2 space-y-6">
          <Card title="Aircraft Details">
            <InfoRow label="Model" value={droneInfo.model} />
            <InfoRow label="Serial number" value={droneInfo.serialNumber} />
            <InfoRow label="Purchase date" value={droneInfo.purchaseDate} />
            <InfoRow label="Purchased from" value={droneInfo.purchasedFrom} />
            <InfoRow
              label="Warranty expires"
              value={droneInfo.warrantyExpires}
              green
            />
            <InfoRow
              label="Firmware version"
              value={droneInfo.firmwareVersion}
            />
          </Card>

          <Card title="Technical Specifications">
            {technicalSpecifications.map(([label, value]) => (
              <InfoRow key={label} label={label} value={value} />
            ))}
          </Card>
        </div>

        {/* RIGHT */}
        <div className="space-y-6">
          <Card title="Included Accessories">
            {includedAccessories.map(([label, value]) => (
              <InfoRow key={label} label={label} value={value} />
            ))}
          </Card>

          <Card title="Documents">
            <div className="space-y-4">
              {documents.map((doc) => (
                <div
                  key={doc.name}
                  className="flex items-center justify-between border-b border-gray-200 pb-4 last:border-0"
                >
                  <div>
                    <h4 className="font-medium text-[#111827]">
                      {doc.name}
                    </h4>
                    <p className="text-sm text-gray-400">{doc.type}</p>
                  </div>

                  <button className="px-4 py-1 rounded-full bg-gray-100 text-gray-500 text-sm font-medium hover:bg-gray-200">
                    Download
                  </button>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MyDrone;
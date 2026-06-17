import { useState } from "react";
import {
  BatteryCharging,
  Radio,
  Droplets,
  Cpu,
  Power,
  Gamepad2,
  PlayCircle,
} from "lucide-react";

const troubleshootData = [
  {
    id: 1,
    title: "Drone won't power on",
    icon: Power,
    description:
      "Check battery connection, power button sequence and battery charge.",
    video:
      "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 2,
    title: "RTK signal not locking",
    icon: Radio,
    description:
      "Inspect antenna placement and verify RTK network connection.",
    video:
      "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 3,
    title: "Battery won't charge",
    icon: BatteryCharging,
    description:
      "Verify charger status, cable integrity and battery temperature.",
    video:
      "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 4,
    title: "Spray pump not working",
    icon: Droplets,
    description:
      "Check filter blockage, liquid level and nozzle condition.",
    video:
      "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 5,
    title: "Controller won't pair",
    icon: Gamepad2,
    description:
      "Rebind controller and ensure latest firmware is installed.",
    video:
      "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 6,
    title: "Firmware update stuck",
    icon: Cpu,
    description:
      "Verify internet connection and available storage space.",
    video:
      "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

const Troubleshoot = () => {
  const [selectedIssue, setSelectedIssue] = useState(troubleshootData[0]);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <p className="text-sm text-gray-500 mb-2">
          Diagnose an issue
        </p>

        <h1 className="text-3xl font-bold text-slate-900">
          Troubleshoot your T50
        </h1>

        <p className="mt-2 text-gray-500">
          Select a common issue below or describe your problem
          to get instant guidance.
        </p>
      </div>

      {/* Issue Cards */}
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {troubleshootData.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => setSelectedIssue(item)}
              className={`flex items-center gap-4 rounded-2xl border p-5 text-left transition-all duration-200
              
              ${
                selectedIssue.id === item.id
                  ? "border-green-700 bg-green-50 shadow-md"
                  : "border-gray-200 bg-white hover:border-green-300 hover:shadow-md"
              }`}
            >
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-xl
                ${
                  selectedIssue.id === item.id
                    ? "bg-green-700 text-white"
                    : "bg-green-100 text-green-700"
                }`}
              >
                <Icon size={24} />
              </div>

              <span className="font-medium text-slate-800">
                {item.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Content Area */}
      <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
        {/* Green Header */}
        <div className="bg-[#2f6f3f] p-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-white/20" />

            <div>
              <h3 className="font-semibold text-white text-lg">
                AI Troubleshoot Assistant
              </h3>

              <p className="text-green-100 text-sm">
                Attach photos or screenshots for faster diagnosis
              </p>
            </div>
          </div>
        </div>

        {/* Main Body */}
        <div className="p-6">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Left */}
            <div>
              <div className="rounded-2xl bg-gray-50 border p-5">
                <h2 className="text-xl font-semibold mb-3">
                  {selectedIssue.title}
                </h2>

                <p className="text-gray-600 leading-7">
                  {selectedIssue.description}
                </p>

                <div className="mt-5 space-y-3">
                  <div className="rounded-xl bg-white p-4 border">
                    ✓ Check all cable connections
                  </div>

                  <div className="rounded-xl bg-white p-4 border">
                    ✓ Restart the aircraft
                  </div>

                  <div className="rounded-xl bg-white p-4 border">
                    ✓ Verify latest firmware version
                  </div>
                </div>
              </div>
            </div>

            {/* Right Video */}
            <div>
              <div className="rounded-2xl border overflow-hidden">
                <div className="flex items-center gap-2 border-b p-4">
                  <PlayCircle
                    size={20}
                    className="text-green-700"
                  />

                  <h3 className="font-semibold">
                    Troubleshooting Video
                  </h3>
                </div>

                <iframe
                  className="w-full h-[320px]"
                  src={selectedIssue.video}
                  title={selectedIssue.title}
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* Chat Input */}
          <div className="mt-8 flex gap-3">
            <input
              type="text"
              placeholder="Describe your issue or attach a photo..."
              className="h-14 flex-1 rounded-xl border px-4 outline-none focus:border-green-700"
            />

            <button className="rounded-xl bg-green-700 px-8 text-white font-medium hover:bg-green-800">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Troubleshoot;
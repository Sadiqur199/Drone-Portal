import { useEffect, useState } from "react";
import API from "../api/axios";

const Dashboard = () => {
  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const res = await API.get("/drones/dashboard");
      setDashboard(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6">
{/* Top Header */}
<header className="bg-white border-b">
  <div className="px-8 h-16 flex items-center justify-between">
    <div className="flex items-center gap-4">
      <div className="w-8 h-8 rounded bg-green-700"></div>

      <div className="flex items-center gap-3">
        <h2 className="font-bold text-slate-900">
          Australia Agritech
        </h2>

        <span className="text-gray-300">|</span>

        <span className="text-xs tracking-wider text-gray-400 uppercase">
          Client Portal
        </span>
      </div>
    </div>

    <div className="flex items-center gap-4">
      <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-2 flex items-center gap-3">
        <span className="font-semibold text-green-800">
          DJI Agras T50
        </span>

        <span className="text-gray-400">
          SN · 7741-WA-T50
        </span>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-700">
          Judy Zhu
        </span>

        <div className="w-9 h-9 rounded-full bg-green-700 text-white flex items-center justify-center font-semibold">
          JZ
        </div>
      </div>
    </div>
  </div>

  {/* Navigation Tabs */}
  <nav className="px-8">
    <ul className="flex gap-10 text-sm">
      <li className="border-b-2 border-green-700 text-green-700 py-4 font-medium">
        Dashboard
      </li>

      <li className="py-4 text-gray-500">
        My Drone
      </li>

      <li className="py-4 text-gray-500">
        Checklists
      </li>

      <li className="py-4 text-gray-500">
        Tutorials
      </li>

      <li className="py-4 text-gray-500">
        Troubleshoot
      </li>

      <li className="py-4 text-gray-500">
        Guides
      </li>

      <li className="py-4 text-gray-500">
        Parts
      </li>

      <li className="py-4 text-gray-500">
        Support
      </li>
    </ul>
  </nav>
</header>

      {/* Drone Overview Card */}
      <div className="bg-white rounded-3xl shadow-sm border p-8 mb-6">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <div>
            <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
              Warranty Active • 622 days remaining
            </span>

            <h2 className="text-5xl font-bold mt-5">
              DJI Agras T50
            </h2>

            <p className="text-gray-500 mt-2">
              Registered to Judy Zhu · Australian Agritech · Perth, WA
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-8">
              <div>
                <p className="text-xs text-gray-400 uppercase">
                  Serial Number
                </p>
                <p className="font-semibold">
                  7741-WA-T50
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-400 uppercase">
                  Purchase Date
                </p>
                <p className="font-semibold">
                  14 January 2025
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-400 uppercase">
                  Warranty Expires
                </p>
                <p className="font-semibold">
                  14 January 2027
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-400 uppercase">
                  Tank Capacity
                </p>
                <p className="font-semibold">
                  40L Spray
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-400 uppercase">
                  Effective Spray Width
                </p>
                <p className="font-semibold">
                  4–11m
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-400 uppercase">
                  Max Coverage
                </p>
                <p className="font-semibold">
                  18 ha/hr
                </p>
              </div>
            </div>
          </div>

          {/* Drone Icon */}
          <div className="flex items-center justify-center">
            <div className="w-56 h-56 rounded-full bg-green-50 flex items-center justify-center">
              <span className="text-8xl">🚁</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-5 mb-6">
        <div className="bg-white p-5 rounded-2xl border">
          <p className="text-gray-400 text-sm">
            Warranty Status
          </p>
          <h3 className="text-2xl font-bold text-green-600">
            Active
          </h3>
          <p className="text-sm text-gray-500">
            Expires 14 Jan 2027
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl border">
          <p className="text-gray-400 text-sm">
            Firmware Version
          </p>
          <h3 className="text-2xl font-bold">
            V10.01.03
          </h3>
          <p className="text-green-600 text-sm">
            Up to date
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl border">
          <p className="text-gray-400 text-sm">
            Next Service Due
          </p>
          <h3 className="text-2xl font-bold">
            Sep 2025
          </h3>
          <p className="text-gray-500 text-sm">
            Recommended
          </p>
        </div>

        <div className="bg-white p-5 rounded-2xl border">
          <p className="text-gray-400 text-sm">
            Last Serviced
          </p>
          <h3 className="text-2xl font-bold">
            3 Mar 2025
          </h3>
          <p className="text-gray-500 text-sm">
            Annual Check
          </p>
        </div>
      </div>
      {/* Middle Section */}
      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        {/* Checklist */}
        <div className="bg-white rounded-2xl border p-6">
          <div className="flex justify-between mb-4">
            <h3 className="font-bold text-lg">
              Maintenance Checklist
            </h3>

            <button className="text-green-600">
              See all →
            </button>
          </div>

          <div className="bg-yellow-100 border border-yellow-300 text-yellow-800 p-3 rounded-xl mb-4">
            2 tasks overdue — pre-season spray
            check required
          </div>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span>
                Flush spray system with clean
                water
              </span>

              <span className="bg-green-100 text-green-700 px-3 rounded-full text-xs">
                Done
              </span>
            </div>

            <div className="flex justify-between">
              <span>
                Calibrate RTK antenna alignment
              </span>

              <span className="bg-red-100 text-red-700 px-3 rounded-full text-xs">
                Overdue
              </span>
            </div>

            <div className="flex justify-between">
              <span>
                Inspect nozzle wear patterns
              </span>

              <span className="bg-orange-100 text-orange-700 px-3 rounded-full text-xs">
                This Week
              </span>
            </div>

            <div className="flex justify-between">
              <span>
                Battery storage charge
              </span>

              <span className="bg-blue-100 text-blue-700 px-3 rounded-full text-xs">
                Upcoming
              </span>
            </div>
          </div>
        </div>

        {/* Tutorials */}
        <div className="bg-white rounded-2xl border p-6">
          <div className="flex justify-between mb-4">
            <h3 className="font-bold text-lg">
              Recent Tutorials
            </h3>

            <button className="text-green-600">
              See all →
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              "First Flight Setup",
              "RTK Signal Setup",
              "Spray Calibration",
              "End of Season Storage",
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-xl overflow-hidden border"
              >
                <div className="h-32 bg-green-800"></div>

                <div className="p-3">
                  <h4 className="font-medium">
                    {item}
                  </h4>
                  <p className="text-xs text-gray-500">
                    Tutorial
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Component Health */}
        <div className="bg-white rounded-2xl border p-6">
          <h3 className="font-bold text-lg mb-6">
            Component Health
          </h3>

          {[
            ["Motors", 92],
            ["Spray Pump", 78],
            ["Battery Pack 1", 85],
            ["Battery Pack 2", 62],
            ["Propellers", 44],
          ].map(([name, value]) => (
            <div key={name} className="mb-5">
              <div className="flex justify-between mb-1">
                <span>{name}</span>
                <span>{value}%</span>
              </div>

              <div className="w-full h-3 bg-gray-200 rounded-full">
                <div
                  className="h-3 rounded-full bg-green-600"
                  style={{
                    width: `${value}%`,
                  }}
                ></div>
              </div>
            </div>
          ))}

          <div className="bg-red-50 border border-red-200 text-red-600 p-3 rounded-xl mt-4">
            Propellers due for replacement —
            visit Parts to order
          </div>
        </div>

        {/* Warranty */}
        <div className="bg-white rounded-2xl border p-6">
          <h3 className="font-bold text-lg mb-6">
            Warranty & Service History
          </h3>

          <div className="bg-blue-50 border rounded-2xl p-4 mb-5">
            <p className="text-blue-600 text-sm">
              Warranty Period
            </p>

            <h4 className="font-bold">
              14 Jan 2025 – 14 Jan 2027
            </h4>

            <div className="w-full h-2 bg-blue-100 rounded-full mt-3">
              <div className="w-2/3 h-2 bg-blue-600 rounded-full"></div>
            </div>
          </div>

          <div className="space-y-5">
            <div>
              <h4 className="font-semibold">
                Annual service completed
              </h4>
              <p className="text-gray-500 text-sm">
                3 March 2025
              </p>
            </div>

            <div>
              <h4 className="font-semibold">
                Book next service
              </h4>
              <p className="text-gray-500 text-sm">
                Recommended by Sep 2025
              </p>
            </div>

            <div>
              <h4 className="font-semibold">
                T50 User Manual
              </h4>
              <p className="text-gray-500 text-sm">
                PDF - 18.4 MB
              </p>
            </div>

            <div>
              <h4 className="font-semibold">
                Warranty Terms &
                Conditions
              </h4>
              <p className="text-gray-500 text-sm">
                Full policy document
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
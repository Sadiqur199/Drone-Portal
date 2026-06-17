import { useMemo, useState } from "react";
import {
  BatteryCharging,
  Cpu,
  Droplets,
  Gamepad2,
  PlayCircle,
  Power,
  Radio,
} from "lucide-react";
import { useDashboardData } from "./useDashboardData";

const issueIcons = {
  BatteryCharging,
  Cpu,
  Droplets,
  Gamepad2,
  Power,
  Radio,
};

const Troubleshoot = () => {
  const [selectedIssueId, setSelectedIssueId] = useState(null);
  const { drone, troubleshootIssues } = useDashboardData();
  const selectedIssue = useMemo(
    () =>
      troubleshootIssues.find((issue) => issue.id === selectedIssueId) ||
      troubleshootIssues[0],
    [selectedIssueId, troubleshootIssues]
  );

  return (
    <div className="space-y-8">
      <div>
        <p className="mb-2 text-sm text-gray-500">Diagnose an issue</p>

        <h1 className="text-3xl font-bold text-slate-900">
          Troubleshoot your {drone.shortModel}
        </h1>

        <p className="mt-2 text-gray-500">
          Select a common issue below or describe your problem to get instant
          guidance.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {troubleshootIssues.map((item) => {
          const Icon = issueIcons[item.icon] || Power;

          return (
            <button
              key={item.id}
              onClick={() => setSelectedIssueId(item.id)}
              className={`flex items-center gap-4 rounded-2xl border p-5 text-left transition-all duration-200 ${
                selectedIssue.id === item.id
                  ? "border-green-700 bg-green-50 shadow-md"
                  : "border-gray-200 bg-white hover:border-green-300 hover:shadow-md"
              }`}
            >
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-xl ${
                  selectedIssue.id === item.id
                    ? "bg-green-700 text-white"
                    : "bg-green-100 text-green-700"
                }`}
              >
                <Icon size={24} />
              </div>

              <span className="font-medium text-slate-800">{item.title}</span>
            </button>
          );
        })}
      </div>

      <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
        <div className="bg-[#2f6f3f] p-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-white/20" />

            <div>
              <h3 className="text-lg font-semibold text-white">
                AI Troubleshoot Assistant
              </h3>

              <p className="text-sm text-green-100">
                Attach photos or screenshots for faster diagnosis
              </p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <div className="rounded-2xl border bg-gray-50 p-5">
                <h2 className="mb-3 text-xl font-semibold">
                  {selectedIssue.title}
                </h2>

                <p className="leading-7 text-gray-600">
                  {selectedIssue.description}
                </p>

                <div className="mt-5 space-y-3">
                  {selectedIssue.steps.map((step) => (
                    <div key={step} className="rounded-xl border bg-white p-4">
                      {step}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="overflow-hidden rounded-2xl border">
                <div className="flex items-center gap-2 border-b p-4">
                  <PlayCircle size={20} className="text-green-700" />

                  <h3 className="font-semibold">Troubleshooting Video</h3>
                </div>

                <iframe
                  className="h-[320px] w-full"
                  src={selectedIssue.video}
                  title={selectedIssue.title}
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          <div className="mt-8 flex gap-3">
            <input
              type="text"
              placeholder="Describe your issue or attach a photo..."
              className="h-14 flex-1 rounded-xl border px-4 outline-none focus:border-green-700"
            />

            <button className="rounded-xl bg-green-700 px-8 font-medium text-white hover:bg-green-800">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Troubleshoot;

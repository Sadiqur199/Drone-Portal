
import { useState } from "react";
import { Play } from "lucide-react";
import { tutorialCategories, tutorialVideos } from "./data";
import { useDashboardData } from "./useDashboardData";

const badgeColors = {
  "Getting Started": "bg-green-600",
  Operations: "bg-blue-600",
  Maintenance: "bg-orange-600",
  Advanced: "bg-purple-600",
  Troubleshooting: "bg-red-600",
};

const Tutorials = () => {
  const [activeTab, setActiveTab] = useState("All Videos");
  const { drone } = useDashboardData();

  const filteredVideos =
    activeTab === "All Videos"
      ? tutorialVideos
      : tutorialVideos.filter(
          (video) => video.category === activeTab
        );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <p className="text-sm text-gray-400">Video library</p>

        <h1 className="mt-1 text-4xl font-bold text-slate-900">
          Tutorials for {drone.model}
        </h1>

        {/* Tabs */}
        <div className="mt-7 flex flex-wrap gap-3">
          {tutorialCategories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full border px-5 py-2 text-sm font-medium transition
              ${
                activeTab === tab
                  ? "bg-[#2f6f44] text-white border-[#2f6f44]"
                  : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Video Grid */}
      <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2">
        {filteredVideos.map((video) => (
          <article
            key={video.id}
            className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
          >
            {/* Thumbnail */}
            <div className="relative h-52 overflow-hidden bg-gradient-to-r from-[#163d24] to-[#2e7a42]">
              {/* Badge */}
              <div
                className={`absolute left-3 top-3 rounded px-2 py-1 text-xs font-semibold text-white ${
                  badgeColors[video.category]
                }`}
              >
                {video.category}
              </div>

              {/* Play */}
              <div className="flex h-full items-center justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white">
                  <Play
                    className="ml-1 h-7 w-7 text-green-700"
                    fill="currentColor"
                  />
                </div>
              </div>

              {/* Duration */}
              <div className="absolute bottom-3 right-3 rounded bg-black/70 px-2 py-1 text-xs font-semibold text-white">
                {video.duration}
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-xl font-bold text-slate-900">
                {video.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                {video.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Tutorials;

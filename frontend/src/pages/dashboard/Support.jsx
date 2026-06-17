import { useMemo, useState } from "react";
import {
  Phone,
  Mail,
  MessageCircle,
  Calendar,
  PlayCircle,
  X,
} from "lucide-react";
import { supportCards } from "./data";
import { useDashboardData } from "./useDashboardData";

const icons = {
  calendar: Calendar,
  mail: Mail,
  message: MessageCircle,
  phone: Phone,
};

const Support = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const { drone, supportCategories } = useDashboardData();

  const faqData = useMemo(() => supportCategories, [supportCategories]);

  return (
    <>
      <div className="space-y-8">
        <div>
          <p className="text-sm text-slate-400">We're here to help</p>

          <h2 className="mt-1 text-3xl font-bold text-slate-900">
            Support for {drone.model}
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {supportCards.map((item) => {
            const Icon = icons[item.type];

            return (
              <button
                key={item.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-xl ${item.bg}`}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="font-semibold text-slate-800">
                      {item.subtitle}
                    </p>

                    <p className="text-sm text-slate-400">{item.helper}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-slate-600">
            Frequently Asked Questions
          </h3>

          <div className="space-y-4">
            {faqData.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-4 rounded-2xl border border-slate-200 p-5 md:flex-row md:items-center md:justify-between"
              >
                <div>
                  <h4 className="font-semibold text-slate-900">
                    {item.title}
                  </h4>

                  <p className="text-sm text-slate-400">{item.description}</p>
                </div>

                <button
                  onClick={() => setSelectedVideo(item)}
                  className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600 transition hover:bg-blue-100"
                >
                  <PlayCircle size={18} />
                  View Video
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b p-5">
              <div>
                <h3 className="font-bold text-slate-900">
                  {selectedVideo.title}
                </h3>

                <p className="text-sm text-slate-500">
                  {selectedVideo.description}
                </p>
              </div>

              <button
                onClick={() => setSelectedVideo(null)}
                className="rounded-lg p-2 hover:bg-slate-100"
              >
                <X size={20} />
              </button>
            </div>

            <div className="aspect-video w-full">
              <iframe
                className="h-full w-full"
                src={selectedVideo.video}
                title={selectedVideo.title}
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Support;

import { useMemo, useState } from "react";
import {
  Phone,
  Mail,
  MessageCircle,
  Calendar,
  PlayCircle,
  X,
} from "lucide-react";

const supportCategories = [
  {
    id: 1,
    title: "Firmware Updates",
    description: "Step-by-step instructions using the DJI Agras mobile app",
    video:
      "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 2,
    title: "Chemical Compatibility",
    description: "Approved chemical types and tank compatibility guidelines",
    video:
      "https://www.youtube.com/embed/M7lc1UVf-VE",
  },
  {
    id: 3,
    title: "Warranty Claims",
    description: "What's covered and how to submit a warranty request",
    video:
      "https://www.youtube.com/embed/ysz5S6PUM-U",
  },
  {
    id: 4,
    title: "Propeller Maintenance",
    description: "Inspection checklist and replacement recommendations",
    video:
      "https://www.youtube.com/embed/jNQXAC9IVRw",
  },
];

const supportCards = [
  {
    title: "Call us",
    subtitle: "0456 902 327",
    helper: "Mon–Fri, 7am–6pm AWST · Perth, WA",
    icon: Phone,
    bg: "bg-green-700",
  },
  {
    title: "Email support",
    subtitle: "enquiries@aagri-tech.com.au",
    helper: "We respond within 24 hours",
    icon: Mail,
    bg: "bg-blue-600",
  },
  {
    title: "WhatsApp",
    subtitle: "Chat with us",
    helper: "Tap to open a WhatsApp conversation",
    icon: MessageCircle,
    bg: "bg-green-500",
  },
  {
    title: "Book a service",
    subtitle: "Schedule now",
    helper: "Annual service, diagnostics, or repair",
    icon: Calendar,
    bg: "bg-orange-500",
  },
];

const Support = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const faqData = useMemo(() => supportCategories, []);

  return (
    <>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <p className="text-sm text-slate-400">We're here to help</p>

          <h2 className="mt-1 text-3xl font-bold text-slate-900">
            Support
          </h2>
        </div>

        {/* Support Cards */}
        <div className="grid gap-5 md:grid-cols-2">
          {supportCards.map((item) => {
            const Icon = item.icon;

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

                    <p className="text-sm text-slate-400">
                      {item.helper}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* FAQ */}
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

                  <p className="text-sm text-slate-400">
                    {item.description}
                  </p>
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

      {/* Video Modal */}
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
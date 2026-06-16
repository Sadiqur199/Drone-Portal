import { SectionCard } from "./shared";
import { supportTickets } from "./data";

const Support = () => {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <SectionCard title="Contact Support">
        <p className="text-sm leading-6 text-gray-600">
          Create a service request for parts, warranty, calibration, or training support.
        </p>
        <button className="mt-5 rounded-lg bg-green-700 px-4 py-2 text-sm font-medium text-white">
          New Ticket
        </button>
      </SectionCard>

      <div className="lg:col-span-2">
        <SectionCard title="Recent Tickets">
          <div className="space-y-4">
            {supportTickets.map(([title, status, helper]) => (
              <div key={title} className="rounded-xl border p-4">
                <div className="flex items-center justify-between gap-4">
                  <h4 className="font-semibold text-slate-900">{title}</h4>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                    {status}
                  </span>
                </div>
                <p className="mt-1 text-sm text-gray-500">{helper}</p>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>
    </div>
  );
};

export default Support;

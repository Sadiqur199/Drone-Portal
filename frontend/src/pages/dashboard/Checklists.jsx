import { SectionCard } from "./shared";
import { useDashboardData } from "./useDashboardData";

const Checklists = () => {
  const { checklistItems, drone } = useDashboardData();

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <SectionCard title="Today">
        <div className="space-y-4">
          {checklistItems.map(([task, status, className]) => (
            <label
              key={task}
              className="flex items-center justify-between gap-4 rounded-xl border p-4"
            >
              <span className="flex items-center gap-3">
                <input type="checkbox" defaultChecked={status === "Done"} className="h-4 w-4" />
                <span className="text-slate-700">{task}</span>
              </span>
              <span className={`rounded-full px-3 py-1 text-xs font-medium ${className}`}>
                {status}
              </span>
            </label>
          ))}
        </div>
      </SectionCard>

      <SectionCard title="Upcoming Service">
        <div className="space-y-4">
          {["Full frame inspection", "Pump pressure test", "Firmware health report"].map(
            (item) => (
              <div key={item} className="rounded-xl border p-4">
                <h4 className="font-semibold text-slate-900">{item}</h4>
                <p className="text-sm text-gray-500">
                  Scheduled before {drone.nextServiceDue} service window
                </p>
              </div>
            ),
          )}
        </div>
      </SectionCard>
    </div>
  );
};

export default Checklists;

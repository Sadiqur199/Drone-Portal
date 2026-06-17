import { SectionCard, StatCard } from "./shared";
import { useDashboardData } from "./useDashboardData";

const DashboardHome = () => {
  const {
    checklistItems,
    componentHealth,
    dashboardStats,
    drone,
    specs,
    user,
    maintenanceAlert,
    serviceHistory,
    tutorialVideos,
    warrantyPeriod,
  } = useDashboardData();

  return (
    <>
      <div className="mb-6 rounded-3xl border bg-white p-8 shadow-sm">
        <div className="flex flex-col justify-between gap-10 lg:flex-row">
          <div>
            <span className="rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-700">
              Warranty {drone.warrantyStatus} - {drone.warrantyRemaining}
            </span>

            <h2 className="mt-5 text-5xl font-bold text-slate-950">
              {drone.model}
            </h2>

            <p className="mt-2 text-gray-500">
              Registered to {user.name} - {user.company} - {user.location}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-3">
              {specs.map(([label, value]) => (
                <div key={label}>
                  <p className="text-xs uppercase text-gray-400">{label}</p>
                  <p className="font-semibold text-slate-900">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="flex h-56 w-56 items-center justify-center rounded-full bg-green-50">
              <span className="text-7xl font-black text-green-800">
                {drone.shortModel}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6 grid gap-5 md:grid-cols-4">
        {dashboardStats.map(([label, value, helper, valueClass]) => (
          <StatCard
            key={label}
            label={label}
            value={value}
            helper={helper}
            valueClass={valueClass}
          />
        ))}
      </div>

      <div className="mb-6 grid gap-6 lg:grid-cols-2">
        <SectionCard title="Maintenance Checklist" action="See all">
          <div className="mb-4 rounded-xl border border-yellow-300 bg-yellow-100 p-3 text-yellow-800">
            2 tasks overdue - pre-season spray check required
          </div>

          <div className="space-y-4">
            {checklistItems.map(([task, status, className]) => (
              <div key={task} className="flex items-center justify-between gap-4">
                <span className="text-slate-700">{task}</span>
                <span className={`rounded-full px-3 py-1 text-xs font-medium ${className}`}>
                  {status}
                </span>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="Recent Tutorials" action="See all">
          <div className="grid grid-cols-2 gap-4">
            {tutorialVideos.slice(0, 4).map((item) => (
              <div key={item.id} className="overflow-hidden rounded-xl border">
                <div className="flex h-32 items-center justify-center bg-green-800 text-3xl font-bold text-white" />
                <div className="p-3">
                  <h4 className="font-medium text-slate-900">{item.title}</h4>
                  <p className="text-xs text-gray-500">Tutorial</p>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <SectionCard title="Component Health">
          {componentHealth.map(([name, value]) => (
            <div key={name} className="mb-5">
              <div className="mb-1 flex justify-between text-sm">
                <span className="text-slate-700">{name}</span>
                <span className="font-medium text-slate-900">{value}%</span>
              </div>
              <div className="h-3 w-full rounded-full bg-gray-200">
                <div
                  className="h-3 rounded-full bg-green-600"
                  style={{ width: `${value}%` }}
                />
              </div>
            </div>
          ))}
          <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-3 text-red-600">
            {maintenanceAlert}
          </div>
        </SectionCard>

        <SectionCard title="Warranty & Service History">
          <div className="mb-5 rounded-2xl border bg-blue-50 p-4">
            <p className="text-sm text-blue-600">Warranty Period</p>
            <h4 className="font-bold text-slate-900">{warrantyPeriod}</h4>
            <div className="mt-3 h-2 w-full rounded-full bg-blue-100">
              <div className="h-2 w-2/3 rounded-full bg-blue-600" />
            </div>
          </div>

          <div className="space-y-5">
            {serviceHistory.map(([title, helper]) => (
              <div key={title}>
                <h4 className="font-semibold text-slate-900">{title}</h4>
                <p className="text-sm text-gray-500">{helper}</p>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>
    </>
  );
};

export default DashboardHome;

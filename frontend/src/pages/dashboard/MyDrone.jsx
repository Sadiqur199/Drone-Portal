import { InfoGrid, SectionCard } from "./shared";
import { droneCards, droneSpecs } from "./data";

const MyDrone = () => {
  return (
    <div className="space-y-6">
      <InfoGrid items={droneCards} />
      <SectionCard title="Drone Profile">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl bg-green-50 p-6 text-center">
            <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-full bg-white text-4xl font-black text-green-800">
              T50
            </div>
            <h3 className="mt-4 text-xl font-bold text-slate-900">DJI Agras T50</h3>
            <p className="text-sm text-gray-500">Spraying and spreading platform</p>
          </div>
          <div className="lg:col-span-2">
            <div className="grid gap-4 md:grid-cols-2">
              {droneSpecs.map(([label, value]) => (
                <div key={label} className="rounded-xl border p-4">
                  <p className="text-xs uppercase text-gray-400">{label}</p>
                  <p className="mt-1 font-semibold text-slate-900">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionCard>
    </div>
  );
};

export default MyDrone;

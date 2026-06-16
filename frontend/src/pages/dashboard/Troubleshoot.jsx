import { SectionCard } from "./shared";

const issues = [
  ["No RTK Signal", "Check antenna mount, controller network, and base station pairing."],
  ["Uneven Spray", "Inspect nozzle blockage, pump pressure, and calibration values."],
  ["Battery Warning", "Review cycle count, temperature, and storage charge level."],
];

const Troubleshoot = () => {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {issues.map(([title, text]) => (
        <SectionCard key={title} title={title}>
          <p className="text-sm leading-6 text-gray-600">{text}</p>
          <button className="mt-5 rounded-lg border border-green-700 px-4 py-2 text-sm font-medium text-green-700">
            View Fix
          </button>
        </SectionCard>
      ))}
    </div>
  );
};

export default Troubleshoot;

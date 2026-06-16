import { SectionCard } from "./shared";
import { parts } from "./data";

const Parts = () => {
  return (
    <SectionCard title="Recommended Parts">
      <div className="overflow-hidden rounded-xl border">
        {parts.map(([name, status, price]) => (
          <div key={name} className="grid grid-cols-3 items-center border-b p-4 last:border-b-0">
            <span className="font-medium text-slate-900">{name}</span>
            <span className="text-sm text-gray-500">{status}</span>
            <span className="text-right font-semibold text-slate-900">{price}</span>
          </div>
        ))}
      </div>
    </SectionCard>
  );
};

export default Parts;

export const StatCard = ({ label, value, helper, valueClass = "text-slate-900" }) => (
  <div className="rounded-2xl border bg-white p-5">
    <p className="text-sm text-gray-400">{label}</p>
    <h3 className={`text-2xl font-bold ${valueClass}`}>{value}</h3>
    <p className="text-sm text-gray-500">{helper}</p>
  </div>
);

export const SectionCard = ({ title, children, action }) => (
  <section className="rounded-2xl border bg-white p-6">
    <div className="mb-4 flex items-center justify-between gap-4">
      <h3 className="text-lg font-bold text-slate-900">{title}</h3>
      {action && <button className="text-sm font-medium text-green-700">{action}</button>}
    </div>
    {children}
  </section>
);

export const InfoGrid = ({ items }) => (
  <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
    {items.map(([label, value, helper]) => (
      <div key={label} className="rounded-2xl border bg-white p-5">
        <p className="text-xs uppercase tracking-wide text-gray-400">{label}</p>
        <h4 className="mt-2 text-xl font-bold text-slate-900">{value}</h4>
        <p className="mt-1 text-sm text-gray-500">{helper}</p>
      </div>
    ))}
  </div>
);

import { guideItems } from "./data";

const Guides = () => {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {guideItems.map(([title, text]) => (
        <div key={title} className="rounded-2xl border bg-white p-6">
          <h3 className="text-lg font-bold text-slate-900">{title}</h3>
          <p className="mt-3 text-sm leading-6 text-gray-600">{text}</p>
          <button className="mt-5 text-sm font-medium text-green-700">Open guide</button>
        </div>
      ))}
    </div>
  );
};

export default Guides;

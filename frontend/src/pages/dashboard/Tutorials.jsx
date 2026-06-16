import { tutorials } from "./data";

const Tutorials = () => {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {tutorials.map((item, index) => (
        <article key={item} className="overflow-hidden rounded-2xl border bg-white">
          <div className="flex h-40 items-center justify-center bg-slate-900 text-4xl font-black text-white">
            {String(index + 1).padStart(2, "0")}
          </div>
          <div className="p-5">
            <h3 className="font-bold text-slate-900">{item}</h3>
            <p className="mt-2 text-sm text-gray-500">
              Short demo lesson with setup notes and field tips.
            </p>
            <button className="mt-4 rounded-lg bg-green-700 px-4 py-2 text-sm font-medium text-white">
              Start
            </button>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Tutorials;

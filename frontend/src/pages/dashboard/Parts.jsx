import { useMemo, useState } from "react";
import { useDashboardData } from "./useDashboardData";

const Parts = () => {
  const { drone, partSections } = useDashboardData();
  const [selectedSectionId, setSelectedSectionId] = useState(partSections[0].id);
  const selectedSection =
    partSections.find((section) => section.id === selectedSectionId) ||
    partSections[0];

  const [cart, setCart] = useState([]);

  const [showCheckout, setShowCheckout] = useState(false);

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  const total = useMemo(
    () => cart.reduce((sum, item) => sum + item.price, 0),
    [cart]
  );

  return (
    <>
      <div className="grid grid-cols-12 gap-6">
        {/* Drone */}
        <div className="col-span-8">
          <div className="rounded-3xl bg-white p-6 shadow">
            <h2 className="text-3xl font-bold">
              Parts for {drone.model}
            </h2>

            <p className="mt-2 text-gray-500">
              Click a numbered section on the drone.
            </p>

            <div className="relative mt-6">
              <img
                src={drone.image}
                alt={drone.model}
                className="mx-auto max-h-[500px]"
              />

              {partSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setSelectedSectionId(section.id)}
                  className="absolute h-10 w-10 rounded-full bg-green-700 text-white font-bold shadow-lg"
                  style={{
                    top: section.position.top,
                    left: section.position.left,
                  }}
                >
                  {section.id}
                </button>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              {partSections.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedSectionId(item.id)}
                  className="flex items-center gap-2"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-700 text-white text-sm">
                    {item.id}
                  </span>

                  <span>{item.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="col-span-4">
          <div className="rounded-3xl bg-white shadow overflow-hidden">
            <div className="bg-green-800 p-5 text-white">
              <h3 className="font-semibold text-lg">
                {selectedSection.title}
              </h3>
            </div>

            <div className="p-4 space-y-4">
              {selectedSection?.parts.map((part) => (
                <div
                  key={part.id}
                  className="flex items-center justify-between border-b pb-4"
                >
                  <div>
                    <h4 className="font-medium">
                      {part.name}
                    </h4>

                    <p className="text-green-700">
                      ${part.price}
                    </p>
                  </div>

                  <button
                    onClick={() => addToCart(part)}
                    className="rounded-lg bg-green-700 px-4 py-2 text-white"
                  >
                    Add
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Cart */}
          <div className="mt-5 rounded-2xl border bg-white p-5">
            <div className="flex justify-between">
              <div>
                <p>{cart.length} Items</p>

                <h3 className="font-bold text-xl">
                  ${total}
                </h3>
              </div>

              <button
                onClick={() => setShowCheckout(true)}
                className="rounded-xl bg-green-700 px-6 py-3 text-white"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Modal */}
      {showCheckout && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
          <div className="w-full max-w-2xl rounded-3xl bg-white p-8">
            <h2 className="mb-6 text-2xl font-bold">
              Checkout
            </h2>

            <form className="space-y-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  checked
                  readOnly
                />
                Direct Bank Transfer
              </label>

              <input
                placeholder="Full Name"
                className="w-full rounded-xl border p-3"
              />

              <input
                placeholder="Email"
                className="w-full rounded-xl border p-3"
              />

              <input
                placeholder="Phone"
                className="w-full rounded-xl border p-3"
              />

              <textarea
                placeholder="Address"
                className="w-full rounded-xl border p-3"
              />

              <input
                type="file"
                className="w-full rounded-xl border p-3"
              />

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setShowCheckout(false)
                  }
                  className="rounded-xl border px-5 py-2"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="rounded-xl bg-green-700 px-5 py-2 text-white"
                >
                  Submit Order
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Parts;

import { useMemo, useState } from "react";
import { useDashboardData } from "./useDashboardData";
import API from "../../api/axios";

const Parts = () => {
  const { drone, partSections } = useDashboardData();
  const [selectedSectionId, setSelectedSectionId] = useState(partSections[0].id);
  const selectedSection =
    partSections.find((section) => section.id === selectedSectionId) ||
    partSections[0];

  const [cart, setCart] = useState([]);

  const [showCheckout, setShowCheckout] = useState(false);
  const [checkoutForm, setCheckoutForm] = useState({ fullName: "", email: "", phone: "", address: "" });
  const [proofFile, setProofFile] = useState(null);
  const [submittingOrder, setSubmittingOrder] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleCheckoutSubmit = async (e) => {
    e.preventDefault();
    if (!checkoutForm.fullName || !checkoutForm.email || !checkoutForm.phone || !checkoutForm.address) {
      setErrorMessage("All fields are required.");
      return;
    }
    if (!proofFile) {
      setErrorMessage("Please upload your bank transfer proof.");
      return;
    }

    try {
      setSubmittingOrder(true);
      setErrorMessage("");

      const formData = new FormData();
      formData.append("full_name", checkoutForm.fullName);
      formData.append("email", checkoutForm.email);
      formData.append("phone", checkoutForm.phone);
      formData.append("address", checkoutForm.address);
      formData.append("total_price", total);
      formData.append("cart", JSON.stringify(cart));
      formData.append("bank_transfer_proof", proofFile);

      await API.post("/orders", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setOrderSuccess(true);
      setCart([]);
      setCheckoutForm({ fullName: "", email: "", phone: "", address: "" });
      setProofFile(null);
    } catch (err) {
      console.error("Order submission failed:", err);
      setErrorMessage(err.response?.data?.message || "Failed to submit order. Please try again.");
    } finally {
      setSubmittingOrder(false);
    }
  };

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
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="w-full max-w-xl rounded-3xl bg-white p-8 shadow-2xl transition-all">
            {orderSuccess ? (
              <div className="text-center py-6">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 mb-6">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Order Placed!</h2>
                <p className="mt-3 text-slate-600">
                  Your order has been recorded successfully. Our team will review the bank transfer proof and process your parts shipment shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setShowCheckout(false);
                    setOrderSuccess(false);
                  }}
                  className="mt-8 rounded-xl bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800"
                >
                  Back to Parts
                </button>
              </div>
            ) : (
              <div>
                <h2 className="mb-6 text-2xl font-bold text-slate-950">
                  Checkout
                </h2>

                <form className="space-y-4" onSubmit={handleCheckoutSubmit}>
                  <label className="flex items-center gap-2 font-medium text-slate-800">
                    <input
                      type="radio"
                      checked
                      readOnly
                      className="accent-green-700 h-4 w-4"
                    />
                    Direct Bank Transfer
                  </label>

                  <input
                    placeholder="Full Name"
                    value={checkoutForm.fullName}
                    onChange={(e) => setCheckoutForm(prev => ({ ...prev, fullName: e.target.value }))}
                    className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-green-700"
                    required
                  />

                  <input
                    type="email"
                    placeholder="Email"
                    value={checkoutForm.email}
                    onChange={(e) => setCheckoutForm(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-green-700"
                    required
                  />

                  <input
                    placeholder="Phone"
                    value={checkoutForm.phone}
                    onChange={(e) => setCheckoutForm(prev => ({ ...prev, phone: e.target.value }))}
                    className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-green-700"
                    required
                  />

                  <textarea
                    placeholder="Address"
                    value={checkoutForm.address}
                    onChange={(e) => setCheckoutForm(prev => ({ ...prev, address: e.target.value }))}
                    className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-green-700 h-24"
                    required
                  />

                  <div className="space-y-1">
                    <label className="block text-sm font-medium text-slate-500">
                      Bank Transfer Receipt (Image/Document)
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => setProofFile(e.target.files[0])}
                      className="w-full rounded-xl border border-slate-300 p-3 text-sm"
                      required
                    />
                  </div>

                  {errorMessage && (
                    <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-600">
                      {errorMessage}
                    </div>
                  )}

                  <div className="flex justify-end gap-3 pt-4 border-t mt-6">
                    <button
                      type="button"
                      disabled={submittingOrder}
                      onClick={() => setShowCheckout(false)}
                      className="rounded-xl border px-5 py-2.5 hover:bg-slate-50"
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      disabled={submittingOrder}
                      className="rounded-xl bg-green-700 px-6 py-2.5 text-white font-semibold hover:bg-green-800 disabled:opacity-50"
                    >
                      {submittingOrder ? "Submitting..." : "Submit Order"}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Parts;

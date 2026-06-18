import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { LockKeyhole } from "lucide-react";
import { adminUsers, getAuthenticatedAdmin, loginAdmin } from "./adminAuth";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  if (getAuthenticatedAdmin()) {
    return <Navigate to="/admin" replace />;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const admin = loginAdmin(form.username.trim(), form.password);

    if (!admin) {
      setError("Admin username or password is incorrect.");
      return;
    }

    navigate("/admin", { replace: true });
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <section className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="mb-8">
          <div className="mb-5 flex h-11 w-11 items-center justify-center rounded bg-green-700 text-white">
            <LockKeyhole size={22} />
          </div>
          <p className="text-sm font-semibold uppercase tracking-wide text-green-700">
            Australia Agritech
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-950">
            Admin Panel Login
          </h1>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              name="username"
              value={form.username}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-green-700 focus:ring-4 focus:ring-green-100"
              autoComplete="username"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-green-700 focus:ring-4 focus:ring-green-100"
              autoComplete="current-password"
            />
          </div>

          {error && (
            <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
              {error}
            </p>
          )}

          <button className="w-full rounded-xl bg-green-700 px-5 py-3 font-semibold text-white transition hover:bg-green-800">
            Login as Admin
          </button>
        </form>

        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
          <p className="font-semibold text-slate-800">Admin users</p>
          {adminUsers.map((user) => (
            <p key={user.username} className="mt-2">
              {user.name}: {user.username} / {user.password}
            </p>
          ))}
        </div>
      </section>
    </main>
  );
};

export default AdminLogin;

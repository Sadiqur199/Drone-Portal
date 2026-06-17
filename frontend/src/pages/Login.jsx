import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { portalUsers } from "./dashboard/data";
import { authStorageKey } from "./dashboard/useDashboardData";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const matchedUser = portalUsers.find(
      (user) =>
        user.username === form.username.trim() && user.password === form.password
    );

    if (!matchedUser) {
      setError("Username or password is incorrect.");
      return;
    }

    localStorage.setItem(
      authStorageKey,
      JSON.stringify({
        username: matchedUser.username,
        droneId: matchedUser.droneId,
      })
    );

    navigate("/", { replace: true });
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <section className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="mb-8">
          <div className="mb-5 h-10 w-10 rounded bg-green-700" />
          <p className="text-sm font-semibold uppercase tracking-wide text-green-700">
            Australia Agritech
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-950">
            Client Portal Login
          </h1>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="username"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
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
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
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

          <button
            type="submit"
            className="w-full rounded-xl bg-green-700 px-5 py-3 font-semibold text-white transition hover:bg-green-800"
          >
            Login
          </button>
        </form>

        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
          <p className="font-semibold text-slate-800">Demo users</p>
          <p className="mt-2">T50: t50user / t50pass</p>
          <p>T40: t40user / t40pass</p>
        </div>
      </section>
    </main>
  );
};

export default Login;

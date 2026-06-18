import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authStorageKey, authTokenKey } from "./dashboard/useDashboardData";
import API from "../api/axios";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.username.trim() || !form.password) {
      setError("Please enter both username and password.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await API.post("/login", {
        username: form.username.trim(),
        password: form.password,
      });

      const { access_token, user } = response.data;

      localStorage.setItem(authTokenKey, access_token);
      localStorage.setItem(authStorageKey, JSON.stringify(user));

      navigate("/", { replace: true });
    } catch (err) {
      console.error("Login request failed:", err);
      const errMsg = err.response?.data?.message || err.response?.data?.errors?.username?.[0] || "Incorrect username or password.";
      setError(errMsg);
    } finally {
      setLoading(false);
    }
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
            disabled={loading}
            className="w-full rounded-xl bg-green-700 px-5 py-3 font-semibold text-white transition hover:bg-green-800 disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
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

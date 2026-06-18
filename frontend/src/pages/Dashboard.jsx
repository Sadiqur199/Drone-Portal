import { NavLink, Navigate, Outlet, useNavigate } from "react-router-dom";
import {
  authStorageKey,
  authTokenKey,
  getAuthenticatedPortalUser,
  useDashboardData,
  DashboardProvider,
} from "./dashboard/useDashboardData";
import API from "../api/axios";

const tabs = [
  { label: "Dashboard", path: "/" },
  { label: "My Drone", path: "/my-drone" },
  { label: "Checklists", path: "/checklists" },
  { label: "Tutorials", path: "/tutorials" },
  { label: "Troubleshoot", path: "/troubleshoot" },
  { label: "Guides", path: "/guides" },
  { label: "Parts", path: "/parts" },
  { label: "Support", path: "/support" },
];

const DashboardContent = () => {
  const navigate = useNavigate();
  const portalUser = getAuthenticatedPortalUser();
  const { drone, user, loading, error } = useDashboardData();

  if (!portalUser) {
    return <Navigate to="/login" replace />;
  }

  const handleLogout = async () => {
    try {
      await API.post("/logout");
    } catch (err) {
      console.error("Logout failed:", err);
    }
    localStorage.removeItem(authStorageKey);
    localStorage.removeItem(authTokenKey);
    navigate("/login", { replace: true });
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="text-center">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-green-700 border-t-transparent mx-auto"></div>
          <p className="mt-4 text-slate-600 font-medium">Loading portal dashboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
        <div className="w-full max-w-md rounded-2xl border border-red-200 bg-white p-6 shadow-sm text-center">
          <div className="h-12 w-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto text-xl font-bold">!</div>
          <h2 className="mt-4 text-lg font-bold text-slate-900">Failed to Load Dashboard</h2>
          <p className="mt-2 text-sm text-slate-500">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-6 rounded-xl bg-green-700 px-5 py-2 text-sm font-semibold text-white transition hover:bg-green-800"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b bg-white">
        <div className="flex h-16 items-center justify-between gap-6 px-8">
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 rounded bg-green-700" />

            <div className="flex items-center gap-3">
              <h2 className="font-bold text-slate-900">Australia Agritech</h2>
              <span className="text-gray-300">|</span>
              <span className="text-xs uppercase tracking-wider text-gray-400">
                Client Portal
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 rounded-lg border border-green-200 bg-green-50 px-4 py-2">
              <span className="font-semibold text-green-800">{drone.model}</span>
              <span className="text-gray-400">SN - {drone.serialNumber}</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-700">{user.name}</span>
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-700 font-semibold text-white">
                {user.initials}
              </div>
            </div>
          </div>
        </div>

        <nav className="overflow-x-auto px-8">
          <ul className="flex min-w-max gap-10 text-sm">
            {tabs.map((tab) => (
              <li key={tab.path}>
                <NavLink
                  to={tab.path}
                  end={tab.path === "/"}
                  className={({ isActive }) =>
                    `block border-b-2 py-4 font-medium transition ${
                      isActive
                        ? "border-green-700 text-green-700"
                        : "border-transparent text-gray-500 hover:text-slate-900"
                    }`
                  }
                >
                  {tab.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex justify-end px-8 pb-4">
          <button
            type="button"
            onClick={handleLogout}
            className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
          >
            Logout
          </button>
        </div>
      </header>

      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
};

const Dashboard = () => {
  return (
    <DashboardProvider>
      <DashboardContent />
    </DashboardProvider>
  );
};

export default Dashboard;

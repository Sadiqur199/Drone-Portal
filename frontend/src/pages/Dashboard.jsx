import { NavLink, Outlet } from "react-router-dom";

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

const Dashboard = () => {
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
              <span className="font-semibold text-green-800">DJI Agras T50</span>
              <span className="text-gray-400">SN - 7741-WA-T50</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-700">Judy Zhu</span>
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-700 font-semibold text-white">
                JZ
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
      </header>

      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminPanel from "./pages/admin/AdminPanel";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Checklists from "./pages/dashboard/Checklists";
import DashboardHome from "./pages/dashboard/DashboardHome";
import Guides from "./pages/dashboard/Guides";
import MyDrone from "./pages/dashboard/MyDrone";
import Parts from "./pages/dashboard/Parts";
import Support from "./pages/dashboard/Support";
import Troubleshoot from "./pages/dashboard/Troubleshoot";
import Tutorials from "./pages/dashboard/Tutorials";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/" element={<Dashboard />}>
          <Route index element={<DashboardHome />} />
          <Route path="my-drone" element={<MyDrone />} />
          <Route path="checklists" element={<Checklists />} />
          <Route path="tutorials" element={<Tutorials />} />
          <Route path="troubleshoot" element={<Troubleshoot />} />
          <Route path="guides" element={<Guides />} />
          <Route path="parts" element={<Parts />} />
          <Route path="support" element={<Support />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;

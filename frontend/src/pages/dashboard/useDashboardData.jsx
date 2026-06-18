import { createContext, useContext, useEffect, useState } from "react";
import API from "../../api/axios";
import { normalizeApiDrone } from "./data";

export const authStorageKey = "dronePortalUser";
export const authTokenKey = "dronePortalToken";

export const getStoredPortalUser = () => {
  try {
    return JSON.parse(localStorage.getItem(authStorageKey));
  } catch {
    return null;
  }
};

export const getAuthenticatedPortalUser = () => {
  const token = localStorage.getItem(authTokenKey);
  const user = getStoredPortalUser();
  if (token && user) {
    return user;
  }
  return null;
};

export const DashboardContext = createContext(null);

export const DashboardProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const response = await API.get("/drone-profile");
      setData(normalizeApiDrone(response.data));
      setError(null);
    } catch (err) {
      console.error("Failed to fetch dashboard data:", err);
      setError(err.response?.data?.error || "Failed to load dashboard data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem(authTokenKey);
    if (token) {
      fetchDashboardData();
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <DashboardContext.Provider value={{ data, loading, error, reloadData: fetchDashboardData }}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboardData = () => {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error("useDashboardData must be used within a DashboardProvider");
  }
  
  const defaultData = {
    checklistItems: [],
    componentHealth: [],
    dashboardStats: [],
    drone: { model: "", serialNumber: "", registration: "", shortModel: "", warrantyStatus: "", warrantyRemaining: "" },
    specs: [],
    user: { name: "", initials: "", company: "", location: "" },
    maintenanceAlert: "",
    serviceHistory: [],
    accessories: [],
    technicalSpecifications: [],
    documents: [],
    tutorialVideos: [],
    troubleshootIssues: [],
    partSections: [],
    supportCategories: [],
  };

  return {
    ...(context.data || defaultData),
    loading: context.loading,
    error: context.error,
    reloadData: context.reloadData,
  };
};

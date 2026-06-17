import { defaultDroneId, getDashboardData, portalUsers } from "./data";

export const authStorageKey = "dronePortalUser";

export const getStoredPortalUser = () => {
  try {
    return JSON.parse(localStorage.getItem(authStorageKey));
  } catch {
    return null;
  }
};

export const getAuthenticatedPortalUser = () => {
  const storedUser = getStoredPortalUser();

  return portalUsers.find(
    (user) =>
      user.username === storedUser?.username && user.droneId === storedUser?.droneId
  );
};

export const useSelectedDroneId = () => {
  return getAuthenticatedPortalUser()?.droneId || defaultDroneId;
};

export const useDashboardData = () => {
  return getDashboardData(useSelectedDroneId());
};

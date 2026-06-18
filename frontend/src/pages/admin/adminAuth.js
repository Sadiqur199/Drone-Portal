export const adminTokenKey = "dronePortalAdminToken";
export const adminUserKey = "dronePortalAdminUser";

export const adminUsers = [
  {
    username: "admin",
    password: "admin123",
    name: "Main Admin",
    role: "Super Admin",
  },
  {
    username: "contentadmin",
    password: "content123",
    name: "Content Admin",
    role: "Content Manager",
  },
];

export const getStoredAdmin = () => {
  try {
    return JSON.parse(localStorage.getItem(adminUserKey));
  } catch {
    return null;
  }
};

export const getAuthenticatedAdmin = () => {
  const token = localStorage.getItem(adminTokenKey);
  const user = getStoredAdmin();
  return token && user ? user : null;
};

export const loginAdmin = (username, password) => {
  const admin = adminUsers.find(
    (item) => item.username === username && item.password === password
  );

  if (!admin) {
    return null;
  }

  const safeAdmin = {
    username: admin.username,
    name: admin.name,
    role: admin.role,
  };
  localStorage.setItem(adminTokenKey, `admin-demo-token-${admin.username}`);
  localStorage.setItem(adminUserKey, JSON.stringify(safeAdmin));
  return safeAdmin;
};

export const logoutAdmin = () => {
  localStorage.removeItem(adminTokenKey);
  localStorage.removeItem(adminUserKey);
};

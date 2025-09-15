export const users = {
  admin: { password: "admin123", role: "admin" },
  CSEA: { password: "csea123", role: "club" },
  AlgoGeeks: { password: "algo123", role: "club" },
  Glugot: { password: "glugot123", role: "club" },
  ARVR: { password: "arvr123", role: "club" },
  CSI: { password: "csi123", role: "club" },
  IEEE: { password: "ieee123", role: "club" },
};

export function login(username, password) {
  const user = users[username]; // exact match

  if (user && user.password === password) {
    localStorage.setItem(
      "user",
      JSON.stringify({ username, role: user.role })
    );
    return true;
  }
  return false;
}

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem("user"));
}

export function logout() {
  localStorage.removeItem("user");
}

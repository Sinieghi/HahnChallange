export const opt = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${window.localStorage.getItem("Bearer")}`,
  },
};

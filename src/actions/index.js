export const login = username => ({
  type: "LOGIN",
  username
});

export const selectMenu = menu => ({type: `SELECT${menu.toUpperCase()}`, menu})
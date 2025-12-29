import React from "react";
import { useAppStore } from "../store/appStore";

const Navbar = () => {
  const user = useAppStore((state) => state.user);
  const theme = useAppStore((state) => state.theme);
  const login = useAppStore((state) => state.login);
  const logout = useAppStore((state) => state.logout);
  const toggleTheme = useAppStore((state) => state.toggleTheme);
  return (
    <nav>
      <span>Theme: {theme}</span>
      <button onClick={toggleTheme}>ToggleTheme</button>
      {user ? (
        <>
          <span> User : {user.name}</span>
        </>
      ) : (
        <>
          <span>Guest</span>
        </>
      )}
    </nav>
  );
};

export default Navbar;

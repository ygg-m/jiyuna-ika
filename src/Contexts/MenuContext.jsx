import { createContext, useContext, useEffect, useState } from "react";
import { Menu } from "../Components/Menu/MainMenu/container";
import "../Styles/Menu.css";

const MenuContext = createContext();

export const useMenu = () => {
  return useContext(MenuContext);
};

export const MenuProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [menuStyle, setStyle] = useState("menu inactive");

  function clickMenu() {
    setShowMenu((prevShowMenu) =>
      prevShowMenu == null ? true : !prevShowMenu
    );
  }

  useEffect(() => {
    if (showMenu) setStyle("menu active");
    else setStyle("menu inactive");
  }, [showMenu]);

  return (
    <MenuContext.Provider
      value={{ showMenu, setShowMenu, menuStyle, clickMenu }}
    >
      <Menu />
      {children}
    </MenuContext.Provider>
  );
};

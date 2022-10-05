import { AiOutlineMenu, Logo } from "../index";
import { useMenu } from "../../../Contexts/MenuContext";

export const MenuButton = () => {
  const { showMenu, clickMenu } = useMenu();
  return (
    <div onClick={() => clickMenu()} className="icon">
      {showMenu ? (
        <div className="logo">
          <Logo />
        </div>
      ) : (
        <AiOutlineMenu />
      )}
    </div>
  );
};

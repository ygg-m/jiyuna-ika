import { useMenu } from "../../Contexts/MenuContext";

export const Title = ({ children, reverse }) => {
  const { showMenu } = useMenu();
  const style = reverse
    ? showMenu
      ? "title hide"
      : "title show"
    : showMenu
    ? "title show"
    : "title hide";

  return <h2 className={style}>{children}</h2>;
};

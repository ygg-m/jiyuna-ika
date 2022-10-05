import { useMenu } from "../../Contexts/MenuContext";

export const PageDescription = ({ children, reverse }) => {
  const { showMenu } = useMenu();
  const style = reverse
    ? showMenu
      ? "page-description show"
      : "page-description hide"
    : showMenu
    ? "page-description hide"
    : "page-description show";

  return (
    <div className={style}>
      <div className="content">{children}</div>
    </div>
  );
};

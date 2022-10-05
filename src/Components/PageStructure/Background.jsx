import { useMenu } from "../../Contexts/MenuContext";

export const Background = ({ src, alt, reverse }) => {
  const { showMenu } = useMenu();
  const style = reverse
    ? showMenu
      ? "page-background clear"
      : "page-background dim"
    : showMenu
    ? "page-background dim"
    : "page-background clear";

  return (
    <div className={style}>
      <img className="img-fit" src={src} alt={alt} />
    </div>
  );
};

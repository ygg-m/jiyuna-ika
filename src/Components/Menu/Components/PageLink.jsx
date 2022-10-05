import { Link } from "../index";
import { useMenu } from "../../../Contexts/MenuContext";

export const PageLink = ({ link, text }) => {
  const { setShowMenu } = useMenu();

  return (
    <Link onClick={() => setShowMenu(false)} to={link}>
      {text}
    </Link>
  );
};

import { useMenu } from "../../../Contexts/MenuContext";
import { PageLink, MenuButton } from "../index";

export const Menu = () => {
  const { showMenu, menuStyle, clickMenu } = useMenu();

  return (
    <>
      <div className={menuStyle}>
        <MenuButton />
        <div className="container">
          <div className="list">
            <PageLink link="/" text="home" />
            <PageLink link="/about" text="about" />
            <PageLink link="/house" text="house" />
            <PageLink link="/members" text="members" />
            <PageLink link="/photos" text="photos" />
            <PageLink link="/cookies" text="cookies" />
            <PageLink link="/census" text="census" />
            <PageLink link="/links" text="links" />
          </div>
          <span className="credits">
            website made by{" "}
            <a href="https://github.com/YggLart">ygor goulart</a>
          </span>
        </div>
      </div>
      {showMenu && (
        <div onClick={() => clickMenu()} className="close-menu"></div>
      )}
    </>
  );
};

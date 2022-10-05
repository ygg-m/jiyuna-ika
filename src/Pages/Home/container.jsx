import {
  useMenu,
  useHome,
  Logo,
  Background,
  PageDescription,
  Name,
} from "./index";

const HomeContainer = () => {
  const { showMenu } = useMenu();
  const {
    homePhoto: { description, date, album, img },
    authorID,
  } = useHome();

  return (
    <section id="home" className="page-container">
      <div className={showMenu ? "logo hide" : "logo show"}>
        <Logo />
        <p className="mute">FFXIV Free Company @ Behemoth Primal</p>
      </div>

      <PageDescription reverse>
        <p>
          <span className="mute">send by</span>
          <Name id={authorID} />
          {/* <span className="link">{Character?.Name}</span> */}
          <span className="mute">in</span>
          <span className="text">{date.toLocaleDateString()}</span>
        </p>
        {description && <p className="description">{description}</p>}
        <p>
          <span className="mute">album</span>
          <span className="link capitalize">{album}</span>
        </p>
      </PageDescription>

      <Background reverse src={img} alt={description} />
    </section>
  );
};

export default HomeContainer;

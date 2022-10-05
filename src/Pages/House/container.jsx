import {
  useHouse,
  RoomListContainer,
  Background,
  PageDescription,
  Title,
  Name,
} from "./index";

export const HouseContainer = () => {
  const { showRoom } = useHouse();
  const { name, desc, roomNumber, ownerID, img } = showRoom;

  return (
    <section id="house" className="page-container">
      <Title>house</Title>

      <PageDescription>
        {roomNumber && (
          <p className="ownerInfo">
            <span className="room">Quarto Nº {roomNumber}</span>
            <span className="owner">
              <Name id={ownerID} />
            </span>
          </p>
        )}
        {name && <h3 className="name">{name}</h3>}
        {desc && <p className="desc">{desc}</p>}
      </PageDescription>

      <RoomListContainer />

      <Background src={img} />
    </section>
  );
};

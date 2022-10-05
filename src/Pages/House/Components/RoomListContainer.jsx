import { useFreeCompany } from "../../../Contexts/FreeCompanyContext";
import { useMenu } from "../../../Contexts/MenuContext";
import { v4 as uuidV4 } from "uuid";
import { useHouse } from "../../../Contexts/HouseContext";
import { AiOutlineMenu } from "react-icons/ai";

export const RoomListContainer = () => {
  const { freeCompany } = useFreeCompany();

  const { showMenu } = useMenu();
  const {
    showRoomList,
    changeRoomList,
    changeIndex,
    houseRooms,
    mouseOver,
    setMouseOver,
  } = useHouse();

  return (
    <div
      onMouseOver={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
      className={showMenu ? "house-rooms hide" : "house-rooms show"}
    >
      {mouseOver ? (
        <div onClick={changeRoomList} className="button">
          {showRoomList === houseRooms ? "ver quartos" : "ver casa"}
        </div>
      ) : (
        <div onClick={changeRoomList} className="button">
          <AiOutlineMenu />
        </div>
      )}
      {mouseOver && (
        <h4>{showRoomList === houseRooms ? "ikasona" : "quartos ika"}</h4>
      )}
      <div className="rooms-container">
        {showRoomList.map((room, index) => {
          const { roomNumber, name, img } = room;
          return (
            <div
              key={uuidV4()}
              onClick={() => changeIndex(index)}
              className="room"
            >
              {roomNumber && <p className="room-number">Nº {roomNumber}</p>}
              {name && <p className="name">{name}</p>}
              <img
                className="img-fit"
                src={img}
                alt={"Quarto número " + roomNumber}
              />
            </div>
          );
        })}
      </div>
      {mouseOver ? <h4>{freeCompany?.FreeCompany.Estate.Plot}</h4> : <h4></h4>}
    </div>
  );
};

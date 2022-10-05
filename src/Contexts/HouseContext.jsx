import { createContext, useContext, useEffect, useState } from "react";
import housing from "../Data/housing";

const HouseContext = createContext();

export const useHouse = () => {
  return useContext(HouseContext);
};

export const HouseProvider = ({ children }) => {
  // switch
  const [mouseOver, setMouseOver] = useState(false);

  // lists
  const [houseRooms, setHouseRooms] = useState(housing[0].rooms);
  const [privateRooms, setPrivateRooms] = useState(housing[1].rooms);

  // show
  const [showRoomList, setShowRoomList] = useState(houseRooms);
  const [imgIndex, setImgIndex] = useState(0);
  const [showRoom, setShowRoom] = useState(showRoomList[imgIndex]);

  function changeRoomList() {
    setImgIndex(0);
    if (showRoomList == houseRooms) setShowRoomList(privateRooms);
    else setShowRoomList(houseRooms);
  }

  useEffect(() => {
    let lastIndex = showRoomList.length - 1;
    if (imgIndex < 0) setImgIndex(lastIndex);
    if (imgIndex > showRoomList.length) setImgIndex(0);
    setShowRoom(showRoomList[imgIndex]);
  }, [imgIndex, showRoomList]);

  // change imgIndex every 5s
  useEffect(() => {
    let newIndex = imgIndex + 1;
    let changeImg = setInterval(() => changeIndex(newIndex), 5000);
    return () => clearInterval(changeImg);
  }, [imgIndex]);

  function changeIndex(index) {
    let lastIndex = showRoomList.length - 1;

    if (index < 0) setImgIndex(lastIndex);
    if (index > lastIndex) setImgIndex(0);
    else setImgIndex(index);
  }

  return (
    <HouseContext.Provider
      value={{
        showRoomList,
        setShowRoomList,
        changeRoomList,
        changeIndex,
        showRoom,
        setShowRoom,
        setImgIndex,
        houseRooms,
        privateRooms,
        mouseOver,
        setMouseOver,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

import { createContext, useContext, useEffect, useState } from "react";
import { useFetch } from "../Helpers/useFetch";
import photos from "../Data/photos";

const HomeContext = createContext();

export const useHome = () => {
  return useContext(HomeContext);
};

export const HomeProvider = ({ children }) => {
  const [randomIndex, setRandomIndex] = useState(
    Math.floor(Math.random() * photos.length)
  );
  const [homePhoto, setHomePhoto] = useState(photos[randomIndex]);
  const [authorData, setAuthorData] = useState("");

  const { authorID } = homePhoto;

  // const { data } = useFetch("http://xivapi.com/character/", authorID);

  // useEffect(() => {
  //   if (data) setAuthorData(data);
  // }, [data]);

  return (
    <HomeContext.Provider value={{ homePhoto, authorID }}>
      {children}
    </HomeContext.Provider>
  );
};

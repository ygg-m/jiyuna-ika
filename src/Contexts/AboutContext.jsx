import { createContext, useContext, useEffect, useState } from "react";
import { cookieList } from "../Data/cookieList";
const AboutContext = createContext();

export const useAbout = () => {
  return useContext(AboutContext);
};

export const AboutProvider = ({ children }) => {
  const filterArrCookies = cookieList.filter((cookie) =>
    cookie.expansion.includes("A Realm Reborn")
  );
  const filterBahamutCookies = filterArrCookies.filter((cookie) =>
    cookie.dutyName.includes("Bahamut")
  );

  const randomIndex = Math.floor(Math.random() * filterBahamutCookies.length);

  const [cookieIndex, setCookieIndex] = useState(randomIndex);
  const [bahamutList, setBahamutCookies] = useState(filterBahamutCookies);
  const [showCookie, setShowCookie] = useState(bahamutList[cookieIndex]);

  function changeIndex(index) {
    let lastIndex = bahamutList.length - 1;
    if (index < 0) setCookieIndex(lastIndex);
    if (index > lastIndex) setCookieIndex(0);
    else setCookieIndex(index);
  }

  useEffect(() => {
    setShowCookie(bahamutList[cookieIndex]);
  }, [cookieIndex]);

  return (
    <AboutContext.Provider
      value={{ changeIndex, cookieIndex, showCookie, bahamutList }}
    >
      {children}
    </AboutContext.Provider>
  );
};

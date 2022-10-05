import { createContext, useContext, useEffect } from "react";
import { useFetch } from "../Helpers/useFetch";
import { useLocalStorage } from "../Helpers/useLocalStorage";

const FreeCompanyContext = createContext();

export const useFreeCompany = () => {
  return useContext(FreeCompanyContext);
};

export const FreeCompanyProvider = ({ children }) => {
  const { data, loading, error } = useFetch(
    "https://xivapi.com/freecompany/",
    9234349560946608924n,
    "FCM"
  );

  const [freeCompany, setFreeCompany] = useLocalStorage("FreeCompany", []);

  useEffect(() => {
    setFreeCompany(data);
  }, [data]);

  if (loading) return <>loading</>;

  if (error) return <>error pwp</>;

  if (data) {
    return (
      <FreeCompanyContext.Provider
        value={{ loading, error, data, freeCompany }}
      >
        {children}
      </FreeCompanyContext.Provider>
    );
  }
};

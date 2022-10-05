import HomeContainer from "./container";
import { HomeProvider } from "./index";

export const Home = ({ children }) => {
  return (
    <HomeProvider>
      <HomeContainer />
    </HomeProvider>
  );
};
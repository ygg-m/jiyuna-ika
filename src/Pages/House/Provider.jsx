import { HouseContainer } from "./container";
import { HouseProvider } from "./index";

export const House = () => {
  return (
    <HouseProvider>
      <HouseContainer />
    </HouseProvider>
  );
};

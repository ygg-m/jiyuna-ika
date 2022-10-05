import { uuidV4, Player, useMenu } from "../index";

export const Party = ({ party }) => {
  const { showMenu } = useMenu();
  return (
    <div className={showMenu ? "party hide" : "party show"}>
      {party.map((player) => (
        <Player key={uuidV4()} player={player} />
      ))}
    </div>
  );
};

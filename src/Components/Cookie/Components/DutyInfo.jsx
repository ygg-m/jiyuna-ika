import { useMenu } from "../index";

export const DutyInfo = ({ date, level, name }) => {
  const dutyTag = level.toLowerCase().replace(/\s/g, "");
  const { showMenu } = useMenu();

  return (
    <div className={showMenu ? "duty hide" : "duty show"}>
      <span className="date">{date.toLocaleDateString()}</span>
      <span className="name">{name}</span>
      <span className={"tag " + dutyTag}>{level}</span>
    </div>
  );
};

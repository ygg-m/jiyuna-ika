import { DutyInfo, Party } from "./index";

export const CookieContainer = ({ cookieData, image }) => {
  const { players, dutyName, dutyLevel, date, img: src } = cookieData;

  return (
    <div className="cookie-container">
      {players && <Party party={players} />}
      {dutyName && <DutyInfo date={date} name={dutyName} level={dutyLevel} />}
      {image && <img className="img-fit" src={src} alt={dutyName} />}
    </div>
  );
};

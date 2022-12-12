import s from "./Empty.module.scss";
import noTeams from "../../../../assets/images/no_teams.png";

export const Empty = () => {
  return (
    <div className={s.wrapper}>
      <img src={noTeams} alt="no teams" />
      <h1>Empty here</h1>
      <span>Add new teams to continue</span>
    </div>
  );
};

import React from "react";
import s from "./TeamsCard.module.scss";
import { useNavigate } from "react-router-dom";
import { TeamDto } from "../../../../api/teams/ITeams";
import PersonSvg from "../../../../assets/svg/PersonSvg";
import { COLORS } from "../../../../constants/Colors";

export const TeamsCard: React.FC<TeamDto> = ({
  id,
  name,
  imageUrl,
  foundationYear,
}) => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(`/teams/${id}`);
  };

  return (
    <div className={s.item}>
      <div className={s.content} onClick={onClickHandler}>
        <div className={s.logo}>
          {imageUrl ? (
            <img src={imageUrl} alt="logo" />
          ) : (
            <PersonSvg
              fill={COLORS.NEUTRALS.LIGHT_GREY}
              width={"40%"}
              height={"40%"}
            />
          )}
        </div>
        <div className={s.info}>
          <span className={s.name}>{name}</span>
          <span className={s.foundation}>
            Year of foundation: {foundationYear}
          </span>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import s from "./Header.module.scss";
import logo from "../../assets/images/logo.png";
import PersonSvg from "../../assets/svg/PersonSvg";
import { COLORS } from "../../constants/Colors";

export interface IHeader {
  name: string;
  avatar: string;
}

export const Header: React.FC<IHeader> = ({ name, avatar }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.logo}>
        <img src={logo} alt="big3" />
      </div>
      <div className={s.user}>
        <div className={s.name}>{name}</div>
        <div className={s.photo}>
          {avatar ? (
            <img src={avatar} alt="avatar" />
          ) : (
            <PersonSvg className={s.icon} />
          )}
        </div>
      </div>
    </div>
  );
};

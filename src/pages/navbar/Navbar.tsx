import React from "react";
import s from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";
import GroupPersonSvg from "../../assets/svg/GroupPersonSvg";
import PersonSvg from "../../assets/svg/PersonSvg";
import InputSvg from "../../assets/svg/InputSvg";

type PropsType = {
  signOut: () => void;
};
export const Navbar = (props: PropsType) => {
  return (
    <nav className={s.wrapper}>
      <div className={s.main}>
        <NavLink
          to={"/teams"}
          className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        >
          <GroupPersonSvg className={s.icon} />
          <span>Teams</span>
        </NavLink>

        <NavLink
          to={"/players"}
          className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        >
          <PersonSvg className={s.icon} />
          <span>Players</span>
        </NavLink>
      </div>

      <div className={s.footer}>
        <NavLink
          to={"/sign_in"}
          className={({ isActive }) => (isActive ? s.activeLink : s.link)}
          onClick={props.signOut}
        >
          <InputSvg className={s.icon} />
          <span>Sign out</span>
        </NavLink>
      </div>
    </nav>
  );
};

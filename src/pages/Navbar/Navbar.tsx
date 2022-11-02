import React from 'react';
import s from './Navbar.module.scss';
import {NavLink} from "react-router-dom";
import teams from './svg/Teams';
import players from './svg/Players';
import signout from './svg/Signout';

type PropsType = {
    signOut: () => void
}
export const Navbar = (props: PropsType) => {
    return (
        <nav className={s.wrapper}>
            <div className={s.nav_main}>
                <NavLink
                    to={'/teams'}
                    className={({isActive}) => isActive ? s.activeLink : s.link}
                >{teams}Teams</NavLink>
                <NavLink
                    to={'/players'}
                    className={({isActive}) => isActive ? s.activeLink : s.link}
                >{players}Players</NavLink>
            </div>
            <div className={s.nav_footer}>
                <NavLink
                    to={'/sign_in'}
                    className={({isActive}) => isActive ? s.activeLink : s.link}
                    onClick={props.signOut}
                >{signout}<span>Sign out</span></NavLink>
            </div>
        </nav>
    )
}

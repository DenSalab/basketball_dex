import React from 'react';
import s from './Authorization.module.scss';
import {Outlet} from "react-router-dom";

export const Authorization = () => {
    return (
        <div className={s.wrapper}>
            <Outlet/>
        </div>
    )
}

import React from 'react';
import s from './Main.module.scss';
import {Header} from "../Header/Header";
import {Navbar} from "../Navbar/Navbar";
import {Navigate, Outlet} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../common/hooks/reduxHooks";
import {setAuth, setUserData} from "../../modules/authorization/authSlice";

export const Main = () => {
    const data = useAppSelector(store => store.auth)
    const dispatch = useAppDispatch();

    const signOut = () => {
        dispatch(setAuth(false))
        dispatch(setUserData({
            isLoggedIn: false,
            name: "",
            avatarUrl: "",
        }))
        localStorage.clear()
        console.log('успех')
    }

    if (!data.isLoggedIn) {
        return <Navigate to={'sign_in'}/>
    }

    return (
        <div className={s.main_wrapper}>
            <Header name={data.name} avatar={data.avatarUrl}/>
            <div className={s.body}>
                <Navbar signOut={signOut}/>
                <Outlet/>
            </div>
        </div>
    )
}
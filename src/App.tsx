import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "./common/hooks/reduxHooks";
import {Route, Routes} from "react-router-dom";
import {Players} from "./modules/players/components/Players/Players";
import {TeamsContainer} from "./modules/teams/components/TeamsContainer";
import {Main} from "./pages/Main/Main";
import {authTC} from "./modules/authorization/asyncActions";
import {SignIn} from "./modules/authorization/components/SignIn/SignIn";
import {ErrorPage} from "./pages/ErrorPage/ErrorPage";
import {SignUp} from "./modules/authorization/components/SignUp/SignUp";
import {NewTeam} from "./modules/teams/components/NewTeam/NewTeam";
import {TeamPage} from "./modules/teams/components/TeamPage/TeamPage";
import {Spinner} from "./common/components/Spinner/Spinner";


function App() {
    const dispatch = useAppDispatch();
    const isLoading = useAppSelector(state => state.app.isLoading);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            // инициализация по логину/паролю, т.к. только по токену не удается.
            const token = localStorage.getItem('token') || undefined;
            dispatch(authTC('KotPulemet', '1234567890', token));
        }
    }, [])

    return (
        <>
            <Routes>
                <Route path={"/"} element={<Main/>}>
                    <Route path={'/teams'} element={<TeamsContainer/>}/>
                    <Route path={'/teams/add'} element={<NewTeam/>}/>
                    <Route path={'/teams/:id'} element={<TeamPage/>}/>

                    <Route path={'/players'} element={<Players/>}/>
                </Route>
                <Route path={'/sign_in'} element={<SignIn/>}/>
                <Route path={'/sign_up'} element={<SignUp/>}/>
                <Route path={'*'} element={<ErrorPage/>}/>
            </Routes>
            {isLoading && <Spinner/>}
        </>
    );
}

export default App;

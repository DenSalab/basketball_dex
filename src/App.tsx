import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./common/hooks/reduxHooks";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { Players } from "./modules/players/components/players/Players";
import { TeamsContainer } from "./modules/teams/components/TeamsContainer";
import { Main } from "./pages/main/Main";
import { authTC } from "./modules/authorization/asyncActions";
import { SignIn } from "./modules/authorization/components/sign_In/SignIn";
import { ErrorPage } from "./pages/error_page/ErrorPage";
import { SignUp } from "./modules/authorization/components/sign_up/SignUp";
import { NewTeam } from "./modules/teams/components/NewTeam/NewTeam";
import { TeamPage } from "./modules/teams/components/TeamPage/TeamPage";
import { Spinner } from "./common/components/Spinner/Spinner";

function App() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.app.isLoading);
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token") || undefined;
      dispatch(authTC("KotPulemet", "1234567890", token));
    } else {
      navigate("/sign_in");
    }
  }, []);

  return (
    <>
      <Routes>
        {isLoggedIn ? (
          <Route path={"/*"} element={<Main />}>
            <Route index element={<Navigate to={"teams"} replace />} />
            <Route path={"teams"} element={<TeamsContainer />} />
            <Route path={"teams/add"} element={<NewTeam />} />
            <Route path={"teams/:id"} element={<TeamPage />} />
            <Route path={"players"} element={<Players />} />
          </Route>
        ) : (
          <Route path={"/"}>
            <Route index element={<Navigate to={"teams"} replace />} />
            <Route path={"sign_in"} element={<SignIn />} />
            <Route path={"sign_up"} element={<SignUp />} />
          </Route>
        )}
        <Route path={"/"} element={<ErrorPage />} />
      </Routes>
      {isLoading && <Spinner />}
    </>
  );
}

export default App;

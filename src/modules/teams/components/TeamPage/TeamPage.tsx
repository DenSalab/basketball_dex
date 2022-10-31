import {useNavigate, useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../../common/hooks/reduxHooks";
import s from "./TeamPage.module.scss";
import deleteIcon from '../../../../assets/icons/deleteIcon.svg';
import createIcon from '../../../../assets/icons/createIcon.svg';
import {deleteTeamTC, getTeamTC} from "../../asyncActions";
import {useEffect} from "react";

export const TeamPage = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const id = useParams().id as string;
    const currentTeam = useAppSelector((state) => state.teams.currentTeam);

    useEffect(() => {
        const token = localStorage.getItem('token');
        dispatch(getTeamTC(Number(id), token!))
    }, [])

    const createTeam = () => {
        alert('create team')
    }

    const deleteTeam = () => {
        const token = localStorage.getItem('token');
        dispatch(deleteTeamTC(String(currentTeam.id), token!));
    }

    return (
        <div className={s.wrapper}>
            <div className={s.header}>
                <span>Teams/{currentTeam.name}</span>
                <div className={s.buttons}>
                    <input type="image" src={createIcon} onClick={createTeam} alt={'create'}/>
                    <input type="image" src={deleteIcon} onClick={deleteTeam} alt={'delete'}/>
                </div>
            </div>
            <div className={s.teamCard}>
                <div className={s.logo}>
                    <img src={currentTeam.imageUrl} alt="team logo"/>
                </div>
                <div className={s.info}>
                    <h2>{currentTeam.name}</h2>
                    <div className={s.description}>
                        <span>Year of foundation: <span>{currentTeam.foundationYear}</span></span>
                        <span>Division: <span>{currentTeam.division}</span></span>
                        <span>Conference: <span>{currentTeam.conference}</span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

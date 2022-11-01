import s from './NewTeam.module.scss';
import {Controller, useForm} from "react-hook-form";
import SuperInputText from "../../../../common/components/SuperInputText/SuperInputText";
import SuperButton from "../../../../common/components/SuperButton/SuperButton";
import React, {ChangeEvent, useRef, useState} from "react";
import {useAppDispatch} from "../../../../common/hooks/reduxHooks";
import addPhoto from '../../../../assets/icons/addPhoto.svg';
import {addTeamTC} from "../../asyncActions";
import {useNavigate} from "react-router-dom";

export const NewTeam = () => {
    const dispatch = useAppDispatch();
    // const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
    // const navigate = useNavigate();
    const [photo, setPhoto] = useState('');

    const navigate = useNavigate();

    const {control, handleSubmit, setValue} = useForm({
        defaultValues: {
            name: '',
            foundationYear: 0,
            division: '',
            conference: '',
            imageUrl: ''
        }
    });
    const onSubmit = (data: any) => {
        const token = localStorage.getItem('token');
        // @ts-ignore
        dispatch(addTeamTC(data, token))
    };

    // т.к. нет возможности загружать файл на сервер, вместо url отправится base64
    const inputRef = useRef<HTMLInputElement>(null);
    const selectFileHandler = () => {
        inputRef && inputRef.current?.click();
    }
    const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            const file = e.target.files[0];

            if (file.size < 4000000) {
                const reader = new FileReader();

                reader.onloadend = () => {
                    const file64 = reader.result as string;
                    setValue('imageUrl', file64)
                    setPhoto(file64);
                }
                reader.readAsDataURL(file)
            } else {
                console.error('Error: ', 'Файл слишком большого размера')
            }
        }
    }

    const cancelHandler = () => {
        navigate('/teams');
    }
    return (
        <form className={s.wrapper} onSubmit={handleSubmit(onSubmit)}>
            <div className={s.add_photo}>
                <div className={s.photo} style={
                    {
                        background: `url(${photo}) center no-repeat #9C9C9C`,
                        opacity: 1,
                    }
                }>
                    <img src={addPhoto} alt="add photo" onClick={selectFileHandler}/>
                    <input style={{display: 'none'}} ref={inputRef} type="file" onChange={uploadHandler}/>
                </div>
            </div>
            <div className={s.mainForm}>
                <div className={s.inputField}>
                    <label htmlFor={'name'}>Name</label><br/>
                    <Controller
                        name="name"
                        control={control}
                        render={({field}) =>
                            <SuperInputText
                                id={'name'}
                                onChange={field.onChange}
                                value={field.value}
                            />}
                    />
                </div>

                <div className={s.inputField}>
                    <label htmlFor={'division'}>Division</label><br/>
                    <Controller
                        name="division"
                        control={control}
                        render={({field}) =>
                            <SuperInputText
                                id={'division'}
                                onChange={field.onChange}
                                value={field.value}
                            />}
                    />
                </div>

                <div className={s.inputField}>
                    <label htmlFor={'conference'}>Conference</label><br/>
                    <Controller
                        name="conference"
                        control={control}
                        render={({field}) =>
                            <SuperInputText
                                id={'conference'}
                                onChange={field.onChange}
                                value={field.value}
                            />}
                    />
                </div>

                <div className={s.inputField}>
                    <label htmlFor={'foundationYear'}>Year of foundation</label><br/>
                    <Controller
                        name="foundationYear"
                        control={control}
                        render={({field}) =>
                            <SuperInputText
                                id={'foundationYear'}
                                onChange={(e) => field.onChange(Number(e.currentTarget.value))}
                                value={field.value}
                            />}
                    />
                </div>

                <div className={s.buttons}>
                    <SuperButton monochrome={true} onClick={cancelHandler}>Cancel</SuperButton>
                    <SuperButton type={'submit'}>Save</SuperButton>
                </div>

            </div>
        </form>
    )
}

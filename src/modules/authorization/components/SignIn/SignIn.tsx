import React from 'react';
import s from './SignIn.module.scss';
import basket from '../../../../assets/images/basket.png';
import {useForm, Controller} from "react-hook-form";
import SuperButton from "../../../../common/components/SuperButton/SuperButton";
import SuperInputText from "../../../../common/components/SuperInputText/SuperInputText";
import {Link, useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../../../common/hooks/reduxHooks";
import {authTC} from "../../asyncActions";

export const SignIn = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const {control, handleSubmit} = useForm({
        defaultValues: {
            login: '',
            password: '',
        }
    });
    const onSubmit = (data: { login: string, password: string }) => {
        dispatch(authTC(data.login, data.password));
        navigate('/');
    };

    return (
        <div className={s.wrapper}>
            <div className={s.main}>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={s.inputField}>
                        <label htmlFor={'login'}>Login</label><br/>
                        <Controller
                            name="login"
                            control={control}
                            render={({field}) =>
                                <SuperInputText
                                    id={'login'}
                                    onChange={field.onChange}
                                    value={field.value}
                                />}
                        />
                    </div>

                    <div className={s.inputField}>
                        <label htmlFor={'pass'}>Password</label><br/>
                        <Controller
                            name="password"
                            control={control}
                            render={({field}) => <SuperInputText
                                id={'pass'}
                                type={'password'}
                                showEye={true}
                                onChange={field.onChange}
                                value={field.value}
                            />}
                        />
                    </div>

                    {/*{errors.exampleRequired && <span>This field is required</span>}*/}

                    <SuperButton type={'submit'}>Sign In</SuperButton>
                </form>
                <span>Not a member yet? <Link to={'/sign_up'}>Sign up</Link></span>
            </div>

            <div className={s.background}>
                <img src={basket} alt="basket"/>
            </div>
        </div>
    )
}

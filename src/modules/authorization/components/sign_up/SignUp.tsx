import React, { useEffect } from "react";
import s from "./SignUp.module.scss";
import ball from "../../../../assets/images/ball.png";
import { useForm, Controller } from "react-hook-form";
import SuperButton from "../../../../common/components/SuperButton/SuperButton";
import SuperInputText from "../../../../common/components/SuperInputText/SuperInputText";
import { Link, useNavigate } from "react-router-dom";
import SuperCheckbox from "../../../../common/components/SuperCheckbox/SuperCheckbox";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../common/hooks/reduxHooks";
import { signUpTC } from "../../asyncActions";

export const SignUp = () => {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);

  const { control, handleSubmit, setError } = useForm({
    defaultValues: {
      name: "",
      login: "",
      password: "",
      confirmPassword: "",
      agreement: false,
    },
  });
  const onSubmit = (data: {
    name: string;
    login: string;
    password: string;
    confirmPassword: string;
    agreement: boolean;
  }) => {
    if (data.password === data.confirmPassword && data.agreement) {
      dispatch(signUpTC(data.name, data.login, data.password));
      navigate("/");
    } else {
      //setError
    }
  };

  return (
    <div className={s.wrapper}>
      <div className={s.main}>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={s.inputField}>
            <label htmlFor={"name"}>Name</label>
            <br />
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <SuperInputText
                  id={"name"}
                  onChange={field.onChange}
                  value={field.value}
                />
              )}
            />
          </div>

          <div className={s.inputField}>
            <label htmlFor={"login"}>Login</label>
            <br />
            <Controller
              name="login"
              control={control}
              render={({ field }) => (
                <SuperInputText
                  id={"login"}
                  onChange={field.onChange}
                  value={field.value}
                />
              )}
            />
          </div>

          <div className={s.inputField}>
            <label htmlFor={"pass"}>Password</label>
            <br />
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <SuperInputText
                  id={"pass"}
                  type={"password"}
                  showEye={true}
                  onChange={field.onChange}
                  value={field.value}
                />
              )}
            />
          </div>

          <div className={s.inputField}>
            <label htmlFor={"confirmPassword"}>Enter you password again</label>
            <br />
            <Controller
              name="confirmPassword"
              control={control}
              render={({ field }) => (
                <SuperInputText
                  id={"confirmPassword"}
                  type={"password"}
                  showEye={true}
                  onChange={field.onChange}
                  value={field.value}
                />
              )}
            />
          </div>

          <Controller
            name="agreement"
            control={control}
            render={({ field }) => (
              <SuperCheckbox onChange={field.onChange} checked={field.value}>
                I accept the agreement
              </SuperCheckbox>
            )}
          />
          {/*<SuperCheckbox>I accept the agreement</SuperCheckbox>*/}
          {/*{errors.exampleRequired && <span>This field is required</span>}*/}

          <SuperButton type={"submit"}>Sign Up</SuperButton>
        </form>
        <span>
          Already a member? <Link to={"/sign_in"}>Sign in</Link>
        </span>
      </div>

      <div className={s.background}>
        <img src={ball} alt="basket" />
      </div>
    </div>
  );
};

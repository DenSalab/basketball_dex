import { post } from "../baseRequest";
import {
  ChangeUserRequest,
  LoginRequest,
  LoginResult,
  RegisterUserRequest,
} from "./IAuth";

export const authAPI = {
  signUp(payloadRegister: RegisterUserRequest): Promise<LoginResult> {
    return post("/api/Auth/SignUp", JSON.stringify(payloadRegister));
  },
  signIn(payloadLogin: LoginRequest, token?: string): Promise<LoginResult> {
    return post("/api/Auth/SignIn", JSON.stringify(payloadLogin), token);
  },
  changeUser(
    payloadChangeUser: ChangeUserRequest,
    token: string
  ): Promise<any> {
    return post("/api/Auth/Change", JSON.stringify(payloadChangeUser), token);
  },
};

import {post} from "../baseRequest";
import {ChangeUserRequest, LoginRequest, LoginResult, RegisterUserRequest} from "./IAuth";

export const authAPI = {
    signUp(payloadRegister: RegisterUserRequest): Promise<LoginResult> {
        return post<RegisterUserRequest>('/api/Auth/SignUp', payloadRegister);
    },
    signIn(payloadLogin: LoginRequest, token?: string): Promise<LoginResult> {
        return post<LoginRequest>('/api/Auth/SignIn', payloadLogin, token);
    },
    changeUser(payloadChangeUser: ChangeUserRequest, token: string): Promise<any> {
        return post<ChangeUserRequest>('/api/Auth/Change', payloadChangeUser, token);
    },
}

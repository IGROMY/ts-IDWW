import {post} from "../helpers/HttpRequest";
import {ICredentials, IUser} from "../models/user";
interface IAuthResponse {
    expires: string,
    expiresPrettyPrint: string,
    token: string

}
interface IAuthService {
    register: (user:IUser)=>Promise<IAuthResponse>,
    login: (credentials:ICredentials)=>Promise<IAuthResponse>

}
export default class AuthService {
    static prefix = '/auth'
    static register = async(user:IUser) => post(`${this.prefix}/register`,user)
    static login = async(credentials:ICredentials) => post(`${this.prefix}/login`,credentials)
}

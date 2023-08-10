import {post} from "../helpers/HttpRequest";
import {ICredentials} from "../models/user";

export default class AuthService {
    static prefix = '/auth'
    static register = async(credentials:ICredentials) => post(`${this.prefix}/register`,credentials)
    static login = async(credentials:ICredentials) => post(`${this.prefix}/login`,credentials)
}

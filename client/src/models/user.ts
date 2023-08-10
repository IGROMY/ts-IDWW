export interface IUser {
    id?: string,
    photo?: string,
    role?: string,
    email: string,
    password: string,
    refreshToken?:string|null,
}
export interface ICredentials {
    email: string,
    password: string
}

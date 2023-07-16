import {create, SetState} from "zustand";
import AuthService from "../services/AuthService";
import {toast} from "react-toastify";

interface ILoginState {
    email: string,
    password: string,
    user:null,
    loggedIn: boolean,
    setField:(name: string, value: string)=>void,
    login: ()=>Promise<void>

}
const useLogin = create<ILoginState>((set:SetState<ILoginState>)=> ({
    email:'',
    password:'',
    user:null,
    loggedIn: false,
    setField: (name, value) => set ({[name]: value}),

    login: async () => {
        try {
            const {email, password} = useLogin.getState ();
            const credentials = await AuthService.login({email, password})
            if (credentials) {
                set({email:'', password:''})
                toast.success('Login is successful')
            }else {
                toast.error("login failed")
            }
        } catch (e:any){
            toast.error(e.message)
        }
    }
}))
export default useLogin;
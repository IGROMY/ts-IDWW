import {create} from "zustand";
import AuthService from "../services/AuthService.ts";

interface IRegistrationState {
    email:string,
    password:string,
    role:string,
    photo:string
    setField: (name:string, value:string) => void,
    register: ()=>Promise<void>
}
const useRegistration = create<IRegistrationState>((set)=> ({
    email:'',
    password:'',
    role:'',
    photo:'',
    setField: (name, value) => set ({[name]: value}),

    register: async () => {
        try {
            const {email, password} = useRegistration.getState ();
            const user = await AuthService.register({email, password})
            if (user) {
                set({ email:''})
                console.log('success')
            }else {
                console.log("registration failed")
            }
        } catch (e){
            console.error('error', e)
        }

    }
}))
export default useRegistration;
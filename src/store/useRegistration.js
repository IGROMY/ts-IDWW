import {create} from "zustand";
import AuthService from "../services/AuthService.ts";

const useRegistration = create((set)=> ({
    email:'',
    password:'',
    name:'',
    username:'',
    user:null,
    loggedIn: false,
    setField: (name, value) => set ({[name]: value}),

    register: async () => {
        try {
            const {email, password, name, username} = useRegistration.getState ();
            const user = await AuthService.register({email, password, name, username})
            if (user) {
                set({user, name:'', username:'', email:'', password:''})
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
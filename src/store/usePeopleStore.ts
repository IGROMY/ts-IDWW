import {create} from "zustand";
import {IPeopleInfo} from "../models/peopleInfo.ts";
type TPeopleInfo = {
    peopleInfo:Array<IPeopleInfo>
}
const usePeopleStore = create<TPeopleInfo>(()=> ({
    peopleInfo:[{
        id: 1,
        fullName: "Nattasha Julie",
        job: 'Desgin',
        location: 'Australia',
        phoneNumber: '+48 516 356 018',
        email: 'test@mail.ru'
    },
        {
            id: 2,
            fullName: "Nattasha Julie",
            job: 'Content Maker',
            location: 'Australia',
            phoneNumber: '+48 516 356 018',
            email: 'test@mail.ru'
        },
        {
            id: 3,
            fullName: "Nattasha Julie",
            job: 'Backend dev',
            location: 'Australia',
            phoneNumber: '+48 516 356 018',
            email: 'test@mail.ru'
        },
        {
            id: 4,
            fullName: "Nattasha Julie",
            job: 'Frontend dev',
            location: 'Australia',
            phoneNumber: '+48 516 356 018',
            email: 'test@mail.ru'
        }],

}))
export default usePeopleStore;

import {create} from "zustand";
import {IWorkInfo} from "../models/workInfo";
type TWorkStore = {
    workInfo: Array<IWorkInfo>
}
const useWorksStore = create<TWorkStore>(()=> ({
    workInfo:[
        {
            id: 1,
            text: "There are many variations of the passages of lorem Ipsum from available, majority.",
            heading: 'Project Plan',
            href: '/create-article',
        },
        {
            id: 2,
            text: "There are many variations of the passages of lorem Ipsum from available, majority.",
            heading: 'Interior Work',
            href: '/create-article',
        },
        {
            id: 3,
            text: "There are many variations of the passages of lorem Ipsum from available, majority.",
            heading: 'Retail Design',
            href: '/create-article',
        },
        {
            id: 4,
            text: "There are many variations of the passages of lorem Ipsum from available, majority.",
            heading: '2d/3d Art Work',
            href: '/create-article',
        },
        {
            id: 5,
            text: "There are many variations of the passages of lorem Ipsum from available, majority.",
            heading: 'Interior Work',
            href: '/create-article',
        },
        {
            id: 6,
            text: "There are many variations of the passages of lorem Ipsum from available, majority.",
            heading: 'Decoration Work',
            href: '/create-article',
        },
       ]
}))
export default useWorksStore;
import {create} from "zustand";
import {IWorkStepInfo} from "../models/workStepInfo.ts";
type TWorkStepInfo = {
    workStepInfo: Array<IWorkStepInfo>
}
const useHowWeWorkStore = create<TWorkStepInfo>(()=> ({
    workStepInfo:[
        {
            id: 1,
            heading: 'Concept & Details',
            text: 'It is a long established fact  will be distracted.Lorem Ipsum is simply dummy from text of the and typesetting industry.',
            stepNumber: '01',
        },
        {
            id: 2,
            heading: 'Idea for Work',
            text: 'It is a long established fact  will be distracted.Lorem Ipsum is simply dummy from text of the and typesetting industry.',
            stepNumber: '02',
        },
        {
            id: 3,
            heading: 'Design',
            text: 'It is a long established fact  will be distracted.Lorem Ipsum is simply dummy from text of the and typesetting industry.',
            stepNumber: '03',
        },
        {
            id: 4,
            heading: 'Perfection',
            text: 'It is a long established fact  will be distracted.Lorem Ipsum is simply dummy from text of the and typesetting industry.',
            stepNumber: '04',
        },
       ]
}))
export default useHowWeWorkStore;
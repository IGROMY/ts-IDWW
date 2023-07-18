import {create} from "zustand";
import {INewsCardInfo} from "../models/newsCardInfo.ts";
type TNewsCardInfo = {
    newsCardInfo: Array<INewsCardInfo>
}
const useNewsCardStore = create<TNewsCardInfo>(()=> ({
        newsCardInfo:[
            {
                id: 1,
                title:'Let’s Get Solution For Building Construction Work.',
                description:'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
                    '\n' +
                    'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
                date:'26 December,2022',
                category:'Kitchen Design',
                imageUrl:''
            },
            {
                id: 2,
                title:'Low Cost Latest Invented Interior Designing New Ideas.',
                description:'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
                    '\n' +
                    'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
                date:'22 December,2022',
                category:'Living Design',
                imageUrl:''
            },
            {
                id: 3,
                title:'Let’s Get Solution For Building Construction Work.',
                description:'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
                    '\n' +
                    'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
                date:'28 December,2022',
                category:'Interior Design',
                imageUrl:''
            },
            {
                id: 4,
                title:'Low Cost Latest Invented Interior Designing New Ideas.',
                description:'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
                    '\n' +
                    'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
                date:'27 December,2022',
                category:'Kitchen Design',
                imageUrl:''
            },
            {
                id: 5,
                title:'Let’s Get Solution For Building Construction Work.',
                description:'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
                    '\n' +
                    'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
                date:'20 December,2022',
                category:'Living Design',
                imageUrl:''
            },
            {
                id: 6,
                title:'Low Cost Latest Invented Interior Designing New Ideas.',
                description:'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.\n' +
                    '\n' +
                    'Lorem Ipsum is not simply random text. It has roots in a piece of classica.',
                date:'23 December,2022',
                category:'Interior Design',
                imageUrl:''
            },
        ],

}))
export default useNewsCardStore;
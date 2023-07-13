import {create, SetState} from "zustand";
import {IArticle} from "../models/article";
interface IArticleState {
    articles: Array<IArticle>,
    title: string,
    content: string,
    setTitle: (title:string)=> void,
    setContent: (content:string)=> void,
    deleteArticle: (index:number)=> void,
    addArticle: (article:IArticle)=> void
}
const useArticleStore = create<IArticleState>((set:SetState<IArticleState>)=> ({
    articles:[],
    title:"",
    content:'',
    setTitle:(title)=> set({title}),
    setContent:(content)=> set({content}),
    deleteArticle:(index) => set((state) =>
        ({articles:state.articles.filter((_,i) => i !== index)})),
    addArticle:(article) => set((state) => ({articles:[...state.articles,article]}))
}))
export default useArticleStore;
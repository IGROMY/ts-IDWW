import {create} from "zustand";
import ArticleService from "../services/ArticleService.ts";
import {IArticle} from "../models/article.ts";

interface IArticleState {
    title:string,
    description:string,
    category:string,
    content: string,
    imageURL:string,
    articles:IArticle[],
    setField: (name:string, value:any)=>void,
    createArticle: ()=>Promise<void>,
    updateArticle: ()=>Promise<void>,
    getArticles: ()=>Promise<void>,
}
const useBlogArticles = create<IArticleState>((set)=> ({
    title:'',
    description:'',
    category:'',
    content: '',
    imageURL:'',
    articles:[],
    setField: (name, value) => set ({[name]: value}),

    createArticle: async () => {
        try {
            const {title, description, category, imageURL, content} = useBlogArticles.getState ();
            const article = await ArticleService.createArticles({content, title, description, category, imageURL})
            console.log(article)
        } catch (e){
            console.error('error', e)
        }
    },
    updateArticle: async () => {
        try {
            const {title, description, category, imageURL, content} = useBlogArticles.getState ();
            const article = await ArticleService.updateArticles({content, title, description, category, imageURL})
            if (article) {
                set({title:'', description:'',  category:'', imageURL:'',content:''})
                console.log('article is updated')
            }else {
                console.log("article isn't updated")
            }
        } catch (e){
            console.error('error', e)
        }
    },
    getArticles: async () => {
        try {
            const articles = await ArticleService.getArticles()
            set({articles})
            console.log('fetched articles', articles)
        } catch (e){
            console.error('error', e)
        }
    }

}))
export default useBlogArticles;
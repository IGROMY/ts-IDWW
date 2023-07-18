import {create} from "zustand";
import BlogService from "../services/BlogService.js";

const useBlogArticles = create((set)=> ({
    title:'',
    description:'',
    date:'',
    category:'',
    imageUrl:'',
    articles:[],
    setField: (name, value) => set ({[name]: value}),

    createArticle: async () => {
        try {
            const {title, description, date, category, imageUrl} = useBlogArticles.getState ();
            const article = await BlogService.createArticle({title, description, date, category, imageUrl})
            if (article) {
                set({article:'', title:'', description:'', date:'', category:'', imageUrl:''})
                console.log('article is created')
            }else {
                console.log("article isn't created")
            }
        } catch (e){
            console.error('error', e)
        }
    },
    updateArticle: async () => {
        try {
            const {title, description, date, category, imageUrl} = useBlogArticles.getState ();
            const article = await BlogService.updateArticle({title, description, date, category, imageUrl})
            if (article) {
                set({article:'', title:'', description:'', date:'', category:'', imageUrl:''})
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
            const articles = await BlogService.getArticles()
            set({articles})
            console.log('fetched articles', articles)
        } catch (e){
            console.error('error', e)
        }
    }

}))
export default useBlogArticles;
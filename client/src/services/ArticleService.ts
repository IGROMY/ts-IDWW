import {get, patch, post} from "../helpers/HttpRequest.ts";
import {IArticle} from "../models/article.ts";

export default class ArticleService {
    static prefix = '/blog'
    static getArticles = async ():Promise<any> => get(`${this.prefix}/articles`);
    static createArticles = async (article:IArticle):Promise<any> => post(`${this.prefix}/article`, article);
    static updateArticles = async (article:IArticle):Promise<any> => patch(`${this.prefix}/article`, article)
}

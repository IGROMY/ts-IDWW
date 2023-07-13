import {get, patch, post} from "../helpers/HttpRequest.ts";

export default class BlogService {
    static prefix = '/blog'
    static getArticles = async () => get(`${this.prefix}/articles`);
    static createArticle = async (article) => post(`${this.prefix}/article`, article);
    static updateArticle = async (article) => patch(`${this.prefix}/article`, article)
}

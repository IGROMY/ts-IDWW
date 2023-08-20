import {FC, useEffect, useState} from 'react';
import styles from './BlogPage.module.scss'
import ArticlesAndNews from "../../organisms/articlesAndNews/ArticlesAndNews";
import LatestArticle from "../../organisms/latestArticle/LatestArticle";
import PagesHeading from "../../molecules/pagesHeading/PagesHeading";
import blogBg from "../../../assets/images/Photoblog.png";
import {INewsCardInfo} from "../../../models/newsCardInfo.ts";
const BlogPage:FC = () => {
    const [newsCardInfo, setNewsCardInfo] = useState<INewsCardInfo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    useEffect( () => {
        const fetchNews = async(page: number, limit: number) =>{
            try {
                const response = await fetch(`http://localhost:8000/news?page=${page}&limit=${limit}`)
                if (!response.ok){
                    throw new Error('Failed to sync')
                }
                const data: INewsCardInfo[] = await response.json();
                setNewsCardInfo(data)
            }catch (error: any){
                setError(error.message)
            }finally {
                setLoading(false)
            }
        }
        fetchNews(1, 6)
    },[])

    if (loading){
        return <div>Loading...</div>
    }
    if (error){
        return <div>{error}</div>
    }
    return (
        <div>
            <PagesHeading
                backgroundImg={blogBg}
                subscribe='Home / Blog'
                name='Articles & News'
            />
            <div className={styles.container}>
                <LatestArticle
                    newsCardInfo={newsCardInfo}
                />
                <ArticlesAndNews
                    newsCardInfo={newsCardInfo}
                    slice={0}
                />
            </div>
        </div>
    );
};

export default BlogPage;

import {FC, useEffect} from 'react';
import styles from './BlogPage.module.scss'
import ArticlesAndNews from "../../organisms/articlesAndNews/ArticlesAndNews";
import useBlogArticles from "../../../store/useBlogArticles.ts";
import LatestArticle from "../../organisms/latestArticle/LatestArticle";
import PagesHeading from "../../molecules/pagesHeading/PagesHeading";
import blogBg from "../../../assets/images/Photoblog.png";
import useNewsCardStore from "../../../store/useNewsCardStore.ts";
const BlogPage:FC = () => {
    const {articles, getArticles} = useBlogArticles()
    const {newsCardInfo} = useNewsCardStore()
    useEffect(() => {
        getArticles()
    },[articles])
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

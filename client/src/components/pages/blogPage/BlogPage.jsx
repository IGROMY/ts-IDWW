import React, {useEffect} from 'react';
import styles from './BlogPage.module.scss'
import ArticlesAndNews from "../../organisms/articlesAndNews/ArticlesAndNews.jsx";
import useBlogArticles from "../../../store/useBlogArticles.js";
import LatestArticle from "../../organisms/latestArticle/LatestArticle.jsx";
import PagesHeading from "../../molecules/pagesHeading/PagesHeading.jsx";
import blogBg from "../../../assets/images/Photoblog.png";
import useNewsCardStore from "../../../store/useNewsCardStore.ts";
const BlogPage = () => {
    const {articles, getArticles} = useBlogArticles()
    const {newsCardInfo} = useNewsCardStore()
    useEffect(() => {
        getArticles()
    },[articles])
    console.log(articles, 'component articles')
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
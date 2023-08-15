import  {FC} from 'react';
import styles from "./ArticlesAndNews.module.scss";
import NewsCard from "../../molecules/newsCard/NewsCard.tsx";
import newsImg1 from "../../../assets/images/Photonews1.png";
import newsImg2 from "../../../assets/images/Photonews2.png";
import newsImg3 from "../../../assets/images/Photonews3.png";
import newsImg4 from "../../../assets/images/Photonews4.png";
import newsImg5 from "../../../assets/images/Photonews5.png";
import newsImg6 from "../../../assets/images/Photonews6.png";
import Typography from "../../atoms/typography/Typography.tsx";
import Text from "../../atoms/text/Text.tsx";
import {IArticleAndNewsProps} from "./ArticleAndNews.types";

const ArticlesAndNews:FC<IArticleAndNewsProps> = ({slice, newsCardInfo}) => {
    const imagesArray = [newsImg1, newsImg2, newsImg3, newsImg4, newsImg5, newsImg6]
    const fullNewsCardInfo = newsCardInfo.map((item, index) => (
        {
            ...item,
            imageUrl: imagesArray[index]
        }
    ))
    return (
        <div className={styles.articlesAndNews}>
            <Typography variant='h1'>
                Articles $ News
            </Typography>
            <div className={styles.articlesAndNewsText}>
                <Text variant='normal'>
                    It is a long established fact that a reader will be distracted by
                    the of readable content of page lookings at its layouts points.
                </Text>
            </div>
            <div className={styles.newsWrapper}>
                {fullNewsCardInfo.slice(slice).map((newsCard) => (
                    <NewsCard
                        key={newsCard.id}
                        title={newsCard.title}
                        date={newsCard.date}
                        category={newsCard.category}
                        image={newsCard.imageUrl}
                        href={newsCard.imageUrl}/>
                ))}
            </div>
        </div>
    );
};

export default ArticlesAndNews;

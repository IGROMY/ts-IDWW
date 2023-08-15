import  {FC} from 'react';
import styles from "./ArticlesAndNews.module.scss";
import NewsCard from "../../molecules/newsCard/NewsCard.tsx";
// import newsImg1 from "../../../assets/images/Photonews1.png";
// import newsImg2 from "../../../assets/images/Photonews2.png";
// import newsImg3 from "../../../assets/images/Photonews3.png";
// import newsImg4 from "../../../assets/images/Photonews4.png";
// import newsImg5 from "../../../assets/images/Photonews5.png";
// import newsImg6 from "../../../assets/images/Photonews6.png";
import Typography from "../../atoms/typography/Typography.tsx";
import Text from "../../atoms/text/Text.tsx";
import {IArticleAndNewsProps} from "./ArticleAndNews.types";
import {convertDate} from "../../../helpers/convertDate.ts";

const ArticlesAndNews:FC<IArticleAndNewsProps> = ({slice, newsCardInfo}) => {

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
                {newsCardInfo.slice(slice).map((newsCard) => (
                    <NewsCard
                        key={newsCard.id}
                        title={newsCard.title}
                        date={convertDate(newsCard.date)}
                        category={newsCard.category}
                        image={newsCard.imageUrl}
                        href={newsCard.imageUrl}/>
                ))}
            </div>
        </div>
    );
};

export default ArticlesAndNews;

import styles from './LatestArticle.module.scss'
import Typography from "../../atoms/typography/Typography";
//import useNewsCardStore from "../../../store/useNewsCardStore.ts";
import latestArticleImg from '../../../assets/images/Photonews6.png'
import Text from "../../atoms/text/Text";
import SVG from "react-inlinesvg";
import linkIcon from "../../../assets/icons/linkIcon.svg";
import {FC} from "react";
import {ILatestArticleProps} from "./LatestArticle.types";
import {convertDate} from "../../../helpers/convertDate.ts";
const LatestArticle:FC<ILatestArticleProps> = ({newsCardInfo}) => {
    const latestImg = {
        backgroundImage: `url(${latestArticleImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
    return (
        <div className={styles.container}>
            <div className={styles.latestArticleTitle}>
                <Typography variant='h1'>
                    Latest Post
                </Typography>
            </div>
            <div>
                {newsCardInfo.slice(-1).map((newsCard, index) =>(
                    <div key={index} className={styles.latestArticle}>
                        <div  style={latestImg} className={styles.latestArticleImg}/>
                        <div className={styles.latestArticleInfo}>
                            <div>
                                <Typography variant='h3'>
                                    {newsCard.title}
                                </Typography>
                            </div>
                            <div>
                                <Text variant='normal'>
                                    {newsCard.description}
                                </Text>
                            </div>
                            <div className={styles.dateAndLinkWrapper}>
                                <div>
                                    <Text variant='normal'>
                                        {convertDate(newsCard.date)}
                                    </Text>
                                </div>
                                <div>
                                    <a>
                                        <SVG src={linkIcon}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>



    );
};

export default LatestArticle;


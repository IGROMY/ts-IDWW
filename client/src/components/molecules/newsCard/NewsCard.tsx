import React, {FC} from 'react';
import styles from './NewsCard.module.scss';
import Typography from "../../atoms/typography/Typography.jsx";
import Text from "../../atoms/text/Text.jsx";
import linkIcon from '../../../assets/icons/linkIcon.svg'
import {ReactSVG} from "react-svg"
import {INewsCardProps} from "./NewsCard.types"

const NewsCard:FC<INewsCardProps> = ({title, date, href, category,image}) => {

    const containerBackground = {
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
    return (
        <div className={styles.container}>
            <div style={containerBackground} className={styles.imgWrapper}>
                <div className={styles.subscribeBox}>
                    {category}
                </div>
            </div>
            <div className={styles.headingBox}>
                <Typography variant='h3'>
                    {title}
                </Typography>
            </div>
            <div className={styles.dateAndLink}>
                <div>
                    <Text variant='normal'>
                        {date}
                    </Text>
                </div>
                <div>
                    <a href={href}>
                        <ReactSVG src={linkIcon}/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
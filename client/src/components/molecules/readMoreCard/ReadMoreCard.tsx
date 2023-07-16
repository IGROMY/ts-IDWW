import React, {FC} from 'react';
import styles from './ReadMoreCard.module.scss'
import Typography from "../../atoms/typography/Typography";
import Text from "../../atoms/text/Text";
import {ReactSVG} from "react-svg"
import {IReadMoreCardProps} from './ReadMoreCard.types'
const ReadMoreCard:FC<IReadMoreCardProps> = ({text, heading, href}) => {
    return (
        <div className={styles.container}>
            <div className={styles.textWrapper}>
                <Typography variant='h3'>
                    {heading}
                </Typography>
                <Text variant='normal'>
                    {text}
                </Text>
            </div>
            <div className={styles.linkBox}>
                <a href={href}>
                    <Text variant='bold'>Read More </Text>
                    <ReactSVG src='/assets/icons/\buttonArrow.svg'/>
                </a>
            </div>
        </div>
    );
};

export default ReadMoreCard;
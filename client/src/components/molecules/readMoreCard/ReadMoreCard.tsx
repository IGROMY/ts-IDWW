import {FC} from 'react';
import styles from './ReadMoreCard.module.scss'
import Typography from "../../atoms/typography/Typography.tsx";
import Text from "../../atoms/text/Text.tsx";
import SVG from "react-inlinesvg";
import {IReadMoreCardProps} from './ReadMoreCard.types.ts'
import buttonIcon from '../../../assets/icons/buttonArrow.svg'
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
                    <SVG src={buttonIcon}/>
                </a>
            </div>
        </div>
    );
};

export default ReadMoreCard;
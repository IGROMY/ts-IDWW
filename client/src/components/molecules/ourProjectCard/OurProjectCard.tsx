import React, {FC} from 'react';
import styles from './OurProjectCard.module.scss'
import linkIcon from '../../../assets/icons/linkIcon.svg'
import Typography from "../../atoms/typography/Typography.jsx";
import Text from "../../atoms/text/Text.jsx";
import {ReactSVG} from "react-svg"
import {IOurProjectCardTypesProps} from "./OurProjectCard.types"
const OurProjectCard:FC<IOurProjectCardTypesProps> = ({src,heading,text}) => {
    return (
        <div className={styles.container}>
            <img src={src}/>
            <div className={styles.informationWrapper}>
                <div className={styles.textPart}>
                    <Typography variant='h6'>
                        {heading}
                    </Typography>
                    <Text variant='normal'>
                        {text}
                    </Text>
                </div>
                <a><ReactSVG src={linkIcon}/></a>
            </div>
        </div>
    );
};

export default OurProjectCard;
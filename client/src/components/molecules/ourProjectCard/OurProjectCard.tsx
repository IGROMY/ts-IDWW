import {FC} from 'react';
import styles from './OurProjectCard.module.scss'
import linkIcon from '../../../assets/icons/linkIcon.svg'
import Typography from "../../atoms/typography/Typography.tsx";
import Text from "../../atoms/text/Text.tsx";
import SVG from "react-inlinesvg"
import {IOurProjectCardTypesProps} from "./OurProjectCard.types.ts"
const OurProjectCard:FC<IOurProjectCardTypesProps> = ({src,heading,text}) => {
    return (
        <div className={styles.container}>
            <img alt='img' src={src}/>
            <div className={styles.informationWrapper}>
                <div className={styles.textPart}>
                    <Typography variant='h6'>
                        {heading}
                    </Typography>
                    <Text variant='normal'>
                        {text}
                    </Text>
                </div>
                <a><SVG src={linkIcon}/></a>
            </div>
        </div>
    );
};

export default OurProjectCard;
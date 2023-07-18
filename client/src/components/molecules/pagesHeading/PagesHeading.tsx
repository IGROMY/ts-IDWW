import React, {FC} from 'react';
import styles from "./PagesHeading.module.scss";
import Typography from "@/components/atoms/typography/Typography";
import Text from "@/components/atoms/text/Text";
import {IPagesHeadingProps} from "./PagesHeading.types"
const PagesHeading:FC<IPagesHeadingProps> = ({backgroundImg, name, subscribe}) => {
    const headingBackground = {
        backgroundImage: `url(${backgroundImg||'https://i.imgur.com/FaujHK3.png'})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
    return (
        <div style={headingBackground} className={styles.container}>
            <div className={styles.nameWrapper}>
                <Typography variant='h1'>
                    {name}
                </Typography>
                <Text variant='normal'>
                    {subscribe}
                </Text>
            </div>
        </div>
    );
};

export default PagesHeading;
import {FC} from 'react';
import styles from "./PagesHeading.module.scss";
import {IPagesHeadingProps} from "./PagesHeading.types.ts"
import Typography from "../../atoms/typography/Typography.tsx";
import Text from "../../atoms/text/Text.tsx";
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
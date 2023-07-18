import {FC} from 'react';
import styles from "./CardProgressAbout.module.scss"
import Typography from "../../atoms/typography/Typography.tsx";
import Text from "../../atoms/text/Text.tsx";
import Button from "../../atoms/button/Button.tsx";
import cn from "classnames";
import {ICardProgressAboutProps} from "./CardProgressAbout.types.ts"

const CardProgressAbout:FC<ICardProgressAboutProps> = ({variant, header, childrenText, textButton, photo}) => {

    const classes = cn({
        [styles.lastPhoto]: variant==="lastPhoto",
        [styles.firstPhoto]: variant==="firstPhoto",
    })
    return (
        <div className={classes}>
            <div className={styles.progressContainer}>
                <div className={styles.progressContent}>
                    <div className={styles.progressText}>
                        <div className={styles.headingProgress}>
                            <Typography variant='h1'>
                                {header}
                            </Typography>
                        </div>
                        <div className={styles.textWrapper}>
                            <Text variant='normal'>
                                {childrenText}
                            </Text>
                        </div>
                    </div>
                    <div>
                        <Button variant='primary' type='submit' text={textButton}/>
                    </div>
                </div>
                <div className={styles.imgBox}>
                    <img alt="img" src={photo}/>
                </div>
            </div>
        </div>
    );
};

export default CardProgressAbout;

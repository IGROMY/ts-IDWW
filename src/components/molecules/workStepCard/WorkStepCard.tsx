import React, {FC} from 'react';
import styles from './WorkStepCard.module.scss'
import cn from "classnames";
import {ReactSVG} from "react-svg"
import Typography from "../../atoms/typography/Typography";
import Text from "../../atoms/text/Text";
import Image from "next/image";
import {IWorkStepCardProps} from './WorkStepCard.types'

const WorkStepCard:FC<IWorkStepCardProps> = ({heading, text, stepNumber, variant, photoUrl, iconUrl}) => {

    const classes = cn({
        [styles.primary]: variant==="primary",
        [styles.secondary]: variant==="secondary",
    })
    return (
        <div className={classes}>
            <div className={styles["imgBox"]}>
                <Image className={styles["photoStyle"]} src={photoUrl} width='453' height='485' alt={''}/>
            </div>
            <div className={styles["informationWrapper"]}>
                <div className={styles["stepWrapper"]}>
                    <ReactSVG src={iconUrl}/>
                    <Typography variant='altH1'>
                        {stepNumber}
                    </Typography>
                </div>
                <div className={styles["textWrapper"]}>
                    <Typography variant="h2">
                        {heading}
                    </Typography>
                    <Text variant='normal'>
                        {text}
                    </Text>
                </div>
            </div>
        </div>
    );
};

export default WorkStepCard;
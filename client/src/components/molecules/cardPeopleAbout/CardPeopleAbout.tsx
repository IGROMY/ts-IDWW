import React, {FC} from 'react';
import styles from "./CardPeopleAbout.module.scss"
import Typography from "../../atoms/typography/Typography";
import Text from "../../atoms/text/Text";
import {ICardPeopleAboutProps}from "./CardPeopleAbout.types"
import {ReactSVG} from "react-svg"
const CardPeopleAbout:FC<ICardPeopleAboutProps> = ({fullName, job, location, phoneNumber, email}) => {
    return (
        <div className={styles.containerCard}>
            <div className={styles.textBox}>
                <Typography variant="h3">{fullName}</Typography>
                <Text variant="normal">{job}, {location}</Text>
            </div>
            <div className={styles.link}>
                <div><a><ReactSVG src="/assets/icons/\uF39Efb.svg"/></a></div>
                <div><a><ReactSVG src="/assets/icons/\uF099tvit.svg"/></a></div>
                <div><a><ReactSVG src="/assets/icons/\uF0E1ln.svg"/></a></div>
                <div><a><ReactSVG src="/assets/icons/\uF16Dinst.svg"/></a></div>
            </div>
            <div className={styles.textBox}>
                <Text variant="normal">
                    {phoneNumber}
                </Text>
                <Text variant="normal">
                    {email}
                </Text>
            </div>

        </div>
    );
};
export default CardPeopleAbout;

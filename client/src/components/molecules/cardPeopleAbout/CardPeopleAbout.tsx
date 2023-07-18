import {FC} from 'react';
import styles from "./CardPeopleAbout.module.scss"
import Typography from "../../atoms/typography/Typography.tsx";
import Text from "../../atoms/text/Text.tsx";
import {ICardPeopleAboutProps}from "./CardPeopleAbout.types.ts"
import SVG from "react-inlinesvg";
import fb from "../../../assets/icons/\uF39Efb.svg";
import twitter from "../../../assets/icons/\uF099tvit.svg";
import linkedin from "../../../assets/icons/\uF0E1ln.svg";
import instagram from "../../../assets/icons/\uF16Dinst.svg";
const CardPeopleAbout:FC<ICardPeopleAboutProps> = ({fullName, job, location, phoneNumber, email}) => {
    return (
        <div className={styles.containerCard}>
            <div className={styles.textBox}>
                <Typography variant="h3">{fullName}</Typography>
                <Text variant="normal">{job}, {location}</Text>
            </div>
            <div className={styles.link}>
                <div><a><SVG src={fb}/></a></div>
                <div><a><SVG src={twitter}/></a></div>
                <div><a><SVG src={linkedin}/></a></div>
                <div><a><SVG src={instagram}/></a></div>
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

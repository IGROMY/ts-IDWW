import {FC} from 'react';
import styles from "./FreeEstimate.module.scss";
import Typography from "../../atoms/typography/Typography";
import Text from "../../atoms/text/Text";
import SVG from "react-inlinesvg";
import callIcon from "../../../assets/icons/Call Icon.svg";
import Button from "../../atoms/button/Button";
import estimateImg from "../../../assets/images/Photohome2.png";
import {useNavigate} from "react-router-dom";
import {paths} from "../../../routes/constants/paths.ts";

const FreeEstimate:FC = () => {
    const navigate = useNavigate();
    const handleContactLink =() =>{
        navigate(paths.CONTACT_US)
    }
    // @ts-ignore
    return (
        <div className={styles.freeEstimate}>
            <div className={styles.estimateContent}>
                <div className={styles.estimateTextWrapper}>
                    <div className={styles.estimateHeadingWrapper}>
                        <Typography variant='h1'>
                            We Create The Art Of Stylish Living Stylishly
                        </Typography>
                    </div>
                    <Text variant='normal'>
                        It is a long established fact that a reader will be distracted by the of
                        readable content of a page when lookings at its layouts the points of using
                        that it has a more-or-less normal.
                    </Text>
                </div>
                <div className={styles.estimateContact}>
                    <SVG src={callIcon}/>
                    <div className={styles.estimateNumberWrapper}>
                        <Text variant='bold' >
                            0123456789
                        </Text>
                        <Text variant='normal'>
                            Call Us Anytime
                        </Text>
                    </div>
                </div>
                <div>
                    <Button
                        text='Get Free Estimate'
                        variant='primary'
                        onClick={handleContactLink}
                        type="button"
                    />
                </div>
            </div>
            <div className={styles.estimateImgBox}>
                <img alt="img" src={estimateImg}/>
            </div>
        </div>
    );
};

export default FreeEstimate;
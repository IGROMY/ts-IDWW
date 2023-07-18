import styles from './WannaJoinWrapper.module.scss'
import Typography from "../../atoms/typography/Typography";
import Button from "../../atoms/button/Button";
import Text from "../../atoms/text/Text";
import {useNavigate} from "react-router-dom";
const WannaJoinWrapper = () => {
    const navigate = useNavigate();
    const handleLink =() =>{
      navigate('/contact-us')
    }
    return (
        <div className={styles.container}>
            <div className={styles.textWrapper}>
                <Typography variant='h1'>
                    Wanna join the interno?
                </Typography>
                <Text variant='normal'>
                    It is a long established fact will be distracted.
                </Text>
            </div>
            <div className={styles.buttonWrapper}>
                <Button
                    text='Contact with us'
                    variant='secondary'
                    type={undefined}
                    onClick={handleLink}
                />
            </div>
        </div>
    );
};

export default WannaJoinWrapper;
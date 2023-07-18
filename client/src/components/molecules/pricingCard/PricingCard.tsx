import styles from './PricingCard.module.scss'
import cn from "classnames";
import Typography from "../../atoms/typography/Typography.tsx";
import SVG from "react-inlinesvg";
import line from '../../../assets/icons/priceLine.svg'
import Text from "../../atoms/text/Text.tsx";
import Button from "../../atoms/button/Button.tsx";
import {useNavigate} from "react-router-dom";
import {paths} from "../../../routes/constants/paths.ts";
import {IPricingCardProps} from "./PricingCard.types.ts";
import {FC} from "react";

const PricingCard:FC<IPricingCardProps> = ({variant, fullName, cost, offer1, offer2, offer3, offer4, offer5}) => {

    const classes = cn({
        [styles.primary]: variant==="primary",
        [styles.secondary]: variant==="secondary",
    })
    const navigate = useNavigate();
    const handleServiceLink =() =>{
        navigate(paths.SERVICES)
    }

    return (
        <div className={classes}>
           <div>
                <Typography variant='h3'>
                    {fullName}
                </Typography>
           </div>
            <div className={styles.priceBox}>
                <Typography variant='h3'>
                    $<Typography variant='h1'>{cost}</Typography>
                    <br/>
                    /month
                </Typography>
            </div>
            <SVG src={line}/>
            <ul className={styles.offerList}>
                <li>
                    <Text variant='normal'>
                        {offer1}
                    </Text>
                </li>
                <li>
                    <Text variant='normal'>
                        {offer2}
                    </Text>
                </li>
                <li>
                    <Text variant='normal'>
                        {offer3}
                    </Text>
                </li>
                <li>
                    <Text variant='normal'>
                        {offer4}
                    </Text>
                </li>
                <li>
                    <Text variant='normal'>
                        {offer5}
                    </Text>
                </li>
            </ul>
            <div className={styles.button}>
                <Button
                    variant='primary'
                    text='Get started'
                    onClick={handleServiceLink}
                    type='button'
                />
            </div>
        </div>
    );
};

export default PricingCard;
import {FC} from 'react';
import Text from "../../atoms/text/Text.tsx";
import {IPeopleReviewCardProps} from "./PeopleReviewCard.types.ts"
import styles from "./PeopleReviewCard.module.scss"

const PeopleReviewCard:FC<IPeopleReviewCardProps> = ({avatar, name, location, review}) => {
    return (
        <div className={styles.container}>
            <div className={styles.personInfo}>
                <div>
                    <img src={avatar} alt="avatar"/>
                </div>
                <div className={styles.textInfo}>
                    <Text variant='bold'>{name}</Text>
                    <Text variant='normal'>{location}</Text>
                </div>
            </div>
            <div className={styles.peopleReview}>
                <Text variant='normal'>
                    {review}
                </Text>
            </div>
        </div>
    );
};

export default PeopleReviewCard;

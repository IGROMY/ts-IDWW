import React, {FC} from 'react';
import styles from './ PeopleReviewCard.module.scss'
import Text from "../../atoms/text/Text.jsx";
import {IPeopleReviewCardProps} from "./PeopleReviewCard.types"
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
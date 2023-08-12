import {FC} from 'react';
import styles from "./PeopleThinks.module.scss";
import avatar1 from "../../../assets/images/Imageperson1.png";
import avatar2 from "../../../assets/images/Imageperson2.png";
import avatar3 from "../../../assets/images/Imageperson3.png";
import Typography from "../../atoms/typography/Typography";
import PeopleReviewCard from "../../molecules/peopleReviewCard/PeopleReviewCard";

const PeopleThinks: FC = () => {
    return (
        <div className={styles.peopleThinks}>
            <div className={styles.peopleThinksHeading}>
                <Typography variant='h1'>
                    What the People Thinks
                    About Us
                </Typography>
            </div>
            <div className={styles.reviewsWrapper}>
                <PeopleReviewCard
                    avatar={avatar1}
                    name="Nattasha Mith"
                    location="Minsk, Belarus"
                    review="Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been."
                />
                <PeopleReviewCard
                    avatar={avatar2}
                    name="Benny Roll"
                    location='Grodno, Belarus'
                    review="Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled it to make a type book."
                />
                <PeopleReviewCard
                    avatar={avatar3}
                    name="Raymond Galario"
                    location='Poznan, Poland'
                    review="Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled."
                />
            </div>
        </div>
    );
};

export default PeopleThinks;

import {FC} from 'react';
import styles from './OurProjectSlider.module.scss'

const OurProjectSlider: FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.tagsChnger}></div>
            <div className={styles.cardsWrapper}>

            </div>
            <div className={styles.pagesChanger}></div>
        </div>
    );
};

export default OurProjectSlider;
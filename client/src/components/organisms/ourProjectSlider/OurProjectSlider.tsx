import {FC} from 'react';
import styles from './OurProjectSlider.module.scss'

const OurProjectSlider: FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.tagsChanger}/>
            <div className={styles.cardsWrapper}/>
            <div className={styles.pagesChanger}/>
        </div>
    );
};

export default OurProjectSlider;

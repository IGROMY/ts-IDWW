import React from 'react';
import styles from './Counter.module.scss';
import line from '../../../app/assets/icons/Line.svg'
import Text from "../text/Text";
import { ReactSVG } from 'react-svg';

const Counter = () => {
    return (
        <div className={styles.container}>
            <div className={styles.insideContainer}>
                <div className={styles.counterBox}>
                    <span className={styles.counterNumbers}>12</span>
                    <Text variant='normal'>Years Of Experience</Text>
                </div>
                <div>
                    <ReactSVG src="/assets/icons/Line.svg"/>
                </div>
                <div className={styles.counterBox}>
                    <span className={styles.counterNumbers}>85</span>
                    <Text variant='normal'>Success Project</Text>
                </div>
                <div>
                    <ReactSVG src="/assets/icons/Line.svg"/>
                </div>
                <div className={styles.counterBox}>
                    <span className={styles.counterNumbers}>15</span>
                    <Text variant='normal'>Active Project</Text>
                </div>
                <div>
                    <ReactSVG src="/assets/icons/Line.svg"/>
                </div>
                <div className={styles.counterBox}>
                    <span className={styles.counterNumbers}>95</span>
                    <Text variant='normal'>Happy Customers</Text>
                </div>
            </div>
        </div>
    );
};

export default Counter;

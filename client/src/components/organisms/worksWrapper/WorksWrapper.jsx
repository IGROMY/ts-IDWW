import React from 'react';
import styles from "./WorksWrapper.module.scss";
import ReadMoreCard from "../../molecules/readMoreCard/ReadMoreCard.jsx";

const WorksWrapper = () => {
    return (
        <div className={styles.workWrapper}>
            <ReadMoreCard
                text='There are many variations of the passages of lorem Ipsum from available, majority.'
                heading='Project plan'
                href='/create-article'
            />
            <ReadMoreCard
                text='There are many variations of the passages of lorem Ipsum from available, majority.'
                heading='Interior Work'
                href='/create-article'
            />
            <ReadMoreCard
                text='There are many variations of the passages of lorem Ipsum from available, majority.'
                heading='Realization'
                href='/create-article'
            />
        </div>
    );
};

export default WorksWrapper;
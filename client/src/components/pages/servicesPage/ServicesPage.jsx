import React from 'react';
import styles from './ServicesPage.module.scss'
import PagesHeading from "../../molecules/pagesHeading/PagesHeading.jsx";
import servicesBg from "../../../assets/images/ImageServicesBg.png";
import WannaJoinWrapper from "../../molecules/wannaJoinWrapper/wannaJoinWrapper.jsx";
import useWorksStore from "../../../store/useWorksStore.ts";
import ReadMoreCard from "../../molecules/readMoreCard/ReadMoreCard.jsx";
import HowWeWork from "../../organisms/howWeWork/HowWeWork.jsx";
const ServicesPage = () => {
    const {workInfo} = useWorksStore()
    return (
        <div className={styles.container}>
            <PagesHeading
            backgroundImg={servicesBg}
            subscribe='Home / Services'
            name='Services'
            />
            <div className={styles.worksWrapper}>
                {workInfo.map((work) =>(
                    <ReadMoreCard
                        key={work.id}
                        text={work.text}
                        heading={work.heading}
                        href={work.href}
                    />
                ))}
            </div>
            <HowWeWork/>
            <WannaJoinWrapper/>
        </div>
    );
};

export default ServicesPage;
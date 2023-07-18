import React from 'react';
import styles from './AboutPage.module.scss'
import Paragraph from "../../atoms/paragraph/Paragraph.jsx";
import ContactUs from "../../molecules/contactUs/ContactUs.jsx";
import CardPeopleAbout from "../../molecules/cardPeopleAbout/CardPeopleAbout";
import usePeopleStore from "../../../store/usePeopleStore.ts";
import Typography from "../../atoms/typography/Typography.jsx";
import photo1 from "../../../assets/images/Human1.png";
import photo2 from "../../../assets/images/Human2.png";
import photo3 from "../../../assets/images/Human3.png";
import CardProgressAbout from "../../molecules/cardProgressAbout/CardProgressAbout.jsx";
import whatWeDo from "../../../assets/images/WhatWeDo.jpg"
import endResult from "../../../assets/images/EndResult.jpg"
import PagesHeading from "../../molecules/pagesHeading/PagesHeading.jsx";
import aboutUS from "../../../assets/images/aboutUs.png";
import bracketLeft from"../../../assets/images/bracketLeft.png"
import bracketRight from "../../../assets/images/bracketRight.png"
const AboutPage = () => {
    const {peopleInfo} = usePeopleStore()
    return (
        <div className={styles.container}>
            <PagesHeading
                backgroundImg={aboutUS}
                subscribe='Home / About Us'
                name='About Us'
            />
            <div className={styles.quote}>
                <div>
                    <img src={bracketLeft} alt='bracketLeft'/>
                </div>
                <div className={styles.contentWrapper}>
                    <Typography variant='h1'>
                        ,,
                    </Typography>

                    <Typography variant='h2'>
                        I like an interior that defies labeling.
                        I don't really want someone to walk into a room and know that
                        I did it
                    </Typography>

                    <Typography variant='h3'>
                        -BUNNY WILLIAMS
                    </Typography>
                </div>
                <div>
                    <img src={bracketRight} alt='bracketRight'/>
                </div>
            </div>
            <div className={styles.containerProgress}>
                <CardProgressAbout
                    variant="lastPhoto"
                    header='What We do'
                    childrenText=
                        "It is a long established fact that a reader will be distracted by the of readable content of a page when looking at its layouts the points of using that it has a more-or-less normal."
                    textButton='Our Concept'
                    photo={whatWeDo}
                />
                <CardProgressAbout
                    variant='firstPhoto'
                    header="The End Result"
                    childrenText=
                        'It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal'
                    textButton='Our Portfolio'
                    photo={endResult}/>
            </div>
            {/*{peopleInfo.map((people)=>(*/}
            {/*    <CardPeopleAbout*/}
            {/*        key={people.id}*/}
            {/*        phoneNumber={people.phoneNumber}*/}
            {/*        job={people.job}*/}
            {/*        location={people.location}*/}
            {/*        email={people.email}*/}
            {/*        fullName={people.fullName}*/}
            {/*    />*/}
            {/*))}*/}

            <div className={styles.peopleAboutUs}>
                <div className={styles.peopleAboutUsHeading}>
                    <Typography variant='h1'>
                        What the People Thinks
                        About Us
                    </Typography>
                </div>
                <div className={styles.cardPeople}>
                    <div className={styles.photo}>
                        <img className={styles.img} src={photo1} alt="photo1"/>
                    </div>
                    <div className={styles.photo}>
                        <img className={styles.img} src={photo2} alt="photo2"/>
                    </div>
                    <div className={styles.photo}>
                        <img className={styles.img} src={photo3} alt="photo3"/>
                    </div>
                    <div className={styles.photo}>
                        <img className={styles.img} src={photo3} alt="photo3"/>
                    </div>
                </div>
            </div>
            <ContactUs/>
        </div>
    );
};

export default AboutPage;

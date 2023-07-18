import React from 'react';
import styles from './RegistrationPage.module.scss'
import PagesHeading from "../../molecules/pagesHeading/PagesHeading.jsx";
import bgImg from '../../../assets/images/ImagesLogin.png'
import Registration from "../../organisms/registration/Registration.jsx";
const RegistrationPage = () => {
    return (
        <div className={styles.container}>
            <PagesHeading
            backgroundImg={bgImg}
            subscribe='Authorization / Register Page'
            />
            <Registration/>
        </div>
    );
};

export default RegistrationPage;
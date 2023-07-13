import React from 'react';
import styles from './LoginPage.module.scss'
import PagesHeading from "../../molecules/pagesHeading/PagesHeading.jsx";
import bgImg from '../../../assets/images/ImagesLogin.png'
import Login from "../../organisms/login/Login.jsx";
const LoginPage = () => {
    console.log(import.meta.env.VITE_API_URL)
    return (
        <div className={styles.container}>
            <PagesHeading
            backgroundImg={bgImg}
            subscribe='Authorization / Login Page'
            />
            <code>{JSON.stringify(import.meta.env.VITE_API_URL)}</code>
            <Login/>
        </div>
    );
};

export default LoginPage;

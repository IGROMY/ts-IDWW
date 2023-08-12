import {FC} from 'react';
import styles from './LoginPage.module.scss'
import PagesHeading from "../../molecules/pagesHeading/PagesHeading.tsx";
import bgImg from '../../../assets/images/ImagesLogin.png'
import Login from "../../organisms/login/Login.tsx";

const LoginPage:FC = () => {
    return (
        <div className={styles.container}>
            <PagesHeading
            backgroundImg={bgImg}
            subscribe='Authorization / Login Page'
             name="Login"/>
            <code>{JSON.stringify(import.meta.env.VITE_API_URL)}</code>
            <Login/>
        </div>
    );
};

export default LoginPage;

import {FC} from 'react';
import styles from './RegistrationPage.module.scss'
import PagesHeading from "../../molecules/pagesHeading/PagesHeading.jsx";
import bgImg from '../../../assets/images/ImagesLogin.png'
import Registration from "../../organisms/registration/Registration.jsx";
const RegistrationPage: FC = () => {
    return (
        <div className={styles.container}>
            <PagesHeading
            backgroundImg={bgImg}
            subscribe='Authorization / Register Page'
             name="Registration"/>
            <Registration/>
        </div>
    );
};

export default RegistrationPage;

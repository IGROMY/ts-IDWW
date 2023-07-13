import React from 'react';
import styles from './Page404.module.scss'
import Text from "../../atoms/text/Text.jsx";
import img404 from '../../../assets/images/notFoundPage.jpg'
import Typography from "../../atoms/typography/Typography.jsx";
import Button from "../../atoms/button/Button.jsx";
import {useNavigate} from "react-router-dom";
import {paths} from "../../../routes/constants/paths.js";

const Page404 = () => {
    const navigate = useNavigate()
    const handleHomeLink = () =>{
        navigate(paths.HOME)
    }
    return (
        <div className={styles.container404}>
            <div className={styles.containerNotFound}>
                <div className={styles.containerContent}>
                    <span className={styles.headingText}>404</span>
                    <Typography  variant='h2'>
                        We are sorry, but the page
                        you requested was not found
                    </Typography>
                </div>

                <div className={styles.containerButton} >
                    <Button variant='primary' text='Back To Home' onClick={handleHomeLink}/>
                </div>

            </div>

            <div className={styles.imgContainer}>
                <img className={styles.img} alt='img' src={img404}/>
            </div>

        </div>
    );
};

export default Page404;
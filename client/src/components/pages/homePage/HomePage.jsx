import React from 'react';
import styles from './HomePage.module.scss'
import Button from "../../atoms/button/Button.jsx";
import Typography from "../../atoms/typography/Typography.jsx";
import WannaJoinWrapper from "../../molecules/wannaJoinWrapper/wannaJoinWrapper.jsx";
import bgPrevImg from '../../../assets/images/Photohome.png'
import Text from "../../atoms/text/Text.jsx";
import ClientLogo from "../../atoms/clientLogo/ClientLogo.jsx";
import Counter from "../../atoms/counter/Counter.jsx";
import {useNavigate} from "react-router-dom";
import ArticlesAndNews from "../../organisms/articlesAndNews/ArticlesAndNews.jsx";
import FollowOurProject from "../../organisms/followOurProject/FollowOurProject.jsx";
import PeopleThinks from "../../organisms/peopleThinks/PeopleThinks.jsx";
import FreeEstimate from "../../organisms/freeEstimate/FreeEstimate.jsx";
import WorksWrapper from "../../organisms/worksWrapper/WorksWrapper.jsx";
import useNewsCardStore from "../../../store/useNewsCardStore.js";

const HomePage = () => {
    const navigate = useNavigate();
    const {newsCardInfo} = useNewsCardStore()
    const homePageBackground = {
        backgroundImage: `url(${bgPrevImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
    const handleServiceLink =() =>{
        navigate('/services')
    }
    return (
        <div  className={styles.homePage}>
            <div style={homePageBackground} className={styles.preview}>
                <div className={styles.intro}>
                    <Typography variant='altH1'>
                        Let Your Home Be Unique
                    </Typography>
                    <Text variant='normal'>
                        There are many variations of the passages of lorem Ipsum from available, majority.
                    </Text>
                    <Button
                        variant='primary'
                        text='Get started'
                        onClick={handleServiceLink}
                        type='link'
                    />
                </div>
            </div>
            <WorksWrapper/>
            <FreeEstimate/>
            <PeopleThinks/>
            <ClientLogo/>
            <FollowOurProject/>
            <Counter/>
            <ArticlesAndNews
                newsCardInfo={newsCardInfo}
                slice={3}
            />
            <WannaJoinWrapper/>
        </div>
    );
};

export default HomePage;

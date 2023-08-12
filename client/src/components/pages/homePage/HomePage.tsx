import {FC} from 'react';
import styles from './HomePage.module.scss'
import Button from "../../atoms/button/Button.tsx";
import Typography from "../../atoms/typography/Typography.tsx";
import WannaJoinWrapper from "../../molecules/wannaJoinWrapper/wannaJoinWrapper.tsx";
import bgPrevImg from '../../../assets/images/Photohome.png'
import Text from "../../atoms/text/Text.tsx";
import ClientLogo from "../../atoms/clientLogo/ClientLogo.tsx";
import Counter from "../../atoms/counter/Counter.tsx";
import {useNavigate} from "react-router-dom";
import ArticlesAndNews from "../../organisms/articlesAndNews/ArticlesAndNews.tsx";
import FollowOurProject from "../../organisms/followOurProject/FollowOurProject.tsx";
import PeopleThinks from "../../organisms/peopleThinks/PeopleThinks.tsx";
import FreeEstimate from "../../organisms/freeEstimate/FreeEstimate.tsx";
import WorksWrapper from "../../organisms/worksWrapper/WorksWrapper.tsx";
import useNewsCardStore from "../../../store/useNewsCardStore.ts";

const HomePage:FC = () => {
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

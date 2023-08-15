import {FC} from 'react';
import styles from './HomePage.module.scss'
import Button from "../../atoms/button/Button";
import Typography from "../../atoms/typography/Typography";
import bgPrevImg from '../../../assets/images/Photohome.png'
import Text from "../../atoms/text/Text";
import ClientLogo from "../../atoms/clientLogo/ClientLogo";
import Counter from "../../atoms/counter/Counter";
import {useNavigate} from "react-router-dom";
import ArticlesAndNews from "../../organisms/articlesAndNews/ArticlesAndNews";
import FollowOurProject from "../../organisms/followOurProject/FollowOurProject";
import PeopleThinks from "../../organisms/peopleThinks/PeopleThinks";
import FreeEstimate from "../../organisms/freeEstimate/FreeEstimate";
import WorksWrapper from "../../organisms/worksWrapper/WorksWrapper";
import useNewsCardStore from "../../../store/useNewsCardStore.ts";
import WannaJoinWrapper from "../../molecules/wannaJoinWrapper/WannaJoinWrapper";

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
                        type='button'
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

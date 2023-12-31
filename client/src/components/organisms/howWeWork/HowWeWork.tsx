import styles from './HowWeWork.module.scss'
import Typography from "../../atoms/typography/Typography";
import Text from "../../atoms/text/Text";
import WorkStepCard from "../../molecules/workStepCard/WorkStepCard";
import useHowWeWorkStore from "../../../store/useHowWeWorkStore.ts";
import icon1 from '../../../assets/icons/Icon0001.svg'
import icon2 from '../../../assets/icons/Icon0002.svg'
import icon3 from '../../../assets/icons/Icon0003.svg'
import icon4 from '../../../assets/icons/Icon0004.svg'
import photo1 from '../../../assets/images/Photo0001.png'
import photo2 from '../../../assets/images/Photo0002.png'
import photo3 from '../../../assets/images/Photo0003.png'
import photo4 from '../../../assets/images/Photo0004.png'
import {FC} from "react";
const HowWeWork:FC = () => {
    const {workStepInfo} = useHowWeWorkStore()
    const iconsArray = [icon1, icon2, icon3, icon4];
    const imagesArray = [photo1, photo2, photo3, photo4];
    const fullWorkStepInfo = workStepInfo.map((item, index) => (
        {
            ...item,
            icon: iconsArray[index],
            photo: imagesArray[index]
        }
    ))
    return (
        <div className={styles.container}>
            <div className={styles.textBox}>
                <Typography variant='h1'>
                    How We Work
                </Typography>
                <Text variant='normal'>
                    It is a long established fact  will be distracted.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </Text>
            </div>
            <div className={styles.workStepWrapper}>
                {fullWorkStepInfo.map((step) =>(
                    <WorkStepCard
                        variant={step.id % 2 === 0 ? 'secondary':'primary'}
                        key={step.id}
                        heading={step.heading}
                        text={step.text}
                        stepNumber={step.stepNumber}
                        photoUrl='https://kartinkin.net/pics/uploads/posts/2022-09/1662412649_32-kartinkin-net-p-pismennie-stoli-v-minimalistichnom-stile-i-32.jpg'
                    />
                ))}
            </div>
        </div>
    );
};

export default HowWeWork;

import {FC} from 'react';
import styles from "./FollowOurProject.module.scss";
import Typography from "../../atoms/typography/Typography.tsx";
import Text from "../../atoms/text/Text.tsx";
import ProjectCardFollower from "../../molecules/projectCardFollower/ProjectCardFollower.tsx";

const FollowOurProject: FC = () => {
    return (
        <div className={styles.followOurProject}>
            <Typography variant='h1'>
                Follow Our Projects
            </Typography>
            <div className={styles.followOurProjectText}>
                <Text variant='normal'>
                    It is a long established fact that a reader will be distracted by
                    the of readable content of page lookings at its layouts points.
                </Text>
            </div>
            <div className={styles.projectCardsWrapper}>
                <ProjectCardFollower
                    name='Kitchen'
                    href="/test"
                    imageUrl=""
                />
                <ProjectCardFollower
                    name='Bedroom'
                    href="/test"
                    imageUrl=""
                />
                <ProjectCardFollower
                    name='Dinning Hall'
                    href="/test"
                    imageUrl=""
                />
                <ProjectCardFollower
                    name='Living Area'
                    href="/test"
                    imageUrl=""/>
            </div>
        </div>
    );
};

export default FollowOurProject;

import styles from "./FollowOurProject.module.scss";
import Typography from "../../atoms/typography/Typography";
import Text from "../../atoms/text/Text";
import ProjectCardFollower from "../../molecules/projectCardFollower/ProjectCardFollower";
import {FC} from "react";

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
                    imageUrl='https://ogorodniku.com/uploads/posts/2023-01/1672778979_ogorodniku-com-p-spalnya-minimalizm-v-svetlikh-tonakh-foto-66.jpg'
                    name='Kitchen'
                    href='/project-details'
                />
                <ProjectCardFollower
                    imageUrl='https://ogorodniku.com/uploads/posts/2023-01/1672778979_ogorodniku-com-p-spalnya-minimalizm-v-svetlikh-tonakh-foto-66.jpg'
                    name='Bedroom'
                    href='/project-details'
                />
                <ProjectCardFollower
                    imageUrl='https://ogorodniku.com/uploads/posts/2023-01/1672778979_ogorodniku-com-p-spalnya-minimalizm-v-svetlikh-tonakh-foto-66.jpg'
                    name='Dinning Hall'
                    href='/project-details'
                />
                <ProjectCardFollower
                    name='Living Area'
                    href='/project-details'
                    imageUrl='https://ogorodniku.com/uploads/posts/2023-01/1672778979_ogorodniku-com-p-spalnya-minimalizm-v-svetlikh-tonakh-foto-66.jpg'
                />
            </div>
        </div>
    );
};

export default FollowOurProject;

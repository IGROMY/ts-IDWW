import React from 'react';
import styles from "./FollowOurProject.module.scss";
import Typography from "../../atoms/typography/Typography.jsx";
import Text from "../../atoms/text/Text.jsx";
import ProjectCardFollower from "../../molecules/projectCardFollower/ProjectCardFollower.jsx";
import projectImg1 from "../../../assets/images/ImageprojectImg1.png";
import projectImg2 from "../../../assets/images/ImageProjectImg2.png";
import projectImg3 from "../../../assets/images/ImageprojectImg3.png";
import projectImg4 from "../../../assets/images/ImageprojectImg4.png";

const FollowOurProject = () => {
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
                    image={projectImg1}
                    name='Kitchen'
                />
                <ProjectCardFollower
                    image={projectImg2}
                    name='Bedroom'
                />
                <ProjectCardFollower
                    image={projectImg3}
                    name='Dinning Hall'
                />
                <ProjectCardFollower
                    image={projectImg4}
                    name='Living Area'
                />
            </div>
        </div>
    );
};

export default FollowOurProject;
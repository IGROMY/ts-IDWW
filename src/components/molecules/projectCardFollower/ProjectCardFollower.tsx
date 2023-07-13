import React, {FC} from 'react';
import {IProjectCardFollowerProps} from './ProjectCardFollower.types'
import styles from './ProjectCardFollower.module.scss'
import {ReactSVG} from "react-svg";
import Text from "../../atoms/text/Text";
import Typography from "../../atoms/typography/Typography";
import Image from "next/image";
const ProjectCardFollower:FC<IProjectCardFollowerProps> = ({imageUrl, name, href}) => {
    return (
        <div className={styles.container}>
            <div>
                <Image
                    src={imageUrl}
                    alt='img'
                />
                <div className={styles.information}>
                    <div className={styles.textBox}>
                        <Typography variant='h3'>
                            Modern {name}
                        </Typography>
                        <Text variant='normal'>
                            Decor / Architecture
                        </Text>
                    </div>
                    <a href={href}><ReactSVG src='/assets/icons/\linkIcon'/></a>
                </div>
            </div>

        </div>
    );
};

export default ProjectCardFollower;
import React, {FC} from 'react';
import styles from "./projectCardLittle.module.scss";
import Typography from "../../atoms/typography/Typography";
import Text from "../../atoms/text/Text";
import {ReactSVG} from "react-svg";
import {IProjectCardLittleProps} from './ProjectCardLittle.types'

const ProjectCardLittle:FC<IProjectCardLittleProps> = ({imageUrl, name, href}) => {
    return (
        <div className={styles.container}>
            <div>
                <img className={styles.img}
                    src={imageUrl}
                    alt='img'
                />
                <div className={styles.information}>
                    <div className={styles.textBox}>
                        <Typography variant='h3'>
                            {name}
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

export default ProjectCardLittle;
import {FC} from 'react';
import {IProjectCardFollowerProps} from './ProjectCardFollower.types.ts'
import styles from './ProjectCardFollower.module.scss'
import linkIcon from "../../../assets/icons/linkIcon.svg";
import Text from "../../atoms/text/Text.tsx";
import Typography from "../../atoms/typography/Typography.tsx";
import SVG from "react-inlinesvg";
const ProjectCardFollower:FC<IProjectCardFollowerProps> = ({imageUrl, name, href}) => {
    return (
        <div className={styles.container}>
            <div>
                <img
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
                    <a href={href}><SVG src={linkIcon}/></a>
                </div>
            </div>

        </div>
    );
};

export default ProjectCardFollower;
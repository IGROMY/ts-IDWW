import {FC} from 'react';
import styles from "./projectCardLittle.module.scss";
import Typography from "../../atoms/typography/Typography.tsx";
import Text from "../../atoms/text/Text.tsx";
import SVG from "react-inlinesvg";
import {IProjectCardBigProps} from './ProjectCardBig.types.ts';
import linkIcon from "../../../assets/icons/linkIcon.svg";

const ProjectCardBig:FC<IProjectCardBigProps> = ({name, href, imageUrl}) => {
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
                    <a href={href}><SVG src={linkIcon}/></a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCardBig;
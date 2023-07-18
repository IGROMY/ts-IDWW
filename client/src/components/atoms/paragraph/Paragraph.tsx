import styles from './Paragraph.module.scss'
import cn from 'classnames'
import {FC} from 'react';
import {IParagraphProps} from "./Paragraph.types";

const Paragraph: FC<IParagraphProps> = ({children, variant}) => {
    const classes = cn({
        [styles.large]: variant==="large",
        [styles.medium]: variant==="medium",
        [styles.small]: variant==="small",
    })
    return (
        <p className={classes}>
            {children}
        </p>
    );
};

export default Paragraph;
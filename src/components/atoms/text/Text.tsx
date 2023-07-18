import React from 'react';
import styles from './Text.module.scss'
import cn from "classnames";
import {FC} from 'react';
import {ITextProps} from "./Text.types";

const Text: FC<ITextProps> = ({children, variant}) => {
    const classes = cn({
        [styles.normal]: variant==="normal",
        [styles.bold]: variant==="bold",
        [styles.italic]: variant==="italic",
    })
    return (
        <span className={classes}>
            {children}
        </span>
    );
};

export default Text;

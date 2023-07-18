import React from 'react';
import styles from './Typography.module.scss'
import cn from 'classnames'
import {FC} from 'react';
import {ITypographyProps} from "./Typography.types";

const Typography: FC<ITypographyProps> = ({children, variant}) => {
    const classes = cn({
        [styles.h1]: variant==="h1",
        [styles.h2]: variant==="h2",
        [styles.h3]: variant==="h3",
        [styles.h4]: variant==="h4",
        [styles.h5]: variant==="h5",
        [styles.h6]: variant==="h6",
        [styles.altH1]: variant==="altH1",
        [styles.displayText]: variant==="displayText",
    })
    return (
        <span className={classes}>
            {children}
        </span>
    );
};

export default Typography;

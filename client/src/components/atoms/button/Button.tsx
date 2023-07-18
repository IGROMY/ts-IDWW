import {FC} from 'react';
import styles from './Button.module.scss';
import cn from 'classnames';
import { ReactSVG } from 'react-svg';
import Image from 'next/image';
import { IButtonProps } from './Button.types';

const Button: FC<IButtonProps> = ({ text, disabled, variant, type, onClick }) => {
    const classes = cn({
        [styles.primary]: variant === 'primary',
        [styles.large]: variant === 'large',
        [styles.secondary]: variant === 'secondary',
    });

    return (
        <button onClick={onClick} disabled={disabled} className={classes} type={type}>
            {text}
        <ReactSVG className={styles.icon} src="/assets/icons/buttonArrow.svg"/>
        </button>
    );
};

export default Button;

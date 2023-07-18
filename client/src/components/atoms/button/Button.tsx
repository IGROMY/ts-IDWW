import {FC} from 'react';
import styles from './Button.module.scss';
import cn from 'classnames';
import { IButtonProps } from './Button.types';
import SVG from "react-inlinesvg";
import buttonIcon from '../../../assets/icons/buttonArrow.svg'
const Button: FC<IButtonProps> = ({ text, disabled, variant, type, onClick }) => {
    const classes = cn({
        [styles.primary]: variant === 'primary',
        [styles.large]: variant === 'large',
        [styles.secondary]: variant === 'secondary',
    });

    return (
        <button onClick={onClick} disabled={disabled} className={classes} type={type}>
            {text}
        <SVG className={styles.icon} src={buttonIcon}/>
        </button>
    );
};

export default Button;

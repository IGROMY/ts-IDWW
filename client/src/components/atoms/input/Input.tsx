import styles from "./input.module.scss"
import Text from "../text/Text.jsx";
import {FC} from 'react'
import { IInputProps } from './Input.types'

const Input: FC<IInputProps> = ({ type, value, onChange, maxLength, minLength, name, label, placeholder}) => {
    return (
        <div className={styles.container}>
            <label htmlFor={name} className={styles.label}>
                <Text variant="normal">
                {label}
                </Text>
            </label>
            <input className={styles.input}
                   type={type}
                   value={value}
                   onChange={onChange}
                   maxLength={maxLength}
                   minLength={minLength}
                   name={name}
                   id={name}
                   placeholder={placeholder}
            />
        </div>
    );
};

export default Input;

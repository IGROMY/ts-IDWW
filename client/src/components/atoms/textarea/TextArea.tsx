import styles from "./TextArea.module.scss"
import Text from "../text/Text";
import {FC} from 'react';
import {ITextAreaProps} from './TextArea.types'

const TextArea: FC<ITextAreaProps> = ({value, onChange, name, label}) => {
    return (
        <div className={styles.container}>
            <label htmlFor={name} className={styles.label}>
                <Text variant="normal">
                {label}
                </Text>
            </label>
            <textarea
                className={styles.textArea}
                value={value}
                onChange={onChange}
                name={name}
                id={name}
            />
        </div>
    );
};

export default TextArea;

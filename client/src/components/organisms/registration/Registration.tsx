import {ChangeEvent, FC, FormEvent} from 'react';
import styles from './Registration.module.scss'
import Typography from "../../atoms/typography/Typography";
import Text from "../../atoms/text/Text";
import Input from "../../atoms/input/Input";
import Button from "../../atoms/button/Button";
import useRegistration from "../../../store/useRegistration.ts";
const Registration: FC = () => {
    const {email, password, setField, register} = useRegistration()
    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target
        setField(name, value)
    }
    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        register();
    }
    return (
        <form className={styles.container} onSubmit={handleSubmit}>

            <div className={styles.textWrapper}>
                <Typography variant='h1'>
                    Registration
                </Typography>
                <Text variant='normal'>
                    This page is password protected. If you are the website admin, or have access to this page, please type your password below.
                </Text>
            </div>
            <div className={styles.inputsWrapper}>
                <Input
                    type='email'
                    label=''
                    placeholder='Enter Your Email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    id='email'/>
                <Input
                    type='password'
                    label=''
                    placeholder='Enter Your password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    id='password'/>
                <Button
                    type='submit'
                    text='Register'
                    variant='primary'
                />
            </div>
        </form>
    );
};

export default Registration;

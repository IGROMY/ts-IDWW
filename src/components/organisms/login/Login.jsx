import React from 'react';
import styles from './Login.module.scss'
import Typography from "../../atoms/typography/Typography.jsx";
import Text from "../../atoms/text/Text.jsx";
import Input from "../../atoms/input/Input.jsx";
import Button from "../../atoms/button/Button.jsx";
import useLogin from "../../../store/useLogin.ts";
const Login = () => {
    const {email, password, setField, login, name, username} = useLogin()
    const handleChange = (e) => {
        const {value, name} = e.target
        setField(name, value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        login();
    }
    return (
        <form className={styles.container} onSubmit={handleSubmit}>

            <div className={styles.textWrapper}>
                <Typography variant='h1'>
                    Login
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
                />
                <Input
                    type='password'
                    label=''
                    placeholder='Enter Your password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                />
                <Button
                    type='submit'
                    text='LogIn'
                    variant='primary'
                />
            </div>
        </form>
    );
};

export default Login;
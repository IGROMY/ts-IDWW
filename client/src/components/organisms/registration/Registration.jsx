import React from 'react';
import styles from './Registration.module.scss'
import Typography from "../../atoms/typography/Typography.jsx";
import Text from "../../atoms/text/Text.jsx";
import Input from "../../atoms/input/Input.jsx";
import Button from "../../atoms/button/Button.jsx";
import useRegistration from "../../../store/useRegistration.ts";
const Registration = () => {
    const {email, password, setField, register, name, username} = useRegistration()
    const handleChange = (e) => {
        const {value, name} = e.target
        setField(name, value)
    }
    const handleSubmit = (e) => {
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
                    type='text'
                    label=''
                    placeholder='Enter Your Full Name'
                    name='name'
                    value={name}
                    onChange={handleChange}
                />
                <Input
                    type='text'
                    label=''
                    placeholder='Enter Your Username'
                    name='username'
                    value={username}
                    onChange={handleChange}
                />
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
                    text='Register'
                    variant='primary'
                />
            </div>
        </form>
    );
};

export default Registration;
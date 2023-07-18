import React from 'react';
import { ReactSVG } from 'react-svg';
import styles from './ClientLogo.module.scss'

const ClientLogo = () => {
    return (
        <div className={styles.container}>
            <ReactSVG src="/assets/icons/01modernHome.svg"/>
            <ReactSVG src="/assets/icons/02styleVintageInterior.svg"/>
            <ReactSVG src="/assets/icons/03brand.svg"/>
            <ReactSVG src="/assets/icons/04natureHome.svg"/>
            <ReactSVG src="/assets/icons/05classicDesignStudio.svg"/>
        </div>
    );
};

export default ClientLogo;

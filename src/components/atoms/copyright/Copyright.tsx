import React from 'react';
import styles from './Copyright.module.scss'
import Text from "../../atoms/text/Text";
const Copyright = () => {
    return (
        <div className={styles.copyright}>
            <Text variant='normal'>Copyright © Interno | Designed by Victorflow Templates - Powered by Webflow</Text>
        </div>
    );
};

export default Copyright;
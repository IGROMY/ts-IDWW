import {FC} from 'react';
import styles from './Layout.module.scss'
import {ILayoutProps} from './Layout.types'
import Header from "../../molecules/header/Header";
import Footer from "../../molecules/footer/Footer";

const Layout:FC<ILayoutProps> = ({children}) => {
    return (
        <div className={styles.layout}>
            <Header/>
            {children}
            <Footer/>
        </div>
    );
};

export default Layout;

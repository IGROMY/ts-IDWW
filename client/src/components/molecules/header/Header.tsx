
import styles from './Header.module.scss'
import logo from '../../../assets/icons/Logo.svg'
import search from '../../../assets/icons/search.svg'
import Text from "../../atoms/text/Text";
import SVG from "react-inlinesvg";
import {FC} from "react";

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <SVG src={logo}/>
            <nav className={styles.navItems}>
                <Text variant='normal'>Home</Text>
                <Text variant='normal'>Pages</Text>
                <Text variant='normal'>Services</Text>
                <Text variant='normal'>Project</Text>
                <Text variant='normal'>Blog</Text>
                <Text variant='normal'>Contact</Text>
                <SVG src={search}/>
            </nav>
        </header>
    );
};

export default Header;
import styles from './ClientLogo.module.scss'
import logo1 from  '../../../assets/icons/01modernHome.svg'
import logo2 from  '../../../assets/icons/02styleVintageInterior.svg'
import logo3 from  '../../../assets/icons/03brand.svg'
import logo4 from  '../../../assets/icons/04natureHome.svg'
import logo5 from  '../../../assets/icons/05classicDesignStudio.svg'
import SVG from "react-inlinesvg";

const ClientLogo = () => {
    return (
        <div className={styles.container}>
            <SVG src={logo1}/>
            <SVG src={logo2}/>
            <SVG src={logo3}/>
            <SVG src={logo4}/>
            <SVG src={logo5}/>
        </div>
    );
};

export default ClientLogo;

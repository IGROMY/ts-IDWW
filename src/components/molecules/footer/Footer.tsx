import styles from './Footer.module.scss'
import logo from '../../../assets/icons/Logo.svg'
import fb from '../../../assets/icons/fb.svg'
import twitter from '../../../assets/icons/tvit.svg'
import linkedin from '../../../assets/icons/ln.svg'
import instagram from '../../../assets/icons/inst.svg'
import Text from "../../atoms/text/Text";
import Typography from "../../atoms/typography/Typography";
import Copyright from "../../atoms/copyright/Copyright";
import SVG from "react-inlinesvg"
import {FC} from "react";


const Footer: FC = () => {
    return (
        <footer>
            <div className={styles.container}>
                <div className={styles.interno}>
                    <div className={styles.logo}>
                        <SVG src={logo}/>
                    </div>
                    <div className={styles.text}>
                        <Text variant='normal'>
                            It is a long established fact that a reader will be distracted lookings.
                        </Text>
                    </div>
                    <div className={styles.icons}>
                            <div><a><SVG src={fb}/></a></div>
                            <div><a><SVG src={twitter}/></a></div>
                            <div><a><SVG src={linkedin}/></a></div>
                            <div><a><SVG src={instagram}/></a></div>
                    </div>
                </div>
                <div className={styles.pagesAndServicesWrapper}>
                    <nav className={styles.navItems}>
                        <Typography variant='h3'>
                            Pages
                        </Typography>
                        <Text variant='normal'>About Us</Text>
                        <Text variant='normal'>Our Projects</Text>
                        <Text variant='normal'>Our Team</Text>
                        <Text variant='normal'>Contact Us</Text>
                        <Text variant='normal'>Services</Text>
                    </nav>
                </div>
                <div className={styles.pagesAndServicesWrapper}>
                    <nav className={styles.navItems}>
                        <Typography variant='h3'>
                            Services
                        </Typography>
                        <Text variant='normal'>Kitchen</Text>
                        <Text variant='normal'>Living Area</Text>
                        <Text variant='normal'>Bathroom</Text>
                        <Text variant='normal'>Dining Hall</Text>
                        <Text variant='normal'>Bedroom</Text>
                    </nav>
                </div>
                <div className={styles.contactWrapper}>
                    <Typography variant='h3'>
                        Contact
                    </Typography>
                    <div className={styles.textBox}>
                        <Text variant='normal'>
                            55 East Birchwood Ave. Brooklyn, New York 11201
                        </Text>
                        <Text variant='normal'>
                            contact@interno.com
                        </Text>
                        <Text variant='normal'>
                            (123) 456 - 7890
                        </Text>
                    </div>
                </div>
            </div>
            <Copyright/>
        </footer>
    );
};

export default Footer;
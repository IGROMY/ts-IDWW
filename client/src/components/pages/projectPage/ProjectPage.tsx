import {FC} from 'react';
import styles from './ProjectPage.module.scss'
import PagesHeading from "../../molecules/pagesHeading/PagesHeading.jsx";
import project from "../../../assets/images/projeck.png";

//import ellipse from "../../../assets/icons/EllipsePagination.svg";
//import ellipseArrow from "../../../assets/icons/ellipseArrow.svg";

const ProjectPage:FC = () => {
    return (
        <div className={styles.container}>
            <PagesHeading
                backgroundImg={project}
                subscribe='Home / Project'
                name='Our Project'
            />
            <div className={styles.projects}>
                <div className={styles.categories}>

                </div>
                    {/*<div className={styles.project}>*/}
                    {/*    <div>*/}
                    {/*        <ProjectCardBig*/}
                    {/*            image={photo1}*/}
                    {/*            name='Minimal Bedroom'*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*    <div>*/}
                    {/*        <ProjectCardLittle*/}
                    {/*            image={photo3}*/}
                    {/*            name='Minimal Bedroom'*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*    <div>*/}
                    {/*        <ProjectCardBig*/}
                    {/*            image={photo5}*/}
                    {/*            name='Classic Minimal Bedroom'*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*    <div>*/}
                    {/*        <ProjectCardLittle*/}
                    {/*            image={photo7}*/}
                    {/*            name='Modern Bedroom'*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*    <div>*/}
                    {/*        <ProjectCardLittle*/}
                    {/*            image={photo2}*/}
                    {/*            name='Minimal Bedroom table'*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*    <div>*/}
                    {/*        <ProjectCardBig*/}
                    {/*            image={photo4}*/}
                    {/*            name='System Table'*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*    <div>*/}
                    {/*        <ProjectCardLittle*/}
                    {/*            image={photo6}*/}
                    {/*            name='Modern Bedroom'*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*    <div>*/}
                    {/*        <ProjectCardLittle*/}
                    {/*            image={photo8}*/}
                    {/*            name='Modern Bedroom'*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                {/*<div className={styles.pagination}>*/}
                {/*    <a href={href}><SVG src={ellipse}/></a>*/}
                {/*    <a href={href}><SVG src={ellipse}/></a>*/}
                {/*    <a href={href}><SVG src={ellipse}/></a>*/}
                {/*    <a href={href}><SVG src={ellipseArrow}/></a>*/}
                {/*</div>*/}
            </div>

        </div>
    );
};

export default ProjectPage;

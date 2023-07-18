import React from 'react';
import styles from './ProjectPage.module.scss'
import PagesHeading from "../../molecules/pagesHeading/PagesHeading.jsx";
import project from "../../../assets/images/projeck.png";
import ProjectCardBig from "../../molecules/projectCardBig/projectCardBig.jsx";
import photo1 from "../../../assets/images/minimalBedroomBig.png"
import photo2 from "../../../assets/images/minimalBedroomSmall.png"
import photo3 from "../../../assets/images/classicMinimalBedroom.png"
import photo4 from "../../../assets/images/modernBedroomBig.png"
import photo5 from "../../../assets/images/minimalBedroomTaible.png"
import photo6 from "../../../assets/images/systemTable.png"
import photo7 from "../../../assets/images/modernBedroomSmall.png"
import photo8 from "../../../assets/images/modBedroomSmall.png"

import ProjectCardLittle from "../../molecules/projectCardLittle/projectCardLittle.jsx";
import aboutUS from "../../../assets/images/aboutUs.png";
import SVG from "react-inlinesvg";
import ellipse from "../../../assets/icons/EllipsePagination.svg";
import ellipseArrow from "../../../assets/icons/ellipseArrow.svg";

const ProjectPage = ({href}) => {
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
                    <div className={styles.project}>
                        <div>
                            <ProjectCardBig
                                image={photo1}
                                name='Minimal Bedroom'
                            />
                        </div>
                        <div>
                            <ProjectCardLittle
                                image={photo3}
                                name='Minimal Bedroom'
                            />
                        </div>
                        <div>
                            <ProjectCardBig
                                image={photo5}
                                name='Classic Minimal Bedroom'
                            />
                        </div>
                        <div>
                            <ProjectCardLittle
                                image={photo7}
                                name='Modern Bedroom'
                            />
                        </div>
                        <div>
                            <ProjectCardLittle
                                image={photo2}
                                name='Minimal Bedroom table'
                            />
                        </div>
                        <div>
                            <ProjectCardBig
                                image={photo4}
                                name='System Table'
                            />
                        </div>
                        <div>
                            <ProjectCardLittle
                                image={photo6}
                                name='Modern Bedroom'
                            />
                        </div>
                        <div>
                            <ProjectCardLittle
                                image={photo8}
                                name='Modern Bedroom'
                            />
                        </div>
                    </div>
                <div className={styles.pagination}>
                    <a href={href}><SVG src={ellipse}/></a>
                    <a href={href}><SVG src={ellipse}/></a>
                    <a href={href}><SVG src={ellipse}/></a>
                    <a href={href}><SVG src={ellipseArrow}/></a>
                </div>
            </div>

        </div>
    );
};

export default ProjectPage;

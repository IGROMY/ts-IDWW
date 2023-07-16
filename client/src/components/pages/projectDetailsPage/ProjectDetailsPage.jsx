import React from 'react';
import styles from './ProjectDetailsPage.module.scss'
import Typography from "../../atoms/typography/Typography.jsx";
import Text from "../../atoms/text/Text.jsx";
import photo from "../../../assets/images/projectDetails.png"
const ProjectDetailsPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <div className={styles.detail}>
                    <div className={styles.frame}>
                        <div className={styles.header}>
                            <Typography variant='h3'>
                                Client
                            </Typography>
                            <Typography variant='h3'>
                                Category
                            </Typography>
                            <Typography variant='h3'>
                                Tags
                            </Typography>
                            <Typography variant='h3'>
                                Date
                            </Typography>
                            <Typography variant='h3'>
                                Link
                            </Typography>
                        </div>
                        <div className={styles.description}>

                            <Text variant='normal'>
                                Your client name
                            </Text>
                            <Text variant='normal'>
                                Interiors
                            </Text>
                            <Text variant='normal'>
                                interior, Home
                            </Text>
                            <Text variant='normal'>
                                Date 23.02.2022
                            </Text>
                            <Text variant='normal'>
                                Link example.com
                            </Text>
                        </div>
                    </div>
                </div>
                <div className={styles.content}>
                    <Typography variant='h1'>
                        Minimal Look Bedrooms
                    </Typography>
                    <div className={styles.textWrapper}>
                        <Text variant='normal'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Aliquamsem vitae turpis dignissim maximus.
                            Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim.
                            Praesent at nibh in mi fringilla mattis.
                            Phasellus ut dolor odio.
                            Aenean in the ipsum vel lectus bibendum commodo.
                        </Text>
                    </div>
                    <div className={styles.textWrapper}>
                        <Text variant='normal'>
                            In nec sem suscipit, convallis leo vitae, lacinia nibh.
                            Cras amet tellus lectus.
                            Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu.
                            Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis.
                            Donec ultrices tellus vitae iaculisvd porta.
                            Proin tincidunt ligula id purus porttitor.
                        </Text>
                    </div>
                </div>
            </div>

            <div className={styles.image}>
                <img className={styles.img} alt='photo' src={photo}/>

            </div>
        </div>
    );
};

export default ProjectDetailsPage;
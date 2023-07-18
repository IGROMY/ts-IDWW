import React from 'react';
import styles from './ BlogDetailsPage.module.scss'
import PagesHeading from "../../molecules/pagesHeading/PagesHeading.jsx";
import blogDetailsBg from '../../../assets/images/PhotoBlogDetalesBg.png'
const BlogDetailsPage = () => {
    return (
        <div>
            <PagesHeading
            backgroundImg={blogDetailsBg}
            subscribe='Home / Blog'
            name='Articles & News'
            />
        </div>
    );
};

export default BlogDetailsPage;
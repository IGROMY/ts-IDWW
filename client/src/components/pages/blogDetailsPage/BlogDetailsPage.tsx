import {FC} from "react";
import styles from "./BlogDetailsPage.module.scss"
import PagesHeading from "../../molecules/pagesHeading/PagesHeading.tsx";
import blogDetailsBg from '../../../assets/images/PhotoBlogDetalesBg.png'

const BlogDetailsPage: FC = () => {
    return (
        <div className={styles.container}>
            <PagesHeading
            backgroundImg={blogDetailsBg}
            subscribe='Home / Blog'
            name='Articles & News'
            />
        </div>
    );
};

export default BlogDetailsPage;

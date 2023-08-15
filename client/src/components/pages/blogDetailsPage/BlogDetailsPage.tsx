import {FC} from 'react';
import PagesHeading from "../../molecules/pagesHeading/PagesHeading";
import blogDetailsBg from '../../../assets/images/PhotoBlogDetalesBg.png'
const BlogDetailsPage:FC = () => {
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

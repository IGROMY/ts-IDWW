import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from "../components/pages/homePage/HomePage";
import ArticleView from "../components/organisms/articleView/ArticleView";
import AboutPage from "../components/pages/aboutPage/AboutPage";
import BlogDetailsPage from "../components/pages/blogDetailsPage/BlogDetailsPage";
import BlogPage from "../components/pages/blogPage/BlogPage";
import ChangelogPage from "../components/pages/changelogPage/ChangelogPage";
import ContactUsPage from "../components/pages/contactUsPage/ContactUsPage";
import FAQPage from "../components/pages/faqPage/FAQPage";
import LicencePage from "../components/pages/licencePage/LicencePage";
import Page404 from "../components/pages/page404/Page404";
import RegistrationPage from "../components/pages/registrationPage/RegistrationPage";
import PricingPage from "../components/pages/pricingPage/PricingPage";
import ProjectDetailsPage from "../components/pages/projectDetailsPage/ProjectDetailsPage";
import ProjectPage from "../components/pages/projectPage/ProjectPage";
import ServiceSinglePage from "../components/pages/serviceSinglePage/ServiceSinglePage";
import ServicesPage from "../components/pages/servicesPage/ServicesPage";
import TeamPage from "../components/pages/teamPage/TeamPage";
import TeamSinglePage from "../components/pages/teamSinglePage/TeamSinglePage";
import { paths } from "./constants/paths.ts";
import LoginPage from "../components/pages/loginPage/LoginPage";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path={paths.HOME} element={<HomePage/>} />
                <Route path={paths.CREATE_ARTICLE} element={<ArticleView/>}/>
                <Route path={paths.ABOUT} element={<AboutPage/>}/>
                <Route path={paths.BLOG_DETAILS} element={<BlogDetailsPage/>}/>
                <Route path={paths.BLOG} element={<BlogPage/>}/>
                <Route path={paths.CHANGELOG} element={<ChangelogPage/>}/>
                <Route path={paths.CONTACT_US} element={<ContactUsPage/>}/>
                <Route path={paths.FAQ} element={<FAQPage/>}/>
                <Route path={paths.LICENCE} element={<LicencePage/>}/>
                <Route path={paths.PAGE_404} element={<Page404/>}/>
                <Route path={paths.REGISTRATION} element={<RegistrationPage/>}/>
                <Route path={paths.LOGIN} element={<LoginPage/>}/>
                <Route path={paths.PRICING} element={<PricingPage/>}/>
                <Route path={paths.PROJECT_DETAILS} element={<ProjectDetailsPage/>}/>
                <Route path={paths.PROJECT} element={<ProjectPage/>}/>
                <Route path={paths.SERVICE_SINGLE} element={<ServiceSinglePage/>}/>
                <Route path={paths.SERVICES} element={<ServicesPage/>}/>
                <Route path={paths.TEAM} element={<TeamPage/>}/>
                <Route path={paths.TEAM_SINGLE} element={<TeamSinglePage/>}/>
                <Route path='*' element={ <Page404/>}/>
            </Routes>
        </Router>
    )
}

export default AppRoutes;

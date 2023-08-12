import { BrowserRouter as Router, Route, Routes, Outlet, useNavigate } from 'react-router-dom';
import HomePage from "../components/pages/homePage/HomePage.js";
import ArticleView from "../components/organisms/articleView/ArticleView.js";
import AboutPage from "../components/pages/aboutPage/AboutPage.js";
import BlogDetailsPage from "../components/pages/blogDetailsPage/BlogDetailsPage.js";
import BlogPage from "../components/pages/blogPage/BlogPage.js";
import ChangelogPage from "../components/pages/changelogPage/ChangelogPage.js";
import ContactUsPage from "../components/pages/contactUsPage/ContactUsPage.js";
import FAQPage from "../components/pages/faqPage/FAQPage.js";
import LicencePage from "../components/pages/licencePage/LicencePage.js";
import Page404 from "../components/pages/page404/Page404.js";
import RegistrationPage from "../components/pages/registrationPage/RegistrationPage.js";
import PricingPage from "../components/pages/pricingPage/PricingPage.js";
import ProjectDetailsPage from "../components/pages/projectDetailsPage/ProjectDetailsPage.js";
import ProjectPage from "../components/pages/projectPage/ProjectPage.js";
import ServiceSinglePage from "../components/pages/serviceSinglePage/ServiceSinglePage.js";
import ServicesPage from "../components/pages/servicesPage/ServicesPage.js";
import TeamPage from "../components/pages/teamPage/TeamPage.js";
import TeamSinglePage from "../components/pages/teamSinglePage/TeamSinglePage.js";
import { paths } from "./constants/paths.ts";
import LoginPage from "../components/pages/loginPage/LoginPage.js";

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

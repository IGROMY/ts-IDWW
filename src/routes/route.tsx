import { BrowserRouter as Router, Route, Routes, Outlet, useNavigate } from 'react-router-dom';
import HomePage from "../components/pages/homePage/HomePage.jsx";
import ArticleView from "../components/organisms/articleView/ArticleView.jsx";
import AboutPage from "../components/pages/aboutPage/AboutPage.jsx";
import BlogDetailsPage from "../components/pages/blogDetailsPage/BlogDetailsPage.jsx";
import BlogPage from "../components/pages/blogPage/BlogPage.jsx";
import ChangelogPage from "../components/pages/changelogPage/ChangelogPage.jsx";
import ContactUsPage from "../components/pages/contactUsPage/ContactUsPage.jsx";
import FAQPage from "../components/pages/faqPage/FAQPage.jsx";
import LicencePage from "../components/pages/licencePage/LicencePage.jsx";
import Page404 from "../components/pages/page404/Page404.jsx";
import RegistrationPage from "../components/pages/registrationPage/RegistrationPage.jsx";
import PricingPage from "../components/pages/pricingPage/PricingPage.jsx";
import ProjectDetailsPage from "../components/pages/projectDetailsPage/ProjectDetailsPage.jsx";
import ProjectPage from "../components/pages/projectPage/ProjectPage.jsx";
import ServiceSinglePage from "../components/pages/serviceSinglePage/ServiceSinglePage.jsx";
import ServicesPage from "../components/pages/servicesPage/ServicesPage.jsx";
import TeamPage from "../components/pages/teamPage/TeamPage.jsx";
import TeamSinglePage from "../components/pages/teamSinglePage/TeamSinglePage.jsx";
import {paths} from "./constants/paths.ts";
import LoginPage from "../components/pages/loginPage/LoginPage.jsx";




const AppRoutes = () => {
        const navigate = useNavigate()
    return (
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
    )
}

export default AppRoutes;
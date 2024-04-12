import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import LandingPage from "pages/LandingPage";
import BlogDetails from "pages/BlogDetails";
import ContactUs from "pages/ContactUs";
import BloggerDetails from "pages/BloggerDetails";
import AboutUs from "pages/AboutUs.jsx";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "kamboj-dashboard",
     element: <Home /> },
    { path: "*",
      element: <NotFound />
    },  
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "Blogs",
      element: <BlogDetails />,
    },
    {
      path: "contactus",
      element: <ContactUs />,
    },
    {
      path: "blogger",
      element: <BloggerDetails />,
    },
    ,
    {
      path: "AboutUs",
      element: <AboutUs />,
    },
  ]);

  return element;
};

export default ProjectRoutes;

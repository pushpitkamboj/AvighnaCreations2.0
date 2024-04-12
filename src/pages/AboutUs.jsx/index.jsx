import React from "react";
import { Helmet } from "react-helmet";
import { Button, TextArea, Input, Text, Img, Heading } from "../../components";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import Header from "../../components/Header"


const AboutUs = () => {
  return (
    <div>
      <Helmet>
        <title>Pushpit's Application2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[95px] bg-white-A700"></div>
      <Header className="flex flex-row md:flex-col justify-between items-center w-full p-6 md:gap-10 sm:p-5 bg-white-A700" />


      <Footer className="flex justify-center items-center w-full mt-[100px] p-[33px] sm:p-5 bg-gray-600_01" />
    </div> 
  )
}

export default AboutUs;
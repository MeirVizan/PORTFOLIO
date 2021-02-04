/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useObserver } from "mobx-react-lite";


import ContactUs from "../Sections/ContactUs"
import MyInterests from "../Sections/MyInterests";
import References from "../Sections/References";
import TextSection from "../Sections/TextSection";
import AboutScreen from "../Sections/About";
import Header from "../Layout/Header";
import SkillsScreen from "../Sections/Skills";
import PortfolioScreen from "../Sections/Portfolio";
import ExperienceScreen from "../Sections/Experience";
import EducationScreen from "../Sections/Education";
import ClientsScreen from "../Sections/Clients";



const  HomeScreen  = () => {

    
    return useObserver(() =>
    <>
    <Header/>
    <div className="wapper">
        <AboutScreen/>
        <ClientsScreen/>
        {/* <SkillsScreen/> */}
        <PortfolioScreen/>
        <ExperienceScreen/>
        <EducationScreen/>
        {/* <TextSection/> */}
        {/* <References/> */}
        <MyInterests/>
        {/* <ContactUs/> */}
    </div>
   </>     
    )
}

export default HomeScreen
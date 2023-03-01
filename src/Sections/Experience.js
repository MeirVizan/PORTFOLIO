/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState,useEffect } from "react";
import { useObserver } from "mobx-react-lite";



import GeneralStore  from "../Stores/GeneralStore";
import $ from 'jquery';
import methods from "../Helper/methods";
import '../styles/experience.scss';

const general =  GeneralStore;

const listExperience = [
    {
        name: "Cover",
        subject: "Full Stack Developer ",
        years:"2021 - 2023",
        description: `Full responsibility for development of an organizational CRM platform to help sales 
        agents, managers, customer support and analysts manage real-time business data`
    },
    {
        name: "Bright Say",
        subject: "Full Stack Developer ",
        years:"2020 - ",
        description: `for a new web application startup in the field of team collaboration and group survey-building`
    },
    {
        name: "Ministry of Education",
        subject: "BACk-OFFICE",
        years:"2019 - 2020",
        description: `National Matriculation Exam supervisor for Ministry of Education, in charge of printing and processing exams, responsible for handling sensitive materials.`
    },
]

const  ExperienceScreen  = () => {

    useEffect(()=>{
       let timelines = $("#experience .timeline-box")
       console.log(timelines);
       window.addEventListener('resize', (()=>{
        methods.timeLine(timelines,"#experience .timeline-inner","#experience .timeline-bar")
       }));

       methods.timeLine(timelines,"#experience .timeline-inner","#experience .timeline-bar")
       })

    return useObserver(() =>
    <section id="experience" className="section section-experience">
        <h2 className="section-title">Work Experience</h2>
        <div className="timeline">
            <div className="timeline-inner">
            <div className="timeline-bar"></div>    
            {listExperience.map(item=>
                <div className="timeline-box">
                   <span className="dot"></span>
                   <div className="timeline-box-inner">
                   <span className="arrow"></span>
                   <div className="date">{item.years}</div>
                   <h3>{item.name}</h3>
                   <h4>{item.subject}</h4>
                   <p>{item.description}</p>
                   </div>
               </div>
            )}      
         

        </div>
        </div>
    </section>
    )
}

export default ExperienceScreen
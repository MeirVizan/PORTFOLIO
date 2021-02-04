/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState,useEffect } from "react";
import { useObserver } from "mobx-react-lite";
import $ from 'jquery';



import GeneralStore  from "../Stores/GeneralStore";
import methods from "../Helper/methods";

const general =  GeneralStore;

const listEducation = [
    {
        name: "Hadassah Academic College",
        subject: "BSc Computer Science",
        years:"2017 - 2020"
    },
    {
        name: "Ein Hemed",
        subject: "Web Developer",
        years:"2014 - 2015"
    }
]

const  EducationScreen  = () => {

    useEffect(()=>{
        let timelines = $("#education .timeline-box")
        console.log(timelines);
        window.addEventListener('resize', (()=>{
            methods.timeLine(timelines,"#education .timeline-inner","#education .timeline-bar")
        }));
        methods.timeLine(timelines,"#education .timeline-inner","#education .timeline-bar")
    })


    return useObserver(() =>
    <section id="education" className="section section-education">
        <h2 className="section-title">Education</h2>
        <div className="timeline">
            <div className="timeline-inner">
            <div className="timeline-bar"></div>          
            
           {listEducation.map((item)=>
            <div className="timeline-box timeline-box-compact">
            <span className="dot"></span>
            <div className="timeline-box-inner">
                <span className="arrow"></span>
                <div className="date"><span>{item.years}</span></div>
                <h3>{item.name}</h3>
                <h4>{item.subject}</h4>
            </div> 
        </div> 
           )}
           
        </div>
        </div>
    </section>
    )
}

export default EducationScreen
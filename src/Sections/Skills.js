/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState,useEffect } from "react";
import { useObserver } from "mobx-react-lite";

import '../styles/skills.scss';


import GeneralStore  from "../Stores/GeneralStore";

const general =  GeneralStore;

const listKnowledge = [
    // {
    //     name: "wordpress",
    //     value: 50
      
    // },{
    //     name: "React",
    //     value: 90
      
    // },{
    //     name: "NodeJs",
    //     value: 80
      
    // },{
    //     name: "React Native",
    //     value: 85
      
    // },{
    //     name: "Html 5",
    //     value: 95
      
    // },{
    //     name: "Css3",
    //     value: 95
      
    // },{
    //     name: "MongoDB",
    //     value: 75
      
    // },
    
]
const  SkillsScreen  = () => {
    return useObserver(() =>
      <section id="skills" className="section section-skills">
        <h2 className="section-title">Professional Skills</h2>
        <div className="section-box">
            {listKnowledge.map(item=>
             <div className="row width-box">
             <div className="progress-bar">
                 <div className="row bar-data">
                     <span className="bar-title">{item.name}</span>
                     <span className="bar-value">{item.value}%</span>
                 </div>
                 <div className="bar-line">
                     <span className="bar-fill" data-width={`${item.value}%`} style={{width: `${item.value}%`}}></span>                    
                 </div>
             </div>
         </div>
            )}
           
           
        </div>
    </section>
    )
}

export default SkillsScreen
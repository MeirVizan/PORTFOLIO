/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState,useEffect } from "react";
import { useObserver } from "mobx-react-lite";
import { LinkedIn , GitHub, Facebook} from '@material-ui/icons';
import '../styles/about.scss';


import GeneralStore  from "../Stores/GeneralStore";


const general =  GeneralStore;


const  AboutScreen  = () => {
    return useObserver(() =>
    <>
    <div id='about'>
    <div className="card">
    <div className="inner-box">
        <div className="cover-img">
            <img src="https://rscard.px-lab.com/html/img/uploads/rs-photo-v1.jpg"/>
        </div>
        <div className="info">
            <div className="info-header">
                <div className="profile-preword">
                    <span>Hello</span>
                </div>
                <h1><span>I'm</span> Meir Vizan</h1>
                <h2>Software Developer</h2>
            </div>
            <ul className="profile-list">
                <li>
                     <strong>AGE</strong>
                     <span>27</span>
                 </li>
                 <li>
                     <strong>E-MAIL</strong>
                     <span>meir15102@gmail.com</span>
                 </li>
                 <li>
                     <strong>PHONE</strong>
                     <span>058-4193521</span>
                 </li>
            </ul>
        </div>
    </div>
    <div className="social">
        <div className="social-item center">
            <a className='item center' href='https://www.linkedin.com/in/meir-vizan-a1662814b/' target="_blank">
            <LinkedIn style={{ color: 'white' }}/>
           
            </a></div>
        <div className="social-item center"><a className='item center' href='https://github.com/MeirVizan' target="_blank">
            <GitHub style={{ color: 'white' }} />
           
            </a></div>
        <div className="social-item center"><a className='item center' href=''>
            <Facebook style={{ color: 'white'}}/>
           
            </a></div>

    </div>
</div>
<section className="about">
       <a href="#" className="btn-border ripple">
        Download Resume
       </a>
   <p>
   I am a Computer Science graduate looking for a junior position. I am confident my
motivation, natural curiosity, and independent-learning skills will help me excel at any
task and make me a valuable addition to any development team
   
   </p>
</section>
</div>
        </>
    )
}

export default AboutScreen
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState,useEffect } from "react";
import { useObserver } from "mobx-react-lite";
// import { LinkedIn , GitHub, Facebook} from '@material-ui/icons';
import '../styles/about.scss';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GeneralStore  from "../Stores/GeneralStore";


const general =  GeneralStore;


const  AboutScreen  = () => {
    return useObserver(() =>
    <>
    <div id='about'>
    <div className="card">
    <div className="inner-box">
        <div className="cover-img">
            <img src={process.env.PUBLIC_URL + '/img/IMG_2251.jpg'} />
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
                <LinkedInIcon style={{ color: 'white' }}/>
            
                </a>
            </div>
            <div className="social-item center"><a className='item center' href='https://github.com/MeirVizan' target="_blank">
                <GitHubIcon style={{ color: 'white' }} />
                </a>
            </div>
            <div className="social-item center"><a className='item center' href='https://www.facebook.com/profile.php?id=100009241595537'>
                <FacebookIcon style={{ color: 'white'}}/>
                </a>
            </div>
            <div className="social-item center"><a className='item center' href='https://www.instagram.com/meirvizan/'>
                <InstagramIcon style={{ color: 'white'}}/>
                </a>
            </div>

    </div>
</div>
<section className="about">
       {/* <a href="#" className="btn-border ripple">
        Download Resume
       </a> */}
   <p style={{fontSize: '20px'}}>
   My name is Meir Vizan and I am a Full Stack Developer with experience in building CRM & BI web applications for businesses. Currently, I am working as a Full Stack Developer at Cover Ltd., where I am responsible for developing an organizational CRM platform to help sales agents, managers, customer support, and analysts manage real-time business data. I have experience with client-side development using ReactJS, HTML, and CSS, server-side development using NodeJS, and database management using MySQL and MongoDB. I am highly independent, learn quickly, work well in a team, and can manage multiple tasks at once.
   
   </p>
</section>
</div>
        </>
    )
}

export default AboutScreen
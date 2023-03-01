/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState,useEffect } from "react";
import { useObserver } from "mobx-react-lite";
import $ from 'jquery';



import GeneralStore  from "../Stores/GeneralStore";
import methods from "../Helper/methods";
import Slick from "../Components/Slick";

const general =  GeneralStore;

const logos = [
 {
     name: "ReactJs",
     image: "https://www.fullstackpython.com/img/logos/react.png",
},{
    name: "Nodejs",
    image: "https://miro.medium.com/max/2560/1*MuVcoMPyJcq8G4qf5s3HGQ.png",
},{
    name:'Python',
    image:'https://1000logos.net/wp-content/uploads/2020/08/Python-Logo.png'
},{
    name: "MySQL",
    image:'https://www.simplilearn.com/ice9/free_resources_article_thumb/difference_between_sql_and_mysql.jpg'
},{
    name: "mongodb",
    image: "https://internet-israel.com/wp-content/uploads/2014/09/mongodb-logo-1200x600.png",
},{
    name:'CRM',
    image:'https://www.kanhasoft.com/assets/images/crm-solutions.png'
},{
    name:'BI Developer',
    image:'https://pbs.twimg.com/profile_images/1160848505654697986/KlDXb8Gk_400x400.jpg'

},{
    name:'Pixel Facebook',
    image:'https://enquete-app.com/images/posts/facebook-pixel/timeline-fcb0def8.png'
}
]

const  ClientsScreen  = () => {

    
    useEffect(()=>{
        let timelines = $("#education .timeline-box")
        console.log(timelines);
        
        methods.timeLine(timelines,"#education .timeline-inner","#education .timeline-bar")
        })

        const settings = {   dots: false,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
             
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                  }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
              ]}
    return useObserver(() =>
    <section id="clients" >
                    <Slick settings={settings} nameClass="section section-clients">
                    {logos.map(item=>
               <div className="client-logo">
                    <img src={item.image} title={item.name} alt={item.name}  />
                </div>
                )}
                    </Slick>
             
        
    </section>
    )
}

export default ClientsScreen
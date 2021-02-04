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
        name: "Nodejs",
        image: "https://miro.medium.com/max/2560/1*MuVcoMPyJcq8G4qf5s3HGQ.png",
},{
    name: "ReactJs",
    image: "https://www.fullstackpython.com/img/logos/react.png",
},{
    name: "mongodb",
    image: "https://internet-israel.com/wp-content/uploads/2014/09/mongodb-logo-1200x600.png",
},{
    name: "JQuery",
    image: "https://upload.wikimedia.org/wikipedia/he/4/42/JQuery_logo.png"
},
{
    name: "angular js",
    image: "https://rscard.px-lab.com/html/img/uploads/logos/logo-angularjs.png",
},{
    name: "SQL",
    image: "https://i.pinimg.com/originals/db/76/72/db767259a291c24ce95816fac91fdd94.png",
},{
    name: "C#",
    image: "https://pluralsight.imgix.net/paths/path-icons/csharp-e7b8fcd4ce.png",
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
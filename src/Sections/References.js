/* eslint-disable react-hooks/exhaustive-deps */
import { useObserver } from "mobx-react-lite";
import React, { useState,useEffect } from "react";
import { FormatQuote} from '@material-ui/icons';



import GeneralStore  from "../Stores/GeneralStore";

import Slick from "../Components/Slick";
const general =  GeneralStore;

const listEducation = [
    // {
    //     name: "Alexander Jokovich",
    //     title: "Modern LLC , HR",
    //     image: "https://rscard.px-lab.com/html/img/uploads/rs-avatar-60x60.jpg",
    //     speech:  `I confirm that New Company Ltd has been a customer of ours since 1998, during which time they have always made payments reliably,
    //     in full and on time.`,
      
    // }, {
    //     name: "Alexander Jokovich",
    //     title: "Modern LLC , HR",
    //     image: "https://rscard.px-lab.com/html/img/uploads/rs-avatar-60x60.jpg",
    //     speech:  `I confirm that New Company Ltd has been a customer of ours since 1998, during which time they have always made payments reliably,
    //     in full and on time.`,
      
    // }, {
    //     name: "Alexander Jokovich",
    //     title: "Modern LLC , HR",
    //     image: "https://rscard.px-lab.com/html/img/uploads/rs-avatar-60x60.jpg",
    //     speech:  `I confirm that New Company Ltd has been a customer of ours since 1998, during which time they have always made payments reliably,
    //     in full and on time.`,
      
    // }, {
    //     name: "Alexander Jokovich",
    //     title: "Modern LLC , HR",
    //     image: "https://rscard.px-lab.com/html/img/uploads/rs-avatar-60x60.jpg",
    //     speech:  `I confirm that New Company Ltd has been a customer of ours since 1998, during which time they have always made payments reliably,
    //     in full and on time.`,
      
    // },
    
]

const References = () => {



    return useObserver(() =>
    <>
        
    <section id="references" className="section section-references">
        <h2 className="section-title">References</h2>
        <div className="section-box">
            <Slick nameClass="row list-references">   {listEducation.map(item=>
                        <div className="ref-box">
                        <div className="person-speech">
                            <p><FormatQuote/>{item.speech}</p>
                        </div>
                        <div className="person-info clearfix">
                            <img className="person-img" src={item.image} alt="Headshot" />
                            <div className="person-name-title">
                                <span className="person-name">{item.name}</span>
                                <span className="person-title">{item.title}</span>
                            </div>
                        </div>
                    </div>
                    )}   
            </Slick>  
            
        </div>
    
    </section>
    </>
    )
}

export default References
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState,useEffect } from "react";
import { useObserver } from "mobx-react-lite";

import '../styles/portfolio.scss';


import GeneralStore  from "../Stores/GeneralStore";

const general =  GeneralStore;

const myPortfolio = [
    // {   name:"vegannation",
    //     image: "../vegannation.png",
    //     link:"https://vegannation.io/"
    // }, 
    // {   name:"vegannBetterTraderation",
    //         image: "../BetterTrader.png",
    //         link:"https://bettertrader.co/"
    //     }, 
    //     {   
    //      name:"allup",
    //         image: "../allup.PNG",
    //         link:"https://allup.netlify.app/"

    //     }
]


const  PortfolioScreen  = () => {

    return useObserver(() =>
    <section id="portfolio" className="section section-portfolio">
        <h2 className="section-title">Portfolio</h2>
        {/* <div className="filter">
            <div className="filter-inner">
                <div className="filter-btn-group">
                    <button data-filter="*" className="active">All</button>
                    <button data-filter=".photography">Photography</button>
                    <button data-filter=".nature">Nature</button>
                </div>
                <div className="filter-bar">
                     <span className="filter-bar-line" style={{left: 0, width: 35}}></span>
                </div>

            </div>
        </div> */}
        <div className="images-grid">
            <div className="big-image">
                {myPortfolio.map(item=>
                <div className="wapper-image">
                    <a href={item.link} target="_blank">
                        <img src={item.image} alt={item.name} className="image-portfolio"/>
                        </a>
                </div>
                )}
                
                {/* <div className="wapper-image">
                   <img src="../BetterTrader.png" className="image-portfolio"/>
                </div>
                <div className="wapper-image">
                    <img src="../allup.PNG" className="image-portfolio"/>
                </div> */}
                
            </div>
            {/* <div className="image-grid">
                <img src="https://rscard.px-lab.com/html/img/uploads/portfolio/portfolio-thumb-08-289x281.jpg"/>
                <img src="https://rscard.px-lab.com/html/img/uploads/portfolio/portfolio-thumb-01-289x281.jpg"/>
            </div> */}
        </div>
      
    </section>
    )
}

export default PortfolioScreen
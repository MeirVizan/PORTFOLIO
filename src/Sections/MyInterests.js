/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState,useEffect } from "react";
import { useObserver } from "mobx-react-lite";
import { ShoppingCart, Flight, 
    Theaters,SportsTennis,Pool, DirectionsRun,Restaurant,Code} from '@material-ui/icons';


import GeneralStore  from "../Stores/GeneralStore";

const general =  GeneralStore;


const MyInterests = () => {
    return useObserver(() =>
    
    <section id="interests" className="section section-interests">
        <div className="animate-up animated">
            <h2 className="section-title">My Interests</h2>
            <div className="section-box">
                <ul className="interests-list">
                    <li>
                        <Code/>
                        <span >Coding</span>
                    </li>
                    <li>
                        <Theaters/>
                        <span>Watch Movies</span>
                    </li>
                    <li>
                        <Restaurant/>
                        <span>Restaurant</span>
                    </li>
                    <li>
                        <ShoppingCart/>
                        <span >Shopping</span>
                    </li>
                    <li>
                        <SportsTennis/>
                        <span>Playing Tennis</span>
                    </li>
                    <li>
                        <Flight/>
                        <span>Flight</span>
                    </li>
                    <li>
                        <Pool/>
                        <span>Swimming</span>
                    </li>
                </ul>
            </div>
            </div>
    </section>
    )
}

export default MyInterests
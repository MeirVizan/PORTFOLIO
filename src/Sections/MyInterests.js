/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState,useEffect } from "react";
import { useObserver } from "mobx-react-lite";
// import { ShoppingCart, Flight, 
//     Theaters,SportsTennis,Pool, DirectionsRun,Restaurant,Code} from '@material-ui/icons';

import CodeIcon from '@mui/icons-material/Code';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import FlightIcon from '@mui/icons-material/Flight';

import GeneralStore  from "../Stores/GeneralStore";

const general =  GeneralStore;


const MyInterests = () => {
    return useObserver(() =>
    
    <section id="interests" className="section section-interests">
        <div className="animate-up animated">
            <h2 className="section-title">My Hobbies</h2>
            <div className="section-box">
                <ul className="interests-list">
                    <li>
                        <CodeIcon/>
                        <span >Coding</span>
                    </li>
                    <li>
                        <CameraAltIcon/>

                        <span>photography</span>
                    </li>
                    <li>
                        <TravelExploreIcon/>
                        <span>Travel Explore</span>
                    </li>
                    <li>
                        <SportsGymnasticsIcon/>
                        <span >Sports</span>
                    </li>
                    <li>
                        <MusicNoteIcon/>
                        <span>Music</span>
                    </li>
                    <li>
                        <FlightIcon/>
                        <span>Flight</span>
                    </li>
                    
                </ul>
            </div>
            </div>
    </section>
    )
}

export default MyInterests
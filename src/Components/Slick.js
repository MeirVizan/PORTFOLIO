/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState,useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useObserver } from "mobx-react-lite";



import GeneralStore  from "../Stores/GeneralStore";



const Slick = (props) => {

    //   const settings = () =>  {
      
    //     return props.children;
    // }    
    //   console.log(props.children)

      

    return  useObserver(() =>
    
            
            <Slider   className={props.nameClass} {...props.settings}>
                    {props.children}
            </Slider>

    )
}

Slick.props ={
  settings:{
    dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
  }
}
export default Slick
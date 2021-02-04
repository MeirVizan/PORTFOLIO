/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useObserver } from "mobx-react-lite";
import { Dehaze} from '@material-ui/icons';


import $ from 'jquery';

import GeneralStore  from "../Stores/GeneralStore";

const general =  GeneralStore;


const  Header  = () => {
    const handleScroll = (ref)=> {
        let scrollTop = $(window).scrollTop()
       if(scrollTop > 180){
           $(".wapperHeader").addClass("active");
         }else{
        $(".wapperHeader").removeClass("active");
       }
       setActive()
    }

    const navRes = ()=> {
    
        if($(window).width() <= 980){
            $(".wapperHeader").addClass("active");
          }else{
         $(".wapperHeader").removeClass("active");
        }
     }

    useEffect(()=>{
       
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', navRes);
       $(".link-scroll").on('click',function() {
            let nameId = $(this).attr("data-to-link")
            $('html, body').animate({
                scrollTop: $(`#${nameId}`).offset().top - 20
            }, 500);
      });
    },[])

   const setActive =()=> {
    let scrollTop = $(window).scrollTop()
        $('.link-scroll').each(function( index ) {
            let nameId = $(this).attr("data-to-link")
            
            let offset = $(`#${nameId}`).offset().top - 100;
            let height = $(`#${nameId}`).height();
           if(offset  <= scrollTop && scrollTop <= offset + height){
            $(this).addClass('active');
           }else{
            $(this).removeClass('active');
           }
        });
     }
    return useObserver(() =>
    <header>
        <div className="head-bg">

        </div>
        <div className="wapperHeader">
            <div className='head-containter'>
                <a className="logo" href="#"><span>MV</span> card</a>
                <div className="nav-wrap">
                    <ul className="nav desktop">
                        <li><a href="#about" data-to-link='about' className="link-scroll" >ABOUT<span></span></a></li>
                        {/* <li><a href="#skills" data-to-link='skills' className="link-scroll" >SKILLS<span></span></a></li> */}
                        <li><a href="#portfolio" data-to-link='portfolio' className="link-scroll">PORTFOLIO<span></span></a></li>
                        <li><a href="#experience" data-to-link='experience' className="link-scroll">EXPERIENCE<span></span></a></li>
                        {/* <li><a href="#references" data-to-link='references' className="link-scroll">REFERENCES<span></span></a></li> */}
                        <li><a href="#interests" data-to-link='interests' className="link-scroll">interests<span></span></a></li>
                        {/* <li><a href="#contant" data-to-link='contant' className="link-scroll">CONTACT<span></span></a></li> */}
                    </ul>
                    <button className="toggleBtn" onClick={()=>general.onToggleNav()}>
                        <Dehaze/>
                    </button>
                </div>
                
            </div>
            {general.toggleNav &&
            <ul className="nav mob">
                        <li><a href="#about" data-to-link='about' className="link-scroll" >ABOUT<span></span></a></li>
                        {/* <li><a href="#skills" data-to-link='skills' className="link-scroll">SKILLS<span></span></a></li> */}
                        <li><a href="#portfolio" data-to-link='portfolio' className="link-scroll">PORTFOLIO<span></span></a></li>
                        <li><a href="#experience" data-to-link='experience' className="link-scroll">EXPERIENCE<span></span></a></li>
                        {/* <li><a href="#references" data-to-link='references' className="link-scroll">REFERENCES<span></span></a></li> */}
                        <li><a href="#interests" data-to-link='interests' className="link-scroll">interests<span></span></a></li>
                        {/* <li><a href="#contant" data-to-link='contant' className="link-scroll">CONTACT<span></span></a></li> */}
            </ul>}
        </div>
    </header>
        
    )
}

export default Header
/* eslint-disable react-hooks/exhaustive-deps */
import { useObserver } from "mobx-react-lite";
import React from "react";



import GeneralStore from "../Stores/GeneralStore";

const general =  GeneralStore;


const ContactUs = () => {
    return useObserver(() =>
    
    <section id="contant" className="section section-contant">
        <h2 className="section-title">Contant us</h2>
        <div className="row">
            <div className="section-box contact-form" >
                <h3>Feel free to contact me</h3>
                <form className="contactForm" action="php/contact_form.php" method="post">
                    <div className="input-field">
                        <input className="contact-name" type="text" name="name"/>
                            <span className="line"></span>
                        <label>Name</label>
                    </div>
                    <div className="input-field">
                        <input className="contact-email" type="email" name="email"/>
                            <span className="line"></span>
                        <label>Email</label>
                    </div>
                    <div className="input-field">
                        <input className="contact-subject" type="text" name="subject"/>
                            <span className="line"></span>
                        <label>Subject</label>
                    </div>
                    <div className="input-field">
                        <textarea className="contact-message" rows="4" name="message"></textarea>
                            <span className="line"></span>
                        <label>Message</label>
                    </div>
                        <span className="btn-outer btn-primary-outer ripple">
                            <input className="contact-submit btn btn-lg btn-primary" type="submit" value="Send"/>
                        </span>
                    <div className="contact-response"></div>
                </form>
            </div>
            <div className="section-box contact-info has-map" style={{minHeight: 488}}>
                <ul className="contact-list">
                    <li className="clearfix">
                    <strong>phone</strong>
                    <span><a href="tel:+12562548456">+972 58-4193521</a></span>
                    </li>
                    <li className="clearfix">
                    <strong>E-mail</strong>
                    <span><a href="mailto:robertsmith@company.com">meir15102@gmail.com</a></span>
                    </li>
                </ul>
                <div id="map"></div>

            </div>
        </div>
    </section>


    )
}

export default ContactUs
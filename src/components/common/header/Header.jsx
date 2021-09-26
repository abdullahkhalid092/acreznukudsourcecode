import React from "react";
import { Navbar } from "../../common";
import './Header.css';
import logo from './logo.jpeg';

function Header(){
    return(
        <section className="header">
            <section className="header-top">
                <section className="header-top_logo">
                    <a href='/' className="header-logo"> <img src = {logo} alt = "Logo"/> </a>
                </section>
                <section className="header-top_navbar">
                <section className="header-top_navigation">
                    <Navbar/>
                 </section>
                 <hr className="header-top_seperator"/>
                </section>
            </section>
            <section className="header-bottom">
                <section className="header-bottom_phone">
                    +92-3-111-222-349
                </section>
                <section className="header-bottom_email">
                    ceo@acreznukud.com
                </section>
            </section>
        </section>
    )
}
export default Header;

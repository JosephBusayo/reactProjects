import React from 'react';
import logo from '../images/logo192.png'

export default function Navbar(){
    return (
        <nav>
            <img src={logo} alt="React logo" className="nav--icon"/>
            <h3 className="nav--logo-text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    )
}
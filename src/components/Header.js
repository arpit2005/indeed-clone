import React from 'react'
import logo from '../assets/indeed-logo.svg'
import '../styles/Header.css'

function Header() {
    return (
        <div className="header">
            <div className="header-logo-container">
                <a href="/"><img src={logo} alt="logo" className="header-logo-image" /></a>
            </div>
            <div className="left-menu-options">
                <ul>
                    <li><a href="/jobs">Find jobs</a></li>
                    <li>Company reviews</li>
                    <li>Find salaries</li>
                </ul>
            </div>
            <div className="right-menu-options">
                <ul>
                    <li><i className="fa fa-envelope"></i></li>
                    <li><i className="fa fa-bell"></i></li>
                    <li><i className="fa fa-user"></i></li>
                </ul>
            </div>
            <span className="employer-post">Employers / Post Job</span>
        </div>
    )
}

export default Header

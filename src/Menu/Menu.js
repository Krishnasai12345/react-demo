import React from 'react';
import './Menu.css';
import Home from '../Home';
import About from '../About/About.js';
import Contact from '../Contact/Contact.js';
import {Link,HashRouter,Route,Routes } from 'react-router-dom';

const Menu = () => {
  return (
    <div className = "menu-block">
    <HashRouter>
    <ul  className ="menu">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
    </ul>
    <Routes>
        <Route path='home' element ={<Home/>}/>
        <Route path='about' element ={<About/>}/>
        <Route path='contact' element ={<Contact/>}/>
    </Routes>
    </HashRouter>
    </div>
  );
}

export default Menu;

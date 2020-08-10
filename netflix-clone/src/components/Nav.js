import React, { useEffect, useState } from 'react'
import logo from '../assets/netflix-logo.png';
import smile from '../assets/smile.jpg';
import './Nav.css';
function Nav() {
    const [show, handleShow] = useState(true);
    useEffect(() => {
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 100){
                handleShow(true);
            }else{
             handleShow(false);
            }
        });
        return() =>{
            window.removeEventListener("scroll");
        };
    }, []);
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img className="nav_logo"
            src={logo}
            alt="nav_log"
            />
            <div classNam="empty">

            </div>
            <img className="nav_avatar"
            src={smile}
            alt="nav_avatar"
            />
        </div>
    );
    

}

export default Nav
